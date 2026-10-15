#!/usr/bin/env python3
"""QA pass for a Marcy Lab reading `index.html` file. Stdlib only — no deps.

Usage:
    python3 qa/reading_qa.py Mod1/loops-conditionals/reading-1-insidetheinside/index.html
    python3 qa/reading_qa.py Mod1/**/index.html          (shell-expanded glob)

Exits non-zero if any ERROR-level finding exists (WARN-level findings are
judgment calls a human/QA agent should still read, not hard fails).
"""
import re
import sys
import glob
import json
import ssl
import urllib.request
import urllib.error
from pathlib import Path

_INSECURE_CTX = ssl.create_default_context()
_INSECURE_CTX.check_hostname = False
_INSECURE_CTX.verify_mode = ssl.CERT_NONE

BRAND_HEXES = {
    "#FFFCF7","#FFF6E4","#FFEECA","#264326","#327A5F","#A6C2B4","#2274B5","#2F5A8B",
    "#EF541E","#EEBC32","#FECC5B","#83671C","#C92929","#F7DFDF","#F8BAC9","#261F1D",
    "#E9EFEB","#E4E7EB","#E1E3E0","#CFD9E3","#B3BBB0","#DEEAF4","#FFFFFF","#FFF","#000",
    "#FFBF47",  # focus ring
}

BANNED_PHRASES = [
    r"\bmodule\s*\d+\b", r"\bmod\s*\d+\b",
    r"before\s+the\s+lecture", r"before\s+lecture",
    r"upcoming\s+reading", r"upcoming\s+lecture",
    r"required\s+bridge", r"bridge\s+to\s+(the\s+)?lecture", r"bridge\s+to\s+(the\s+)?project",
    r"let'?s\s+dive\s+in", r"delve\s+into", r"unleash\s+the\s+power\s+of",
    r"game-?changer", r"at\s+the\s+end\s+of\s+the\s+day", r"when\s+it\s+comes\s+to",
    r"it'?s\s+important\s+to\s+note\s+that",
]
BANNED_UNICODE = ["→","✅","❌","✓","✨","🔥","💡","🚀"]
BANNED_ARROW_ENTITIES = ["&rarr;", "&#8594;", "&#x2192;", "&larr;", "&rArr;"]

EXPORT_BUTTON_HINTS = ("md","json","txt","copy","submit","export","selectall","show","import","resume")


def find(pattern, text, flags=re.I):
    return re.findall(pattern, text, flags)


def check_banned_phrases(text):
    findings = []
    for pat in BANNED_PHRASES:
        for m in re.finditer(pat, text, re.I):
            findings.append(("ERROR", f"banned phrase near: ...{text[max(0,m.start()-20):m.end()+20]}..."))
    for ch in BANNED_UNICODE:
        if ch in text:
            findings.append(("ERROR", f"banned literal character used instead of a real icon: {ch}"))
    for entity in BANNED_ARROW_ENTITIES:
        if entity in text:
            findings.append(("ERROR", f"banned typed-arrow HTML entity (renders the same as a literal arrow): {entity}"))
    # 3+ em-dashes in a single line is the density tell, not a single stray one
    for line in text.splitlines():
        if line.count("—") >= 3:
            findings.append(("WARN", f"em-dash pileup (3+) in one line: {line.strip()[:80]}"))
    # ASCII "->" is the same typed-arrow problem in disguise (e.g. "10 -> 20 -> None"
    # in a trace/summary string). A real Python return-type annotation
    # ("def foo(x: int) -> str:") is the one legitimate use — skip only that shape.
    PY_RETURN_TYPE = re.compile(r"\)\s*->\s*[\w\[\], .\"']+\s*:")
    # HTML comment closers ("-->") trivially contain "->" as a substring — strip
    # comments out first so an authoring note like "<!-- LEFT: ... -->" never
    # false-positives here.
    text_no_comments = re.sub(r"<!--.*?-->", "", text, flags=re.S)
    for line in text_no_comments.splitlines():
        if "->" not in line:
            continue
        if PY_RETURN_TYPE.search(line):
            continue
        findings.append(("WARN", f"possible typed arrow ('->') outside a Python return-type annotation — spell it out ('then'/'leads to') unless this is real command output: {line.strip()[:90]}"))
    return findings


