# Rubric — Lab: Independent Schema Critique & Read-Only Role

**Point scale**: Below Expectations = 1, Approaching = 2, Meets = 4, Exceeds = 5.
2 skills × 4 points = **8 points total at Meets**; more with any Exceeds
levels earned.

Formative lab, not the graded project — use for real, specific feedback
during the Day 12 shareout, not a gradebook entry. This lab uses a
deliberately flawed `record_store` catalog schema, different from the
project's own `schema_critique.md` schema — grade the reasoning, not
whether a group named the exact same flaw as any other group.

---

## Technical Skills

### `relational-databases`

*Independently evaluating a flawed schema for a real structural problem,
proving it with a query, and rebuilding with real keys and constraints —
without a template.*

| Level | Points | Criteria |
|---|---|---|
| **Exceeds** | 5 | Meets, plus: rebuild splits `tracks.genres` into a real `genres` + `track_genres` link table (not a single `genre_id` column), correctly using a composite primary key or an equivalent surrogate. |
| **Meets** | 4 | Names one real, specific flaw (a named table/column, not "it isn't normalized") and proves it with a query that actually demonstrates the problem; rebuild gives every table a real `PRIMARY KEY`, replaces every copied-text pointer (`artist_name`, `album_title`) with a real `FOREIGN KEY`, and removes the comma-separated `genres` list. |
| **Approaching** | 2 | Flaw is named but vague, or the query offered as proof doesn't actually show the claimed problem; rebuild has some real keys/constraints but is missing at least one (e.g. a foreign key still absent, or `artist_country` still copied onto `albums`). |
| **Below Expectations** | 1 | No specific flaw identified beyond a general complaint; rebuild still points between tables by copying text instead of a real foreign key. |

### `database-administration`

*Independently creating and correctly granting a PostgreSQL read-only
role, then proving with a real test that it can read but genuinely cannot
write.*

| Level | Points | Criteria |
|---|---|---|
| **Exceeds** | 5 | Meets, plus: completes the optional stretch step and correctly explains why `ALTER DEFAULT PRIVILEGES` is what covers a table created *after* the role was granted. |
| **Meets** | 4 | Role created with `LOGIN` and granted `SELECT` on the catalog's tables; a real test connects as that role, confirms a `SELECT` actually returns rows, AND confirms a write (`INSERT`/`UPDATE`/`DELETE`) is refused — with the real error text captured, not paraphrased. |
| **Approaching** | 2 | Role created and granted `SELECT`, but never actually tested with a real write attempt from that role — "looks read-only," unconfirmed. |
| **Below Expectations** | 1 | No role created, or the role is granted broader privileges than reading (no restriction attempted at all). |

---

## `common_project_mistakes` this rubric preempts

- Designing tables that point at each other by copying text instead of a
  real foreign key — nothing then enforces the relationship actually holds.
- Granting a role and assuming it's read-only without ever testing that a
  write from it is genuinely rejected.
