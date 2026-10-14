# QA Report — Relational Thinking & Normalization (Module 3, Day 1)

## 18-Point Scorecard

| # | Check | Result |
|---|---|---|
| 1 | Missing text / diagram exception | Clean — `qa.contrast_check` on the rendered `.pptx` found no empty text shapes. |
| 2 | Wordy/wrapping slides | Clean after fixes — 2 real overflow findings (case study bullets, compare_contrast bullets) caught by the build-time heuristic and fixed; visual render review of all 33 rendered slides found one more real bug (further_resources row 3's meta line wrapped to 2 lines, pushing its description to the slide's bottom edge) — fixed by shortening the attribution. |
| 3 | Code slides have code + tested | N/A — zero `code` slides (genuinely concept-only day, no SQL yet). |
| 4 | Recall builds on prior skills | Fixed — instructional QA flagged that `dependent_skills` (terminal-command-line fluency) had no real active-recall moment, only a passive notes line. Added a real discussion-mode `check_understanding` early in the deck. |
| 5 | Spaced learning | Not yet assessable — this is lesson 1 of 12 in the module; run `qa.skill_coverage_check` once more lectures exist. |
| 6 | Engagement strategies used | `poll`, `game` (×3), `discussion` (×2) span Retrieval, Critical Thinking, Debug, and Business Thinking question styles, plus one `question_style: interview` conversion. |
| 7 | WCAG accessibility | 4 buckets, avg 4.75/5 — see below. |
| 8 | Notes on all slides except transitions | Clean — no missing-notes findings. |
| 9 | No cutoff text | Clean — see #2. |
| 10 | Text fits its box | Clean — `check_no_offslide_shapes` found zero hits after fixes. |
| 11 | Icons used properly | Clean — confirmed via real LibreOffice render review of all 33 slides; every icon renders as a recognizable glyph, and the same icon (`schema`, `database`, `join`, `menu_book`) is reused consistently for the same concept everywhere it recurs, including in the new `workflow_linear` capstone diagram. |
| 12 | Case study source + clickable link | Real, verified, hyperlinked — Public Health England's 2020 Excel row-limit incident (~15,841 COVID cases dropped), sourced to The Register, confirmed live via direct fetch during authoring. |
| 13 | Whitespace / Mayer's principles | Bucket 17: 4/5 — clean segmenting; the case study's real photo-realistic image prompt is the deck's one concrete-visual multimedia opportunity, used correctly. |
| 14 | AI-sounding language | Clean — an initial 3-4-em-dash-per-field density flagged in 2 fields, fixed by breaking into separate sentences. |
| 15 | Dead resource links | 0 confirmed dead. All 4 external URLs report `UNCERTAIN` from `qa.link_check` due to a local SSL cert-verification gap in this environment (not the sites) — all 4 were independently confirmed live via direct fetch during authoring/research (The Register, freeCodeCamp, SQLZoo, SQL Murder Mystery). |
| 16 | Logical flow / dependency ordering | Bucket 3: 4/5 (strong build, real connecting insight in every transition, now with real style variety — `icon_hero` and `panel_preview` added alongside `bold`). Bucket 4: see #4. Bucket 16: N/A, no prior lecture in this module yet. |
| 17 | No day/deck numbers | Clean — `_check_no_day_or_deck_references` found zero hits. |
| 18 | Instructor notes completeness | `instructor_prep.md` generated with all standard sections (objectives, timing, misconceptions, engagement strategies, project connection). |

## Accessibility (4 buckets)

| Bucket | Score | Justification |
|---|---|---|
| Text Alternatives | 4/5 | The deck's one image has real, non-empty alt text; docked only for being generic rather than incident-specific. |
| Reading Order & Labels | 5/5 | Fully coherent linear sequence; every title/topic specific and self-explanatory. |
| Color Independence & Contrast | 5/5 | No color-only meaning anywhere; no new unverified color pairs. |
| Cognitive Load & Motion | 5/5 | Bullet/card counts well under caps; zero motion notes. |

## Instructional Quality (18 buckets)

*Scores below reflect the deck after applying every finding from the QA pass — bucket 4, 11, and 13 (diagram fit) were the ones materially changed by fixes; others are carried from the subagent's original read where the underlying content didn't change.*

