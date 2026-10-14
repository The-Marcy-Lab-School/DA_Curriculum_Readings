# Research Archive: When Should a Concept Get a Diagram vs. Plain Text?

Raw research findings behind `pedagogy/diagram_selection.md` — kept as a full
reference archive (not read by any script, not summarized-down like the main
guide) so the primary sources and full reasoning are available if this guidance
needs revisiting or extending later. Gathered via a WebSearch-enabled research
pass, 2026-07-17. Mayer's Cognitive Theory of Multimedia Learning is deliberately
out of scope here — that ground is already covered in
`pedagogy/mayers_multimedia_principles.md`.

## 1. Concept mapping research

**Citations:** Novak, J. D., & Gowin, D. B. (1984). *Learning How to Learn*.
Cambridge University Press. Theoretical grounding: Ausubel, D. P. (1963/1968).
*Assimilation Theory of Meaningful Learning*. Empirical synthesis: Nesbit, J. C.,
& Adesope, O. O. (2006). Learning with concept and knowledge maps: A
meta-analysis. *Review of Educational Research*, 76(3), 413–448. (High
confidence — all three are real, heavily cited works.)

**Finding:** Novak & Gowin built concept mapping directly on Ausubel's
distinction between rote and meaningful learning: meaningful learning happens
when new information is deliberately anchored to existing cognitive structure
via hierarchical, cross-linked relationships (progressive differentiation +
integrative reconciliation), not by learning propositions in isolation. Nesbit &
Adesope's meta-analysis (67 effect sizes, 55 studies, 5,818 participants, grades
4–postsecondary) found concept maps reliably outperform plain text/outlines/
lectures for knowledge retention, with the largest gains when the material has
many cross-cutting, non-linear relationships between concepts (not simple
sequences).

**Decision rule:** Use `concept_map` when a concept's core difficulty is
*relating several ideas to each other non-sequentially* — not when the ideas are
basically independent facts or a simple ordered list.

## 2. Dual-coding theory

**Citations:** Paivio, A. (1971/1986). *Mental Representations: A Dual Coding
Approach*. Oxford University Press. Boundary-condition extensions: Mayer &
colleagues' spatial/temporal contiguity work (already covered in
`mayers_multimedia_principles.md`) and the "concreteness effect" literature.
(High confidence.)

**Finding:** Dual coding holds that verbal and nonverbal (imagery) systems are
separate but referentially interconnected channels; concurrent activation of
both creates more retrieval paths than either alone. Crucially, this benefit is
conditional: it's strongest for **concrete, imageable content** and weakest/
absent for **abstract content with no natural visual referent** — forcing a
diagram onto a purely abstract, non-spatial idea doesn't create real dual
coding, it just adds decoration.

**Decision rule:** Diagram only when the concept has an actual *spatial or
structural* referent (a shape, position, relation, flow) that a picture can
literally encode — not every concept benefits just because "visuals help."

## 3. Process/diagram comprehension research

**Citations:** Larkin, J. H., & Simon, H. A. (1987). Why a diagram is
(sometimes) worth ten thousand words. *Cognitive Science*, 11(1), 65–100. Shah,
P., & Hoeffner, J. (2002). Review of graph comprehension research: Implications
for instruction. *Educational Psychology Review*, 14(1), 47–69. Mayer, R. E., &
Gallini, J. K. (1990). When is an illustration worth ten thousand words?
*Journal of Educational Psychology*, 82(4), 715–726. (High confidence on all
three.)

**Finding:** Larkin & Simon's core computational argument: diagrams are worth
it when they make relationships *explicit by location* that a sentential (text)
representation leaves *implicit and costly to compute* — i.e., when the reader
would otherwise have to mentally reconstruct structure (order, grouping,
adjacency) from prose. Mayer & Gallini found illustrations only improved
recall/transfer for **mechanical, multi-step, cause-effect systems**
("parts-and-steps" diagrams of how a device works), and mainly for
**low-prior-knowledge learners** — a simple static picture with labels didn't
help; it had to show the *state changes* between steps. Shah & Hoeffner's review
notes comprehension gains depend heavily on the viewer already understanding the
diagram's visual conventions (arrows = flow, not just adjacency).

