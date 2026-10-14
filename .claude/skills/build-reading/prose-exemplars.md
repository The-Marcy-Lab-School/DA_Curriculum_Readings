# Prose exemplars — what to do and what not to do (DA readings)

Angelica asked for the SWE fellowship's language standard to be adopted here
(2026-10-14). This file is the standard, with the **do / don't** pairs that
produced it. Read it before writing or revising any DA reading.

Most pairs below came from Angelica's own rewrites of shipped SWE prose. The
ones marked **(found in a DA reading)** are real passages from this repo,
caught by the first audit after the checks were ported.

## The one rule above the rest

The writing guide (`SKILL.md` → "Writing rules") governs **the completeness of
reasoning between sentences**: whether a "so" has its premise on the page,
whether a consequence is named. It says nothing about how to build a sentence.
Applied as a *style* rule it produces contorted prose. **When the guide and
plain English pull in opposite directions, plain English wins.**

## Do / don't

| Don't | Do | Why |
|---|---|---|
| "The app had not lost anything. It had her number, and her number was 0." | "The app did not lose the data. The student just hadn't spent anything that week, so the total was 0." | Say the fact. Don't restate it as an abstraction. |
| "…the gap between those two readings is what this whole reading is about." | "…Python reads the line as 'if `total` is zero, empty, or missing,' because an `if` converts the value first." | Answer the question you just raised. Never defer, and never write "what this reading is about" — they are already reading it. |
| "A week of $250 and a week of $20 should not get the same sentence out of the app." | "Spending $250 in a week and spending $20 should not produce the same output." | Use the verb. Don't bend an action into a noun phrase. |
| "prints the delivery routes busiest first" | "prints the busiest routes first" | Keep a modifier next to what it modifies. Angelica named this pattern specifically. |
| "Putting the conditions in the wrong order shows one label from the wrong tier." | "The order of conditions matters: if you put them in the wrong order, the app shows a label from the wrong tier." | State the rule as a sentence, then the consequence. Don't hide the rule inside a gerund subject. |
| "A second mistake shows several labels at once and is harder to spot." | "A second mistake, deleting the `el` from each `elif`, shows several labels at once." | Name the thing you are contrasting. "A second mistake" names nothing. |
| "…and it looks even more innocent on the page." | "…and is harder to spot." | Every word must mean something. A mistake is not innocent. Same for "elegant", "powerful". |
| "An `elif` is attached to the `if` above it" — printed under a block containing no `elif` | "Each `elif` in the `spending_tier` chain is attached to the `if` that opens it" | Refer to code **by name**, never by position. And never point at a block that doesn't contain what the sentence describes. |
| "For each snippet below, predict what happens" **(found in a DA reading)** | "For each of the three round-trip snippets in this section, predict what happens" | Same rule. "Below" tells a reader nothing once a page has twelve code blocks. |
| "The script printed Oak Row, Hill Street, Hill Street." | An output block, one line per printed line. | Real program output renders as real output. The shape of the output is often the lesson. |
| "a volunteer named Marcus fat-fingers **his** entry" **(found in a DA reading)** | "a volunteer fat-fingers **their** entry" | No gendered pronouns for people, including invented characters. Use they/them or repeat the noun. |
| "organise", "behaviour", "analysed", "whilst" | "organize", "behavior", "analyzed", "while" | US spelling. `check_british_spellings` watches 42 forms. |
| A term the reading never defined, or one from a later reading | Only terms this reading defines, or that an earlier reading in the same quest already defined | A Fellow should never meet an undefined technical word. This was Angelica's first and most-repeated note. |
| One paragraph carrying four sequential actions | A numbered `<ol>`, one action per item | Steps are a list, not prose. |

## DA-specific rules the SWE repo doesn't have

**Cover your quest's Vocabulary Mission.** The DA GitBook is organised as
**quests** spanning several days. Each quest page lists the terms a Fellow must
be able to explain, then links the readings that teach them, so those terms are
owed. A quest's terms are owed by the quest **as a whole** — with two readings,
either one may carry a given term. `check_quest_vocabulary` reports a term only
when no reading in the quest defines it. `curriculum/mod1-quests.json` has the
mapping.

**The reading's URL is fixed.** Quest pages hardcode reading URLs. **Never
rename a reading folder, and never change how many readings a quest has.**
Revise content only.

**Videos: about 10-12 minutes, and verified.** DA readings run 25-50 minutes,
so a longer embed is proportionate — this is *not* the SWE repo's 5-minute cap.
But the video must be verified: real duration, English **audio** (check the
default caption track's `languageCode`, since an English title proves nothing),
and embeddable. Over 12 minutes warns; over 20 fails. The verified duration
goes into the displayed time estimate.

**Reading level 6th-9th grade**, measured outside the vocabulary section.
`check_reading_level` warns above 9.0. Five Mod 1 readings currently sit at
9.0-10.4.

**Keep what makes a DA reading a DA reading.** The persona widget, the
prerequisite-recall section, the 4-attempt submit-for-credit flow and the
longer runtime all stay. Only the *language* standard is being adopted from
SWE, not its format.

## What the first audit found, so you know the shape of the work

Across the 18 Mod 1 readings: 11 positional code references, 10 quest
Vocabulary Mission gaps, 5 readings above the reading-level target, 1 gendered
pronoun, 1 writing-guide hit, and 18 videos that have never been verified for
duration, language or embeddability. Zero British spellings.

Two ported checks had to be tuned down first, which is worth remembering before
trusting a raw count: SWE's bare `the check` pattern produced 13 false
positives here, because in DA readings "check" is often the real domain noun (a
membership check, a check-in code), and `in today's` fired on "today's resolved
list". A finding you can't reproduce by reading the sentence is a bug in the
check, not in the reading.