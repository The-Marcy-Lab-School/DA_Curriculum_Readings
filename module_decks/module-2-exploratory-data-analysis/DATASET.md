# Module 2 Dataset — Exploratory Data Analysis

Shared demo data for this module's lectures and labs. **Real public data,
not hand-built** — reverse of Module 1's own choice, and for the same
underlying reason stated the other way: this module's actual skill in
scope is reading/cleaning/profiling *real* messy data, so synthetic
example data would undercut the exact thing being taught (see Module 1's
own `DATASET.md` for the mirrored reasoning).

**Never the project's own 4 domains** — finance & insurance (FEMA NFIP),
healthcare operations (CMS), public sector (DataSF), or professional
services (synthetic) (`SCENARIOS.md`/`data/SOURCE.md`). A demo built on
any of them would spoil that domain's novelty for whichever students pick
it, or hand students a ready-made template for their own cleaning/
imputation/chart choices — exactly the judgment call the project
deliberately makes independent. Both demo datasets below are named
explicitly in `instructor/LECTURE_LAB_BRIEF.md` for this reason.

## Primary: two real public demo datasets

- **Palmer Penguins.** `allisonhorst/palmerpenguins` — real biological
  measurements (species, island, bill length/depth, flipper length, body
  mass, sex, year) from 3 penguin species across 3 Palmer Archipelago
  islands. **License: CC0 1.0 Universal** (public domain dedication,
  confirmed via the source package's own `LICENSE.md`). Small, a clean
  categorical split (species/island), and has real missing values (a
  handful of rows with missing `sex`/measurements) — "small and
  forgiving, good for a first live demo" per the source brief. Use for
  Days 2-3 (real pandas fundamentals: inspect, filter, sort, group,
  create columns) and as a candidate dataset for Day 13's solo lab.
  Column names/exact row count: confirm against whichever load path a
  lecture actually uses (the `palmerpenguins` pip package, or a plain CSV
  mirror) before writing a `code` slide against it — don't assume without
  checking, same "render it and look" discipline this whole codebase
  already applies to slides.
- **USGS Earthquake Catalog.** `earthquake.usgs.gov`'s public feed/API —
  real seismic events (magnitude, depth, location, time, and more).
  **License: U.S. Government Work — public domain (17 U.S.C. §105)**,
  same legal basis as the project's own FEMA/CMS sources. Magnitude and
  depth are both **right-skewed with real outliers** — good for a second
  demo, and for practicing a scatterplot (magnitude vs. depth) or a
  time-trend line graph specifically, per the source brief. Use for Days
  4-5 (chart-type decision framework, chart best practices) and Day 11
  (AI-critique modeling — a skewed variable is exactly what makes an
  AI's "roughly symmetric" misreading catchable). A specific date range/
  magnitude-threshold query should be picked and pinned down before
  writing a `code` slide against it, so a demo's exact numbers stay
  reproducible run to run — the live feed changes constantly.

For both: this module's own real-data emphasis means demo code should
show genuine messiness (Palmer Penguins' real missing values, the
earthquake catalog's real skew/outliers) rather than a pre-cleaned
excerpt — the whole point is giving students a first rep at the same
"real data isn't tidy" experience the project's own 4 domains will ask
for later, at lower stakes.

## Reference only, never copied directly into a demo

The project's own `data/SOURCE.md` documents the actual project's 4
domain datasets (FEMA NFIP flood claims, CMS ED wait times, DataSF
building permits, synthetic consulting hours) — useful background for
calibrating what "real" messiness/scale looks like when picking exact
Palmer Penguins/earthquake subsets for a demo, but the datasets
themselves should never appear in a lecture/lab (see "Never the
project's own 4 domains" above).

`instructor/LECTURE_LAB_BRIEF.md` also names synthetic/hand-built
examples as a **secondary backup only**, for isolating one syntax point
in isolation (e.g. a tiny 5-row table to demo the `.groupby()` mechanic
before applying it to real data) — not a primary teaching dataset, and
never a substitute for the two real datasets above when the point is
reading genuine distribution shape/missingness.

## Existing local sample data

None yet — this module has no pre-existing decks (unlike Module 1's
`python-data-structures`, which predated its own module plan). Every
Module 2 deck's demo data starts from Palmer Penguins or the USGS
Earthquake Catalog per this file.
