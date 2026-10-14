# Project — SQL & Relational Databases: Choose Your Domain

*Stubbed by the `plan-module` skill from Module 3's Lecture & Lab Map (see
`INSTRUCTOR_MODULE_SUMMARY.md`). See "The project" in
`content_spec/SCHEMA.md`. This is the module's one graded deliverable —
not a lab; formative practice lives in `labs/`.*

## Follows

Day 12's "Cumulative Recall" lecture (deck optional) — the calendar's last
content day before project days begin. There is no dedicated
project-launch lecture day this module (same precedent as Modules 1 and
2) — Sprint Day 1 (`project`, calendar Day 13) itself doubles as launch/
setup, per the project's own already-published `student/
CHECKLIST_TIMELINE.md`.

## Description

Students pick one of 4 real domains (`SCENARIOS.md` — finance & insurance,
healthcare operations, public sector, professional services), design their
own PostgreSQL schema (3 tables minimum, normalized to **at least 3NF**)
to answer that domain's **7 given business questions** — fixed per domain,
not student-authored, each engineered to require a specific technique: a
join, a left join, `GROUP BY`/`HAVING`, a CTE, a window function,
`COALESCE`, and a materialized view answering two further questions. They
load real per-domain data, write and hand-verify SQL answering all 7 (run
via `psql` or via Python/pandas through a given `starter/run_query.py`
helper — either is fine, but the analysis itself has to be real SQL;
pandas may only hold/visualize an already-computed result). They also
independently create and grant a read-only role, critique a deliberately
flawed schema (a different one than Day 11's lab used), run a real
`EXPLAIN ANALYZE` check on their own most complex query, and write up the
real tradeoffs between their normalized schema and a STAR (dimensional)
schema for the same data.

Runs as an explicit **7-day sprint** — PostgreSQL itself is the first
genuinely new installed tool in the program — following this module's
12-day content phase (see `student/CHECKLIST_TIMELINE.md` for the exact
day-by-day student-facing checklist: daily check-ins, real commit-history
exit criteria, a real backlog via `ABOVE_AND_BEYOND.md`). A separate
**anonymous peer schema & query review session** happens right after Day 7
(or in a separate session) — not part of the 7 days, and not a grading
mechanism (formative peer feedback, reviewed as an analyst who'd have to
extend the database, not as a grader; grade against `rubric.md`, not the
peer session).

## Day-by-day milestones (7 project days: Sprint Day 1-7 / calendar Day 13-19)

**Labeled by the sprint's own Day 1-7 numbering (matching `student/
CHECKLIST_TIMELINE.md` exactly, since that's the real document students
read) — the absolute calendar day is cross-referenced in parens, same
exception Modules 1 and 2's own `PROJECT.md` already established.**

| Sprint Day | Calendar Day | Goal |
|---|---|---|
| 1 | Day 13 | Setup + design, not SQL yet: repo created from the template (via "Use this template," not Fork), cloned; PostgreSQL running and `psql` confirmed actually connecting (a real `postgres=#` prompt seen, not assumed); `LICENSE`'s placeholder name replaced and committed; one domain chosen from `SCENARIOS.md`, the other 3 folders deleted locally, all 7 of that domain's given business questions read in full; `data/SOURCE.md` read for the chosen domain — what's real, what's genuinely messy, what the real foreign-key relationship actually is; `business_questions_and_schema.md`'s 3-table-minimum schema (normalized to at least 3NF, PKs/FKs/at least one real constraint per table) sketched and every one of the 7 given questions walked through against it — **before any `CREATE TABLE`**. |
| 2 | Day 14 | Schema critique, then build your real schema: `schema_critique.md` completed — a real, specific flaw identified in the given flawed schema (preempts common mistake #1, no foreign keys at all); `schema.sql` written and run for real via `psql` — 3+ tables, normalized to at least 3NF, real PKs/FKs, at least one `NOT NULL`/`CHECK` constraint per table (preempts common mistake #4). Exit criterion: a real, descriptive commit. |
| 3 | Day 15 | Load your data, answer Q1 and Q2: real per-table CSVs loaded (`\copy`/`INSERT`), row counts confirmed against the source CSVs; Question 1 (join) and Question 2 (left join) answered in `queries.sql`, both **spot-checked against a small, hand-built known-answer sample** before trusting the full result (preempts common mistakes #2 and #3). Exit criterion: at least 2 real commits pushed by end of Day 3, `git log --oneline` telling a real story. |
| 4 | Day 16 | Answer Q3 and Q4: `GROUP BY`+`HAVING` (Q3) and a CTE (Q4) answered, spot-checked against a known-answer sample, same discipline as Sprint Day 3. |
| 5 | Day 17 | Answer Q5 and Q6, then the read-only role: window function (Q5) and `COALESCE` (Q6) answered and spot-checked — reaching for pandas instead of real SQL here is explicitly not allowed even via `run_query.py` (preempts common mistake #5); `role_setup.md` completed — a real read-only role created, granted, and verified (including confirming a write is actually rejected), with the real commands used written up. |
| 6 | Day 18 | Question 7 (materialized view) and the performance check: `CREATE MATERIALIZED VIEW` for real, then the domain's 2 follow-up queries run **against the view**, not recomputed from base tables; `query_performance.md` completed — a real `EXPLAIN ANALYZE` run against the student's own most complex query, with a genuine written assessment of the plan. |
| 7 | Day 19 | Schema tradeoffs, finish, verify, submit: the 3NF-vs-STAR tradeoff section in `business_questions_and_schema.md` completed, reasoned against the student's own actual tables and queries, not a generic definition of either; every query in `queries.sql` re-run clean against the real schema, no leftover scratch queries; `README.md` accurate, repo confirmed public; final self-check against `CHECKLIST_TIMELINE.md`; real, incremental commit history pushed (not one giant final commit). |

## Graded against (`competency_assessments`)

All 4 of the module's skills, all Technical Skills — no Professional or AI
Skills category is graded this module. See `INSTRUCTOR_MODULE_SUMMARY.md`'s
rubric distillation table for the per-skill assessment method/ceiling, and
`instructor/rubric.md` (source repo) for the full 4-level-per-skill
grading detail.

```yaml
competency_assessments:
  - sql
  - relational-databases
  - database-administration
  - data-modeling
```

## Good vs. weak

**Good**: schema has correct primary/foreign keys and at least one
`NOT NULL`/`CHECK` constraint; all 7 queries return correct, spot-checked
results; at least one query uses a CTE for readability; the read-only role
is independently created and its rejection of a real write attempt is
actually documented, not just claimed. **Weak**: schema has no foreign
keys (unenforced relationships); a query "looks right" but was never
checked against known values; joins silently produce duplicated rows due
to an unfiltered many-to-many relationship; the STAR tradeoff answer is
generic/textbook rather than reasoned against the student's actual schema.

**Note on grading**: students each chose their own domain and designed
their own schema — there is no single correct schema to grade against.
Grade whether the design genuinely fits the real relationships in *that*
domain's data (`data/SOURCE.md`), and whether all 7 of that domain's given
questions (`SCENARIOS.md`) are genuinely answered — not whether it matches
any particular table layout. The 7 questions themselves are given, not
student-authored this round, specifically so difficulty stays consistent
regardless of which domain someone picks — don't grade whether a student
"asked a good question."

## Common mistakes to preempt

Straight from `INSTRUCTOR_MODULE_SUMMARY.md` — every one of these should
already have been rehearsed by a lecture or lab earlier in the calendar,
at reduced stakes, before the project asks for it unguided:

1. Designing tables with no foreign keys, so nothing actually enforces the
   relationships (Day 1's normalization lecture, Day 11's schema-critique
   lab).
2. Writing a join that silently produces duplicate rows because of an
   unfiltered many-to-many relationship (Days 3-4's join lectures).
3. Trusting a query because it "looks right" without ever checking it
   against known values (modeled throughout Days 3-10's guided reps).
4. Skipping `NOT NULL`/`CHECK` constraints that would have caught bad data
   on insert (Day 2's constraints lecture).
5. Using pandas (`.describe()`, `.groupby()`, a merge) to answer a
   business question instead of writing the equivalent SQL, even when
   running queries through `run_query.py` (named explicitly in Day 9's
   lecture alongside `COALESCE`/materialized views).

## Above & Beyond (backlog, not required)

Detailed in `student/ABOVE_AND_BEYOND.md`: extending the schema to 4-5
tables with a genuine additional relationship; actually building the STAR
schema from the tradeoff writeup and rewriting 1-2 queries against it;
taking `query_performance.md` one step further with a real, measured
optimization (an index or rewrite); using DBeaver to generate and export a
visual ERD of the student's own schema; and the given-code
`above_and_beyond/module4_preview.py` (a working Module 4 Python/database-
connectivity preview, explicitly given code per the code-authorship rule,
never something a student is asked to author) with a short written
reflection.
