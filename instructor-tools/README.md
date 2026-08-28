# Instructor tools

Local-only scripts for pulling reading scores across the whole cohort.
Nothing in here runs automatically, and nothing here should ever be
committed with real student data — `roster.json` and both `.csv` outputs
are gitignored on purpose.

- **`aggregate_submissions.py`** — reads every student's private submission
  repo (created from the `DA-Reading_Submissions` template) via the GitHub
  API and builds a local gradebook + a per-skill-tag class summary. See the
  script's own header comment for setup and usage.
- **`roster.example.json`** — copy to `roster.json` and fill in real
  usernames before running the aggregator.
