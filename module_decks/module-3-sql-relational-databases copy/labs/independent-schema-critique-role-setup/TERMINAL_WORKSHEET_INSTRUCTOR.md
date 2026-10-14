# Lab — Independent Schema Critique & Read-Only Role

> **You are not presenting this worksheet to students.** Use it as your own answer key while circulating during lab time.

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

## Day 1

## Set Up a Practice Database of Your Own

*Context: Today's work is deliberately separate from `nyc_restaurants` — a colleague's record-store database you've been handed to review, not the one you built.*

**Hint given to students:** Setup, not the assessed part: `CREATE DATABASE record_store;` then `\c record_store`. Confirm your prompt actually reads `record_store=#` before you go on — if you are still in `postgres=#` you will build today's tables in the wrong database.

**Instructor notes:**

> Setup only, not the assessed part — hand this one out freely so
> nobody loses lab time to it. Confirm the prompt actually changes to
> `record_store=#` before anyone moves on; a Fellow who stayed in
> `postgres=#` will silently build today's tables in the wrong
> database.

```sql
CREATE DATABASE record_store;
\c record_store
```

## Load the Flawed Schema — Exactly As Given

*Context: A colleague at a small record label wrote this schema for their catalog. Run it as-is — do not improve it yet. You cannot critique a schema you never actually ran.*

**Hint given to students:** Your instructor hands you the three `CREATE TABLE` statements — you are not designing this schema and you are not fixing it yet. Run all three unchanged, in `record_store`.

**Instructor notes:**

