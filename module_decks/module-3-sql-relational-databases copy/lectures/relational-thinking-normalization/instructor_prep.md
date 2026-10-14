# Instructor Prep: Relational Thinking & Normalization
*Module 3: SQL & Relational Databases*

## Lecture Time Estimate
- Opening: ~8 min
- One Given Example: ~16 min
- Now, Build One From a Mess: ~36 min
- **Total: ~60 min**

## Prerequisites
- Terminal/command-line comfort (Modules 0-2) — psql starts next class
- General data literacy: What a row/column/dataset is (Module 0)

## Learning Objectives
- Explain what primary keys, foreign keys, and normalization mean, and why splitting data into related tables reduces redundancy compared to one flat spreadsheet
- Take a deliberately un-normalized table through 1NF, 2NF, and 3NF, live

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

Every one of the project's 7 given business questions depends on a schema that's actually normalized to at least 3NF, with real primary and foreign keys expressing the domain's real relationships — Objective 5 later grades independently spotting a schema that skips this. Today is where that judgment starts, on a table small enough to reason through by hand.

## Section Flow (Why Each Transition Is There)
- **Warmed Up → One Given Example**: You'll see a worked, already-correct schema first — then learn to build one yourself.
- **A Clean Example → But Why Bother?**: One flat spreadsheet feels simpler — until it has to grow.
- **You Can Recognize a Good Design → Now, Build One From a Mess**: A real dataset rarely arrives already normalized — you have to get it there.

## Additional Analogies / Use Cases
- A Foreign Key Points at Another Table's Row (school & community): Like writing a friend's library card number on a form instead of copying their whole name and address every time — you just point at their record.
- Rule 2: No Partial Dependencies (food & delivery): A delivery fee depends only on the zone, not which item's in the bag — writing it next to every single item is a partial dependency.
- 3NF: The Final, Normalized Schema (social media): A friend's hometown doesn't depend on which post you're viewing, it depends on the friend. Storing it on every post instead of their profile is a transitive dependency.
- **Use case:** A Spreadsheet Row Limit Quietly Dropped 16,000 COVID Cases (slide 11)
  - *Source:* [The Register, October 2020](https://www.theregister.com/2020/10/05/excel_england_coronavirus_contact_error/)
  - *Summary:* In September-October 2020, Public Health England's automated process for compiling COVID-19 test results used an outdated .xls file format capped at 65,536 rows. Because each test result generated several rows and the process split data across templates capped near 1,400 cases each, any case past that per-file limit was silently dropped rather than flagged. Over an 8-day window, 15,841 positive cases were left off the file that fed England's contact-tracing system, delaying or preventing contact tracing for an estimated 48,000 close contacts. The fix was switching to a modern file format without the row cap.
  - *Key takeaway:* One growing flat file has real, hard limits — a relational database is built specifically so structure, not luck, is what keeps data from silently breaking as it grows.

## Misconceptions to Watch For
- A Primary Key Uniquely Identifies a Row: A common early mix-up: assuming the primary key has to be the *first* column, or has to be a number. Neither is true — what matters is uniqueness, not position or type.
- A Worked Schema: Customers, Orders, Menu Items: Fellows sometimes expect every table to link to every other table. Here, `orders` links to `customers`, but nothing links directly to `menu_items` yet — that gap is deliberate, and today's normalization walkthrough resolves it for real.
- 1NF: Every Cell Holds One Value: Fellows often think 1NF is the finish line once every cell has one value. It's necessary, not sufficient — the next slide is the pivot to why.
- Rule 2: No Partial Dependencies: "Partial dependency" sounds abstract until it's framed concretely: it just means a column that only cares about *part* of what uniquely identifies the row, not the whole thing.
- 3NF: The Final, Normalized Schema: Fellows sometimes confuse this with 2NF's partial dependency. The distinction: 2NF is about a *composite* key's parts; 3NF is about one non-key column depending on *another* non-key column instead of the key itself.

## Further Resources (Deck's "Keep Learning" Links)
- [Database Normalization – Normal Forms, 1NF, 2NF, 3NF, With Table Examples](https://www.freecodecamp.org/news/database-normalization-1nf-2nf-3nf-table-examples/) (reading, ~10 min read)
  - The same restaurant walkthrough, written out again
- [SQLZoo](https://sqlzoo.net/wiki/SQL_Zoo) (practice, ~20 min hands-on)
  - Free SQL tutorials — useful once psql starts
- [The SQL Murder Mystery](https://mystery.knightlab.com/) (game, ~30-45 min)
  - A free detective game, really SQL practice

## Top Engagement Strategies Used
- **Turn and Talk** — Warm-Up: Terminal Comfort: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Quick-Fire Game** — Spotting a Foreign Key: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Poll** — Spotting a 1NF Violation: Quick multiple-choice check - reveal results live before moving on.
- **Turn and Talk** — Naming the Repetition: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Quick-Fire Game** — Spotting a Partial Dependency: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Quick-Fire Game** — The Payoff: Update Once, Not Everywhere: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
