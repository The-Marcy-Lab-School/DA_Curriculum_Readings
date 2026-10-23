# Content brief: Lookups Matter

- **Quest / LiveLab(s):** Quest 1.9 Lookups Matter (Days 16–17). Day 16 LiveLab "Big-O in Practice: Linear Scan vs. Dict Lookup, With a Partner"; Day 17 lab "Stress-Test Your Code". Never printed in the reading.
- **Skill tags (from taxonomy.json):** data-structures
- **Skills (skills.json):** algorithmic-complexity-big-o
- **Audience:** data + software engineering
- **Complexity flag:** complex (data structures)
- **Estimated time:** 21 minutes (~20–23). The 8:22 video is optional and not counted.

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
- **Vocabulary Mission terms owed (bold at first use in the prose, reviewed on flip cards at the end):** Linear Search, Dictionary Lookup, Input Size, O(n), O(1) Average-Case, Scale, Complexity. Plus Worst Case from the deck recap.

## Prepare (what this reading rehearses, on its own examples)
- **Build once with a plain loop:** `callers_by_phone[record["phone"]] = record["name"]`; no comprehension.
- **Build cost vs. lookup cost:** paragraph after the build file + select-all option.
- **`[key]` vs. `.get(key)`:** KeyError file, then a `.get` fill-in with `is None` (one-line note).
- **When to keep a linear search (tradeoff):** "12 test callers, once a night" quiz + decision-rule reflection.
- **Growth material:** one-paragraph reminder only (the Big-O quest teaches growth).
- **Confirmed:** works no Data Challenge step (no comparison counters, no AI multiplier check, no timing) and writes no part of the project reflection.

## Real-world scenario for this reading
- **Domain:** business ops / consumer tech (help-line caller screen).
- **Scenario:** a help line shows the caller's name by looking up the phone number. Instant with 20 saved callers, several seconds with 400,000.
- **New situation:** "Called before today" check on a collection that grows all day.

## Structure (2026-10-23 content pass)
Hook + goal + visual → recall (2) → linear search file → build-a-dict file + tradeoff quiz → `[]` vs `.get` (predict, fill-in) → select-all → wrap-up (3 bullets, new situation, interview line, next idea) → reflection → key terms flip cards → optional video → resources → score/submit.
Every file: predict → locked Run (`data-after`) → output under the code.

## Activities
- [x] flip cards (review)  - [x] quiz with feedback  - [x] select-all  - [x] fill-in-the-blank (typed `get`, numbered steps)  - [x] predict → run  - [x] free response  - [x] optional video

## Video pick (optional, outside the time estimate)
- **Title/channel/length:** "Python Dictionary vs Lists Speed Comparison" — Python Esper, 8:22 (502 s, verified)
- **Link:** https://www.youtube.com/watch?v=hwtre8WkLm4

## Interview relevance
- One line in the wrap-up: "Why a dict instead of a list?" Name the one-time build and the O(1) lookups.

## AI integration
- Optional AI-brainstormed prompt button inside the reflection.

## Additional resources
- Python docs membership tests; Python tutorial dictionaries; Python Wiki TimeComplexity; Python Morsels time complexities.