**Decision rule:** Use `workflow_linear`/`workflow_cyclical` when steps have
real state-changing dependencies (output of step N feeds step N+1, or the
process loops) that a bullet list would force the reader to reconstruct
mentally. If steps are truly independent (a checklist with no dependency
between items), a bulleted list is equivalent or better.

## 4. When diagrams hurt or add nothing

**Citations:** Garner, R., Gillingham, M. G., & White, C. S. (1989). Effects of
"seductive details" on macroprocessing and microprocessing in adults and
children. *Cognition and Instruction*, 6(1), 41–57. Harp, S. F., & Mayer, R. E.
(1998). How seductive details do their damage. *Journal of Educational
Psychology*, 90(3), 414–434. Guo, D., & McTigue, E. M. (2020). The impact of
visual displays on learning across the disciplines: A systematic review.
*Educational Psychology Review*, 32(3), 627–656. (High confidence.)

**Finding:** Garner et al. coined "seductive details" — interesting-but-
irrelevant embellishments that measurably *reduce* recall of core content by
hijacking limited processing resources (extraneous cognitive load), a finding
Harp & Mayer replicated and explained mechanistically (diversion of attention
from the causal chain that matters). Guo & McTigue's systematic review (44
studies, K-12) found the blunt takeaway: **merely including a visual display
does not guarantee a learning benefit** — effects were mixed and sometimes null
or negative, especially when the display wasn't tied to explicit instructional
support or wasn't actually necessary to represent the content's structure.

**Decision rule:** If a diagram would just re-illustrate a relationship the
reader already grasps instantly from one sentence (e.g., "step 1, then step 2"
with no branching/looping/dependency), skip it — the diagram is a seductive
detail, not signaling. Reserve visual budget for relationships that are
actually hard to hold in working memory from text alone.

## 5. Technical/CS-specific diagram research

**Citations:** Hundhausen, C. D., Douglas, S. A., & Stasko, J. T. (2002). A
meta-study of algorithm visualization effectiveness. *Journal of Visual
Languages & Computing*, 13(3), 259–290. Sorva, J., Karavirta, V., & Malmi, L.
(2013). A review of generic program visualization systems for introductory
programming education. *ACM Transactions on Computing Education*, 13(4). Sorva,
J. (2013). Notional machines and introductory programming education. *ACM
TOCE*, 13(2). (High confidence on citations; moderate confidence that
ER-diagram-specific empirical pedagogy research is as strong as the
algorithm-visualization literature — no comparably rigorous controlled study
specifically isolating ER-diagram benefit was found, so treat that specific
claim as practitioner consensus, not a verified effect size.)

**Finding:** Hundhausen et al.'s meta-study of 24 experiments found algorithm
visualization technology's effectiveness was inconsistent overall — the studies
where it *did* help were the ones where **learners actively engaged with
constructing/predicting the visualization**, not passively watching it, echoing
Guo & McTigue's point. Sorva's notional-machine work argues diagrams of
program/data *state* are valuable specifically because novices lack a working
mental model of what's happening "underneath" code execution — a diagram
externalizes an otherwise invisible runtime structure (this generalizes well to
data pipelines/architecture diagrams: they externalize invisible system
state/flow, which is exactly the Larkin & Simon "make-implicit-explicit"
argument applied to CS).

**Decision rule:** Diagram data pipelines/architectures when the point is to
show an otherwise-invisible system structure or state transition (data moving
between stages, components calling each other) — and pair it with an active
task (predict/trace/label) rather than a passive illustration, per the
"active > passive" finding.

## 6. Existing decision frameworks

**Citation:** Vessey, I. (1991). Cognitive fit: A theory-based analysis of the
graphs versus tables literature. *Decision Sciences*, 22(2), 219–240. (High
confidence.)

**Finding:** Vessey's cognitive fit theory is the closest published thing to a
ready-made checklist: match representation type to *task type*.
Spatial/relational tasks (trends, patterns, associations) are better served by
graphical/spatial representations; discrete/symbolic tasks (look up exact
value, compare precise numbers) are better served by tables. Performance
suffers when representation and task type mismatch, because the reader must
mentally transform one into the other before solving the task.

## 7. Recent update — generation beats exposure

