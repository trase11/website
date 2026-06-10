# CLAUDE.md — Cerovia Systems · Website Build Rules

> Single source of truth for building the Cerovia Systems website.
> Combines: (A) build workflow, (B) the harmonized brand system, (C) the site brief,
> and (D) the one-pager sitemap. Where the old brand book and the slides disagreed,
> this file is the resolved version — follow it, not the originals.

---

## 0. The Brief (read first)

> Reference files live in `brand_assets/`: the brand book (`.docx`), the logo, and the
> slide screenshots. Read the brand book with a docx-capable step (it is not auto-loaded).
> This `CLAUDE.md` stays in the project ROOT (it is auto-loaded; do not move it into brand_assets/).
> The slides are visual mood reference only — their colors/fonts are off-brand (see §2), so
> match the tokens in this file, not the slides pixel-for-pixel.

- **What we're building:** A single-page (one-pager) landing site for **Cerovia Systems**.
- **Stage:** The company is in **R&D**. The product (autonomous laser-weeding robots) is a
  working prototype, not yet a commercial product. The site must NOT imply you can buy it today.
  Frame everything as "what we are building and where it's going."
- **Audience — two readers at once:**
  - **Farmers / future customers** want: what problem it solves, what it does in plain terms,
    what it will save them (€/στρέμμα), when it's coming.
  - **Investors** want: market size, why now, technical credibility, the team, traction/milestones.
  - Every major section should serve at least one of these, and the page as a whole must serve both.
- **The single job of the page:** make a credible R&D company look like a serious bet —
  a farmer thinks "I want this on my field," an investor thinks "I want in early."
- **Primary CTA:** ONE per page. Recommended: "Request a field pilot" (farmers) with a
  secondary "Investor deck" link (investors). Pick one primary; do not show two equal CTAs.

---

## 1. Always Do First

- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- Read this entire file before designing. The brand tokens below are authoritative.

---

## 2. Brand System (HARMONIZED — use these exact values)

