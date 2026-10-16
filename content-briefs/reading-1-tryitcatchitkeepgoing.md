# Content brief: Try It, Catch It, Keep Going — Error Handling

- **Quest / LiveLab(s):** Quest 1.6 Validate, Catch, Keep Going (Days 9–10). Decks: "Writing Your First Validation Function, From Scratch" and "Error Handling". Never printed in the reading.
- **Skill tags (from taxonomy.json):** debugging-testing
- **Audience:** data + software engineering
- **Complexity flag:** standard
- **Estimated time:** 43 minutes (pill ~42–45; includes the 10:34 video)

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
- **Data Challenge move:** count how many records ran before a crash → section 8 quiz on a hotel batch.
- **Data Challenge move:** sort a bad value into validation (`if`) or error handling (`except`) → section 14 quiz (a number that converts but breaks a rule vs. text that won't convert).
- **Data Challenge move:** named `except`, never bare → sections 4 and 18.
- **Project roadblock defused:** one malformed line crashing the whole script → sections 1 and 8.
- **Confirmed:** the reading works no Data Challenge step and solves no part of the project.

## Real-world scenario for this reading
- **Domain:** business ops (hotel booking requests).
- **Scenario:** a small hotel's script books each night's online requests (`guest|nights|room_code`); one request has "4 nights" in the nights field.
- **Why it fits:** everyone has booked or filled in a reservation form, and stray text in a number field is easy to picture.

## Vocabulary list
- exception, error handling, traceback, try, except, ValueError, TypeError, NameError, IndexError, KeyError

## Activity rotation
- [x] flip cards
- [x] quiz (radio) with feedback on every choice
- [x] select-all-that-apply
- [x] drag-and-drop matching
- [x] fill-in-the-blank (type the exception name)
- [x] code simulator (`process_request`)
- [x] video reflection prompt

## Video pick
- **Title/channel/length:** Python Tutorial: Using Try/Except Blocks for Error Handling — Corey Schafer, 10:34 (verified 2026-10-16, English captions, embeddable)
- **Link:** https://www.youtube.com/watch?v=NIWwJbo-9_8
- **Why this one:** reputable channel; names specific exceptions rather than bare except.

## Interview relevance
- "What happens if this value isn't a number?" and "why `except ValueError` instead of bare `except`?"

## AI integration
- AI-brainstormed sentence starters for the control-flow explanation (section 16).

## Critical thinking / summary questions
- New scenario: a school enrollment script's dictionary lookup on a course that may be missing (KeyError plan).

## Thinking ahead
- Choosing, for a whole function, which failures to catch and which to let surface.
