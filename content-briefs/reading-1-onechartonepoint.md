# Content brief: Real Numbers, Wrong Story

- **Quest / LiveLab(s):** Day 5 LiveLab "Chart Best Practices" (never named in the reading)
- **Skill tags (from taxonomy.json):** data-visualization
- **Skills (skills.json):** data-distributions-shape, critical-thinking
- **Audience:** data-only
- **Complexity flag:** standard (≤20 min)
- **Estimated time:** 18–19 minutes (9 quiz-style items incl. select-all and a typed fill-in × 50 s = 7.5, flip cards 2, reflection 2, ~6.5–7.5 min prose/code with 4 charts and 5 cells). Video excluded.
- **Review change (2026-11-18):** the laps boxplot no longer mirrors the class notebook's cell. Cell [3] computes the cutoff and prints Q1/Q3, the cutoff and the longest swim in its own words. Cell [4] draws the hidden-outlier boxplot under a plain title. Cell [5] uses the default `.plot.box()`. Both box SVGs were re-rendered from those exact cells with the pandas 3 / matplotlib 3.11 environment.

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read:** Day 5 deck, via the 2026-11-18 Mod 2 source digest (slides + notes)
- **Deck vs. local deck_spec disagreements:** "chart junk" is a deck_spec glossary term only. It is kept as one card and one list item.

## Avoid (already used elsewhere in the module)
- **LiveLab deck:** penguin body-mass bar chart; earthquake depth boxplot; billed hours; photo-steps analogy; capped commute survey; website visits / stock prices
- **Data Challenge:** Seattle weather (spreadsheet day)
- **Project:** flood claims (incl. its hidden-outlier boxplot), ER waits, permits, consulting
- **Other Mod 2 readings:** moved off the old food-pantry domain (it collided with the food-bank readings); tutoring (Day 4), used-book shop (Day 11)

## Align
- Truncated axis, outlier/upper fence (Q3 + 1.5 × IQR), showfliers, colorblind-safe palette, chart junk, legend if >1 series: all match the deck.
- The bar-chart zero rule, with the line-chart exception (a line's slope is its claim).
- Disclosure: hiding outliers is honest only with a caption that says what was hidden.

## Prepare
- `quantile` unpacking, the fence vs. `.max()`, `showfliers=False/True`, `plt.ylim` truncation and its fix.
- Explaining whether an axis start is honest for that chart type (the challenge's spreadsheet axis-minimum step, rehearsed in pandas).
- **Confirmed:** the reading works no Data Challenge step and solves no part of the project.

## Real-world scenario for this reading
- **Domain:** public sector
- **Scenario:** a city pool manager's report on three public pools (changed from "parks manager" in review so it doesn't echo the street-tree reading's parks office) for the city council, which decides where lifeguards go.
- **Data:** `visits.csv` (9 rows; means 182/188/191; `plt.ylim(180, 195)` makes a 5% gap look 5×) and `laps.csv` (10 rows; fence 43.0, max 110).

## Vocabulary list
- Flip cards: Truncated axis, Chart junk (the deck's 2 glossary terms), plus Upper fence and showfliers. Outlier (taught on Day 1) and colorblind-safe palette are still bolded and defined in the body.

## Activity rotation
- [x] flip cards
- [x] quiz with feedback on every choice (7)
- [x] select-all (chart review)
- [x] typed fill-in (`ylim`) gating the fixed chart
- [x] predict-before-run gating
- [x] reflection with optional AI prompt

## Video pick
- **Title/channel/length:** "How to spot a misleading graph" by Lea Gaslowitz, TED-Ed, 4:10 (verified 2026-11-18). English, embeddable.
- **Link:** https://www.youtube.com/watch?v=E91bGT9BjYk
- **Why this one:** covers truncated axes directly, and it is short.

## Interview relevance
- "What makes a chart misleading, even if the data is real?"

## AI integration
- Optional reflection prompt asks an AI to review chart code, then check its answer against `.max()` and the axis limits.

## Additional resources
- Storytelling with Data: bar charts must have a zero baseline (replaced the callingbullshit.org link in review; URL checked, 200); pandas `Series.plot.box` docs; ColorBrewer.
