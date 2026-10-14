# Lab — Naming a Real Confounder

**Skills assessed:** Critical Thinking (see this lab's own `RUBRIC.md`)

**Estimated time:** ~85 minutes (10 min intro · 60 min collaborative work · 15 min shareout)

## Scenario

You've just found a "significant" difference in a comparison you care about. Before you tell anyone it's real, your manager asks the one question every stakeholder eventually asks: could something else explain this? With a partner, you're handed a real comparison on data the lecture never touched, and your job is to name one genuine, specific alternative explanation - not a generic "correlation isn't causation" gesture - and say what a real controlled design would need to actually rule it out.

*Work with your group, but complete and push/commit your own copy of this lab — collaboration is encouraged, a shared submission isn't.*

## Your Objectives

- **Load the Same Dataset, Fresh**
  - *Same `palmer_penguins.csv` from the last three classes, at `../../data/palmer_penguins.csv` from this lab's own folder.*

- **See the Naive Result First - Don't Explain It Yet**
  - *A brand-new outcome variable and grouping this module hasn't compared before - not the body_mass_g/island pairing from Day 4.*

- **Check Your Candidate - Does It Actually Explain the Gap?**
  - *This is the exact same check-the-composition move from Day 4 - just applied here to a candidate you named yourselves, not one the lecture already gave you.*
  - *Hint: If your candidate confounder is a column in this dataset, a real crosstab against island will show you directly whether it lines up with the pattern you're seeing.*

- **Recompute the Naive Comparison, Holding Your Candidate Constant**
  - *Filtering to one value of your candidate before comparing islands is the actual controlled comparison - not a new technique, the same one from Day 4 applied to a confounder you found yourselves.*
  - *Hint: Filter down to just one value of whatever candidate you're testing, then rerun the same island comparison - the same move from Day 4.*

- **Write Your Real Call: Name the Confounder, Explain the Design**

## Share Out

Go around and have each pair name their confounder out loud - put them on the board. Then the real question: was anyone's first instinct too generic ("other factors could be involved") before they landed on something specific? Ask a few pairs to say the exact number that convinced them the confounder was real, not just plausible. Last: more than one real confounder can be defensible for the same comparison - did any two pairs land on genuinely different, both- valid explanations?
