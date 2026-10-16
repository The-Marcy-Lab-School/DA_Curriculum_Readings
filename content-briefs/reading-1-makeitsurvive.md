# Content brief: Make It Survive — Data Serialization

- **Quest / LiveLab(s):** Quest 1.5 Make It Survive (Day 8); LiveLab "Data Serialization — Why JSON, CSV, and TXT Exist"
- **Skill tags (from taxonomy.json):** data-serialization
- **Audience:** data + software engineering
- **Complexity flag:** standard
- **Estimated time:** 40–44 minutes (unchanged; activity count unchanged)

## Sources (see SKILL.md, "Source of truth")
- **Drive decks read (2026-10-16):** Data Serialization — Why JSON, CSV, and TXT Exist (slides + notes); Recall & Practice: Functions, Validation, try/except, Serialization (serialization recall only)
- **Labs repo:** `.sources/` copy as of 2026-10-15 (`module-1-python-foundations/`: CALENDAR, livelab instructor_prep + code-along, pick-the-right-container Day 3)
- **Projects repo:** `.sources/` copy as of 2026-10-15 (`projects/Module1_ProgrammingFundamentals/`)
- **Deck vs. local deck_spec disagreements:** not checked; Drive deck used throughout.

## Avoid (already used elsewhere in the module)
- **LiveLab deck:** news case (spreadsheet renaming gene symbols); save-game analogy; recipe backup; office-supply record; restock notes file; duplicate-key JSON discussion; "w"-mode quick challenge in its abstract form; tuple quick challenge as worded; batch-file TXT vs JSON tradeoff
- **Code-along:** notes file, supply CSV, supply JSON
- **Data Challenge:** transit tap log; summary-to-JSON round trip with a set
- **Project:** all four scenarios; batch file; the JSON export function
- **Replaced in this revision:** tool-library checkout tracker (too close to an inventory tracker)

## Align
- **Deck definitions:** serialize = Python value to saved format (plain name: save); deserialize = saved format to Python value (plain name: load); JSON = nested structured data, object ≈ dict, array ≈ list; CSV = flat rows + columns; TXT = plain text, structure you define; "w" empties the file, "a" appends, no mode reads; JSON has no tuple type; everything read from a text file starts as a string.
- **Quest Vocabulary Mission terms owed:** Serialization, Deserialization, Format, JSON, CSV, TXT (all six are flip cards).

## Prepare
- **Data Challenge move:** serialize, hit an unserializable type, read the error, reload and check types → Round 3 (a date value) and Rounds 1–2 (types after reload), on weather data.
- **Project roadblock defused:** code that runs without error but is wrong → KeyError after reload, string repetition from an unconverted file value.
- **Confirmed:** works no Data Challenge step; never builds a results export.

## Real-world scenario
- **Domain:** public sector / education — a school's rooftop weather station logging hourly rain and wind.
- **Why it fits:** a running script losing its data overnight is concrete, and hour keys and (rain, wind) tuples are natural ints and tuples.

## Video pick
- **How To Use JSON In Python — Tech With Tim, 6:11** (verified 371 s, English captions default, embeddable). Unchanged.

## Summary scenario
- Podcast episodes with a nested guest list: why CSV is the wrong format.
