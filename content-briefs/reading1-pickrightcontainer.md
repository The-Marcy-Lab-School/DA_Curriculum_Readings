# Content brief: Pick the Right Container — Python Data Structures

- **Quest / LiveLab(s):** Quest 1.4 Pick the Right Container (Day 7). LiveLab: Python Data Structures. Data Challenge: Pick the Right Container (2/3).
- **Skill tags (from taxonomy.json):** data-structures
- **Skills (skills.json):** algorithmic-complexity-big-o
- **Audience:** data + software engineering
- **Complexity flag:** complex (data structures)
- **Estimated time:** ~40-42 minutes (unchanged; activity count unchanged)

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read:** "Python Data Structures" (slides + speaker notes), read 2026-10-16.
- **Labs repo:** local `.sources/` copy, 2026-10-16 (`livelabs/python-data-structures/` instructor prep + student notebook, `data-challenges/pick-the-right-container/`).
- **Projects repo:** local `.sources/` copy, 2026-10-16 (`instructor/overview.md`, `_brief.json`).
- **Deck vs. local deck_spec disagreements:** not checked; Drive deck used directly.

## Avoid (already used elsewhere in the module)
- **LiveLab deck:** playlist (list), flight + hotel itinerary (tuple), restaurant menu (dict), Close Friends list (set); support-ticket queue, audit log, store manager SKU bin, event check-in desk; Discord read-states story; `point = (3, 4)` and "coordinates"; list/tuple/dict/set board values; mini data pipeline.
- **Code-along:** pending order IDs list, log-entry tuple, product stock dict, seen IDs set, 2-million-item timing.
- **Data Challenge:** transit turnstile taps; per-card counting with parallel lists vs. a dictionary; set of stations.
- **Project / module-wide:** same list as the Big-O brief.
- **Replaced in this revision:** the old city 311 service-request scenario (overlapped the city service requests dataset), the help-desk ticket queue and the (latitude, longitude) / `point = (4, 9)` tuple (overlapped deck examples).

## Align
- **Deck definitions this reading agrees with:** data structure (container with rules about order, duplicates, change); list (ordered + mutable); tuple (ordered + locked); dict (key/value pairs); set (unique values, unordered); hashable (fixed fingerprint; dict keys and set values must be hashable); `{}` is an empty dict; a tuple holding a list is not hashable.
- **Quest Vocabulary Mission terms:** Data Structure, List, Tuple, Dictionary, Set, Key, Value, Mutable, Immutable (all on flip cards; Data Structure, Dictionary, Key/Value and Immutable added in this revision).

## Prepare (what this reading rehearses, on its own examples)
- **Data Challenge move:** pick a set for uniqueness and a dictionary for keyed lookup → container matcher, set duplicate-add simulator, promo-code interview question.
- **Project common mistake #3 (loose parallel lists):** new select-all statement on two position-matched lists versus a dictionary. It states the general risk only; it does no counting and no Data Challenge step.
- **Confirmed:** the reading works no Data Challenge step and solves no part of the project.

## Real-world scenario for this reading
- **Domain:** food delivery app (business ops). Summary question: concert venue app.
- **Scenario:** a courier's route (list), a delivered order record (tuple), order code to courier (dict), refunded orders (set).
- **Why it fits:** familiar app; each container's rule has a clear stake (a refund paid twice, a delivery record edited by accident).

## Prereq recall
- List indexing, reassignment, for loops, equality comparison.

## Vocabulary list
- Data structure, List, Tuple, Dictionary (dict), Set, Key and value, Mutable, Immutable, Hashable.

## Activity rotation
- [x] flip cards  - [x] quiz with feedback  - [x] select-all  - [x] drag-and-drop  - [x] order-the-steps  - [x] fill-in-the-blank  - [x] code simulator  - [x] trace stepper  - [x] video reflection

## Video pick
- **Title/channel/length:** Python Data Structures: When to Use List, Tuple, Set, Dict — Data with Baraa, 3:54 (234 s, re-verified 2026-10-16).
- **Link:** https://www.youtube.com/watch?v=h-zcj4DmqHk

## Interview relevance
- "Which data structure and why?"; "why can't a list be a dict key?"; set for "already seen" checks.

## AI integration
- AI-brainstormed reflection prompt next to the decision-rule free response.

## Additional resources
- Python docs Data Structures; W3Schools dictionaries and sets; Python Tutor.

## Critical thinking / summary questions
- Concert venue app: pick a container for each of four needs. Free response: first question when choosing between a dictionary and a set.
