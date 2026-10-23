# Content brief: Try It, Catch It, Keep Going — Error Handling

- **Quest / LiveLab(s):** Quest 1.6 Validate, Catch, Keep Going (Days 9–10). Decks: "Writing Your First Validation Function, From Scratch" and "Error Handling". Never printed in the reading.
- **Skill tags (from taxonomy.json):** debugging-testing
- **Audience:** data + software engineering
- **Complexity flag:** standard
- **Estimated time:** 20 minutes (pill ~19–22; the 10:34 video is optional and excluded)
- **Quest order:** second reading of Quest 1.6; assumes `.split()`, `.isdigit()`, `int()` from the validation reading (never named on the page).

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read:** both decks above, slides and speaker notes, via the Drive/Slides connectors on 2026-10-16.
- **Labs repo:** `.sources/` copy of `module-1-python-foundations/` (error-handling LiveLab, validate-catch-keep-going Data Challenge), read 2026-10-16.
- **Projects repo:** `.sources/` copy of `Module1_ProgrammingFundamentals/`, read 2026-10-16.
- **Deck vs. local deck_spec disagreements:** not checked; the Drive deck was available and used.

## Avoid (already used elsewhere in the module)
- **LiveLab deck(s):** door-handle analogy, food-tasting backup, CrowdStrike case, finance-files example, `quantity = "abc"`, board-game lines, IndexError + ValueError pair inside a batch loop.
- **Code-along:** board-game batch lines, "Bad format" / "Bad quantity" messages.
- **Data Challenge:** 311 service requests; pantry donations, volunteer shifts and the other Mod 1 datasets.
- **Project:** bookstore, restaurant, healthcare supplies, athletic wear; transaction-command line format; planted edge-case types (not listed here); grade-tracking debug script; board-game and office-supply demo domains.
- **GitBook quest page:** its warm-up and checkpoint examples.

## Align
- **Deck definitions:** exception (an error event); try/except (attempt + handle); ValueError bad value; TypeError wrong type; NameError unknown name; IndexError missing position; KeyError missing key; bare `except:` catches everything, including real bugs.
- **Quest page wording:** Validation asks "does the input meet our rules?"; Error Handling asks "what should happen if an operation fails?"
- **Quest Vocabulary Mission terms this reading defines:** Exception, Error Handling, `try`, `except`. (The validation reading defines Validation, Valid/Invalid/Malformed Input.)

## Prepare
- **Data Challenge move:** count how many records ran before a crash → section 2 quiz on a hotel batch.
- **Data Challenge move:** sort a bad value into validation (`if`) or error handling (`except`) → section 6 new-situation quiz (a number that converts but breaks a rule).
- **Data Challenge move:** named `except`, never bare → section 4.
- **Project roadblock defused:** one malformed line crashing the whole script → sections 2 and 3.
- **Confirmed:** the reading works no Data Challenge step and solves no part of the project.

## Real-world scenario for this reading
- **Domain:** business ops (hotel booking requests).
- **Scenario:** a small hotel's program books online room requests (`guest|nights|room_type`, room types `single`/`double`); one request has "4 nights" in the nights field.
- **Why it fits:** everyone has booked or filled in a reservation form, and stray text in a number field is easy to picture.

## Structure (content pass 2026-10-23)
1 Recall (2: split, isdigit) · 2 Exception + crash cost (book_requests.py, traceback) · 3 Error handling, `try`, `except` + 3-step flow (read_nights.py, book_requests_safe.py) · 4 Two excepts, one error map of 4, bare `except:`, typed error name (room_total.py, room_types.py) · 5 Select-all · 6 Wrap-up + new situation · 7 Reflection · 8 Key terms review · optional video. Every file: predict → gated Run → output under the code.

## Vocabulary list
- Key terms review cards: exception, error handling, try, except, traceback, bare except.
- Error map (once, in section 4): ValueError, KeyError, IndexError, NameError.

## Activity rotation
- [x] flip cards (end-of-page review)
- [x] quiz (radio) with feedback on every choice
- [x] select-all-that-apply
- [x] typed answer (error name; accepts case and a stray colon)
- [x] reflection with numbered steps and a sentence starter

## Video pick
- **Title/channel/length:** Python Tutorial: Using Try/Except Blocks for Error Handling — Corey Schafer, 10:34 (verified 2026-10-16, English captions, embeddable)
- **Link:** https://www.youtube.com/watch?v=NIWwJbo-9_8
- **Placement:** optional "Go further" section; not in the time estimate or score.

## Interview relevance
- One sentence in the wrap-up; the bare-except quiz in section 4.

## AI integration
- Optional AI-brainstormed sentence starter inside the reflection box.

## Critical thinking / summary questions
- Same scenario: a 45-night request that converts fine but breaks the 1–30 rule (validation, not except).
