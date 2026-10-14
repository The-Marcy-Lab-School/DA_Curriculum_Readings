# QA Report — DataFrame and SQL Table: Same Data, Two Shapes

**Module 4: Python Data Analysis — Lesson 1 (Day 1), `modeled` scaffolding**
Compiled 2026-08-26 via the `new-lesson-deck` skill, steps 6-11.

- **Spec**: `modules/module-4-python-data-analysis/lectures/dataframe-and-sql-table-same-data-two-shapes/deck_spec.yaml`
- **Deck**: `dataframe-and-sql-table-same-data-two-shapes.pptx` — 28 authored slides, 33 rendered (2 answer-reveals, 1 `blanked_code` reveal, 2 interview-answer slides auto-inserted)
- **Code-along**: `Module4_Lesson1_..._INSTRUCTOR.ipynb` / `..._STUDENT.ipynb`
- **Module dataset**: `module_sources/module-4-python-data-analysis/DATASET.md` (written as part of this build — first lesson of the module)

---

## Overall grade

| | Score | Letter |
|---|---|---|
| **As reviewed** (subagents' own scores, pre-fix) | **3.95 / 5** | **B** |
| **After findings applied** (this build) | **4.65 / 5** | **A** |

Average across the 20 scored buckets (4 accessibility + 18 instructional, minus
2 marked N/A). The code-along review's 3 buckets are scored separately below,
per `qa/code_along_scorecard.md`.

The "after" column is this build's own assessment of the buckets whose stated
deduction was fully resolved — it is not a re-run of the subagents. Every
adjustment is justified per-row.

---

## 18-Point Deck Quality Scorecard

| # | Check | Mechanism | Result |
|---|---|---|---|
| 1 | Missing text / diagram exception | `qa.contrast_check` on the rendered `.pptx` → `check_no_empty_text` | **PASS** — zero empty `TEXT_BOX` shapes across all 33 rendered slides. No `workflow_*`/`concept_map` in this deck, so no diagram exception to confirm. |
| 2 | Wordy/wrapping slides | `theme.overflow_warnings` + `MAX_BULLET_WORDS`/`MAX_TITLE_WORDS` + targeted visual render review | **PASS** — zero overflow warnings at build time; zero bullet/title word-count findings. Two originally flagged and fixed: a 12-word `case_study` headliner (shortened) and an 8-word bridge bullet (tightened). |
| 3 | Code slides have code + tested | `qa.contrast_check` spec lint + Code Execution Validator | **PASS** — 3/3 Python code slides run clean in both validator passes. See "Code validation" below. |
| 4 | Recall builds on prior skills | Instructional bucket 4 | **5/5** — slide 4 is a real retrieval-practice check exercising *both* prerequisites (SQL `WHERE`, pandas `.head()`) before the case study, with notes saying out loud why the recalled material matters today. |
| 5 | Spaced learning | `qa.skill_coverage_check` SPACING GAP | **No spacing gaps.** Every skill is at occurrence 1 (this is the module's first deck). 3 COVERAGE GAPS reported (`git-version-control`, `data-analysis`, `ai-assisted-coding`) — all expected this early; they land on Days 2-4 and the project sprint. Re-run `check-module-alignment` once Days 2-4 exist. |
| 6 | Engagement strategies used | Instructional bucket 6 + `instructor_prep.md` | **4/5** — four distinct modes (`discussion`, `poll`, `game`, `would_you_rather`) spanning Retrieval / Critical Thinking / Gamified / Business-Thinking types. |
| 7 | WCAG accessibility | `qa.contrast_check` self-test + accessibility buckets 1-4 | **PASS** — self-test confirms every `verified_contrast_pairs` entry in `tokens.json` still holds. Accessibility buckets: **5 / 5 / 5 / 5** after fixes (4/4/5/5 as reviewed). Reviewed against **WCAG 2.2 AA** (confirmed current; WCAG 3.0 is still a Working Draft). |
| 8 | Notes on all slides except transitions | `qa.contrast_check` spec lint (`NOTES_EXEMPT_TYPES`) | **PASS** — zero missing-notes findings. Every non-transition slide carries tagged notes; all five transitions carry notes anyway. |
| 9 | No cutoff text | Same as #2 | **PASS** — confirmed by three full LibreOffice → PDF → PNG render passes, every slide looked at. |
| 10 | Text fits its box | `theme.overflow_warnings` + `check_no_offslide_shapes` | **PASS** — zero off-slide shapes (exact geometry, not heuristic), zero overflow warnings. |
| 11 | Icons used properly | Icon-manifest membership + visual render review | **PASS** — every icon resolves in `template/icon_manifest.py`; all render as recognizable glyphs. One consistency fix applied: `sql` now means the *language* everywhere (objectives card, interview topic) and `database` means the *system holding the table* (compare/contrast panels). |
| 12 | Case study source + clickable link | `qa.contrast_check` spec lint (`is_fictional`/`source_url`/`[SOURCES]`) | **PASS** — `is_fictional: false`, `source_url` set and hyperlinked on the caption, `[ARTICLE SUMMARY]` (5 sentences) and `[SOURCES]` both present. Link verified HTTP 200 by hand. |
| 13 | Whitespace / Mayer's principles | Instructional bucket 17 | **3/5** — the deck's honest weak spot. Two images across 28 slides, and both concrete-object analogies stay text-only. See "Findings declined" below for why. |
| 14 | AI-sounding language | `qa.contrast_check` spec lint + bucket 6 | **PASS** — zero typed arrows or emoji, zero banned filler phrases, no field over the em-dash density threshold. |
| 15 | Dead resource links | `qa.link_check` + manual `curl` | **8/8 OK, 0 DEAD.** `qa.link_check` returned UNCERTAIN on all 8 due to an SSL trust-store issue in this environment, not the links; each was then re-checked by hand and returned HTTP 200. |
| 16 | Logical flow / dependency ordering | Instructional buckets 3, 4, 16 | **Bucket 3: 5/5** after fixes; **bucket 4: 5/5**; **bucket 16: N/A** (no prior lecture in this module — judged instead on cross-*module* bridging from Module 2 pandas and Module 3 SQL, which the reviewer rated at a 5 level). |
| 17 | No day/deck numbers | `qa.contrast_check` `_check_no_day_or_deck_references` | **PASS** — zero findings. All forward/backward references are relative ("next class," "the SQL module," "the project's own first setup day"). |
| 18 | Instructor notes completeness | `instructor_prep.md` generated sections | **PASS** — all 11 sections present: Lecture Time Estimate (per-section + code-along subtotals), Code-Along Map, Prerequisites, Learning Objectives, Project Connection, Section Flow, Additional Analogies / Use Cases, Misconceptions to Watch For, Optional Videos, Further Resources, Top Engagement Strategies Used. |

---

## 9-Point Code-Along Scorecard

| # | Check | Mechanism | Result |
|---|---|---|---|
| 1 | Instructor code runs fully | Code Execution Validator, Pass A + Pass B | **PASS** — see "Code validation" below. |
| 2 | Module name + objectives on both variants | `qa.notebook_check` | **PASS** — no findings; both notebooks carry `meta.module`, all 3 objectives, and the glossary-derived Skills line. |
| 3 | Scenario is given | `qa.notebook_check` + code-along bucket 1 | **PASS** (present) + **5/5** after fixes. `meta.scenario` was rewritten during this build so the notebook's own frame carries the SQL query *and* reconciles why cell 1 reads a CSV rather than a live database. |
| 4 | Documentation links work | `qa.link_check` | **3/3 `doc_url` OK** (all pandas docs), verified by hand at HTTP 200. |
| 5 | Student notebook second-person voice | `qa.notebook_check` `_check_student_facing_voice` | **PASS** — zero bare "Fellow(s)" in any student-facing field. |
| 6 | TODOs placed properly | `qa.contrast_check` `code`-slide block | **PASS** — all 3 code slides carry `starter_code`, each distinct from `code`, each with real `# TODO:` markers. Confirmed by reading the generated student notebook. |
| 7 | Scaffolding fades on repeat | `qa.skill_coverage_check` SCAFFOLDING FADE + bucket 3 | **No repeats yet** — the tool reports "no skill_tags recur more than once in this module." Bucket 3 scored on whether the level suits a *first* exposure: **4/5** after fixes. |
| 8 | Instructor notes explain what/why + analogies | Code-along bucket 2 | **5/5** after fixes (3/5 as reviewed — two notes made claims that were false about the generated artifact; both corrected). |
| 9 | Correct deliverable file type | `build_deck.py` Python/non-Python dispatch | **PASS — `.ipynb`, correct.** All 3 code slides are `language: python`, so `build_notebook.py` is the right route. See "The all-Python decision" below. |

---

## Accessibility buckets (`qa/accessibility_checklist.md`)

Reviewed against **WCAG 2.2 AA** (the subagent confirmed via search that this is
still the current Recommendation; WCAG 3.0 remains a Working Draft).

| # | Bucket | As reviewed | After fixes | Justification |
|---|---|---|---|---|
| 1 | Text Alternatives | 4/5 | **5/5** | Both images carry authored alt text that doesn't duplicate the caption. The case-study alt was rewritten from a scene description into what the image actually conveys for the lesson (gene names silently rewritten as dates). |
| 2 | Reading Order & Labels | 4/5 | **5/5** | Descriptive titles and `topic`s throughout; no slide number ever stated as visible text. The one real gap — `created_date` used in code and quizzed before it appeared in any on-slide table — was fixed by adding the column to the SQL-table slide. |
| 3 | Color Independence & Contrast | 5/5 | **5/5** | Options are lettered A/B/C, the auto-inserted reveal restates the correct answer verbatim as text, compare/contrast panels carry word labels alongside icons, and the spec introduces no colors or fonts of its own. |
| 4 | Cognitive Load & Motion | 5/5 | **5/5** | No content slide over 5 bullets or 3 cards; tables capped at 6 rows with explicit "don't read all six" pacing guidance; zero `motion_note` entries, so nothing depends on animation that may never be applied. |

---

## Instructional-quality buckets (`qa/instructional_review_checklist.md`)

| # | Bucket | As reviewed | After fixes | Justification |
|---|---|---|---|---|
| 1 | Learning Objectives Addressed | 4/5 | **5/5** | Explicit objectives slide; each objective gets a contiguous `objective_index`-tagged section. Deduction was that objective 2's "translate a small SQL query" only ever appeared at clause level — fixed by adding a complete-query `compare_contrast` and a `CREATE TABLE`-style type-declaration table. |
| 2 | Misconceptions Addressed | 4/5 | **5/5** | Nine genuine misconceptions with real instructor handling (`object` is not an error; `df["borough" == "BRONX"]`; `.value_counts()` is not a full `GROUP BY`; "pandas is slower than SQL"; "lock file locks you out of updating"). Only cited gap was undefined "kernel" in visible text — rephrased, term now attached out loud in notes. |
| 3 | Logical Flow & Transitions | 4/5 | **5/5** | Five transitions across three `style` values, each with a real connecting insight rather than a topic tag; `.value_counts()`/`len()` previewed before the slide that needs them; hook resolved by name in the bridge. Deduction was the unstated database→CSV export hop — now visible on the transition and explicit in notes. |
| 4 | Prior-Knowledge Ties | 5/5 | **5/5** | Early retrieval check exercising both prerequisites, with notes tying the recall to today's content rather than framing it as warm-up trivia. All three `dependent_skills` confirmed covered upstream. |
| 5 | Demo/Code Sets Up the Exercise | 3/5 | **4/5** | `uses_same_scenario_as_lecture: false`, so no spoiler risk. Deduction was that the authored `starter_code` practice was invisible to students — now announced on the closing slide and in `meta.exercise`. Still not a separate assignment, hence 4 not 5. |
| 6 | Engagement & Gamification | 4/5 | **4/5** | Four distinct modes across four technique types, real career relevance, no outcome overclaiming. The mis-cast `would_you_rather` was rewritten into a genuine two-sider; the remaining deduction (voice reads competent-and-sober rather than the brand's fun/energetic default) stands. |
| 7 | Summary Quality | 5/5 | **5/5** | Bridge names four real takeaways, resolves the case-study hook explicitly, and states today's honest limit ("you loaded a file, not a live database"). Closing logistics correctly generic. |
| 8 | Interview-Prep Coverage | 5/5 | **5/5** | Both topics mirror `meta.interview_topics`; QAR and Teach-Back correctly matched to their question archetypes; each `short_answer` visibly flows its framework's steps; `[TECHNIQUE]` notes coach *why* the structure fits. Both topics web-verified as genuinely common for data-analyst roles. |
| 9 | Backwards-Design Linkage | 3/5 | **4/5** | The tie is present and well-reasoned on all three required slides. Deduction was that it lived only in speaker notes — a visible bridge bullet now names the project's own two-query check. Slide 2's objectives grid still carries it in notes only, hence 4. |
| 10 | Question Quality & Bloom's | 3/5 | **5/5** | 25% `remember`, climbing to `analyze` and `evaluate`, four distinct modes. Both deductions fixed: one check is now `question_style: interview` with a `technique` (closing the module plan's own stated interview-coverage gap), and both `answer.source` values are now real external citations rather than self-references. |
| 11 | Concrete, Relatable Analogies | 4/5 | **5/5** | Three analogies for three genuinely hard concepts, seven distinct domains counting backups, all freshly reasoned rather than pattern-matched, backups notes-only. Deduction was that the boolean mask — the deck's own flagged hardest concept — had none; a guest-list analogy was added. |
| 12 | Title Framing | 5/5 | **5/5** | Every teaching slide is a real headline with exactly one emphasis on the load-bearing word; structural slides correctly plain; the title slide names this lesson's actual topics. |
| 13 | Diagram & Table Fit | 3/5 | **4/5** | Each table is correctly chosen for exact-value comparison; both `compare_contrast` slides are genuine two-sided contrasts. Icon drift fixed. Still no `workflow_*` — declined deliberately, see below. |
| 14 | Multi-tool Coverage | N/A | **N/A** | `meta.tools` lists one tool. See "Findings declined." |
| 15 | Scaffolding & Project Alignment | 3/5 | **4/5** | Content genuinely matches `modeled`. Both module-plan reconciliation gaps the reviewer found are now written into `INSTRUCTOR_MODULE_SUMMARY.md` (git does not appear Day 1; `uv` is a real Day 1 objective the brief's table never carried). Module-wide rubric coverage still can't be judged from one log entry, hence 4. |
| 16 | Cross-Lecture Continuity | N/A | **N/A** | No prior lecture exists in this module. Judged instead on cross-*module* bridging, the reviewer rated it 5-level: the opening names the Module 2 and Module 3 halves explicitly, slide 4 makes students retrieve one of each, and the closing sends them to verify their own Module 3 database still connects. |
| 17 | Whitespace & Multimedia Principles | 3/5 | **3/5** | Segmenting is disciplined and nothing is decorative, but only two images across 28 slides and both concrete-object analogies remain text-only. Not fixed — see "Findings declined." |
| 18 | Factual Accuracy & Claim Scope | 3/5 | **5/5** | Both deductions fixed. The `TIMESTAMP` mapping row is now scoped to the file path (it would have been contradicted by Day 2's live connection), and the case-study bullet now carries the "genomics papers" qualifier its notes always had. Three claims were already well-hedged before review: the Astral benchmark is attributed and caveated as warm-cache, the pandas 2.x/3.0 `object`/`str` split is version-scoped, and the server-vs-memory framing names its own simplification. |

---

## Code-along review buckets (`qa/code_along_review_checklist.md`)

| # | Bucket | As reviewed | After fixes | Justification |
|---|---|---|---|---|
| 1 | Scenario & Framing Quality | 4/5 | **5/5** | Concrete role and organization, second-person throughout, tied to the cells' actual dataset and columns, no exercise spoiler. The deduction — a Postgres frame the notebook silently abandoned for a CSV — was fixed by rewriting `meta.scenario` to carry the real query and name the export explicitly. |
| 2 | Instructor Note Depth & Analogies | 3/5 | **5/5** | The why-explanations and misconception calls were already strong. Both false statements were corrected: the data path (which genuinely did not resolve) and a claim that the notebook contained the SQL-to-pandas table (it did not). The most abstract cell now has an analogy. |
| 3 | Scaffolding Fade | 3/5 | **4/5** | No fade to assess — every skill is at occurrence 1. Both deductions addressed: `starter_code` was re-aimed from pandas mechanics students already own onto the SQL-to-pandas bridge itself, and `skill_tags` were made granular (`pandas-io`, `dtypes`, `boolean-filtering`) so the fade check can actually discriminate by Day 4. Not 5 because there is still no second occurrence to prove fade against. |

---

## Code validation

Full detail in `code_validation_report.md` (same directory). Summary:

- **3 code slides (spec positions 10, 11, 18), all `language: python`, 3/3 PASS
  in both passes. 0 FAIL, 0 SKIPPED.** Validated twice: once on the first build,
  then re-run from scratch after the data/path/`starter_code` fixes below.
  `code_validation_report.md` holds the re-run and supersedes the first.
- **Pass A** (per-slide, isolated) and **Pass B** (the real generated instructor
  notebook, every code cell run top to bottom in one shared namespace, like
  Restart & Run All) **agree** — no cross-cell-state bug.
- Run against the **real** module dataset
  (`modules/module-4-python-data-analysis/data/nyc_311_sample.csv`, 15 rows,
  7 columns, pulled live from the NYC Open Data Socrata API), never synthetic
  data. pandas **2.2.3**.
- **No SQL/Docker validation was required** — this deck has no non-Python code
  slides, so there is no `postgres:16-alpine` run to do. That is a deliberate
  design decision, not an omission; see below.
- Every numeric claim the deck makes about its own output was verified by
  actually running the code: 15 rows x 7 columns; `unique_key` is `int64` and
  the other six columns are text; `pd.to_datetime()` yields `datetime64[ns]`;
  the BRONX filter gives exactly 3 rows with `Noise - Residential` = 2 and
  `Noise - Street/Sidewalk` = 1.
- The student notebook was confirmed genuinely blanked — `# TODO:` markers and
  `...` placeholders in all three cells, no leaked answers, no instructor notes.

**Two real bugs the validator caught and this build fixed:**

1. **A broken data path, asserted as correct in an instructor note.** The code
   originally read `data/nyc_311_sample.csv`, which resolves from nowhere a
   student's notebook actually sits, while a `[SCRIPT]` line told the instructor
   to reassure the room that paths were fine — immediately before the whole class
   would have hit `FileNotFoundError` on cell 1 of a code-along. Corrected to
   `../../data/nyc_311_sample.csv` and the note rewritten to state the real
   assumption. The re-validation **reconstructed the real export layout on disk**
   (`<module-slug>/data/` beside `<module-slug>/lectures/<slug>/`, per
   `generator/export_code_along_repos.py`) and confirmed the new path resolves —
   plus a negative control confirming the bare `data/` path does raise
   `FileNotFoundError` from that directory, exactly as the rewritten note promises.
2. **Slide 7's table did not match `df.head()`.** The first validation run found
   that only three of five rows overlapped, while an instructor note said to
   deliver "this is the same picture as the previous slide. Same rows, same
   column names, same order." Fixed by reordering the teaching CSV so its first
   five rows *are* slide 7's five rows; the re-run confirms `df.head()` is now
   exactly `[47002094, 59484263, 59484344, 69530202, 69530216]`, matching
   row-for-row on all four displayed columns. Recorded in `data/SOURCE.md`.

**One non-blocking content finding, addressed in notes rather than code**: the
`descriptor` value `N/A` is one of pandas' default missing-value strings, so
`read_csv` silently converts it to `NaN` — and it lands in row 0 of the day's
very first code-along output. Rather than editing the real data, slide 10 now
carries a `[MISCONCEPTIONS]` block giving the instructor the answer, framed as
on-thesis (reading a file means a tool making decisions about what the
characters mean) rather than as a distraction.

---

## The all-Python decision (why the SQL side is not a `code` slide)

This deck teaches a SQL-table/DataFrame comparison but contains **zero
`language: sql` code slides**, on purpose. `generator/build_deck.py`'s dispatch
(`if languages and "python" not in languages`) routes any deck containing at
least one Python code slide through `generator/build_notebook.py` — so a mixed
Python+SQL deck would emit a Python-kernel `.ipynb` with a raw `SELECT` sitting
in a code cell, which cannot run. `build_notebook.py` only adds a "*Language:
sql — not auto-validated*" markdown note; it still writes the SQL into a code
cell. Confirmed by reading the dispatch directly, not inferred from prose.

The SQL side is therefore carried by three real, accessible, screen-readable
pptx artifacts instead: the rows as a `table` slide, the column type
declarations as a second `table`, and one complete query beside its pandas
equivalent as a `compare_contrast`. Nothing is a screenshot; every character is
real text. The instructional reviewer's verdict on this was that the constraint
is real and the workaround sound, but the first draft under-used it — showing
only column headers and clause fragments. Both additions (the type-declaration
table and the complete-query comparison) came from that finding.

---

## Findings declined, with reasons

- **"Add a `workflow_linear` for connect → query → load → summarize"** (bucket
  13). Declined for this lesson. `pedagogy/diagram_selection.md`'s one-sentence
  test is marginal here — the reviewer said so themselves — and that pipeline is
  Day 2's content, actually executed there rather than described. Building it
  today is scope creep by `content_spec/SCHEMA.md`'s own scope-discipline rule,
  and it would push the lesson to a 62-minute estimate. **Recommend it for Day
  2**, where it is genuinely earned.
- **"Pair the two code-slide analogies with `icon_hero`"** (bucket 17). Not
  possible as stated: `icon_hero` and `image_path` are fields on `content`
  slides, not `code` slides, per `content_spec/SCHEMA.md`. The analogy callout
  is the sanctioned treatment on a `code` slide, and all three carry one. Bucket
  17 stays at 3/5 honestly rather than being marked fixed.
- **"Declare `meta.tools: ["Python", "PostgreSQL"]`"**. Declined. `meta.tools`
  scopes the **hands-on code-along** tools specifically (see "Multi-tool
  code-alongs" in `content_spec/SCHEMA.md`), and today's hands-on work is
  Python-only by design — a `modeled` day where the live PostgreSQL connection
  is deliberately deferred to Day 2. Declaring PostgreSQL would assert a
  hands-on demo that does not and should not exist today.
- **"Give `DataFrame`/`Series` a defining sentence earlier"** (bucket 19 note).
  Declined as low severity, matching the reviewer's own framing: both are
  Module 2 prior knowledge, `meta.glossary` carries real definitions that reach
  both notebooks' Skills line, and the Key Terms recap table restates them
  before the summary.

---

## Two repo-level bugs found and fixed during this build

1. **`generator/build_deck.py`: a `title` slide's pending image was never listed
   in `image_requests.md`.** `add_title_slide` has accepted an optional
   side-column image since an earlier review and correctly draws the branded
   placeholder card, but `_IMAGE_CAPABLE_TYPES` never gained `"title"` — so the
   deck showed a visible "AI IMAGE NEEDED" card that the manifest silently
   omitted. Found by looking at slide 1 of a real render and noticing the
   manifest had one fewer entry than the deck had placeholders. Fixed by adding
   the type; every existing deck in the repo was rebuilt afterward as a
   regression check, all clean.
2. **`qa/deck_review_exemplar.md`** gained three dated entries from this review:
   the bug above; the fact that LibreOffice's PDF export recolors hyperlink runs
   (so a link's contrast cannot be judged from a rendered PNG — the actual run
   color here is `gray_500`, 5.57:1 on `forest_900`, WCAG AA, confirmed by
   reading the XML back); and the reminder that a `contrast_check` longest-word
   table-header warning is a heuristic a real render is allowed to overrule.

---

## Strengths

- **The core comparison is genuinely worked, not asserted.** The same five real
  NYC 311 rows appear as a SQL table, as that table's declared column types, as
  `df.head()` output, as `df.dtypes`, in a vocabulary mapping table, and as one
  complete query written twice. The data file was reordered so `df.head()`
  literally matches the table slide — the lesson's central claim is checkable on
  screen, not taken on trust.
- **Unusually careful claim scoping.** Three separate places hedge honestly
  rather than overclaiming: the Astral speed benchmark is attributed to the
  vendor *and* caveated as warm-cache; the pandas 2.x `object` vs. 3.0 `str`
  split is taught as "run `.dtypes` and look, don't assume" precisely because
  `uv add pandas` installs a different major version than an older environment;
  and the server-vs-memory framing names its own simplification out loud.
- **Interview prep is real, verified, and framework-shaped.** Both topics were
  web-verified as genuinely common for data-analyst roles, each is matched to a
  named technique from `pedagogy/interview_frameworks.md` that actually fits its
  archetype, and each `short_answer` visibly flows that framework's steps rather
  than carrying the label decoratively.
- **Instructor notes an instructor could teach cold from.** Every activity spells
  out the actual mechanic plus an online fallback; the misconceptions are
  specific and real (`df["borough" == "BRONX"]`, `object` misread as an error,
  `.value_counts()` mistaken for a full `GROUP BY`); pacing marks sit at every
  section boundary.
- **The case study earns its place.** A real, cited, well-documented incident
  (27 human genes renamed because a spreadsheet kept rewriting `SEPT2` as a
  date) that is *exactly* the lesson's mechanism — data silently changing type
  when it moves between tools — and its hook question is resolved by name in
  the bridge.

## Weaknesses

- **Visual density is the deck's real weak point (bucket 17, 3/5).** Two images
  across 28 slides, and both concrete-object analogies (an album on a shelf, a
  price tag) stay text-only because `code` slides have no image field. A future
  revision could move one analogy onto a `content` slide to earn a visual.
- **Four tables and no diagram.** Every table is individually the right choice
  for exact-value comparison, but the mix reads flat over 28 slides. The
  connect → query → load → summarize `workflow_linear` was deliberately deferred
  to Day 2 rather than forced in here.
- **Voice reads competent and sober rather than fun and energetic**, against
  `BRAND_GUIDELINES.md`'s stated default. Justifiable on a conceptual
  comparison day, but it is a real gap against the brand.
- **Two images are still placeholders.** `image_requests.md` lists both (slide 1
  title art, slide 6 case-study art). The deck presents fine with the branded
  placeholder cards, but re-run `build_deck.py` after dropping the real PNGs in —
  that re-run is also what writes the authored alt text into the rendered shapes.
- **Backwards-design still leans on notes.** Bucket 9 is 4/5, not 5: the bridge
  now names the project in visible text, but the objectives slide's project tie
  remains speaker-notes-only.

---

## Pending before this deck ships

1. Generate the two images listed in `image_requests.md` and re-run
   `.venv/bin/python -m generator.build_deck <spec>`.
2. `pandoc` is not installed locally, so the `.docx` exports of `DATASET.md`,
   `INSTRUCTOR_MODULE_SUMMARY.md`, and `INSTRUCTOR_LECTURE_NOTES.md` were
   skipped with a clean no-op message. The `.md` sources are all written and
   fully usable.
3. Run `check-module-alignment` once Days 2-4 are built — the 3 coverage gaps
   `qa.skill_coverage_check` reports today are expected at lesson 1 of 4 and
   need the full sequence to judge.
