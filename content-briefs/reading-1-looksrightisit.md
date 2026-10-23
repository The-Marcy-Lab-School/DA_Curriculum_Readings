# Content brief: Looks Right. Is It?

- **Quest / LiveLab(s):** Quest 1.10 Looks Right. Is It? (Days 18–19). Day 18 LiveLab "Debugging Like a Pro: Finding Planted Bugs Independently"; Day 19 "Final Practice Gauntlet: Mixed HackerRank-Style Review". Never printed in the reading.
- **Skill tags (from taxonomy.json):** debugging-testing
- **Skills (skills.json):** attention-to-detail
- **Audience:** data + software engineering
- **Complexity flag:** standard
- **Estimated time:** 22 minutes (~21–24). The 4:07 video is optional and not counted.

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
- **Vocabulary Mission terms owed (bold at first use in the prose, reviewed on flip cards at the end):** Bug, Logic Error, Off-by-One Error, Scope Bug, Undefined Attribute, Refactor, Expected Behavior, Actual Behavior. Plus Edge Case.

## Prepare (what this reading rehearses, on its own examples)
- **Expected first, then actual:** every bug file states its expected behavior, then predict → locked Run → output under the code.
- **Every fix is a file with output:** off-by-one, scope bug, undefined attribute (fill-in), bare `except:` → `except KeyError:`.
- **Refactor:** tiny before/after files with identical output.
- **Describe a bug precisely (line, current behavior, intended behavior):** reflection with numbered steps.
- **Syntax notes:** `range(start, stop)` and `items[i]` ("New in this file"); one-line bare `except:` reminder in recall.
- **Confirmed:** no bug mirrors the deck, Data Challenge, quest bug hunts or project challenge; works no challenge step.

## Real-world scenario for this reading
- **Domain:** business ops / consumer tech (streaming app).
- **Scenario:** AI-written code builds each viewer's monthly summary email. It runs cleanly and prints wrong numbers.
- **New situation:** a viewer's hand count of finished episodes (12) vs. the email (11).

## Structure (2026-10-23 content pass)
Hook + goal + visual (expected vs. actual, no answer shown) → recall (2) → off-by-one (predict, trace, fixed file) → crashing bugs: scope + attribute (predict, fixed file, fill-in) → bare `except:` (predict, fixed file) → refactor before/after → select-all → wrap-up (3 bullets, new situation, interview line, next idea) → reflection → key terms flip cards → optional video → resources → score/submit.

## Prereq recall
- `range()` stop value; what a bare `except:` does (with a one-line reminder).

## Activity rotation
- [x] flip cards (review)  - [x] quiz with feedback  - [x] select-all  - [x] fill-in-the-blank (typed attribute name, numbered steps)  - [x] trace stepper  - [x] predict → run  - [x] free response  - [x] optional video

## Video pick (optional, outside the time estimate)
- **Title/channel/length:** "Debugging with test cases | Intro to CS - Python" — Khan Academy, 4:07 (247 s, verified)
- **Link:** https://www.youtube.com/watch?v=eNmRjbVIZ0s
- **Why this one:** expected results for test cases, then narrowing to one function; English caption track first; embeddable. Replaced the earlier VS Code debugger video, which QA failed on its caption-language check.

## Interview relevance
- "Find the bug in this function"; observe-isolate-validate; "this report total looks off, how would you check it?"

## AI integration
- Scenario script is AI-written; AI-brainstormed reflection prompt button.

## Additional resources
- Python tutorial Errors and Exceptions; W3Schools Python Scope; Hitchhiker's Guide gotchas; Python Tutor.

## Wrap-up question
- Hand count 12 vs. the summary's 11, in the same streaming scenario.
