# Window Functions II: PARTITION BY & Ranking Within Groups

**Module 3: SQL & Relational Databases**

**Learning Objectives:**
- Add PARTITION BY to an OVER clause so a ranking restarts inside each group
- Return just each group's top row by wrapping a ranked query in a CTE

> **You are not presenting this worksheet to students.** Use it as your own answer key while you run the same commands live, in front of the class.

## Scenario

Last class you ranked every restaurant against every other one, and three of them landed in one tie. Today your manager asks a sharper question: which restaurant has the most violations in each borough? Same data, same OVER clause, one new keyword - and then a CTE to hand back only the winners.

## Documentation

- Two More Restaurants, So Every Borough Has a Group: https://www.postgresql.org/docs/current/sql-insert.html
- Yesterday's Ranking, Now With Boroughs Showing: https://www.postgresql.org/docs/current/tutorial-window.html
- Ranking Restarts in Each Borough: https://www.postgresql.org/docs/current/functions-window.html
- Top-N Per Group Needs a CTE Wrapper: https://www.postgresql.org/docs/current/tutorial-window.html

## Two More Restaurants, So Every Borough Has a Group

*Context: Two brand-new restaurants, so they have zero inspections and zero violations - which turns out to matter a lot in a few minutes.*

**Instructor notes:**

> [SCRIPT] Run it and confirm `INSERT 0 2`. Do not explain why these two specifically yet - let the ranking output make the point on its own.
> 
> [MISCONCEPTIONS] If anyone runs this twice they get "duplicate key value violates unique constraint restaurants_pkey". That is the primary key from this module's own table-creation lesson doing its job, not a broken command. Say so out loud and move on rather than debugging it live.
> 
> [MISCONCEPTIONS] A brand-new restaurant with no inspections still counts as a real row here. Its violation total is a genuine zero, not missing data - that distinction is what the `LEFT JOIN` protects.

```sql
\c nyc_restaurants
INSERT INTO restaurants (camis, dba, boro) VALUES
  (1006, 'Bayside Grill', 'Queens'),
  (1007, 'Flatbush Fry', 'Brooklyn');
```

## Yesterday's Ranking, Now With Boroughs Showing

*Context: Adding `boro` to the SELECT list means adding it to `GROUP BY` too - a grouped query can only return columns it actually grouped on.*

**Instructor notes:**

> [SCRIPT] Run it and read the `rnk` column down the screen out loud. Corner Bistro is 1, Green Leaf Cafe is 2, and then five rows all sit at 3. Ask the room whether that answers "who is worst in Brooklyn." It does not, and everyone can see why.
> 
> [SCRIPT] Point at the `ORDER BY boro, rnk` on the last line: that is only sorting the printout so boroughs stay together. It has no effect on the ranking itself, which is still computed across all seven rows.
> 
> [MISCONCEPTIONS] Fellows sometimes read the `ORDER BY boro` in the final line as if it grouped the ranking. It did not - sorting output and defining a ranking's comparison group are two different jobs.

```sql
-- tv = total violations, rnk = rank
WITH totals AS (
  SELECT dba, boro, COUNT(violation_id) AS tv
  FROM restaurants
  LEFT JOIN inspections USING (camis)
  LEFT JOIN violations USING (inspection_id)
  GROUP BY dba, boro)
SELECT dba, boro, tv,
  RANK() OVER (ORDER BY tv DESC) AS rnk
FROM totals ORDER BY boro, rnk;
```

### 🤔 Check for Understanding: How Big the Tie Got

*Mode: Poll*

Predict it: With the two new restaurants added, how many rows now come back sharing `rnk = 3`?

- 3
- 4
- 5

**Answer:** 5 — Only Corner Bistro (3 violations) and Green Leaf Cafe (1) have any violations at all. The other five restaurants sit at zero, so `RANK()` puts all five of them at rank 3 - one flat ranking, and most of the table is a single undifferentiated block.

## Ranking Restarts in Each Borough

*Context: `PARTITION BY` must come before `ORDER BY` inside `OVER (...)` - that order is required by the grammar, not a style preference.*

**Instructor notes:**

