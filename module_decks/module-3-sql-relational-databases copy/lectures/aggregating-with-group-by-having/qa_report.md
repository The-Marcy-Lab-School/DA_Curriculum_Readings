# QA Report — Aggregating with GROUP BY + HAVING (Module 3, Day 4)

## 18-Point Scorecard

| # | Check | Result |
|---|---|---|
| 1 | Missing text / diagram exception | Clean. |
| 2 | Wordy/wrapping slides | Clean. |
| 3 | Code slides have code + tested | **All 5 code slides validated for real**, replaying Day 2+3's own setup first. Confirmed the two central claims are genuinely real on real data: `COUNT(*)` on the LEFT JOIN returns **7** (not 5), and `WHERE COUNT(...)` raises a real `GroupingError` before `HAVING` fixes it. Full detail in `code_validation_report.md`. |
| 4 | Recall builds on prior skills | Clean — real recall CFU recites Day 3's own "6 vs. 3" result before building on it. |
| 5 | Spaced learning | `qa.skill_coverage_check` (4/12 lectures): 3 ongoing spacing gaps (`terminal-command-line`, `data-modeling` — Day 1 only; `database-administration` — Day 2 only) — expected at this build stage. |
| 6 | Engagement strategies used | `discussion` (×3), `poll` (×2) — spans Retrieval, Critical Thinking, Predict/Verify, and (after fixes) real Interview framing. |
| 7 | WCAG accessibility | 4 buckets, 5/5/5/5 — see below. |
| 8 | Notes on all slides except transitions | Clean. |
| 9 | No cutoff text | Clean. |
| 10 | Text fits its box | Clean. |
| 11 | Icons used properly | Clean — confirmed via real render review; the new `workflow_linear` diagram correctly reuses `table`/`warning`/`join`/`filter` icons already established elsewhere in the deck for the same concepts. |
| 12 | Case study source + clickable link | N/A — no case study this deck. |
| 13 | Whitespace / Mayer's principles | Bucket 17: 4/5 — well-segmented; render review found no crowding. |
| 14 | AI-sounding language | Fixed — one field's em-dash density reduced. |
| 15 | Dead resource links | 0 confirmed dead. All 3 URLs report `UNCERTAIN` from a local SSL cert-verification gap (not the sites) — all 3 independently confirmed live via direct fetch during authoring (PostgreSQL official tutorial, W3Schools, SQLBolt). |
| 16 | Logical flow / dependency ordering | Bucket 3: 4/5. Bucket 4: 5/5. Bucket 16 (cross-lecture continuity): 5/5 — numerically consistent pickup from Day 3 (restaurant/inspection counts match exactly). |
| 17 | No day/deck numbers | Clean. |
| 18 | Instructor notes completeness | `instructor_prep.md` generated with all standard sections. |

## Code-Along Scorecard

