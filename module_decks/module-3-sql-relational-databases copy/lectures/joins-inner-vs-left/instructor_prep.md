# Instructor Prep: Joins: INNER vs. LEFT
*Module 3: SQL & Relational Databases*

## Lecture Time Estimate
- Opening: ~5 min
- One Quick Check: ~23 min
  - Code-along: ~12 min
- Now, LEFT JOIN: ~32 min
  - Code-along: ~8 min
- **Total: ~60 min**
- **Total code-along time: ~20 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 7: **Reconnecting to Yesterday's Database** — code-along, have Fellows open their notebook
- Slide 8: **Finishing What Yesterday Left Unfinished** — code-along, have Fellows open their notebook
- Slide 12: **INNER JOIN: Only Real Matches** — code-along, have Fellows open their notebook
- Slide 17: **LEFT JOIN: Every Restaurant, Match or Not** — code-along, have Fellows open their notebook
- Slide 22: **Which Restaurants Have Never Been Inspected?** — code-along, have Fellows open their notebook

## Prerequisites
- Yesterday: Creating tables with constraints, SELECT/WHERE/ORDER BY
- Earlier this module: Primary keys, foreign keys, why related tables exist at all

## Learning Objectives
- Explain what a JOIN does and use INNER JOIN to combine matching rows from two related tables
- Use LEFT JOIN to include every row from one table regardless of a match, and explain why INNER and LEFT JOIN can return different row counts

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Every domain's first two given business questions are literally a join (Q1) and a left join (Q2) — the exact two query shapes built today, against a schema you'll design yourself instead of one already given.

## Section Flow (Why Each Transition Is There)
- **Yesterday's Two Tables → One Quick Check**: A fast recall check before today's tables start talking to each other.
- **Still Solid → Code Along: Picking Up Where Yesterday Left Off**: Same database, same two tables — a fresh terminal session, not a fresh start.
- **Five Restaurants Now → What a JOIN Actually Does**: Two tables, one query — combining rows on a matching key.
- **The Concept → Code Along: INNER JOIN**: The default join — only rows with a real match on both sides.
- **Only Matches, Confirmed → Now, LEFT JOIN**: Every restaurant, whether or not it's ever been inspected.
- **The Concept → Code Along: LEFT JOIN**: One word changes — everything else stays the same.
- **The Real Risk, Named → Code Along: Finding What's Missing**: Using LEFT JOIN on purpose, to find exactly what INNER JOIN hides.

## Additional Analogies / Use Cases
- LEFT JOIN Keeps Every Row on the Left (family & gatherings): LEFT JOIN is like reading the full invite list at a reunion sign-in — every invited name gets read, even Uncle Jake who never showed, just with a blank next to his name instead of him vanishing from the list.
  - *Backup (sports):* LEFT JOIN is like taking attendance from the full team roster — every player gets checked, even one who skipped practice, with a blank mark next to their name instead of them disappearing from the roster.

## Misconceptions to Watch For
- A JOIN Combines Rows That Share a Key: A common assumption: a JOIN needs the column names to match exactly. They don't — `ON restaurants.camis = inspections.camis` would work identically even if the column were named `restaurant_id` in one table and `camis` in the other.
- "Looks Complete" Is Not the Same as Complete: Believing INNER JOIN and LEFT JOIN return the same rows whenever the data "looks complete" — the difference only shows up the moment a row genuinely has no match, which is exactly what makes it easy to miss until it's a real problem.
- Which Restaurants Have Never Been Inspected?: `WHERE i.inspection_id = NULL` looks reasonable but silently returns zero rows, always — `NULL` isn't a value comparisons can match against, so `=` never works on it. `IS NULL` is the only real way to check for a missing match, which is exactly why this specific query uses it.

## Further Resources (Deck's "Keep Learning" Links)
- [PostgreSQL Tutorial: JOIN](https://www.postgresql.org/docs/current/tutorial-join.html) (documentation, ~8 min read)
  - The official reference, straight from the source
- [SQL Joins Explained](https://www.w3schools.com/sql/sql_join.asp) (reading, ~10 min read)
  - Clear breakdown of every join type, with real examples
- [SQLBolt](https://sqlbolt.com/) (practice, ~15 min hands-on)
  - The same free interactive lessons from yesterday

## Top Engagement Strategies Used
- **Turn and Talk** — Warm-Up: What a Foreign Key Enforces: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Poll** — Predicting an INNER JOIN Row Count: Quick multiple-choice check - reveal results live before moving on.
- **Poll** — Predicting a LEFT JOIN Row Count: Quick multiple-choice check - reveal results live before moving on.
- **Would You Rather** — Which Join Should Be the Default?: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
