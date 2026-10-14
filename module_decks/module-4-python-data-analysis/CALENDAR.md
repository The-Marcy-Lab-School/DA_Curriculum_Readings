# Module 4 Calendar — Python for Data Analysis & Database Connectivity

Quick-reference for instructors: which lecture happens on which day, in
order, and what it's actually called. Full rationale/objectives/rubric
live in
`module_sources/module-4-python-data-analysis/INSTRUCTOR_MODULE_SUMMARY.md`
— this file is just the flow, kept at the module root for fast lookup.
**Hand-reconciled alongside that file, not auto-regenerated** — update
this whenever a deck is built/renamed/resequenced.

| Day | Type | Name | Builds on | Status |
|---|---|---|---|---|
| 1 | Lecture (new) | DataFrame ↔ SQL Table: Same Data, Two Shapes | Module 3's own database (no new prereq gap) | **Built** — `lectures/dataframe-and-sql-table-same-data-two-shapes/` |
| 2 | Lecture (new) | Connecting Two Ways: `psycopg2` & SQLAlchemy → pandas | Day 1 | **Built** — `lectures/connecting-two-ways-psycopg2-and-sqlalchemy-to-pandas/` |
| 3 | Lecture (new) | `psycopg2` vs. SQLAlchemy: Real Tradeoffs | Day 2 | **Built** — `lectures/psycopg2-vs-sqlalchemy-real-tradeoffs/` |
| 4 | Lecture (new) | AI-Assisted Code Review: Find the Bug, With a Partner | Days 2-3 | **Built** — `lectures/ai-assisted-code-review-find-the-bug-with-a-partner/` |
| 5 | Project | Sprint Day 1 — Setup (repo, env, `DATABASE_URL`, pick cleaning file) | `PROJECT.md` | See `PROJECT.md` |
| 6 | Project | Sprint Day 2 — Connect both ways, compare tradeoffs | `PROJECT.md` | See `PROJECT.md` |
| 7 | Project | Sprint Day 3 — AI-assisted coding exercise | `PROJECT.md` | See `PROJECT.md` |
| 8 | Project | Sprint Day 4 — Independent data-quality cleaning | `PROJECT.md` | See `PROJECT.md` |
| 9 | Project | Sprint Day 5 — Finish, verify, submit | `PROJECT.md` | See `PROJECT.md` |
| (after 9) | Event, not a school day | Peer data-quality-log review | Day 9 | Scheduled right after Day 9 (or a separate session) |

**No labs this module** — the project's own 5-day structure already
provides the guided→independent progression this module's objectives
need on its own; a separate lab day would be redundant rather than
additive. See "No labs this module" in
`INSTRUCTOR_MODULE_SUMMARY.md`'s "Module identity" section for the full
reasoning.

**User-directed day count, resolved live**: the source material was
internally ambiguous about total length (`_brief.json`'s
`duration_weeks: 1.0` vs. `content_weeks: 3.0`, and `overview.md`'s own
"5 days, no change recommended" which was actually describing just the
project sprint). Asked the user directly; **9 days total (4 lecture + 5
project)** was chosen and reconfirmed against the fresh 2026-09
`module_sources/Module4_PythonData/` drop — narrow enough to match how
little of this module's content is genuinely new (pandas itself doesn't
need re-teaching, per `overview.md`'s own sequencing finding — see
`INSTRUCTOR_MODULE_SUMMARY.md`'s "No labs this module").

**Reconciled 2026-09-09**: Day 3 was still marked "Not yet built" here
even though its deck (`deck_spec.yaml`, `.pptx`, notebooks, `qa_report.md`)
already existed on disk — fixed above. Day 4 (AI-Assisted Code Review) is
genuinely still unbuilt.
