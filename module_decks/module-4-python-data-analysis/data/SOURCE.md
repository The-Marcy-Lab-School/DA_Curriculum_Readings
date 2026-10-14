# Data Sources — Module 4 Lecture Demos

Shared demo data for this module's 4 lecture days. Lecture-only — never
the project's own data (this module's project has no project-level data
of its own; it reuses each student's own Module 3 PostgreSQL database
plus other Module 2/3 domain files). See
`module_sources/module-4-python-data-analysis/DATASET.md` for the full
license/provenance record and the per-day suggested use.

## `nyc_311_sample.csv` — NYC 311 Service Requests (15-row teaching slice)

**15 rows, 7 columns.** A deliberately tiny, hand-picked slice of real
NYC 311 service requests — small enough to print in full on a slide next
to the same rows shown as a SQL table, which is exactly what Day 1's
DataFrame-and-SQL-table correspondence demo needs.

**Source**: Socrata dataset `erm2-nwe9`,
`https://data.cityofnewyork.us/resource/erm2-nwe9.json` (NYC Open Data).

**License**: NYC Open Data, public domain under NYC's Open Data Law (Local
Law 11 of 2012). Note deliberately: the Socrata metadata API returns
`license: null` for this dataset, so there is **no named Creative Commons
license to cite** — don't write "CC0" anywhere. The portal's own terms
(`https://opendata.cityofnewyork.us/overview/`) apply, including an explicit
no-warranty disclaimer. See
`module_sources/module-4-python-data-analysis/DATASET.md` for the full
verification record, including the dataset's 2020 rename.

Fetched 2026-08-25 via 5 real API calls (one per borough, `$limit=3`
each) against:

```
https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=3&$select=unique_key,created_date,agency,complaint_type,descriptor,borough,status&$where=borough='BRONX'
```

Only two modifications, both recorded here rather than done silently:
`created_date` was truncated from a full ISO timestamp to its `YYYY-MM-DD`
date part (so a row fits a slide's table cell), and rows were sorted by
`unique_key`. No rows were dropped, invented, or edited otherwise.

| Column | Real pandas dtype on `read_csv` | Notes |
|---|---|---|
| `unique_key` | `int64` | The 311 request id — a real primary key |
| `created_date` | text | Date **text**, not parsed — a deliberate teaching point |
| `agency` | text | NYPD, DSNY, HPD, DOB, DEP, DHS, DCA |
| `complaint_type` | text | e.g. `Noise - Residential`, `Illegal Parking` |
| `descriptor` | text | The finer-grained detail under `complaint_type` |
| `borough` | text | All 5 boroughs present; 3 `BRONX` rows |
| `status` | text | `Closed` for every row in this slice |

**The text columns' printed dtype name is version-dependent — verified, not
assumed.** On pandas **2.x** (this repo's `.venv` is 2.2.3, confirmed by
running the code) they print as `object`. On pandas **3.0+** (released
2026-01-21, PDEP-14) a dedicated string dtype is on by default and the same
columns print as `str`. This matters on Day 1 specifically, because `uv add
pandas` installs 3.x while an older environment may still be on 2.x, so two
people can run the same cell and see different labels. `unique_key` prints
as `int64` on both. The lesson teaches "run `.dtypes` and look, don't
assume," which is correct on either version.

**Why `created_date` stays unparsed**: a SQL `timestamp` column arriving
in pandas as the `object` dtype until someone actually calls
`pd.to_datetime()` is the single clearest example of "the same data, in a
different shape, does not automatically keep its type" — the exact point
Day 1's Objective 1 is about. Don't "fix" it in this file.

**Deliberately clean** — no missing values, no duplicates. Day 1 is about
structural correspondence, not data quality; the module's real
data-quality work happens on the project's own unseen files, not here.
