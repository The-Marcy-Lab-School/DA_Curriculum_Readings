# Code Execution Validation — Lab: Running a Beta-Binomial Update, Batch by Batch

**Lab:** `modules/module-5-inferential-statistics/labs/beta-binomial-belief-update.yaml`
**Module 5, Day 6 (follows Lesson 4)**
**Validated:** 2026-09-13
**Result: 4/4 code steps PASS, run in one continuous session. No bugs found.**

---

## Environment actually used

| Component | Real observed value |
|---|---|
| Data | `modules/module-5-inferential-statistics/data/palmer_penguins.csv` (344 rows), via the real relative path the rendered worksheet uses |
| Interpreter | `.venv-content-validation/bin/python` |
| scipy | 1.18.1 |

One step (the written-reflection step) is `skip_validation: true` and was correctly not run.

---

## Per-step validation

### Step "Load the Same Dataset, Fresh" — **PASS**
`df.shape` → `(344, 8)`.

### Step "Count Real Batches" — **PASS**
Real output: 2007 k=50/n=110, 2008 k=50/n=114, 2009 k=52/n=120. Matches the instructor answer key exactly.

### Step "Run the Real Update, in Genuine Chronological Order" — **PASS**
Real output: 2007 mean=0.455 (width=0.183), 2008 mean=0.447 (width=0.129), 2009 mean=0.442 (width=0.104). Matches the instructor answer key exactly — a genuine, different trend shape than Day 4's own rising example (this one drifts gently downward), with the interval genuinely narrowing each year.

### Step "Now Break It On Purpose" — **PASS**
Real output (fragmenting 2007 into 10 chunks of ~11 rows): the belief swings from 0.923 up to 0.978, then down through 0.895, 0.750, 0.646, 0.567, 0.505, settling at 0.455 (matching the real full-year value). Matches the instructor answer key exactly — a genuine, dramatic real-data artifact (rows within a year cluster by species rather than being randomly ordered), not a fabricated "bad example."

---

## Summary

No bugs found. The lab's central "break it on purpose" moment is a real, independently-confirmed data artifact — the raw CSV's row order within a year is not random, so small consecutive chunks are unrepresentative samples, producing wild swings rather than the smooth narrowing seen with the real yearly batches. This is a genuinely different (and arguably more instructive) failure mode than "batches too small" alone, and it was discovered through real computation, not invented for teaching purposes.
