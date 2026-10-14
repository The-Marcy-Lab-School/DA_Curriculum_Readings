# QA Report — Cumulative Recall: Joins, CTEs, Window Functions, Materialized Views (Module 3, Day 12 — FINAL LECTURE)

This is the module's last lecture deck, immediately before the 7-day
project sprint. It received an unusually deep QA pass: the original build
crashed mid-task on a session limit, was recovered and independently
validated, then both QA subagents (code-along, instructional) returned
exceptionally thorough reviews (10 and 11 findings respectively). After
applying all 21 findings, **both passes were re-run a second time** against
the fixed deck to verify the fixes actually held — which caught 2 fixes
that were only half-applied, plus a hard SCHEMA.md requirement that had
been accidentally violated during a timing trim. All of that is fixed below.

## 18-Point Scorecard

| # | Check | Result |
|---|---|---|
| 1 | Missing text / diagram exception | Clean. |
| 2 | Wordy/wrapping slides | Clean — confirmed via real render, including the restored Key Terms slide and the reformatted COALESCE code slide. |
| 3 | Code slides have code + tested | **All 5 code slides validated for real**, twice — once against the original build, once again after QA fixes changed 2 slides' actual SQL (the materialized-view `INSERT` gained an explicit column list; the `COALESCE` query was reformatted). Also independently verified a claim added during QA itself (a `LEFT JOIN` variant swells a rank-3 tie from 2 rows to 7, not 5 as first drafted — caught and corrected before shipping) and fact-checked a new check_understanding's SQL claim not tied to any code slide. Full detail in `code_validation_report.md`. |
| 4 | Recall builds on prior skills | Clean — this is the module's cumulative recall day by design; every code slide draws on a previously-taught tool. |
| 5 | Spaced learning | `qa.skill_coverage_check`: zero coverage gaps. Two minor spacing gaps remain (`correlated subquery`, `critical-thinking`, each single-occurrence) — genuine, real depth at their one appearance; not force-padded into this already-substantial final deck. |
| 6 | Engagement strategies used | Poll (×2), Game (×2), Whiteboard, Discussion — spans Retrieval, Debug/Analytical, Collaborative-Create, and real Interview framing (a first for this module: `evaluate`-level + `question_style: interview` together). |
| 7 | WCAG accessibility | 4 buckets — see below; fixed 3 real findings from a real-rendered-PDF review. |
| 8 | Notes on all slides except transitions | Clean. |
| 9 | No cutoff text | Clean. |
| 10 | Text fits its box | Clean. |
| 11 | Icons used properly | **Fixed** — `workflow_linear`'s 4 steps had `icon` fields that silently suppressed their numbered badges (a real, previously-undiscovered bug in how that slide type is used, caught by an accessibility subagent that converted to PDF and looked at the real render, not just the YAML); icons removed so 1/2/3/4 render as intended. |
| 12 | Case study source + clickable link | N/A. |
| 13 | Whitespace / Mayer's principles | Bucket 17: 4/5 — see below. |
| 14 | AI-sounding language | Clean. |
| 15 | Dead resource links | 0 confirmed dead. All 9 URLs `UNCERTAIN` from the same known local SSL gap. |
| 16 | Logical flow / dependency ordering | **Fixed a real structural bug**: the deck has 3 objectives but originally 4 narrative beats, with objective-3 content (verification) split across two non-adjacent sections. Relocated the "check that catches it" code-along to sit after all 3 "clean-but-wrong" demos, consolidating verification at the end where objective 3 actually lives. Independently re-verified as coherent by a second subagent pass. |
| 17 | No day/deck numbers | Clean. |
| 18 | Instructor notes completeness | `instructor_prep.md` generated with all standard sections. Timing: ~60.5 min from slide content, marginally outside the 50-60 min target — **a deliberate, documented exception**: `content_spec/SCHEMA.md` *requires* a dedicated early "Key Terms" slide whenever `meta.glossary` is set (this deck has 3 terms); an earlier fix that deleted this slide to save ~2.5 min was flagged by re-review as a real SCHEMA violation and reverted. The hard content requirement correctly outranks the timing heuristic, which is explicitly "deliberately coarse... to catch a lesson grossly over/under" (its own code comment) — 0.5 min over is not that. |

## Code-Along Scorecard

