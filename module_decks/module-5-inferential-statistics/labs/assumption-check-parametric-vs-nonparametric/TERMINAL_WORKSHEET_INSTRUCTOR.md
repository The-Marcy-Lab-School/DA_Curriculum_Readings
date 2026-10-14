# Lab — Is My Test Defensible? Parametric vs. Non-Parametric

> **You are not presenting this worksheet to students.** Use it as your own answer key while circulating during lab time.

**Skills assessed:** Inferential Statistics, Data Distributions & Shape (see this lab's own `RUBRIC.md`)

**Estimated time:** ~85 minutes (10 min intro · 60 min collaborative work · 15 min shareout)

## Scenario

You're the analyst on call. A teammate is heads-down on a deadline and pings you three different variables, each with a test already picked out, and asks "can I actually trust this before I run it?" Nobody is handing you a checklist for each one - you and your partner have to look at the real shape of the data first, decide honestly whether the proposed test is defensible, and say what you'd run instead when it isn't. Some of these will look fine. At least one won't, and it won't be obvious until you actually look.

## Load the Same Dataset, Fresh

*Context: Same `palmer_penguins.csv` from Days 1-2, at `../../data/palmer_penguins.csv` from this lab's own folder. A fresh session starts with nothing in memory.*

**Instructor notes:**

> Confirm the shape is (344, 8) before moving on - the same real dataset from Days 1-2, reloaded fresh. Verified against the real file 2026-09-11.

```python
import pandas as pd
from scipy import stats

df = pd.read_csv("../../data/palmer_penguins.csv")
df.shape
```

## Case 1 — Flipper Length, Adelie vs. Chinstrap: Proposed Test Is a t-test

*Context: Same shape-check habit from Day 2 - real spread and skew per group, not just a t-test run blind.*

**Instructor notes:**

> INSTRUCTOR ANSWER KEY, do not reveal in advance: Adelie n=151, mean=190.0mm, std=6.5, skew=0.09; Chinstrap n=68, mean=195.8mm, std=7.1, skew=-0.01. Both groups are large, close to symmetric (skew near 0), and have genuinely comparable spread (std 6.5 vs 7.1). **This one is defensible as a t-test** - the correct call is to run it as proposed. This is the "control" case: a pair that flags this one as suspicious without a real reason is over-checking, not under-checking. Verified against the real file 2026-09-11.

```python
adelie = df[df["species"] == "Adelie"]["flipper_length_mm"].dropna()
chinstrap = df[df["species"] == "Chinstrap"]["flipper_length_mm"].dropna()

print("Adelie:   n=%d  mean=%.1f  std=%.1f  skew=%.2f" % (
    len(adelie), adelie.mean(), adelie.std(), adelie.skew()))
print("Chinstrap: n=%d  mean=%.1f  std=%.1f  skew=%.2f" % (
    len(chinstrap), chinstrap.mean(), chinstrap.std(), chinstrap.skew()))
```

## Case 2 — Gentoo Flipper Length, 2007 vs. 2008: Proposed Test Is a t-test

*Context: A Shapiro-Wilk p-value below 0.05 means the data is unlikely to have come from a normal distribution - a real, checkable signal, not a judgment call from eyeballing a histogram alone.*

**Hint given to students:** scipy.stats has a real normality test - stats.shapiro() - that gives you a p-value for 'this looks normal,' not just a description you eyeball.

**Instructor notes:**

> INSTRUCTOR ANSWER KEY, do not reveal in advance: 2007 n=34 has two real outliers at 230mm sitting well above the rest of the cluster (207-222mm), skew=1.11; Shapiro-Wilk gives p=0.006 for 2007 (reject normality) and p=0.046 for 2008 (n=46, also borderline). **This one is NOT defensible as a standard two-sample t-test** - the real 2007 distribution is visibly right-skewed by two genuine high outliers, not measurement error to discard. The correct alternative is a Mann-Whitney U test (`stats.mannwhitneyu(g2007, g2008)`), which gives U=600.0, p=0.077 - notably different from the t-test's own p=0.081, close here but not guaranteed to be close in general, which is exactly why the check matters before trusting either number. Verified against the real file 2026-09-11.

```python
g2007 = df[(df["species"] == "Gentoo") & (df["year"] == 2007)]["flipper_length_mm"].dropna()
g2008 = df[(df["species"] == "Gentoo") & (df["year"] == 2008)]["flipper_length_mm"].dropna()

print(sorted(g2007.tolist()))
print("2007: n=%d  mean=%.1f  std=%.1f  skew=%.2f" % (
    len(g2007), g2007.mean(), g2007.std(), g2007.skew()))
print("2008: n=%d  mean=%.1f  std=%.1f  skew=%.2f" % (
    len(g2008), g2008.mean(), g2008.std(), g2008.skew()))

print(stats.shapiro(g2007))
print(stats.shapiro(g2008))
```

## Case 3 — Species by Island, 2008 Only: Proposed Test Is a Chi-Square Test

*Context: Same expected-cell-count rule from Day 2 - every cell needs to be at least 5 for the chi-square approximation to hold, and a smaller real subset is exactly where that rule actually gets tested.*

**Instructor notes:**

> INSTRUCTOR ANSWER KEY, do not reveal in advance: filtering to just 2008 shrinks the table enough that one expected cell (Chinstrap x Torgersen) comes out to 2.53 - genuinely below 5. **This one is NOT defensible as a standard chi-square test as proposed.** The correct alternative here is Fisher's exact test, which scipy's current version supports for tables larger than 2x2: `stats.fisher_exact(table.values)` gives p=0.0001 - still a real, usable answer, just from a test that doesn't depend on the large-expected-counts assumption chi-square needs. Verified against the real file 2026-09-11 (scipy 1.18.1).

```python
sub = df[df["year"] == 2008]
table = pd.crosstab(sub["species"], sub["island"])
print(table)

chi2, p, dof, expected = stats.chi2_contingency(table)
print("expected counts:")
print(expected)
print("all expected >= 5?", (expected >= 5).all())
```

## Write Your Real Call for Each Case, One Sentence Each

*⚠️ Not auto-validated: An open-ended written-reflection step - the point is the specific reasoning per case, not a single checkable printed output.*

**Instructor notes:**

> Watch specifically for a pair that runs the real check correctly but then writes "looks roughly fine" without naming the actual number or shape that convinced them - the lab's real exit bar is a specific, named reason per case (a skew value, a Shapiro-Wilk p-value, an expected-cell count), not just a completed chart. Every Fellow commits their own three sentences individually, even while working through the cases with a partner.

```python
# NOTE: not auto-validated - An open-ended written-reflection step - the point is the specific reasoning per case, not a single checkable printed output.
# For each of the 3 cases: "This is defensible because ___" or
# "This isn't defensible because ___, so I'd use ___ instead."
# One real, specific sentence per case - not "looks fine."
print("Three calls written - see notes above.")
```

## Share Out

*Reconvene as a full class for the last stretch of lab time. Ask a few groups to share their approach before revealing any single "right" way — the point is comparing real approaches, not a recap.*

Go around and ask each pair for their three calls: defensible, or not? Put them on the board next to each other - who agreed, who split. Then the real question: for the ones people got right, what was the actual tell? A specific number, a specific shape in the histogram, or just a gut feeling? Push on any pair that says "it looked roughly fine" without naming a specific reason - that's the exact gap this lab exists to close. Last, ask: which of the three scenarios would have been easy to miss if you were moving fast and skipped the check?
