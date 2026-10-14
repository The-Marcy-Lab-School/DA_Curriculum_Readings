# Marcy Lab School — Data Analytics Fellowship Brand Guidelines

Machine-readable source of truth: [`tokens.json`](tokens.json). If a value here and in `tokens.json` ever disagree, `tokens.json` wins — update this file to match. Never hand-edit color hexes into a slide template; reference a token role.

## 1. Where this palette came from

Colors were extracted directly from the live `marcylabschool.org` CSS (2026-07-10), **not** from the old `Marcy Lab Presentation Template_2023.pptx`. The old deck's theme accents (`058DC7, 50B432, ED561B, EDEF00, 24CBE5, 64E572`) are the default Highcharts.js chart palette left in an unedited PowerPoint theme — coincidence, not brand. The only thing carried forward from the old deck is the cream/ink wordmark lockups and the quote-mark graphic (`assets/logo/`), which are genuine brand assets.

## 2. Voice & Tone

Fun, energetic, and motivational by default — this is a fellowship for young adults
building a new career, and the material should feel like it, not like a textbook.
Speaker `notes` especially should read conversationally ("here's the thing that trips
people up...") — research backs this (the "personalization principle," see
`pedagogy/mayers_multimedia_principles.md`), it's not just a style preference.

**One deliberate exception**: `interview_prep` slides and any `check_understanding`
`answer` explanation should read more serious and professional — the stakes there are
real (an actual job interview), so this is the one place to sound like a sharp career
coach rather than a fun classmate. Don't undercut the polish of your best,
most-quotable interview-prep line with a joke.

Practical rules of thumb:
- Speak directly to the Fellow ("you'll," "your," not "students will").
- Prefer concrete, real-world stakes over abstract description (this is also why
  `case_study` and realistic `code` scenarios matter — see
  `pedagogy/industry_domains.md`).
- Normalize difficulty rather than implying the material should feel easy — see the
  belonging/stereotype-threat guidance in `pedagogy/engagement_techniques.md`.
- Keep it fun without being flippant about anything career-real — `interview_prep`
  and `answer` blocks are the tell: if it wouldn't sound right coming from a career
  coach in a mock interview, it's too casual for that specific content.

### AI-Generated-Writing Tells

This content is authored by an LLM, so it's worth naming the specific tells
that read as generated rather than written — both the deterministic slice
`qa/contrast_check.py` catches automatically, and the judgment calls left to
the instructional-quality subagent, live here together so the two don't
drift apart.

**Caught automatically (`_check_ai_writing_tells`, `_check_no_typed_arrows`)**:
- Hand-typed unicode arrows (`→`) or emoji (`✅❌✓✨🔥💡🚀`) standing in for a
  real icon/connector shape — use `template/icon_manifest.py`/
  `add_arrow_connector` instead, never typed characters.
- 3+ em-dashes in a single field — a genuine density tell, even though this
  codebase's own prose uses em-dashes moderately throughout and that's fine;
  it's the pile-up in one field that reads as generated.
