# Module 0 Dataset — Foundations

Shared demo/lab dataset for this module's lectures and labs. **Never the
project's own dataset** — `PROJECT.md` uses OWID `co2-data`, which must stay
genuinely unseen by Fellows until project days (see "Do not reuse the
project's own dataset" in `INSTRUCTOR_MODULE_SUMMARY.md`).

## Local sample file

`modules/module-0-foundations/data/energy_sample.csv` — a real 70-row extract
(10 countries × 2015-2021, 7 columns: `country`, `year`, `iso_code`,
`population`, `energy_per_capita`, `fossil_share_energy`,
`renewables_share_energy`) pulled directly from OWID `energy-data`'s live
CSV, not synthesized — small enough for a lecture/lab to `head`/`cut`/`grep`/
`sort` through quickly while still being genuinely real data with genuine
missingness patterns where OWID's own source data has gaps. Used by the
Code Execution Validator (per "Instructor & student notebooks & code
execution validation" in `content_spec/SCHEMA.md`) and by
`lectures/`/`labs/` demo commands.

## Primary: OWID `energy-data`

- **Source**: https://github.com/owid/energy-data
- **License**: Our World in Data's Creative Commons BY license (verified
  directly on the repo) — free to use with attribution.
- **Why it fits**: same publisher and column/format conventions as the
  project's own `co2-data` (also OWID), so `head`/`cut`/`grep`/`sort`
  commands taught on it transfer directly onto genuinely unfamiliar content
  during the project — Fellows practice the *skill* on a dataset they've
  seen, then apply it independently to one they haven't. Country/year
  panel data with a realistic mix of numeric (energy consumption, per-capita
  figures), categorical (country, region), and a few missing-value-heavy
  columns (not every country reports every energy source every year) —
  enough real messiness to make column-typing genuinely require judgment,
  not just pattern-matching on column names.
- **Suggested use**: `lectures/dev-environment-data-fundamentals` (a first,
  instructor-driven look — a couple of `head`/`cut` commands to make the
  environment-setup demo concrete); `lectures/git-github-guided-walkthrough`
  (a small CSV slice as the file being committed, so the git walkthrough
  isn't practiced on an empty repo); `labs/git-terminal-practice` (same
  small slice, low-stakes — the point of that lab is git/terminal
  mechanics, not the data itself); `labs/column-typing-practice` (the real
  column-classification rehearsal, at reduced stakes, before the project
  asks for the same skill unguided on `co2-data`).

## Backup: World Bank World Development Indicators

- **Source**: https://data.worldbank.org/
- **License**: CC BY-4.0 (World Bank Open Data default) — verify the
  specific indicator/dataset page's terms before use.
- **Why it fits**: an alternate real, free, country-level panel dataset with
  its own realistic messiness (missing values, non-country aggregate rows
  like "World" or "Sub-Saharan Africa" mixed into a country column) — a
  good second option if a lecture or lab wants a dataset that *isn't* from
  the same publisher family as the project's `co2-data`, for variety across
  a multi-day lab (see "lecture code-alongs ≠ labs" in `content_spec/SCHEMA.md`
  — a lab's dataset can match its paired lecture's or be a deliberately
  fresh one).
