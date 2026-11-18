# Content brief: The Pattern Isn't the Proof

- **Day / LiveLab:** Day 10, "Interrogating Your Data: Clarifying Questions". The GitBook has no Mod 2 quest pages yet, so the reading owes the deck's glossary terms. Never printed in the reading.
- **Skill tags (from taxonomy.json):** eda-statistics
- **Skills (skills.json):** critical-thinking
- **Audience:** data
- **Complexity flag:** standard (20-minute maximum)
- **Estimated time:** shown as "~17–20 minutes". 5 quizzes x 50 s (4.2) + flip cards (2) + drag sort (2) + 2 typed boxes (4) + 5–7.5 prose/code/tables = 17.2–19.7. The 11:45 video is optional and not counted. q-bias (duplicated the drag sort) and q-checkable (duplicated the new-situation question and the rewrite) were cut to stay at or under 20. The stakeholder is a neighborhood association, not the parks office (Day 5 uses a city parks manager).

## Sources (see SKILL.md, "Source of truth")
- **Drive deck read (2026-11-18, slides + speaker notes, via the Mod 2 source summary):** "Interrogating Your Data - Clarifying Questions".
- **Labs repo:** local `.sources/` copy: the livelab's instructor_prep and code-along, the Day 2 steps of the airline Data Challenge.
- **Projects repo:** local `.sources/` copy: Module 2 overview, memo starter, checklist rubric.
- **Deck vs. local deck_spec disagreements:** none that affect this reading; the Drive deck was used.

## Avoid (already used elsewhere in the module)
- **LiveLab deck:** penguins dataset, field-station study, island confound, island sample-size and hard-to-sex questions, broken-scale example, late-uploading sales region, food-label analogy, store survey forms missing age, teammate with different row counts.
- **Data Challenge:** airline safety file and its scenario, symbols in names, seat-km, incident definitions.
- **Project:** its four domains and data files.
- **Other readings:** food bank (Day 2), bus on-time data (Day 12). The old food-bank version of this reading was replaced.

## Align
- **Deck definitions:** checkable question (a data steward could answer it with a concrete fact); data steward; Origin = who collected this, and how?; Completeness = what's missing, and why?; Bias = who or what got under-sampled? (uneven group sizes sort under Bias); generic question (could fit any dataset, no fact to check, sounds thoughtful, answers nothing); source note read first.
- **Key terms on flip cards:** Source Note, Origin, Completeness, Bias, Data Steward, Checkable Question, Generic Question.

## Prepare (what this reading rehearses, on its own examples)
- **Count rows per group before quoting:** `value_counts()` on the area column.
- **Blanks by group (the day's new form):** `trees["species"].isna().groupby(trees["area"]).sum()`, with the 0-blank areas shown and the filter route contrasted in feedback.
- **Rewrite a generic question:** typed box with a criteria checker (group, number/method, question mark, no "accurate/reliable").
- **File vs. documentation questions:** one paragraph.
- **Memo trust line:** reflection uses "If the answer turned out to be ___, I would tell ___."
- **Common mistake defused:** generic data-quality questions; trusting a tiny group.
- **Confirmed:** works no Data Challenge step and solves no part of the project.

## Real-world scenario
- **Domain:** public sector / volunteering.
- **Scenario:** volunteers counted street trees in four areas (North, South, East, West); the neighborhood association will plant where the file shows the fewest. West has 2 rows; South (counted by a school club on one rainy morning) has 3 of 4 species blank.
- **Why it fits:** familiar, no jargon, and it makes "fewest in the file vs. fewest on the street" concrete.

## Syntax
- Uses only `pd.read_csv`, `value_counts()`, `isna()`, and the Day 10 form `isna().groupby(other column).sum()` (taught in a "New in this cell" note). No lambda.

## Activity rotation
- flip cards, 5 radio quizzes with per-choice feedback, 2 gated notebook cells, typed rewrite with checker, drag sort into Origin/Completeness/Bias, reflection with optional AI prompt.

## Video pick
- **Title/channel/length:** Sampling Methods and Bias with Surveys: Crash Course Statistics #10 — CrashCourse, 11:45 (705 s, verified with curl 2026-11-18).
- **Link:** https://www.youtube.com/watch?v=Rf-fIpB4D50
- **Why this one:** reputable channel, English audio (default caption track `en`), embeddable; shows how groups end up under-sampled.

## Interview relevance
- "What would you ask before trusting a finding from a dataset?" (one sentence in the wrap-up).

## Additional resources
- pandas user guide: Group by; pandas docs: Series.isna; Khan Academy: Examples of bias in surveys.