> INSTRUCTOR ANSWER KEY — do not read this aloud before Fellows have
> looked for themselves. There are four real, findable flaws planted
> here, and a Fellow only has to name and justify ONE to meet the bar:
> 
> 1. No PRIMARY KEY on any table. `artist_id`/`album_id`/`track_id`
>    are just integers, so duplicate ids and NULL ids both insert
>    happily. Nothing is actually identified by anything.
> 2. No FOREIGN KEY anywhere. `albums` points at its artist by
>    copying `artist_name` as text, and `tracks` points at its album
>    by copying `album_title`. Nothing enforces that either target
>    exists, and two different artists who share a name are
>    indistinguishable to any join.
> 3. `albums.artist_country` is a transitive dependency — it depends
>    on the artist, not on the album. That is the 3NF violation from
>    Day 1, and it produces a real update anomaly (query E in the
>    "Prove a Flaw Is Real" step proves it).
> 4. `tracks.genres` holds a comma-separated list ("Rock, Folk").
>    That is the 1NF repeating-group violation from Day 1 — the
>    column holds more than one value, so no reliable query can
>    count tracks by genre (query C in the "Prove a Flaw Is Real"
>    step proves it).
> 
> Also present, and worth credit if a Fellow names it: no
> `NOT NULL`/`CHECK` constraint anywhere, so a negative `unit_price`
> loads without complaint (Day 2's constraints lesson, and the
> project's own common mistake #4).

```sql
CREATE TABLE artists (
    artist_id      INTEGER,
    artist_name    TEXT,
    artist_country TEXT
);

CREATE TABLE albums (
    album_id       INTEGER,
    album_title    TEXT,
    artist_name    TEXT,
    artist_country TEXT,
    release_year   INTEGER
);

CREATE TABLE tracks (
    track_id       INTEGER,
    track_name     TEXT,
    album_title    TEXT,
    genres         TEXT,
    length_seconds INTEGER,
    unit_price     NUMERIC
);
```

## Load the Sample Rows — Exactly As Given

*Context: Two real, unrelated bands here are both called The Rovers — one Irish, one Canadian. That is a real thing that happens to real catalogs, not a typo.*

**Hint given to students:** Same deal — the sample rows are handed to you, run them unchanged in `record_store`. Read what PostgreSQL says as they load, though. Whatever it declines to complain about is your first piece of evidence.

**Instructor notes:**

> Every row loads without a single complaint from PostgreSQL — that
> is itself the first evidence. Say the counts out loud only if
> someone is stuck: `INSERT 0 3`, `INSERT 0 5`, `INSERT 0 5`.
> 
> What is planted in here, for your own reference: two same-named
> bands (artist_id 1 and 3), a duplicated `album_id` 12, an album
> by "Karo Mane" who appears in no artists row at all, two
> comma-list genre values, and a negative `unit_price` on track 103.

```sql
INSERT INTO artists (artist_id, artist_name, artist_country) VALUES
  (1, 'The Rovers', 'Ireland'),
  (2, 'Nina Cruz',  'USA'),
  (3, 'The Rovers', 'Canada');

INSERT INTO albums (album_id, album_title, artist_name, artist_country, release_year) VALUES
  (10, 'Long Way Home',      'The Rovers', 'Ireland', 1998),
  (11, 'Second Wind',        'The Rovers', 'Canada',  2004),
  (12, 'Blue Hour',          'Nina Cruz',  'USA',     2011),
  (12, 'Blue Hour (Deluxe)', 'Nina Cruz',  'USA',     2012),
  (13, 'Ghost Signal',       'Karo Mane',  'Brazil',  2019);

INSERT INTO tracks (track_id, track_name, album_title, genres, length_seconds, unit_price) VALUES
  (100, 'Coast Road',     'Long Way Home', 'Rock, Folk',  214,  0.99),
  (101, 'Harbour Lights', 'Long Way Home', 'Rock',        187,  0.99),
  (102, 'Second Wind',    'Second Wind',   'Rock, Live',  240,  0.99),
  (103, 'Blue Hour',      'Blue Hour',     'Jazz, Blues', 305, -0.99),
  (104, 'Static',         'Ghost Signal',  'Electronic',  198,  0.99);
```

## Independent: Prove a Flaw Is Real, Not Theoretical

*Context: This is the independent part. Reach for the same habit from the join and GROUP BY lectures: do not trust a result because it looks plausible — check it against what you can count by hand.*

**Instructor notes:**

> ANSWER KEY — real, verified results for each query:
> 
> A: three rows — Nina Cruz/USA = 2, The Rovers/Canada = 2, The
>    Rovers/Ireland = 2. Every one of those is wrong. Each Rovers
>    band actually made one album, but joining on a shared name
>    fans both albums out onto both bands. Nina Cruz shows 2 for a
>    different reason: `album_id` 12 exists twice. This is the
>    project's own common mistake #2 (a join silently duplicating
>    rows), reached through a schema flaw rather than a query bug.
> B: one row — album 13, "Ghost Signal", by "Karo Mane", who is in
>    no artists row. Nothing stopped that insert, because there is
>    no foreign key to stop it.
> C: `= 'Rock'` returns 1. `LIKE '%Rock%'` returns 3. Both are
>    defensible readings of the same column, which is exactly the
>    problem — and `LIKE` would also match a genre called "Punk
>    Rock", so it is not a fix either. A column holding a list
>    cannot be filtered reliably.
> D: `album_id` 12 appears twice; track 103 has `unit_price` -0.99.
> E: after the UPDATE, `artists` says UK and `albums` still says
>    Ireland for the same band. The database now contradicts itself
>    and neither copy is marked as the wrong one. That is the
>    update anomaly Day 1 predicted, happening for real.
> 
> Circulate for a specific failure mode: a Fellow who reports "there
> are no primary keys" and stops. That is true but it is not yet a
> critique — push for what actually breaks, and when. "No primary
> key" plus "so `album_id` 12 is already duplicated and a lookup by
> id returns two different albums" is the bar.

```sql
-- A: album count per artist, joined the only way this schema allows
SELECT a.artist_name, a.artist_country, COUNT(*) AS album_count
FROM artists a
JOIN albums al ON a.artist_name = al.artist_name
GROUP BY a.artist_name, a.artist_country
ORDER BY a.artist_name, a.artist_country;

-- B: an album whose artist is in no artists row at all
SELECT album_id, album_title, artist_name
FROM albums al
WHERE NOT EXISTS (SELECT 1 FROM artists a WHERE a.artist_name = al.artist_name);

-- C: "how many Rock tracks?" — asked two defensible ways
SELECT COUNT(*) AS exact_match FROM tracks WHERE genres = 'Rock';
SELECT COUNT(*) AS like_match  FROM tracks WHERE genres LIKE '%Rock%';

-- D: an id that appears twice, and a price that should be impossible
SELECT album_id, COUNT(*) FROM albums GROUP BY album_id HAVING COUNT(*) > 1;
SELECT track_id, track_name, unit_price FROM tracks WHERE unit_price < 0;

-- E: the update anomaly
UPDATE artists SET artist_country = 'UK' WHERE artist_id = 1;
SELECT artist_name, artist_country FROM artists WHERE artist_id = 1;
SELECT album_id, album_title, artist_name, artist_country FROM albums WHERE album_id = 10;
```

