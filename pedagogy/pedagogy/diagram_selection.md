# Diagram Selection Reference

`content_spec/SCHEMA.md` documents which diagram type fits which *shape* of idea
once you've already decided a concept needs one (`workflow_linear` for a
sequence, `workflow_cyclical` for a repeating process, `concept_map` for
undirected relationships). This doc answers the **prior** question: should this
concept get a diagram — or a table, or a compare/contrast panel — at all,
instead of plain `bullets`? Full research behind every claim here, with
citations, lives in `pedagogy/diagram_selection_research.md`; this file is the
condensed, actionable version used during authoring.

**The short version, up front:** a diagram earns its place when the relationship
between parts is what's actually hard — not whenever the content merely *can* be
drawn. Diagrams that don't clear that bar aren't neutral decoration; research
below shows they can measurably *hurt* recall by competing for attention with
the content that matters.

## Which concepts earn a diagram — the decision rules

1. **Real dependency between steps** (the output of one step feeds the next, or
   the process repeats) → `workflow_linear` / `workflow_cyclical`. If the
   "steps" are actually independent items with no dependency between them (a
   checklist, not a pipeline), they're a `bullets` list, not a workflow diagram.
2. **Non-sequential relationships among ≥3 ideas** (how several concepts relate
   to each other, no single order implied) → `concept_map`. If the ideas don't
   actually cross-reference each other, a diagram won't create relationships
   that aren't there — use bullets.
3. **Exact/discrete values to look up or compare precisely** → `table`.
   **Trends, structure, or spatial relationships** → a diagram. Don't build a
   table to show a trend or a diagram to convey three exact numbers — each
   representation fits a different task, and mismatching them costs the reader
   a mental translation step (Vessey's cognitive fit theory).
4. **A two-sided contrast** (same axes, opposing values, e.g. `.groupby()` vs.
   `.pivot_table()`) → `compare_contrast`. Don't force this into a
   `concept_map` or a two-node workflow.
5. **A small, NAMED set of parts meant to be recalled together as one
   framework** (an acronym like PREP: Point-Reason-Example-Point, or a short
   numbered method) → `framework_columns`. The test is recall-as-a-set: would
   a Fellow need to reproduce all the parts together, in this specific
   grouping, later (answering an interview question, structuring a write-up)?
   If the items are just a handful of related-but-independent facts with no
   shared identity as "the framework," they're `card_items` instead. If
   there's a real before/after dependency between the parts, it's a
   `workflow_linear`, not this.
6. **Invisible system or runtime state** — data moving through pipeline stages,
   components calling each other, what actually happens underneath a language
   construct (the SQL logical-execution-order diagram, the Python iterator-
   protocol cycle) → diagram, specifically because the structure being taught
   is otherwise invisible to the learner. This is the strongest, most specific
   case for a diagram in a technical curriculum — see "Why this works" below.

## The one-sentence test

Before adding a diagram, say the relationship out loud in one plain sentence.
If a Fellow would correctly retain that sentence without needing to re-read it,
the diagram isn't adding information — it's a **seductive detail**: an
interesting-looking addition that competes for attention with the content that
actually matters, not free signal. Reserve the diagram budget for relationships
genuinely too easy to lose track of from prose alone (a five-step pipeline with
real dependencies, a cycle that loops back on itself, a web of relationships
between several ideas) — not "three steps in a row with nothing to trip over."

## Why this works (the research, not just intuition)

- **Concept maps measurably help specifically when ideas cross-link** — Novak &
  Gowin's theory (built on Ausubel's meaningful-learning research) and a 55-study
  meta-analysis (Nesbit & Adesope, 2006) both point the same direction: the
  benefit is largest for non-linear, many-to-many relationships, not simple
  sequences or independent facts.
- **Dual-coding only fires for content with a real spatial/structural
  referent** (Paivio) — a diagram doesn't automatically create the "two mental
  codes" benefit; it needs an actual shape, position, or flow to encode.
- **A diagram is worth it when it makes structure explicit that text leaves
  implicit** (Larkin & Simon, 1987) — the classic test is whether a reader would
  otherwise have to mentally reconstruct order/grouping/adjacency from prose.
  Mayer & Gallini (1990) found this specifically for multi-step, cause-effect
  *state changes*, not static labeled pictures.
