# Window Functions I: Syntax

**Module 3: SQL & Relational Databases**

**Learning Objectives:**
- Explain how a window function differs from GROUP BY - every row stays, and a computed value is added beside it
- Write a window function using RANK() or ROW_NUMBER() with an OVER (ORDER BY ...) clause

> **You are not presenting this worksheet to students.** Use it as your own answer key while you run the same commands live, in front of the class.

## Scenario

Real syntax, one more layer: Yesterday you chained two CTEs to total up each restaurant's violations. Today you'll rank those same totals - written here as one simpler CTE, since chaining isn't today's focus - with RANK() and ROW_NUMBER(), your first real window functions, without losing a single row along the way.

## Sorted, But Not Numbered

*Context: Same LEFT JOIN + USING pattern from yesterday, condensed into one CTE here since chaining itself isn't today's topic.*

**Instructor notes:**

> [SCRIPT] Run it and let the sorted list print. Point at the top row, then ask: "which number is this restaurant's actual rank?" There's no column for it - ORDER BY only moved rows around, it never labeled them.
> 
> [MISCONCEPTIONS] Fellows sometimes assume the row's position on screen already counts as its rank. That position isn't real data - it's just how the terminal happens to print the result.

```sql
WITH totals AS (
  SELECT r.dba, COUNT(v.violation_id) tv
  FROM restaurants r
  LEFT JOIN inspections i USING (camis)
  LEFT JOIN violations v USING (inspection_id)
  GROUP BY r.dba
)
SELECT dba, tv FROM totals ORDER BY tv DESC;
```

## Same Query, Now With RANK() and ROW_NUMBER()

*Context: Both window functions share the same OVER (ORDER BY tv DESC) - same ordering, two different ways of counting position.*

**Instructor notes:**

> [SCRIPT] Name the new piece first: `OVER (ORDER BY tv DESC)` is what tells `RANK()`/`ROW_NUMBER()` which rows to look across and in what order - without it, neither function would know how to number anything.
> 
> [SCRIPT] Run it and read the tied rows out loud together: Corner Bistro is rank 1, Green Leaf Cafe is rank 2, then three restaurants tie at 0 violations. Watch what rnk and rn do differently on those tied rows.
> 
> [SCRIPT] Name the real rule for RANK(): tied rows share one number, and the count picks back up after however many rows tied - so a 3-way tie at rank 3 means the next distinct value would jump to rank 6, not 4. ROW_NUMBER() never repeats or skips, tie or no tie.
> 
> [MISCONCEPTIONS] A common assumption: RANK() and ROW_NUMBER() always return the same numbers. They only diverge the moment a real tie shows up - which is exactly why this query's data was built to have one.

```sql
WITH totals AS (
  SELECT r.dba, COUNT(v.violation_id) tv
  FROM restaurants r
  LEFT JOIN inspections i USING (camis)
  LEFT JOIN violations v USING (inspection_id)
  GROUP BY r.dba
)
SELECT dba, tv,
  RANK() OVER (ORDER BY tv DESC) AS rnk,
  ROW_NUMBER() OVER (ORDER BY tv DESC) AS rn
FROM totals;
```
