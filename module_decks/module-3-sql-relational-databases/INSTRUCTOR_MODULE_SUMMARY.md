# Module Summary — Module 3: SQL & Relational Databases with PostgreSQL

*Written via the `plan-module` skill, from source material pasted directly
into `project_assets/Module3_SQLRelational/` (`_brief.json`,
`instructor/overview.md`, `instructor/LECTURE_LAB_BRIEF.md`,
`instructor/rubric.md`, `data_sources_report.md`, and the full
`student/` repo — `SCENARIOS.md`, `CHECKLIST_TIMELINE.md`,
`ABOVE_AND_BEYOND.md`, `starter/`) — same "pasted, not fetched via `gh`"
convention Module 2 established, since the instructor repo is private and
this environment has no GitHub auth configured. See "Module plan" in
`content_spec/SCHEMA.md` for how this file is used. Authored, not
auto-regenerated — reconcile by hand as this module's lessons get built.*

## Module identity

- **Title**: SQL & Relational Databases with PostgreSQL
- **module_number**: 3
- **Schedule**: 19 school days total — **12 content days (11 lecture +
  1 lab), then 7 project days** (the calendar's last 7 days, a fixed
  sprint per the project's own already-published `student/
  CHECKLIST_TIMELINE.md`), plus one **peer schema/query review session
  held the class after Day 19** (not a calendar day itself — see "After
  Day 7" in `CHECKLIST_TIMELINE.md`).
- **`lesson_number` restarts at 1 for this module** — same convention
  Modules 1 and 2 established; it does not continue from Module 2's own
  count. `lecture_recall` days count toward `lesson_number` too; `lab`/
  `project` days don't.
- **User-directed expansion, agreed live**: `LECTURE_LAB_BRIEF.md`'s own
  bridging-gap list plus one gap this planning session found independently
  (see "Bridging gaps" below) originally suggested ~10 content days; the
  user explicitly asked that CTEs and window functions each get 2 lecture
  days instead of 1 (harder concepts, worth the extra rep), which is what
  brings content days to 12. This is on top of the source material's own
  already-real `duration_weeks: 1.0 → 1.4` project-length change (5→7
  days) from round 3 of instructor review — see "Redesign history" below.

## Redesign history (from `overview.md`) — read before authoring any lecture

This module's `_brief.json` is **not stale** the way Module 2's was — its
5 `learning_objectives` are current — but the project itself went through
two full instructor-review rounds that changed what those objectives need
to prepare students for. Get this right before treating `_brief.json` as
the complete picture:

- **Round 2**: made the 3NF bar explicit (not just "normalized"); promoted
  the window function from an Above & Beyond stretch item to a **required**
  MVP query; explicitly allowed running SQL through Python via a given
  `starter/run_query.py` helper, with one hard rule — pandas may only
  hold/visualize an already-computed result, never substitute for the SQL
  itself (a `.describe()`/`.groupby()`/merge standing in for a query is
  graded as an `sql`-skill failure, not a style choice); added a required,
  domain-specific written comparison between the student's normalized
  (3NF) schema and a STAR (dimensional) schema for the same data.
- **Round 3**: duration **5 days → 7 days** — a genuine schedule change,
  not absorbed by the backlog like everything else. The 7 business
  questions per domain are now **given** (`SCENARIOS.md`), not
  student-authored — this guarantees the same real difficulty regardless
  of domain choice (previously a student could pick easy, `GROUP BY`-only
  questions). `COALESCE` and a required `CREATE MATERIALIZED VIEW` were
  added — genuinely new territory, confirmed nowhere else in the
  curriculum. A light, guided `EXPLAIN ANALYZE` rep was added —
  deliberately **not** the full optimization workflow (that's Module 7's
  own `query-optimization` skill; teaching it in full here would blunt
  Module 7's real teaching moment). **ACID and partitioning were
  researched and explicitly left out** — both are real Module 9 content
  (Delta Lake/Spark, a genuinely different distributed-systems framing) —
  not even a light preview, since a single-Postgres-instance framing
  wouldn't map onto that later content meaningfully.

**Three real upstream data-quality errors were caught and corrected while
writing the source material, all the same recurring pattern** — a
generated narrative field naming the wrong module number — worth watching
for in any future module's own upstream fields, not just this module's:
`ai_integration_notes` said the `ai-output-validation` skill becomes
formally graded "in Module 10" — actually **Module 13** (confirmed against
real `skill_ids` per module). `process_tradeoffs` said the normalization-
vs-denormalization tradeoff "revisits in Module 5's dbt modeling layer" —
Module 5 is Excel/KPI dashboards, nothing to do with dbt; the real dbt/
data-modeling module is **Module 7** (independently confirmed as the
module that explicitly reviews Module 3 — see "This module sets up"
below). Both corrected before use here; flagged upstream for a
cross-module audit of this field type, not just patched case by case.

**A real deliverable-naming gap, resolved before this file was written**:
`_brief.json`'s `deliverables_checklist` just says `["Code Artifact
(script/notebook)"]` — the real artifact set is six specific files:
`schema.sql`, `queries.sql`, `business_questions_and_schema.md`,
`role_setup.md`, `schema_critique.md`, `query_performance.md`. Named
explicitly here since the checklist alone doesn't say this.

**A real deliverable-vs-competency_assessments gap, also already
resolved**: the `deliverable` prose never mentions creating a database
role, but `competency_assessments` for `database-administration`
explicitly requires it, independently — and it maps to Objective 5, the
module's **only** `evaluate`+`independent` objective (every other
objective is `guided` or `collaborative`). The read-only role and the
schema-critique exercise are both required MVP work, not Above & Beyond —
already reflected in `rubric.md`/`CHECKLIST_TIMELINE.md`.

## Objectives table

`_brief.json`'s own 5 objectives, verbatim in substance:

| # | Objective | Bloom's level | Scaffolding level | skill_id(s) |
|---|---|---|---|---|
| 1 | Given a worked ERD, explain what primary keys, foreign keys, and normalization mean, and why splitting data into related tables reduces redundancy vs. one flat spreadsheet | understand | modeled | `relational-databases`, `data-modeling` |
| 2 | Following a step-by-step template, create a PostgreSQL database and a table with correct column types/constraints (`NOT NULL`, `PRIMARY KEY`, `FOREIGN KEY`) via `psql`, then write basic `SELECT`/`WHERE`/`ORDER BY` queries | apply | guided | `sql`, `database-administration` |
| 3 | With a peer, decompose a multi-table business question into a query plan spanning 3+ tables, structured as a readable CTE rather than one dense nested statement | analyze | collaborative | `sql`, `relational-databases` |
| 4 | Using a peer-review checklist, judge whether a subquery, a CTE, or a window function is the better tool for a given business scenario, and justify the choice in writing | evaluate | collaborative | `sql` |
| 5 | Without a template, independently evaluate a provided schema against normalization/access-control best practices, identify at least one flaw, and independently create and correctly grant a read-only PostgreSQL role | evaluate | independent | `relational-databases`, `database-administration` |

## Bridging gaps — must be real, hands-on reps, not slide walkthroughs

Straight from `LECTURE_LAB_BRIEF.md`, plus one gap this planning session
identified independently (last item, verified against every source doc
before adding):

- **Objective 2 needs a real, typed-at-the-keyboard rep** — not a slide
  walkthrough of `psql` commands.
- **Objective 3 needs a real, collaborative CTE-decomposition rep with a
  peer** — directly rehearses the project's own CTE requirement.
- **A guided window-function-writing rep — genuinely missing from
  `learning_objectives`, not just under-scaffolded.** Objective 4 only
  asks students to *judge* whether a window function fits a scenario; it
  never teaches the syntax. Since round 2 promoted a window function to a
  required MVP query, lecture needs a real guided rep of writing one
  (`RANK()`/`ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...)`) before
  Objective 4's comparison discussion.
- **A worked 3NF example** — walk a deliberately un-normalized table
  through 1NF → 2NF → 3NF, live. Objective 1 only asks students to
  *explain* PK/FK/normalization from an already-normalized ERD, never to
  perform the normalization steps themselves — a second real gap round 2's
  explicit-3NF requirement surfaced.
- **`COALESCE` and `CREATE MATERIALIZED VIEW`** — genuinely new content,
  not in `learning_objectives` at all. Neither needs deep treatment — one
  real, working example of each against a lecture dataset is enough.
- **A light, guided `EXPLAIN ANALYZE` rep** — run it once against a real
  lecture query, read the plan together, identify the most expensive step.
  Deliberately not the full optimization workflow (Module 7's own
  content) — just enough that the project's own "run it and form a real
  opinion" ask isn't the first time a student has seen `EXPLAIN ANALYZE`
  output.
- **JOIN syntax itself — a gap this planning session found, not named in
  `LECTURE_LAB_BRIEF.md`'s own bridging list.** Objective 2 stops at
  `SELECT`/`WHERE`/`ORDER BY`; Objective 3 jumps straight to CTEs assuming
  joins are already known. But the misconceptions list below (`INNER JOIN`
  vs. `LEFT JOIN` returning different row counts) and the project's own Q1
  (join)/Q2 (left join) both require real join fluency first. Needs its
  own guided lecture day before CTEs, not assumed as prerequisite
  knowledge.

## Common misconceptions to preempt

Straight from `LECTURE_LAB_BRIEF.md`:

- Believing `INNER JOIN` and `LEFT JOIN` return the same rows whenever the
  data "looks complete" — the difference only shows up the moment a row
  has no match.
- Thinking `WHERE` can filter on an aggregated value like `COUNT(*)` —
  that's what `HAVING` is for.
- Assuming `NULL` behaves like zero or an empty string in comparisons —
  `WHERE column = NULL` silently returns nothing.
- Believing a query that runs without an error returns correct rows — a
  wrong join condition can silently duplicate or drop rows with no error
  at all (exactly what `student/starter/schema_critique.md`'s planted
  example is designed to surface).

## Project & rubric distillation

See `PROJECT.md` for the full deliverable/timeline. All 4 skills tested
this module are Technical Skills — no Professional or AI Skills category
is graded here.

| Skill | Rubric ceiling this module (Meets) | Assessment method |
|---|---|---|
| `sql` | All 7 of the domain's given questions answered with correct, spot-checked SQL: a correct inner join and left join with verified row counts; a real `GROUP BY`+`HAVING` question (not a plain `GROUP BY`); a CTE that genuinely improves readability; a correct window-function ranking query; a `COALESCE` query handling a genuinely nullable column; a real materialized view plus its 2 follow-up queries run against the view. `query_performance.md` shows a real `EXPLAIN ANALYZE` run with a genuine assessment. | Graded query set against a live PostgreSQL database |
| `relational-databases` | Correct PKs/FKs expressing the real domain relationships, genuinely normalized to at least 3NF; `schema_critique.md` independently identifies a real, specific flaw and its actual risk. | Independent schema-evaluation exercise |
| `database-administration` | Database/tables created for real via `psql`, correct types/constraints; a read-only role independently created and correctly granted, with a documented test confirming a write is actually rejected. | Independent hands-on terminal exercise |
| `data-modeling` | All 7 questions mapped against the schema in `business_questions_and_schema.md` **before** any `CREATE TABLE`; schema (3+ tables) normalized to at least 3NF; constraints chosen with real, explainable reasoning; the 3NF-vs-STAR tradeoff completed with real reasoning tied to the student's own tables. | Design exercise |

**Common project mistakes (preempt these in lecture/lab, not just penalize
after)** — the brief's own 4, plus one instructor-added mistake specific
to this module's Python-execution allowance:

1. Designing tables with no foreign keys, so nothing actually enforces the
   relationships. *(`relational-databases`)*
2. Writing a join that silently produces duplicate rows because of an
   unfiltered many-to-many relationship. *(`sql`)*
3. Trusting a query because it "looks right" without ever checking it
   against known values. *(`sql`)*
4. Skipping `NOT NULL`/`CHECK` constraints that would have caught bad data
   on insert. *(`data-modeling`)*
5. Using pandas (`.describe()`, `.groupby()`, a merge) to answer a
   business question instead of writing the equivalent SQL — this module
   allows running queries through Python, but the analysis itself still
   has to be real SQL. *(`sql`)*

**Good vs. weak** (`_brief.json`'s `good_vs_bad_criteria`): **Good** —
schema has correct PKs/FKs and at least one `NOT NULL`/`CHECK` constraint;
all 4-7 queries return correct, spot-checked results; at least one query
uses a CTE for readability. **Weak** — schema has no foreign keys
(unenforced relationships); a query "looks right" but was never checked
against known values; joins silently produce duplicated rows due to an
unfiltered many-to-many relationship.

## AI integration touchpoints

`ai_integration_notes` (field corrected, see "Redesign history" above):
no new AI-integration skill_id is introduced this module, but it previews
the `ai-output-validation` habit formally graded in **Module 13** — when a
student uses an AI assistant to help draft a tricky join or CTE, they're
required to independently verify the result against a small, hand-checked
sample of rows before trusting it. The same verify-before-trust discipline
`MVP.md`'s "spot-check every query" requirement already enforces directly,
whether or not AI was involved in writing it — worth naming explicitly at
least once in lecture (Day 5 or Day 6, alongside the CTE-writing rep),
not left implicit.

`professional_skill_spotlight` is genuinely `null` for this module — no
career-context claim to surface, none invented here.

## Interview-prep bank

None supplied in the upstream brief for this module (no `interview_prep`
key in `_brief.json`) — same gap as Modules 0, 1, and 2. Any
`check_understanding` with `question_style: interview` still needs to be
written and verified per-lesson (see `content_spec/SCHEMA.md`'s "Question
styles"), using `reference/interview_decks/`/`pedagogy/
interview_frameworks.md` for phrasing/technique calibration. SQL/database
questions are a strong natural fit for this style given how heavily SQL
skills feature in real data-analyst interviews — worth a deliberate push
on `question_style: interview` coverage across this module's decks.

## Video resources

`pedagogy/video_resources.md` has no entries yet for SQL, joins,
normalization/3NF, CTEs, window functions, or PostgreSQL administration —
none of this module's topics overlap Modules 0-2's existing bank.
`new-lesson-deck` step 3 should search fresh for verified, ~6-minute-or-
less videos on these topics and add findings back to the bank per its own
"check first, add what's missing" discipline.

## Prerequisite skills

`explicit_prerequisites`: `general-programming-coding`, `data-literacy`
(both already covered, Modules 0/1/2). `cumulative_from_earlier_modules`
additionally lists: `git-version-control`, `ai-literacy`, `curiosity`,
`critical-thinking`, `terminal-command-line`, `control-flow-loops`,
`functions-modular-programming`, `object-oriented-programming`,
`algorithmic-complexity-big-o`, `attention-to-detail`,
`statistical-analysis`, `data-distributions-shape`, `data-mining`.

**No SQL/database prerequisite exists coming in — this module has to
teach SQL and relational concepts from zero**, not extend something
already started (unlike Module 2, which built directly on Module 1's
Python fluency). Day 1's deck should still include a real early
`check_understanding` connecting to prior terminal-command-line fluency
(this module's first genuinely new installed tool, run entirely from the
terminal via `psql`) — same "explicit prereq-recall, not just passive
mention" discipline every prior module's Day 1 has held itself to.

**This module sets up** (`skills_after`, cross-checked and corrected — see
"Redesign history" above for the `process_tradeoffs` module-number fix):
immediate next module is **Module 4** (Python for Data Analysis & Database
Connectivity — connects to the exact database students build here;
`sql`/`relational-databases` are explicit prerequisites). **Module 7**
(Analytics Engineering: Advanced SQL, Data Modeling & dbt) explicitly
reviews this module (`reviews_module_indices: [3]`) and builds its dbt
project directly on top of this module's own database — whatever schema a
student builds now is what Module 7 builds on top of; `sql`,
`relational-databases`, `data-modeling`, `database-administration` all
carry forward. Modules 8, 9, 15 assume working `sql` as an explicit
prerequisite; Module 10 assumes `data-modeling`.

## Skill coverage check

`qa/skill_coverage_check.py` needs real built decks/`curriculum_log.yaml`
entries to run against — **run it (and `check-module-alignment` for a
full `ALIGNMENT_REPORT.md`) once this module's 11 lecture/recall decks and
1 lab worksheet exist.** By-hand check against the calendar as planned:
every one of the 4 `competency_assessments` skills recurs across multiple
days, not just once — `sql` (Days 3, 4, 5, 6, 7, 8, 9, 10, 12), `relational-
databases` (Days 1, 5, 9, 11), `database-administration` (Days 2, 11),
`data-modeling` (Days 1, 11). No skill is single-exposure-only as planned.

## Lecture & Lab Map

A real, relative-`Day N`-numbered calendar — never a real weekday name.
See `modules/module-3-sql-relational-databases/CALENDAR.md` for the
condensed flow view; this table carries the fuller "builds on"/status
detail.

| Day | Type | Name | Builds on | Scaffolding | Status |
|---|---|---|---|---|---|
| 1 | `lecture_new` | Relational Thinking & Normalization | Modules 0-2 (data literacy, no SQL prereq) | modeled | Not yet built |
| 2 | `lecture_new` | Your First Database: `psql`, Tables & Constraints | Day 1 (new installed tool) | guided | Not yet built |
| 3 | `lecture_new` | Joins: INNER vs. LEFT | Day 2 (real `SELECT`/`WHERE`) | guided | Not yet built |
| 4 | `lecture_new` | Aggregating with GROUP BY + HAVING | Day 3 | guided | Not yet built |
| 5 | `lecture_new` | CTEs I: Syntax & Rewriting a Subquery | Days 3-4 (joins, aggregation) | guided | Not yet built |
| 6 | `lecture_new` | CTEs II: Decomposing a Multi-Table Question, With a Peer | Day 5 (Objective 3) | collaborative | Not yet built |
| 7 | `lecture_new` | Window Functions I: RANK() / ROW_NUMBER() Syntax | Days 3-4 (ordering, grouping) | guided | Built — `lectures/window-functions-i-syntax/` |
| 8 | `lecture_new` | Window Functions II: PARTITION BY & Ranking Within Groups | Day 7 | guided | Built — `lectures/window-functions-ii-partition-by-ranking-within-groups/` |
| 9 | `lecture_new` | COALESCE, Materialized Views & a First Look at EXPLAIN ANALYZE | Days 2-8 (real queries to run these against) | guided | Built — `lectures/coalesce-materialized-views-a-first-look-at-explain-analyze/` |
| 10 | `lecture_new` | Subquery vs. CTE vs. Window Function: Choosing the Right Tool | Days 5-8 (Objective 4) | collaborative | Built — `lectures/subquery-vs-cte-vs-window-function-choosing-the-right-tool/` |
| 11 | `lab` | Independent Schema Critique & Read-Only Role | Day 1 (normalization), Day 2 (DB admin) — Objective 5 rehearsal | independent | Built — `labs/independent-schema-critique-role-setup.yaml` + worksheet pair |
| 12 | `lecture_recall` | Cumulative Recall: Joins → CTEs → Window Functions → Materialized Views | Days 1-11, cumulative | independent | Built — `lectures/cumulative-recall-joins-ctes-window-functions-materialized-views/` |
| 13 | `project` | Sprint Day 1 — Setup + design, not SQL yet | — | independent | See `PROJECT.md` |
| 14 | `project` | Sprint Day 2 — Schema critique, then build your real schema | — | independent | See `PROJECT.md` |
| 15 | `project` | Sprint Day 3 — Load your data, answer Q1 and Q2 | — | independent | See `PROJECT.md` |
| 16 | `project` | Sprint Day 4 — Answer Q3 and Q4 | — | independent | See `PROJECT.md` |
| 17 | `project` | Sprint Day 5 — Answer Q5 and Q6, then the read-only role | — | independent | See `PROJECT.md` |
| 18 | `project` | Sprint Day 6 — Question 7 (materialized view) and the performance check | — | independent | See `PROJECT.md` |
| 19 | `project` | Sprint Day 7 — Schema tradeoffs, finish, verify, submit | — | independent | See `PROJECT.md` |
| (after 19) | Event, not a school day | Peer schema & query review | Day 19 | independent | Scheduled right after Day 7 (or a separate session); no extra prep needed, repo just needs to be pushed and public |

**Day 11's lab is a deliberate rehearsal, not a continuation of another
lab** — this module has exactly one lab, no prior lab to build on.
Explicitly uses a **different** flawed schema than `student/starter/
schema_critique.md`'s own project version, per `LECTURE_LAB_BRIEF.md`'s
own instruction, so the project's critique exercise is still genuinely new
to students when they reach it on Sprint Day 2.

**Lecture/lab data sources — never the project's own datasets**
(`LECTURE_LAB_BRIEF.md`): **FEMA Disaster Declarations Summaries**
(`https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries`,
confirmed live — a different FEMA program than the project's own NFIP
data, pairs naturally with a small `states`/`incident_types` lookup table
for join demos) and **NYC Restaurant Inspection Results** (Socrata dataset
`43nn-pn8j`, confirmed live — a real one-to-many relationship, good for
demonstrating why `GROUP BY`+`HAVING` answers a question a plain `WHERE`
can't). **Chinook** (fictional record store, MIT-licensed) is a fine
synthetic backup for isolating one specific syntax point (e.g. a tiny
3-row hand-built table to demo exactly what `HAVING` does before touching
real data) — not primary lecture data.

**One lecture doesn't map to a single upstream objective**: Day 9
(`COALESCE`/materialized views/`EXPLAIN ANALYZE`) exists entirely because
of bridging gaps `LECTURE_LAB_BRIEF.md` names, not because of any
`_brief.json` objective — flag this the same way Module 2 flagged its own
Day 12, so a future reconciler doesn't go looking for a matching objective
number that doesn't exist.