> Note: the slides used an off-palette bright green (~#3FA72F) and a bluer navy (~#0A1A5C),
> and a Poppins-like display face. Those were inconsistent with the brand book. This section
> reconciles them. Use the values here everywhere — site, social, future slides.

### 2.1 Color palette
| Token | Hex | Use |
|-------|-----|-----|
| Navy (primary) | `#0A1628` | Backgrounds, titles, primary text on light |
| Forest Green | `#1B4D1E` | Deep accents, dark-green sections, depth |
| Leaf Green (accent) | `#4CAF50` | CTAs, highlights, icons, "live"/active elements |
| Off-White | `#F7F9F7` | Section backgrounds |
| Charcoal | `#1A1A1A` | Body text on light |
| Muted | `#4A4A4A` | Subtitles, captions |

- **Never** use default Tailwind palette (blue-600, indigo-500, green-500, etc.).
- **Do not** reintroduce the slide green `#3FA72F` — it is off-brand. Map any "bright green"
  to **Leaf `#4CAF50`**; map deep greens to **Forest `#1B4D1E`**.
- Derive tints/shades from these six only.

### 2.2 Typography
- **Primary: Inter** (Google Fonts) — all UI, headings, body.
- **Utility: Space Mono** (Google Fonts) — numbers, stats, specs, technical data, €/στρέμμα figures.
- Do NOT use Poppins or a serif, even though the slides appear to. Inter + Space Mono win.
- Pair them deliberately: Inter for language, Space Mono for anything numeric/technical —
  this mono-for-data treatment is part of the brand's "we show numbers, not adjectives" voice.

| Use | Font | Size | Weight |
|-----|------|------|--------|
| Hero titles | Inter | 56–72px | 700 |
| Section titles | Inter | 32–40px | 600 |
| Body | Inter | 16–18px | 400 |
| Stats / specs | Space Mono | 24–48px | 700 |
| Captions | Inter | 12–14px | 400 |

Tight tracking (`-0.03em`) on large headings; generous line-height (`1.7`) on body.

### 2.3 Logo (ACTION NEEDED — current asset is not production-ready)
- Supplied logo in `brand_assets/` (`Εικόνα1.png`) is actually a **JPEG, 497×173, no
  transparency, low-res**.
- The brand book itself requires a **white version** for navy backgrounds. You don't have one.
- **Before final build, obtain:** (1) logo as transparent **SVG or high-res PNG**,
  (2) an **all-white** version for dark/navy sections.
- Until then: place the logo only on light backgrounds, or recreate the wordmark in Inter
  as a temporary placeholder. Do not stretch, recolor, or add shadows/effects to the logo.
- Clear space around logo = at least the height of the letter "C".

### 2.4 Imagery
- Real **Greek/Thessaly** fields — never US-style flat mega-farms, never generic "happy farmer" stock.
- Close-ups of soil, plants, weeds (the problem) and the rover/prototype in a real field.
- Natural color, no heavy filters. Warm for fields, cool/clean for tech shots.
- During R&D: if you lack real photos, use `https://placehold.co/WIDTHxHEIGHT` placeholders
  and label them clearly as placeholders — do not fake "product" renders.

---

## 3. Voice & Tone (for all copy)

- Short sentences, meaning first. Sentence case.
- Talk to the farmer directly: "εσύ", "το χωράφι σου", "τα κόστη σου".
- Numbers instead of adjectives: "€500/στρέμμα" not "σημαντικό κόστος".
- Keep technical terms in English: laser, AI, rover. Don't translate them.
- **Tagline (always English, always italic):**
  *"We aren't just building a robot — we are engineering the next generation of farming."*
- For the dual audience: pair a farmer-facing benefit line with an investor-facing proof line
  in the same section (e.g. benefit headline + a stat in Space Mono).
- **Banned words:** "innovative", "cutting-edge", "state-of-the-art", and empty buzzwords.

---

## 4. One-Pager Sitemap (build these sections, in order)

1. **Hero** — Navy background. Tagline + one-line plain description of what Cerovia does.
   Primary CTA. (Logo white version here.)
2. **The Problem** — Weeds + chemicals + cost, spoken to the farmer. One strong stat in Space Mono.
3. **What We're Building** — The rover in plain terms: laser weeding, no chemicals, autonomous.
   Mark clearly as R&D / prototype.
4. **Why It Matters / Mission** — From the brand book (GR):
   "Χτίζουμε αυτόνομες ρομποτικές πλατφόρμες προσβάσιμες σε κάθε μικρομεσαίο αγρότη —
   απαλλάσσοντάς τον από χημικά και μειώνοντας τα κόστη του."
5. **The Opportunity (for investors)** — Market "why now", positioning: precision farming for the
   80-στρεμμα farmer, not only the 8.000. Base: Larissa, Greece. Vision:
   "Να γίνουμε το standard της νέας γενιάς γεωργίας στην Ευρώπη..."
6. **Brand Values** — Προσβασιμότητα · Σεβασμός στη γη · Πρακτική καινοτομία (3 short cards).
7. **Traction / R&D status** — Honest milestones timeline (numbered markers OK here: it's a real sequence).
8. **Team** (placeholder if needed) — credibility for investors.
9. **CTA footer** — Repeat the single primary CTA + investor contact + logo.

> Numbered markers (01/02/03) ONLY where order is real (timeline). Don't decorate other sections with them.

---

## 5. Local Server & Screenshot Workflow

### 5.0 Create the tooling yourself (first session, before building)
`serve.mjs` and `screenshot.mjs` do not exist yet. **Create both in the project root** before
the first screenshot pass:
- `serve.mjs` — a minimal static file server (Node built-in `http`, no extra deps) that serves
  the project root at `http://localhost:3000`.
- `screenshot.mjs` — a Puppeteer script that takes a URL arg + optional label, navigates,
  waits for network idle, and saves a full-page PNG to `./temporary screenshots/screenshot-N.png`
  (auto-increment N, never overwrite; append `-label` if a label arg is given).
- If Puppeteer isn't installed, run `npm install puppeteer` (or instruct the user to). Do NOT
  hardcode machine-specific Chrome/cache paths — let Puppeteer use its default cache, or read
  `PUPPETEER_CACHE_DIR` from env, so this runs on any machine.
- Create the `temporary screenshots/` folder if missing.

### 5.1 Run
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start dev server in the background: `node serve.mjs` (serves project root at `http://localhost:3000`).
  If already running, do not start a second instance.
- Screenshot from localhost: `node screenshot.mjs http://localhost:3000` →
  saves to `./temporary screenshots/screenshot-N.png` (auto-incremented). Optional label:
  `node screenshot.mjs http://localhost:3000 hero`.
- After screenshotting, read the PNG and compare against intent. Be specific:
  "heading is 32px but should be ~24px", "card gap 16px but should be 24px".
- Check: spacing/padding, font size/weight/line-height, exact hex colors, alignment,
  border-radius, shadows, image sizing. Do **at least 2** comparison rounds.

---

## 6. Output Defaults

- Single `index.html`, styles inline, unless told otherwise.
- Tailwind via CDN: `<script src="https://cdn.tailwindcss.com"></script>`, extend the theme
  with the six brand colors so you never reach for defaults.
- Load Inter + Space Mono from Google Fonts.
- Mobile-first, responsive down to small phones.
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`.

---

## 7. Anti-Generic Guardrails

- **Colors:** brand palette only (Section 2.1). No default Tailwind colors. No `#3FA72F`.
- **Shadows:** no flat `shadow-md`. Use layered, low-opacity, navy/green-tinted shadows.
- **Typography:** Inter + Space Mono only. Tight tracking on large heads, 1.7 line-height on body.
- **Gradients:** layer multiple radial gradients; add subtle SVG noise/grain for depth.
- **Animations:** animate only `transform` and `opacity`. Never `transition-all`. Spring-style easing.
- **Interactive states:** every clickable element needs hover, focus-visible, and active states.
- **Images:** gradient overlay (`from-black/60`) + a brand color treatment layer (`mix-blend-multiply`).
- **Depth:** real layering system (base → elevated → floating), not one flat z-plane.
- Respect `prefers-reduced-motion`. Visible keyboard focus everywhere.

---

## 8. Hard Rules

- Do not add sections/features/content beyond the sitemap in Section 4 (ask first).
- Do not imply the product is purchasable today — it is **R&D**.
- Do not use `transition-all`.
- Do not use default Tailwind blue/indigo/green as a brand color.
- Do not reuse the off-brand slide green `#3FA72F` or the bluer slide navy — use Section 2.1.
- Do not use Poppins or a serif as the type system — Inter + Space Mono only.
- Do not put the logo on navy without the white version (Section 2.3).
- Do not stop after one screenshot pass.
- Fix the two typos before they propagate: it is **"SYSTEMS"** (not "SYTSTEMS")
  and **"CEROVIA"** (not "CERVOIA").
