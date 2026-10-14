# Lab — Naming a Real Confounder

> **You are not presenting this worksheet to students.** Use it as your own answer key while circulating during lab time.

**Skills assessed:** Critical Thinking (see this lab's own `RUBRIC.md`)

**Estimated time:** ~85 minutes (10 min intro · 60 min collaborative work · 15 min shareout)

## Scenario

You've just found a "significant" difference in a comparison you care about. Before you tell anyone it's real, your manager asks the one question every stakeholder eventually asks: could something else explain this? With a partner, you're handed a real comparison on data the lecture never touched, and your job is to name one genuine, specific alternative explanation - not a generic "correlation isn't causation" gesture - and say what a real controlled design would need to actually rule it out.

## Load the Same Dataset, Fresh

*Context: Same `palmer_penguins.csv` from the last three classes, at `../../data/palmer_penguins.csv` from this lab's own folder.*

**Instructor notes:**

> Confirm the shape is (344, 8) before moving on. Verified against the real file 2026-09-12.

```python
import pandas as pd
from scipy import stats

df = pd.read_csv("../../data/palmer_penguins.csv")
df.shape
```

## See the Naive Result First - Don't Explain It Yet

*Context: A brand-new outcome variable and grouping this module hasn't compared before - not the body_mass_g/island pairing from Day 4.*

**Instructor notes:**

> INSTRUCTOR ANSWER KEY, do not reveal in advance: Biscoe mean 45.26mm (n=167), Dream mean 44.17mm (n=124), Torgersen mean 38.95mm (n=51). Biscoe vs. Torgersen is a real 6.31mm gap, Welch t=11.22, p≈6e-21 - a huge, obviously "significant" naive result. With your partner, before running anything else: name one candidate reason island itself might not be the real driver. Do not confirm or deny any guess yet. Verified against the real file 2026-09-12.

```python
sub = df.dropna(subset=["bill_length_mm", "island"])
sub.groupby("island")["bill_length_mm"].agg(["mean", "std", "count"])
```

## Check Your Candidate - Does It Actually Explain the Gap?

*Context: This is the exact same check-the-composition move from Day 4 - just applied here to a candidate you named yourselves, not one the lecture already gave you.*

**Hint given to students:** If your candidate confounder is a column in this dataset, a real crosstab against island will show you directly whether it lines up with the pattern you're seeing.

**Instructor notes:**

> INSTRUCTOR ANSWER KEY, do not reveal in advance: species is the real confounder. Gentoo (the longest-billed species, 47.6mm mean) only appears on Biscoe; Torgersen has only Adelie. If a pair guesses something else (sex, year), that's a real, testable guess too - have them crosstab it against island and see for themselves whether it actually lines up as cleanly as species does. Verified against the real file 2026-09-12.

```python
pd.crosstab(df["species"], df["island"])
```

## Recompute the Naive Comparison, Holding Your Candidate Constant

*Context: Filtering to one value of your candidate before comparing islands is the actual controlled comparison - not a new technique, the same one from Day 4 applied to a confounder you found yourselves.*

**Hint given to students:** Filter down to just one value of whatever candidate you're testing, then rerun the same island comparison - the same move from Day 4.

**Instructor notes:**

> INSTRUCTOR ANSWER KEY, do not reveal in advance: within Adelie only, Biscoe mean=38.98mm (n=44), Dream mean=38.50mm (n=56), Torgersen mean=38.95mm (n=51) - a 0.02mm gap, Welch t=0.04, p=0.97. The naive 6.31mm gap completely vanishes once species is held constant. This is, if anything, a cleaner disappearing act than Day 4's own body-mass example. Verified against the real file 2026-09-12.

```python
adelie = df[df["species"] == "Adelie"].dropna(subset=["bill_length_mm"])
adelie.groupby("island")["bill_length_mm"].agg(["mean", "std", "count"])
```

## Write Your Real Call: Name the Confounder, Explain the Design

*⚠️ Not auto-validated: An open-ended written-reflection step - the point is naming a specific confounder and describing a real controlled design, not a single checkable output.*

**Instructor notes:**

> Watch specifically for a write-up that says "there could be other factors" without naming species specifically, or that stops at "species is the confounder" without describing what a real controlled design needs (e.g., comparing within the same species across islands, as this lab just did, or a design that randomly assigns which island a penguin's nest is studied on - acknowledging that's not actually possible here, which is itself worth a pair noticing and writing down). Every Fellow commits their own write-up individually, even while working through the checks with a partner.

```python
# NOTE: not auto-validated - An open-ended written-reflection step - the point is naming a specific confounder and describing a real controlled design, not a single checkable output.
# In 3-4 sentences: name the specific confounder (not a generic
# gesture), explain concretely why the naive island comparison
# doesn't establish that island itself matters, and describe what
# a real controlled design would need to look like to actually
# support a causal claim about island.
print("Confounder named and design described - see notes above.")
```

## Share Out

*Reconvene as a full class for the last stretch of lab time. Ask a few groups to share their approach before revealing any single "right" way — the point is comparing real approaches, not a recap.*

Go around and have each pair name their confounder out loud - put them on the board. Then the real question: was anyone's first instinct too generic ("other factors could be involved") before they landed on something specific? Ask a few pairs to say the exact number that convinced them the confounder was real, not just plausible. Last: more than one real confounder can be defensible for the same comparison - did any two pairs land on genuinely different, both- valid explanations?
