# Code Execution Validation — Lab: Independent Schema Critique & Read-Only Role

**Result: 10 of 10 executable steps PASS. 1 step skipped (declared
`skip_validation`, a written deliverable). Zero failures, zero Pass A/Pass B
disagreements. Three factual errors in instructor notes were found by real
execution and corrected — see "Privilege claims checked individually" and "Claim
corrected by validation" below.**

## Environment

Real PostgreSQL, not a simulation: a throwaway `postgres:16-alpine` Docker
container (`m3_day11_validate`, host port 55442), torn down after the run.
`docker ps -a` was checked first — no leftover `m3_*` container from an earlier
session existed, so the run started genuinely clean.

Nine of the eleven fenced blocks are `language: sql`, executed through `psql`;
two are `language: bash` (`psql -U ... -c "..."` invocations), executed line by
line with the worksheet's `$ ` prompt prefix stripped.

## No cumulative state replay — and why that is correct here

Unlike every Day 2-10 lecture deck in this module, this lab does **not** replay
the module's cumulative `nyc_restaurants` database. It is deliberately
standalone: it builds its own `record_store` (the flawed schema handed to the
Fellow) and `record_store_v2` (the Fellow's own corrected rebuild) from nothing.
Validation therefore started from an empty PostgreSQL instance, which is exactly
the state a Fellow's own machine is in when the lab begins.

## Pass A — per-step, isolated

Each step's `code` field (never `starter_code`) was written to its own file and
run against the shared instance in lab order.

| # | Step | `expected_error` | Exit | Result |
|---|---|---|---|---|
| 1 | Set Up a Practice Database of Your Own | — | 0 | **PASS** (`CREATE DATABASE`, `\c` reports connection to `record_store`) |
| 2 | Load the Flawed Schema — Exactly As Given | — | 0 | **PASS** (3 × `CREATE TABLE`) |
| 3 | Load the Sample Rows — Exactly As Given | — | 0 | **PASS** (`INSERT 0 3`, `INSERT 0 5`, `INSERT 0 5` — every planted-bad row accepted without complaint, which is the teaching point) |
| 4 | Independent: Prove a Flaw Is Real, Not Theoretical | — | 0 | **PASS** (5 queries A-E, all output verified below) |
| 5 | Independent: Write the Critique | — | — | **SKIPPED** (`skip_validation: true` — a written deliverable, no checkable output) |
| 6 | Independent: Rebuild the Schema Correctly | — | 0 | **PASS** (`CREATE DATABASE` + 5 × `CREATE TABLE`) |
| 7 | Load the Same Data Into Your Fixed Schema | — | 0 | **PASS** (4/4/5/6/8 rows inserted; final query returns `rock_tracks = 3`) |
| 8 | Prove the Fixed Schema Rejects What the Old One Accepted | `23505, 23503, 23514, 23502` | 1 each | **PASS** — all four statements rejected, each with the exact SQLSTATE claimed |
| 9 | Independent: Create a Read-Only Role | — | 0 | **PASS** (`CREATE ROLE`, 3 × `GRANT`, `ALTER DEFAULT PRIVILEGES`) |
| 10 | Prove It: A Write From That Role Is Actually Rejected | `42501` on the writes | 0 then 1,1,1 | **PASS** — read succeeds, all three writes rejected |
| 11 | Stretch (Optional): The Grant That Does Not Cover Tomorrow's Table | — | 0 | **PASS** (both branches run — see below) |

## Pass B — the whole assembled instructor worksheet, in file order

Both databases and the `reporting_reader` role were dropped, then every fenced
block was extracted from the generated `TERMINAL_WORKSHEET_INSTRUCTOR.md` **in
file order** and re-run:

- Blocks 1, 2, 3, 4, 6, 7 concatenated and run in a **single continuous `psql`
  session** with `-v ON_ERROR_STOP=1`, starting from the `postgres` database so
  the worksheet's own `\c` meta-commands do the database switching. **Exit code
  0.** The `markdown` block (step 5) was skipped as non-executable.
- Block 8 run against `record_store_v2` in plain `psql` (no `ON_ERROR_STOP`, the
  way a Fellow actually runs it). All four rejections produced, session survived.
- Block 9 run with `ON_ERROR_STOP=1`. Exit 0.
- Blocks 10 and 11 run line by line as shell commands.

Every block produced output identical to its Pass A run. **No Pass A / Pass B
disagreement** — nothing in the lab depends on hidden state.

## Verified output (the numbers and errors the instructor notes actually claim)

**Step 4A — album count per artist, joined the only way the flawed schema
allows:**

```
 artist_name | artist_country | album_count
-------------+----------------+-------------
 Nina Cruz   | USA            |           2
 The Rovers  | Canada         |           2
 The Rovers  | Ireland        |           2
```

Confirms the answer key exactly: all three counts are wrong. Each Rovers band
released one album, but a name-based join fans both albums onto both bands; Nina
Cruz shows 2 because `album_id` 12 exists twice.

**Step 4B — the orphan:** one row, `13 | Ghost Signal | Karo Mane`. Confirmed.

**Step 4C — "how many Rock tracks?":** `= 'Rock'` returns **1**,
`LIKE '%Rock%'` returns **3**. Both numbers confirmed; the note's claim that the
comma-list column supports two defensible-but-different answers is accurate.

**Step 4D:** `album_id` 12 appears twice; track 103 has `unit_price` **-0.99**.
Both confirmed.

**Step 4E — the update anomaly:** after
`UPDATE artists SET artist_country = 'UK' WHERE artist_id = 1`, `artists` reads
`The Rovers | UK` while `albums` still reads `Long Way Home | The Rovers |
Ireland`. Confirmed — the database really does contradict itself, with no error
raised.

**Step 7 — the payoff query:** `rock_tracks` returns **3**, one way, no `LIKE`.
Confirmed against the 1-or-3 ambiguity of step 4C.

**Step 8 — the four rejections**, run with `-v VERBOSITY=verbose` to capture the
SQLSTATE the notes quote:

```
ERROR:  23505: duplicate key value violates unique constraint "albums_pkey"
ERROR:  23503: insert or update on table "albums" violates foreign key constraint "albums_artist_id_fkey"
ERROR:  23514: new row for relation "tracks" violates check constraint "tracks_unit_price_check"
ERROR:  23502: null value in column "country" of relation "artists" violates not-null constraint
```

All four codes and all four constraint names in the instructor notes match the
real output verbatim, including the `DETAIL:` lines quoted
(`Key (album_id)=(12) already exists.`,
`Key (artist_id)=(99) is not present in table "artists".`).

**Step 10 — the read-only role, actually tested:**

| Statement, run as `reporting_reader` | Real result | Exit |
|---|---|---|
| `SELECT COUNT(*) FROM albums` | `4` | 0 |
| `INSERT INTO albums ...` | `ERROR: 42501: permission denied for table albums` | 1 |
| `UPDATE albums SET ...` | `ERROR: permission denied for table albums` | 1 |
| `DELETE FROM albums ...` | `ERROR: permission denied for table albums` | 1 |
| `CREATE TABLE sneaky (...)` | `ERROR: permission denied for schema public` | 1 |
| `DROP TABLE albums` | `ERROR: must be owner of table albums` | 1 |

Every claim in that step's instructor notes confirmed, including the two
different messages: PostgreSQL 15+ no longer lets an ordinary role create objects
in `public` (hence the *schema* denial rather than a table denial), and `DROP` is
refused on ownership rather than on a grant.

**Step 11 — both branches of the default-privileges claim, run for real:**

- With `ALTER DEFAULT PRIVILEGES ... GRANT SELECT ON TABLES` in place (as step 9
  writes it), a brand-new `plays` table created by the superuser is immediately
  readable by `reporting_reader` — `plays_visible` returns `0`, exit 0. (Zero
  rows means "allowed and empty," not "refused"; the notes call this out.)
- After `ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE SELECT ON TABLES FROM
  reporting_reader`, a newly created table is **not** readable:
  `ERROR: permission denied for table wishlist2`, exit 1.

So the note's claim — that `GRANT SELECT ON ALL TABLES` covers only tables that
exist at grant time, and that `ALTER DEFAULT PRIVILEGES` is what covers future
ones — is verified in both directions, not asserted.

## Privilege claims checked individually (second container, `m3_day11_recheck`)

The read-only-role step's instructor notes make a claim about what each grant
line is *for*. Each was isolated and run rather than asserted, on a stock
PostgreSQL 16:

| Claim | Real result | Verdict |
|---|---|---|
| `LOGIN` is required to connect | Role without it: `FATAL: role "r_nologin" is not permitted to log in` (exit 2) | **Confirmed** |
| `GRANT SELECT` is required to read | Bare `LOGIN` role connects fine (exit 0), then `ERROR: permission denied for table a` (exit 1) | **Confirmed** |
| `GRANT CONNECT ON DATABASE` is required to connect | **False on a stock database** — a bare `LOGIN` role connects with no `CONNECT` grant, because `PUBLIC` holds it by default (`pg_database.datacl` is NULL). After `REVOKE CONNECT ON DATABASE t FROM PUBLIC`, the same role is refused: `FATAL: permission denied for database "t" / User does not have CONNECT privilege`, and works again after `GRANT CONNECT` | **Corrected in the YAML** |
| `GRANT USAGE ON SCHEMA public` is required to read | **False for `public`** — a role with `SELECT` but no explicit `USAGE` read the table fine, because `\dn+` shows `public` still carries `=U/pg_database_owner` (PostgreSQL 15 removed `CREATE` from the `PUBLIC` default, not `USAGE`). In a non-`public` schema it *is* hard-required: `SELECT` granted on `reporting.b` alone still fails with `ERROR: permission denied for schema reporting`, and succeeds after `GRANT USAGE ON SCHEMA reporting` | **Corrected in the YAML** |

The note now says exactly this: `LOGIN` and `SELECT` are load-bearing, `CONNECT`
and `USAGE` are portability/hardening lines that are no-ops on a stock local
database, and a Fellow who omits either has still built a working read-only role.

## Claim corrected by validation

Three instructor-note claims were **wrong before validation and have been fixed
in the YAML** — the two privilege claims in the table above, plus this one: the
step-8 note originally said `psql` "stops at the first error if you paste all four
at once," so a Fellow pasting step 8's block would see only one rejection. Real
execution disproved this — a normal `psql` session has `ON_ERROR_STOP` **off** by
default, so pasting all four produces all four errors and the session continues
(exit 0). Only `psql -v ON_ERROR_STOP=1`, which scripts use, aborts at the first
(exit 3). Both behaviours were run and observed; the note now states the correct
one, and the step's `starter_code` no longer implies a Fellow who pasted the
block missed something.

## Non-validated step

Step 5 ("Independent: Write the Critique") declares
`skip_validation: true` with the reason "A written deliverable — the reasoning is
the point, and there is no single checkable output to run." Its `code` field
holds an example passing critique for the instructor's answer key; it is prose,
not runnable, and the generator correctly injects the
`# NOTE: not auto-validated - ...` comment into the instructor block.

## Teardown

`docker stop` on `m3_day11_validate` and on `m3_day11_recheck` (both started with
`--rm`, so both removed themselves — confirmed with
`docker ps -a --filter name=m3_`, which returns nothing). No other container on
this machine was touched.
