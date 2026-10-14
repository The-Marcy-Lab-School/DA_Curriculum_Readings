# Window Functions I: Syntax

**Module 3: SQL & Relational Databases**

**Learning Objectives:**
- Explain how a window function differs from GROUP BY - every row stays, and a computed value is added beside it
- Write a window function using RANK() or ROW_NUMBER() with an OVER (ORDER BY ...) clause

## Scenario

Real syntax, one more layer: Yesterday you chained two CTEs to total up each restaurant's violations. Today you'll rank those same totals - written here as one simpler CTE, since chaining isn't today's focus - with RANK() and ROW_NUMBER(), your first real window functions, without losing a single row along the way.

*Reminder: type the commands inside the shaded code blocks below into your own terminal.*

## Sorted, But Not Numbered

*Context: Same LEFT JOIN + USING pattern from yesterday, condensed into one CTE here since chaining itself isn't today's topic.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: rebuild yesterday's totals CTE (violations per restaurant),
-- TODO:   then SELECT dba, tv, ordered by tv DESC
```

## Same Query, Now With RANK() and ROW_NUMBER()

*Context: Both window functions share the same OVER (ORDER BY tv DESC) - same ordering, two different ways of counting position.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: same totals CTE as the last slide
-- TODO: add RANK() OVER (ORDER BY tv DESC) AS rnk
-- TODO: add ROW_NUMBER() OVER (ORDER BY tv DESC) AS rn
```