**Citation:** Schroeder, N. L., Nesbit, J. C., Anguiano, C. J., & Adesope, O. O.
(2018). Studying and constructing concept maps: A meta-analysis. *Educational
Psychology Review*, 30(2), 431–455. (Direct successor to Nesbit & Adesope 2006,
same lead-author lineage; high confidence.)

**Finding:** 142 effect sizes, n=11,814. Concept mapping overall: moderate
effect (g=0.58) over comparison conditions — but **constructing** one's own map
(g=0.72) clearly beats **studying** a pre-made one (g=0.43). Generation matters
more than exposure.

**Decision rule:** When a diagram is genuinely warranted, favor a version
students build/complete themselves over one they only view, wherever the slide
format allows it — this is the same underlying principle the
`blanked_code`/fill-in-the-blank mechanism already applies to code slides (see
"Fill-in-the-blank code reveals" in `content_spec/SCHEMA.md`); the same logic
plausibly extends to `concept_map`/`workflow_*` slides (worth a future feature,
not yet built).

## 8. Recent update — concept maps as a safe default, even for weaker students

**Citation:** Anastasiou, D., Wirngo, C. N., & Bagos, P. (2024). The
effectiveness of concept maps on students' achievement in science: A
meta-analysis. *Educational Psychology Review*, 36. (High confidence.)

**Finding:** 55 studies, 58 effect sizes, 5,364 students grades 3–12. Overall
g=0.776; strongest in physics/earth science, moderate in biology/chemistry.
Effects held — even strengthened — for **lower-achieving students** and
lower/middle-income-country contexts.

**Decision rule:** No change to the core selection rule, but this weakens any
worry that a concept map is a "nice to have" only for advanced/high-prior-
knowledge Fellows — the evidence points the other way, toward it mattering more
for whoever is having the harder time with the material.

## 9. Recent update — a real reinforcement-window number

**Citation:** Wang, X.-M., Wang, J.-L., Xu, S.-Y., & Xu, S.-J. (2025). Concept
mapping in STEM education: A meta-analysis of its impact on students'
achievement (2004–2023). *International Journal of STEM Education*, 12, Art.
30. (High confidence.)

**Finding:** 37 studies, ES=0.63. Interventions lasting roughly **1 week to 1
month outperformed both shorter and much longer ones**. Digital vs. paper tools
showed comparable effect sizes (no reason to prefer an interactive tool over a
static diagram on learning-effectiveness grounds alone).

**Decision rule:** For a multi-lesson module, revisiting/reinforcing the same
concept map or workflow diagram across roughly a week-to-a-month window (not
just once) is evidence-backed — worth a note for module-level sequencing, not
just single-slide design.

## 10. Recent update — updated Cognitive Theory of Multimedia Learning

**Citation:** Mayer, R. E. (2024). The past, present, and future of the
cognitive theory of multimedia learning. *Educational Psychology Review*, 36,
Art. 8. See also Mayer, R. E. (2021). *Multimedia Learning* (3rd ed.). Cambridge
University Press. (High confidence.)

**Finding:** CTML has grown from its ~1990s core principles (already covered in
`pedagogy/mayers_multimedia_principles.md`) to roughly 15 principles, now
incorporating social-agency theory (learners try harder when instruction feels
like a partnership) and a cognitive-affective model (positive emotion/
self-efficacy prompts measurably improve learning from the *same* visual).

**Decision rule:** The affective framing around a diagram (conversational
`notes`, warmth, "you'll build this yourself" tone) isn't separate from the
diagram's effectiveness — it's part of it. This reinforces (with actual newer
evidence) the brand's existing fun/conversational voice guidance in
`BRAND_GUIDELINES.md` as more than a style preference.

## 11. Research on diagrams/visual tools for Black, Latino, and URM students (honest assessment: thin)

**What exists, and how strong it is:**

- **Stereotype threat and working memory** (Schmader & Johns, 2003, *J. of
  Personality and Social Psychology*, 85(3), 440–452; Schmader, Johns, & Forbes,
  2008, *Psychological Review*, 115(2), 336–356; Beilock, Rydell, & McConnell,
  2007, *J. of Experimental Psychology: General*, 136(2), 256–276) is a solid,
  well-replicated literature: stereotype threat measurably consumes working
  memory via performance-monitoring and thought-suppression. **No study directly
  tests whether visual/structural scaffolding (diagrams, graphic organizers)
  offsets this specific mechanism.** The logic — anything that offloads
  structure-holding from working memory should leave more capacity free,
  regardless of *why* it was depleted — is a **reasoned hypothesis bridging two
  literatures that don't cite each other, not an established finding.** Treat it
  as such if referenced anywhere.
