# Instructor Prep: DataFrame and SQL Table: Same Data, Two Shapes
*Module 4: Python Data Analysis*

## Lecture Time Estimate
- Opening: ~8 min
- Now See Them Side by Side: ~20 min
  - Code-along: ~8 min
- Now Ask the Same Question Twice: ~16 min
  - Code-along: ~5 min
- The Tool That Sets All This Up: ~16 min
- **Total: ~60 min**
- **Total code-along time: ~13 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 10: **The Same Rows, Now **In Your Own Memory**** — code-along, have Fellows open their notebook
- Slide 11: **Every Column Has **One Type**, Just Like SQL** — code-along, have Fellows open their notebook
- Slide 18: **A `WHERE` Clause Is Just a **True/False Mask**** — code-along, have Fellows open their notebook

## Prerequisites
- Real pandas authorship, including loading a CSV, filtering rows, and aggregating (Module 2)
- SQL: `SELECT`, `WHERE`, `GROUP BY`, and a real PostgreSQL database you built yourself (Module 3)
- Terminal comfort and a working Python install (Modules 0-1)

## Learning Objectives
- Explain how a pandas DataFrame corresponds to a SQL table's rows, columns, and types
- Translate a small SQL query into its pandas equivalent, and say where each one actually runs
- Describe what `uv` is and why this module manages its packages with it instead of bare `pip`

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project has you query your own PostgreSQL database from Python two different ways and load each result into a real pandas DataFrame, confirming both return the same result. That whole task rests on one idea: a query result and a DataFrame are the same rows in a different container. Today is where that idea gets built, on a file small enough to read end to end.

## Section Flow (Why Each Transition Is There)
- **You Know Both Tools Already → Now See Them Side by Side**: You have used SQL tables and DataFrames separately. Today is about how the two line up, row for row.
- **The SQL Side → Code Along: The Same Rows as a DataFrame**: Someone exported these rows into a file. The data did not change, only the tool holding it.
- **You Can Name the Parts → Now Ask the Same Question Twice**: Nearly every clause you already write in SQL has a pandas move that does the same job to the same rows.
- **On Paper → Code Along: Run the pandas Side for Real**: A translation table is easy to nod along to. Typing it is what proves you can actually do it.
- **Two Shapes, One Idea → The Tool That Sets All This Up**: Reaching a real database needs real packages installed, and this module installs them a new way.

## Additional Analogies / Use Cases
- The Same Rows, Now **In Your Own Memory** (music): Same album, one on a shelf you have to walk over to, one already downloaded on your phone. Identical tracks either way.
  - *Backup (sports):* The same game watched live in the stadium, or recorded on your phone, is still the same plays either way.
  - *Backup (community):* A recipe in your grandmother's book versus copied onto a card in your pocket, still the same recipe either way.
- Every Column Has **One Type**, Just Like SQL (fashion): A tag reading `$24.99` is just characters until a register reads it into a field that expects money.
  - *Backup (gaming):* Your level typed into a chat message is only text. The game treats it as a number inside the game itself.
  - *Backup (travel):* A flight time on a napkin is text. Your calendar only counts down to it once you enter it as a real time.
- A `WHERE` Clause Is Just a **True/False Mask** (community): A guest list at the door, one pass marking each person yes or no, then a second pass letting only the yeses in.
  - *Backup (sports):* A coach reads the roster and calls out starter or bench for each name, then only the starters walk onto the court.
  - *Backup (fashion):* Sorting a closet by tagging every item keep or donate first, then carrying only the keep pile back to the rack.
