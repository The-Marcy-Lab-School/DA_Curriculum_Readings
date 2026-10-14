# Lab — Independent Schema Critique & Read-Only Role

**Skills assessed:** Relational Databases, Database Administration (see this lab's own `RUBRIC.md`)

**Estimated time:** ~155 minutes (across 2 days) (10 min intro · 130 min collaborative work · 15 min shareout)

## Scenario

You are the first data hire at a small independent record label. The
catalog database was built by a colleague who has since left, and nobody
has ever looked at it closely — as far as the team knows, it works.

Your manager hands you that schema and the catalog data with two asks.
First: tell her honestly what is wrong with it, and then fix it. Second:
the label's new business analyst starts Monday and needs to read the
catalog with no ability to change it — set that account up, and prove it
holds. She wants to see the write actually get rejected, not take your
word for it.

Nobody is going to hand you a template for either job. That is the point
of today.

*Work with your group, but complete and push/commit your own copy of this lab — collaboration is encouraged, a shared submission isn't.*

## Your Objectives

## Day 1

- **Set Up a Practice Database of Your Own**
  - *Today's work is deliberately separate from `nyc_restaurants` — a colleague's record-store database you've been handed to review, not the one you built.*
  - *Hint: Setup, not the assessed part: `CREATE DATABASE record_store;` then `\c record_store`. Confirm your prompt actually reads `record_store=#` before you go on — if you are still in `postgres=#` you will build today's tables in the wrong database.*

- **Load the Flawed Schema — Exactly As Given**
  - *A colleague at a small record label wrote this schema for their catalog. Run it as-is — do not improve it yet. You cannot critique a schema you never actually ran.*
  - *Hint: Your instructor hands you the three `CREATE TABLE` statements — you are not designing this schema and you are not fixing it yet. Run all three unchanged, in `record_store`.*

- **Load the Sample Rows — Exactly As Given**
  - *Two real, unrelated bands here are both called The Rovers — one Irish, one Canadian. That is a real thing that happens to real catalogs, not a typo.*
  - *Hint: Same deal — the sample rows are handed to you, run them unchanged in `record_store`. Read what PostgreSQL says as they load, though. Whatever it declines to complain about is your first piece of evidence.*

- **Independent: Prove a Flaw Is Real, Not Theoretical**
  - *This is the independent part. Reach for the same habit from the join and GROUP BY lectures: do not trust a result because it looks plausible — check it against what you can count by hand.*

  *Complete the TODOs below as you work through this step.*

  ```sql
  -- No template today. Your job: find at least one real, specific
  -- structural flaw, and prove it with a query rather than asserting
  -- it. Some things worth trying:
  --
  -- TODO: count each artist's albums by joining artists to albums.
  --       Does the number match what you can see by eye?
  -- TODO: find any album whose artist is not in the artists table.
  -- TODO: answer "how many Rock tracks are there?" — then answer it
  --       a second, different way and compare.
  -- TODO: look for an id that appears twice where it should not.
  -- TODO: change one artist's country and see what the albums table
  --       still says afterwards.
  ```

- **Independent: Write the Critique**
  - *Write this in a real file (`schema_critique_lab.md`) you keep — a written critique you can hand to someone else is the actual professional artifact here, not a verbal observation.*
  - *Hint: Three sections, and it is graded on all three: the flaw (name the table and column — not "it isn't normalized"), the real risk (what breaks, and when, pointing at a query result you actually ran), and what you would change (structural — keys, constraints, a split table — not "be careful when inserting").*

  *Complete the TODOs below as you work through this step.*

  ```markdown
  # Schema Critique — Record Store Catalog

  ## The flaw
  <!-- TODO: name the table(s) and column(s). Be specific — not
       "the schema is not normalized." -->

  ## The real risk
  <!-- TODO: what actually breaks, or silently goes wrong, and when?
       Point at the query result you just ran as evidence. -->

  ## What I would change
  <!-- TODO: sketch the fix — real keys, real constraints, any table
       you would split. A sentence or two; no full CREATE TABLE
       syntax needed here. -->
  ```

## Day 2

- **Independent: Rebuild the Schema Correctly**
  - *Hint: Build it in a brand-new `record_store_v2` and leave the flawed database untouched, so you can put the two side by side afterwards. Every table needs a real key and at least one real constraint beyond that key.*

  *Complete the TODOs below as you work through this step.*

  ```sql
  CREATE DATABASE record_store_v2;
  \c record_store_v2

  -- TODO: rebuild all three tables so that:
  --   * every table has a real PRIMARY KEY
  --   * a table points at another table by that table's key, not by
  --     copying its text
  --   * no column holds a list of values
  --   * a fact is stored in exactly one place
  --   * at least one NOT NULL and one CHECK per table catches bad
  --     data on insert
  -- Build it in record_store_v2 and leave the flawed database alone,
  -- so you can compare the two afterwards.
  ```

- **Load the Same Data Into Your Fixed Schema**
  - *Two rows from the original data cannot come across unchanged. Noticing which ones, and why, is the point of this step.*
  - *Hint: Finish by answering "how many Rock tracks are there?" against your fixed schema. This time there should be exactly one defensible answer — compare it with the two you got earlier.*

  *Complete the TODOs below as you work through this step.*

  ```sql
  -- TODO: load the same catalog into your new tables. The data has
  --       not changed — but your schema now has opinions about it.
  -- TODO: one album in the original data cannot be loaded until you
  --       do something first. Work out what, and do it.
  -- TODO: finish by answering "how many Rock tracks are there?"
  --       against your fixed schema. This time there should be
  --       exactly one defensible answer.
  ```

- **Prove the Fixed Schema Rejects What the Old One Accepted** *(expect this to raise `one rejection per statement: 23505, then 23503, then 23514, then 23502` — that's the point, not a bug)*
  - *Every one of these four rows loaded without complaint into the flawed schema. A constraint you never tested is a constraint you do not know you have.*
  - *Hint: Four deliberately bad rows, each one aimed at a different constraint. Run them one at a time so each rejection stays next to the statement that caused it — and if any of them succeeds, your schema is not actually fixed yet.*

  *Complete the TODOs below as you work through this step.*

  ```sql
  -- Run these one at a time, so each rejection stays next to the
  -- statement that caused it. Every one should be refused. If any
  -- of them succeeds, your schema is not actually fixed yet — go
  -- back and find out which constraint you are missing.
  --
  -- TODO: insert a second album reusing an album_id that already
  --       exists.
  -- TODO: insert an album whose artist_id belongs to no artist.
  -- TODO: insert a track with a negative unit_price.
  -- TODO: insert an artist with no country.
  ```

- **Independent: Create a Read-Only Role**
  - *A password in a file you commit is a real incident, not a style issue. Use a throwaway value locally and never paste a real one into a worksheet, a slide, or a repo.*

  *Complete the TODOs below as you work through this step.*

  ```sql
  -- Your label wants an analyst who can read the catalog and cannot
  -- change it. Create that role and grant it, in record_store_v2.
  --
  -- TODO: create a role that can actually log in.
  -- TODO: let it connect to this database.
  -- TODO: let it see inside the schema its tables live in.
  -- TODO: let it read every table that exists right now.
  -- TODO: make sure a table you create TOMORROW is readable too,
  --       without you having to remember to re-grant.
  --
  -- Grant only what a reader needs. Do not grant anything else and
  -- then try to take it back.
  ```

- **Prove It: A Write From That Role Is Actually Rejected** *(expect this to raise `42501 permission denied for table — on the write only; the read above it must succeed` — that's the point, not a bug)*
  - *If your local PostgreSQL asks for a password here, it wants the one you set on the role — not your own login.*
  - *Hint: Both halves are required: connect as the role and run a real `SELECT` that returns rows, then from that same role attempt a real write and confirm it is refused. A role you only ever read from is a role you have not tested.*

  *Complete the TODOs below as you work through this step.*

  ```bash
  # TODO: connect as reporting_reader, not as yourself, and run a
  #       real SELECT. It has to return rows.
  # TODO: from that same role, attempt a real INSERT. It has to be
  #       refused.
  # Both halves are required. A role you only ever read from is a
  # role you have not tested.
  ```

- **Stretch (Optional): The Grant That Does Not Cover Tomorrow's Table**
  - *Replace `-U postgres` with whichever superuser your own local PostgreSQL logs you in as.*
  - *Hint: Only if you finished early. Create one new table as yourself, then try to read it as `reporting_reader` — but predict the result out loud before you run it, and be ready to explain whatever you actually get.*

  *Complete the TODOs below as you work through this step.*

  ```bash
  # Only if you finished early.
  # TODO: as yourself, create one new table in record_store_v2.
  # TODO: as reporting_reader, try to read it.
  # TODO: predict the result BEFORE you run it, then explain what
  #       you actually got.
  ```

## Share Out

Which flaw did your group lead with in the critique — the missing keys,
the artist country stored in two places, or the comma-separated genre
list? Whichever you picked, why was that the one you would put in front
of a manager first?

When you rebuilt, did you land on three tables or five? A group that
gave each track a single genre and a group that built a separate link
table made different decisions about what this catalog is even allowed
to remember. Ask the other group what their design decided to forget.

And the read-only role: what surprised you when you tested it? Something
you expected to be blocked probably was not, or something you expected
to just work needed a grant you had not thought about. Name the one that
caught your group out.