- A short list of common filler phrases ("let's dive in," "delve into,"
  "unleash the power of," "game-changer," "at the end of the day," "when it
  comes to," "it's important to note that") — reach for something specific
  to this content instead.

**Left to judgment (Bucket 6, "Engagement & Gamification")**: single
ambiguous words like *leverage*, *robust*, *seamless*, *unlock*, *elevate* —
this curriculum genuinely uses several of these literally (a robust test
suite, leveraging a library) often enough that hard-banning them would flag
more real usage than real tells. Judge each in context: is the word doing
real work, or padding a sentence that would read the same without it?

**The broader tell, not mechanically checkable**: hedge-everything phrasing,
a sentence that restates its own previous sentence in different words, or
a summary that could apply to literally any lesson ("this is an important
skill you'll use throughout your career") instead of saying something true
and specific about *this* skill. When in doubt, read the sentence out loud —
if it sounds like something a person would actually say to a room of
Fellows, it's fine; if it sounds like the opening of a blog post, rewrite it.

## 3. Color

| Role | Token | Hex | Use |
|---|---|---|---|
| Primary light background | `cream_50` | `#FFFCF7` | Default slide background |
| Secondary light background | `cream_100` | `#FFF6E4` | Alternate section background |
| Card / callout background | `cream_200` | `#FFEECA` | Legacy card bg — being phased out in favor of the named callout fills below (`sage_300`/`blue_100`/`gold_300`/`red_100`), which always pair with a darker same-hue border |
| Brand deep green | `forest_900` | `#264326` | Section-transition backgrounds; **emphasis color** for one key term/phrase on a light bg (see "Mostly black/white text" below); green callout border |
| Brand mid green | `forest_600` | `#327A5F` | Secondary accents, muted/secondary text (subtitles, captions) |
| Sage | `sage_300` | `#A6C2B4` | Green callout/label-band fill (pair with `forest_900` border) |
| Blue | `blue_700` | `#2274B5` | Links, secondary accent, workflow-diagram nodes; blue callout border |
| Light blue | `blue_100` | `#DEEAF4` | Blue callout fill (pair with `blue_700` border) |
| Deep blue | `blue_900` | `#2F5A8B` | Alternate section background |
| Orange | `orange_600` | `#EF541E` | Large/bold accents only (headlines, icons) — fails AA at normal text size, see table below |
| Gold | `gold_500` | `#EEBC32` | Code keywords, highlight badges on dark backgrounds; **emphasis color** for one key term/phrase on a dark bg |
| Gold, darker | `gold_700` | `#83671C` | Gold callout border (pair with `gold_300` fill — `gold_500` itself is too close in value to `gold_300` to read as a border) |
| Gold, lighter | `gold_300` | `#FECC5B` | Gold callout/kicker fill (pair with `gold_700` border) |
| Red | `red_700` | `#C92929` | Danger/misconception callouts on light backgrounds only; red callout border |
| Light red | `red_100` | `#F7DFDF` | Red callout fill (pair with `red_700` border) |
| Pink | `pink_300` | `#F8BAC9` | Code strings, soft accent on dark backgrounds |
| Ink (near-black) | `ink_900` | `#261F1D` | **Default body AND heading text on light bg** — titles are ink_900, not a brand color, by default (see "Mostly black/white text" below); code-slide background |
| Grays | `gray_100`–`gray_500` | see `tokens.json` | Dividers, disabled states, code comments |

### Verified accessible pairs (WCAG 2.1/2.2 relative-luminance formula — computed, not eyeballed)

| Background | Text | Ratio | Level |
|---|---|---|---|
| `cream_50` | `ink_900` | 15.83 | AAA |
| `cream_50` | `forest_900` (headings) | 10.72 | AAA |
| `cream_50` | `blue_700` (links) | 4.85 | AA normal |
| `cream_50` | `red_700` (danger) | 5.35 | AA normal |
| `cream_50` | `orange_600` | 3.44 | **AA large only** — 24pt+/14pt bold+ |
| `cream_50` / `cream_100` | `forest_600` (muted text) | 5.02 / 4.79 | AA normal |
| `cream_200` (card/band bg) | `forest_600` (muted text) | 4.49 | **AA large only** — must be bold 14pt+ or 18pt+ regular; found via accessibility subagent review, not originally in this table |
| `forest_900` | `cream_50` / white | 10.72 / 10.98 | AAA |
| `forest_900` | `gold_500` | 6.21 | AA normal |
| `ink_900` (code bg) | `cream_50` default text | 15.83 | AAA |
| `ink_900` | `gold_500` (keyword) | 9.16 | AAA |
| `ink_900` | `pink_300` (string) | 9.92 | AAA |
| `ink_900` | `gray_500` (comment) | 8.22 | AAA |
| `ink_900` | `blue_tint_code #5996C7` (function) | 5.10 | AA normal |
| `ink_900` | `forest_tint_code #659B87` (number) | 5.09 | AA normal |
| `sage_300` (green callout fill) | `ink_900` | 8.48 | AAA |
| `blue_100` (blue callout fill) | `ink_900` | 13.26 | AAA |
| `gold_300` (gold callout fill) | `ink_900` | 10.8 | AAA |
| `red_100` (red callout fill) | `ink_900` | 12.79 | AAA |

**Do not use** (checked, fails AA at normal size): `gold_500` on `cream_50` (1.73), `orange_600` on `forest_900` at small size (3.11), `red_700` on `ink_900` at small size (2.96), `forest_600`/`blue_700` directly on `blue_900` (~1.4). Full list in `tokens.json → do_not_use`.

Never convey meaning by color alone (e.g. "correct answer is the green one") — pair color with an icon, label, or shape per WCAG 1.4.1.

### Light-mode code

Code slides don't have to be dark — see `theme_variant: "light"` on the `code` slide
type (`content_spec/SCHEMA.md`). Verified pairs against the `gray_100` light-code
background: `ink_900` default text (13.9, AAA), `forest_900` keywords (9.41, AAA),
`red_700` strings (4.70, AA), `blue_900` comments italic (6.09, AA). Dark
(`ink_900` card) remains the default — light is an option for lower visual weight,
not a replacement.

### Callout boxes & shapes

Any drawn card, band, or panel on a slide (a check-for-understanding label, a case
study's kicker strip, a compare/contrast panel, or any future callout) follows one
rule: **a light-tint fill with a darker shade of the *same* color as the border**,
weighted **3-5pt** — never a bare solid fill with no border, and never a fill/border
pairing from two unrelated hues. Four named styles are defined in
`tokens.json → callout_styles`, each already verified for text contrast (see table
above) and for border-vs-fill visibility (WCAG 1.4.11, target ≥3:1):

| Style | Fill | Border | Use |
|---|---|---|---|
| Green | `sage_300` | `forest_900` (4pt) | Default/neutral label bands (check-for-understanding, interview prep, answer-reveal) |
| Blue | `blue_100` | `blue_700` (4pt) | Informational asides; one side of a compare/contrast |
| Gold | `gold_300` | `gold_700` (4pt) | Highlight/important-point emphasis (case-study kicker); the other side of a compare/contrast |
| Red | `red_100` | `red_700` (4pt) | Misconception / common-mistake warning callouts |

Text drawn on any of these fills is `ink_900` (near-black) per the rule below — don't
reach for white text on these, they're light fills. Pick whichever style fits the
box's actual purpose and rotate across a deck rather than defaulting to the same one
every time; `template/helpers.py:set_fill(shape, theme, <fill_role>,
outline_role=<border_role>)` draws both in one call.

### Mostly black/white text — color is for emphasis, not decoration

Body and heading text should read `ink_900` (near-black) on light backgrounds and
`cream_50` (near-white) on dark backgrounds **by default** — not a brand color.
Titles are no exception: `roles.heading_on_light` is `ink_900`, not `forest_900` —
a slide title is black unless a specific word or phrase in it is being deliberately
called out.

Reserve color for **emphasizing one key phrase or term** — inside a title, a bullet,
a quote, or anywhere else free text renders — using `**double-asterisks**` around it,
the same way `` `backticks` `` mark inline code (see "Inline code formatting" and
"Inline emphasis" in `content_spec/SCHEMA.md`). `template/helpers.py:add_rich_runs`
renders an emphasized span bold, in `roles.emphasis_on_light` (`forest_900`) on a
light background or `roles.emphasis_on_dark` (`gold_500`) on a dark one — both
already verified pairs (10.72 and 6.21 respectively, see above). Use it sparingly:
one emphasized phrase per title/line at most, on the word that actually carries the
slide's takeaway — coloring everything defeats the point of reserving color for
emphasis at all.

## 4. Typography

The live site's actual brand fonts — **ABC Diatype** (body) and **Practice Display** (headings) — are premium/licensed and not installable in Google Slides. By request, titles and body copy use **Helvetica** directly rather than a Google Fonts substitute; quotes and captions get their own distinct serif voice (Fraunces, the same face that would otherwise have substituted for Practice Display) so those moments read differently from the rest of the deck.

| Role | Font | Notes |
|---|---|---|
| Titles / headings | **Helvetica** | Bold 700. **Caveat**: Helvetica is not a Google Font. If the viewer's Slides environment doesn't have it available, it will render with a substitute — typically **Arial**, which is metric-compatible, so layout/line-breaks won't shift even if the exact letterforms differ. Arial is recorded as the explicit fallback in `tokens.json`. |
| Body | **Helvetica** | Regular 400, Bold 700 for emphasis. Same Slides-availability caveat as titles. |
| Quotes & captions only | **Fraunces** | Italic 500 for quotes, Regular 400 for captions. Deliberately reserved for just these two contexts — a serif "aside" voice, never used for titles/body/code. Free Google Font, renders reliably everywhere. |
| Code | **Roboto Mono** | Regular 400 / Medium 500. Native Google Slides font, ships everywhere, no install needed. |

Type scale (in points, see `tokens.json → type_scale_pt`): Title 40 / H1 32 / H2 24 / Body 18 / Body-small 14 / Code 16 / Caption 12 / **Diagram label 30**. Never set body text below 14pt — Fellows will be reading these projected in a classroom. Diagram labels (`workflow_linear`/`workflow_cyclical` step labels, `concept_map` hub/satellite labels) are set at 30pt+ specifically because they're read at a glance from across a room — keep the label text itself short (1-3 words) since it renders outside a small node in a space-constrained radial/linear layout, not inside it; see each slide type's entry in `content_spec/SCHEMA.md`.

Inline code terms in any bullet/title/prompt/quote should be wrapped in
`` `backticks` `` — they render in Roboto Mono automatically (font changes only, not
color) via `template/helpers.py:add_rich_runs`. A key phrase to emphasize (in a
title especially) wraps in `**double-asterisks**` instead — renders bold, in the
brand emphasis color (see "Mostly black/white text" above). Both spans can appear
in the same line; see "Inline code formatting" and "Inline emphasis" in
`content_spec/SCHEMA.md`.

## 5. Logo & imagery

- `assets/logo/wordmark_ink_on_light.png` — use on `cream_50`/`cream_100`/light backgrounds.
- `assets/logo/wordmark_cream_on_dark.png` — use on `forest_900`/`ink_900`/`blue_900`/dark backgrounds.
- `assets/logo/quotemark_decorative.png` — oversized quotation glyph for the Quote/Critical-Thinking layout only.
- Clear space: minimum 1x the wordmark's cap-height on all sides. Never stretch, recolor, or rotate the wordmark.
- Photography: none is bundled (the old deck's stock photos were context-specific, not brand assets). When an instructor adds a photo, treat it as full-bleed on an image-layout slide with a `forest_900` 30%-opacity duotone-style overlay strip at the bottom for a caption, so photos read as "on brand" without a fixed photo library.
- Icons: **Tabler Icons (outline weight)** exclusively — free (MIT), one coherent 2px-stroke rounded-cap geometric family across 200+ concepts (`template/icon_manifest.py` is the full catalog), consistent, and easy to tint programmatically to a token color. Replaced Google Material Symbols Outlined for a more modern/friendly/geometric feel with a broader vocabulary — see `template/prepare_icons.py`. Do not mix in emoji, a "filled"-weight icon, or a second icon set within one deck.

### AI-generated illustrations (`image_kind: "illustration"`, the default)

Cartoon / flat-illustration style, not photorealistic — fun and energetic, matching
the brand voice (section 2), not stock-photo stiff. Whenever a prompt depicts
people, represent them with real diversity — visible disability and mobility aids
(e.g. a wheelchair user), gender, race, and religion where it fits the scene — and
vary who's centered from image to image across a deck rather than repeating the
same lineup every time. The goal is Fellows regularly seeing themselves reflected,
not a forced one-of-each checklist in every image. See "Image fields" in
`content_spec/SCHEMA.md`.

### Real tool/product logos (`image_kind: "logo"`)

A pandas, scikit-learn, SQL, or Databricks logo is a trademark, not a scene —
**never AI-generate one** (image generators routinely get real logos wrong or
distorted). Source the actual official asset from the tool's brand/press page and
drop it straight at `image_path`. This is the one image category that's exempt
from the "illustrated, not photorealistic" rule above — a real logo is used
exactly as published, unmodified.

## 6. Motion & animation — honest scope

`python-pptx` (our generation library, since decks are produced locally and imported into Slides rather than built live via the Slides API) has no reliable API for element build/entrance animations, and Google Slides does not faithfully preserve PowerPoint animation XML on import. Rather than ship a fragile, half-working animation feature, every deck spec carries an optional per-slide `motion_note` (e.g. "reveal bullets one-by-one," "fade in each workflow step") that becomes a short checklist an instructor applies manually in the Slides UI after import — typically under 5 minutes per deck. **No slide-level transition is set at generation time either** — an earlier version applied a simple fade transition to every slide automatically, but real deck review found this read as distracting rather than polished once every single slide dissolved into the next, so it was removed entirely; every generated deck ships with zero slide motion, verified by `qa/contrast_check.py`'s motion-check mode (pass it a rendered `.pptx` path). Step-level build animations remain the one deliberately manual part of this system.

## 7. Accessibility posture (WCAG 2.2 AA target)

See [`qa/accessibility_checklist.md`](../qa/accessibility_checklist.md) for the full checklist and [`qa/contrast_check.py`](../qa/contrast_check.py) for the automated linter that runs against every generated deck before the human/subagent review pass.
