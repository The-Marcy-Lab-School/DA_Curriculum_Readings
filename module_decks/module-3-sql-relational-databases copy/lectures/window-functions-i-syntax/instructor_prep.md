# Instructor Prep: Window Functions I: Syntax
*Module 3: SQL & Relational Databases*

## Lecture Time Estimate
- Opening: ~5 min
- Why Window Functions Exist: ~6 min
- Code Along: Writing RANK() and ROW_NUMBER(): ~41 min
  - Code-along: ~8 min
- **Total: ~52 min**
- **Total code-along time: ~8 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 8: **Sorted, But Not Numbered** — code-along, have Fellows open their notebook
- Slide 9: **Same Query, Now With RANK() and ROW_NUMBER()** — code-along, have Fellows open their notebook

## Prerequisites
- Yesterday: Chaining multiple CTEs together in one WITH clause
- Earlier this module: ORDER BY, and GROUP BY aggregation

## Learning Objectives
- Explain how a window function differs from GROUP BY - every row stays, and a computed value is added beside it
- Write a window function using RANK() or ROW_NUMBER() with an OVER (ORDER BY ...) clause

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's own window-function question needs a real RANK()/ROW_NUMBER() ranking query, spot-checked against known values - exactly today's syntax, applied to the schema you design yourself.

## Section Flow (Why Each Transition Is There)
- **Yesterday's Chained CTEs → Why Window Functions Exist**: ORDER BY sorts rows - it never actually labels each one's place.
- **The Idea → Code Along: Writing RANK() and ROW_NUMBER()**: Same totals as yesterday's chain, now with a real rank attached.

## Additional Analogies / Use Cases
- GROUP BY Collapses Rows - a Window Function Doesn't (sports): GROUP BY reports just the team's final score - one number, every player's row gone. A window function posts the season standings instead: each player keeps their own row, with a rank written beside it.
  - *Backup (gaming):* GROUP BY is a leaderboard screen showing only the top score. A window function keeps every player's row, each one tagged with its own placement.
  - *Backup (fashion):* GROUP BY reports just the season's total sales. A window function keeps every design on the rack, each tagged with its own sales rank.

## Misconceptions to Watch For
- GROUP BY Collapses Rows - a Window Function Doesn't: Fellows often assume a window function must "shrink" the result the way GROUP BY does. The whole point is that it doesn't - the row count going in equals the row count coming out.
- Sorted, But Not Numbered: Fellows sometimes assume the row's position on screen already counts as its rank. That position isn't real data - it's just how the terminal happens to print the result.
- Same Query, Now With RANK() and ROW_NUMBER(): A common assumption: RANK() and ROW_NUMBER() always return the same numbers. They only diverge the moment a real tie shows up - which is exactly why this query's data was built to have one.

## Further Resources (Deck's "Keep Learning" Links)
- [PostgreSQL Tutorial: Window Functions](https://www.postgresql.org/docs/current/tutorial-window.html) (documentation, ~10 min read)
  - The official reference, straight from the source
- [SQL Ranking Window Functions With Examples](https://datalemur.com/sql-tutorial/sql-rank-dense_rank-row_number-window-function) (reading, ~10 min read)
  - RANK/DENSE_RANK/ROW_NUMBER, tied to real interview questions
- [SQL Window Functions Tutorial](https://www.thoughtspot.com/sql-tutorial/sql-window-functions) (practice, ~15 min hands-on)
  - A live in-browser editor - write real ranking queries

## Top Engagement Strategies Used
- **Poll** — Warm-Up: What ORDER BY Actually Does: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — Predicting a Real Tie: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — The Gap RANK() Leaves After a Tie: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Quick-Fire: Guaranteed Unique Numbers: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Would You Rather** — Choosing the Right One Under a Tie: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
- **Turn and Talk** — Window Function vs. GROUP BY, in Your Own Words: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