## Independent: Write the Critique

*⚠️ Not auto-validated: A written deliverable — the reasoning is the point, and there is no single checkable output to run.*

*Context: Write this in a real file (`schema_critique_lab.md`) you keep — a written critique you can hand to someone else is the actual professional artifact here, not a verbal observation.*

**Hint given to students:** Three sections, and it is graded on all three: the flaw (name the table and column — not "it isn't normalized"), the real risk (what breaks, and when, pointing at a query result you actually ran), and what you would change (structural — keys, constraints, a split table — not "be careful when inserting").

**Instructor notes:**

> The `code` block above is one example of a passing critique, not
> the only correct answer — a Fellow who leads with the 1NF `genres`
> list, or with the 3NF `artist_country` transitive dependency,
> passes just as cleanly. Grade against three things only:
> 
> - Is the flaw specific (named table and column), not a style
>   complaint?
> - Is the risk real and concrete (what breaks, when), rather than
>   "it is bad practice"?
> - Is the proposed fix structural (keys, constraints, a split
>   table), rather than "be careful when inserting"?
> 
> This is the same bar `PROJECT.md`'s Sprint Day 2
> (`schema_critique.md`) uses — but that one is a different schema
> in a different domain, so nothing here spoils it. Do not show
> Fellows the project's version today.

```markdown
# NOTE: not auto-validated - A written deliverable — the reasoning is the point, and there is no single checkable output to run.
# Schema Critique — Record Store Catalog

## The flaw
`albums` identifies its artist by copying `artist_name` as text, and
there is no primary key on `artists.artist_id` or foreign key on
`albums` to connect the two tables for real.

## The real risk
Two unrelated bands are both called The Rovers. Because the only
available join is on the shared name, a per-artist album count
returns 2 for each of them when each actually released one album —
and no error is raised, so the number looks usable. The same gap let
album 13 load with an artist ("Karo Mane") who exists nowhere in
`artists`, and `albums.artist_country` is now stale after the
artist's country was corrected in only one of the two places it is
stored.

## What I would change
Make `artists.artist_id` a real `PRIMARY KEY`, replace
`albums.artist_name`/`albums.artist_country` with an
`artist_id INTEGER NOT NULL REFERENCES artists(artist_id)`, and do
the same for `tracks` → `albums`. Split `tracks.genres` out into a
`genres` table plus a track-to-genre link table so one track can
carry several genres without a comma list. Add `NOT NULL` on the
name columns and a `CHECK (unit_price >= 0)` on `tracks`.
```

## Day 2

## Independent: Rebuild the Schema Correctly

**Hint given to students:** Build it in a brand-new `record_store_v2` and leave the flawed database untouched, so you can put the two side by side afterwards. Every table needs a real key and at least one real constraint beyond that key.

**Instructor notes:**

> Five tables is the fullest fix, not the required one. A Fellow who
> keeps three tables, drops the comma list by giving `tracks` a
> single `genre_id INTEGER NOT NULL REFERENCES genres(genre_id)`, and
> gets real keys and constraints in place has met today's bar — the
> two-table `genres` + `track_genres` split is what a track carrying
> several genres at once actually requires, and is worth naming out
> loud in the debrief as the reason a link table exists at all.
> 
> `PRIMARY KEY (track_id, genre_id)` on the link table is a composite
> key, which no lecture has shown yet. Do not require it. If a Fellow
> arrives there on their own, that is genuinely above the bar; if
> not, a plain surrogate `id` column on the link table is fine.
> 
> Two things to insist on, since both are graded on the project:
> `artist_country` must not survive as a column on `albums` (that is
> the 3NF violation moving house, not getting fixed), and every table
> needs at least one real constraint beyond its key.