| Bucket | Score | Justification |
|---|---|---|
| Scenario & Framing Quality | 5/5 | Concrete "every query ran clean, not every one was correct" throughline maps directly onto all 5 code cells; no exercise spoiler. |
| Instructor Note Depth & Analogies | 5/5 (was 4/5 on re-check) | Fixed on re-verification — the deck's central "find the bug" beat still spoke the fan-out mechanism aloud in the code slide's own notes (MISCONCEPTIONS/SCRIPT/SOURCES blocks) despite an explicit "do not name the cause yet" instruction sitting right above them; the instruction was true in intent but not honored in practice. Moved all mechanism-revealing content into the following check_understanding's own notes (read only after the reveal), leaving the code slide with only a genuine hint (the cookout analogy) before the CFU. Two more re-check findings also fixed: a stale "the previous code-along joined all three correctly" misconception reference (now accurate after the slide reorder), and a domain_note that both hardcoded slide positions ("slides 2 and 3") and was factually imprecise about which demo is actually affected by the one write statement in the deck — corrected to name the fan-out demo specifically, no position numbers. |
| Scaffolding Fade | 5/5 | The materialized-view slide's 2nd-occurrence fade (vs. Day 9's 1st) is dramatic and well-evidenced: Day 9 spelled out 4 literal INSERT-value steps, this deck collapses to a 2-line goal statement with no literal values. All other scaffolding-fade findings from the first pass (near-duplicated TODO wording, `blanked_code` contradicting `independent`) confirmed genuinely fixed on re-check. |

## Accessibility (4 buckets)

| Bucket | Score | Justification |
|---|---|---|
| Text Alternatives | 5/5 | No images; all visuals are native shapes. |
| Reading Order & Labels | 5/5 (was 3/5) | Fixed two real findings found via an actual PDF render, not just the YAML: `workflow_linear`'s step numbers were invisible (icons suppressed the numbered badges, contradicting the slide's own "Four Steps" title and step-by-step notes) — fixed by removing the icons. A check_understanding's "(A)"/"(B)" business-ask labels collided with the same slide's auto-lettered A/B/C poll options — renamed to "Ask 1"/"Ask 2" throughout the prompt, options, and notes. |
| Color Independence & Contrast | 5/5 | No color-only meaning anywhere; no unverified pairs. |
| Cognitive Load & Motion | 4/5 (was 4/5) | Fixed the `interview_prep` answer's density (a 470-character unsegmented paragraph containing 5 parallel named checks) by trimming to ~235 characters with explicit per-check segmentation, moving the fuller detail into notes. Two other density findings (a run-on whiteboard prompt, a mid-sentence SQL statement in a CFU prompt) also fixed. Held at 4/5 rather than 5/5 for the same reason as the original pass: this deck is unusually text-forward given its recall/verification subject matter, not a hard violation. |

## Instructional Quality (17 scored buckets, 1 N/A)

*Scores reflect the deck after two full rounds of fixes and independent re-verification.*