- **English Language Learner graphic-organizer research is real and reasonably
  strong**, and the closest genuinely on-target, population-relevant finding:
  Li, J.-T., Tong, F., Irby, B. J., Lara-Alecio, R., & Rivera, H. (2024). The
  effects of four instructional strategies on English learners' English reading
  comprehension: A meta-analysis. *Bilingual Research Journal* (23 studies,
  n=2,284). Graphic organizers showed moderate-to-large effects, with the
  rationale that visual/structural organization lets students demonstrate
  understanding without being bottlenecked by language-proficiency demands.
  This plausibly (not proven) generalizes to this Fellowship's population:
  adult career-changers encountering dense new technical vocabulary face a
  structurally similar bottleneck (new-to-the-field jargon, not English
  proficiency, but the same "don't let the vocabulary gate the concept"
  mechanism).
- **One adjacent, not on-target, study with the exact population**: Whitehead,
  A., & Alves, N. J. (2022). Use of the "Future Life Map" exercise to improve
  awareness of career options and opportunities in underrepresented minority
  undergraduate students pursuing STEM careers. *PLOS ONE*, 17(2), e0263848. A
  visual/spatial *career-pathway* mapping exercise (not a content concept map)
  piloted with URM STEM undergrads, well-received, improved self-reported
  career-planning self-efficacy. Genuine evidence a diagram-based tool works
  with this demographic, but for career planning, not learning a technical
  concept — cite as adjacent, not as concept-map learning research.
- **Culturally relevant/sustaining pedagogy (Ladson-Billings, 1995, *American
  Educational Research Journal*, 32(3), 465–491; Paris, 2012, *Educational
  Researcher*, 41(3), 93–97) has no visual/diagram-specific extension in the
  literature** — searches turned up only general CRP/CSP theory, unrelated to
  diagrams specifically. This is a genuine gap, not an oversight; don't
  manufacture a connection that isn't there.
- **UDL's equity rationale is programmatic, not empirical**: CAST's own *UDL
  Guidelines* (cast.org) state explicitly that learners vary by language,
  culture, and background, and no single representation format is optimal for
  all — a real, citable rationale for offering diagrams as one of several
  representations, but it's design guidance, not a study with an effect size.
- **No study was found isolating concept-mapping/graphic-organizer
  interventions at HBCUs/HSIs specifically** — the STEM-persistence research at
  these institutions that does exist is about identity, faculty relationships,
  and culturally relevant pedagogy generally, not diagram-based teaching tools.

**Bottom line:** the claim "diagrams specifically help Black/Latino/URM
learners in ways beyond general cognitive-science benefits" is **not directly
supported by any study located in this research pass**. What's genuinely usable:
the ELL-graphic-organizer literature (real, moderate-to-large effects, plausible
generalization) and UDL's equity framing (real, but programmatic). The
stereotype-threat connection and the CRP/CSP connection are reasoned
possibilities worth naming honestly as such, not evidence to lean on.

## Synthesized shortlist (full version — see `diagram_selection.md` for the authoring-facing summary)

1. Non-sequential, many-to-many relationships between ≥3 ideas → `concept_map`.
   If ideas are independent facts with no cross-links, stay with bullets.
2. Real state-dependency between steps (output of one feeds the next, or the
   process repeats) → `workflow_linear`/`workflow_cyclical`. If steps are
   independent items with no dependency, use a plain bulleted checklist.