```sql
CREATE DATABASE record_store_v2;
\c record_store_v2

CREATE TABLE artists (
    artist_id   INTEGER PRIMARY KEY,
    artist_name TEXT NOT NULL,
    country     TEXT NOT NULL
);

CREATE TABLE albums (
    album_id     INTEGER PRIMARY KEY,
    album_title  TEXT NOT NULL,
    artist_id    INTEGER NOT NULL REFERENCES artists(artist_id),
    release_year INTEGER CHECK (release_year BETWEEN 1900 AND 2100)
);

CREATE TABLE tracks (
    track_id       INTEGER PRIMARY KEY,
    track_name     TEXT NOT NULL,
    album_id       INTEGER NOT NULL REFERENCES albums(album_id),
    length_seconds INTEGER CHECK (length_seconds > 0),
    unit_price     NUMERIC(5,2) NOT NULL CHECK (unit_price >= 0)
);

CREATE TABLE genres (
    genre_id   INTEGER PRIMARY KEY,
    genre_name TEXT NOT NULL
);

CREATE TABLE track_genres (
    track_id INTEGER NOT NULL REFERENCES tracks(track_id),
    genre_id INTEGER NOT NULL REFERENCES genres(genre_id),
    PRIMARY KEY (track_id, genre_id)
);
```

## Load the Same Data Into Your Fixed Schema

*Context: Two rows from the original data cannot come across unchanged. Noticing which ones, and why, is the point of this step.*

**Hint given to students:** Finish by answering "how many Rock tracks are there?" against your fixed schema. This time there should be exactly one defensible answer — compare it with the two you got earlier.

**Instructor notes:**

> The two rows that cannot survive the move, and why:
> 
> - "Ghost Signal" needs Karo Mane inserted as artist 4 first. The
>   foreign key now forbids the orphan the old schema accepted
>   silently. This is the fix working, not an obstacle.
> - "Blue Hour (Deluxe)" cannot reuse `album_id` 12. Either it gets
>   its own id or it was never a separate album — the Fellow has to
>   make a real decision the old schema let them avoid. Either
>   answer is fine as long as they can say which they chose.
> 
> The final query returns **3** — verified. One number, arrived at
> one way, with no `LIKE` guessing. Contrast it out loud with the
> 1-or-3 ambiguity from query C in the "Prove a Flaw Is Real" step;
> that contrast is the clearest payoff of the whole rebuild.
> 
> A Fellow who used a single `genre_id` on `tracks` instead of a
> link table will get 2 here, not 3, because track 100 and 102 can
> only carry one genre each. That is a correct result for their
> schema and a good, honest prompt for the debrief question: what
> did their design decide to forget?

```sql
INSERT INTO artists (artist_id, artist_name, country) VALUES
  (1, 'The Rovers', 'Ireland'),
  (2, 'Nina Cruz',  'USA'),
  (3, 'The Rovers', 'Canada'),
  (4, 'Karo Mane',  'Brazil');

INSERT INTO albums (album_id, album_title, artist_id, release_year) VALUES
  (10, 'Long Way Home', 1, 1998),
  (11, 'Second Wind',   3, 2004),
  (12, 'Blue Hour',     2, 2011),
  (13, 'Ghost Signal',  4, 2019);

INSERT INTO tracks (track_id, track_name, album_id, length_seconds, unit_price) VALUES
  (100, 'Coast Road',     10, 214, 0.99),
  (101, 'Harbour Lights', 10, 187, 0.99),
  (102, 'Second Wind',    11, 240, 0.99),
  (103, 'Blue Hour',      12, 305, 0.99),
  (104, 'Static',         13, 198, 0.99);

INSERT INTO genres (genre_id, genre_name) VALUES
  (1, 'Rock'), (2, 'Folk'), (3, 'Live'), (4, 'Jazz'), (5, 'Blues'), (6, 'Electronic');

INSERT INTO track_genres (track_id, genre_id) VALUES
  (100, 1), (100, 2), (101, 1), (102, 1), (102, 3), (103, 4), (103, 5), (104, 6);

SELECT COUNT(*) AS rock_tracks
FROM track_genres tg
JOIN genres g ON g.genre_id = tg.genre_id
WHERE g.genre_name = 'Rock';
```

## Prove the Fixed Schema Rejects What the Old One Accepted

*Note: this command is expected to fail/raise `one rejection per statement: 23505, then 23503, then 23514, then 23502` - that's the teaching point, not a bug.*

*Context: Every one of these four rows loaded without complaint into the flawed schema. A constraint you never tested is a constraint you do not know you have.*

**Hint given to students:** Four deliberately bad rows, each one aimed at a different constraint. Run them one at a time so each rejection stays next to the statement that caused it — and if any of them succeeds, your schema is not actually fixed yet.

**Instructor notes:**

