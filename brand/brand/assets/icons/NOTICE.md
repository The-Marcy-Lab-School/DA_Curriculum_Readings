# Icon assets — source and license

These PNGs are recolored, rasterized renders of icons from
[Tabler Icons](https://github.com/tabler/tabler-icons) (outline style),
licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/main/LICENSE).

(Previously sourced from Google's [Material Symbols](https://github.com/google/material-design-icons)
under Apache License 2.0 — switched to Tabler Icons for a more modern, friendly,
geometric family with broader concept coverage; see "Icons" in
`brand/BRAND_GUIDELINES.md`.)

Regenerated via `template/prepare_icons.py` (fetch → recolor → rasterize via
LibreOffice → key out the background to transparency), driven by the semantic
name → glyph catalog in `template/icon_manifest.py`. Never generated at
deck-build time — `generator/build_deck.py` only ever reads these committed
PNGs via `template/helpers.py:add_icon`, with no LibreOffice dependency at
runtime. Re-run `prepare_icons.py` (only when adding/changing an icon or
color) to regenerate.
