# Content brief: Looks Right. Is It?

- **Quest / LiveLab(s):** Quest 1.10 Looks Right. Is It? (Days 18–19). Day 18 LiveLab "Debugging Like a Pro: Finding Planted Bugs Independently"; Day 19 "Final Practice Gauntlet: Mixed HackerRank-Style Review". Never printed in the reading.
- **Skill tags (from taxonomy.json):** debugging-testing
- **Skills (skills.json):** attention-to-detail
- **Audience:** data + software engineering
- **Complexity flag:** standard
- **Estimated time:** 36 minutes (~34–37), including the 4:07 video

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read (2026-10-16):** "Debugging Like a Pro" (slides + speaker notes); "Final Practice Gauntlet" (slides).
- **Labs repo:** local `.sources/` copy (refreshed 2026-10-15): the LiveLab's `instructor_prep.md` + student notebook, `data-challenges/looks-right-is-it/`.
- **Projects repo:** local `.sources/` copy: `student/PROJECT_OVERVIEW.md`, `instructor/overview.md`, `_brief.json`, the above-and-beyond debugging challenge (domain and bug shapes only, to avoid them).
- **Deck vs. local deck_spec disagreements:** not checked; the Drive deck was read directly.

## Avoid (already used elsewhere in the module)
- **LiveLab deck + code-along:** board-game script; its comparison-boundary, skip-the-last-item and capitalization bugs; its repeated summary block; prices-average opener; trading-firm news story.
- **Gauntlet:** its six round questions.
- **Data Challenge:** consulting-firm payroll timesheet; malformed row; running-total placement; overtime boundary.
- **Quest bug hunts:** fixed-range loop, wrong return variable, missing stock attribute.
- **Project:** its four scenarios; grade-tracking debugging challenge and its bug shapes.

## Align
- **Deck definitions:** logic error (runs, wrong result); refactor (improve structure without changing behavior); observe-isolate-validate interview frame; "trace, don't just trust" AI-code habit.
- **Vocabulary Mission terms owed (all defined on flip cards):** Bug, Logic Error, Off-by-One Error, Scope Bug, Undefined Attribute, Refactor, Expected Behavior, Actual Behavior. Plus Edge Case.

## Prepare (what this reading rehearses, on its own examples)
- **Expected first, then actual:** every bug hunt states the expected behavior before the prediction; order-the-steps covers expected, actual, trace, change one line, verify.
- **Describe a bug precisely (line, current behavior, intended behavior):** "Describe a bug precisely" free response.
- **Silent vs. loud bugs:** two crashing bugs (scope, attribute) and two silent ones (off-by-one, bare `except`); summary paragraph contrasts them.
- **Project roadblocks defused:** "runs without error means correct"; "a variable inside a function is visible outside it".
- **Confirmed:** no bug mirrors the deck, Data Challenge, quest bug hunts or project challenge; works no challenge step.

## Real-world scenario for this reading
- **Domain:** business ops / consumer tech (streaming service).
- **Scenario:** an AI-written script builds each viewer's monthly watch recap. It runs cleanly and prints wrong numbers.
- **Why it fits:** familiar to most Fellows, and a wrong recap is obviously wrong to the viewer.

## Prereq recall
- `range()` stop value; reading an attribute set in `__init__`; `>` on equal values; what a bare `except:` does.

## Activity rotation
- [x] flip cards  - [x] quiz with feedback  - [x] select-all  - [x] order-the-steps  - [x] fill-in-the-blank (typed attribute name)  - [x] trace stepper  - [x] reveal-output code  - [x] video reflection

## Video pick
- **Title/channel/length:** "Debugging with test cases | Intro to CS - Python" — Khan Academy, 4:07 (247 s, verified)
- **Link:** https://www.youtube.com/watch?v=eNmRjbVIZ0s
- **Why this one:** expected results for test cases, then narrowing to one function; English caption track first; embeddable. Replaced the earlier VS Code debugger video, which QA failed on its caption-language check.

## Interview relevance
- "Find the bug in this function"; observe-isolate-validate; "this report total looks off, how would you check it?"

## AI integration
- Scenario script is AI-written; AI-brainstormed reflection prompt button.

## Additional resources
- Python tutorial Errors and Exceptions; W3Schools Python Scope; Hitchhiker's Guide gotchas; Python Tutor.

## Critical thinking / summary questions
- Museum ticket-scan count one short of the hand count; "ran" vs. "correct".

## Thinking ahead
- Reviewing others' code, checking AI-written functions, testing before a demo.
