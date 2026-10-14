# Window Functions II: PARTITION BY & Ranking Within Groups

**Module 3: SQL & Relational Databases**

**Learning Objectives:**
- Add PARTITION BY to an OVER clause so a ranking restarts inside each group
- Return just each group's top row by wrapping a ranked query in a CTE

## Scenario

Last class you ranked every restaurant against every other one, and three of them landed in one tie. Today your manager asks a sharper question: which restaurant has the most violations in each borough? Same data, same OVER clause, one new keyword - and then a CTE to hand back only the winners.

*Reminder: type the commands inside the shaded code blocks below into your own terminal.*

## Documentation

- Two More Restaurants, So Every Borough Has a Group: https://www.postgresql.org/docs/current/sql-insert.html
- Yesterday's Ranking, Now With Boroughs Showing: https://www.postgresql.org/docs/current/tutorial-window.html
- Ranking Restarts in Each Borough: https://www.postgresql.org/docs/current/functions-window.html
- Top-N Per Group Needs a CTE Wrapper: https://www.postgresql.org/docs/current/tutorial-window.html

## Two More Restaurants, So Every Borough Has a Group

*Context: Two brand-new restaurants, so they have zero inspections and zero violations - which turns out to matter a lot in a few minutes.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: reconnect if needed (you know this one by now)


-- TODO: insert the two rows below
-- 1006, 'Bayside Grill', 'Queens'
-- 1007, 'Flatbush Fry', 'Brooklyn'
```

## Yesterday's Ranking, Now With Boroughs Showing

*Context: Adding `boro` to the SELECT list means adding it to `GROUP BY` too - a grouped query can only return columns it actually grouped on.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: rebuild yesterday's totals CTE, this time
-- TODO:   keeping boro in the result


-- TODO: rank the totals by tv DESC using yesterday's
-- TODO:   OVER clause, then sort the printout by borough
```

## Ranking Restarts in Each Borough

*Context: `PARTITION BY` must come before `ORDER BY` inside `OVER (...)` - that order is required by the grammar, not a style preference.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: same totals CTE as the last slide


-- TODO: one keyword goes inside OVER (...), before the
-- TODO:   ORDER BY, so the rank restarts for each borough
```

## Top-N Per Group Needs a CTE Wrapper

*Context: In Postgres a window function is only allowed in `SELECT` and `ORDER BY` - never in `WHERE`, `GROUP BY`, or `HAVING`, because those all finish running before any window function is computed.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: keep the totals CTE, then chain a second CTE
-- TODO:   named ranked that adds the PARTITION BY ranking


-- TODO: select everything from ranked where rnk = 1
```