3. Exact/discrete values need to be looked up or compared precisely → `table`.
   Trends, structure, or spatial relationships need to be seen → diagram
   (Vessey's cognitive-fit rule).
4. Two-dimensional contrast (same axes, opposing values) → `compare_contrast`;
   don't diagram this as a concept map or workflow.
5. The "one-sentence test": if the relationship can be stated correctly and
   completely in one plain sentence a reader will retain without re-reading,
   it's a seductive detail as a diagram — skip it (Garner/Harp & Mayer).
6. Invisible system/runtime state (data flowing through pipeline stages,
   architecture components, program/data state changes) → diagram, and prefer
   pairing it with an active prompt (predict-the-next-step, trace-the-flow)
   over a purely passive illustration (Hundhausen et al.; Sorva).
7. Building/completing a diagram beats only viewing a finished one (Schroeder
   et al. 2018) — favor active-construction prompts over passive illustrations
   wherever the format allows it.
8. Dense new technical vocabulary is a real (if population-adjacent, not
   population-proven) reason to prefer a diagram/graphic organizer over prose —
   extending from the ELL graphic-organizer literature (Li et al. 2024).

## Full source list

- Novak & Gowin, *Learning How to Learn* (1984) — theory summary:
  https://users.cs.northwestern.edu/~paritosh/papers/sketch-to-models/Novak-Canas-TheoryUnderlyingConceptMapsHQ.pdf
- Nesbit & Adesope 2006 meta-analysis:
  https://www.sfu.ca/~jcnesbit/research/NesbitAdesope2006.pdf
- Larkin & Simon 1987:
  https://onlinelibrary.wiley.com/doi/10.1111/j.1551-6708.1987.tb00863.x
- Shah & Hoeffner 2002:
  https://link.springer.com/article/10.1023/A:1013180410169
- Mayer & Gallini 1990:
  https://psycnet.apa.org/record/1991-11731-001
- Garner, Gillingham & White 1989 / Harp & Mayer 1998 (seductive details
  overview): https://en.wikipedia.org/wiki/Seductive_details
- Guo & McTigue 2020 systematic review:
  https://link.springer.com/article/10.1007/s10648-020-09523-3
- Hundhausen, Douglas & Stasko 2002:
  https://faculty.cc.gatech.edu/~stasko/papers/jvlc02.pdf
- Sorva, Karavirta & Malmi 2013:
  https://dl.acm.org/doi/10.1145/2490822
- Vessey 1991 cognitive fit theory:
  https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1540-5915.1991.tb00344.x
- Vekiri 2002 (supplementary, graphical-display value review):
  https://link.springer.com/article/10.1023/A:1016064429161
- Scaife & Rogers 1996 (supplementary, external cognition):
  https://dl.acm.org/doi/10.1006/ijhc.1996.0048

### Added in the 2026-07-17 follow-up pass (recent research + population-specific research)

- Schroeder, Nesbit, Anguiano & Adesope 2018 (construct vs. study meta-analysis):
  *Educational Psychology Review*, 30(2), 431–455
- Anastasiou, Wirngo & Bagos 2024 (concept maps in science, K-12 meta-analysis):
  *Educational Psychology Review*, 36
- Wang, Wang, Xu & Xu 2025 (concept mapping in STEM, 2004-2023 meta-analysis):
  *International Journal of STEM Education*, 12, Art. 30
- Ponce, Mayer & Méndez 2025 (learner-generated vs. instructor-provided graphic
  organizers): *Educational Psychology Review*
- Mayer 2024 (CTML update): *Educational Psychology Review*, 36, Art. 8; Mayer
  2021, *Multimedia Learning* (3rd ed.), Cambridge University Press
- Schmader & Johns 2003 (stereotype threat and working memory): *J. of
  Personality and Social Psychology*, 85(3), 440–452
- Schmader, Johns & Forbes 2008 (integrated process model of stereotype
  threat): *Psychological Review*, 115(2), 336–356
- Beilock, Rydell & McConnell 2007 (stereotype threat, working memory,
  alleviation): *J. of Experimental Psychology: General*, 136(2), 256–276
- Li, Tong, Irby, Lara-Alecio & Rivera 2024 (instructional strategies for
  English learners' reading comprehension, incl. graphic organizers):
  *Bilingual Research Journal*
- Whitehead & Alves 2022 ("Future Life Map" career-mapping exercise with URM
  STEM undergraduates): *PLOS ONE*, 17(2), e0263848
- CAST *Universal Design for Learning Guidelines* (cast.org) — Representation
  principle, equity rationale
- Ladson-Billings 1995 (culturally relevant pedagogy, background only, no
  visual-specific extension found): *American Educational Research Journal*,
  32(3), 465–491
- Paris 2012 (culturally sustaining pedagogy, background only, no
  visual-specific extension found): *Educational Researcher*, 41(3), 93–97
