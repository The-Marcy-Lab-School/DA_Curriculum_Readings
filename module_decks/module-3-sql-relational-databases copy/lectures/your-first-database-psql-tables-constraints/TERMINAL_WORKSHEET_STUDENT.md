# Your First Database: psql, Tables & Constraints

**Module 3: SQL & Relational Databases**

**Learning Objectives:**
- Create a PostgreSQL database and a table with correct column types and constraints (NOT NULL, PRIMARY KEY, FOREIGN KEY) via psql, following a step-by-step template
- Write basic SELECT, WHERE, and ORDER BY queries against a real table

## Scenario

Real syntax, for the first time this module: A small NYC restaurant inspection database, typed by hand at a real `psql` prompt. You'll create a database, build two real tables with real constraints, load a few rows, and query them back — the exact moves this module's project will ask you to do on your own, unguided, in a few weeks.

> **How to use this worksheet:** each shaded block below (the ones starting with three backtick marks and the word "sql") contains real commands - type them into your own terminal, one line at a time. The backtick fence marks themselves aren't something you type, they just tell this file "this is code." A `# TODO:` line means: replace it with the real command.

## One Command Creates a Real Database

*Context: `\c` is a psql meta-command, not SQL itself — it switches which database your session is connected to.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: create a database called nyc_restaurants


-- TODO: connect to it (\c)
```

## Your First Table, With Real Constraints

*Context: `camis` is the real NYC restaurant-inspection dataset's own unique restaurant ID column — a real primary key, not an invented one.*

*Complete the TODOs below as you work through this step.*

```sql
CREATE TABLE restaurants (
    camis INT ____,
    dba TEXT ____,
    boro TEXT ____
);
```

## One INSERT, Four Rows At Once

*Context: These 4 rows are hand-typed practice data, shaped like the real NYC dataset's own restaurants table — not a live pull from it.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: insert all 4 rows below into restaurants
-- (camis, dba, boro)
-- 1001, 'Corner Bistro', 'Manhattan'
-- 1002, 'Green Leaf Cafe', 'Brooklyn'
-- 1003, 'Sunset Diner', 'Queens'
-- 1004, 'Harbor Grill', 'Brooklyn'
```

## A Second Table: Foreign Key + CHECK

*Context: `REFERENCES restaurants(camis)` is a real foreign key — every `camis` in `inspections` must already exist in `restaurants`, or the insert fails.*

*Complete the TODOs below as you work through this step.*

```sql
CREATE TABLE inspections (
    inspection_id INT ____,
    camis INT ____ restaurants(camis),
    inspection_date DATE ____,
    critical_flag TEXT ____ (critical_flag IN ('Critical', 'Not Critical'))
);
```

## The Same INSERT Pattern, a Second Table

*Context: Every `camis` here (1001, 1002) already exists in `restaurants` — that's what the foreign key requires.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: insert the 3 rows below into inspections
-- (inspection_id, camis, inspection_date, critical_flag)
-- 1, 1001, '2026-01-15', 'Critical'
-- 2, 1002, '2026-01-20', 'Not Critical'
-- 3, 1001, '2026-02-02', 'Not Critical'
```

## Reading It Back: SELECT, WHERE, ORDER BY

*Context: `WHERE` filters rows before they're returned; `ORDER BY` sorts what's left — two independent, combinable steps.*

*Complete the TODOs below as you work through this step.*

```sql
-- TODO: select every column, every row, from restaurants


-- TODO: select just dba and boro, only rows where boro is 'Brooklyn'


-- TODO: select dba, ordered alphabetically
```

## Constraints Actually Protect You

*Note: this command is expected to fail/raise `NotNullViolation` - that's the teaching point, not a bug.*

*Context: `dba` is missing from this INSERT entirely — and `dba` was declared `NOT NULL`.*

```sql
INSERT INTO restaurants (camis, boro) VALUES (1005, 'Manhattan');
```
