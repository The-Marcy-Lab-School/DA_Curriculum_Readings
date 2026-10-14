# QA Report — Hypothesis Testing Foundations, Sample Size & Power

**Module 5, Day 1** (first lecture ever built for this module)
**Deck:** `modules/module-5-inferential-statistics/lectures/hypothesis-testing-foundations-sample-size-power/`
**Reviewed:** 2026-09-10

---

## 18-Point Deck Quality Scorecard

| # | Check | Result |
|---|---|---|
| 1 | Missing text / diagram exception | None found. No workflow/concept_map slides in this deck (correctly diagram-free by content). |
| 2 | Wordy/wrapping slides | Two real overflow bugs found via build-time heuristic + confirmed by render: (a) the case_study's `hook_question` originally restated the whole case narrative, colliding with the bullets below it - trimmed to the actual question; (b) the recap table (originally 6 rows) genuinely overflowed the slide bottom in the real rendered `.pptx` regardless of text length (a documented python-pptx row-height-growth risk, not a text-wrap issue) - resolved by dropping an under-taught glossary term ("statistical power," never actually given its own content slide) back to 5 rows. Zero overflow warnings remain. |
| 3 | Code slides have code + tested | N/A - zero `code` slides in this deck (concept-only lecture by design; Day 2, not yet built, runs the live test). |
| 4 | Recall builds on prior skills | Bucket "Prior-Knowledge Ties" flagged this as a real gap (score 2/5) - `dependent_skills` was never explicitly surfaced on-slide. Fixed: added an explicit Module 2 callback in the "Two Possible Explanations" slide's notes. |
| 5 | Spaced learning | Module-level check, not yet run - `check-module-alignment` should be invoked once more of this module's lecture/lab sequence is built. |
| 6 | Engagement strategies used | 5/5. Discussion, game x3, would_you_rather, case_study, and interview_prep span Retrieval/Critical-Thinking/Collaborative/Business-Thinking types. |
| 7 | WCAG accessibility | 5/5/5/4 across the 4 accessibility buckets (see below). Reviewed against WCAG 2.2 AA (confirmed current version via live search). |
| 8 | Notes on all slides except transitions | Clean - no missing-notes findings from spec lint. |
| 9 | No cutoff text | Same as #2 - both real overflow issues found and fixed, confirmed via actual LibreOffice-rendered PNGs of all 29 slides. |
| 10 | Text fits its box | Same as #2/#9. Zero-heuristic offslide-geometry check (`check_no_offslide_shapes`) is clean after the table-row fix. |
| 11 | Icons used properly | One real inconsistency found and fixed: `interview_prep`'s Type I/II topic reused the same `checklist` icon already meaning "judge sample-size adequacy" elsewhere in the deck - changed to `error`. All icon names resolve in the manifest; confirmed distinct via render. |
| 12 | Case study source + clickable link | `is_fictional: false`, real `source_url` (a 2020 Frontiers in Pharmacology review), `caption`, and a `[SOURCES]` notes tag present. Link itself: SSL-cert gap in this local environment makes `qa.link_check` report UNCERTAIN (not DEAD) - independently verified live by the step-3 research subagent. |
| 13 | Whitespace / Mayer's principles | 4/5 (see instructional buckets). One missed opportunity (a visual for the Confidence Intervals concept) noted but not applied - see "judgment calls" below. |
| 14 | AI-sounding language | Clean - no arrow-character, banned-phrase, or em-dash-density findings. |
| 15 | Dead resource links | `qa.link_check`: 4/4 URLs UNCERTAIN (local SSL cert gap only), 0 confirmed dead. All independently verified live during step-3 research. |
| 16 | Logical flow / dependency ordering | Fixed a real gap: one of the deck's two `meta.interview_topics` (Type I/Type II errors) was never actually taught in the lecture itself, only inside the `interview_prep` answer - added a dedicated content slide extending the courtroom analogy to name both error types before they're reused in interview prep. |
| 17 | No day/deck numbers | Fixed 5 findings - "Day 2" references in title/bridge/closing notes and bullets, and a "Day 1" self-reference in `meta.final_project`, all rephrased relatively ("next class," "this lecture"). Clean after fixes. |
| 18 | Instructor notes completeness | `instructor_prep.md` has all expected sections (time estimate ~53 min, prerequisites, objectives, project connection, section flow). |

