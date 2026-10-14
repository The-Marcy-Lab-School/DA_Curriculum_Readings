# Mayer's Multimedia Learning Principles Reference

Richard Mayer's cognitive theory of multimedia learning (extensively researched
since the late 1990s, one of the most replicated frameworks in instructional design)
gives concrete, testable rules for when combining text/images/narration helps vs.
hurts learning. Used by the `new-lesson-deck` outline step and referenced by the
instructional-quality checklist. Not every principle applies to every slide — use
judgment, but don't ignore ones that clearly do.

## The principles, applied to this system's slide types

### Multimedia principle — pair words with a relevant picture, not words alone
Mayer's foundational finding, and the one this system under-applies most in
practice (found via real deck review): people learn better from words + a
relevant graphic than from words alone, when the graphic actually depicts
the thing being described. This is a different question from whether a
*relationship* earns a diagram (`pedagogy/diagram_selection.md` answers
that one) — this is about whether a **concrete, visualizable object or
screen element** described in `bullets` or an `analogy`'s vehicle gets an
actual visual, or stays pure text purely by default.

Two calibration cases, both real gaps found in review: a slide describing a
terminal prompt's parts (username, folder, the `$`/`%` waiting for input)
stayed plain bullets with nothing visualizing the actual thing being
described, when a real terminal screenshot (or two, contrasting `$` and
`%`) would let Fellows *recognize* it instead of just reading about it. An
`analogy` whose vehicle is a concrete physical object (a labeled box, a
filing cabinet, a shelf) is similarly under-served by text alone — pair it
with `icon_hero` (a quick, in-system icon) or `image_prompt` (a fuller
illustration, placeholder now, real image dropped in later) rather than
leaving the reader to imagine the box from a sentence.

**When to reach for this**: the content describes something with a real
visual form — a physical object, a UI/screen element, a diagram-worthy
spatial layout — not an abstract relationship or process (that's still
`diagram_selection.md`'s call) and not every single slide (a slide whose
content is genuinely abstract or relational doesn't gain anything from a
forced stock photo). `image_path`/`image_prompt`/`icon_hero` already exist
on `content`/`case_study`/`code` — this is about actually reaching for them
when the content calls for it, through the same placeholder pipeline
(`image_requests.md`) every other image field already uses, not a new
mechanism.

### Coherence — exclude extraneous material
Don't add decoration, jokes, or extra facts that don't serve the objective just to
make a slide feel "fun." Every slide should earn its place against
`meta.learning_objectives`. (This doesn't conflict with the brand's fun/motivational
tone — see `BRAND_GUIDELINES.md` Voice & Tone — tone is about *how* you say something
necessary, coherence is about *not saying* things that aren't.)

### Signaling — cue the organization of the material
Use the kicker bands (`case_study`, `check_understanding`, `interview_prep` all have
one) and headings consistently so Fellows can tell at a glance what kind of moment
they're in. Don't invent one-off visual patterns for a single slide.

### Redundancy — don't show identical text and narration at the same time
Keep on-slide `bullets`/`prompt` text terse (see the one-line-bullet guidance in
`content_spec/SCHEMA.md`); put the fuller explanation in `notes` for the instructor to
say aloud, not duplicated verbatim on the slide. If notes and bullets say the same
thing word-for-word, that's a redundancy violation, not thoroughness.

### Spatial contiguity — keep related words and visuals close together
Already enforced by the layout engine: `workflow_linear`/`workflow_cyclical`/
`concept_map` labels sit directly on or next to their nodes (`template/diagrams.py`),
not in a separate legend. Keep this pattern when authoring new content — don't
describe a diagram's parts in a bullet list far away from the diagram itself.

### Temporal contiguity — present corresponding words and visuals at the same time
Relevant when using `motion_note` build animations: if a bullet is revealed
progressively alongside a diagram/image appearing, they should reveal together, not
minutes apart. Note this in the `motion_note` text if it matters for a specific slide.

### Segmenting — break content into learner-paced chunks
This system's one-slide-per-concept convention already does this. Don't cram two
distinct ideas onto one `content` slide because they're "related" — give each its own
slide (and a `transition` between them, see `content_spec/SCHEMA.md`).

### Pre-training — introduce names/characteristics of key concepts before the main lesson
Ties directly to the "define technical terms on first use" rule and `meta.glossary`
(see `content_spec/SCHEMA.md`) — a term should be named and defined *before* the slide
that uses it to explain something more complex, not simultaneously.

### Modality — prefer spoken narration over on-screen text for explanation
This is the strongest argument for keeping on-slide text minimal and putting the real
explanation in speaker `notes` (which the instructor speaks aloud) rather than as a
dense paragraph on the slide itself.

### Personalization — conversational tone outperforms formal tone for learning
Supports the brand's fun/motivational voice (`BRAND_GUIDELINES.md`) with actual
research backing, not just a style preference — conversational framing in `notes`
("here's the thing that trips people up...") measurably outperforms dry formal
phrasing for retention.

## Sources

- Mayer, R. E. *Multimedia Learning* (Cambridge University Press) — the foundational
  synthesis of this research program across the principles above.
- Mayer, R. E., & Moreno, R. (2003). "Nine Ways to Reduce Cognitive Load in
  Multimedia Learning." *Educational Psychologist*, 38(1), 43-52.
