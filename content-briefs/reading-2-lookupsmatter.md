# Content brief: Lookups Matter

- **Quest / LiveLab(s):** Quest 1.9 Lookups Matter (Days 16–17). Day 16 LiveLab "Big-O in Practice: Linear Scan vs. Dict Lookup, With a Partner"; Day 17 lab "Stress-Test Your Code". Never printed in the reading.
- **Skill tags (from taxonomy.json):** data-structures
- **Skills (skills.json):** algorithmic-complexity-big-o
- **Audience:** data + software engineering
- **Complexity flag:** complex (data structures)
- **Estimated time:** 44 minutes (~42–45), including the 8:22 video

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read (2026-10-16, slides + speaker notes):** "Big-O in Practice: Linear Scan vs. Dict Lookup, With a Partner"; "Final Practice Gauntlet: Mixed HackerRank-Style Review" (slides only, Round 5).
- **Labs repo:** local `.sources/` copy (refreshed 2026-10-15): `CALENDAR.md`, the LiveLab's `instructor_prep.md` + student notebook, `livelabs/stress-test-timing-practice/`, `data-challenges/lookups-matter/`.
- **Projects repo:** local `.sources/` copy: `student/PROJECT_OVERVIEW.md`, `instructor/overview.md`, `_brief.json`.
- **Deck vs. local deck_spec disagreements:** not checked; the Drive deck was read directly.

## Avoid (already used elsewhere in the module)
- **LiveLab deck:** office supply room class, game-loading news story, the deck's named search function and dict, "5 vs. 5 million" discussion, its tradeoff model answer.
- **Code-along:** same supply-room class and two searches.
- **Day 17 lab:** timing a Fellow's own class at three batch sizes.
- **Data Challenge:** community-center member directory; counting comparisons; checking an AI speed multiplier.
- **Project:** its four store/kitchen/clinic/sportswear scenarios; its search function; its written Big-O reflection.

## Align
- **Deck definitions:** linear-scan search (check items one at a time until a match); dict-keyed lookup (jump to a value by key); worst case (maximum work); scaling (how cost changes as data grows); `.get()` returns `None` when a key is missing; building the dict is one O(n) pass; Big-O is not a stopwatch.
- **Vocabulary Mission terms owed (all defined on flip cards):** Linear Search, Dictionary Lookup, Input Size, O(n), O(1) Average-Case, Scale, Complexity. Plus Worst Case from the deck recap.

## Prepare (what this reading rehearses, on its own examples)
- **Worst case is the missing value:** trace stepper over 6 accounts + true/false.
- **Build cost vs. lookup cost:** concept overview paragraph + select-all option.
- **Big-O vs. seconds:** gold callout; video framing.
- **When to keep a linear search (tradeoff):** "12 test accounts, once a night" quiz + decision-rule free response.
- **Project roadblock defused:** confusing Big-O with current speed.
- **Confirmed:** works no Data Challenge step (no comparison counters, no AI multiplier check, no timing) and writes no part of the project reflection.

## Real-world scenario for this reading
- **Domain:** finance (fraud operations).
- **Scenario:** a payments company checks every transaction against its flagged-accounts records. The check that was instant with 20 accounts times out with 400,000.
- **Why it fits:** everyone has had a card payment checked; the scale jump is easy to picture.

## Prereq recall
- `in` returns a boolean; loop + `if` trace; `in` on a list is a one-at-a-time search; a missing value is compared to every entry.

## Activity rotation
- [x] flip cards  - [x] quiz with feedback  - [x] select-all  - [x] drag-and-drop  - [x] order-the-steps  - [x] fill-in-the-blank (typed `get`)  - [x] trace stepper  - [x] size selector  - [x] video reflection

## Video pick
- **Title/channel/length:** "Python Dictionary vs Lists Speed Comparison" — Python Esper, 8:22 (502 s, verified)
- **Link:** https://www.youtube.com/watch?v=hwtre8WkLm4
- **Why this one:** exactly the list-vs-dict search comparison; English caption track first; embeddable. Small channel, so worth a watch before keeping. Replaced the earlier BugBytes video, which QA failed on its caption-language check.

## Interview relevance
- "Why a dict instead of a list here?"; deduplication on a growing dataset; "when would you keep the linear search?"

## AI integration
- AI-brainstormed reflection prompt button (analogies for scan vs. jump).

## Additional resources
- Python docs membership tests; Python tutorial dictionaries; Python Wiki TimeComplexity; Python Morsels time complexities.

## Critical thinking / summary questions
- Coupon codes already used: list or dict keys/set? "How can two searches return the same answer but scale differently?"

## Thinking ahead
- Complexity applies to any two working solutions (deduplication, matching records across tables).