- **Use case:** A Spreadsheet Kept Turning **Gene Names** Into Dates (slide 6)
  - *Source:* [The Verge, August 2020](https://www.theverge.com/2020/8/6/21355674/human-genes-rename-microsoft-excel-misreading-dates)
  - *Summary:* In 2016, three researchers screened over 35,000 supplementary spreadsheets attached to genomics papers and found that about one in five contained corrupted gene names. The cause was mundane: a spreadsheet's default settings silently reinterpret symbols like `SEPT2` and `MARCH1` as dates and rewrite them as "2-Sep" and "1-Mar." Nobody clicked anything, no error appeared, and the corrupted files were published as-is alongside peer-reviewed papers. After years of the problem getting worse rather than better, the committee that officially names human genes gave up on fixing the spreadsheets and renamed the genes instead, 27 of them, so `MARCH1` became `MARCHF1` and `SEPT1` became `SEPTIN1`. Their revised 2020 guidelines now list "symbols that affect data handling and retrieval" as a legitimate reason to rename a gene.
  - *Hook question:* When the same data moves from one tool into another, what exactly can change without anyone noticing?
  - *Revisited/resolved in:* "So Far, We've Covered..."

## Misconceptions to Watch For
- Quick recall: Name the SQL clause that keeps only: Some people will answer `LIMIT` for the second half. That is a fair answer for "first few rows" and worth accepting out loud, then redirecting: `LIMIT` is the SQL side, `.head()` is the pandas side, and noticing they do the same job is literally today's lesson.
- The Rows, Exactly as the **Database** Holds Them: "Table" gets used loosely for anything with rows and columns. Be precise here: this specific thing lives inside PostgreSQL, on a server, with types the database itself enforces. That is what makes the comparison coming up interesting.
- The Database **Declares** Every Type Up Front: People assume a type is a property of the value itself, so that `2026-06-29` is "a date" no matter where it sits. It is not. It is a date because a column said so. Move the same characters somewhere that declares nothing, and they are just characters again.
- The Same Rows, Now **In Your Own Memory**: Somebody will spot a `NaN` in the very first row of the output and ask about it. Have the answer ready, because it is on today's topic, not a distraction: the file genuinely contains the characters `N/A` in that cell, and `pd.read_csv` treats `N/A` as one of its default "this means missing" strings, so it becomes `NaN`. Nobody asked it to. That is the same idea as the type story coming next, arriving a slide early: reading a file means a tool making decisions about what the characters mean. Say that, then move on; real missing-value handling belongs to the project, not to today.
- Every Column Has **One Type**, Just Like SQL: People read `object` as "something went wrong." It did not. It is just how pandas 2.x labels a column of text. It is the right label for `borough`, and the wrong one for a date, which is the whole reason to look.
- Same Parts, **Two Vocabularies**: A `Series` is not a lesser thing than a DataFrame. It is one column, and it still has exactly one type. Pull a column out of a DataFrame and you get one.
- One Question, **Two Languages**: `.value_counts()` is not a full `GROUP BY`. It counts occurrences of one column's values. Grouping and then aggregating something else is `.groupby()`, which this room has already used.
- One **Whole Question**, Written Twice: `.value_counts()` doing the work of both `GROUP BY` and `COUNT(*)` at once looks like pandas being magic. It is not general: it counts how often each value appears in one column. Grouping by one column and summing a different one is `.groupby()`, which this room already has.
- A `WHERE` Clause Is Just a **True/False Mask**: A very common early mistake is writing `df["borough" == "BRONX"]`, with the comparison inside the brackets. That compares two strings, gets `False`, and asks the DataFrame for a column named `False`. Show that error on purpose if time allows, it is the fastest way to make the two-step nature of a mask stick.
- You want one number, the count of Bronx noise comp: Some people assume pandas is simply slower than SQL. That is not the claim. On data that already fits in memory pandas is often faster. The claim is narrower: moving 30 million rows across a network so you can throw almost all of them away is the expensive part, not pandas itself.
- The Real Difference Is **Where It Lives**: "Gone when the notebook restarts" surprises people who have been treating a notebook like a saved document. Say it plainly, and attach the real word out loud rather than putting it on the slide: what restarts is the kernel, the Python process behind the notebook. The notebook file is saved. The DataFrame inside it is not. Rerunning the cells is how it comes back.
- `uv` Installs Your Packages, and **Locks** Them: Be careful with the speed number rather than repeating it flatly. It is Astral's own benchmark, and the 100x end of that range is measured with a warm cache, meaning packages already downloaded once. Everyday first-time installs land nearer the low end. Say "Astral measures it at" rather than stating it as neutral fact, and model that habit out loud: a vendor benchmark is evidence, not proof.
- Would you rather join a team that pins every packa: People hear "lock file" and think it locks you out of updating. It does not. It records exactly what was installed, so an update becomes a deliberate, reviewable change instead of something that happens to you silently. That gap between "what to install" and "which versions actually worked together" is where "it works on my machine" comes from.

## Optional Videos (If Time Allows)
- [Why Python Developers Are Switching to UV](https://www.youtube.com/watch?v=5rTwOt9Qgik) (9 min)
  - Free, no account needed. Optional background before setup day.

## Further Resources (Deck's "Keep Learning" Links)
- [pandas: Comparison with SQL](https://pandas.pydata.org/docs/getting_started/comparison/comparison_with_sql.html) (documentation, ~20 min read)
  - Every SQL clause mapped to its pandas equivalent
- [Pandas Tutor](https://pandastutor.com/) (practice, ~10 min hands-on)
  - Watch your own pandas code reshape a DataFrame
- [Practical SQL for Data Analysis](https://hakibenita.com/sql-for-data-analysis) (reading, ~35 min read)
  - When the database should do the work, not pandas

## Top Engagement Strategies Used
- **Turn and Talk** — Warm-Up: SQL and pandas: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Poll** — Types Don't Travel: Quick multiple-choice check - reveal results live before moving on.
- **Quick-Fire Game** — Where the Work Happens: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
- **Would You Rather** — Reproducible Environments: Force a binary choice, then ask Fellows to justify it out loud - surfaces reasoning, not just the pick.
