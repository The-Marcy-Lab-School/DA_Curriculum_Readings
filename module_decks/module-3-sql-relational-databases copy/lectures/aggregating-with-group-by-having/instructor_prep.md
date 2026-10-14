# Instructor Prep: Aggregating with GROUP BY + HAVING
*Module 3: SQL & Relational Databases*

## Lecture Time Estimate
- Opening: ~5 min
- One Quick Check: ~26 min
  - Code-along: ~12 min
- Now, Filtering the Aggregate: ~30 min
  - Code-along: ~4 min
- **Total: ~60 min**
- **Total code-along time: ~16 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 7: **Reconnecting, Then Adding One More Inspection** — code-along, have Fellows open their notebook
- Slide 9: **How Many Restaurants Is That, Really?** — code-along, have Fellows open their notebook
- Slide 13: **GROUP BY: One Row Per Restaurant, For Real** — code-along, have Fellows open their notebook
- Slide 18: **WHERE Can't Filter an Aggregate — Watch It Fail** — watch-only demo, not a code-along
- Slide 20: **HAVING: The Same Filter, In the Right Place** — code-along, have Fellows open their notebook

## Prerequisites
- Yesterday: INNER JOIN and LEFT JOIN, and why they can return different row counts
- Earlier this module: Creating tables, constraints, SELECT/WHERE/ORDER BY

## Learning Objectives
- Use GROUP BY to aggregate rows per real-world entity, instead of miscounting a joined result's raw rows
- Use HAVING to filter on an aggregated value, and explain why WHERE can't do the same thing

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Every domain's third given business question is a GROUP BY + HAVING query — today's exact two-step pattern, on a schema you'll design yourself. The overcounting trap this lesson opens with is also a named risk in the rubric: a join that silently inflates a count is graded as a real sql-skill failure, not a style nitpick.

## Section Flow (Why Each Transition Is There)
- **Yesterday's Two Join Types → One Quick Check**: A fast recall check before today's rows get grouped instead of just joined.
- **Still Solid → Code Along: One More Real Inspection**: Picking up the same database, with one more real inspection added on purpose.
- **One More Row Added → Code Along: How Many Restaurants Is That, Really?**: A naive count, on the exact join from yesterday.
- **The Real Problem, Named → Code Along: GROUP BY, Fixing the Count**: Collapsing rows back to one per restaurant, before counting.
- **Correctly Counted → Now, Filtering the Aggregate**: Which restaurants actually have 2 or more inspections?
- **The Real Order → Code Along: Breaking It on Purpose**: Watching WHERE fail on an aggregate, for real.
- **The Error, Confirmed → Code Along: Fixing It With HAVING**: The exact same condition, moved to the one clause that's allowed to use it.

## Additional Analogies / Use Cases
- COUNT(*) Counts Rows, Not Real-World Things (raffles & contests): It's like counting raffle ticket stubs instead of counting people — one person holding 3 tickets shows up 3 times in the stub pile, even though only one real person is in the room.
  - *Backup (food & delivery):* Like counting delivery-app order confirmations instead of counting customers — one loyal customer who ordered 3 times shows up 3 times in the order log, not once.
- WHERE Runs Before Grouping, HAVING Runs After (cooking): WHERE is picking which ingredients go in the pot before you cook. HAVING is tasting the finished dish and deciding if it's ready to serve — you can't taste a dish that hasn't been cooked yet.
  - *Backup (sports):* WHERE is deciding who's even eligible to play before the season starts. HAVING is looking at final season stats and deciding who made the all-star team — you can't check a stat that doesn't exist until the season's been played.

## Misconceptions to Watch For
- COUNT(*) Counts Rows, Not Real-World Things: Fellows often assume a JOIN "duplicates data" as a bug. It doesn't — every one of those 3 rows is a real, correct inspection record. The mistake isn't the join, it's counting its raw rows as if they were counting restaurants.
- WHERE Runs Before Grouping, HAVING Runs After: Believing WHERE can filter on an aggregated value like `COUNT(*)` — that's exactly what HAVING is for, and it's about to raise a real error to prove the point.

## Further Resources (Deck's "Keep Learning" Links)
- [PostgreSQL Tutorial: Aggregate Functions](https://www.postgresql.org/docs/current/tutorial-agg.html) (documentation, ~8 min read)
  - The official reference on GROUP BY and HAVING
- [SQL HAVING Clause Explained](https://www.w3schools.com/sql/sql_having.asp) (reading, ~6 min read)
  - Short, example-driven WHERE-vs-HAVING breakdown
- [SQLBolt](https://sqlbolt.com/) (practice, ~15 min hands-on)
  - The same free interactive lessons from earlier

## Top Engagement Strategies Used
- **Turn and Talk** — Warm-Up: Why LEFT JOIN Returned More Rows: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Turn and Talk** — The Overcounting Trap: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Poll** — Predicting a GROUP BY Result: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — Predicting a HAVING Result: Quick multiple-choice check - reveal results live before moving on.
- **Turn and Talk** — Is HAVING Always Required?: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
