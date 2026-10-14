# Code Execution Validation — Running Statistical Tests in Python: t-test & Chi-Square

**Deck:** `modules/module-5-inferential-statistics/lectures/running-statistical-tests-in-python-t-test-chi-square/deck_spec.yaml`
**Module 5, Lesson 2 (Day 2)**
**Validated:** 2026-09-11 (re-validated after adding 2 effect-size slides per instructional-quality QA finding #1)
**Result: 6/6 slides PASS (Pass A), 6/6 notebook cells PASS (Pass B). No bugs found.**

---

## Environment actually used

| Component | Real observed value |
|---|---|
| Data | `modules/module-5-inferential-statistics/data/palmer_penguins.csv` — 344 rows, real Palmer Penguins data (via the `palmerpenguins` PyPI package, CC0), verified during this deck's own research pass |
| Interpreter | `.venv-content-validation/bin/python` |
| pandas | present in `.venv-content-validation` |
| scipy | 1.18.1 |

`.venv` (the deck-generator tool's own environment) was never used. All 6 `code` slides are `language: python`, `code_along: true`, none carry `skip_validation` or `expected_error`.

---

## Pass A — per-slide, isolated

### Slide "Load the Real Data" — **PASS**
Ran clean. `df.head()` shows real rows (species, island, all measurement columns, `body_mass_g` populated). 2 rows genuinely dropped by the `dropna(subset=["body_mass_g"])` call (344 → 342 remaining).

### Slide "The Shape Check, in Code" — **PASS**
- **Names injected:** `df` (from the prior slide's own code, re-run verbatim — a genuine sequential code-along, not standalone).
- **Real output:** Adelie mean 3700.66g (std 458.57), Chinstrap mean 3733.09g (std 384.34), Gentoo mean 5076.02g (std 504.12). Confirms the slide's own framing: Adelie/Chinstrap look similar in spread, Gentoo is clearly heavier — matches the deck's "roughly similar shape" / "the t-test is defensible" claim.

### Slide "Run the t-test" (`blanked_code` slide — validated via the real `code`, never `blanked_code`, per methodology) — **PASS**
- **Names injected:** `df` (prior slides).
- **Real output:**
  ```
  t-statistic: -23.61361947207548
  p-value: 8.030928615407304e-68
  95% CI: ConfidenceInterval(low=-1490.02, high=-1260.69)
  ```
- Confirms every claim on the deck's own "Reading the Real Output" slide: p-value far below 0.05, CI entirely negative (Adelie − Gentoo), meaning Gentoo is really heavier.

### Slide "Run the Chi-Square Test" — **PASS**
- **Names injected:** `df` (prior slides).
- **Real output:**
  ```
  island     Biscoe  Dream  Torgersen
  species
  Adelie         44     56         51
  Chinstrap       0     68          0
  Gentoo        123      0          0

  chi2: 296.4871777487537
  p-value: 6.201875708850672e-63
  degrees of freedom: 4
  expected counts:
  [[73.73 54.75 22.52]
   [33.20 24.65 10.14]
   [60.06 44.60 18.34]]
  ```
- **Independently confirmed the assumption-check claim**: every expected cell count is ≥5 (`(expected >= 5).all()` → `True`), matching the deck's own domain_note. Chinstrap-only-on-Dream and Gentoo-only-on-Biscoe is a genuine, striking real pattern — confirms the "strongly associated" framing on the following content slide without overstating it.

### Slide "Compute Cohen's d" — **PASS**
- **Names injected:** `adelie`, `gentoo` (from the t-test slide's own code).
- **Real output:** `Cohen's d: 2.8681166617513236`
- Confirms the slide's own domain_note claim: well above the conventional 0.8 "large effect" threshold.

### Slide "Compute Cramér's V" — **PASS**
- **Names injected:** `table`, `chi2` (from the chi-square slide's own code).
- **Real output:** `Cramer's V: 0.6583773888753991`
- Confirms the slide's own domain_note claim: well above the conventional 0.5 "strong association" threshold.

---

## Pass B — whole assembled instructor deliverable, one continuous session

Extracted all 6 code cells from `Module5_Lesson2_running-statistical-tests-in-python-t-test-chi-square_INSTRUCTOR.ipynb` in file order and ran them top to bottom in one shared session/namespace (a real "Restart & Run All"). All 6 passed with identical output to Pass A — no cross-cell-state disagreement, confirming the deck's sequential code-along design (each later cell genuinely depends on state from earlier cells - `df`, `adelie`/`gentoo`, `table`/`chi2` - no hidden extra setup needed).

---

## Summary

No bugs found. Every real number asserted qualitatively on a content slide ("far below 0.05," "entirely on one side," "strongly associated," "every expected count is at least 5") is independently confirmed accurate against the real dataset.
