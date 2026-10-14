# QA Report — Joins: INNER vs. LEFT (Module 3, Day 3)

## 18-Point Scorecard

| # | Check | Result |
|---|---|---|
| 1 | Missing text / diagram exception | Clean. |
| 2 | Wordy/wrapping slides | Clean. |
| 3 | Code slides have code + tested | **All 5 code slides validated for real** against a live PostgreSQL 16 instance — first replayed Day 2's own setup to recreate the exact state a real student database would be in, then confirmed INNER JOIN returns 3 rows and LEFT JOIN returns 6, exactly as the deck's own CFUs claim. Full detail in `code_validation_report.md`. |
| 4 | Recall builds on prior skills | Clean — real recall CFU on Day 2's own FK; Day 3's own first code slide literally resumes Day 2's unfinished INSERT. |
| 5 | Spaced learning | `qa.skill_coverage_check` (3/12 lectures): 3 spacing gaps (`terminal-command-line`, `data-modeling` — Day 1 only; `database-administration` — Day 2 only) — expected at this build stage. |
| 6 | Engagement strategies used | `discussion`, `poll` (×2), `would_you_rather` — spans Retrieval, Predict/Verify, and Evaluate types. |
| 7 | WCAG accessibility | 4 buckets, 5/5/5/5 — see below. |
| 8 | Notes on all slides except transitions | Clean. |
| 9 | No cutoff text | Clean. |
| 10 | Text fits its box | Clean. |
| 11 | Icons used properly | Clean — confirmed via real render review; `join`/`row` icons reused consistently for the same concepts across cards, compare_contrast, and transitions. |
| 12 | Case study source + clickable link | N/A — no case study this deck. |
| 13 | Whitespace / Mayer's principles | Bucket 17 not separately re-scored this pass (reading list gap in the instructional subagent's run); render review found no overflow/crowding. |
| 14 | AI-sounding language | Clean. |
| 15 | Dead resource links | 0 confirmed dead. All 3 URLs report `UNCERTAIN` from a local SSL cert-verification gap (not the sites) — all 3 independently confirmed live via direct fetch during authoring (PostgreSQL official tutorial, W3Schools, SQLBolt). |
| 16 | Logical flow / dependency ordering | Bucket 3: 4/5 (fixed a mislabeled transition, see below). Bucket 4: 5/5. Bucket 16 (cross-lecture continuity): 5/5 — "outstanding," reopens Day 2's exact unfinished INSERT and delivers on Day 2's own bridge promise. |
| 17 | No day/deck numbers | Fixed — "Day 1" references rephrased relatively (2 instances). |
| 18 | Instructor notes completeness | `instructor_prep.md` generated with all standard sections. |

## Code-Along Scorecard

| Bucket | Score | Justification |
|---|---|---|
| Scenario & Framing Quality | 5/5 | Concrete continuation of Day 2's own database; foreshadows every cell; no exercise spoilage. |
| Instructor Note Depth & Analogies | 5/5 (was 4/5) | Fixed — deepened the two cells (`\c` reconnect, LEFT JOIN reveal) the subagent flagged as narration-only; both generator fixes from Day 2 (fence-word, analogy backups) confirmed holding with no regression. |
| Scaffolding Fade | 4/5 | Appropriate for `sql`'s 2nd real occurrence — one cell shows genuine fade from Day 2's spelled-out wording; JOIN syntax itself stays fully explicit, which is correct since it's brand new this lesson. |

## Accessibility (4 buckets)

| Bucket | Score | Justification |
|---|---|---|
| Text Alternatives | 5/5 | No images in this deck — N/A cleanly. |
| Reading Order & Labels | 5/5 | Fully coherent linear sequence; every title/prompt specific. |
| Color Independence & Contrast | 5/5 | Both poll answers live in `answer`/notes, never color; no new color pairs. |
| Cognitive Load & Motion | 5/5 | All bullet/card counts ≤3; no motion notes. |

## Instructional Quality (16 scored buckets; 14/17 skipped — N/A / not in this pass's reading list)

*Scores reflect the deck after applying every finding.*