> Verified behaviour, so you can answer this confidently when it
> comes up: a normal interactive `psql` session does **not** stop at
> the first error. Paste all four at once and you get all four
> rejections, one after the other, and the session carries on. (It
> is only `psql -v ON_ERROR_STOP=1`, used in scripts, that aborts at
> the first one.) Running them one at a time is still the better
> habit here — it keeps each rejection next to the statement that
> caused it — but a Fellow who pasted the block has not missed
> anything.
> 
> Verified error text, in order:
> 
> - `ERROR: 23505: duplicate key value violates unique constraint
>   "albums_pkey"` — DETAIL names `Key (album_id)=(12)`.
> - `ERROR: 23503: insert or update on table "albums" violates
>   foreign key constraint "albums_artist_id_fkey"` — DETAIL says
>   `Key (artist_id)=(99) is not present in table "artists"`.
> - `ERROR: 23514: new row for relation "tracks" violates check
>   constraint "tracks_unit_price_check"`.
> - `ERROR: 23502: null value in column "country" of relation
>   "artists" violates not-null constraint`.
> 
> Constraint names differ if a Fellow named theirs explicitly; the
> five-digit SQLSTATE code at the front does not. Point that out —
> reading the code rather than the sentence is how you tell a
> permissions failure from a data failure in a log you did not
> write.

```sql
INSERT INTO albums (album_id, album_title, artist_id, release_year)
  VALUES (12, 'Blue Hour (Deluxe)', 2, 2012);

INSERT INTO albums (album_id, album_title, artist_id, release_year)
  VALUES (14, 'Ghost Signal II', 99, 2020);

INSERT INTO tracks (track_id, track_name, album_id, length_seconds, unit_price)
  VALUES (105, 'Bad Price', 12, 200, -0.99);

INSERT INTO artists (artist_id, artist_name, country)
  VALUES (5, 'No Country', NULL);
```

## Independent: Create a Read-Only Role

*Context: A password in a file you commit is a real incident, not a style issue. Use a throwaway value locally and never paste a real one into a worksheet, a slide, or a repo.*

**Instructor notes:**

> What each line actually does — all four verified on a stock
> PostgreSQL 16, because two of them are more defensive than
> strictly required and it is worth knowing which:
> 
> - `LOGIN` — genuinely required. Without it, connecting fails with
>   `FATAL: role "..." is not permitted to log in`, before any
>   privilege is consulted at all.
> - `GRANT SELECT ON ALL TABLES IN SCHEMA public` — genuinely
>   required. Without it the role connects perfectly happily and
>   then gets `ERROR: permission denied for table albums` on its
>   first read.
> - `GRANT CONNECT ON DATABASE` — on a stock database this line
>   changes nothing, because `PUBLIC` already holds `CONNECT` on
>   every new database. It starts mattering only after someone runs
>   `REVOKE CONNECT ON DATABASE ... FROM PUBLIC` (routine hardening
>   on a real server), at which point a role without it is refused
>   with `FATAL: permission denied for database ... User does not
>   have CONNECT privilege`. Write it anyway — it costs nothing and
>   makes the role work on a locked-down server — but do not tell
>   Fellows the connection fails without it, because on their own
>   laptop it will not.
> - `GRANT USAGE ON SCHEMA public` — same story, same reason: the
>   `public` schema still grants `USAGE` to `PUBLIC` by default
>   (PostgreSQL 15 removed `CREATE` from that default, not
>   `USAGE`). Put the tables in any *other* schema and `USAGE`
>   becomes hard-required — `SELECT` granted on the table alone
>   still fails with `ERROR: permission denied for schema
>   reporting`. Verified both ways.
> 
> So a Fellow who omitted either of those two lines has still built
> a working read-only role on their own machine. Do not mark that
> wrong. Ask instead what would happen on a server where `PUBLIC`
> had been stripped — that is the real interview version of the
> question, and it is why the habit of granting explicitly is worth
> keeping.
> 
> The fifth line is the one almost nobody writes unprompted:
> `GRANT SELECT ON ALL TABLES` applies only to tables that exist at
> the moment it runs. Create a table tomorrow and the reader cannot
> see it. `ALTER DEFAULT PRIVILEGES` is what covers future tables.
> Both branches were verified for real — see the stretch step at the
> end, which makes it visible rather than taking it on faith.
> 
> Watch for the shortcut version: `GRANT ALL` followed by a
> `REVOKE`. Ask that Fellow to state exactly what is left after the
> revoke. Usually they cannot, which is the answer — grant up from
> nothing, do not trim down from everything.

