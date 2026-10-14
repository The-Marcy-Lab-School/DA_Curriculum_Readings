# Lab — Running a Beta-Binomial Update, Batch by Batch

**Skills assessed:** Inferential Statistics (see this lab's own `RUBRIC.md`)

**Estimated time:** ~95 minutes (10 min intro · 70 min collaborative work · 15 min shareout)

## Scenario

A live dashboard somewhere is updating a "probability variant B is better" estimate as new visitors arrive, in real time. With a partner, you're going to build the same mechanic by hand: starting from a flat prior, feed in real batches of data in real chronological order, and watch your belief about a true proportion actually sharpen as more data lands - then deliberately break it, so you know what "not working" actually looks like before it costs you anything.

*Work with your group, but complete and push/commit your own copy of this lab — collaboration is encouraged, a shared submission isn't.*

## Your Objectives

- **Load the Same Dataset, Fresh**
  - *Same `palmer_penguins.csv` from every class so far, at `../../data/palmer_penguins.csv` from this lab's own folder.*

- **Count Real Batches: How Many Adelie Penguins, Each Real Year?**
  - *A genuinely different real proportion than Day 4's own Bayesian example - Adelie's share of each year, not Gentoo's.*

- **Run the Real Update, in Genuine Chronological Order**
  - *Same mechanics from Day 4's lecture - alpha += k, beta += (n - k), starting from a flat Beta(1, 1) - applied here to real batches you counted yourselves.*
  - *Hint: Use the real (year, k, n) triples from the last step as your `batches` list, in the same order they actually happened.*

- **Now Break It On Purpose: Fragment One Year Into Tiny Chunks**
  - *Same update mechanic, deliberately fed worse batches - watch what the belief does this time, and why.*
  - *Hint: Slice just the 2007 rows into small pieces (try 10-11 rows at a time) using .iloc, and run the exact same update loop on those pieces instead of the real yearly batches.*

- **Diagnose It: Write What Went Wrong and Why**

## Share Out

Go around and ask: whose credible interval narrowed cleanly across the three real years, batch by batch? Then the harder question: what happened when you fragmented one year into tiny chunks - did anyone's belief swing wildly instead of narrowing smoothly? Ask a pair to guess why, before revealing that the raw rows within a year aren't randomly ordered. Last: connect this back to the primer's own real-world framing - a live dashboard that batched by "whichever visitors happened to load the page first in a browser cache" instead of real time would have exactly this same problem.