| Bucket | Score | Justification |
|---|---|---|
| 1. Learning Objectives | 5/5 | Both objectives get dedicated coverage, ending in a real compare/contrast payoff. |
| 2. Misconceptions | 5/5 (was 4/5) | Fixed — added the module's own named `= NULL` vs. `IS NULL` misconception directly on the anti-join slide, the first lesson where it's genuinely relevant. |
| 3. Logical Flow & Transitions | 4/5 (was docked for a mislabel) | Fixed — a transition claiming "Code Along: LEFT JOIN" actually led into a concept slide, not code; relabeled to "Now, LEFT JOIN." |
| 4. Prior-Knowledge Ties | 5/5 | Real recall CFU plus a genuine callback (finishing Day 2's failed INSERT). |
| 5. Demo Sets Up Exercise | 5/5 | Clear, consistent "no exercise today" framing. |
| 6. Engagement & Gamification | 5/5 | Retrieval, business-thinking/evaluate, and career-relevance all present; on-brand voice. |
| 7. Summary Quality | 5/5 | Bridge summarizes and connects forward; no hardcoded logistics. |
| 8. Interview-Prep Coverage | 5/5 | QAR technique correctly matched to a genuinely underspecified question. |
| 9. Backwards-Design Linkage | 4/5 | Objectives and bridge both name the project tie; closing doesn't (minor, consistent with Day 2's own pre-fix state). |
| 10. Question Quality & Bloom's | 5/5 (was 4/5) | Fixed — the `would_you_rather` CFU converted to `question_style: interview` with a matched `PREP` technique, closing the "zero interview-style CFU" gap. |
| 11. Analogies | 5/5 (was 4/5) | Fixed — added a backup analogy (sports/team-roster domain) for LEFT JOIN, the module's own explicitly flagged hardest misconception, now getting the full deep-treatment budget it earns. |
| 12. Title Framing | 5/5 | Nearly every teaching slide states a real takeaway. |
| 13. Diagram & Table Fit | 4/5 | Table and compare_contrast well-chosen; the JOIN key-matching mechanism itself has no clean native diagram type in this template (an accepted limitation, not an authoring miss — same precedent as Day 1's ERD-as-cards choice). |
| 15. Scaffolding & Project Alignment | 4/5 | Matches "guided" scaffolding; one open item (confirming Day 4 covers the project's own duplicate-rows-from-unfiltered-joins mistake) carried forward as a note for that build, not a Day 3 defect. |
| 16. Cross-Lecture Continuity | 5/5 | "Outstanding" — reopens Day 2's exact unfinished work. |
| 18. Factual Accuracy & Claim Scope | 5/5 | All JOIN/anti-join/NULL claims correctly scoped and verified for real. |

## Overall grade

Accessibility average: **5.0/5**. Instructional average (16 scored buckets): **4.75/5**. Code-along average: **4.7/5**. Combined: **A**.

## Strengths

- The lesson's central claim (INNER vs. LEFT JOIN genuinely differ) is independently verified on real data continuing from a real prior session's state, not just asserted.
- Exceptional cross-lecture continuity: literally finishes Day 2's failed INSERT and fulfills Day 2's own bridge promise.
- Every one of 7 real QA findings from 3 independent passes was fixed with real content changes (a new misconception callout, a backup analogy, a relabeled transition, a converted interview CFU), not surface patches.
- The anti-join pattern is taught as a genuinely useful real-world query, not just an abstract teaching device.

## Weaknesses

- `closing` still doesn't carry an explicit project-tie line (objectives/bridge do) — a minor, low-stakes gap.
- Whether Day 4 actually covers the project's own "duplicate rows from an unfiltered many-to-many join" common mistake needs verifying when that deck is built — `PROJECT.md` attributes it to "Days 3-4" jointly, and Day 3 doesn't cover it.

## Note carried forward to Day 4

`PROJECT.md`'s `common_project_mistakes` attributes "a join that silently produces duplicate rows because of an unfiltered many-to-many relationship" to Days 3-4 jointly. Day 3 covers dropped rows (INNER) and NULL-padded rows (LEFT) — neither is the duplicate-row failure mode. **Day 4 (GROUP BY + HAVING) should verify it genuinely addresses this**, since GROUP BY is a natural place a duplicate-row problem either gets caught or gets silently compounded.
