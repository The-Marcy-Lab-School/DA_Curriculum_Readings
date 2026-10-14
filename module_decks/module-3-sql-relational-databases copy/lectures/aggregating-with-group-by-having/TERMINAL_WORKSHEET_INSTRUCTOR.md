# Aggregating with GROUP BY + HAVING

**Module 3: SQL & Relational Databases**

**Learning Objectives:**
- Use GROUP BY to aggregate rows per real-world entity, instead of miscounting a joined result's raw rows
- Use HAVING to filter on an aggregated value, and explain why WHERE can't do the same thing

> **You are not presenting this worksheet to students.** Use it as your own answer key while you run the same commands live, in front of the class.

## Scenario

Real syntax, day three: The same `nyc_restaurants` database, one more real inspection added. You'll hit a genuine counting trap first — a join can make one restaurant look like three — then fix it for real with GROUP BY, and learn why HAVING exists at all.

## Reconnecting, Then Adding One More Inspection

*Context: Corner Bistro (camis 1001) now has 3 real inspections total — this is on purpose, for what's coming next.*

**Instructor notes:**

> [SCRIPT] Run it and confirm `INSERT 0 1`. Don't explain why yet — let the next slide's real number surprise the room first.

```sql
\c nyc_restaurants
INSERT INTO inspections (inspection_id, camis, inspection_date, critical_flag)
VALUES (4, 1001, '2026-02-10', 'Not Critical');
```

## How Many Restaurants Is That, Really?

*Context: There are only 5 real restaurants in this table — watch what this actually returns.*

**Instructor notes:**

> [SCRIPT] Run it and let `7` print before saying anything. There are 5 real restaurants. This number is wrong, and the room should genuinely notice that before you explain why.

```sql
SELECT COUNT(*)
FROM restaurants r
LEFT JOIN inspections i ON r.camis = i.camis;
```

### 🤔 Check for Understanding: The Overcounting Trap

*Mode: Turn and Talk*

Discuss it: There are 5 real restaurants, but this query says 7. What actually happened?

## GROUP BY: One Row Per Restaurant, For Real

*Context: `COUNT(i.inspection_id)` counts real inspection rows only — a restaurant with zero matches correctly shows `0`, not `NULL`.*

**Instructor notes:**

> [SCRIPT] Run it: 5 rows, one per restaurant. Corner Bistro shows `3`, Green Leaf Cafe shows `1`, the other 3 show `0`. The row count that was wrong a minute ago is now genuinely correct.

```sql
SELECT r.dba, COUNT(i.inspection_id) AS num_inspections
FROM restaurants r
LEFT JOIN inspections i ON r.camis = i.camis
GROUP BY r.dba;
```

### 🤔 Check for Understanding: Predicting a GROUP BY Result

*Mode: Poll*

Predict it: After GROUP BY, what does Corner Bistro's `num_inspections` column actually show?

- 3
- 1
- 7

**Answer:** 3 — Corner Bistro has exactly 3 real inspection rows (2 from earlier, 1 just added) — GROUP BY collapses them into one row, and COUNT(i.inspection_id) correctly counts all 3.

## WHERE Can't Filter an Aggregate — Watch It Fail

*Note: this command is expected to fail/raise `GroupingError` - that's the teaching point, not a bug.*

*Context: This is deliberately broken — `WHERE` can never reference an aggregate function, in any real SQL database.*

**Instructor notes:**

> [SCRIPT] Run it and let the real error print in full: `aggregate functions are not allowed in WHERE`. Name explicitly: this isn't a typo-shaped error — it's PostgreSQL confirming WHERE genuinely cannot do this, ever.

```sql
SELECT r.dba, COUNT(i.inspection_id) AS num_inspections
FROM restaurants r
LEFT JOIN inspections i ON r.camis = i.camis
WHERE COUNT(i.inspection_id) >= 2
GROUP BY r.dba;
```

## HAVING: The Same Filter, In the Right Place

*Context: Only `HAVING` moved — same columns, same GROUP BY, one clause relocated to after aggregation.*

**Instructor notes:**

> [SCRIPT] Run it: exactly one row, Corner Bistro, `3`. Name explicitly: same condition as the broken query, just in the one clause that's actually allowed to see an aggregate.

```sql
SELECT r.dba, COUNT(i.inspection_id) AS num_inspections
FROM restaurants r
LEFT JOIN inspections i ON r.camis = i.camis
GROUP BY r.dba
HAVING COUNT(i.inspection_id) >= 2;
```