> [ACTIVITY] Give the room 60 seconds to fill in the blank before you reveal it. In person: call on one Fellow to say the keyword out loud. Online: everyone types their guess in chat at the same time.
> 
> [SCRIPT] Run it and read the output borough by borough. Brooklyn: Green Leaf Cafe 1, then Harbor Grill and Flatbush Fry both 2. Manhattan: Corner Bistro 1, New Spot NYC 2. Queens: Sunset Diner and Bayside Grill both 1. The five-way tie is gone, and every borough has its own number one.
> 
> [SCRIPT] Call back to the chart analogy here: a national chart has exactly one #1, and a city-by-city chart restarts the count in each city. Same songs, same plays, three different winners.
> 
> [SCRIPT] Say the row count out loud: seven rows went in and seven rows came back. `PARTITION BY` changed which rows each rank was measured against - it never removed or merged a single row.
> 
> [MISCONCEPTIONS] The most common wrong guess here is `GROUP BY boro`. That collapses the table to three rows, one per borough, and the restaurant names disappear entirely. Same word "group," opposite effect on your row count.
> 
> [SOURCES] PostgreSQL documentation, "Window Functions": PARTITION BY "divides the rows into groups, or partitions... For each row, the window function is computed across the rows that fall into the same partition as the current row," and window function rows "retain their separate identities."

```sql
WITH totals AS (
  SELECT dba, boro, COUNT(violation_id) AS tv
  FROM restaurants
  LEFT JOIN inspections USING (camis)
  LEFT JOIN violations USING (inspection_id)
  GROUP BY dba, boro)
SELECT dba, boro, tv,
  RANK() OVER (PARTITION BY boro
    ORDER BY tv DESC) AS rnk
FROM totals ORDER BY boro, rnk;
```

### 🤔 Check for Understanding: Counting the Winners

*Mode: Quick-Fire Game*

Quick-fire: There are three boroughs in the table. How many rows now come back with `rnk = 1`?

- 3
- 4
- 7

**Answer:** 4 — Three boroughs each produce a rank 1, so three is the tempting answer. But Queens has two restaurants both sitting at zero violations, and `RANK()` still gives tied rows the same number - inside a partition just as much as outside one. Sunset Diner and Bayside Grill are both rank 1, so four rows come back.

## Top-N Per Group Needs a CTE Wrapper

*Context: In Postgres a window function is only allowed in `SELECT` and `ORDER BY` - never in `WHERE`, `GROUP BY`, or `HAVING`, because those all finish running before any window function is computed.*

**Instructor notes:**

> [SCRIPT] Name the pattern out loud first: this shape - rank inside each group, then keep the top rows of each - is called top-N per group, and that is the phrase an interviewer will use for it.
> 
> [SCRIPT] Ask next: why not just add `WHERE rnk = 1` to the previous query? Then answer it with the real mechanism. `WHERE` has already finished running by the time any window function is computed, so at that moment `rnk` does not exist yet. Postgres reports it as plainly as that: column "rnk" does not exist.
> 
> [SCRIPT] Name why the wrapper fixes it: the inner CTE finishes the whole ranking first, which turns `rnk` into an ordinary column. Only then does the outer `WHERE` run, against a plain value.
> 
> [SCRIPT] Run it and read the four rows: Green Leaf Cafe for Brooklyn, Corner Bistro for Manhattan, and both Sunset Diner and Bayside Grill for Queens. Tie back to the quick-fire question - four, not three.
> 
> [MISCONCEPTIONS] Fellows who learned `HAVING` as "the `WHERE` for aggregates" will try `HAVING rnk = 1` next. That fails for the same reason, and it is worth saying out loud before someone loses ten minutes to it.
> 
> [SOURCES] PostgreSQL documentation, "Window Functions": window functions "are permitted only in the SELECT list and the ORDER BY clause of the query. They are forbidden elsewhere, such as in GROUP BY, HAVING and WHERE clauses. This is because they logically execute after the processing of those clauses." The docs give the same sub-select fix this slide uses as a CTE.

```sql
WITH totals AS (
  SELECT dba, boro, COUNT(violation_id) AS tv
  FROM restaurants
  LEFT JOIN inspections USING (camis)
  LEFT JOIN violations USING (inspection_id)
  GROUP BY dba, boro
), ranked AS (
  SELECT *, RANK() OVER (PARTITION BY boro
      ORDER BY tv DESC) AS rnk
  FROM totals)
SELECT * FROM ranked WHERE rnk = 1;
```
