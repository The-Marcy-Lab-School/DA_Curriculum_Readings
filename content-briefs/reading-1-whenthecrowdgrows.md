# Content brief: When the Crowd Grows — Big-O Intuition

- **Quest / LiveLab(s):** Quest 1.3 When the Crowd Grows (Day 6). LiveLab: Big-O Intuition — Why Some Lookups Stay Fast. Data Challenge: Pick the Right Container (1/3).
- **Skill tags (from taxonomy.json):** data-structures
- **Skills (skills.json):** algorithmic-complexity-big-o
- **Audience:** data + software engineering
- **Complexity flag:** complex (data structures / algorithmic complexity)
- **Estimated time:** ~40-43 minutes (unchanged; activity count unchanged)

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read:** "Big-O Intuition — Why Some Lookups Stay Fast" (slides + speaker notes), read 2026-10-16.
- **Labs repo:** local `.sources/` copy, 2026-10-16 (`CALENDAR.md`, `livelabs/big-o-intuition-why-some-lookups-stay-fast/instructor_prep.md`, `data-challenges/pick-the-right-container/`).
- **Projects repo:** local `.sources/` copy, 2026-10-16 (`instructor/overview.md`, `_brief.json`).
- **Deck vs. local deck_spec disagreements:** not checked; Drive deck used directly.

## Avoid (already used elsewhere in the module)
- **LiveLab deck:** phone contacts (type vs. scroll); library catalog backup; support agent / customer account ID; customer list with 10,000 lookups a day; `[15, 47, 92, 8]` scan; 500-item and 1,000/2,000-item worst-case numbers.
- **Code-along:** none for this LiveLab.
- **Data Challenge:** transit turnstile taps (station taps file); its comparison-count cases and nested-pass growth step.
- **Project / module-wide:** bookstore, restaurant kitchen, health clinic, sporting goods, inventory trackers; board-game and office-supply demo domains; grade tracking; bike stations, member directory, food-pantry donations, rec-center signups, city service requests, timesheets, volunteer shifts.
- **Replaced in this revision:** the old food-pantry roster scenario (overlapped the food-pantry Data Challenge dataset).

## Align
- **Deck definitions this reading agrees with:** Big-O (how an algorithm's work grows as the input grows); O(1) (constant: work stays roughly the same regardless of input size); O(n) (linear: work grows with the number of items); linear scan (checks items one at a time until the target is found); "O(n) is not slow, O(1) is not instant."
- **Deck scope note honored:** the dictionary is introduced as an idea, not as a prerequisite. The old recall question that assumed Fellows already knew dict syntax was replaced.
- **Quest Vocabulary Mission terms:** Input Size, Algorithm, Linear Scan, Lookup, Big-O, Scale (all on flip cards; Input Size, Algorithm and Scale added in this revision).

## Prepare (what this reading rehearses, on its own examples)
- **Data Challenge move:** count the checks a scan makes (match early, match last, no match) → recall questions on a 5-booking list and a `has_booking` function with an early `return`; 8-booking trace stepper.
- **Data Challenge move:** reason about growth with numbers, not stopwatch timings → doubling question; select-all option "fast on 50 items means fast on 5 million" (false).
- **Project roadblock defused:** confusing Big-O with "how fast is this right now" → misconception quiz, gold callout, select-all.
- **Confirmed:** the reading works no Data Challenge step and solves no part of the project. Nested-loop growth is only named as coming later, not worked.

## Real-world scenario for this reading
- **Domain:** airline bookings (business ops). Summary question: stadium ticket scanners.
- **Scenario:** a regional airline's check-in kiosk finds a booking by confirmation code. A linear scan is fine at 200 bookings and grows to 200,000 checks at 200,000; a direct lookup by code stays flat.
- **Why it fits:** most Fellows have used a check-in kiosk or typed a confirmation code; the input size growing over years is easy to picture.

## Prereq recall
- Loop over a list; count items a scan checks; early `return` from a loop inside a function; not-found means every item gets checked.

## Vocabulary list
- Algorithm, Input size, Scale, Big-O, O(1), O(n), Linear scan, Lookup, Worst case.

## Activity rotation
- [x] flip cards  - [x] quiz with feedback  - [x] select-all  - [x] drag-and-drop  - [x] order-the-steps  - [x] fill-in-the-blank  - [x] trace stepper  - [x] video reflection  - [x] interactive size selector

## Video pick
- **Title/channel/length:** Learn Big O notation in 6 minutes — Bro Code, 6:24 (384 s, re-verified 2026-10-16).
- **Link:** https://www.youtube.com/watch?v=XMUe3zFhM5c
- **Why this one:** short, reputable, builds O(1)/O(n) from concrete examples.

## Interview relevance
- "Explain Big-O" and "list or dictionary for repeated membership checks?" questions.

## AI integration
- AI-brainstormed reflection prompt before the plain-language explanation box.

## Additional resources
- Big-O Cheat Sheet; Python Wiki Time Complexity; Khan Academy Asymptotic Notation.

## Critical thinking / summary questions
- Stadium ticket scanners: which design keeps each check flat as sales grow? Free response: what do you ask first when judging whether code will stay fast?
