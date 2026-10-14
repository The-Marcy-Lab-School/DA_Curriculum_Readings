# Code Validation Report — COALESCE, Materialized Views & a First Look at EXPLAIN ANALYZE

Validated for real against a live PostgreSQL 16 instance (throwaway
`postgres:16-alpine` Docker container, torn down after). Replayed Day 2's
6 statements, Day 3's 5, Day 4's 4, Day 5's 3, Day 6's 4, Day 7's 2, and
Day 8's 4 first (skipping each day's own `expected_error` slide), to
recreate the exact cumulative state a real, continuously-used student
database would be in (confirmed baseline: 7 restaurants, 4 inspections,
4 violations), then ran all 6 of this deck's own code slides on top, in
order.

## Results — all 6 PASS

| # | Slide | Result |
|---|---|---|
| 1 | Real Inspections, Real Missing Data | PASS — `ALTER TABLE` adds `score`/`grade`; inspections 1 and 2 get real values (score 12/grade B, score 7/grade A), inspections 3 and 4 are genuinely blank in both columns. |
| 2 | `= NULL` Never Matches | PASS — `WHERE grade = NULL` returns **0 rows**; `WHERE grade IS NULL` returns exactly **2 rows** (inspection_id 3 and 4). Matches the deck's central claim exactly. |
| 3 | COALESCE Picks the Fallback | PASS — the two unscored rows show `as_zero = 0` and `as_label = 'Not graded'`, the scored rows pass through unchanged. |
| 4 | CFU proof query (`AVG(score)` vs. `AVG(COALESCE(score, 0))`) | PASS — real average is **9.50**, COALESCE-to-0 average is **4.75** — exactly the two numbers the check_understanding's `answer.explanation` states. |
| 5 | One Command Turns a Query Into Stored Rows | PASS — `CREATE MATERIALIZED VIEW` reports `SELECT 7` (7 rows stored), matching the 7-restaurant cumulative state; querying it back returns all 7 rows with correct per-restaurant `tv` totals. |
| 6 | New Data Lands, the View Doesn't Move | PASS — after inserting violation 5 (for Corner Bistro's inspection 4), the view still reports Corner Bistro `tv = 3` (stale); after `REFRESH MATERIALIZED VIEW`, it correctly reports `tv = 4`. Exactly matches the deck's own inline comments (`-- Still says 3` / `-- Now says 4`). |
| 7 | Two Real Plans | PASS — `EXPLAIN ANALYZE` on the Brooklyn-restaurants query returns exactly **5 lines** (`Seq Scan on restaurants`, `Filter: (boro = 'Brooklyn'::text)`, `Rows Removed by Filter: 4`, `Planning Time`, `Execution Time`), with the planner guessing `rows=4` and the real run returning `rows=3` — exactly matching the deck's "guessed 4, got 3" claim. `EXPLAIN ANALYZE` on `restaurant_totals` returns exactly **3 lines** (`Seq Scan on restaurant_totals`, `Planning Time`, `Execution Time`) — matching the deck's "three lines total, one Seq Scan, no joins" claim. |

## No FAILs.

Every specific numeric and textual claim in this deck's slide notes and
`check_understanding` answers was independently confirmed against real
Postgres output, not assumed:
- `= NULL` genuinely returns 0 rows; `IS NULL` genuinely returns 2.
- The COALESCE-to-zero average-inflation claim (9.50 → 4.75) is exact,
  not an illustrative approximation.
- The materialized view genuinely goes stale after an `INSERT` and
  genuinely updates after `REFRESH MATERIALIZED VIEW`, with the exact
  before/after values (3 → 4) the deck's own inline comments state.
- Both `EXPLAIN ANALYZE` outputs shown/described in the deck are real,
  captured output from this exact cumulative dataset, not fabricated or
  approximated — including the precise row-count guess-vs-actual gap
  (`rows=4` guessed, `rows=3` actual) and the exact line count of each
  plan (5 lines, then 3 lines).