| Bucket | Score | Justification |
|---|---|---|
| Scenario & Framing Quality | 5/5 | Concrete continuation; every cell notes explain *why*, not just narrate output. |
| Instructor Note Depth & Analogies | 5/5 | Every code cell has real pedagogical notes (e.g. "don't explain why yet — let the number surprise the room"). |
| Scaffolding Fade | 5/5 (was 3/5) | Fixed — the `\c` reconnect TODO (a verbatim, un-faded repeat of Day 3's own wording) compressed to "reconnect (you know this one by now)"; `LEFT JOIN`'s 2nd-occurrence fade and the brand-new `GROUP BY`/`HAVING` mechanics staying fully explicit were both already correct. |

## Accessibility (4 buckets)

| Bucket | Score | Justification |
|---|---|---|
| Text Alternatives | 5/5 | No images in this deck — N/A cleanly. |
| Reading Order & Labels | 5/5 | Fully linear, coherent sequence; every title/prompt specific. |
| Color Independence & Contrast | 5/5 | No color-only cues; `icon_hero` always pairs color with a distinct icon. |
| Cognitive Load & Motion | 5/5 | All bullet/card counts ≤3; no motion notes. |

## Instructional Quality (16 scored buckets)

*Scores reflect the deck after applying every finding.*

| Bucket | Score | Justification |
|---|---|---|
| 1. Learning Objectives | 5/5 | Both objectives fully taught and practiced. |
| 2. Misconceptions | 5/5 | The named WHERE/HAVING misconception is directly confronted with a real, deliberate error. |
| 3. Logical Flow & Transitions | 4/5 | Strong sequencing throughout. |
| 4. Prior-Knowledge Ties | 5/5 | Real retrieval warm-up recalls Day 3's exact numbers. |
| 5. Demo Sets Up Exercise | 5/5 | Clear "no exercise today" framing. |
| 6. Engagement & Gamification | 4/5 | Good type variety; on-brand voice. |
| 7. Summary Quality | 5/5 | Bridge summarizes and connects forward. |
| 8. Interview-Prep Coverage | 5/5 (was 4/5) | Fixed alongside #10 — a second CFU now carries real interview framing (`QAR`), distinct from the `interview_prep` slide's own `Teach-Back`. |
| 9. Backwards-Design Linkage | 5/5 (was 4/5) | Fixed — `closing` now also names the project tie; all three touchpoints (objectives/bridge/closing) covered. |
| 10. Question Quality & Bloom's | 5/5 (was 4/5) | Fixed — "Is HAVING Always Required?" converted to `question_style: interview` (`QAR` technique); the "aggregate function" glossary gap fixed with a visible defining bullet at first substantive use, not just a card label. |
| 11. Analogies | 5/5 (was 4/5) | Fixed — the module's own named misconception (WHERE/HAVING ordering) now gets a backup analogy (sports/all-star-team domain) matching the deep-treatment budget the overcounting concept already had. |
| 12. Title Framing | 5/5 | Every non-exempt title states a real takeaway. |
| 13. Diagram & Table Fit | 5/5 (was 3/5) | Fixed — the WHERE→GROUP BY→HAVING execution order, `diagram_selection.md`'s own named strongest use case, is now a real `workflow_linear` diagram instead of three bullets. |
| 15. Scaffolding & Project Alignment | 5/5 | Confirmed: the opening `COUNT(*)` overcounting trap genuinely and explicitly resolves `PROJECT.md`'s "duplicate rows from an unfiltered many-to-many join" common mistake, not a tangential demo. |
| 16. Cross-Lecture Continuity | 5/5 | Excellent — numerically consistent pickup from Day 3. |
| 17. Whitespace & Multimedia | 4/5 | Well-segmented; no redundancy found. |
| 18. Factual Accuracy & Claim Scope | 5/5 (was 4/5) | Fixed — a `[SOURCES]` tag added to the execution-order claim, citing PostgreSQL's own documented query order. |

## Overall grade

Accessibility average: **5.0/5**. Instructional average (16 scored buckets): **4.9/5**. Code-along average: **5.0/5**. Combined: **A**.

## Strengths

- The opening "COUNT(*) returns 7, not 5" trap is independently verified as real on real data, and genuinely, explicitly resolves the project's own named "duplicate rows from an unfiltered join" grading risk — not a tangential demo bolted on after the fact.
- `WHERE`'s failure is a real, deliberately-triggered PostgreSQL error (`GroupingError`), not a simulated or described one — students watch the exact rule get enforced.
- Every one of 9 real findings across 3 independent QA passes was fixed with genuine content changes: a new diagram, a visible glossary definition, a backup analogy, a `[SOURCES]` tag, a de-duplicated scaffold, and two real interview-style conversions.
- Exceptional, numerically-verified continuity with Day 2 and Day 3 (restaurant/inspection counts match exactly across all three decks).

## Weaknesses

- This module's spacing gaps (`terminal-command-line`, `data-modeling`, `database-administration`) remain open — expected at 4-of-12 lectures, not a defect.
- Timing estimate sits right at the 60-minute edge — worth a light trim if a future pass needs headroom, though within this codebase's own "coarse estimate" tolerance.
