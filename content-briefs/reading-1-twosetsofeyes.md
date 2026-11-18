# Content brief: Two Sets of Eyes

- **Quest / LiveLab(s):** Day 11 LiveLab "Evaluating AI on Charts, Both Directions" (never named in the reading)
- **Skill tags (from taxonomy.json):** data-visualization
- **Skills (skills.json):** ai-literacy, data-distributions-shape
- **Audience:** data-only
- **Complexity flag:** standard (≤20 min)
- **Estimated time:** shown as "~17–20 minutes": 7 quiz items × 50 s (5.8) + flip cards 2 + drag sort 2 + reflection 2 + 5–8 prose/code/charts = 16.8–19.8. Video excluded. The savefig-order quiz was cut (the "New in this cell" note keeps the rule), and the typed chart-type answer became a predict-first Direction 2 verdict quiz (chart type + price claim).

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read:** Day 11 deck, via the 2026-11-18 Mod 2 source digest (slides + notes)
- **Deck vs. local deck_spec disagreements:** none that affect this reading. No `.skew()` code (the deck shows skew numbers on slides only).

## Avoid (already used elsewhere in the module)
- **LiveLab deck:** earthquake depth/magnitude histograms; bar per quake; data-steward warm-up; weekly metrics; durations/transactions/wait times; clinic walk-in vs. specialist
- **Data Challenge:** US births by day (staffing manager, weekdays, Friday the 13th); coffee sales toolkit example
- **Project:** flood claims, ER waits, permits, consulting
- **Removed from the old version:** the weekday-average / Saturday-staffing section (it collided with births), the pie chart (never taught), and the old "two directions" framing (it didn't match the deck)

## Align
- AI critique (the deck's only glossary term). Direction 1 = the AI describes a chart you made. Direction 2 = the AI suggests a chart. Both are checked against real numbers.
- Verdicts are right / wrong / unverifiable. Right-skewed means mean above median. Close mean and median don't prove one hump.
- `plt.savefig(..., dpi=150)` before `plt.show()`; `describe()[["mean", "50%"]]`; `.plot.hist(bins=...)`.

## Prepare
- Compute your own numbers before reading AI claims. Upload only the PNG to a new chat with a plain question. Paste the reply word for word and split it into claims.
- Two peaks: groupby a category to find the two groups. Judge Direction 2 on chart type AND the accuracy of its claims.
- **Confirmed:** the reading works no Data Challenge step and solves no part of the project.

## Real-world scenario for this reading
- **Domain:** business ops (small retail)
- **Scenario:** Devon (no pronouns) runs a used-book shop and asks an AI chat about saved charts.
- **Data:** `tradeins.csv` (10 rows; mean 9.9, median 4.5, one 60-book trade-in) and `books.csv` (12 rows; paperbacks $3–5, hardcovers $13–16; mean 9.17, median 9.00, group means 3.83 / 14.50).

## Vocabulary list
- AI critique, Direction 1, Direction 2, Claim, Right-skewed, Unverifiable

## Activity rotation
- [x] flip cards
- [x] quiz with feedback on every choice (7, incl. the Direction 2 verdict)
- [x] drag sort: AI claims → right / wrong / unverifiable
- [x] predict-before-run gating
- [x] reflection: "Draw a ___ of ___, because the question is about ___."

## Video pick
- **Title/channel/length:** "Mean, Median, and Mode: Measures of Central Tendency" (Crash Course Statistics #3), CrashCourse, 11:23 (verified 2026-11-18). English, embeddable.
- **Link:** https://www.youtube.com/watch?v=kn83BA7cRNM
- **Why this one:** covers mean vs. median under skew and two-peaked data. It replaced a ChatGPT Code Interpreter video that didn't teach checking a chart's shape. Swap it if the Day 1 reading also uses it.

## Interview relevance
- "How would you check an AI-made chart summary before trusting it?"

## AI integration
- The whole reading: a plain prompt, two AI reads, and one AI chart suggestion, all checked against computed numbers.

## Additional resources
- matplotlib `savefig` docs; pandas `Series.describe` docs; Data to Viz caveats.
