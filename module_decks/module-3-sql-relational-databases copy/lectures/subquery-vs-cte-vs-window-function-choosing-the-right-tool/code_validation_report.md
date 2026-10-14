# Code Validation Report — Subquery vs. CTE vs. Window Function: Choosing the Right Tool

Validated for real against a live PostgreSQL 16 instance (throwaway
`postgres:16-alpine` Docker container, torn down after). Replayed Days
2-9's own code slides first (34 statements, skipping each day's own
`expected_error` slide), to recreate the exact cumulative state a real,
continuously-used student database would be in, then ran all 4 of this
deck's own code slides on top, in order, plus one additional fact-check
for a claim asserted only in a `check_understanding.answer` (not shown as
a runnable code slide).

## Baseline confirmation

After replaying Days 2-9, the cumulative database matched the expected
state exactly: 7 restaurants, 4 inspections, 5 violations. Per-restaurant
violation totals confirmed for real: Corner Bistro `tv=4`, Green Leaf Cafe
`tv=1`, all 5 others `tv=0`.

## Results — all 4 code slides PASS

| # | Slide | Result |
|---|---|---|
| 1 | Written Once, the Work Gets Done Twice (nested subquery in `HAVING`) | PASS — returns exactly **2 rows**: Corner Bistro `tv=4`, Green Leaf Cafe `tv=1`. Real citywide average is **0.7143**, matching the deck's own "about 0.71" claim. |
| 2 | Name the Step Once, Then Use It Twice (CTE rewrite) | PASS — returns the **identical 2 rows and values** as slide 1, confirming the deck's central claim that the rewrite is a pure readability change, not a logic change. |
| 3 | Right Answer, Asked Once Per Row (correlated subquery, per-borough average) | PASS — returns all **7 rows** with the correct per-borough average alongside each restaurant: Brooklyn `b_avg=0.33`, Manhattan `b_avg=2.00`, Queens `b_avg=0.00` — exactly matching the deck's stated values. |
| 4 | One Line Replaces the Whole Repeated Question (window function, `AVG() OVER (PARTITION BY boro)`) | PASS — returns the **identical 7 rows and identical `b_avg` values** as slide 3, confirming the deck's claim that the window function replaces the correlated subquery with no change in result. |

## Additional fact-check — not a formal code slide, but a specific technical claim

The "Filtering on a Window Value" `check_understanding`'s `answer.explanation`
asserts that adding a `WHERE` clause referencing a window function's output
fails with the exact error `window functions are not allowed in WHERE`.
Constructed and ran the described query for real (window function result
filtered directly in `WHERE`, not via a CTE wrapper):

```
ERROR:  window functions are not allowed in WHERE
```

**Confirmed exact match** — the deck quotes the real PostgreSQL 16 error
message verbatim, not a paraphrase.

## No FAILs.

Every specific numeric claim and the one quoted error message in this
deck's slide notes and `check_understanding` answers were independently
confirmed against real Postgres output, not assumed:
- The nested subquery and CTE versions are provably identical in output,
  not just asserted to be.
- The correlated-subquery and window-function versions are provably
  identical in output, demonstrating the deck's central "same answer,
  different shape" teaching point is real.
- The exact per-borough averages (0.33 / 2.00 / 0.00) and the citywide
  average (~0.71) are all real, not illustrative approximations.
- The `WHERE`-on-a-window-function error is the real, exact PostgreSQL 16
  error text.