- **Diagrams of otherwise-invisible system/program state are the strongest case
  in technical education** (Sorva's "notional machine" research) — novices lack
  a working mental model of what's happening underneath code execution or a
  pipeline, and a diagram externalizes exactly that. This is why the SQL
  order-of-execution and iterator-protocol diagrams in this curriculum are good
  uses of the technique, not incidental ones.
- **Building/completing a diagram beats only viewing a finished one** — a 2018
  meta-analysis (142 effect sizes) found students *constructing* a concept map
  (g=0.72) outperform students *studying* a pre-made one (g=0.43). Generation
  matters more than exposure (Schroeder et al., 2018).
- **The benefit holds — even strengthens — for students having a harder time
  with the material**, not just advanced learners (Anastasiou et al., 2024,
  55 studies) — a concept map isn't a reward for students who already get it,
  it's most useful for whoever doesn't yet.
- **Reinforcing the same diagram across roughly a week to a month** measurably
  outperforms both a one-off use and much longer gaps (Wang et al., 2025) —
  relevant at the module level, not just per-slide.
- **The updated Cognitive Theory of Multimedia Learning** (Mayer, 2024) now
  includes social-agency and affective-emotional components: positive framing
  and a sense of partnership around a visual measurably change how much it
  teaches — the conversational, warm delivery this system's `notes` field
  already asks for isn't separate from a diagram's effectiveness, it's part of
  the mechanism.

## A hard caution: diagrams aren't free, and don't guarantee a benefit

- **"Seductive details" research** (Garner et al., 1989; Harp & Mayer, 1998)
  found that interesting-but-unnecessary visual additions measurably *reduce*
  recall of the content that matters, by pulling limited attention toward the
  decoration instead of the causal chain being taught. A 44-study systematic
  review (Guo & McTigue, 2020) confirms the blunt finding: merely including a
  visual does not guarantee a learning benefit — it can be neutral or negative.
- **Passive diagrams underperform active ones.** A meta-study of algorithm
  visualization (Hundhausen et al., 2002) found the technique only reliably
  helped when learners actively predicted or constructed the visualization
  themselves — not when they just watched one appear. Pair a pipeline/
  architecture diagram with an active prompt (predict the next step, trace what
  happens if step 2 fails) via `check_understanding`, rather than presenting it
  as a purely passive illustration.
- **Don't diagram something simple just because the slide type exists.** A
  `workflow_linear` used for three independent, unrelated setup steps ("install
  the library, open the notebook, import pandas") is worse than a bulleted list
  — it implies a dependency that isn't real and adds visual weight the content
  doesn't need.

## On this Fellowship's population specifically — what's real, what isn't

This Fellowship's population (young adults 18-24, disproportionately Black and
Latino/Brown, many career-changers) is the same population
`pedagogy/relatable_analogies.md` researches carefully for analogy design.
A follow-up research pass specifically looked for research on diagrams/visual
tools for Black, Latino, and underrepresented-minority (URM) students, and the
honest answer is **the evidence here is thin** — worth stating plainly rather
than stretching a citation to sound more targeted than it is (full findings:
`pedagogy/diagram_selection_research.md`):

- **What's genuinely usable**: research on graphic organizers for English
  Language Learners shows real, moderate-to-large comprehension gains, with the
  mechanism being that visual/structural organization lets a learner
  demonstrate understanding without being gated by language demands (Li et al.,
  2024). This **plausibly, not provenly**, extends to this Fellowship's
  adult career-changers hitting dense new technical vocabulary — a
  structurally similar bottleneck, different gate. **Decision nudge**: when a
  slide is introducing several new technical terms at once, that's a real,
  population-relevant reason to reach for a diagram/graphic organizer over
  prose, on top of the structural reasons in the decision rules above.
- **What's a reasoned hypothesis, not a finding**: stereotype threat is a
  well-established, well-replicated mechanism that measurably consumes working
  memory (Schmader & Johns, 2003; Beilock et al., 2007). It's plausible that
  offloading structure onto an external diagram frees capacity that would
  otherwise go toward threat-monitoring — but no study directly tests this
  connection. Don't cite this as if it's proven; it's a reasonable inference
  bridging two literatures that don't currently talk to each other.
- **What's a genuine gap**: culturally relevant/sustaining pedagogy
  (Ladson-Billings; Paris) has no diagram-specific research extension —
  searches turned up only general theory. Don't manufacture a connection that
  isn't in the literature yet.

The practical upshot: keep using the decision rules above (they're well
supported on their own terms), and treat "this will land better with our
specific Fellows" as a reasonable hope for the vocabulary-scaffolding case
specifically, not an established fact for diagrams in general.

## Authoring guidance

- Decide this during the outline step, at the same time you're identifying the
  lesson's hardest concepts for the analogy budget (see
  `pedagogy/relatable_analogies.md`) — the two questions are related but
  distinct: an analogy makes an abstract idea concrete, a diagram makes an
  implicit *structure* explicit. A single hard concept can reasonably get both.