def check_headings(text):
    tags = re.findall(r"<h([1-6])[ >]", text, re.I)
    findings = []
    if tags.count("1") != 1:
        findings.append(("ERROR", f"expected exactly one <h1>, found {tags.count('1')}"))
    prev = None
    for t in tags:
        t = int(t)
        if prev is not None and t > prev + 1:
            findings.append(("ERROR", f"heading level skips from h{prev} to h{t}"))
        prev = t
    return findings


def check_font_sizes(text):
    findings = []
    for m in re.finditer(r"font-size\s*:\s*([\d.]+)(px|rem|pt)", text, re.I):
        val, unit = float(m.group(1)), m.group(2).lower()
        px = val if unit == "px" else val*16 if unit == "rem" else val*1.333
        if px < 14:
            findings.append(("ERROR", f"font-size below 14px floor: {m.group(0)} (~{px:.1f}px)"))
    return findings


def check_unknown_colors(text):
    findings = []
    for m in re.finditer(r"#[0-9A-Fa-f]{3,6}\b", text):
        hexval = m.group(0).upper()
        if hexval not in {h.upper() for h in BRAND_HEXES}:
            findings.append(("WARN", f"color not in the brand palette, verify contrast manually: {hexval}"))
    return findings


def check_alt_text(text):
    findings = []
    for m in re.finditer(r"<img\b[^>]*>", text, re.I):
        if not re.search(r'alt\s*=\s*"[^"]*"', m.group(0), re.I):
            findings.append(("ERROR", f"<img> missing alt text: {m.group(0)[:80]}"))
    return findings


def check_links(text):
    findings = []
    urls = set(re.findall(r'(?:href|src)\s*=\s*"(https?://[^"]+)"', text, re.I))
    for url in urls:
        if "youtube.com/embed" in url or "youtube.com/iframe_api" in url:
            continue  # known-good, skip network call for speed
        findings.extend(check_one_url(url))
    return findings


def _http_error_finding(code, url):
    if code == 999:
        # LinkedIn's (and a few other sites') non-standard anti-bot status for
        # automated requests — observed to be intermittent and inconsistent
        # (sometimes a plain 999, sometimes an SSL-level rejection instead),
        # not a real broken link. Always a WARN, never a hard failure.
        return ("WARN", f"link returned 999 (likely anti-bot rate-limiting, not a dead link): {url}")
    if code == 404 and re.match(r"https?://github\.com/[^/]+/[^/]+/?$", url):
        # GitHub returns 404 (not 403) for a private repo an unauthenticated
        # request can't see — indistinguishable from a genuinely nonexistent
        # repo without credentials this script doesn't have. Every student
        # submission repo is deliberately private, so this fires constantly
        # and correctly for real links. WARN, not a hard failure.
        return ("WARN", f"github.com repo link returned 404 — likely just private (unauthenticated check can't tell), not necessarily broken: {url}")
    if code >= 400 and code != 405:  # some sites reject HEAD; 405 isn't a dead link
        return ("ERROR", f"link returned {code}: {url}")
    return None


