# Instructor Prep: COALESCE, Materialized Views & a First Look at EXPLAIN ANALYZE
*Module 3: SQL & Relational Databases*

## Lecture Time Estimate
- Opening: ~9 min
- Code Along: What That Empty Cell Really Is: ~16 min
  - Code-along: ~12 min
- Storing an Answer Instead of Recomputing It: ~15 min
  - Code-along: ~8 min
- Asking Postgres What a Query Actually Costs: ~19 min
  - Code-along: ~4 min
- **Total: ~60 min**
- **Total code-along time: ~24 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 6: **New Columns Come Back **Empty on Every Old Row**** — code-along, have Fellows open their notebook
- Slide 7: **`= NULL` Never Matches - **Not Even a NULL**** — code-along, have Fellows open their notebook
- Slide 8: **COALESCE Picks the Fallback - **You Pick the Meaning**** — code-along, have Fellows open their notebook
- Slide 13: **One Command Turns a Query Into **Stored Rows**** — code-along, have Fellows open their notebook
- Slide 14: **New Data Lands. The View **Doesn't Move**.** — code-along, have Fellows open their notebook
- Slide 19: **Two Real Plans: **Five Lines, Then Three**** — code-along, have Fellows open their notebook

## Prerequisites
- Recently: Counting across a `LEFT JOIN` with `GROUP BY` - the query today's view stores
- Earlier this module: `LEFT JOIN` keeping rows that have no match on the other side

## Learning Objectives
- Replace a NULL with a fallback value using COALESCE, and explain why `= NULL` never matches anything
- Create a materialized view, and use REFRESH when its stored rows go stale
- Run EXPLAIN ANALYZE on a real query and read what each line of the plan is telling you

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Today rehearses three separate graded requirements of your project - a `COALESCE` query on a genuinely nullable column, a real `CREATE MATERIALIZED VIEW` plus the two follow-up queries run against it, and a real `EXPLAIN ANALYZE` run written up in `query_performance.md`.

## Section Flow (Why Each Transition Is There)
- **Rows That Came Back Empty → Code Along: What That Empty Cell Really Is**: An empty cell is a value with its own rules - and the obvious way to test for it silently fails.
- **Filling In What's Missing → Storing an Answer Instead of Recomputing It**: Three tables joined and grouped on every page load is real work - unless you save the result.
- **Two Kinds of Saved Query → Code Along: Building the Materialized One**: The query we are about to store is one you have already written three times - only where its answer lives changes.
- **Storing the Answer → Asking Postgres What a Query Actually Costs**: We just traded freshness for speed - without ever measuring the speed we were buying.
- **What a Plan Shows You → Code Along: Reading Two Real Plans**: Start with a query small enough that its whole plan fits on one screen, then look at what the view changed.

## Additional Analogies / Use Cases
- `= NULL` Never Matches - **Not Even a NULL** (community): Three people replied "0, can't make it" to the group chat. Two never replied at all. You can't count the silent two as zeros - you genuinely don't know their answer.
  - *Backup (food):* An order ticket with "no onions" written on it is a real instruction. A ticket where the toppings line is blank is not the same thing - the kitchen has to ask, not assume.
  - *Backup (sports):* A player who scored 0 points played the game. A player with a blank stat line was never on the roster. Averaging them together gets you a wrong number.
- One Command Turns a Query Into **Stored Rows** (social media): A screenshot of a live leaderboard opens instantly, but it froze the moment you took it. The live page is always current - it just has to be rebuilt every time you open it.
  - *Backup (food):* Meal prep means dinner is ready in two minutes later in the week. It is also the food you cooked back then - if the plan changed, you cook again.
  - *Backup (travel):* A printed boarding pass is instant to show and completely unaware that your gate just changed. The airline app is slower to load and always right.
- A Query Plan Is Postgres **Showing Its Work** (travel): A maps app shows the route it picked and a guessed arrival time. `EXPLAIN ANALYZE` shows the route plus the real time on the clock once you actually drove it.