```sql
CREATE ROLE reporting_reader LOGIN PASSWORD 'change_me_locally';
GRANT CONNECT ON DATABASE record_store_v2 TO reporting_reader;
GRANT USAGE ON SCHEMA public TO reporting_reader;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO reporting_reader;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO reporting_reader;
```

## Prove It: A Write From That Role Is Actually Rejected

*Note: this command is expected to fail/raise `42501 permission denied for table — on the write only; the read above it must succeed` - that's the teaching point, not a bug.*

*Context: If your local PostgreSQL asks for a password here, it wants the one you set on the role — not your own login.*

**Hint given to students:** Both halves are required: connect as the role and run a real `SELECT` that returns rows, then from that same role attempt a real write and confirm it is refused. A role you only ever read from is a role you have not tested.

**Instructor notes:**

> This step is the whole difference between "Meets" and
> "Approaching" on the project's `database-administration` criterion.
> A Fellow who granted `SELECT` and stopped has done half of it.
> 
> Verified results:
> 
> - `SELECT COUNT(*) FROM albums` returns **4**. Exit code 0.
> - The INSERT returns `ERROR: 42501: permission denied for table
>   albums`. Exit code 1.
> - UPDATE and DELETE return the identical message, also 42501.
> - `CREATE TABLE` returns `ERROR: permission denied for schema
>   public` — a different message with the same 42501 code, because
>   PostgreSQL 15 and later stopped letting every role create
>   objects in `public` by default.
> - `DROP TABLE albums` returns `ERROR: must be owner of table
>   albums` — ownership, not a grant, which is why no read-only
>   grant could have prevented it anyway.
> 
> For the write-up: the sentence that earns the mark is not "I
> created a read-only role." It is "I connected as the role, read 4
> rows, attempted an INSERT, and got `permission denied for table
> albums`." Have them paste the real error text, not a paraphrase —
> that is exactly what `role_setup.md` asks for on Sprint Day 5.

```bash
$ psql -U reporting_reader -d record_store_v2 -c "SELECT COUNT(*) AS albums_visible FROM albums;"
$ psql -U reporting_reader -d record_store_v2 -c "INSERT INTO albums (album_id, album_title, artist_id, release_year) VALUES (99, 'Should Not Land', 1, 2024);"
$ psql -U reporting_reader -d record_store_v2 -c "UPDATE albums SET album_title = 'Nope' WHERE album_id = 10;"
$ psql -U reporting_reader -d record_store_v2 -c "DELETE FROM albums WHERE album_id = 10;"
```

## Stretch (Optional): The Grant That Does Not Cover Tomorrow's Table

*Context: Replace `-U postgres` with whichever superuser your own local PostgreSQL logs you in as.*

**Hint given to students:** Only if you finished early. Create one new table as yourself, then try to read it as `reporting_reader` — but predict the result out loud before you run it, and be ready to explain whatever you actually get.

**Instructor notes:**

> Verified both ways, so you can run either branch live:
> 
> - With the `ALTER DEFAULT PRIVILEGES` line from the read-only-role
>   step in place,
>   the reader can read the brand-new `plays` table immediately —
>   `plays_visible` returns 0 rows, exit code 0. Zero rows is the
>   right answer; it means the read was allowed and the table is
>   simply empty. Make sure nobody misreads 0 as a rejection.
> - Without that line (or after
>   `ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE SELECT ON
>   TABLES FROM reporting_reader`), the same read fails with
>   `ERROR: permission denied for table plays` — verified.
> 
> That is the whole lesson of the step: a grant that passed its test
> on Monday can silently stop covering the database by Friday, and
> nothing warns you. It is a good, honest answer to the interview
> question "how do you keep a read-only role read-only over time?"

```bash
$ psql -U postgres -d record_store_v2 -c "CREATE TABLE plays (play_id INTEGER PRIMARY KEY, track_id INTEGER NOT NULL REFERENCES tracks(track_id), played_at DATE NOT NULL);"
$ psql -U reporting_reader -d record_store_v2 -c "SELECT COUNT(*) AS plays_visible FROM plays;"
```

## Share Out

*Reconvene as a full class for the last stretch of lab time. Ask a few groups to share their approach before revealing any single "right" way — the point is comparing real approaches, not a recap.*

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
