# Lab — Independent Schema Critique & Read-Only Role

*Stubbed by the `plan-module` skill from Module 3's Lecture & Lab Map (see
`module_sources/module-3-sql-relational-databases/INSTRUCTOR_MODULE_SUMMARY.md`).
See "Labs" in `content_spec/SCHEMA.md` — this is formative practice, not
the graded project
(`module_sources/module-3-sql-relational-databases/PROJECT.md`).*

## Scenario

You are the first data hire at a small independent record label. The
catalog database was built by a colleague who has since left, and nobody
has ever looked at it closely. Your manager asks you to say honestly what
is wrong with it and then fix it — and separately, to stand up a read-only
account for the analyst starting Monday and prove a write from it is
actually rejected. No template for either job. See the `scenario` field in
`independent-schema-critique-role-setup.yaml`, which is the version Fellows
actually read.

## Time budget

**~155 minutes across 2 days** — 10 min instructor framing, 130 min
collaborative group work, 15 min full-class shareout
(`estimated_minutes` in the `.yaml`). The optional stretch step (default
privileges vs. tomorrow's table) is a further ~10 minutes and is
deliberately excluded from that total.

**Decision (2026-08-31): split into 2 days.** Real timing/content review
found this lab's honest scope exceeds the 45-120 minute single-day target
`content_spec/SCHEMA.md`'s Labs section now sets. User chose the 2-day
split over trimming content, since the alternative (cutting the
rebuild-and-reload pair) would have cost the module its only hands-on rep
of Day 2's constraints actually firing (23505 / 23503 / 23514 / 23502) — a
real pedagogical loss, not a clean trim. Split at the natural seam between
"Independent: Write the Critique" and "Independent: Rebuild the Schema
Correctly": **Day 11 is evaluate** (setup, load, prove a flaw, write the
critique, ~65 min), **Day 12 is build** (rebuild, reload, prove the
constraints, create and test the role, ~90 min) — see each step's own
`day:` field in the `.yaml`. Every Module 3 day from the old Day 12
onward shifted back by one to make room; reconciled in `CALENDAR.md`,
`INSTRUCTOR_MODULE_SUMMARY.md`, and `PROJECT.md`'s day-by-day milestones.

## Follows

Day 1's "Relational Thinking & Normalization" lecture and Day 2's "Your
First Database: `psql`, Tables & Constraints" lecture — this lab is the
independent escalation of both, held right before the project's own
version of the same two skills.

## Why this lab exists

This is the module's own bridging requirement for Objective 5
(`INSTRUCTOR_MODULE_SUMMARY.md`): Objective 5 is `evaluate`+`independent`
— the module's single highest-Bloom's, highest-independence objective —
requiring students to, without a template, evaluate a provided schema for
flaws **and** independently create and correctly grant a read-only
PostgreSQL role. Nothing earlier in the calendar rehearses either skill at
anywhere near that independence level (Day 1 only asks students to
*explain* PK/FK/normalization from an already-normalized ERD; Day 2's
database creation is template-guided). Per `LECTURE_LAB_BRIEF.md`'s own
explicit instruction, this needs a real, separate-from-the-project
exercise first — using a **different** flawed schema than `student/
starter/schema_critique.md`'s own project version, so the project's own
critique exercise is still genuinely new to students when Sprint Day 2
asks for it.

## Scaffolding level

`independent` — no template, no partner scaffolding during the actual
critique/role-creation work itself, matching `PROJECT.md`'s own Sprint Day
2/5 ask at reduced (formative, ungraded) stakes.

## Dataset / use case

A deliberately flawed schema built from this module's own lecture/lab data
source, **not** the project's own 4 domains (finance_insurance,
healthcare_operations, public_sector, professional_services —
`data/SOURCE.md`), per `LECTURE_LAB_BRIEF.md`'s explicit "never reuse the
project's own validated datasets in a lecture/lab demo" rule. **As
authored**, this is a small hand-built `record_store` catalog in the
Chinook mould (fictional record label — this module's named synthetic
backup option), deliberately standalone from the module's cumulative
`nyc_restaurants` database, with **four real planted flaws**: no primary
key on any table, no foreign key anywhere (tables point at each other by
copied text), `albums.artist_country` as a transitive 3NF violation, and
`tracks.genres` as a comma-separated 1NF repeating group. A Fellow only
has to name and justify **one** to meet the bar. Two of those directly
mirror `common_project_mistakes` #1 (no foreign keys) and the module's
Day 1 normalization content; a negative `unit_price` that loads without
complaint covers the constraints angle from Day 2.

## Day-by-day milestones (2 days: Day 11-12)

| Day | Goal |
|---|---|
| 11 | Independently evaluate a provided flawed schema (different from the project's own): identify at least one real, specific structural flaw with a real query as proof, and write it up as a genuine critique (flaw, real risk, proposed fix) — not a style nitpick. |
| 12 | Rebuild the schema correctly from nothing (real keys, real constraints, no repeating groups), reload the same catalog through it, prove for real that it now rejects what the old schema silently accepted; independently create a new PostgreSQL read-only role and correctly grant it on a personal database instance, with a real test confirming a write from that role is actually rejected. |

## Skills / rubric criteria this lab exercises

`relational-databases` and `database-administration` — see
`module_sources/module-3-sql-relational-databases/INSTRUCTOR_MODULE_SUMMARY.md`'s
rubric distillation table. Specifically rehearses `PROJECT.md`'s Sprint
Day 2 (`schema_critique.md`) and Sprint Day 5 (`role_setup.md`) "Meets"
bars — a real, specific flaw with a real risk explanation, and a role
independently created, granted, **and verified with a real write-rejection
test**, not just that `SELECT` was granted.

## Shareout

The last 15 minutes reconvene as a full class (see the `shareout` field in
the `.yaml`, rendered into both worksheets): which flaw each group led
with and why that one first; whether groups landed on three tables or five
in the rebuild, and what a three-table design decided to forget; and what
actually surprised people when they tested the role's permissions. Compare
approaches before revealing any single "right" answer — several of these
have more than one defensible one.

## Common mistakes to preempt

From `module_sources/module-3-sql-relational-databases/PROJECT.md`'s
common-mistakes list:

1. Designing tables with no foreign keys, so nothing actually enforces the
   relationships — the flaw this lab's own planted schema should be built
   to surface if a student isn't looking carefully.

Also worth watching for here specifically (this lab's own version of the
rubric's `database-administration` "Approaching" trap): granting a role
that "looks read-only" but was never actually tested with a real write
attempt — a Fellow who grants `SELECT` and stops, without trying (and
confirming the rejection of) an `INSERT`/`UPDATE`, has done half the
exercise, not the whole thing.
