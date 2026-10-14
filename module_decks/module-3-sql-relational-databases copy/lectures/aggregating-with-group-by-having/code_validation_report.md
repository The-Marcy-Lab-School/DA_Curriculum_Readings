# Code Validation Report — Aggregating with GROUP BY + HAVING

Validated for real against a live PostgreSQL 16 instance (throwaway
`postgres:16-alpine` Docker container, torn down after). Replayed Day 2's
6 setup statements and Day 3's 5 statements first, to recreate the exact
state a real, continuously-used student database would be in, then ran all
5 of this deck's own code slides on top, in order.

## Results — all 5 PASS

| # | Slide | Result |
|---|---|---|
| 1 | Reconnecting, Then Adding One More Inspection | PASS — `INSERT 0 1`. Corner Bistro (camis 1001) now has 3 real inspection rows. |
| 2 | How Many Restaurants Is That, Really? | PASS — `COUNT(*)` over the LEFT JOIN genuinely returns **7**, not 5. Independently confirms the deck's own central claim: this is a real overcounting trap on real data, not an asserted rule. |
| 3 | GROUP BY: One Row Per Restaurant, For Real | PASS — returns exactly 5 rows, one per restaurant: Corner Bistro `3`, Green Leaf Cafe `1`, the other 3 restaurants `0` (confirming `COUNT(column)` correctly skips NULL rather than counting them). Confirms the deck's own CFU answer (3) is correct. |
| 4 | WHERE Can't Filter an Aggregate — Watch It Fail | PASS (`expected_error: GroupingError`) — real error: `aggregate functions are not allowed in WHERE`, exactly the class of error the slide's own notes describe, and the correct real PostgreSQL error class name for this failure (SQLSTATE 42803 → `psycopg2.errors.GroupingError`). |
| 5 | HAVING: The Same Filter, In the Right Place | PASS — returns exactly 1 row (Corner Bistro, `3`), confirming the deck's own CFU answer and that moving the identical condition into `HAVING` is what actually fixes the broken query from slide 4. |

## No FAILs.

Both of this lesson's central claims — that `COUNT(*)` on a one-to-many
join can silently overcount real-world entities, and that `WHERE` cannot
filter on an aggregate while `HAVING` can — are independently verified as
real on this exact, continuously-evolving database, not just stated on a
slide.
