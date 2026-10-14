# Rubric — Lab: Naming a Real Confounder

**Point scale**: Below Expectations = 1, Approaching = 2, Meets = 4, Exceeds = 5.
1 skill × 4 points = **4 points total at Meets**; more with any Exceeds
level earned.

Formative lab, not the graded project — use for real, specific feedback
during the shareout, not a gradebook entry. Real dataset: `palmer_penguins.csv`,
a bill_length_mm/island comparison the module hasn't used before.

---

## Professional Skills

### `critical-thinking`

*Naming a real, specific confounder for a "significant" comparison — not
a generic correlation-isn't-causation gesture — and checking it against
the actual data.*

| Level | Points | Criteria |
|---|---|---|
| **Exceeds** | 5 | Meets, plus: notes that a true randomized/controlled design isn't actually possible here (an island can't be randomly assigned to a penguin) and names what a real study would substitute for it. |
| **Meets** | 4 | Names `species` specifically as the confounder (not a generic gesture); shows the crosstab evidence that species tracks island (Gentoo only on Biscoe, Torgersen only Adelie); shows the within-species recompute where the naive 6.31mm gap collapses to ≈0.02mm. |
| **Approaching** | 2 | Names and checks a candidate confounder, but the write-up stops at "species is the confounder" without describing what a real controlled design would need. |
| **Below Expectations** | 1 | Write-up says "there could be other factors" without naming a specific confounder, or never checks a real candidate against the data. |

---

## `common_project_mistakes` this rubric preempts

- Gesturing at "correlation isn't causation" without naming a real,
  checkable alternative explanation for the pattern.
- Stopping at naming a confounder without describing what a real
  controlled comparison would actually require.
