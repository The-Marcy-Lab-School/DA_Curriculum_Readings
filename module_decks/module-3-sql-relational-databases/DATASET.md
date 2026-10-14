# Dataset — Module 3: SQL & Relational Databases with PostgreSQL

*Written via the `new-lesson-deck` skill's research step, Day 1. Never
reuse the project's own 4 domain datasets (`finance_insurance`,
`healthcare_operations`, `public_sector`, `professional_services` —
`data/SOURCE.md` in `project_assets/Module3_SQLRelational/student/`) in a
lecture/lab demo, per `LECTURE_LAB_BRIEF.md`'s explicit instruction —
students need genuinely unfamiliar data in the project itself. These two
are this module's shared lecture/lab datasets, reused across every
Day 1-12 lecture/lab rather than introducing a new dataset every class.*

## Primary: FEMA Disaster Declarations Summaries

- **Source**: `https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries`
  (OpenFEMA public API, no key required).
- **License**: U.S. Government Work — public domain.
- **Verified live** (2026-08-20): a real `$top=2` request returns genuine
  JSON records with fields including `femaDeclarationString`,
  `disasterNumber`, `state`, `declarationType`, `declarationDate`,
  `incidentType`, `declarationTitle`, `incidentBeginDate`,
  `incidentEndDate`, `designatedArea`, `region`, `fipsStateCode`,
  `fipsCountyCode`.
- **Why it fits**: record-level, one row per declared disaster per
  designated area — a real one-to-many relationship (one `state` has many
  declarations; one `incidentType` recurs across many declarations) that
  pairs naturally with a small hand-built `states`/`incident_types` lookup
  table for join demos, without needing the full API's own normalization.
  A genuinely different FEMA program than the project's own NFIP
  policies/claims data (same public-domain basis, no dataset overlap).

## Secondary: NYC Restaurant Inspection Results

- **Source**: Socrata dataset `43nn-pn8j`,
  `https://data.cityofnewyork.us/resource/43nn-pn8j.json` (NYC Open Data).
- **License**: U.S. Government Work / NYC Open Data Law — public domain.
- **Verified live** (2026-08-20): a real `$limit=2` request returns genuine
  JSON records with fields including `camis` (restaurant id), `dba`
  (restaurant name), `boro`, `building`/`street`/`zipcode`, `phone`,
  `inspection_date`, `critical_flag`, `record_date`, plus geographic/
  administrative codes (`community_board`, `council_district`, `bin`,
  `bbl`, `nta`). The full dataset (not shown in this 2-row sample) also
  carries `violation_code`/`violation_description`/`score`/`grade` per
  inspection.
- **Why it fits**: a real one-to-many relationship — one restaurant
  (`camis`), many inspection records over time — good for demonstrating why
  `GROUP BY` + `HAVING` answers a "which restaurants have 3+ critical
  violations" question that a plain `WHERE` can't. Same NYC Open Data Law
  basis as the project's own 311 data, but a genuinely different dataset
  (never the project's own domain data). Different city-level domain than
  Module 2's own `public_sector` demo (DataSF permits), so no direct reuse
  either.

## Synthetic backup

**Chinook** (fictional record store — artists/albums/tracks/customers/
invoices, MIT-licensed, a widely used standard SQL-teaching sample
database) — use only for isolating one specific syntax point on a tiny
hand-built subset (e.g. a 3-row table to demo exactly what `HAVING` does
before touching real data), never as primary lecture data. Also the
suggested base for Day 11's lab (`labs/independent-schema-critique-role-
setup.md`) — a small deliberately flawed schema built over a Chinook-style
structure, kept genuinely separate from the project's own
`schema_critique.md` schema.

## Suggested use per lecture day

- **Day 1** (Relational Thinking & Normalization): no live data pull yet
  (concept-only, no SQL) — the restaurant order-system worked example
  (menu items/orders/customers, per `_brief.json`'s own objective-1
  framing) uses a small hand-built table, not either API.
- **Days 2-4** (`psql`/tables, joins, `GROUP BY`+`HAVING`): NYC Restaurant
  Inspection Results — the one-to-many restaurant→inspections shape is a
  natural fit for all three.
- **Days 5-8** (CTEs, window functions): FEMA Disaster Declarations —
  ranking states/incident types by declaration count is a clean window-
  function/CTE demo.
- **Day 9** (`COALESCE`/materialized views/`EXPLAIN ANALYZE`): either
  dataset works — FEMA's `incidentEndDate` (sometimes null for an ongoing
  incident) is a genuinely nullable column, good for a real `COALESCE`
  demo.
- **Day 11 lab**: Chinook-based flawed schema (see above).
