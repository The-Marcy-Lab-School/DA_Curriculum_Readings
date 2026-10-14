# Lab — Running a Beta-Binomial Update, Batch by Batch

> **You are not presenting this worksheet to students.** Use it as your own answer key while circulating during lab time.

**Skills assessed:** Inferential Statistics (see this lab's own `RUBRIC.md`)

**Estimated time:** ~95 minutes (10 min intro · 70 min collaborative work · 15 min shareout)

## Scenario

A live dashboard somewhere is updating a "probability variant B is better" estimate as new visitors arrive, in real time. With a partner, you're going to build the same mechanic by hand: starting from a flat prior, feed in real batches of data in real chronological order, and watch your belief about a true proportion actually sharpen as more data lands - then deliberately break it, so you know what "not working" actually looks like before it costs you anything.

## Load the Same Dataset, Fresh

*Context: Same `palmer_penguins.csv` from every class so far, at `../../data/palmer_penguins.csv` from this lab's own folder.*

**Instructor notes:**

> Confirm the shape is (344, 8). Verified against the real file 2026-09-13.

```python
import pandas as pd
from scipy import stats

df = pd.read_csv("../../data/palmer_penguins.csv")
df.shape
```

## Count Real Batches: How Many Adelie Penguins, Each Real Year?

*Context: A genuinely different real proportion than Day 4's own Bayesian example - Adelie's share of each year, not Gentoo's.*

**Instructor notes:**

> INSTRUCTOR ANSWER KEY: 2007: k=50, n=110. 2008: k=50, n=114. 2009: k=52, n=120. Verified against the real file 2026-09-13.

```python
for year in sorted(df["year"].unique()):
    sub = df[df["year"] == year]
    k = (sub["species"] == "Adelie").sum()
    n = len(sub)
    print(year, k, n)
```

## Run the Real Update, in Genuine Chronological Order

*Context: Same mechanics from Day 4's lecture - alpha += k, beta += (n - k), starting from a flat Beta(1, 1) - applied here to real batches you counted yourselves.*

**Hint given to students:** Use the real (year, k, n) triples from the last step as your `batches` list, in the same order they actually happened.

**Instructor notes:**

> INSTRUCTOR ANSWER KEY: 2007 mean=0.455 width=0.183; 2008 mean=0.447 width=0.129; 2009 mean=0.442 width=0.104. The interval genuinely narrows each year, and the mean drifts gently downward toward the true full-dataset Adelie proportion (152/344=0.442) - a real, different trend shape than Day 4's own rising example. Confirm the room's own output matches before moving on. Verified against the real file 2026-09-13.

```python
alpha, beta = 1, 1
batches = [(2007, 50, 110), (2008, 50, 114), (2009, 52, 120)]

for year, k, n in batches:
    alpha += k
    beta += n - k
    mean = alpha / (alpha + beta)
    ci = stats.beta.ppf([.025, .975], alpha, beta)
    print(year, round(mean, 3), ci.round(3))
```

## Now Break It On Purpose: Fragment One Year Into Tiny Chunks

*Context: Same update mechanic, deliberately fed worse batches - watch what the belief does this time, and why.*

**Hint given to students:** Slice just the 2007 rows into small pieces (try 10-11 rows at a time) using .iloc, and run the exact same update loop on those pieces instead of the real yearly batches.

**Instructor notes:**

> INSTRUCTOR ANSWER KEY, do not reveal in advance: the belief swings wildly - up to 0.92, 0.96, 0.98, then down to 0.75, 0.65, 0.57, 0.51, 0.46 - instead of narrowing smoothly. The real cause: rows within a year in this CSV are not randomly ordered, they cluster by species. Small chunks of consecutive rows are accidentally almost all-Adelie or almost-no-Adelie, not representative samples. This is a genuinely different failure mode than "batches too small" alone - it's "batches too small AND not randomly drawn." Ask the room to name both problems, not just one. Verified against the real file 2026-09-13.

```python
sub2007 = df[df["year"] == 2007].reset_index(drop=True)
chunk_size = 11
alpha, beta = 1, 1
for i in range(0, len(sub2007), chunk_size):
    chunk = sub2007.iloc[i:i + chunk_size]
    k = (chunk["species"] == "Adelie").sum()
    n = len(chunk)
    alpha += k
    beta += n - k
    mean = alpha / (alpha + beta)
    ci = stats.beta.ppf([.025, .975], alpha, beta)
    print(n, round(mean, 3), ci.round(3))
```

## Diagnose It: Write What Went Wrong and Why

*⚠️ Not auto-validated: An open-ended written-reflection step - the point is a specific, correct diagnosis, not a single checkable output.*

**Instructor notes:**

> Watch specifically for "smaller batches are just noisier" as a stopping point - the stronger answer names that the rows within 2007 aren't randomly ordered, so small consecutive chunks aren't representative samples at all, a genuinely different (and worse) problem than sample size alone. Every Fellow commits their own write-up individually, even while working through the checks with a partner.

```python
# NOTE: not auto-validated - An open-ended written-reflection step - the point is a specific, correct diagnosis, not a single checkable output.
# In 3-4 sentences: compare the two runs. Did the credible interval
# narrow cleanly, or swing around? Name the real, specific reason
# the fragmented version behaved differently - not just "smaller
# batches are worse," the actual mechanism.
print("Diagnosis written - see notes above.")
```

## Share Out

*Reconvene as a full class for the last stretch of lab time. Ask a few groups to share their approach before revealing any single "right" way — the point is comparing real approaches, not a recap.*

Go around and ask: whose credible interval narrowed cleanly across the three real years, batch by batch? Then the harder question: what happened when you fragmented one year into tiny chunks - did anyone's belief swing wildly instead of narrowing smoothly? Ask a pair to guess why, before revealing that the raw rows within a year aren't randomly ordered. Last: connect this back to the primer's own real-world framing - a live dashboard that batched by "whichever visitors happened to load the page first in a browser cache" instead of real time would have exactly this same problem.
