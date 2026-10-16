# Content brief: One Job at a Time — Writing a Second, Single-Job Function

- **Quest / LiveLab(s):** Quest 1.7 One Job at a Time (Days 11–12); LiveLabs "Summarizing Data With a Second Function" and "Recall & Practice: Functions, Validation, try/except, Serialization"
- **Skill tags (from taxonomy.json):** python-fundamentals
- **Audience:** data + software engineering
- **Complexity flag:** complex (functions)
- **Estimated time:** 45–48 minutes (unchanged; activity count unchanged)

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read (2026-10-16):** Summarizing Data With a Second Function; Recall & Practice: Functions, Validation, try/except, Serialization (slides + notes)
- **Labs repo:** `.sources/` copy as of 2026-10-15 (livelab instructor_prep + code-alongs; one-job-at-a-time .md, RUBRIC, student worksheet)
- **Projects repo:** `.sources/` copy as of 2026-10-15
- **Deck vs. local deck_spec disagreements:** not checked; Drive deck used throughout.

## Avoid (already used elsewhere in the module)
- **LiveLab decks:** board-game listing with low-availability alert and len() total; library returns/new-arrivals analogy; kitchen backup; store, clinic and volunteer report examples; news case (spreadsheet average missing rows); "put read/validate/summarize in order" board activity; *args/**kwargs examples
- **Code-along:** the three-step board-game summary
- **Data Challenge:** food-pantry donations, category breakdown, four-function pipeline with a swappable summarizer
- **Project:** all four scenarios; the summary-print and export functions
- **Replaced in this revision:** car-rental returns with listing + low-fuel alert + len() total (same shape as the deck code-along and the project summary; fleet tracking is close to an inventory tracker); order-the-pipeline activity (duplicated the recall deck's board activity)

## Align
- **Deck definitions:** summarizing = reporting useful information from data already validated; validate = decide valid or not; each function owns one clear job; the summarizer never re-validates.
- **Quest Vocabulary Mission terms owed:** Function, Parameter, Return Value, Accumulator, Validation, Single-Purpose Function (all flip cards), plus the deck's Summarizing.

## Prepare
- **Data Challenge move:** a summarizer built around an accumulator, returning its result, with no validation inside → fill-in-the-blank `summarize_steps`, typed accumulator trace, extra-check debug item.
- **Project mistake defused:** one long function doing everything → drag-and-drop, interview item, summary scenario.
- **Deliberately not taught here:** the dict accumulator with a key guard (the challenge's core move).
- **Confirmed:** works no Data Challenge step; solves no part of the project.

## Real-world scenario
- **Domain:** health / personal tech — a fitness tracker's week of daily step counts, summarized as total steps and days that met a goal.
- **Why it fits:** step counts are familiar, and a goal parameter makes "same function, different argument" concrete.

## Video pick
- **Functions in Python are easy — Bro Code, 10:38** (verified 638 s, English, embeddable). Unchanged.

## Summary scenario
- Podcast episode summary plus a new email request: a new job gets a new function.
