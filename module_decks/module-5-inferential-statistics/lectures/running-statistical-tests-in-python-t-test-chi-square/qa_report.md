# QA Report — Running Statistical Tests in Python: t-test & Chi-Square

**Module 5, Day 2** (the module's first hands-on code lecture)
**Deck:** `modules/module-5-inferential-statistics/lectures/running-statistical-tests-in-python-t-test-chi-square/`
**Reviewed:** 2026-09-11

---

## 18-Point Deck Quality Scorecard

| # | Check | Result |
|---|---|---|
| 1 | Missing text / diagram exception | None found. No workflow/concept_map slides (correctly diagram-free per content). |
| 2 | Wordy/wrapping slides | All resolved: several bullet word-count and colon-capitalization findings fixed across content/check_understanding slides; one real layout risk found and fixed - adding a 5th card to the Key Terms opener shrank the box width enough to risk 3 long single-word terms not wrapping ("chi-square," "contingency," "categorical") - reverted the opener to 4 cards and added the 5th term only to the recap table instead (already-confirmed-safe row count). |
| 3 | Code slides have code + tested | 6 code slides (4 original + 2 added for effect size, see finding below). Code Execution Validator ran both passes twice (before and after the effect-size addition) - 6/6 PASS both times. |
| 4 | Recall builds on prior skills | 5/5. Both `dependent_skills` (Day 1's H0/H1 vocabulary; Module 2's group-comparison skill) are explicitly surfaced on-slide, not just claimed. |
| 5 | Spaced learning | Module-level check, not yet run - appropriate once more of Module 5's sequence is built. |
| 6 | Engagement strategies used | 5/5. Discussion, poll, game, would_you_rather, and interview_prep - a different mode-set than Day 1's (poll swapped in for variety, confirmed via the deterministic engagement-mode-reuse check). |
| 7 | WCAG accessibility | 5/4/5/5 across the 4 accessibility buckets (see below). Reviewed against WCAG 2.2 AA. |
| 8 | Notes on all slides except transitions | Clean - no missing-notes findings from spec lint. |
| 9 | No cutoff text | Same as #2 - the one real layout risk found and fixed, confirmed via actual LibreOffice-rendered PNGs of all 32 slides. |
| 10 | Text fits its box | Clean - zero-heuristic offslide-geometry check passes. |
| 11 | Icons used properly | Fixed a near-collision before it shipped: "categorical variable" was briefly assigned the same `schema` icon already used for "contingency table" - caught during editing and changed to a distinct icon before the card-count revert made it moot. All icon names resolve; confirmed via render. |
| 12 | Case study source + clickable link | N/A - no `case_study` slide in this deck (a code-mechanics lesson; Day 1 already carried this module's case study). |
| 13 | Whitespace / Mayer's principles | 5/5 (see instructional buckets). |
| 14 | AI-sounding language | Clean - no arrow-character, banned-phrase, or em-dash-density findings (single em-dash in `meta.title`, well under the 3-per-field threshold). |
| 15 | Dead resource links | `qa.link_check`: all URLs UNCERTAIN (local SSL cert gap only), 0 confirmed dead. All independently verified live during step-3 research. |
| 16 | Logical flow / dependency ordering | Fixed a required structural rule found by the linter: 3 code-along slides were each preceded by a non-announcing slide (content or check_understanding) - added a short "Code Along: ..." transition immediately before each, per this codebase's own code-along-transition convention. |
| 17 | No day/deck numbers | Fixed 2 findings ("Day 3," "Day 1" in notes/answer.source) - rephrased relatively ("next class's lab," "last class"). Clean after fixes. |
| 18 | Instructor notes completeness | `instructor_prep.md` has all expected sections (time estimate ~64 min, code-along map, prerequisites, objectives, project connection, section flow). |

## Accessibility (4 buckets)

| Bucket | Score | Justification |
|---|---|---|
| Text Alternatives | 5/5 | The deck's one image (title slide) has specific, meaningful alt text. |
| Reading Order & Labels | 4/5 → 5/5 (after fix) | Two slides shared the identical title "Reading the Real Output" - renamed to "Reading the t-test Output" / "Reading the Chi-Square Output." |
| Color Independence & Contrast | 5/5 | No color-only meaning anywhere; all `icon_hero` styles are pre-verified brand pairs. |
| Cognitive Load & Motion | 5/5 | All bullet/card counts well within limits; no motion notes present. |

## Instructional Quality (16 scored buckets + 2 N/A)

| Bucket | Score | Justification |
|---|---|---|
| 1. Learning Objectives Addressed | 5 | Single stated objective, fully served by every slide; explicit objectives slide early. |
| 2. Misconceptions Addressed | 4 → 5 (after fix) | Six `[MISCONCEPTIONS]` tags present; the one code slide missing one (shape-check) got one added. |
| 3. Logical Flow & Transitions | 4 → 5 (after fix) | scipy.stats itself was never introduced before hands-on use - fixed with a one-line tool-intro note on the first code slide. |
| 4. Prior-Knowledge Ties | 5 | Day 1's exercise is explicitly resolved in the opening transition; Module 2's skill is explicitly named in slide notes. |
| 5. Demo/Code Sets Up the Exercise | 5 | `uses_same_scenario_as_lecture: false`; the lab preview is honest about what's new vs. rehearsed. |
| 6. Engagement & Gamification | 5 | Five distinct modes; correctly restrained from forcing Liberatory framing onto a mechanics lesson. |
| 7. Summary Quality | 5 | Bridge and closing both recap concretely and connect forward. |
| 8. Interview-Prep Coverage | 5 | One topic, PREP technique justified in notes, genuinely different technique than Day 1's Teach-Back. |
| 9. Backwards-Design Linkage | 4 → 5 (after fix) | Closing slide was the one of three touchpoints that didn't restate the project tie - added one sentence. |
| 10. Question Quality & Bloom's Levels | 4 → 5 (after fix, see also #16) | Glossary gaps (categorical variable, degrees of freedom) closed - see 18-point #2/#11 equivalents. |
| 11. Concrete, Relatable Analogies | N/A (appropriate) | No new hard concept needing one - today is mechanics application of Day 1's already-analogized ideas. |
| 12. Title Framing | 3 | A few code-slide titles read as plain action-labels ("Run the t-test"). Left as-is - a debatable, low-severity judgment call for a mechanics-driven lesson where the label genuinely clarifies the step; not applied. |
| 13. Diagram & Table Fit | 3 → 4 (partial) | Icon-to-concept mapping fully consistent after the categorical-variable icon fix. A "workflow_linear template" diagram was suggested but left as a judgment call, not applied - see below. |
| 14. Multi-tool Coverage | N/A | Python only. |
| 15. Scaffolding & Project Alignment | 3 → 5 (after fix) | **Most severe finding**: the module's own `INSTRUCTOR_MODULE_SUMMARY.md` claims Day 2 teaches effect size (Cohen's d / Cramér's V) as project rubric prep - the deck didn't. Fixed by adding two new code slides (one per test) computing and interpreting real effect sizes, re-validated end to end. |
| 16. Cross-Lecture Continuity | 5 | Opens by directly resolving Day 1's own closing exercise; the one nod to a future confounding lesson is properly hedged. |
| 17. Whitespace & Multimedia Principles | 5 | Well-segmented; icons match concepts; no redundant on-slide/notes duplication. |
| 18. Factual Accuracy & Claim Scope | 5 | All claims (p-value magnitude, association≠causation, expected-counts rule, effect-size thresholds) independently verified against real computed output - see Code Execution Validation below. |

---

## Findings applied this pass

1. **Effect size never taught, despite the module's own claim that it is (most severe)** — added two new code slides ("Compute Cohen's d," "Compute Cramér's V"), each with its own announcing transition, `starter_code`, `domain_note`, and notes tying back to the statistical-vs-practical-significance theme from Day 1. Both re-validated for real against the live dataset (Cohen's d ≈ 2.87, large; Cramér's V ≈ 0.66, strong).
2. **Code-along-transition rule violations** — 3 code slides lacked an announcing transition immediately before them (the linter's own deterministic check). Added short "Code Along: ..." transitions before each.
3. **Duplicate slide titles** — two "Reading the Real Output" slides renamed distinctly.
4. **Icon-consistency near-miss** — caught and avoided during editing (see 18-point #11).
5. **Missing tool introduction** — scipy.stats now gets one framing sentence before first use.
6. **Missing `[MISCONCEPTIONS]` block** on the shape-check code slide — added.
7. **Closing slide missing project tie** — added one sentence.
8. **Glossary gaps** — "categorical variable" added to `meta.glossary` and the recap table (kept off the Key Terms opener card row for layout-safety reasons, see #2 in the 18-point table); "degrees of freedom" got a real explanatory notes line instead of only appearing as raw code output.
9. **Bloom's-level regression** (caught by lint during authoring, already resolved before QA dispatch) — added an `evaluate`-level `would_you_rather` check_understanding.
10. **Engagement-mode reuse** (caught by lint during authoring) — retagged one check_understanding from `discussion` to `poll` for genuine mode variety vs. Day 1.
11. All day/deck-number references and colon-capitalization findings fixed.

## Findings noted, not changed (judgment calls)

- **A `workflow_linear` diagram for the "load → check → test → interpret" template** — a defensible suggestion, but the same sequence is already taught twice (once per test) via code+content slide pairs; adding a diagram risks restating rather than adding value. Left as-is.
- **A few code-slide titles read as action-labels, not headlines** — appropriate for a mechanics-driven lesson where the label states the step clearly; not changed.
- **`meta.scenario` covers only the t-test half** — the chi-square pivot is handled cleanly by its own transition slide, so the lesson never reads disconnected. Not changed.

---

## Code Execution Validation Summary

See `code_validation_report.md` for full detail. **6/6 slides PASS** (both Pass A isolated and Pass B whole-notebook), including the 2 slides added after the instructional-quality review. Real Palmer Penguins data (344 rows, CC0), scipy 1.18.1. Every qualitative claim on a slide (p-value magnitude, CI direction, "strongly associated," expected-counts ≥5, Cohen's d "large," Cramér's V "strong") is independently confirmed against real computed output, not assumed.

## Outstanding items

- **`image_requests.md`** lists 1 pending image (title-slide illustration) — currently renders as a branded placeholder.
- **Module-level checks not yet run**: spaced-practice/skill-coverage alignment (`check-module-alignment`) — appropriate once more of Module 5's 7 content days are built (2 of 7 now done).

## Output locations

- Deck: `modules/module-5-inferential-statistics/lectures/running-statistical-tests-in-python-t-test-chi-square/running-statistical-tests-in-python-t-test-chi-square.pptx`
- Instructor notebook: `Module5_Lesson2_running-statistical-tests-in-python-t-test-chi-square_INSTRUCTOR.ipynb`
- Student notebook: `Module5_Lesson2_running-statistical-tests-in-python-t-test-chi-square_STUDENT.ipynb`
- Instructor prep doc: `instructor_prep.md`
- This report: `qa_report.md`
- Code validation record: `code_validation_report.md`
- Shared dataset (new): `modules/module-5-inferential-statistics/data/palmer_penguins.csv` — reusable by Day 3's lab and beyond.

**Import to Google Slides**: upload the `.pptx` to Google Drive — it auto-converts to native Slides on open. No Google Cloud/OAuth setup needed.
