# Instructor Prep: Cumulative Recall: Joins, CTEs, Window Functions, Materialized Views
*Module 3: SQL & Relational Databases*

## Lecture Time Estimate
- Opening: ~13 min
- Code Along: Rebuild It Without a Template: ~4 min
  - Code-along: ~4 min
- Code Along: A Query That Runs and Lies: ~24 min
  - Code-along: ~12 min
- Code Along: The Check That Catches It: ~18 min
  - Code-along: ~4 min
- **Total: ~60 min**
- **Total code-along time: ~20 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 7: **Only `LEFT JOIN` Finds What **Isn't There**** — code-along, have Fellows open their notebook
- Slide 9: **It Ran Clean. It's Also **Wrong**.** — code-along, have Fellows open their notebook
- Slide 12: **`COALESCE` Doesn't Find a Value - **You Invent One**** — code-along, have Fellows open their notebook
- Slide 16: **A Stored View Keeps Answering From **Before**** — code-along, have Fellows open their notebook
- Slide 18: **One `COUNT(*)` Would Have **Caught It in Seconds**** — code-along, have Fellows open their notebook

## Prerequisites
- Every query tool this module has taught: `INNER`/`LEFT JOIN`, `GROUP BY` with `HAVING`, CTEs, `RANK()` with `OVER`, `COALESCE`, and materialized views
- Reading a real result set in `psql` and saying whether the row count makes sense
- Working independently against your own running class database, without a step-by-step template

## Learning Objectives
- Rebuild a multi-table answer with the joins and aggregation the question actually needs, without a template
- Find what a query gets silently wrong when it runs clean and still returns rows
- Verify a result against a hand-built known answer before you trust it

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project hands you seven fixed business questions, each engineered to demand one specific technique, and grades whether every answer was spot-checked against known values rather than trusted because it looked right. Today is the last rehearsal for both halves of that: reaching for the right tool without a template, and proving the result before anyone else sees it.

## Section Flow (Why Each Transition Is There)
- **Vocabulary Recall → Code Along: Rebuild It Without a Template**: Naming the right tool is the easy half - now type it with nobody reading the answer out first.
- **A Query That Works → Code Along: A Query That Runs and Lies**: Everything so far failed loudly when it was wrong - the next one succeeds quietly while being wrong.
- **Wrong for a Different Reason → Code Along: A Number You Invented, Not Found**: Fan-out is a query that ran clean and lied. This next one runs clean and asks you to pick a lie on purpose.
- **Queries That Lie Once → Code Along: The Answer That Goes Stale**: Those queries were wrong the moment they ran - a stored answer starts out right and rots quietly afterwards.
- **A Confident Wrong Answer → Code Along: The Check That Catches It**: Nobody caught that by staring harder at the query - it took a number worked out somewhere else first.

## Additional Analogies / Use Cases
- It Ran Clean. It's Also **Wrong**. (family): Counting who is coming to the cookout from group-chat replies. One cousin who answers in two different chats gets counted twice, and you buy for a crowd that never shows up.
  - *Backup (music):* Counting how many songs you own by counting playlist entries. A track sitting in four playlists looks like four songs.
  - *Backup (travel):* Counting travellers by counting boarding passes. Anyone with a connecting flight gets counted twice, and the van you booked is too big.
- A Stored View Keeps Answering From **Before** (media): A printed newspaper is fast to read and correct as of press time - a new event doesn't rewrite it. A live news site is slower to load and always current, because it re-checks its sources every time.
  - *Backup (sports):* A printed program lists the lineup as it stood at kickoff. A trade the next day doesn't change the program - only a new one would.
- Four Steps Between a Query and **Trusting It** (food): You taste one spoonful for seasoning before you serve forty plates. Nobody tastes the whole pot, and nobody serves it untasted either.
  - *Backup (fashion):* You try the jacket on in the store, not after the delivery van has driven off.
  - *Backup (sports):* A team runs the new play in practice against a defence they already understand before running it on game day.

