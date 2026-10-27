# Content brief: Trust, But Verify — Designing Your First Validation Function

- **Quest / LiveLab(s):** Quest 1.6 Validate, Catch, Keep Going (Days 9–10). Decks: "Writing Your First Validation Function, From Scratch" and "Error Handling". Never printed in the reading.
- **Skill tags (from taxonomy.json):** debugging-testing, python-fundamentals
- **Audience:** data + software engineering
- **Complexity flag:** complex (functions)
- **Estimated time:** 22 minutes (pill ~21–24; the 2:51 video is optional and excluded)
- **Quest order:** first reading of Quest 1.6 (try/except reading comes second).

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read:** both decks above, slides and speaker notes, via the Drive/Slides connectors on 2026-10-16.
- **Labs repo:** `.sources/` copy of `module-1-python-foundations/` (validation LiveLab, validate-catch-keep-going Data Challenge), read 2026-10-16.
- **Projects repo:** `.sources/` copy of `Module1_ProgrammingFundamentals/`, read 2026-10-16.
- **Deck vs. local deck_spec disagreements:** not checked; the Drive deck was available and used.

## Avoid (already used elsewhere in the module)
- **LiveLab deck(s):** referee and lunchbox analogies, Mars orbiter case, HR/payroll/bookkeeper examples, board-game batch lines, `validate_batch`, "bad format" / "bad players" messages.
- **Code-along:** board-game batch lines.
- **Data Challenge:** 311 service requests; pantry donations, volunteer shifts and the other Mod 1 datasets.
- **Project:** bookstore, restaurant, healthcare supplies, athletic wear; transaction-command line format; planted edge-case types (not listed here); grade-tracking debug script and its bug types; board-game and office-supply demo domains.
- **GitBook quest page:** its warm-up and checkpoint examples.

## Align
- **Deck definitions:** batch file (one record per line); validation (check data against rules); enumerate() (adds each line's position, start=1 for human line numbers); split, shape check, value check, report; shape check before reading a field.
- **Quest page wording:** Validation asks "does the input meet our rules?" The quest page's own checkpoint has a single-line check return a Boolean, so the contract quiz says True/False suits one line but not a whole batch.
- **Quest Vocabulary Mission terms this reading defines:** Validation, Valid Input, Invalid Input, Malformed Input.

## Prepare
- **Data Challenge move:** return results instead of printing → section 4 contract quiz.
- **Data Challenge move:** field-count check before reading fields → section 2 (structure check runs first).
- **Data Challenge move:** a value that passes the shape check but breaks a rule → section 7 sort (invalid vs. malformed).
- **Project roadblock defused:** "code that runs without an error must be correct" → section 6 silent early-`return` bug; one long function → sections 4, 5.
- **Confirmed:** the reading works no Data Challenge step and solves no part of the project.

## Real-world scenario for this reading
- **Domain:** public sector / education (school class sign-up forms).
- **Scenario:** a high school office types class sign-up forms into a file (`student_id|grade|class`); one function reports unusable lines and why.
- **Why it fits:** every Fellow has filled in a school form, and "10th" written where a number belongs is a realistic slip.

## Structure (content pass 2026-10-23)
1 Recall (2) · 2 Validation + `.split()` (split_forms.py) · 3 Value check: `.isdigit()`, `int()`, `not`, `or` (check_grade.py) · 4 Contract + `enumerate` (number_lines.py) · 5 Fill-in with a "reading this file" syntax table (find_form_problems.py) · 6 Silent `return` bug (teammate_version.py) · 7 Drag sort valid / invalid / malformed · 8 Wrap-up + new situation · 9 Reflection · 10 Key terms review · optional video. Every file: predict → gated Run → output under the code.

## Vocabulary list
- Key terms review cards: validation, valid input, invalid input, malformed input, contract, structure check.
- Defined in prose: field, batch file, value check, input, output.

## Activity rotation
- [x] flip cards (end-of-page review)
- [x] quiz (radio) with feedback on every choice
- [x] drag-and-drop sort
- [x] fill-in-the-blank code (accepts `isdigit`, `.isdigit`, `isdigit()`; names the wrong blank)
- [x] reflection with numbered steps and a sentence starter

## Video pick
- **Title/channel/length:** Python Enumerate Function — Tech With Tim, 2:51 (verified 2026-10-16, English captions, embeddable)
- **Link:** https://www.youtube.com/watch?v=-MZiQaNI0QA
- **Placement:** optional "Go further" section; not in the time estimate or score.

## Interview relevance
- One sentence in the wrap-up: say the contract out loud before coding.

## AI integration
- Optional AI-brainstormed prompt button inside the reflection box.

## Critical thinking / summary questions
- Same scenario: a line with a blank grade field (`S-2050||Biology`); which check reports it?
