#!/usr/bin/env python3
"""Has a module's teaching material changed since its readings were built?

A DA reading is built from three live sources (see SKILL.md, "Source of
truth"): the Google Slides decks in Drive, the instructor code-along/labs
repo, and the instructor projects repo. All three change without this repo
knowing. This script compares their current state against the baseline
recorded in a quest manifest (curriculum/mod<N>-quests.json, `_sources`) and
lists exactly what moved, so a build starts from what is taught today.

It also keeps a sparse, read-only local copy of the module's folder from both
repos under `.sources/` (gitignored). Those repos are PRIVATE and hold answer
keys; this repo is PUBLIC. Read from `.sources/`, never copy from it into a
reading, and never commit it.

Drive cannot be reached from a script here (no credentials), so the deck half
takes a file: list the module's Drive deck folder with the Google Drive
connector (search_files, parentId = the manifest's `drive_folder`), save the
JSON result to a scratch file, and pass it as --drive-listing.

Usage:
    python3 qa/check_sources.py curriculum/mod1-quests.json
    python3 qa/check_sources.py curriculum/mod1-quests.json --drive-listing /path/listing.json
    python3 qa/check_sources.py curriculum/mod1-quests.json --drive-listing /path/listing.json --record

--record writes the current state as the new baseline. Run it only after the
readings have actually been rebuilt or re-checked against that state, since
the baseline means "the readings match this".

Exit status: 0 when nothing changed, 1 when something changed or no baseline
exists yet. Stdlib + the `gh` CLI only.
"""
import argparse
import json
import subprocess
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCES_DIR = ROOT / ".sources"


def gh(*args):
    out = subprocess.run(["gh", *args], capture_output=True, text=True)
    if out.returncode != 0:
        raise RuntimeError(f"gh {' '.join(args)} failed: {out.stderr.strip()}")
    return out.stdout.strip()


def head_sha(repo, branch):
    return gh("api", f"repos/{repo}/commits/{branch}", "--jq", ".sha")


def changed_files(repo, base, head, path):
    """Files under `path` that differ between two commits."""
    names = gh("api", f"repos/{repo}/compare/{base}...{head}", "--jq", ".files[].filename")
    return [n for n in names.splitlines() if n.startswith(path.rstrip("/") + "/")]


def sync_local_copy(name, repo, branch, path):
    """Sparse, shallow checkout of just this module's folder."""
    dest = SOURCES_DIR / name
    if not (dest / ".git").exists():
        dest.parent.mkdir(parents=True, exist_ok=True)
        subprocess.run(["gh", "repo", "clone", repo, str(dest), "--",
                        "--depth", "1", "--filter=blob:none", "--sparse", "--branch", branch],
                       check=True, capture_output=True)
    subprocess.run(["git", "-C", str(dest), "sparse-checkout", "add", path], check=True, capture_output=True)
    subprocess.run(["git", "-C", str(dest), "fetch", "--depth", "1", "origin", branch], check=True, capture_output=True)
    subprocess.run(["git", "-C", str(dest), "reset", "--hard", f"origin/{branch}"], check=True, capture_output=True)
    return dest / path


def load_drive_listing(p):
    data = json.loads(Path(p).read_text())
    files = data.get("files", data if isinstance(data, list) else [])
    return {f["id"]: {"title": f["title"], "modifiedTime": f["modifiedTime"]}
            for f in files if f.get("mimeType") == "application/vnd.google-apps.presentation"}


def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("manifest")
    ap.add_argument("--drive-listing", help="JSON saved from a Drive search_files call on the deck folder")
    ap.add_argument("--record", action="store_true", help="write the current state as the new baseline")
    ap.add_argument("--no-sync", action="store_true", help="skip refreshing the .sources/ copies")
    args = ap.parse_args()

    manifest_path = Path(args.manifest)
    manifest = json.loads(manifest_path.read_text())
    src = manifest["_sources"]
    drift = False

    for name, r in src["repos"].items():
        head = head_sha(r["repo"], r["branch"])
        base = r.get("built_against_sha")
        print(f"\n[{name}] {r['repo']} : {r['path']}")
        if not base:
            print(f"  no baseline recorded. Current HEAD {head[:10]}. Treat every file as new.")
            drift = True
        elif base == head:
            print(f"  unchanged since {base[:10]}")
        else:
            files = changed_files(r["repo"], base, head, r["path"])
            if files:
                drift = True
                print(f"  {len(files)} file(s) changed under this module since {base[:10]} (now {head[:10]}):")
                for f in files:
                    print(f"    {f}")
            else:
                print(f"  repo moved {base[:10]} -> {head[:10]}, but nothing under this module changed")
        if not args.no_sync:
            local = sync_local_copy(name, r["repo"], r["branch"], r["path"])
            print(f"  local read-only copy: {local.relative_to(ROOT)}")
        r["_head"] = head

    drive = src["drive"]
    print(f"\n[drive] folder {drive['folder_id']} ({drive['folder_name']})")
    current = load_drive_listing(args.drive_listing) if args.drive_listing else None
    recorded = drive.get("built_against") or {}
    if current is None:
        print("  not checked: pass --drive-listing (see this script's docstring)")
        drift = True
    elif not recorded:
        print(f"  no baseline recorded. {len(current)} deck(s) in the folder. Treat every deck as new.")
        drift = True
    else:
        for fid, meta in sorted(current.items(), key=lambda kv: kv[1]["title"]):
            old = recorded.get(fid)
            if old is None:
                drift = True
                print(f"  NEW      {meta['title']}  ({meta['modifiedTime']})")
            elif old["modifiedTime"] != meta["modifiedTime"]:
                drift = True
                print(f"  EDITED   {meta['title']}  ({old['modifiedTime']} -> {meta['modifiedTime']})")
        for fid, old in recorded.items():
            if fid not in current:
                drift = True
                print(f"  REMOVED  {old['title']}")
        if not drift:
            print("  no deck edited since the baseline")

    if args.record:
        if current is None:
            sys.exit("--record needs --drive-listing, so the deck baseline is recorded together with the repos")
        for r in src["repos"].values():
            r["built_against_sha"] = r.pop("_head")
        drive["built_against"] = current
        src["recorded_on"] = date.today().isoformat()
        manifest_path.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n")
        print(f"\nBaseline recorded in {manifest_path}.")
        return 0

    for r in src["repos"].values():
        r.pop("_head", None)
    print("\nDRIFT: rebuild or re-check the affected readings before shipping." if drift
          else "\nNo drift. Readings match their sources.")
    return 1 if drift else 0


if __name__ == "__main__":
    sys.exit(main())
