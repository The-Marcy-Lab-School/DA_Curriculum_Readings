# Content brief: What Goes In, What Comes Out — Designing Your First Validation Function

- **Quest / LiveLab(s):** Quest 1.6 Validate, Catch, Keep Going (Days 9–10). Decks: "Writing Your First Validation Function, From Scratch" and "Error Handling". Never printed in the reading.
- **Skill tags (from taxonomy.json):** debugging-testing, python-fundamentals
- **Audience:** data + software engineering
- **Complexity flag:** complex (functions)
- **Estimated time:** 37 minutes (pill ~37–40; includes the 2:51 video)

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
- **Data Challenge move:** return results instead of printing → section 4 contract quiz, section 9 select-all.
- **Data Challenge move:** field-count check before reading fields → section 7 (what goes wrong if the order flips).
- **Data Challenge move:** a value that passes the shape check but breaks a rule → section 7 range quiz (invalid vs. malformed).
- **Project roadblock defused:** "code that runs without an error must be correct" → section 10 silent early-`return` bug; one long function → sections 1, 4, 5.
- **Confirmed:** the reading works no Data Challenge step and solves no part of the project.

## Real-world scenario for this reading
- **Domain:** public sector / education (school enrollment forms).
- **Scenario:** a high school's front office types course enrollment forms into a file (`student_id|grade|course`); one function reports unusable lines and why.
- **Why it fits:** every Fellow has filled in a school form, and "10th" written where a number belongs is a realistic slip.

## Vocabulary list
- validation, valid input, invalid input, malformed input, batch file, contract, side effect, structure check, value check, enumerate()

## Activity rotation
- [x] flip cards
- [x] quiz (radio) with feedback on every choice
- [x] select-all-that-apply
- [x] drag-and-drop matching
- [x] order-the-steps
- [x] fill-in-the-blank code
- [x] video reflection prompt

## Video pick
- **Title/channel/length:** Python Enumerate Function — Tech With Tim, 2:51 (verified 2026-10-16, English captions, embeddable)
- **Link:** https://www.youtube.com/watch?v=-MZiQaNI0QA
- **Why this one:** short, reputable, on the one new built-in.

## Interview relevance
- "Write a function that validates a batch of records," then "how would you test it without the whole file?"

## AI integration
- AI-brainstormed reflection prompts in the summary section.

## Critical thinking / summary questions
- New scenario: a bank's card-payment export; what's the first design decision?

## Thinking ahead
- A second function that uses this one's output; values that can only be checked by attempting the operation.