| Bucket | Score | Justification |
|---|---|---|
| 1. Learning Objectives | 5/5 | All 3 objectives now map onto correctly-bounded, non-overlapping sections (re-verified independently — see bucket 16). |
| 2. Misconceptions | 4/5 | Strong, specific MISCONCEPTIONS blocks throughout; the fan-out reveal-timing fix (see Logical Flow) was the main deduction and is now resolved. |
| 3. Logical Flow & Transitions | 5/5 (was 3/5 on re-check) | Fixed — the "do not name the cause yet" instruction is now actually honored: mechanism-revealing content was moved out of the code slide's notes into the follow-up CFU's own notes, so the reveal genuinely happens where the deck says it does. |
| 4. Prior-Knowledge Ties | 5/5 | `dependent_skills` verified against real prior lessons; genuine early retrieval-practice CFUs. |
| 5. Demo Sets Up Exercise | 5/5 | Clear, accurate project-scenario framing throughout. |
| 6. Engagement & Gamification | 5/5 | Real mode variety (poll/game/whiteboard/discussion) spanning Retrieval, Analytical, Collaborative-Create, and Interview types. |
| 7. Summary Quality | 5/5 | Bridge and closing both synthesize and connect forward; closing now also names the sprint's other 3 graded skills (schema critique, role setup, `EXPLAIN ANALYZE`, STAR tradeoff), not just the query half this deck covers. |
| 8. Interview-Prep Coverage | 5/5 | C.R.A.F.T. technique genuinely coaches structure; sources tiered honestly. New evaluate/interview CFU ("Two Numbers, One Question," Investigation Framework) closes a real gap the module's own plan flagged. |
| 9. Backwards-Design Linkage | 5/5 | Objectives, bridge, and closing all explicitly tie to project grading, including the newly-honest "this is only half the sprint" framing. |
| 10. Question Quality & Bloom's | 5/5 (was 3/5) | Fixed — the central demo's CFU now argues from a valid premise (per-restaurant counts summing to 5 against a table of 4, not the earlier non-entailing "one restaurant can't have 4" claim); a second CFU escalated from trivial recall (`= NULL` returning obviously-empty) to genuine analysis (`<> 'A'` returning fewer rows than naively expected); a new `evaluate`-level, `question_style: interview` CFU added — first of its kind this module combined with a fresh technique (Investigation Framework, not overused). |
| 11. Analogies | 5/5 | Six well-targeted analogies across six domains, none stacked, all notes-only for backups. |
| 12. Title Framing | 5/5 | Every slide title states a real takeaway. |
| 13. Diagram & Table Fit | 5/5 (was 4/5) | Fixed — `workflow_linear` now correctly follows the cold `create`-level design task instead of preceding and scaffolding it away, per real citation-backed research (Schroeder et al. 2018) on construct-before-study ordering; its own notes now explicitly frame it as consolidating what pairs just built, not new information. |
| 14. Multi-tool Coverage | N/A | Single tool. |
| 15. Scaffolding & Project Alignment | 5/5 | Genuine `independent`-level content (cold design task, no on-slide templates) confirmed to actually match the module plan's Day 12 row. |
| 16. Cross-Lecture Continuity | 5/5 | The 3-objective restructuring was independently re-verified as producing a coherent flow with no orphaned or duplicated `objective_index` tags, and no forward-references or needless re-teaching. |
| 17. Whitespace & Multimedia | 4/5 (was 3/5 on re-check) | Fixed — the reveal-timing fix (bucket 3) also removed a real redundancy the re-check caught: the CFU's `answer.explanation` was re-explaining what the preceding code slide's notes had already fully narrated. |
| 18. Factual Accuracy & Claim Scope | 5/5 | Every non-obvious claim carries a `[SOURCES]` tag with real citations; the one number added during QA itself (the LEFT JOIN tie-count claim) was independently verified via Docker before shipping, catching and fixing a real arithmetic error in the first draft. |

## Overall grade

Accessibility average: **4.75/5**. Instructional average (17 scored, 1 N/A): **4.9/5**. Code-along average: **5.0/5**. Combined: **A**.

## Strengths

- This deck went through genuinely the deepest QA process of the whole module: 2 independent QA passes (21 findings), a full fix cycle, 2 independent re-verification passes that caught 2 incompletely-applied fixes and one real hard-requirement violation, and a second fix cycle — all before being called done. The module's final lecture deck earned the module's most thorough review, appropriately.
- A real, previously-undiscovered bug in `workflow_linear`'s icon-vs-numbered-badge interaction was found via an accessibility subagent that converted the deck to a real PDF and looked at it, not just read the YAML — exactly the "render for real, don't just calculate" discipline this whole codebase is built around.
- The deck's own central pedagogical claim (a query can run clean and still lie, three separate ways) is independently verified as real on real data, including a number added mid-QA-process that was itself caught, disproven, and corrected before shipping — QA-generated content held to the same real-verification bar as original content.
- When a timing fix collided with a hard, documented SCHEMA.md requirement (the Key Terms slide), the requirement was correctly prioritized over the heuristic once caught, rather than the violation being left in place because "it already passed once."

## Weaknesses

- Timing sits marginally over the 50-60 min target (~60.5 min) as a deliberate, documented tradeoff — see 18-point item #18.
- Two spacing gaps remain module-wide (`correlated subquery`, `critical-thinking`, each a single real occurrence) — genuine depth at their one appearance, not padded into an already-substantial final deck.
- This session's own delegated-build pattern hit its most severe test on this exact deck (a build crash plus 21 combined findings) and passed it, but at real cost: this was the most time-intensive single deck of the module to bring to a clean, verified state.
