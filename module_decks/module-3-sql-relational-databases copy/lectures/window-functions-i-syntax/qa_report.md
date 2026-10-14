# QA Report — Window Functions I: Syntax (Module 3, Day 7)

## 18-Point Scorecard

| # | Check | Result |
|---|---|---|
| 1 | Missing text / diagram exception | Clean — `qa.contrast_check` on the rendered `.pptx` found no empty `TEXT_BOX` shapes. |
| 2 | Wordy/wrapping slides | Clean — one heuristic overflow warning on the compare_contrast slide's "similarities" bullets (estimated stacked height 1.14in vs. a 1.00in box) turned out to be a false positive on real render: confirmed via LibreOffice/PyMuPDF, plenty of margin below the bullets, no cutoff. |
| 3 | Code slides have code + tested | **Both code slides validated for real**, replaying Days 2-6's own cumulative setup first (22 statements, skipping each day's own `expected_error` slide). Confirmed the two central claims are genuinely real on real data: Corner Bistro `tv=3` (rank 1), Green Leaf Cafe `tv=1` (rank 2), and a real 3-way tie (Sunset Diner/Harbor Grill/New Spot NYC, all `tv=0`) all get `rnk=3` under RANK() but distinct `rn=3,4,5` under ROW_NUMBER(). A synthetic (non-destructive) 6th row confirmed RANK()'s "skip ahead by the tie size" rule for real: `rnk=6`, matching the deck's own CFU answer. Full detail in `code_validation_report.md`. |
| 4 | Recall builds on prior skills | Clean — real recall CFU (`ORDER BY` doesn't change row count) sets up the actual gap window functions fill. |
| 5 | Spaced learning | `qa.skill_coverage_check` (7/12 lectures) — no new spacing gaps introduced this day. |
| 6 | Engagement strategies used | Poll (×3), Game/Quick-Fire, Would You Rather, Turn and Talk/Discussion — spans Retrieval, Predict/Verify, Gamified, Business Thinking, and real Interview framing. |
| 7 | WCAG accessibility | 4 buckets, 5/5/5/5 — see below. WCAG 2.2 confirmed current. |
| 8 | Notes on all slides except transitions | Clean. |
| 9 | No cutoff text | Clean — see #2. |
| 10 | Text fits its box | Clean. |
| 11 | Icons used properly | Fixed — the opening "Key Terms" card used `award` for `ROW_NUMBER()`, while the compare_contrast slide later used `list` for the same term; unified to `list` at first appearance for consistency. |
| 12 | Case study source + clickable link | N/A — no case study this deck. |
| 13 | Whitespace / Mayer's principles | Bucket 17: 4/5 — well-segmented; render review found no crowding. |
| 14 | AI-sounding language | Clean. |
| 15 | Dead resource links | 0 confirmed dead. All 3 URLs report `UNCERTAIN` from the same known local SSL cert-verification gap (not the sites) — all independently plausible/well-regarded sources (PostgreSQL official docs, DataLemur, ThoughtSpot's live editor). |
| 16 | Logical flow / dependency ordering | Bucket 3: 4/5. Bucket 4: 5/5. Bucket 16: 4/5 (was 3/5, see findings) — fixed a real continuity mismatch between the narrated "same totals as yesterday" framing and the actual (legitimately simplified) code. |
| 17 | No day/deck numbers | Clean. |
| 18 | Instructor notes completeness | `instructor_prep.md` generated with all 8 standard sections. Timing: ~52 min total (~8 min code-along) — within the 50-60 min target. |

## Code-Along Scorecard

| Bucket | Score | Justification |
|---|---|---|
| Scenario & Framing Quality | 5/5 | Concrete callback to yesterday's real work, correct second-person voice, nothing to spoil (no new exercise today). |
| Instructor Note Depth & Analogies | 5/5 | Both code cells explain the *why* (the exact RANK() tie-then-gap rule, named misconceptions) not just syntax; no analogy fields needed on code slides. |
| Scaffolding Fade | 5/5 (was 3/5) | Fixed — the "Sorted, But Not Numbered" `starter_code` fully re-spelled a pattern its own `domain_note` called a repeat of yesterday's, at `sql`'s 6th module occurrence, and its last line gave away the complete final `SELECT` while the lines above it were genuine blanks (inconsistent scaffolding within one cell). Compressed to a single two-line TODO matching the module's own established fade; the second cell's already-correct fade ("same totals CTE as the last slide") was left untouched. |

## Accessibility (4 buckets)

| Bucket | Score | Justification |
|---|---|---|
| Text Alternatives | 5/5 | No images in this deck; nothing to flag. |
| Reading Order & Labels | 5/5 | Sequence reads logically linearized; every heading/prompt specific and descriptive. |
| Color Independence & Contrast | 5/5 | Answers always conveyed via notes/explanation, never color alone; no unverified color pairs. |
| Cognitive Load & Motion | 5/5 | Every bullet/card list under the density cap; no diagrams; no motion notes. |

## Instructional Quality (17 scored buckets, 1 N/A)

*Scores reflect the deck after applying every finding.*

| Bucket | Score | Justification |
|---|---|---|
| 1. Learning Objectives | 5/5 | Both objectives explicitly taught and practiced; no scope creep (PARTITION BY correctly deferred to Day 8). |
| 2. Misconceptions | 4/5 | Deck self-identifies and addresses 3 real misconceptions via `[MISCONCEPTIONS]` tags. |
| 3. Logical Flow & Transitions | 4/5 | Clean structure and real connecting transitions; the continuity-mismatch finding is fixed (see bucket 16). |
| 4. Prior-Knowledge Ties | 5/5 | Explicit callbacks to yesterday's chained CTEs and earlier ORDER BY/GROUP BY, verified against `curriculum_log.yaml`. |
| 5. Demo Sets Up Exercise | 5/5 | Clear, consistent "no new exercise today" framing across notes/closing/bridge. |
| 6. Engagement & Gamification | 5/5 | Real type variety (poll/game/would-you-rather/discussion); no liberatory framing forced onto a pure-syntax lesson (correct restraint). |
| 7. Summary Quality | 5/5 | Bridge summarizes and connects forward; closing has no hardcoded volatile logistics. |
| 8. Interview-Prep Coverage | 4/5 (was 3/5) | Fixed — `meta.interview_topics` was describing the Teach-Back CFU's topic instead of the actual `interview_prep` slide's own topic (tie-breaking ambiguity in "top N" requests); realigned. Technique reuse (Teach-Back, QAR — each their 3rd module appearance by Lesson 7) considered and deliberately **not** force-swapped: both remain the genuinely best-fit framework for their respective question shapes per `pedagogy/interview_frameworks.md`'s own routing table — left as an observed, tracked pattern rather than a mechanical fix (see Weaknesses). |
| 9. Backwards-Design Linkage | 5/5 | Explicit project ties on the objectives slide, a dedicated "Why This Matters" slide, and the bridge. |
| 10. Question Quality & Bloom's | 5/5 (was 4/5) | Fixed — "The Gap RANK() Leaves After a Tie" was mistagged `question_style: fill_in_blank` with no actual blank in the prompt (a straight prediction question, same shape as its sibling slide); retagged `conceptual`. Also fixed: the `OVER` clause appeared in live code several slides before any sentence defined it; added a one-line explanation at first appearance. |
| 11. Analogies | 5/5 | One deep-treatment analogy (sports, with gaming/fashion backups) correctly targeted at the lesson's core "rows don't collapse" concept. |
| 12. Title Framing | 4/5 | Most titles are real headlines; "Same Query, Now With RANK() and ROW_NUMBER()" leans slightly descriptive-label over stated-takeaway (minor, not fixed — an accurate, clear title for a direct "add this to what you just saw" code slide). |
| 13. Diagram & Table Fit | 5/5 (was 4/5) | Fixed — the icon-consistency wrinkle for `ROW_NUMBER()` (see 18-point #11); correctly skips a diagram in favor of live code output for exact tie behavior, which is the stronger fit here. |
| 14. Multi-tool Coverage | N/A | `meta.tools` lists a single tool. |
| 15. Scaffolding & Project Alignment | 5/5 | Content matches the module plan's Day 7 "guided" slot (heavy code-along + predict-then-confirm); confirmed the guided-after-collaborative scaffolding "regression" is the calendar's own deliberate reset for a new subtopic, not drift. |
| 16. Cross-Lecture Continuity | 5/5 (was 3/5) | Fixed — the code genuinely simplified yesterday's 2-CTE chain into one CTE (a legitimate scope choice, since chaining isn't today's topic), but both `meta.scenario` and the code slide's `domain_note` implied the literal query reappeared; both now explicitly name the simplification. |
| 17. Whitespace & Multimedia | 4/5 | Well-segmented; render review confirmed no crowding, including on the slide flagged by the heuristic overflow check. |
| 18. Factual Accuracy & Claim Scope | 5/5 | RANK()/ROW_NUMBER() semantics stated correctly and carefully scoped; every non-obvious claim independently confirmed via real Docker query output, including a dedicated synthetic-row check for the "skip to 6" rule. |

## Overall grade

Accessibility average: **5.0/5**. Instructional average (17 scored buckets, 1 N/A): **4.7/5**. Code-along average: **5.0/5**. Combined: **A**.

## Strengths

- The RANK()-skip-to-6 rule — arguably this lesson's single trickiest claim — was verified with a dedicated, non-destructive synthetic-row query, confirming the deck's stated answer is real Postgres behavior, not a rule-of-thumb.
- A genuine narrative-accuracy bug was caught and fixed: the deck's own framing claimed yesterday's query reappeared unchanged, when it had actually (legitimately) been simplified — both `meta.scenario` and the code slide's own `domain_note` now tell the truth about what changed and why.
- The compaction lessons from Day 6's tight code-slide budget were already applied correctly before any QA pass ran — both code slides fit comfortably within the ~11-line budget using `USING` joins and short, real aliases, with room to spare confirmed by a real render.
- Every one of 8 real findings across 3 independent QA passes was fixed with genuine content changes: a scaffolding-fade correction, a mistagged question style, a missing term definition, a continuity-accuracy fix, an icon-consistency pass, and a metadata-drift correction — not surface patches.

## Weaknesses

- `Teach-Back` and `QAR` are now each on their 3rd module appearance by Lesson 7 — genuinely the best-fit technique for their respective question shapes, so deliberately not force-swapped, but worth a real alternate-technique push once a naturally-fitting topic comes up in Days 8+.
- This module's spacing gaps (`terminal-command-line`, `database-administration`) remain open — expected at 7-of-12 lectures, not a defect.