- Run the one-sentence test on every candidate `workflow_*`/`concept_map` before
  writing it — if it fails (the sentence would suffice), fold the content into
  the surrounding `content` slide's bullets instead.
- When a diagram is warranted for a pipeline/architecture/execution-order
  concept, pair it with an active `check_understanding` (predict-the-next-step,
  trace-the-flow) rather than leaving it as a slide Fellows only look at — see
  `pedagogy/engagement_techniques.md` for concrete prompt formats.
- `table` vs. diagram is a task-type question, not a preference — precise
  values and side-by-side comparison go in `table`; structure, flow, and
  relationships go in a diagram (see rule 3 above).
- Where a slide format allows it, prefer a version of a diagram Fellows help
  build or complete over one they only view — generation beats exposure (see
  above). `blanked_code`'s fill-in-the-blank mechanism (`content_spec/SCHEMA.md`)
  already applies this exact principle to code slides; a `check_understanding`
  prompt asking Fellows to predict a workflow's next step or a concept map's
  missing satellite before it's revealed is the same idea applied to a diagram,
  using tools already in this system.
- For a concept that spans multiple lessons in a module, plan to revisit the
  same diagram (not just introduce it once) across roughly a week-to-a-month
  window rather than a single exposure — see `modules/<module-slug>/DATASET.md`-
  style module-level planning.

## Sources

Full findings and per-citation reasoning: `pedagogy/diagram_selection_research.md`.

- Novak, J. D., & Gowin, D. B. (1984). *Learning How to Learn*. Cambridge University Press.
- Nesbit, J. C., & Adesope, O. O. (2006). Learning with concept and knowledge maps: A meta-analysis. *Review of Educational Research*, 76(3), 413–448.
- Paivio, A. (1971/1986). *Mental Representations: A Dual Coding Approach*. Oxford University Press.
- Larkin, J. H., & Simon, H. A. (1987). Why a diagram is (sometimes) worth ten thousand words. *Cognitive Science*, 11(1), 65–100.
- Mayer, R. E., & Gallini, J. K. (1990). When is an illustration worth ten thousand words? *Journal of Educational Psychology*, 82(4), 715–726.
- Garner, R., Gillingham, M. G., & White, C. S. (1989). Effects of "seductive details" on macroprocessing and microprocessing in adults and children. *Cognition and Instruction*, 6(1), 41–57.
- Guo, D., & McTigue, E. M. (2020). The impact of visual displays on learning across the disciplines: A systematic review. *Educational Psychology Review*, 32(3), 627–656.
- Hundhausen, C. D., Douglas, S. A., & Stasko, J. T. (2002). A meta-study of algorithm visualization effectiveness. *Journal of Visual Languages & Computing*, 13(3), 259–290.
- Sorva, J., Karavirta, V., & Malmi, L. (2013). A review of generic program visualization systems for introductory programming education. *ACM Transactions on Computing Education*, 13(4).
- Vessey, I. (1991). Cognitive fit: A theory-based analysis of the graphs versus tables literature. *Decision Sciences*, 22(2), 219–240.
- Schroeder, N. L., Nesbit, J. C., Anguiano, C. J., & Adesope, O. O. (2018). Studying and constructing concept maps: A meta-analysis. *Educational Psychology Review*, 30(2), 431–455.
- Anastasiou, D., Wirngo, C. N., & Bagos, P. (2024). The effectiveness of concept maps on students' achievement in science: A meta-analysis. *Educational Psychology Review*, 36.
- Wang, X.-M., Wang, J.-L., Xu, S.-Y., & Xu, S.-J. (2025). Concept mapping in STEM education: A meta-analysis of its impact on students' achievement (2004–2023). *International Journal of STEM Education*, 12, Art. 30.
- Mayer, R. E. (2024). The past, present, and future of the cognitive theory of multimedia learning. *Educational Psychology Review*, 36, Art. 8.
- Li, J.-T., Tong, F., Irby, B. J., Lara-Alecio, R., & Rivera, H. (2024). The effects of four instructional strategies on English learners' English reading comprehension: A meta-analysis. *Bilingual Research Journal*.
- Schmader, T., & Johns, M. (2003). Converging evidence that stereotype threat reduces working memory capacity. *Journal of Personality and Social Psychology*, 85(3), 440–452.
- Beilock, S. L., Rydell, R. J., & McConnell, A. R. (2007). Stereotype threat and working memory: Mechanisms, alleviation, and spillover. *Journal of Experimental Psychology: General*, 136(2), 256–276.