## Misconceptions to Watch For
- Key Terms You'll Know by the End of Today: The phrase "silent bug" confuses people who expect a bug to announce itself. Say it plainly once: a SQL error message is the easy case, because the database tells you. The dangerous case is the query that runs, returns rows, and is wrong, because nothing at all will tell you.
- Quick-fire: One clause filters raw column values,: The answer people reach for under time pressure is C, because both clauses "filter" and the words feel interchangeable. They are not interchangeable and they are not preferences. Each one is legal at exactly one point in the query's order of operations.
- Two asks land. Ask 1: "Top 3 boroughs by average s: A lot of hands go up for "both," because "average" sounds like it must mean the same tool every time. Push back with the row-count test rather than with the definition: ask how many rows Ask 1's answer has, and how many rows Ask 2's answer has. Three versus seven settles it faster than any explanation.
- Only `LEFT JOIN` Finds What **Isn't There**: A common wrong answer for the third blank is `WHERE`. It reads naturally and it fails, because the count does not exist yet at that point. This is the warm-up question arriving in real syntax two minutes later, which is exactly why the warm-up came first.
- Your per-restaurant counts add up to 5, but the wh: Option A gets picked by people who remember that `LEFT JOIN` and `INNER JOIN` return different row counts and reach for the most recent join-related fact they hold. Name the distinction: that difference is about rows being dropped. This is about rows being multiplied, which is the opposite direction and a different mechanism. Prove it live if anyone doubts it: swap both joins to `INNER` and run it again - Corner Bistro still says 4, because the bug is joining a table you are not counting, not which join type was used.
- `COALESCE` Doesn't Find a Value - **You Invent One**: This slide's own `JOIN` is a deliberate `INNER JOIN`, the only one in today's deck - every other query uses `LEFT JOIN`. A `LEFT JOIN` here would pull in the five never-inspected restaurants too, coalescing all of them to 0 and swelling the rank-3 tie from 2 rows to 7 - exactly the dishonesty this slide is warning against.
- You want every inspection that isn't grade A, so y: Option B is picked more often than it should be, because an empty result feels like evidence that the rows are gone. Emphasise the distinction: an empty result set is not proof of absence. It is proof that nothing matched the condition you actually wrote.
- Your dashboard says one number and a stakeholder's: The weak answer opens with a single confident cause. Listen for whether a Fellow confirms the disagreement is real and understands what both numbers measure before theorising about which one is wrong.
- A Stored View Keeps Answering From **Before**: Fellows regularly expect a materialized view to behave like an ordinary view and update itself. An ordinary view really does re-run its query every time. The word "materialized" is the entire difference, and it means the rows were made real and written down.
- One `COUNT(*)` Would Have **Caught It in Seconds**: Fellows sometimes conclude that the lesson is "never join three tables." That is not it - the fan-out demo earlier today joined all three correctly, right up until it counted a column from the wrong side of that join. The rule is narrower and more useful: know what one row represents after every join you add, and check the totals when you are counting.
- With your partner: Design the smallest test that w: Several pairs will propose checking the query against another query. Push on that gently: if both queries share the same wrong join, they will agree with each other and both be wrong. The check has to come from outside the query, which usually means a human, a source file, or a row count.
- Four Steps Between a Query and **Trusting It**: Fellows read step one as "test on a small table" and pick a slice at random. Random is not the same as known. The slice has to be one where you can state the expected answer with confidence before running anything.
- (untitled): The weakest version of this answer is "I double-check my work." It sounds responsible and says nothing. Coach Fellows off it by asking the follow-up an interviewer will ask anyway: check it against what, exactly?
- So far, we've covered...: Some Fellows will leave thinking today was about being careful, as a personality trait. Say plainly that it is not about temperament. It is about running one extra query before you report a number, which is a mechanical habit anybody can build.

## Further Resources (Deck's "Keep Learning" Links)
- [Debugging Duplicated Data in SQL Query Results](https://www.metabase.com/learn/sql/debugging-sql/sql-logic-duplicated-data) (reading, ~10 min read)
  - Traces duplicate rows back to a wrong join assumption
- [PostgreSQL Docs: Materialized Views](https://www.postgresql.org/docs/current/rules-materializedviews.html) (documentation, ~7 min read)
  - Why stored view data goes stale until refreshed
- [8 Week SQL Challenge: Danny's Diner](https://8weeksqlchallenge.com/case-study-1/) (practice, ~60-90 min hands-on)
  - Ten business questions on one messy relational schema

## Top Engagement Strategies Used
- **Quick-Fire Game** — Warm-Up: WHERE vs. HAVING: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Poll** — Which Shape Forces a Window Function: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — Diagnosing an Inflated Count: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Why `<> 'A'` Loses the Ungraded Rows: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Turn and Talk** — Two Numbers, One Question: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Whiteboard / Collaborative Board** — Designing Your Own Spot-Check: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.
