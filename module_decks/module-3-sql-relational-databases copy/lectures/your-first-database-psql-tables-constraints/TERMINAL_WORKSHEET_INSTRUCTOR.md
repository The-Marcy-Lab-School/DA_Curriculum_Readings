# Your First Database: psql, Tables & Constraints

**Module 3: SQL & Relational Databases**

**Learning Objectives:**
- Create a PostgreSQL database and a table with correct column types and constraints (NOT NULL, PRIMARY KEY, FOREIGN KEY) via psql, following a step-by-step template
- Write basic SELECT, WHERE, and ORDER BY queries against a real table

> **You are not presenting this worksheet to students.** Use it as your own answer key while you run the same commands live, in front of the class.

## Scenario

Real syntax, for the first time this module: A small NYC restaurant inspection database, typed by hand at a real `psql` prompt. You'll create a database, build two real tables with real constraints, load a few rows, and query them back — the exact moves this module's project will ask you to do on your own, unguided, in a few weeks.

## One Command Creates a Real Database

*Context: `\c` is a psql meta-command, not SQL itself — it switches which database your session is connected to.*

**Instructor notes:**

> [SCRIPT] `\c` is a psql meta-command, not SQL itself — it switches which database your session is connected to. Run it together — the prompt itself changes from `postgres=#` to `nyc_restaurants=#` once `\c` succeeds. That prompt change is the real confirmation, not just "no error."

```sql
CREATE DATABASE nyc_restaurants;
\c nyc_restaurants
```

## Your First Table, With Real Constraints

*Context: `camis` is the real NYC restaurant-inspection dataset's own unique restaurant ID column — a real primary key, not an invented one.*

**Instructor notes:**

> [SCRIPT] Name each constraint out loud as you type it: `PRIMARY KEY` is yesterday's own concept, now real syntax. `NOT NULL` is new today — a rule the database itself enforces on every insert, not just a suggestion.
> 
> [MISCONCEPTIONS] A common assumption: constraints are optional "best practice," skippable under time pressure. They're the opposite — an active enforcement mechanism, not documentation.

```sql
CREATE TABLE restaurants (
    camis INT PRIMARY KEY,
    dba TEXT NOT NULL,
    boro TEXT NOT NULL
);
```

## One INSERT, Four Rows At Once

*Context: These 4 rows are hand-typed practice data, shaped like the real NYC dataset's own restaurants table — not a live pull from it.*

**Instructor notes:**

> [SCRIPT] One `INSERT` statement, 4 rows at once — point out the comma between each row's parentheses, a real, common typo spot.

```sql
INSERT INTO restaurants (camis, dba, boro) VALUES
    (1001, 'Corner Bistro', 'Manhattan'),
    (1002, 'Green Leaf Cafe', 'Brooklyn'),
    (1003, 'Sunset Diner', 'Queens'),
    (1004, 'Harbor Grill', 'Brooklyn');
```

## A Second Table: Foreign Key + CHECK

*Context: `REFERENCES restaurants(camis)` is a real foreign key — every `camis` in `inspections` must already exist in `restaurants`, or the insert fails.*

**Analogy:** A CHECK constraint is like a bouncer with a strict guest list — even if your app already validated the value, the database checks it again before letting the row in.

**Instructor notes:**

> [SCRIPT] Name each constraint again, fast: `PRIMARY KEY` and `REFERENCES` (a foreign key) are yesterday's own concepts as real syntax; `CHECK` is brand new — an allowed-values list the database itself enforces, same enforcement spirit as `NOT NULL`.

```sql
CREATE TABLE inspections (
    inspection_id INT PRIMARY KEY,
    camis INT REFERENCES restaurants(camis),
    inspection_date DATE NOT NULL,
    critical_flag TEXT CHECK (critical_flag IN ('Critical', 'Not Critical'))
);
```

## The Same INSERT Pattern, a Second Table

*Context: Every `camis` here (1001, 1002) already exists in `restaurants` — that's what the foreign key requires.*

**Instructor notes:**

> [SCRIPT] Point out `camis 1001` appears twice — one restaurant, two real inspections over time, exactly the one-to-many relationship this dataset's own `data/SOURCE.md` documents.

```sql
INSERT INTO inspections (inspection_id, camis, inspection_date, critical_flag) VALUES
    (1, 1001, '2026-01-15', 'Critical'),
    (2, 1002, '2026-01-20', 'Not Critical'),
    (3, 1001, '2026-02-02', 'Not Critical');
```

### 🤔 Check for Understanding: Foreign Key, as Real Syntax

*Mode: Quick-Fire Game*

What does `REFERENCES restaurants(camis)` actually create, and how would you explain it if asked live in an interview?

- A foreign key — camis must already exist in restaurants
- A copy of the restaurants table
- Just a comment — it doesn't do anything real

**Answer:** A foreign key — camis must already exist in restaurants — This is yesterday's foreign key definition, as real, enforced syntax — try inserting an inspection for a `camis` that doesn't exist in `restaurants` and PostgreSQL rejects it outright.

## Reading It Back: SELECT, WHERE, ORDER BY

*Context: `WHERE` filters rows before they're returned; `ORDER BY` sorts what's left — two independent, combinable steps.*

**Instructor notes:**

> [SCRIPT] Run all three in order — point out `WHERE` narrows the 4 rows down, and `ORDER BY` doesn't remove anything, only reorders.

```sql
SELECT * FROM restaurants;

SELECT dba, boro FROM restaurants WHERE boro = 'Brooklyn';

SELECT dba FROM restaurants ORDER BY dba;
```

### 🤔 Check for Understanding: Predicting a WHERE Result

*Mode: Poll*

Predict it: How many rows does the `WHERE` query above return?

- 2
- 4
- 1

**Answer:** 2 — Green Leaf Cafe and Harbor Grill are the only two rows with `boro = 'Brooklyn'` — Corner Bistro (Manhattan) and Sunset Diner (Queens) are filtered out.

## Constraints Actually Protect You

*Note: this command is expected to fail/raise `NotNullViolation` - that's the teaching point, not a bug.*

*Context: `dba` is missing from this INSERT entirely — and `dba` was declared `NOT NULL`.*

**Instructor notes:**

> [SCRIPT] Run it and let the real error print in full: `null value in column "dba" ... violates not-null constraint`. Name explicitly: this is the exact class of problem yesterday's case study was really about — a rule that catches bad data *on insert*, not luck, not a later cleanup pass.

```sql
INSERT INTO restaurants (camis, boro) VALUES (1005, 'Manhattan');
```
