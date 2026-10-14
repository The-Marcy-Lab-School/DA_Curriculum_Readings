# Instructor Prep: Your First Database: psql, Tables & Constraints
*Module 3: SQL & Relational Databases*

## Lecture Time Estimate
- Opening: ~5 min
- One Quick Check: ~31 min
  - Code-along: ~20 min
- Code Along: Reading It Back: ~25 min
  - Code-along: ~4 min
- **Total: ~61 min**
- **Total code-along time: ~24 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 9: **One Command Creates a Real Database** — code-along, have Fellows open their notebook
- Slide 10: **Your First Table, With Real Constraints** — code-along, have Fellows open their notebook
- Slide 11: **One INSERT, Four Rows At Once** — code-along, have Fellows open their notebook
- Slide 13: **A Second Table: Foreign Key + CHECK** — code-along, have Fellows open their notebook
- Slide 14: **The Same INSERT Pattern, a Second Table** — code-along, have Fellows open their notebook
- Slide 17: **Reading It Back: SELECT, WHERE, ORDER BY** — code-along, have Fellows open their notebook
- Slide 20: **Constraints Actually Protect You** — watch-only demo, not a code-along

## Prerequisites
- Yesterday: Primary keys, foreign keys, normalization (1NF, 2NF, 3NF)
- Terminal/command-line comfort (Modules 0-2)

## Learning Objectives
- Create a PostgreSQL database and a table with correct column types and constraints (NOT NULL, PRIMARY KEY, FOREIGN KEY) via psql, following a step-by-step template
- Write basic SELECT, WHERE, and ORDER BY queries against a real table

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Early in the project's own sprint, you'll confirm psql is running and actually connecting, on your own machine, before anything else. Shortly after, you'll write your own schema.sql with real constraints. Today is the first real, typed rep of both, on a dataset you'll never touch again once the project starts.

## Section Flow (Why Each Transition Is There)
- **Yesterday's Design → One Quick Check**: A fast recall check on yesterday's vocabulary, before today's real syntax starts.
- **Still Solid → Meet psql**: Everything yesterday was on paper — today it becomes a real, running database.
- **Tool, Introduced → Code Along: Creating Your Database**: The first real command of the module.
- **One Table, Built → Code Along: A Second Table, With a Foreign Key**: Yesterday's FK definition, as real syntax for the first time.
- **Two Tables, Built → Code Along: Reading It Back**: SELECT, WHERE, and ORDER BY — the first real queries of the module.
- **Reading, Solid → Code Along: Constraints Actually Protect You**: The payoff — watching a constraint reject bad data in real time.

## Additional Analogies / Use Cases
- A Second Table: Foreign Key + CHECK (nightlife & venues): A CHECK constraint is like a bouncer with a strict guest list — even if your app already validated the value, the database checks it again before letting the row in.

## Misconceptions to Watch For
- Your First Table, With Real Constraints: A common assumption: constraints are optional "best practice," skippable under time pressure. They're the opposite — an active enforcement mechanism, not documentation.

## Further Resources (Deck's "Keep Learning" Links)
- [PostgreSQL Tutorial: CREATE TABLE](https://www.postgresql.org/docs/current/sql-createtable.html) (documentation, ~10 min read)
  - The official, authoritative reference for every constraint type
- [SQLBolt](https://sqlbolt.com/) (practice, ~20 min hands-on)
  - Free, bite-sized interactive SQL lessons and exercises

## Top Engagement Strategies Used
- **Turn and Talk** — Warm-Up: PK vs. FK: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Quick-Fire Game** — Foreign Key, as Real Syntax: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Poll** — Predicting a WHERE Result: Quick multiple-choice check - reveal results live before moving on.
- **Would You Rather** — Where Should Validation Actually Live?: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
