#!/usr/bin/env python3
"""Extracts each module's graded competencies from module_decks/*/PROJECT.md
(the `competency_assessments` list) cross-referenced with the matching
"Skill | Rubric ceiling | Assessment method" table in that module's
INSTRUCTOR_MODULE_SUMMARY.md (PROJECT.md itself points there for detail).

This writes skills_raw.json — a REFERENCE file, not what readings actually
use. The raw "assessment method" column is instructor-rubric shorthand
("guided coding exercise + trace review"), not something to paste in front
of students. skills.json (hand-curated, one clean name + a genuinely
readable definition per skill) is what reading.meta.json/the visible
"Skills you'll practice" callout/submission payloads actually reference.

Workflow when a new deck lands:
    1. Run this script — it regenerates skills_raw.json from the new deck.
    2. Diff it against the previous skills_raw.json to see what's new.
    3. Hand-write (or have an agent draft, then review) a name + a plain-
       language definition for each new slug directly into skills.json.
    Never skip step 3 — a mechanically-generated definition reads like
    pasted rubric jargon, not something a student should see.
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).parent
DECKS_DIR = ROOT / "module_decks"


def extract_competency_slugs(project_md_text):
    m = re.search(r"```yaml\s*\ncompetency_assessments:\s*\n((?:\s*-\s*\S+\s*\n?)+)```", project_md_text)
    if not m:
        return []
    return re.findall(r"-\s*(\S+)", m.group(1))


def extract_rubric_table(summary_md_text):
    """Returns {slug: {ceiling, method}} from the 'Skill | ... | Assessment
    method' table. Handles the module-3 variant header
    ('Rubric ceiling this module (Meets)') too."""
    m = re.search(r"\|\s*Skill\s*\|.*?\n\|[-|\s]+\n((?:\|.+\n?)+)", summary_md_text)
    if not m:
        return {}
    rows = {}
    for line in m.group(1).splitlines():
        if not line.strip().startswith("|"):
            continue
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if len(cells) < 3:
            continue
        slug = cells[0].strip("`")
        rows[slug] = {"ceiling": cells[1], "method": cells[2]}
    return rows


def main():
    out = {}
    for module_dir in sorted(DECKS_DIR.glob("module-*")):
        project_path = module_dir / "PROJECT.md"
        summary_path = module_dir / "INSTRUCTOR_MODULE_SUMMARY.md"
        if not project_path.exists() or not summary_path.exists():
            continue
        slugs = extract_competency_slugs(project_path.read_text(encoding="utf-8"))
        rubric = extract_rubric_table(summary_path.read_text(encoding="utf-8"))
        for slug in slugs:
            entry = out.setdefault(slug, {"modules": [], "ceiling_by_module": {}, "method_by_module": {}})
            if module_dir.name not in entry["modules"]:
                entry["modules"].append(module_dir.name)
            if slug in rubric:
                entry["ceiling_by_module"][module_dir.name] = rubric[slug]["ceiling"]
                entry["method_by_module"][module_dir.name] = rubric[slug]["method"]

    (ROOT / "skills_raw.json").write_text(json.dumps({
        "_comment": "Reference only — see this file's own script header. "
                    "skills.json is the hand-curated file readings actually use.",
        "skills": out,
    }, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote skills_raw.json — {len(out)} distinct competency slugs across "
          f"{len(list(DECKS_DIR.glob('module-*')))} decks")


if __name__ == "__main__":
    main()
