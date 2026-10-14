# Code Execution Validation — Confounding & Bayesian Reasoning: Two Real-World Reasoning Gaps

**Deck:** `modules/module-5-inferential-statistics/lectures/confounding-bayesian-reasoning-two-real-world-reasoning-gaps/deck_spec.yaml`
**Module 5, Lesson 4 (Day 4)**
**Validated:** 2026-09-12
**Result: 3/3 slides PASS (Pass A), 3/3 notebook cells PASS (Pass B). No bugs found.**

---

## Environment actually used

| Component | Real observed value |
|---|---|
| Data | `modules/module-5-inferential-statistics/data/palmer_penguins.csv` (344 rows, same shared dataset since Day 2) |
| Interpreter | `.venv-content-validation/bin/python` |
| scipy | 1.18.1 |

`.venv` (the deck-generator tool's own environment) was never used. All 3 `code` slides are `language: python`, `code_along: true`, none carry `skip_validation` or `expected_error`.

---

## Pass A — per-slide, isolated

### Slide "The Naive Comparison, in Code" — **PASS**
Real output: Biscoe 4716.0g, Dream 3712.9g, Torgersen 3706.4g. Matches the deck's own stated claim ("Biscoe: 4,716g average," etc.) exactly.

### Slide "The Controlled Comparison, in Code" — **PASS**
- **Names injected:** `df` (from the prior slide's own code).
- Real output, filtered to Adelie only: Biscoe 3709.7g, Dream 3688.4g, Torgersen 3706.4g. Matches the deck's own claim ("Biscoe: 3,710g. Dream: 3,688g. Torgersen: 3,706g") exactly — confirms the real ~22-gram spread (vs. the naive ~1,000-gram one) and the whole confounding narrative this lecture is built around.

### Slide "Run the Real Update" — **PASS**
Real output, batch by batch:
```
2007  mean=0.312  95% CI=[0.230, 0.401]
2008  mean=0.358  95% CI=[0.297, 0.422]
2009  mean=0.361  95% CI=[0.312, 0.413]
```
Matches the deck's own claims exactly: belief drifts from a flat 50% toward ~0.36, and the credible interval narrows each year (width 0.171 → 0.125 → 0.101).

---

## Pass B — whole assembled instructor deliverable, one continuous session

Extracted all 3 code cells from `Module5_Lesson4_confounding-bayesian-reasoning-two-real-world-reasoning-gaps_INSTRUCTOR.ipynb` in file order and ran them top to bottom in one shared session/namespace. All 3 passed with identical output to Pass A — no cross-cell-state disagreement. Note the second cell (controlled comparison) genuinely depends on `df` from the first cell; the third cell (Bayesian update) is fully independent of the first two, consistent with the lecture's own two-distinct-halves design.

---

## Summary

No bugs found. Both the confounding demo's real numbers (naive vs. controlled body-mass-by-island means) and the Bayesian update's real numbers (posterior mean drift, credible-interval narrowing) are independently confirmed accurate against the live shared dataset — this lecture's two central "aha" moments are both real, not illustrative approximations.