| Bucket | Score | Justification |
|---|---|---|
| 1. Learning Objectives | 5/5 | Both objectives get an explicit slide and full coverage. |
| 2. Misconceptions | 5/5 | `[MISCONCEPTIONS]` tags well-sequenced; jargon always precedes first quiz use. |
| 3. Logical Flow & Transitions | 4/5 | Strong build; transition-style variety now added (`icon_hero`, `panel_preview`). |
| 4. Prior-Knowledge Ties | 5/5 (was 2/5) | Fixed — a real, active discussion-mode recall check for terminal-command-line fluency now opens the deck, matching the module plan's explicit requirement. |
| 5. Demo Sets Up Exercise | 5/5 | `uses_same_scenario_as_lecture: false`; closing clearly explains no exercise today. |
| 6. Engagement & Gamification | 4/5 | Game/poll/discussion span multiple question styles; on-brand voice. |
| 7. Summary Quality | 5/5 | Bridge summarizes and ties forward to graded project deliverables by name. |
| 8. Interview-Prep Coverage | 5/5 | Topic matches taught content; PREP technique correctly matched. |
| 9. Backwards-Design Linkage | 5/5 | Objectives slide and bridge both name the project tie explicitly. |
| 10. Question Quality & Bloom's | 5/5 (was 4/5) | Fixed — one CFU converted to `question_style: interview` with a matched `Teach-Back` technique; strong analyze/evaluate distribution otherwise. |
| 11. Analogies | 5/5 (was 2/5) | Fixed — reallocated from PK/FK (the more intuitive concepts) to partial and transitive dependency (the deck's own flagged hardest concepts), each in a fresh, distinct domain (food & delivery, social media). |
| 12. Title Framing | 5/5 (was 4/5) | Fixed — compare_contrast retitled from a topic label to a stated takeaway ("Structure, Not Luck, Prevents Breakage"). |
| 13. Diagram & Table Fit | 5/5 (was 3/5) | Fixed — added a `workflow_linear` capstone diagram for the 1NF→2NF→3NF pipeline, a near-textbook fit per `diagram_selection.md`; table/compare_contrast choices elsewhere were already correct. |
| 14. Multi-tool Coverage | N/A | `meta.tools` has only one entry. |
| 15. Scaffolding & Project Alignment | 4/5 | Content genuinely matches "modeled" scaffolding; full module-wide rubric coverage isn't assessable until more lectures exist. |
| 16. Cross-Lecture Continuity | N/A | No prior lecture exists in this module yet (lesson 1). |
| 17. Whitespace & Multimedia | 4/5 | Clean segmenting; the one real concrete-visual opportunity (case study image) is used correctly. |
| 18. Factual Accuracy & Claim Scope | 5/5 | Normal-form definitions accurately scoped; case study real, sourced, and correctly caveated as not an "Excel is bad" story. |

## Overall grade

Accessibility average: **4.75/5**. Instructional average (excluding N/A buckets): **4.75/5**. Combined: **A**.

## Strengths

- A genuinely accurate, verified real-world case study (PHE's 2020 Excel row-limit incident) that motivates the whole lesson and pays off explicitly in the final CFU.
- The 1NF→2NF→3NF walkthrough is a real, hand-checkable worked example (not abstract) — every number is internally consistent and traceable.
- Strong backwards-design linkage: the project's own `schema_critique.md`/`business_questions_and_schema.md` are named explicitly, more than once.
- Every finding from both QA subagents was addressed with real content changes, not surface patches (new CFU, reallocated analogies, a real diagram, restyled transitions).

## Weaknesses

- This module's spaced-practice/skill-coverage picture can't be assessed until more lectures are built (expected at this stage, not a defect).
- Bucket 15 (scaffolding/project alignment) will only reach 5/5 once the module's full lecture/lab sequence exists to check against.

## Code validation

N/A — zero `code` slides.

## Visual render review

Required (icon-bearing slides present) and completed — all 33 rendered slides (LibreOffice → PDF → PyMuPDF) inspected directly. One real bug found and fixed (further_resources row-wrap, see #2 above); everything else — icon legibility, icon-to-concept consistency, card/table sizing, transition styles — confirmed clean.
