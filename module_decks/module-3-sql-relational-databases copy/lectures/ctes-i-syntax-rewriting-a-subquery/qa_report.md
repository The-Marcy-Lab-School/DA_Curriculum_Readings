# QA Report — CTEs I: Syntax & Rewriting a Subquery (Module 3, Day 5)

## 18-Point Scorecard

| # | Check | Result |
|---|---|---|
| 1 | Missing text / diagram exception | Clean. |
| 2 | Wordy/wrapping slides | Fixed — the "hard way" nested-subquery code slide needed ~14 visual lines against an ~11-line fit; shortened aliases/formatting and merged 2 lines without changing the query's logic. |
| 3 | Code slides have code + tested | **All 3 code slides validated for real**, replaying Days 2-4's own setup first. Confirmed the central claim independently: the nested subquery and its CTE rewrite return the **identical** result (Corner Bistro `3`, Green Leaf Cafe `1`). Full detail in `code_validation_report.md`. |
| 4 | Recall builds on prior skills | Clean — real recall CFU recites Day 4's own WHERE/COUNT error before building on it. |
| 5 | Spaced learning | `qa.skill_coverage_check` (5/12 lectures): 3 ongoing spacing gaps (`terminal-command-line`, `data-modeling` — Day 1 only; `database-administration` — Day 2 only) — expected at this build stage. |
| 6 | Engagement strategies used | `discussion` (×2), `poll` (×2), `would_you_rather` — spans Retrieval, Critical Thinking, Predict/Verify, and real Interview framing. |
| 7 | WCAG accessibility | 4 buckets, 5/5/5/5 — see below. |
| 8 | Notes on all slides except transitions | Clean. |
| 9 | No cutoff text | Clean — see #2. |
| 10 | Text fits its box | Clean. |
| 11 | Icons used properly | Clean — confirmed via real render review; the new `workflow_linear` diagram correctly reuses `warning`/`sql` icons already established for the same concepts elsewhere in the deck. |
| 12 | Case study source + clickable link | N/A — no case study this deck. |
| 13 | Whitespace / Mayer's principles | Bucket 17: 4/5 — well-segmented; render review found no crowding. |
| 14 | AI-sounding language | Fixed — one field's em-dash density reduced. |
| 15 | Dead resource links | 0 confirmed dead. All 3 URLs report `UNCERTAIN` from a local SSL cert-verification gap (not the sites) — all 3 independently confirmed live via direct fetch during authoring. One swap made mid-authoring: the originally-planned W3Schools CTE page 404s (W3Schools has no dedicated CTE tutorial); replaced with a verified real GeeksforGeeks page instead of using an unofficial "w3schools.tech" lookalike domain that turned up in search. |
| 16 | Logical flow / dependency ordering | Bucket 3: 4/5. Bucket 4: 5/5. Bucket 16 (cross-lecture continuity): 5/5 — opens by explicitly picking up Day 4's WHERE/COUNT error. |
| 17 | No day/deck numbers | Clean. |
| 18 | Instructor notes completeness | `instructor_prep.md` generated with all standard sections. |

## Code-Along Scorecard

| Bucket | Score | Justification |
|---|---|---|
| Scenario & Framing Quality | 5/5 | Concrete, directly maps to both queries the code-along runs. |
| Instructor Note Depth & Analogies | 4/5 | Every cell explains the "why," not just narrates syntax. |
| Scaffolding Fade | 4/5 (minor polish applied) | Confirmed real 4th-occurrence fade: reconnect dropped its own dedicated slide entirely (folded into a `domain_note`), correctly more compressed than Day 4's own already-partial fade. One wording inconsistency fixed (`starter_code`'s reconnect TODO shortened to match Day 4's terser phrasing). |

## Accessibility (4 buckets)

| Bucket | Score | Justification |
|---|---|---|
| Text Alternatives | 5/5 | No images in this deck — N/A cleanly. |
| Reading Order & Labels | 5/5 | Fully coherent linear sequence; every title/prompt specific. |
| Color Independence & Contrast | 5/5 | No color-only cues; no new color pairs. |
| Cognitive Load & Motion | 5/5 | All bullet/card counts ≤3; no motion notes. |

