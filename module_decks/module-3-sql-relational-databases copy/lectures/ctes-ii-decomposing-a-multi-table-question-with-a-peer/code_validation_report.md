# Code Validation Report — CTEs II: Decomposing a Multi-Table Question, With a Peer

Validated for real against a live PostgreSQL 16 instance (throwaway
`postgres:16-alpine` Docker container, torn down after). Replayed Day 2's
6 statements, Day 3's 5, Day 4's 4, and Day 5's 3 first (skipping each
day's own `expected_error` slide, which is deliberately not meant to
succeed), to recreate the exact state a real, continuously-used student
database would be in, then ran all 4 of this deck's own code slides on
top, in order.

## Results — all 4 PASS

| # | Slide | Result |
|---|---|---|
| 1 | A Third Table: Violations, Per Inspection | PASS — `violations` table created with `violation_id` PK and `inspection_id` FK referencing `inspections`. |
| 2 | Adding Real Violation Records | PASS — 4 rows inserted (2 for Corner Bistro's inspection 1, 1 for inspection 3, 1 for Green Leaf Cafe's inspection 2). |
| 3 | Step 1: Violations Per Inspection | PASS — standalone `violation_counts` CTE returns exactly 4 rows, one per inspection, with correct per-inspection violation counts (inspection 1: 2, inspection 2: 1, inspection 3: 1, inspection 4: 0). |
| 4 | Step 2: Chaining the Second CTE | PASS — the chained 2-CTE query returns exactly 5 rows (one per restaurant), correctly rolling up per-inspection counts to per-restaurant totals: **Corner Bistro `ni=3, tv=3`, Green Leaf Cafe `ni=1, tv=1`**, all others `0/0`. |

## No FAILs.

The lesson's central claims are independently confirmed as real, not just
asserted:
- Corner Bistro has exactly 3 inspections and 3 total violations; Green Leaf
  Cafe has exactly 1 of each — matching both the deck's narration and the
  `check_understanding` poll's stated correct answer ("1" violation for
  Green Leaf Cafe).
- The chained CTE (`totals` referencing `violation_counts` by name) produces
  the correct 2-level rollup (per-inspection → per-restaurant) with no
  overcounting, on real joined data spanning all 3 tables.
