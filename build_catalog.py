#!/usr/bin/env python3
"""Regenerate the root landing page (index.html) and the README.md readings
table from every reading.meta.json sidecar in the repo. Run this any time a
reading is added/moved/retagged — do not hand-edit the generated sections.

    python3 build_catalog.py

Grouping is by taxonomy.json skill tag, deliberately NOT by module folder —
module order/grouping can change later, tags shouldn't be coupled to it.
"""
import json
from pathlib import Path

ROOT = Path(__file__).parent
PAGES_BASE = "https://the-marcy-lab-school.github.io/DA_Curriculum_Readings"
TABLE_START = "<!-- READINGS_TABLE_START -->"
TABLE_END = "<!-- READINGS_TABLE_END -->"


def load_taxonomy():
    return json.loads((ROOT / "taxonomy.json").read_text())["tags"]


def find_readings():
    readings = []
    for meta_path in ROOT.glob("**/reading.meta.json"):
        meta = json.loads(meta_path.read_text())
        rel_dir = meta_path.parent.relative_to(ROOT)
        meta["url"] = f"{PAGES_BASE}/{rel_dir.as_posix()}/"
        meta["rel_dir"] = rel_dir.as_posix()
        readings.append(meta)
    return sorted(readings, key=lambda r: r.get("title", ""))


def build_readme_table(readings, taxonomy):
    if not readings:
        return "_No readings published yet._"
    lines = ["| Reading | Skill area(s) | Est. time | Audience | Link |",
             "|---|---|---|---|---|"]
    for r in readings:
        tags = ", ".join(taxonomy.get(t, {}).get("label", t) for t in r.get("tags", []))
        lines.append(
            f"| {r['title']} | {tags} | {r.get('time_minutes','?')} min | "
            f"{r.get('audience','data')} | [Open]({r['url']}) |"
        )
    return "\n".join(lines)


def update_readme(table_md):
    readme_path = ROOT / "README.md"
    if readme_path.exists():
        content = readme_path.read_text()
    else:
        content = (
            "# Data Analytics Fellowship — Interactive Readings\n\n"
            "Self-contained, standalone interactive readings, hosted on GitHub Pages, "
            "meant to be worked through before hands-on lecture practice on the same "
            "concept. Grouped by skill area below (not by module — module order can "
            "change; each reading lives at a stable URL regardless).\n\n"
            f"{TABLE_START}\n{TABLE_END}\n"
        )
    if TABLE_START not in content:
        content += f"\n\n{TABLE_START}\n{TABLE_END}\n"
    before = content.split(TABLE_START)[0]
    after = content.split(TABLE_END)[1]
    new_content = f"{before}{TABLE_START}\n{table_md}\n{TABLE_END}{after}"
    readme_path.write_text(new_content)


def build_landing_page(readings, taxonomy):
    by_tag = {}
    for r in readings:
        for t in r.get("tags", []):
            by_tag.setdefault(t, []).append(r)

    sections = []
    for tag_id, info in taxonomy.items():
        items = by_tag.get(tag_id, [])
        if not items:
            continue
        cards = "\n".join(
            f'<a class="mlrk-card mlrk-reading-card" href="{r["url"]}">'
            f'<h3>{r["title"]}</h3>'
            f'<p class="mlrk-small">{r.get("time_minutes","?")} min &middot; {r.get("audience","data")}</p>'
            f"</a>"
            for r in sorted(items, key=lambda r: r["title"])
        )
        sections.append(
            f'<section class="mlrk-section"><h2>{info["label"]}</h2>'
            f'<p class="mlrk-small">{info["description"]}</p>'
            f'<div class="mlrk-grid">{cards}</div></section>'
        )

    body = "\n".join(sections) if sections else '<p class="mlrk-small">No readings published yet.</p>'

    html = f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Data Analytics Fellowship — Readings</title>
<link rel="stylesheet" href="assets/brand-tokens.css">
<link rel="stylesheet" href="assets/reading-kit.css">
<style>.mlrk-reading-card{{text-decoration:none;display:block}}.mlrk-reading-card h3{{color:var(--mlrk-heading-on-light);margin:0 0 .3rem;font-family:var(--mlrk-font-heading)}}</style>
</head><body>
<header class="mlrk-header"><div class="mlrk-wrap">
<div class="mlrk-eyebrow">Data Analytics Fellowship</div>
<h1>Interactive Readings</h1>
<p class="mlrk-lead">Standalone readings, grouped by skill — work through one before its matching hands-on lecture practice.</p>
</div></header>
<main class="mlrk-main"><div class="mlrk-wrap">
{body}
</div></main>
<footer class="mlrk-footer">This page is the property of The Marcy Lab School and Angelica Spratley. Contact the owners before republishing, reusing, or monetizing this content elsewhere.</footer>
</body></html>
"""
    (ROOT / "index.html").write_text(html)


def main():
    taxonomy = load_taxonomy()
    readings = find_readings()
    build_landing_page(readings, taxonomy)
    update_readme(build_readme_table(readings, taxonomy))
    print(f"Built landing page + README table for {len(readings)} reading(s).")


if __name__ == "__main__":
    main()