## Instructional Quality (16 scored buckets)

*Scores reflect the deck after applying every finding.*

| Bucket | Score | Justification |
|---|---|---|
| 1. Learning Objectives | 5/5 | Both objectives fully taught and practiced. |
| 2. Misconceptions | 4/5 | The correct-vs-readable misconception is directly confronted. |
| 3. Logical Flow & Transitions | 5/5 (was 4/5) | Fixed — the objective-boundary transition now uses `panel_preview` with a natural 2-item preview (was 3 of 4 transitions defaulting to `bold`). |
| 4. Prior-Knowledge Ties | 5/5 | Real retrieval warm-up recalls Day 4's exact error. |
| 5. Demo Sets Up Exercise | 5/5 | Clear "no exercise today" framing with a real project tie. |
| 6. Engagement & Gamification | 4/5 | Good type variety; on-brand voice. |
| 7. Summary Quality | 5/5 | Bridge summarizes and connects forward. |
| 8. Interview-Prep Coverage | 4/5 | Real, well-coached PREP-structured answer; technique reuse (3rd time this module) noted as an observation, not a violation. |
| 9. Backwards-Design Linkage | 5/5 | Project tie stated at objectives, mid-deck, and bridge. |
| 10. Bloom's Levels | 5/5 (was 4/5) | Fixed — "CTE" now gets a real visible defining bullet ("CTE: A named, temporary result set") on the concept slide, not just a glossary/card-label mention. |
| 11. Analogies | 5/5 | Gaming primary + cooking backup, correctly targeted, no stacking. |
| 12. Title Framing | 5/5 (was 4/5) | Fixed — the anatomy table's title changed from a topic label ("Anatomy of a WITH Clause") to a real headline ("Every WITH Clause Has the Same Four Pieces"). |
| 13. Diagram & Table Fit | 5/5 (was 3/5) | Fixed — added a `workflow_linear` diagram for subquery inside-out evaluation order, `diagram_selection.md`'s own named strongest use case, following Day 4's own precedent for an analogous concept. |
| 15. Scaffolding & Project Alignment | 5/5 | Deliberately lighter depth confirmed as intentional scoping (Day 5/6 split), not a defect. |
| 16. Cross-Lecture Continuity | 5/5 | Opens with Day 4's own error; no forward references to Day 6+ content. |
| 17. Whitespace & Multimedia | 4/5 | Clean segmenting; no redundancy found. |
| 18. Factual Accuracy & Claim Scope | 5/5 (was 3/5) | Fixed — a `[SOURCES]` tag added to the CTE-vs-subquery performance claim. |

## Overall grade

Accessibility average: **5.0/5**. Instructional average (16 scored buckets): **4.75/5**. Code-along average: **4.3/5**. Combined: **A**.

## Strengths

- The nested-subquery-vs-CTE rewrite's identical result is independently verified as real on real data, not just asserted — the lesson's central claim (readability change, not logic change) is proven, not stated.
- A genuine "simple CTE first, then the hard rewrite" scaffolding structure was added specifically to fix a too-short timing estimate, improving the lesson rather than just padding it.
- Deliberate, well-justified scope containment (single CTE, not chained) confirmed by 2 independent reviewers as intentional Day 5/6 sequencing, not under-depth.
- Every one of 6 real findings across 3 QA passes fixed with genuine content changes: a new diagram, a visible glossary definition, a retitled table, a `[SOURCES]` tag, transition variety, and a scaffolding-fade wording consistency pass.

## Weaknesses

- This module's spacing gaps (`terminal-command-line`, `data-modeling`, `database-administration`) remain open — expected at 5-of-12 lectures, not a defect.
- `PREP` is now used 3 times across 5 lectures (Days 1, 3, 5) — not a violation of any rule, but worth watching for real technique variety as Day 6 and beyond get built.