## Misconceptions to Watch For
- Key Terms You'll Know by the End of Today: "Materialized" is the word that trips people. It just means "made real" - the rows genuinely exist on disk instead of being recalculated. Say that once now so it is not a mystery word later.
- Quick recall: Bayside Grill has never been inspect: Some Fellows will say `INNER JOIN` "works too, it just shows nothing." It does not show the restaurant at all, which is a different outcome from showing it with empty columns. That difference is the whole reason the join lesson happened.
- New Columns Come Back **Empty on Every Old Row**: Fellows often read the empty cell in `psql` output as an empty piece of text, because that is what it looks like. It is not. An empty piece of text is a real value you could match on; this is the absence of any value at all.
- `= NULL` Never Matches - **Not Even a NULL**: The most common wrong model is "NULL is basically zero." It is worth stating the opposite out loud: zero is a real, known measurement. `NULL` is the database refusing to guess. Postgres also applies the same rule to `!=`, so `WHERE grade != NULL` returns nothing either - and that catches people out even more often.
- COALESCE Picks the Fallback - **You Pick the Meaning**: Fellows often assume `COALESCE` changes the stored data. It does not - it only changes what this one query returns. The `NULL` is still sitting in the table afterwards.
- A lower `score` means a cleaner restaurant. Two in: Several Fellows will pick A, because `AVG` genuinely does skip `NULL` on its own. That is true - and it is exactly why wrapping the column in `COALESCE` changes the answer: it hands `AVG` a real zero that it can no longer skip.
- A View Re-Runs; a **Materialized** View Remembers: Fellows sometimes hear "materialized view" as "faster view." It is not faster at the same job - it is doing a different job. It trades freshness for speed, and somebody has to decide that trade is acceptable.
- One Command Turns a Query Into **Stored Rows**: Fellows often expect the view to be a shortcut that still reads the live tables. It does not read them at all after this moment. Everything it will ever report is already decided.
- New Data Lands. The View **Doesn't Move**.: Fellows often expect `REFRESH` to only pick up the new row. It rebuilds the entire result from scratch. The rebuilt answer is correct either way, but the cost is proportional to the whole query, not to what changed.
- Quick-fire: Your dashboard's view refreshes nightl: Option C keeps coming back because Fellows expect a database to warn them. It will not. Stale data returns confident, wrong numbers with a clean exit code, which is exactly why it is dangerous.
- A Query Plan Is Postgres **Showing Its Work**: The "cost" numbers are not seconds or milliseconds. They are made-up units the planner uses only to compare its own options against each other. The line that reports real time is `Execution Time`.
- Two Real Plans: **Five Lines, Then Three**: Fellows expect the execution time to be reproducible. It is not - run the same query twice and the number moves, because caching and whatever else the machine is doing both affect it. Compare shapes and row counts, not one run's milliseconds.
- Every Plan Line **Answers One Question**: "Rows Removed by Filter" confuses people because it sounds like an error. It is not - it is a count of work that did not contribute to the answer, which is why it is a useful thing to notice.
- Interview-style: A dashboard query that used to ta: The most common weak answer is a confident single cause in the first sentence. Listen for whether a Fellow confirms the problem is real before theorizing about it - a query that is slow once is not the same as a query that got slower.
- (untitled): Fellows sometimes state "materialized views need a manual refresh" as though it were true of every database. In core PostgreSQL it is. Oracle, BigQuery and SQL Server's indexed views can all refresh themselves, so the safe phrasing in an interview is to name which database you mean.
- So Far, We've Covered...: Fellows sometimes read that rule as "pandas is banned." It is not. The line is about where the analysis happens, not which tools are allowed on the machine.

## Optional Videos (If Time Allows)
- [Postgres Explain Explained](https://www.youtube.com/watch?v=P7EUFtjeAmI) (~10 min)
  - Walks how the planner decides on a plan before you ever read one

## Further Resources (Deck's "Keep Learning" Links)
- [Using EXPLAIN](https://www.postgresql.org/docs/current/using-explain.html) (documentation, ~12 min skim)
  - Worked examples behind every plan line you read
- [Postgres Plan Visualizer](https://explain.dalibo.com/) (practice, ~10 min hands-on)
  - Paste a plan, see it drawn as a tree
- [How to Use COALESCE() in SQL](https://learnsql.com/blog/coalesce-function-sql/) (reading, ~7 min read)
  - Five real patterns for replacing NULLs usefully

## Top Engagement Strategies Used
- **Poll** — Warm-Up: The Join That Keeps Everyone: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — Filling a Blank With Zero: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — How Stale Is Too Stale?: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Investigating a Slow Query: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
