# Content brief: Who's This Chart For?

- **Quest / LiveLab(s):** Day 4 LiveLab "Exploratory vs. Explanatory: Two Kinds of Charts" (no Mod 2 quest pages yet; never named in the reading)
- **Skill tags (from taxonomy.json):** data-visualization
- **Skills (skills.json):** stakeholder-communication
- **Audience:** data-only
- **Complexity flag:** standard (≤20 min)
- **Estimated time:** 19–20 minutes (9 quiz-style items × 50 s, flip cards 2, drag sort 2, reflection 2, ~5–6 min prose/code). Video excluded.

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read:** Day 4 deck, via the 2026-11-18 Mod 2 source digest (slides + notes)
- **Labs repo / projects repo:** `.sources/` copies as of 2026-11-18 (via the digest)
- **Deck vs. local deck_spec disagreements:** none that affect this reading

## Avoid (already used elsewhere in the module)
- **LiveLab deck:** earthquakes (depth vs. magnitude, quakes per day); penguins warm-up; consulting billed hours; "sales data" request; claim amounts; permit costs; chef tasting vs. plating; fitness-app steps; daily orders/sign-ups/tickets/311 calls/logins
- **Data Challenge:** Seattle weather (community garden, monthly highs, rain)
- **Project:** flood claims, ER psychiatric waits, SF permits, consulting hours
- **Other Mod 2 readings:** youth orchestra gifts, food bank, blood drives, dog walking, coffee beans, cinema snacks, street trees, city bus; city pools (Day 5), used-book shop (Day 11)

## Align
- Exploratory chart (quick, rough, for yourself), explanatory chart (polished, chosen on purpose, one finding for a stakeholder), datetime (a type that stores real dates/times) all match the deck glossary.
- The decision framework uses the deck's order: one variable's shape → histogram/boxplot; trend over time → line; otherwise scatter (two numbers) or bar/boxplot (number across groups).

## Prepare (what this reading rehearses, on its own examples)
- Text dates `str` → `pd.to_datetime` → `datetime64[us]`; count per day with `.dt.date` + `.size()`; line chart with title and unit labels.
- Finding title vs. topic title vs. overclaim; check a number (`.corr()`) before trusting an AI's description of a chart.
- "One week can show a spike, not a trend."
- **Confirmed:** the reading works no Data Challenge step and solves no part of the project.

## Real-world scenario for this reading
- **Domain:** nonprofit & social impact
- **Scenario:** a free after-school tutoring center asks a city grant committee for money. Rough charts first, then one clear chart for the committee.
- **Data:** `students.csv` (10 rows: student, hours, score_gain; corr 0.26) and `sessions.csv` (12 sign-in timestamps over 6 days, peak on Mar 6).

## Vocabulary list
- Exploratory chart, Explanatory chart, Stakeholder, Correlation, Datetime

## Activity rotation
- [x] flip cards
- [x] quiz (radio) with feedback on every choice (8)
- [x] drag-and-drop matching (question → chart type)
- [x] fill-in-the-blank code (`plt.xlabel`)
- [x] predict-before-run gating on notebook cells
- [x] reflection with optional AI prompt

## Video pick
- **Title/channel/length:** "Episode 16: Exploratory vs Explanatory Analysis: Which One Do You Need?" by Dr Selena Fisk, 11:28 (verified 2026-11-18). English default caption track, embeddable.
- **Link:** https://www.youtube.com/watch?v=_EkQQwAi50A
- **Why this one:** on-topic definition of the two modes; kept from the previous version.

## Interview relevance
- "Walk me through a chart you made": what you saw, the number behind it, what it means, one caveat.

## AI integration
- Quiz: an AI calls a 0.26 correlation "clear, strong"; the learner checks the number. Optional AI reflection prompt.

## Additional resources
- pandas visualization guide; pandas `to_datetime` docs; Data to Viz.
