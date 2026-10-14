# CTEs I: Syntax & Rewriting a Subquery

**Module 3: SQL & Relational Databases**

**Learning Objectives:**
- Explain what a CTE is and write one using a WITH clause
- Rewrite a nested subquery as a CTE, and explain why it's more readable

> **You are not presenting this worksheet to students.** Use it as your own answer key while you run the same commands live, in front of the class.

## Scenario

Real syntax, day four: The same `nyc_restaurants` database. You'll write one genuinely hard-to-read nested subquery, then rewrite the exact same question as a CTE — named, top-to-bottom, and easier to trust at a glance.

## Which Restaurants Beat the Average — The Hard Way

*Context: Reconnect first if this is a fresh terminal session (`\c nyc_restaurants`) — same database as the last 3 classes.*

**Instructor notes:**

> [SCRIPT] Run it and let the result print — 2 rows, Corner Bistro and Green Leaf Cafe. Then ask the room to actually read the query back out loud, start to finish. Watch how hard that is.
> 
> [MISCONCEPTIONS] Fellows often assume "correct" and "readable" are the same thing. This query is completely correct — it's also genuinely hard to trust at a glance, which is a real, separate problem.

```sql
SELECT a.dba, COUNT(b.inspection_id) AS ct
FROM restaurants a
LEFT JOIN inspections b ON a.camis = b.camis
GROUP BY a.dba
HAVING COUNT(b.inspection_id) > (
  SELECT AVG(ct) FROM (
    SELECT COUNT(d.inspection_id) AS ct
    FROM restaurants c
    LEFT JOIN inspections d ON c.camis = d.camis
    GROUP BY c.dba
  ) sub);
```

### 🤔 Check for Understanding: Correct vs. Readable

*Mode: Turn and Talk*

Discuss it: This query is 100% correct. What makes it hard to trust at a glance anyway?

## A CTE, By Itself First

*Context: `not_critical` is used exactly once here — the real payoff shows up once a name gets reused, which is what the next query does.*

**Instructor notes:**

> [SCRIPT] Run it: 3 rows print, the same 3 "Not Critical" inspections you'd get from the plain WHERE version. Name explicitly: this alone doesn't need a CTE — it's here to isolate the bare syntax before the harder rewrite.

```sql
WITH not_critical AS (
  SELECT * FROM inspections WHERE critical_flag = 'Not Critical'
)
SELECT * FROM not_critical;
```

### 🤔 Check for Understanding: Predicting a Simple CTE's Row Count

*Mode: Poll*

Predict it: How many rows does `not_critical` actually return?

- 3
- 4
- 1

**Answer:** 3 — 3 of the 4 real inspection rows have `critical_flag = 'Not Critical'` — only the very first inspection (2026-01-15) was marked Critical.

## The Same Query, Rewritten as a CTE

*Context: `inspection_counts` is referenced twice — once in the main SELECT, once inside the AVG subquery — without ever being recomputed or retyped.*

**Instructor notes:**

> [SCRIPT] Run it and let the same 2 rows print. Name explicitly: same answer, same underlying logic, and the query now reads in the exact order you'd explain it out loud.

```sql
WITH inspection_counts AS (
    SELECT r.dba, COUNT(i.inspection_id) AS num_inspections
    FROM restaurants r
    LEFT JOIN inspections i ON r.camis = i.camis
    GROUP BY r.dba
)
SELECT dba, num_inspections
FROM inspection_counts
WHERE num_inspections > (SELECT AVG(num_inspections) FROM inspection_counts);
```
