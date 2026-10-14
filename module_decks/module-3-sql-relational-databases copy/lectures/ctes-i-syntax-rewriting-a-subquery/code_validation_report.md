# Code Validation Report — CTEs I: Syntax & Rewriting a Subquery

Validated for real against a live PostgreSQL 16 instance (throwaway
`postgres:16-alpine` Docker container, torn down after). Replayed Day 2's
6 statements, Day 3's 5, and Day 4's 4 first, to recreate the exact state
a real, continuously-used student database would be in, then ran all 3
of this deck's own code slides on top, in order.

## Results — all 3 PASS

| # | Slide | Result |
|---|---|---|
| 1 | Which Restaurants Beat the Average — The Hard Way | PASS — the nested subquery returns exactly 2 rows: Corner Bistro (`3`), Green Leaf Cafe (`1`). |
| 2 | A CTE, By Itself First | PASS — the simple `not_critical` CTE returns exactly 3 rows, confirming the deck's own CFU answer. |
| 3 | The Same Query, Rewritten as a CTE | PASS — returns the **identical** 2 rows and values as slide 1 (Corner Bistro `3`, Green Leaf Cafe `1`), independently confirming this lesson's central claim: rewriting as a CTE is a pure readability change, not a logic change. |

## No FAILs.

The lesson's core pedagogical claim — that a nested subquery and its CTE
rewrite compute the exact same answer — is independently verified as real,
not just asserted on a slide.
