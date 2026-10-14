# Aggregating with GROUP BY + HAVING

**Module 3: SQL & Relational Databases**

**Learning Objectives:**
- Use GROUP BY to aggregate rows per real-world entity, instead of miscounting a joined result's raw rows
- Use HAVING to filter on an aggregated value, and explain why WHERE can't do the same thing

## Scenario

Real syntax, day three: The same `nyc_restaurants` database, one more real inspection added. You'll hit a genuine counting trap first — a join can make one restaurant look like three — then fix it for real with GROUP BY, and learn why HAVING exists at all.

*Reminder: type the commands inside the shaded code blocks below into your own terminal.*

## Reconnecting, Then Adding One More Inspection

*Context: Corner Bistro (camis 1001) now has 3 real inspections total — this is on purpose, for what's coming next.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: reconnect (you know this one by now)


-- TODO: insert inspection_id 4, camis 1001, date '2026-02-10',
-- critical_flag 'Not Critical'
```

## How Many Restaurants Is That, Really?

*Context: There are only 5 real restaurants in this table — watch what this actually returns.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: COUNT(*) over the same LEFT JOIN from yesterday
```

## GROUP BY: One Row Per Restaurant, For Real

*Context: `COUNT(i.inspection_id)` counts real inspection rows only — a restaurant with zero matches correctly shows `0`, not `NULL`.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: select dba, and COUNT(i.inspection_id) as num_inspections
-- TODO: LEFT JOIN restaurants (as r) and inspections (as i)
-- TODO: GROUP BY r.dba
```

## WHERE Can't Filter an Aggregate — Watch It Fail

*Note: this command is expected to fail/raise `GroupingError` - that's the teaching point, not a bug.*

*Context: This is deliberately broken — `WHERE` can never reference an aggregate function, in any real SQL database.*

```sql
SELECT r.dba, COUNT(i.inspection_id) AS num_inspections
FROM restaurants r
LEFT JOIN inspections i ON r.camis = i.camis
WHERE COUNT(i.inspection_id) >= 2
GROUP BY r.dba;
```

## HAVING: The Same Filter, In the Right Place

*Context: Only `HAVING` moved — same columns, same GROUP BY, one clause relocated to after aggregation.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: same SELECT/JOIN/GROUP BY as before
-- TODO: add HAVING COUNT(i.inspection_id) >= 2
```
