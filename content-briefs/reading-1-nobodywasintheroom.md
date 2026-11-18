# Content brief: Nobody Was in the Room

- **Day / LiveLab:** Day 12, "Communicating to a Stakeholder - README & Memo". The GitBook has no Mod 2 quest pages yet, so the reading owes the deck's glossary terms. Never printed in the reading.
- **Skill tags (from taxonomy.json):** eda-statistics, data-visualization
- **Skills (skills.json):** stakeholder-communication
- **Audience:** data
- **Complexity flag:** standard (20-minute maximum)
- **Estimated time:** shown as "~17–20 minutes". 5 quiz-style items incl. the savefig fill-in x 50 s (4.2) + flip cards (2) + drag sort (2) + 2 typed boxes (4) + 5–7.5 prose/code/README/memo = 17.2–19.7. The 4:47 video is optional and not counted. The exploratory/explanatory recall quiz and the README-sections table were cut to stay at or under 20 (the five sections are now one sentence, and the README example shows them as headings).

## Sources (see SKILL.md, "Source of truth")
- **Drive deck read (2026-11-18, slides + speaker notes, via the Mod 2 source summary):** "Communicating to a Stakeholder - README & Memo".
- **Labs repo:** local `.sources/` copy: livelab instructor_prep and code-along, the births Data Challenge.
- **Projects repo:** local `.sources/` copy: Module 2 overview, README template, memo starter, rubric.
- **Deck vs. local deck_spec disagreements:** none that affect this reading. Note: the project README template asks for more sections than the deck's five; the reading teaches the deck's five and does not describe the project template.

## Avoid (already used elsewhere in the module)
- **LiveLab deck:** penguins mass-by-sex chart and README snippet, chef's prep notes analogy, "results by end of week" prompt, manager with two minutes before a meeting, a grader opening a shared repo.
- **Data Challenge:** daily births file, hospital staffing scenario, weekday chart, Friday the 13th, its `.map`/`.reindex` toolkit examples, cafe coffee sales.
- **Project:** its four domains and data files.
- **Other readings:** tree count (Day 10).

## Align
- **Deck definitions:** stakeholder-facing; README = landing page, answers "What did you find?"; memo = separate deliverable, answers "Can I trust it?"; the 5 README sections (Scenario, Data overview, Statistical summary, Chart images, Takeaways); the 4-part memo (Domain | Stakeholder, Answer, Questions worth checking, Does this affect trust?); alt text = chart type + what's compared + pattern, never a file name or the title; savefig before show; `!` makes an image, not a link; image path relative to the README; recompute before you cite; BLUF.
- **Key terms on flip cards:** Stakeholder, Stakeholder-Facing, README, Data-Quality Memo, Takeaways, Alt Text.

## Prepare (what this reading rehearses, on its own examples)
- **Recompute before citing:** cell 1 groupby on two columns, mean, round.
- **Save the chart:** `os.makedirs("images", exist_ok=True)`, `.unstack().plot.bar(rot=0)`, title + label, `plt.savefig("images/...", dpi=150)` before `plt.show()` (typed fill-in). Chart rendered from that exact cell with matplotlib and saved as `late_by_route.svg`.
- **Embed, don't describe:** README.md example with `![alt](images/late_by_route.png)`; alt-text quiz; "see the notebook" wrap-up question.
- **Memo:** skeleton with the Answer and trust lines left blank; typed Answer line with a checker that flags code words; reflection writes the trust line.
- **Confirmed:** works no Data Challenge step and solves no part of the project.

## Real-world scenario
- **Domain:** public sector (city buses).
- **Scenario:** Jordan (no pronouns) found Route 12 runs about 10 minutes late on evening trips; the transit manager decides on adding buses and won't open a notebook.
- **Why it fits:** everyday, and the trust questions (canceled trips, road work weeks) are easy to picture.

## Syntax
- Uses only `pd.read_csv`, two-column `groupby`, `.mean()`, `.round(1)`, matplotlib title/ylabel/savefig/show, plus the day's new `import os`, `os.makedirs(..., exist_ok=True)` and `.unstack()` (taught in a "New in this cell" note). No `.xs`, no lambda.

## Activity rotation
- flip cards, radio quizzes, gated notebook cell, typed fill-in, typed Answer line with checker, drag sort README vs. memo, reflection with optional AI prompt.

## Video pick
- **Title/channel/length:** Telling Stories with Data in 3 Steps (Quick Study) — Harvard Business Review, 4:47 (287 s, verified with curl 2026-11-18).
- **Link:** https://www.youtube.com/watch?v=r5_34YnCmMY
- **Why this one:** reputable channel, English audio (default caption track `en`), embeddable, short; leads with the point, like BLUF.

## Interview relevance
- "How would you explain a finding to someone who isn't technical?" answered with BLUF (one sentence in the wrap-up).

## Additional resources
- GitHub Docs: Basic writing and formatting syntax; matplotlib docs: savefig; W3C: Complex images (alt text for charts).
