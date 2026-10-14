# Instructor Prep: Connecting Two Ways, psycopg2 and SQLAlchemy to pandas
*Module 4: Python Data Analysis*

## Lecture Time Estimate
- Opening: ~8 min
- Now See What a Leaked Connection Costs: ~20 min
  - Code-along: ~8 min
- The Same Query, Written the Other Way: ~10 min
  - Code-along: ~4 min
- Now Make It Safe to Commit: ~22 min
  - Code-along: ~5 min
- **Total: ~60 min**
- **Total code-along time: ~17 min**

## Code-Along Map (Where to Open the Notebook)
- Slide 10: **A Cursor Is What You **Send SQL Through**** — code-along, have Fellows open their notebook
- Slide 11: **Tuples In, a **Real DataFrame** Out** — code-along, have Fellows open their notebook
- Slide 16: **The Same Question, in **One Line of pandas**** — code-along, have Fellows open their notebook
- Slide 21: **Open It in a `try`, and **Always** Close It** — code-along, have Fellows open their notebook

## Prerequisites
- A pandas DataFrame's rows, columns, and `dtype`, and how they map onto a SQL table (the lesson before this one)
- SQL: `SELECT`, `WHERE`, `GROUP BY`, and a real PostgreSQL database you built yourself (the SQL module)
- Reading and running cells in a Jupyter notebook, and a working Python install (Modules 0-1)
- Basic `try`/`except`/`finally` exception handling (Module 1's error-handling lesson)

## Learning Objectives
- Open a real PostgreSQL connection with `psycopg2` and load the rows into a pandas DataFrame
- Run the same query through SQLAlchemy and confirm both paths return the same DataFrame
- Write connection code that is safe to commit, with no typed-in password and no connection left open

## Project Connection
*Say this out loud at some point in the lecture - it's the answer to "why does this matter for my project?"*

The project's connect-and-compare day is exactly today's work on your own database. One real query runs through both `psycopg2` and SQLAlchemy, both confirmed to return the same result, credentials read from an environment variable, and every connection released. Two of the four mistakes that project is explicitly graded against, a typed-in password and a connection nobody closed, are the two habits today builds.

## Section Flow (Why Each Transition Is There)
- **You Know What an Export Loses → Now See What a Leaked Connection Costs**: A connection carries more than a file can, and that power comes with two responsibilities nobody sees until they are skipped.
- **You Know the Four Beats → Code Along: Type Them Out with `psycopg2`**: The diagram is four boxes. In real code it is four lines, and one of them is the one people forget.
- **One Way Works → The Same Query, Written the Other Way**: `psycopg2` handed you tuples and left the assembling to you. SQLAlchemy hands the finished DataFrame straight to pandas.
- **You Know What an Engine Is → Code Along: Let pandas Do the Fetching**: One call is about to replace the cursor, the fetch, and the column names you assembled by hand.
- **It Runs → Now Make It Safe to Commit**: Code that runs and code you can push to a public repo are two different bars, and a password and an open connection are what separate them.
- **The Secret Is Handled → Code Along: Closing It Every Single Time**: Reading the password safely is only half of safe. The other half is releasing the connection even when the query fails.

## Additional Analogies / Use Cases
- Closing Is the Beat **People Skip** (food): A table at a packed restaurant. Camping there after you pay keeps the next party waiting outside.
  - *Backup (gaming):* Holding a slot in a full lobby after you stop playing. Nobody else can join until you leave.
  - *Backup (sports):* A court at a busy rec center. Sign it out, play, then sign it back in, or the next team waits.
- SQLAlchemy Gives You an **Engine**, Not a Connection (travel): A rideshare still drives a real car. Someone else just handles the driving for you.
  - *Backup (music):* A guitar plugged straight into an amp versus through a pedalboard. Same guitar, same amp, more handled for you.
  - *Backup (food):* Buying the ingredients versus ordering the dish. The same kitchen cooks it either way.
- Your Password Belongs **Outside** Your Code (community): A community center's door code is given out privately, never painted on the door itself.
  - *Backup (family):* Where the spare key actually lives is something you get told, not something taped to the front door.
  - *Backup (social_media):* Your account password is not in your bio. The app holds it somewhere the public page never shows.
- **Use case:** One Key Typed Into the Code. **Five Years** Exposed. (slide 6)
  - *Source:* [BleepingComputer, October 2022](https://www.bleepingcomputer.com/news/security/toyota-discloses-data-leak-after-access-key-exposed-on-github/)
  - *Summary:* In December 2017 a subcontractor working on Toyota's T-Connect app pushed part of the app's source code to a public GitHub repository, and that code contained a hardcoded access key for the data server holding customer information. Nobody noticed the repository was public until September 15, 2022, nearly five years later. Toyota disclosed on October 7, 2022 that the email addresses and customer management numbers of 296,019 people had been reachable that whole time. Names, phone numbers, and credit card data were not stored in that database. Toyota made the repository private and replaced the exposed credentials, but said it could not completely rule out unauthorized access.
  - *Hook question:* A password typed straight into a file makes the script work today. What could that cost later, and who would even notice?
  - *Revisited/resolved in:* "So far, we've covered..."

## Misconceptions to Watch For
- Key Terms You'll Know by the End of Today: Two of these sound like the same thing and are not. A `connection` is the open link itself. A `cursor` is what you actually send SQL through once that link exists. Flag now that you will be picky about the difference, because the code depends on it.
- Quick recall: Last class, a real `TIMESTAMP` colum: Someone will answer "the data" or "some rows." Redirect gently: every row and every value survived the export perfectly. What did not survive was the database's own description of what those characters mean.
- `psycopg2` Is the Library That **Speaks Postgres**: "Driver" sounds like a person or a car part, and people who have installed a printer driver assume it is an operating system thing. Same word, same idea, different place: a driver is whatever knows how to speak to one specific piece of software or hardware on your behalf. Here, the specific thing is PostgreSQL.
- Closing Is the Beat **People Skip**: The most common belief in this room today will be that step four is optional politeness, like closing a file you are done reading. It is not the same. A file you forget costs your own program a little memory. A connection you forget costs the shared server a slot that nobody else can use, and there is a fixed number of slots.
- A Cursor Is What You **Send SQL Through**: People merge `connect` and `cursor` into one idea. Separate them out loud: the connection is the open line to the server, the cursor is one conversation happening on that line. You can run several cursors on one connection, which is exactly why they are two objects and not one.
- Tuples In, a **Real DataFrame** Out: `cur.description` reads like documentation, so people assume it is a docstring or a help message. It is not. It is structured metadata about the last query the cursor ran, and it is the standard way every Python database library exposes column names. Two precisions if anyone digs: it always describes the most recent query, not all of them, and the second item in each entry is a database-specific type code, not a Python type, so do not let anyone read it as a `dtype`.
- SQLAlchemy Gives You an **Engine**, Not a Connection: "Engine" sounds like the thing that runs the query. It does not. PostgreSQL runs the query. The engine manages the pool of connections your code borrows from, which is why creating one engine and reusing it is normal, while creating a new one per query is not.
- The Same Question, in **One Line of pandas**: People will want to hand `pd.read_sql` the bare `psycopg2` connection from earlier instead of a SQLAlchemy connection. It appears to work, and then prints a warning saying pandas only supports a SQLAlchemy connectable, a database string, or a sqlite3 connection, and that other objects are not tested. Say what pandas actually does next, because it is the concrete reason to care: it falls back to its SQLite code path and runs your Postgres connection through that. Demonstrate it if there is time, because "it ran and only warned" is exactly the kind of thing people learn to scroll past.
- On your board, draw both paths from the same SQL s: Several boards will show SQLAlchemy as a completely separate road to the database. Correct it while walking the room, and then draw the authoritative version on the shared board during the debrief rather than only correcting it pair by pair: your code, then SQLAlchemy, then `psycopg2`, then PostgreSQL, stacked, not side by side. That is the same picture the driver slide named earlier, and seeing it drawn once correctly after trying to draw it themselves is what makes it stick.
- Your Password Belongs **Outside** Your Code: The most common belief here is that a private repo makes hardcoding fine. Push back concretely: a repo's visibility can be flipped by anyone with access, repos get forked, and a secret in git history survives deleting the line, because the old commit still has it. The habit is what protects you, not the setting.
- Open It in a `try`, and **Always** Close It: This is the big one, and it catches experienced people too. Writing `with conn:` around the work does not close the connection. In `psycopg2`, a connection used as a context manager commits or rolls back the transaction when the block ends, and then leaves the connection open on purpose so you can reuse it. You still have to call `conn.close()` yourself. If there is time, prove it live: run a `with conn:` block, then print `conn.closed` and watch it print zero. `psycopg2`'s own documentation calls this out under a warning heading, and its successor library's migration guide describes the old behavior as "surprising," so nobody should feel slow for missing it.
- A teammate's pull request types the password strai: Some people rank the unclosed connection as harmless because nothing visibly breaks. Say what the failure actually looks like when it does arrive: not a slowdown, but connection requests being refused outright once the server's limit is reached, usually to whoever connects next rather than to the person who caused it.
- Key Terms — Recap: Watch for anyone defining `engine` as "SQLAlchemy's version of a connection." It manages connections; it is not one. That distinction is what makes reusing a single engine the normal pattern.

## Optional Videos (If Time Allows)
- [How to Connect to Postgres Using Python](https://www.youtube.com/watch?v=h-u1ML-OWok) (4 min)
  - Free, no account needed. Covers both libraries in a notebook.

## Further Resources (Deck's "Keep Learning" Links)
- [Establishing Connectivity: The Engine](https://docs.sqlalchemy.org/en/20/tutorial/engine.html) (documentation, ~10 min read)
  - What an engine actually is, from SQLAlchemy itself
- [Python Database Programming Exercises](https://pynative.com/python-database-programming-exercise-with-solution/) (practice, ~45 min hands-on)
  - Connect, query, fetch, update, close, with solutions
- [SQLAlchemy: The Best SQL Database Library in Python](https://www.youtube.com/watch?v=aAy-B6KPld8) (video, ~17 min video)
  - A fuller tour of engines, connections, and core ideas

## Top Engagement Strategies Used
- **Turn and Talk** — Warm-Up: What a File Loses: Turn and talk: pairs discuss 1-2 minutes, then a few share out.
- **Poll** — Where Column Names Live: Quick multiple-choice check - reveal results live before moving on.
- **Whiteboard / Collaborative Board** — Two Paths, One DataFrame: Collaborative board (Padlet/Jamboard/physical) - everyone posts at once, then scan together for patterns.
- **Quick-Fire Game** — Reviewing Connection Code: Quick-fire, leaderboard-style prompt - keep the pace brisk; celebrate participation, not just correctness.
