# Module 3 Calendar — SQL & Relational Databases with PostgreSQL

Quick-reference for instructors: which lecture/lab happens on which day, in
order, whether a lab continues a previous day's work, and what it's
actually called. Full rationale/objectives/rubric live in
`module_sources/module-3-sql-relational-databases/INSTRUCTOR_MODULE_SUMMARY.md`
— this file is just the flow, kept at the module root for fast lookup.
**Hand-reconciled alongside that file, not auto-regenerated** — update this
whenever a deck is built/renamed/resequenced.

| Day | Type | Name | Builds on | Status |
|---|---|---|---|---|
| 1 | Lecture (new) | Relational Thinking & Normalization | Modules 0-2 (no SQL prereq) | Built — `lectures/relational-thinking-normalization/` |
| 2 | Lecture (new) | Your First Database: `psql`, Tables & Constraints | Day 1 | Built — `lectures/your-first-database-psql-tables-constraints/` |
| 3 | Lecture (new) | Joins: INNER vs. LEFT | Day 2 | Built — `lectures/joins-inner-vs-left/` |
| 4 | Lecture (new) | Aggregating with GROUP BY + HAVING | Day 3 | Built — `lectures/aggregating-with-group-by-having/` |
| 5 | Lecture (new) | CTEs I: Syntax & Rewriting a Subquery | Days 3-4 | Built — `lectures/ctes-i-syntax-rewriting-a-subquery/` |
| 6 | Lecture (new) | CTEs II: Decomposing a Multi-Table Question, With a Peer | Day 5 | Built — `lectures/ctes-ii-decomposing-a-multi-table-question-with-a-peer/` |
| 7 | Lecture (new) | Window Functions I: RANK() / ROW_NUMBER() Syntax | Days 3-4 | Built — `lectures/window-functions-i-syntax/` |
| 8 | Lecture (new) | Window Functions II: PARTITION BY & Ranking Within Groups | Day 7 | Built — `lectures/window-functions-ii-partition-by-ranking-within-groups/` |
| 9 | Lecture (new) | COALESCE, Materialized Views & a First Look at EXPLAIN ANALYZE | Days 2-8 | Built — `lectures/coalesce-materialized-views-a-first-look-at-explain-analyze/` |
| 10 | Lecture (new) | Subquery vs. CTE vs. Window Function: Choosing the Right Tool | Days 5-8 | Built — `lectures/subquery-vs-cte-vs-window-function-choosing-the-right-tool/` |
| 11 | **Lab (day 1 of 2)** | Independent Schema Critique & Read-Only Role | Days 1-2 (not a continuation of a prior lab — this module's only lab) | Built — `labs/independent-schema-critique-role-setup.yaml` + `labs/independent-schema-critique-role-setup/` (instructor/student worksheets) |
| 12 | **Lab (day 2 of 2)** | Independent Schema Critique & Read-Only Role | Day 11 (same lab, continued — evaluate on Day 11, build + prove on Day 12) | Built — same files as Day 11 |
| 13 | Lecture (recall) | Cumulative Recall: Joins → CTEs → Window Functions → Materialized Views | Days 1-12, cumulative | Built — `lectures/cumulative-recall-joins-ctes-window-functions-materialized-views/` |
| 14 | Project | Sprint Day 1 — Setup + design, not SQL yet | `PROJECT.md` | See `PROJECT.md` |
| 15 | Project | Sprint Day 2 — Schema critique, then build your real schema | `PROJECT.md` | See `PROJECT.md` |
| 16 | Project | Sprint Day 3 — Load your data, answer Q1 and Q2 | `PROJECT.md` | See `PROJECT.md` |
| 17 | Project | Sprint Day 4 — Answer Q3 and Q4 | `PROJECT.md` | See `PROJECT.md` |
| 18 | Project | Sprint Day 5 — Answer Q5 and Q6, then the read-only role | `PROJECT.md` | See `PROJECT.md` |
| 19 | Project | Sprint Day 6 — Question 7 (materialized view) and the performance check | `PROJECT.md` | See `PROJECT.md` |
| 20 | Project | Sprint Day 7 — Schema tradeoffs, finish, verify, submit | `PROJECT.md` | See `PROJECT.md` |
| (after 20) | Event, not a school day | Peer schema & query review | Day 20 | Scheduled right after Day 7 (or a separate session) |

**No lab continues another lab this module** — Module 3 has exactly one
lab (Days 11-12), an independent schema-critique-and-role-grant rep with no
earlier lab to build on. **This lab deliberately uses a different flawed
schema than the project's own `schema_critique.md`** — see the lab file
for why — so it isn't a preview of the exact project content, just the
same skill at the same independence level.

**Lab now spans 2 days (added 2026-08-31)** — real timing/content review
found the lab's honest scope (evaluate a flawed schema, then rebuild it and
stand up a verified read-only role) needs ~155 minutes, over the 45-120
minute single-day target every lab is now held to (see "Labs" in
`content_spec/SCHEMA.md`). Split at the natural seam right after the
written critique: Day 11 is the evaluate half (find + prove + write up a
real flaw, ~65 min), Day 12 is the build half (rebuild the schema, prove it
rejects what the old one accepted, create and prove a read-only role, ~90
min). This pushed every subsequent day on this calendar back by one —
previously Day 12 (Cumulative Recall) was Day 11's very next day; it's now
Day 13, and the whole 7-day project sprint moved from Days 13-19 to Days
14-20.

**User-directed change from the first draft**: CTEs and window functions
each got a second lecture day (Days 5-6 and 7-8) instead of one — harder
concepts, worth the extra guided rep before Day 10 asks students to judge
between the two. This is why the module runs 13 content days (12
originally, now 13 after the lab's own 2026-08-31 split into 2 days)
instead of the ~10 the source bridging-gap list alone would have
suggested.
