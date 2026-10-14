# Module Summary — Module 0: Foundations

*Written via the `plan-module` skill. See "Module plan" in
`content_spec/SCHEMA.md` for how this file is used. Authored, not
auto-regenerated — reconcile by hand as this module's lessons get built.*

## Module identity

- **Title**: Foundations: Data Literacy, Environment & Version Control
- **module_number**: 0
- **Schedule**: 10 school days total — 8 content days, then 2 project days
  (the calendar's last 2 days). Every day below is a real day in the
  calendar, not an abstract session count.

## Objectives table

| # | Objective | Bloom's level | Scaffolding level |
|---|---|---|---|
| 1 | Define variable / data type / data structure; label 5 everyday examples by type | remember | modeled |
| 2 | Explain structured vs. unstructured data; explain, before hands-on use, why a verified fact and an unverified AI-generated claim differ | understand | modeled |
| 3 | Following step-by-step instructions: init a local git repo, create a matching GitHub remote, make/push a first tracked commit with a README | apply | guided |
| 4 | Independently inspect an unseen small dataset, classify ≥5/6 columns' types, articulate structured-vs-unstructured with justification | apply | independent |

**Two bridging gaps, flagged explicitly in the source `LECTURE_LAB_BRIEF.md`
— content must close these before the project, not leave them for the
project to test cold:**
- **AI-literacy**: objective 2 only reaches "understand, modeled" but the
  project (`§8`) requires *independently generating* 2 concrete risks + a
  personal double-check rule — "apply, independent." Needs **at least one
  additional worked example** modeling actually naming risks + a rule, not
  just explaining the distinction abstractly.
- **Critical-thinking**: same shape, one level smaller — objective 2 only
  reaches "understand, modeled" for structured-vs-unstructured reasoning;
  nothing promises practice *generating* collection-process concerns before
  the project's `§5` asks for ≥2 independently-identified ones. Needs a
  worked example of naming a real collection-process concern first.

## Project & rubric distillation

**Real-world project**: Set up a personal data-analytics dev environment
(terminal, git, GitHub, VS Code) and produce "Data Literacy Field Notes":
inspect a small, previously-unseen real dataset (OWID `co2-data`, CC BY 4.0)
entirely from the terminal — no code, no notebook — classify each column's
data type and whether the dataset is structured/unstructured, identify ≥2
collection-process concerns and turn the most checkable one into a
data-quality question, write a separate curiosity question, complete a
short AI-literacy reflection, keep a real terminal log, and push it all to
a new public GitHub repo with ≥2 well-messaged commits. Full detail:
`module_sources/module-0-foundations/PROJECT.md`.

**Do not reuse the project's own dataset (OWID `co2-data`) in any lecture
demo** — the project requires genuinely unseen data. Demo datasets: World
Bank World Development Indicators (CC BY 4.0) or OWID `energy-data` (CC BY)
— see `DATASET.md`.

**Demo commands are terminal-only** (`head`/`cut`/`grep`/`sort`) — no Python,
no notebook, no code authorship anywhere in this module's lectures or labs.

| Skill | Rubric ceiling this module | Assessment method |
|---|---|---|
| `general-programming-coding` | remember (label examples, no code) | guided worksheet + terminal walkthrough |
| `data-literacy` | apply, independent | independent dataset-inspection exercise |
| `git-version-control` | apply, guided | graded GitHub repo checklist |
| `ai-literacy` | understand→apply (see bridging gap above) | short written reflection |
| `curiosity` | apply, independent | reflection prompt review |
| `critical-thinking` | apply→independent (see bridging gap above) | structured worksheet |
| `terminal-command-line` | apply, guided | guided terminal walkthrough |

**Common project mistakes (preempt these in lecture/lab, not just penalize
in the rubric after):**
1. Listing column names without opening the raw file first.
2. One giant "final" commit instead of incremental history.
3. Misclassifying an ID-like or ZIP-code-like column as numeric.
4. A vague, unanswerable data-quality question ("is this data good?").

**Good vs. weak (from the brief's `good_vs_bad_criteria`)**: Good —
classifies ≥5/6 columns correctly; README states one specific, checkable
data-quality question; ≥2 descriptive commits. Weak — types guessed without
opening the data; a generic question; one dump commit with no message.

## Interview-prep bank

None supplied in the upstream brief for this module (`interview_prep: []`
in the source curriculum JSON) — this module's `tools`/`skills_tested` are
foundational setup skills, not yet interview-tested topics. Skip the
`interview_prep` slide for this module's lectures unless a later revision
of the brief adds entries here.

## Prerequisite skills

None — this is the first module of the program. Nothing to cross-check
against an ontology (none was supplied for this pilot).

**This module sets up** (heaviest-reuse skills, worth extra care since a
shaky foundation compounds): `git-version-control` (reused in Modules 1, 4,
8, 15/capstone) and `data-literacy` (reused in Modules 1, 2, 3, 5).
Immediate next module: Module 1, Programming Fundamentals — its content can
assume working git/GitHub habits and fluent data-type vocabulary; it
doesn't need to re-teach either from zero.

## Lecture & Lab Map

A real calendar, not every day a new-skill lecture: 4 `lecture_new` days,
1 `lecture_recall` (retrieval/gamified review) day, 2 `lab` days (formative
practice rehearsing project skills at reduced stakes, on a dataset that
isn't the project's own), 1 `lecture_recall`/launch day, then 2 `project`
days.

| Day | Session type | Title/topic | Objectives covered | Scaffolding level | Artifact |
|---|---|---|---|---|---|
| 1 | `lecture_new` | Dev Environment Setup + What's a Variable/Data Type/Data Structure? | 1 (remember, modeled) | modeled | deck: **built** — `lectures/dev-environment-data-fundamentals/` (lesson 1) |
| 2 | `lecture_new` | Git & GitHub, Guided Walkthrough | 3 (apply, guided) | guided | deck: **built** — `lectures/git-github-guided-walkthrough/` (lesson 2) |
| 3 | `lab` | Git & Terminal Guided Practice | 3 (rehearsed, guided) | guided | `labs/git-terminal-practice.md` (+ `.yaml`, worksheets built) |
| 4 | `lecture_new` | Structured vs. Unstructured Data | 2, first half (understand, modeled) | modeled† | deck: **built** — `lectures/structured-vs-unstructured-data/` (lesson 3) |
| 5 | `lecture_recall` | Recall + Gamified Review: Data Types & Git | 1, 2, 3 (retrieval practice) | guided | deck: **built** — `lectures/recall-review-data-types-git/` (lesson 4) |
| 6 | `lecture_new` | AI Literacy: Verified Fact vs. AI Claim (+ required worked example) | 2, second half + AI-literacy bridging gap (understand→apply, modeled→guided) | guided | deck: **built** — `lectures/ai-literacy-verified-fact-vs-claim/` (lesson 5) |
| 7 | `lab` | Column-Typing & Collection-Concern Practice | 4 preview + critical-thinking bridging gap (rehearsed, collaborative) | collaborative | `labs/column-typing-practice.md` (+ `.yaml`, worksheets built) |
| 8 | `lecture_recall` | Data Literacy Field Notes — Project Launch | 4 (hands off) + project brief/expectations | independent | deck: **built** — `lectures/data-literacy-field-notes-project-launch/` (lesson 6) |
| 9 | `project` | Project Day 1 | — | independent | `PROJECT.md` |
| 10 | `project` | Project Day 2 | — | independent | `PROJECT.md` |

† **Deliberate, not accidental**: Day 4's scaffolding level (`modeled`) is
*lower* than Day 2's (`guided`) immediately before it — this is a
legitimate reset, not drift: Day 4 introduces a genuinely new objective
(structured-vs-unstructured data) starting from zero, independent of how
far the git/GitHub objective had progressed. `qa/contrast_check.py`'s
scaffolding-ratchet warning will fire on this pair once both lessons are
built and logged — that's expected; bucket 15 in
`qa/instructional_review_checklist.md` is specifically written to treat
this as a case to judge, not to reflexively flag as an error.