## Accessibility (4 buckets)

| Bucket | Score | Justification |
|---|---|---|
| Text Alternatives | 5/5 | Both image slides' `image_alt` are specific and convey tone/framing, not generic filler. |
| Reading Order & Labels | 5/5 | Coherent linear sequence; every title/prompt specific and descriptive. |
| Color Independence & Contrast | 5/5 | Correct answers live only in `explanation`/notes; all `icon_hero` colors are pre-verified brand pairs used for their documented purpose. |
| Cognitive Load & Motion | 4/5 → 5/5 (after fixes) | Docked for dense sentence structure in the courtroom/stopwatch analogy callouts and the closing exercise text - all three simplified and re-verified. |

## Instructional Quality (16 scored buckets + 2 N/A)

| Bucket | Score | Justification |
|---|---|---|
| 1. Learning Objectives Addressed | 5 | Both objectives fully covered with dedicated slide runs; explicit objectives slide early; no scope creep. |
| 2. Misconceptions Addressed | 3 → 5 (after fix) | All 4 module-level misconceptions addressed; Type I/II errors were jargon-dropped cold into interview_prep with no earlier teaching moment - fixed with a new content slide. |
| 3. Logical Flow & Transitions | 4 | Clean build order; both transitions carry real connecting insight and correct `objective_index` tags. |
| 4. Prior-Knowledge Ties | 2 → 4 (after fix) | `dependent_skills` was never surfaced on-slide - fixed with an explicit Module 2 callback in the notes. |
| 5. Demo/Code Sets Up the Exercise | 5 | `uses_same_scenario_as_lecture: true`; lecture stops at hypothesis-formulation, leaving the exercise genuinely open. |
| 6. Engagement & Gamification | 5 | 5 distinct engagement types; voice reads energetic and conversational; no overclaiming. |
| 7. Summary Quality | 5 | Bridge resolves the case-study hook and ties forward concretely; closing has no hardcoded logistics. |
| 8. Interview-Prep Coverage | 3 → 5 (after fixes) | Both questions rephrased from flat recall ("What is X?") to Teach-Back-appropriate framing ("How would you explain X to...?"); one existing `check_understanding` retagged `question_style: interview` to give the deck at least one interview-styled check. |
| 9. Backwards-Design Linkage | 5 | Objectives slide, bridge, and closing each make a concrete, specific project tie (sections 2 and 10). |
| 10. Question Quality & Bloom's Levels | 3 → 4 (after fix) | Strong Bloom's distribution (0% recall); docked for zero `question_style: interview` - fixed (see #8). |
| 11. Concrete, Relatable Analogies | 5 | Courtroom (+2 backups) and stopwatch (+2 backups) analogies correctly target the two hardest concepts; 6 distinct domains, zero repeats. |
| 12. Title Framing | 4 → 5 (after fix) | One step-label-style title ("Naming Both Explanations Formally") renamed to a real headline ("Null Hypothesis: Assume Nothing's Different, First"). |
| 13. Diagram & Table Fit | 3 → 4 (after fix) | Correct restraint on diagrams; icon-consistency violation fixed (see 18-point #11). |
| 14. Multi-tool Coverage | N/A | `meta.tools` not set - single-tool (Python-only, conceptually) lesson. |
| 15. Scaffolding & Project Alignment | 5 | `scaffolding_level: guided` matches the module plan's Day 1 row exactly; deck visibly rehearses 3 of the project's 5 named common mistakes. |
| 16. Cross-Lecture Continuity | N/A | This is Module 5's first lecture - no prior deck exists to check against. |
| 17. Whitespace & Multimedia Principles | 4 | Well-segmented, no redundant duplication; one missed multimedia opportunity noted (Confidence Intervals slide) but left as a judgment call, not applied - see below. |
| 18. Factual Accuracy & Claim Scope | 4 → 5 (after fix) | Case study and technical claims well-scoped and sourced; added a missing `[SOURCES]` tag to the Literary Digest historical claim. |

**Overall: strong after fixes** - 2 real content gaps found and closed (Type I/II never taught; dependent_skills never surfaced), plus icon-consistency, title-framing, sourcing, and phrasing fixes across both reviews. No unresolved findings beyond one accepted judgment call (below).

---

## Findings applied this pass

1. **Case-study overflow (real, confirmed via render)** — `hook_question` restated the whole case narrative, overlapping the bullets. Trimmed to the actual question.
2. **Recap-table overflow (real, zero-heuristic geometry check)** — 6 data rows genuinely overflowed the slide bottom regardless of text length. Traced to an orphaned glossary term ("statistical power") that was never actually taught on any content slide — removed it from both glossary and the table, restoring 5 rows and closing a real content/glossary mismatch at the same time.
3. **Type I/Type II errors never taught (real gap)** — one of the deck's two interview topics was pure jargon-drop. Added a new content slide extending the already-built courtroom analogy to name both error types, plus glossary entries.
4. **`dependent_skills` never surfaced on-slide** — added an explicit Module 2 callback in the "Two Possible Explanations" slide's notes.
5. **Icon-consistency violation** — `interview_prep`'s Type I/II topic reused the `checklist` icon (already meaning "sample-size adequacy" elsewhere). Changed to `error`, confirmed distinct via render.
6. **Weak, step-label-style title** — "Naming Both Explanations Formally" renamed to "Null Hypothesis: Assume Nothing's Different, First."
7. **Interview questions phrased as flat recall** — both rephrased to match the Teach-Back technique's own "explain to a stakeholder" framing; `meta.interview_topics` updated to match.
8. **Zero interview-styled `check_understanding`** — retagged the p-value poll question to `question_style: interview`.
9. **Missing `[SOURCES]` tag** on the Literary Digest historical claim — added.
10. **Dense analogy/exercise sentences** (accessibility bucket 4) — split the longest sentences in the courtroom and stopwatch analogies, and the closing exercise text, into shorter ones.
11. **"Practical significance" named on-slide but never glossaried** — added to `meta.glossary` and explicitly named on the significance-vs-practical-importance content slide.

## Findings noted, not changed (judgment call)

- **Confidence Intervals slide lacks a concrete visual** — a genuinely visualizable concept currently taught with bullets + a generic icon only. The deck's own `further_resources` slide already links an interactive CI/power visualizer for exactly this reason. Left as-is rather than force a diagram that risks over-decorating a simple definitional slide — a debatable call, not a blocking gap.
- **"No hands-on activity" lint flag** — intentional false positive. This is a concept-only Day 1 by design (no live code until Day 2).

---

## Code Execution Validation

**N/A** — this deck has zero `code` slides. Step skipped entirely per the skill's own gate ("only if the deck has `code` slides").

## Outstanding items

- **`image_requests.md`** lists 2 pending images (title-slide illustration, case-study photo) — both currently render as branded placeholders.
- **Module-level checks not yet run**: spaced-practice/skill-coverage alignment (`check-module-alignment`) is appropriate once more of Module 5's lecture/lab sequence exists (only Day 1 of 7 content days is built so far).
- **World Bank Open Data license question** (flagged in this module's `DATASET.md`) is irrelevant to this specific deck — Day 1 uses Palmer Penguins only.

## Output locations

- Deck: `modules/module-5-inferential-statistics/lectures/hypothesis-testing-foundations-sample-size-power/hypothesis-testing-foundations-sample-size-power.pptx`
- Instructor prep doc: `instructor_prep.md`
- This report: `qa_report.md`
- No instructor/student notebook — this deck has no `code` slides, so `generator/build_notebook.py` was skipped automatically (expected, not an error).

**Import to Google Slides**: upload the `.pptx` to Google Drive — it auto-converts to native Slides on open. No Google Cloud/OAuth setup needed.