def check_one_url(url, _retried=False):
    req = urllib.request.Request(url, method="HEAD", headers={"User-Agent": "Mozilla/5.0 (reading-qa)"})
    try:
        urllib.request.urlopen(req, timeout=8)
        return []
    except urllib.error.HTTPError as e:
        if e.code == 999 and not _retried:
            return check_one_url(url, _retried=True)
        finding = _http_error_finding(e.code, url)
        return [finding] if finding else []
    except urllib.error.URLError as e:
        if not isinstance(getattr(e, "reason", None), ssl.SSLError):
            if not _retried:
                return check_one_url(url, _retried=True)
            return [("WARN", f"link could not be verified ({e}): {url}")]
        try:
            urllib.request.urlopen(req, timeout=8, context=_INSECURE_CTX)
            return []
        except urllib.error.HTTPError as e2:
            if e2.code == 999 and not _retried:
                return check_one_url(url, _retried=True)
            finding = _http_error_finding(e2.code, url)
            return [finding] if finding else []
        except Exception as e2:
            if not _retried:
                return check_one_url(url, _retried=True)
            return [("WARN", f"link could not be verified even with relaxed SSL ({e2}): {url}")]
    except Exception as e:
        if not _retried:
            return check_one_url(url, _retried=True)
        return [("WARN", f"link could not be verified ({e}): {url}")]


def check_export_wiring(text):
    findings = []
    button_ids = re.findall(r'<button[^>]*\bid="([^"]+)"', text, re.I)
    candidates = [b for b in button_ids if any(h in b.lower() for h in EXPORT_BUTTON_HINTS)]
    for bid in candidates:
        if not re.search(re.escape(bid), text.split("<script", 1)[-1] if "<script" in text else ""):
            findings.append(("WARN", f"button id '{bid}' looks like an export/submit control but no matching JS reference found"))
    # every declared export button should correspond to a download() or buildSubmitURL() call somewhere,
    # possibly through a local alias (e.g. `const K = ReadingKit`), so just check the method names exist
    if candidates and "ReadingKit" in text:
        if not re.search(r"\.(download|buildSubmitURL|toMarkdown|toText)\s*\(", text):
            findings.append(("ERROR", "export/submit buttons present but no ReadingKit export/submit call found"))
    return findings


def check_time_estimate(text, word_count):
    findings = []
    m = re.search(r"~?(\d+)(?:[–-](\d+))?\s*min", text, re.I)
    if not m:
        findings.append(("WARN", "no visible time estimate pill found (e.g. '~15 minutes')"))
        return findings
    lo = int(m.group(1))
    reading_minutes = word_count / 200
    if reading_minutes > lo * 2.5:
        findings.append(("WARN", f"stated time ~{lo} min looks low next to ~{word_count} words (~{reading_minutes:.0f} min reading alone, before activities/video)"))
    return findings


def visible_text(html):
    text = re.sub(r"<script.*?</script>", " ", html, flags=re.S | re.I)
    text = re.sub(r"<style.*?</style>", " ", text, flags=re.S | re.I)
    text = re.sub(r"<[^>]+>", " ", text)
    return text


def check_copyright(text):
    if "marcy" not in text.lower() or "property" not in text.lower():
        return [("ERROR", "no copyright/ownership footer found (expected an 'is the property of The Marcy Lab School...' line)")]
    return []


