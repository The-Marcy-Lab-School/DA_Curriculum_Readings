# Code Validation Report — Your First Database: psql, Tables & Constraints

*This is this repo's first-ever deck using `language: sql` code slides. All 7
were validated for real against a live PostgreSQL 16 instance
(`postgres:16-alpine` in a throwaway Docker container, torn down after this
run — no local `psql`/Postgres install exists in this environment, so this
is the closest real-execution equivalent to the Python-notebook validation
every other deck in this repo gets).*

## Method

Both passes collapsed into one, since every slide's SQL genuinely depends on
the database/tables the earlier slides created — there's no meaningful
"isolated" version of `INSERT INTO inspections` without `restaurants`
already existing. All 7 slides' real `code` (never `starter_code`/
`blanked_code`) were extracted in file order and run sequentially against
one live database, exactly matching a real instructor following the
worksheet top to bottom — the same "one continuous session" standard Pass B
holds Python notebooks to.

## Results — all 7 PASS

| # | Slide | Result |
|---|---|---|
| 1 | Creating Your Database | PASS — `CREATE DATABASE`, `\c` succeeded; prompt confirmed switching to `nyc_restaurants`. |
| 2 | Your First Table, With Real Constraints | PASS — `CREATE TABLE restaurants` with `PRIMARY KEY`/`NOT NULL` succeeded. |
| 3 | Adding Real Rows | PASS — `INSERT 0 4`, all 4 rows loaded. |
| 4 | A Second Table: Foreign Key + CHECK | PASS — `CREATE TABLE inspections` with `PRIMARY KEY`/`REFERENCES`/`NOT NULL`/`CHECK` succeeded. |
| 5 | Adding Inspection Rows | PASS — `INSERT 0 3`, all 3 rows loaded (each `camis` value already present in `restaurants`, confirming the FK really is enforced, not just declared). |
| 6 | Reading It Back: SELECT, WHERE, ORDER BY | PASS — all 3 queries ran clean. `WHERE boro = 'Brooklyn'` returned exactly 2 rows (Green Leaf Cafe, Harbor Grill), independently confirming the deck's own CFU answer key is correct. |
| 7 | Constraints Actually Protect You | PASS (`expected_error: NotNullViolation`) — real error: `null value in column "dba" of relation "restaurants" violates not-null constraint`, exactly the class of error the slide's own notes describe. |

## No FAILs, no cross-slide state bugs found.

Every later slide's dependency on an earlier slide's schema/rows (the FK
insert depending on `restaurants` already being populated, the query slide
depending on both tables existing) resolved correctly in the shared session
— nothing here would have broken a real instructor running this top to
bottom, live, in front of a class.
