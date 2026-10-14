# CTEs I: Syntax & Rewriting a Subquery

**Module 3: SQL & Relational Databases**

**Learning Objectives:**
- Explain what a CTE is and write one using a WITH clause
- Rewrite a nested subquery as a CTE, and explain why it's more readable

## Scenario

Real syntax, day four: The same `nyc_restaurants` database. You'll write one genuinely hard-to-read nested subquery, then rewrite the exact same question as a CTE — named, top-to-bottom, and easier to trust at a glance.

*Reminder: type the commands inside the shaded code blocks below into your own terminal.*

## Which Restaurants Beat the Average — The Hard Way

*Context: Reconnect first if this is a fresh terminal session (`\c nyc_restaurants`) — same database as the last 3 classes.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: reconnect if needed (you know this one by now)


-- TODO: same GROUP BY as yesterday, but HAVING compares against
-- the AVERAGE inspection count across ALL restaurants -- a
-- subquery inside a subquery, computed inline
```

## A CTE, By Itself First

*Context: `not_critical` is used exactly once here — the real payoff shows up once a name gets reused, which is what the next query does.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: WITH not_critical AS (
-- TODO:   SELECT * FROM inspections WHERE critical_flag = 'Not Critical'
-- TODO: )
-- TODO: SELECT * FROM not_critical;
```

## The Same Query, Rewritten as a CTE

*Context: `inspection_counts` is referenced twice — once in the main SELECT, once inside the AVG subquery — without ever being recomputed or retyped.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: WITH inspection_counts AS (...)
-- TODO: the same SELECT/JOIN/GROUP BY from the hard version, inside the parens
-- TODO: SELECT dba, num_inspections FROM inspection_counts
-- TODO: WHERE num_inspections > (SELECT AVG(num_inspections) FROM inspection_counts)
```