def check_skills_callout(path, text):
    meta_path = Path(path).parent / "reading.meta.json"
    if not meta_path.exists():
        return [("WARN", "no sibling reading.meta.json found — can't verify skills are tagged")]
    try:
        meta = json.loads(meta_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as e:
        return [("ERROR", f"reading.meta.json is not valid JSON: {e}")]
    skills = meta.get("skills") or []
    if not skills:
        return [("ERROR", "reading.meta.json has no 'skills' array — every reading must be tagged to specific skills.json objectives")]
    if "skills you'll practice" not in text.lower() and "skills you will practice" not in text.lower():
        return [("ERROR", "reading.meta.json lists skills, but no visible \"Skills you'll practice\" callout found in the page — metadata and the visible callout must always be written together")]
    return []


def check_submission_setup_directions(text_lower):
    if "submit for credit" not in text_lower:
        return []  # not every reading is required to have this yet during a transition; only check if present
    if "first time submitting" not in text_lower and "use this template" not in text_lower:
        return [("ERROR", "a 'Submit for credit' block exists but no first-time-setup directions (template link, "
                           "add instructor as collaborator, etc.) were found — students need self-service setup steps, "
                           "not just an assumption their repo already exists")]
    return []



# ---------------------------------------------------------------------------
# Ported from the SWE fellowship's qa/reading_qa.py on 2026-10-14, at Angelica's
# request to hold DA readings to the same language bar. Two SWE checks are
# deliberately NOT ported: check_no_recall_section (DA readings are supposed to
# have a recall section) and the 5-minute embedded-video cap (DA readings run
# 25-50 minutes, so a 10-12 minute embed is proportionate - see
# check_video_duration below, which carries DA's own limit).
# ---------------------------------------------------------------------------

AI_TELL_PHRASES = [
    r"\bin today'?s\s+(?:world|market|landscape|economy|digital|fast|business|data)\b", r"\bin the (?:ever[- ]evolving|fast[- ]paced|digital)\b",
    r"\bit'?s worth noting\b", r"\blet'?s explore\b", r"\bdive deep(?:er)?\b",
    r"\bunlock(?:s|ing)?\s+the\b", r"\bpowerful tool\b", r"\bwhether you'?re\b.{0,20}\bor\b",
    r"\bin conclusion\b", r"\bin summary\b", r"\bplays a (?:crucial|vital|key) role\b",
]


WRITING_GUIDE_PATTERNS = [
    (r"\bit (?:is|'s) there (?:so that|to)\b",
     "rule 6: name the actual code element and give it an active verb, not \"it is there so that\""),
    (r"\bthe check\b(?=\s+(?:is|was|exists|isn'?t|does|doesn'?t)\s+(?:there|for|to|not)\b)",
     "rule 6: \"the check\" standing in for code nobody named — name the `if` statement, the guard, "
     "the lookup. (A membership check or a check-in code is a real noun and fine.)"),
    (r"\bis not (?:there )?to [a-z ]{3,40}\. it is\b",
     "rule 5: \"not X, it is Y\" — state the positive rule first and see if the negation still has a job"),
    (r"\b(?:this|that|it) (?:is|'s) (?:confusing|unclear|bad|messy|ugly|wrong)\b(?![^.]{0,80}\b(?:because|so that|which means|a reader|a user)\b)",
     "rule 2: name the consequence — what would a person wrongly believe or do? — not just the judgment"),
    (r"\bnot quite[.,!]?\s*(?:try again)?\s*[\"<]",
     "rule 2/6: generic feedback. Say which rule the answer missed and what follows from it"),
    (r"\b(?:nope|incorrect)[.!]\s*[\"<]",
     "rule 2/6: generic feedback. Say which rule the answer missed and what follows from it"),
]


POSITIONAL_CODE_REF = re.compile(
    r"\b(?:the\s+)?(?:code|example|snippet|block|version|function|program|output|chain|line)\s+"
    r"(?:above|below)\b"
    r"|\b(?:above|below)\s+it\b"
    r"|\bshown\s+(?:above|below)\b"
    r"|\bthe\s+`[^`]+`\s+above\b",
    re.I)


GENDERED_PRONOUNS = re.compile(r"\b(?:she|he|her|hers|him|his|herself|himself)\b", re.I)


_VIDEO_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (reading-qa)"


def feedback_text(html):
    """Student-facing prose that lives inside the inline <script>.

    visible_text() strips <script> wholesale, so quiz feedback, hints and
    reveal strings were invisible to every prose check — and those are exactly
    where reasoning gets compressed hardest, per Ben's guide. This pulls the
    string literals back out so the prose checks can see them. Code-ish
    literals (selectors, ids, single words) are skipped: a real sentence has
    a space and some length.
    """
    out = []
    for m in re.finditer(r"<script\b[^>]*>(.*?)</script>", html, re.S | re.I):
        body = m.group(1)
        for lit in re.findall(r'"((?:[^"\\]|\\.)*)"|\'((?:[^\'\\]|\\.)*)\'', body):
            val = lit[0] or lit[1]
            if len(val) > 25 and " " in val.strip():
                out.append(re.sub(r"<[^>]+>", " ", val))
    return "\n".join(out)


def narrative_words(html):
    """Words a reader actually reads at prose speed.

    visible_text() counts everything on the page - code blocks, SVG labels,
    the header, the footer, button text - and nobody reads a code listing at
    200 wpm. Comparing that total against the stated time is the same bad
    arithmetic that rated an approved 14-minute reading at 19 minutes.
    """
    body = re.sub(r"<(script|style|svg|footer|header)\b.*?</\1>", " ", html, flags=re.S | re.I)
    body = re.sub(r"<pre\b.*?</pre>", " ", body, flags=re.S | re.I)
    body = re.sub(r"<code\b.*?</code>", " ", body, flags=re.S | re.I)
    return len(re.sub(r"<[^>]+>", " ", body).split())

def _count_syllables(word):
    word = word.lower()
    vowel_groups = re.findall(r"[aeiouy]+", word)
    count = len(vowel_groups)
    if word.endswith("e") and not word.endswith("le") and count > 1:
        count -= 1
    return max(count, 1)

def _fetch_watch_page(video_id):
    req = urllib.request.Request(f"https://www.youtube.com/watch?v={video_id}", headers={"User-Agent": _VIDEO_UA})
    with _urlopen_relaxed(req) as resp:
        return resp.read().decode("utf-8", errors="ignore")


def check_reading_level(html):
    # Strip anything that isn't real prose the student reads continuously:
    # code blocks, the technical-vocabulary flip cards (explicitly allowed to
    # run more technical per the format's own rule), and quiz/button/label UI
    # chrome, which isn't prose either.
    no_code = re.sub(r"<(code|pre)\b[^>]*>.*?</\1>", " ", html, flags=re.S | re.I)
    no_vocab = re.sub(r'<div class="mlrk-grid">.*?</div>\s*</section>', " ", no_code, flags=re.S | re.I)
    text = visible_text(no_vocab)
    sentences = [s for s in re.split(r"[.!?]+", text) if s.strip()]
    words = re.findall(r"[A-Za-z']+", text)
    if len(sentences) < 3 or len(words) < 50:
        return []  # not enough real prose to score meaningfully
    syllables = sum(_count_syllables(w) for w in words)
    grade = 0.39 * (len(words) / len(sentences)) + 11.8 * (syllables / len(words)) - 15.59
    if grade > 9.0:
        return [("WARN", f"Flesch-Kincaid grade level ~{grade:.1f} (target: 6th-9th grade outside the vocabulary section) — check for long sentences or dense wording in the prose, not just technical terms")]
    return []


def check_ai_sounding_language(text):
    findings = []
    for pat in AI_TELL_PHRASES:
        for m in re.finditer(pat, text, re.I):
            findings.append(("WARN", f"AI-tutorial-sounding phrase, reword to something more personable: ...{text[max(0,m.start()-15):m.end()+15]}..."))
    return findings


def check_writing_guide(text, html):
    """Lint for Ben's AI writing guide (see the skill's "Writing rules")."""
    findings = []
    for pat, msg in WRITING_GUIDE_PATTERNS:
        for m in re.finditer(pat, text, re.I):
            snippet = " ".join(text[max(0, m.start() - 30):m.end() + 30].split())
            findings.append(("WARN", f"{msg} — near: ...{snippet}..."))
    return findings


# Angelica, 2026-10-06: a paragraph said "the `if` above it" directly under a
# code block that contained no `if`/`elif` pair at all — the version it meant
# was a section earlier. Refer to code by its name ("the `label_week` version"),
# and put both versions on screen wherever you contrast them.
POSITIONAL_CODE_REF = re.compile(
    r"\b(?:the\s+)?(?:code|example|snippet|block|version|function|program|output|chain|line)\s+"
    r"(?:above|below)\b"
    r"|\b(?:above|below)\s+it\b"
    r"|\bshown\s+(?:above|below)\b"
    r"|\bthe\s+`[^`]+`\s+above\b",
    re.I)


def check_positional_code_refs(text):
    hits = []
    for m in POSITIONAL_CODE_REF.finditer(text):
        snippet = " ".join(text[max(0, m.start() - 45):m.end() + 45].split())
        hits.append(f'"{m.group(0).strip()}" in: ...{snippet}...')
    if not hits:
        return []
    shown = hits[:3]
    more = f" (+{len(hits) - len(shown)} more)" if len(hits) > len(shown) else ""
    return [("WARN", "code referred to by position rather than by name — say "
                     '"the `label_week` version", and make sure the block you point at '
                     "actually contains what the sentence describes: "
                     + " | ".join(shown) + more)]


# Angelica, 2026-10-06: drop gendered pronouns for people in examples. A
# hypothetical student silently became "her" mid-paragraph. Use they/them,
# repeat the noun, or rewrite around the pronoun.
GENDERED_PRONOUNS = re.compile(r"\b(?:she|he|her|hers|him|his|herself|himself)\b", re.I)


def check_gendered_pronouns(text):
    hits = []
    for m in GENDERED_PRONOUNS.finditer(text):
        snippet = " ".join(text[max(0, m.start() - 40):m.end() + 40].split())
        hits.append(f'"{m.group(0)}" in: ...{snippet}...')
    if not hits:
        return []
    shown = hits[:4]
    more = f" (+{len(hits) - len(shown)} more)" if len(hits) > len(shown) else ""
    return [("WARN", "gendered pronoun for a person — use they/them, repeat the noun, "
                     "or rewrite around it: " + " | ".join(shown) + more)]


def _urlopen_relaxed(req):
    try:
        return urllib.request.urlopen(req, timeout=8)
    except urllib.error.URLError as e:
        if isinstance(getattr(e, "reason", None), ssl.SSLError):
            return urllib.request.urlopen(req, timeout=8, context=_INSECURE_CTX)
        raise


def check_video_language(html, skip_network=False):
    # A video's title/channel name being in English is not proof its spoken
    # audio is — a real bug shipped this way (English title, Hindi audio).
    # The reliable signal is the watch page's default (first) caption track.
    ids = re.findall(r'videoId\s*:\s*"([A-Za-z0-9_-]{6,})"', html)
    if not ids:
        return []
    if skip_network:
        return [("WARN", f"reminder: manually confirm the recommended video ({', '.join(ids)}) is in English before shipping — network checks skipped")]
    findings = []
    for vid in ids:
        try:
            body = _fetch_watch_page(vid)
        except Exception as e:
            findings.append(("WARN", f"could not verify language of video {vid} ({e}) — confirm manually via its caption track"))
            continue
        m = re.search(r'"captionTracks":\[\{"baseUrl":"[^"]*","name":\{"simpleText":"[^"]*"\},"vssId":"[^"]*","languageCode":"([a-z-]+)"', body)
        if not m:
            findings.append(("WARN", f"could not find a caption track for video {vid} to verify language — confirm manually"))
        elif not m.group(1).startswith("en"):
            findings.append(("ERROR", f"video {vid}'s default caption track is language '{m.group(1)}', not English — its audio likely isn't English either, swap this video"))
    return findings


def check_video_embeddable(html, skip_network=False):
    ids = re.findall(r'videoId\s*:\s*"([A-Za-z0-9_-]{6,})"', html)
    if not ids or skip_network:
        return []
    findings = []
    for vid in ids:
        req = urllib.request.Request(
            f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={vid}&format=json",
            headers={"User-Agent": _VIDEO_UA},
        )
        try:
            _urlopen_relaxed(req)
        except urllib.error.HTTPError as e:
            if e.code == 401:
                findings.append(("ERROR", f"video {vid} returns 401 from oEmbed — its owner has disabled embedding (shows as Error 153 in the player), swap this video"))
        except Exception as e:
            findings.append(("WARN", f"could not verify embeddability of video {vid} ({e}) — confirm manually"))
    return findings


def check_video_duration(html, skip_network=False):
    ids = re.findall(r'videoId\s*:\s*"([A-Za-z0-9_-]{6,})"', html)
    if not ids or skip_network:
        return []
    findings = []
    for vid in ids:
        try:
            body = _fetch_watch_page(vid)
        except Exception as e:
            findings.append(("WARN", f"could not verify duration of video {vid} ({e}) — confirm manually it is roughly 10-12 minutes or less"))
            continue
        m = re.search(r'"lengthSeconds":"(\d+)"', body)
        if not m:
            findings.append(("WARN", f"could not read duration of video {vid} — confirm manually it is roughly 10-12 minutes or less"))
            continue
        secs = int(m.group(1))
        # DA readings run 25-50 minutes, so a ~10-12 minute embed is
        # proportionate where SWE caps at 5. Over 12 warns (a long video can be
        # a deliberate pick); over 20 fails, since at that point the video is
        # the reading. Angelica, 2026-10-14.
        if secs > 1200:
            findings.append(("ERROR", f"video {vid} is {secs//60}:{secs%60:02d} — past 20 minutes the video is the reading. Pick a shorter one, move it to Additional resources, or drop it."))
        elif secs > 720:
            findings.append(("WARN", f"video {vid} is {secs//60}:{secs%60:02d}, over the ~10-12 minute guide. Fine if it is genuinely the best match and the time estimate includes it."))
    return findings



# British spellings: Angelica, 2026-10-14. These readings are for a US
# fellowship and the GitBook is US-spelled, so a British form reads as an
# inconsistency a student may copy into their own writing.
BRITISH_SPELLINGS = {
    "behaviour": "behavior", "colour": "color", "favour": "favor",
    "honour": "honor", "labour": "labor", "neighbour": "neighbor",
    "organise": "organize", "organised": "organized", "organising": "organizing",
    "organisation": "organization", "recognise": "recognize",
    "recognised": "recognized", "realise": "realize", "realised": "realized",
    "analyse": "analyze", "analysed": "analyzed", "summarise": "summarize",
    "summarised": "summarized", "normalise": "normalize",
    "normalised": "normalized", "initialise": "initialize",
    "initialised": "initialized", "serialise": "serialize",
    "serialised": "serialized", "catalogue": "catalog",
    "centre": "center", "centred": "centered", "defence": "defense",
    "licence": "license", "practise": "practice", "programme": "program",
    "travelling": "traveling", "cancelled": "canceled", "modelling": "modeling",
    "labelled": "labeled", "whilst": "while", "amongst": "among",
    "towards": "toward", "grey": "gray", "sceptical": "skeptical",
    "aluminium": "aluminum", "maths": "math",
}


def check_british_spellings(text):
    findings = []
    for brit, us in BRITISH_SPELLINGS.items():
        for m in re.finditer(rf"\b{brit}\b", text, re.I):
            snippet = " ".join(text[max(0, m.start() - 35):m.end() + 35].split())
            findings.append(("ERROR", f'British spelling "{m.group(0)}" — use "{us}": ...{snippet}...'))
    return findings


def _quest_for(path):
    """The quest that pins this reading, from curriculum/mod1-quests.json."""
    manifest = Path(__file__).parent.parent / "curriculum" / "mod1-quests.json"
    if not manifest.exists():
        return None, None
    try:
        data = json.loads(manifest.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return None, None
    rel = str(Path(path).parent).replace("\\", "/")
    rel = rel[rel.find("Mod"):] if "Mod" in rel else rel
    for q in data.get("quests", []):
        if rel in q.get("readings", []):
            return q, data
    return None, data


def check_quest_vocabulary(path, html):
    """A reading must define the Vocabulary Mission terms of the quest that
    sends students to it.

    The DA GitBook is organised as quests spanning several days, and each
    quest page lists the terms a Fellow must be able to explain, then links
    the readings that teach them. That list is the DA analogue of the SWE
    repo's per-lesson key terms. Checked against the whole page rather than
    a card set, because DA readings carry their vocabulary in a flip-card
    grid, a table, or prose depending on the reading.
    """
    quest, data = _quest_for(path)
    if quest is None:
        return []
    norm = lambda s: re.sub(r"[^a-z0-9]", "", s.lower())
    def covered(hay, term):
        n = norm(term)
        return bool(n) and (n in hay or norm(term.rstrip("s")) in hay)

    # A quest can span two or three readings, so a term is owed by the quest as
    # a WHOLE, not by each reading. Demanding every term in every reading would
    # require the nested-loops reading to define "Off-by-One Error" and the
    # conditionals reading to define "Nested Loop". Report a term only when no
    # reading in the quest defines it.
    root = Path(__file__).parent.parent
    # Look for the term where a reading DEFINES it - the vocabulary flip-card
    # fronts, and any <dt>/<strong> term label - not anywhere in the prose.
    # A substring search over visible text let "nested loops" in a sentence
    # satisfy "Nested Loop" in a reading that never defined it, which is the
    # one failure this check exists to catch.
    def defined_terms(html):
        out = re.findall(
            r'mlrk-front[^>]*>\s*<strong>(.*?)</strong>|<dt[^>]*>(.*?)</dt>',
            html, re.S)
        return [" ".join(re.sub("<[^>]+>", "", a or b).split()) for a, b in out]

    per_reading = {}
    for rel in quest.get("readings", []):
        f = root / rel / "index.html"
        per_reading[rel] = defined_terms(f.read_text(encoding="utf-8")) if f.exists() else []
    missing = [t for t in quest.get("vocabulary_mission", [])
               if not any(covered(norm(d), t) for ds in per_reading.values() for d in ds)]
    if missing:
        return [("ERROR",
                 f"quest {quest['quest']} ({quest['title']}) Vocabulary Mission term(s) defined by "
                 f"NONE of its {len(per_reading)} reading(s): {', '.join(missing)}. The quest page "
                 f"tells Fellows to be ready to explain these and links here to learn them.")]
    return []


def run(path, skip_links=False):
    html = Path(path).read_text(encoding="utf-8")
    text = visible_text(html)
    word_count = len(text.split())
    findings = []
    findings += check_banned_phrases(text)
    findings += check_banned_phrases(html)  # catch phrases inside attributes/comments too
    findings += check_headings(html)
    findings += check_font_sizes(html)
    findings += check_unknown_colors(html)
    findings += check_alt_text(html)
    findings += check_export_wiring(html)
    findings += check_time_estimate(html, word_count)
    findings += check_copyright(text)
    findings += check_skills_callout(path, text)
    findings += check_submission_setup_directions(text.lower())
    fb = feedback_text(html)
    prose = text + "\n" + fb
    findings += check_reading_level(html)
    findings += check_ai_sounding_language(prose)
    findings += check_writing_guide(prose, html)
    findings += check_positional_code_refs(prose)
    findings += check_gendered_pronouns(prose)
    findings += check_british_spellings(prose)
    findings += check_quest_vocabulary(path, html)
    findings += check_video_language(html, skip_network=skip_links)
    findings += check_video_embeddable(html, skip_network=skip_links)
    findings += check_video_duration(html, skip_network=skip_links)
    if not skip_links:
        findings += check_links(html)
    return findings


def main():
    args = sys.argv[1:]
    skip_links = "--skip-links" in args
    args = [a for a in args if a != "--skip-links"]
    paths = []
    for a in args:
        paths.extend(glob.glob(a, recursive=True))
    if not paths:
        print("No files matched.", file=sys.stderr)
        sys.exit(2)
    had_error = False
    for path in paths:
        print(f"\n=== {path} ===")
        findings = run(path, skip_links=skip_links)
        if not findings:
            print("  OK — no findings.")
            continue
        for level, msg in findings:
            print(f"  [{level}] {msg}")
            if level == "ERROR":
                had_error = True
    sys.exit(1 if had_error else 0)


if __name__ == "__main__":
    main()
