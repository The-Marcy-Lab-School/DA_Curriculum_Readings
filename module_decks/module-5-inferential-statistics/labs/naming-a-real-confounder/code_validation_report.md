# Code Execution Validation — Lab: Naming a Real Confounder

**Lab:** `modules/module-5-inferential-statistics/labs/naming-a-real-confounder.yaml`
**Module 5, Day 5 (follows Lesson 4)**
**Validated:** 2026-09-13
**Result: 4/4 code steps PASS, run in one continuous session. No bugs found.**

---

## Environment actually used

| Component | Real observed value |
|---|---|
| Data | `modules/module-5-inferential-statistics/data/palmer_penguins.csv` (344 rows), via the real relative path the rendered worksheet uses (`../../data/palmer_penguins.csv`) |
| Interpreter | `.venv-content-validation/bin/python` |
| scipy | 1.18.1 |

One step (the written-reflection step) is `skip_validation: true` (open-ended, no checkable output) and was correctly not run.

---

## Per-step validation

### Step "Load the Same Dataset, Fresh" — **PASS**
`df.shape` → `(344, 8)`, matching the instructor notes' stated expectation.

### Step "See the Naive Result First" — **PASS**
Real output: Biscoe mean=45.26mm (n=167), Dream mean=44.17mm (n=124), Torgersen mean=38.95mm (n=51). Matches the instructor answer key exactly — a real, large naive gap (Biscoe vs. Torgersen = 6.31mm; independently re-confirmed via a Welch's t-test at t=11.22, p≈6e-21 during dataset research).

### Step "Check Your Candidate" — **PASS**
Real crosstab confirms: Gentoo (the longest-billed species) appears only on Biscoe; Torgersen has only Adelie. Matches the instructor answer key's claim that species is the real confounder.

### Step "Recompute the Naive Comparison, Holding Species Constant" — **PASS**
Real output, Adelie only: Biscoe mean=38.98mm (n=44), Dream mean=38.50mm (n=56), Torgersen mean=38.95mm (n=51). Matches the instructor answer key exactly — the naive 6.31mm gap shrinks to 0.02mm once species is held constant (independently re-confirmed via Welch's t-test at t=0.04, p=0.97 during dataset research).

### Step "Write Your Real Call" — **SKIPPED, intentional**
`skip_validation: true`, reason: open-ended written reflection, no single checkable output.

---

## Design fix applied during this pass

**Real authoring bug found and fixed**: step 4's title and `student_hint`/`domain_note` originally named "species" explicitly ("Recompute the Naive Comparison, Holding Species Constant" / "Adelie is the one species living on all three islands...") — since a lab's `title`/`domain_note` are shown to students (unlike `notes`, which are instructor-only), this spoiled the discovery moment steps 2-3 are designed to build toward (the whole point is for the pair to name their own candidate confounder before being told what it is). Fixed by rewording step 4's title, hint, and domain_note to stay generic ("holding your candidate constant") — confirmed via `grep -i species` on the rendered student worksheet that no mention of the actual answer leaks through anywhere a student would see it. The instructor-only `code`/`notes` fields still correctly show the real, concrete species-based answer key.

## Summary

No bugs found. Real dataset research (see this session's own dataset-verification pass) also independently attempted to find a genuine confounding story in real CMS hospital-quality data before falling back to this Palmer Penguins pairing — CMS access itself worked, but every real pairing tried there turned out to be a robust, non-confounded effect, unsuitable for this lab's "the naive gap vanishes" teaching goal. This `bill_length_mm`/`island`/`species` pairing is a clean, real, previously-unused-in-this-module demonstration of the same underlying phenomenon Day 4 introduced, using a genuinely different outcome variable.
