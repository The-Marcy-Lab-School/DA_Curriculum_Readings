#!/usr/bin/env python3
"""Pulls reading scores from every student's private submission repo and
builds a local gradebook. Run this yourself, on your own machine, whenever
you want fresh numbers — nothing here runs automatically or gets pushed
anywhere public.

Setup (one time):
1. Create a GitHub personal access token (fine-grained, scoped to read
   issues on the specific student repos you're a collaborator on — or a
   classic token with just "repo" scope if fine-grained per-repo scoping
   is impractical for a whole cohort). Settings -> Developer settings ->
   Personal access tokens, on github.com.
2. Put it in your shell environment, never in a file that gets committed:
       export GITHUB_TOKEN="ghp_..."
3. Copy roster.example.json to roster.json (already gitignored) and fill
   in every student's real GitHub username. Only set "repo" for a student
   if they didn't use the default "reading-submissions" name.

Usage:
    export GITHUB_TOKEN="ghp_..."
    python3 instructor-tools/aggregate_submissions.py instructor-tools/roster.json

Output: two files next to the roster (also gitignored) —
    gradebook.csv   — one row per student, per reading, best-of-2 score
    skill_summary.csv — average class performance per skill tag

The "best of 2 attempts" cap is enforced HERE, at aggregation time, not
client-side — a student's browser can't be trusted to cap itself, so this
script sorts each student's issues for a reading by when they were opened
and only ever counts the first two, taking whichever scored higher.
"""
import csv
import json
import os
import re
import sys
import urllib.request
import urllib.error

DEFAULT_REPO_NAME = "reading-submissions"
API_BASE = "https://api.github.com"


def api_get(path, token):
    req = urllib.request.Request(API_BASE + path, headers={
        "Authorization": "Bearer " + token,
        "Accept": "application/vnd.github+json",
        "User-Agent": "marcy-reading-aggregator",
    })
    with urllib.request.urlopen(req, timeout=15) as resp:
        return json.loads(resp.read().decode("utf-8")), resp.headers


def fetch_all_issues(username, repo, token):
    """All issues (open + closed), oldest first, handling pagination."""
    issues, page = [], 1
    while True:
        path = f"/repos/{username}/{repo}/issues?state=all&per_page=100&page={page}&sort=created&direction=asc"
        try:
            batch, _ = api_get(path, token)
        except urllib.error.HTTPError as e:
            if e.code == 404:
                print(f"  [warn] {username}/{repo} not found or you lack access — skipping", file=sys.stderr)
                return []
            raise
        if not batch:
            break
        issues.extend(batch)
        if len(batch) < 100:
            break
        page += 1
    return issues


def extract_payload(issue_body):
    m = re.search(r"```json\s*(\{.*?\})\s*```", issue_body or "", re.S)
    if not m:
        return None
    try:
        return json.loads(m.group(1))
    except json.JSONDecodeError:
        return None


def main():
    if len(sys.argv) < 2:
        print("Usage: aggregate_submissions.py <roster.json>", file=sys.stderr)
        sys.exit(1)
    token = os.environ.get("GITHUB_TOKEN")
    if not token:
        print("Set GITHUB_TOKEN in your environment first.", file=sys.stderr)
        sys.exit(1)

    roster = json.loads(open(sys.argv[1], encoding="utf-8").read())
    out_dir = os.path.dirname(os.path.abspath(sys.argv[1]))

    # (username, readingId) -> list of {earned, possible, pct, created_at}
    per_reading_attempts = {}
    student_readings = {}  # username -> {readingId: tags}

    for student in roster:
        username = student["username"]
        repo = student.get("repo") or DEFAULT_REPO_NAME
        print(f"Fetching {username}/{repo} ...")
        issues = fetch_all_issues(username, repo, token)
        for issue in issues:
            payload = extract_payload(issue.get("body", ""))
            if not payload or "readingId" not in payload or "score" not in payload:
                continue
            key = (username, payload["readingId"])
            per_reading_attempts.setdefault(key, []).append({
                "earned": payload["score"]["earned"],
                "possible": payload["score"]["possible"],
                "pct": payload["score"]["pct"],
                "created_at": issue.get("created_at", ""),
            })
            student_readings.setdefault(username, {})[payload["readingId"]] = payload.get("tags") or []

    gradebook_rows = []
    tag_scores = {}  # tag -> list of pct

    for (username, reading_id), attempts in per_reading_attempts.items():
        attempts.sort(key=lambda a: a["created_at"])
        first_two = attempts[:2]
        best = max(first_two, key=lambda a: a["pct"])
        extra = len(attempts) - len(first_two)
        gradebook_rows.append({
            "username": username,
            "reading_id": reading_id,
            "attempts_made": len(attempts),
            "attempts_counted": len(first_two),
            "extra_ignored": extra,
            "best_earned": best["earned"],
            "best_possible": best["possible"],
            "best_pct": best["pct"],
        })
        for tag in student_readings.get(username, {}).get(reading_id, []):
            tag_scores.setdefault(tag, []).append(best["pct"])

    gradebook_rows.sort(key=lambda r: (r["username"], r["reading_id"]))
    gradebook_path = os.path.join(out_dir, "gradebook.csv")
    with open(gradebook_path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=list(gradebook_rows[0].keys()) if gradebook_rows else
                            ["username", "reading_id", "attempts_made", "attempts_counted",
                             "extra_ignored", "best_earned", "best_possible", "best_pct"])
        w.writeheader()
        w.writerows(gradebook_rows)
    print(f"Wrote {gradebook_path} ({len(gradebook_rows)} rows)")

    skill_rows = [
        {"skill_tag": tag, "readings_counted": len(pcts), "avg_pct": round(sum(pcts) / len(pcts), 1)}
        for tag, pcts in sorted(tag_scores.items())
    ]
    skill_path = os.path.join(out_dir, "skill_summary.csv")
    with open(skill_path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=["skill_tag", "readings_counted", "avg_pct"])
        w.writeheader()
        w.writerows(skill_rows)
    print(f"Wrote {skill_path} ({len(skill_rows)} rows)")


if __name__ == "__main__":
    main()
