# Roam Content Co. — website

Marketing site for **Roam Content Co.**, the event content-creation division of
Trident Event Group. Roam captures weddings, conferences, sporting and live
events *as they happen* — and behind the scenes — with a social-first finish.
Weddings are the lead specialty.

Static HTML/CSS/JS — no build step. Open `index.html` or deploy the folder as-is.

## Stack & conventions

- Plain static site (matches the `photo-site` sibling). No framework, no bundler.
- **Fonts:** Fraunces (display) + Inter (UI), loaded from Google Fonts.
- **Theme:** light/dark via `data-theme` on `<html>`; toggle persists in
  `localStorage` (`roam-theme`). Respects `prefers-color-scheme` and a
  `?theme=dark|light` URL override.
- **Brand palette:** warm bone surface, deep onyx ink, **ember/clay** accent
  (`--ember #C75B39`) — intentionally distinct from Trident Studios' champagne
  gold while staying in the TEG editorial family. All tokens live at the top of
  `styles.css`.

## Content-creator design system

Roam is a *content-creation* brand, not a photographer — so the UI borrows the
visual language of the platforms it creates for, informed by how real
wedding/event content creators present themselves (Content for Brides, Aglow,
Cupid Content Co., Happily Ever Socials):

- **Reel/Story cards** (`.reel-card`) — vertical 9:16 cards with live social UI
  (story progress bars, `@roamcontent.co` handle, like/comment/share rail,
  caption + "original audio"). The homepage hero and the **On the Feed** grid
  are built from these. Icons come from an inline SVG sprite at the top of
  `<body>` (`#ic-heart`, `#ic-comment`, `#ic-share`, `#ic-play`, `#ic-eye`).
- **Format ticker** (`.ticker`) — thin scrolling band: "Same-Day Edits · Reels ·
  TikTok · Stories · 9:16 · Shot on iPhone Pro · Trending Audio."
- **Film grain** (`.grain`) — subtle SVG-noise overlay on hero/about media for a
  shot-not-staged feel.
- **Same-day delivery timeline** (`.timeline`) — "same night → 48h → 2 weeks,"
  the differentiator vs. traditional film.
- **Voice** — "invisible guest with a camera," "caught not posed," "shot on
  iPhone Pro," social-first; the word *videographer* is deliberately avoided.

## Structure

```
index.html            Homepage (hero, work, services, reel strip, about, etc.)
inquiry.html          Inquiry page — see "Inquiry form" below
styles.css            Full design system (light/dark)
script.js             Nav, theme toggle, scroll-reveal, hero parallax, year stamp
geo.js                IP-based city personalization (homepage + inquiry only)
sitemap.xml
robots.txt
brandon/index.html    Local SEO landing page — Brandon / Westman, MB
winnipeg/index.html   Local SEO landing page — Winnipeg, MB
regina/index.html     Local SEO landing page — Regina, SK
public/
  media/              Curated event/wedding imagery (SEO-friendly filenames)
  logos/favicon.svg   Brand mark
```

## Local SEO

The three city pages are the crawlable source of truth. Each has a unique
title, H1, meta description/keywords, geo meta tags, canonical, Open Graph,
and JSON-LD (`ProfessionalService` + `BreadcrumbList` + `FAQPage`) with
city-specific venues and copy. `geo.js` only *enhances* the homepage for live
visitors by surfacing the nearest city — it never replaces the static pages.

To add a city: copy a city folder, swap the localized copy/venues/coords, then
add the URL to `sitemap.xml` and the `LOCATIONS` map in `geo.js`.

## Inquiry form

`inquiry.html` ships with a **placeholder** (`#inquiry-form`, the `.form-embed`
block). When the real booking form is ready, replace that entire block with the
form markup or an `<iframe>` embed — the surrounding layout adapts automatically.

## To customize

- **Domain:** every canonical / OG / schema URL uses `https://roamcontent.ca/`.
  Find-and-replace if the domain changes.
- **Contact:** `hello@roamcontent.ca` and Instagram `@roamcontent.co` are
  placeholders — search and replace with the real handles.
- **Imagery:** photos in `public/media/` are curated from the TEG `photo-site`
  library as on-brand stand-ins. Swap in genuine Roam media (and add real
  highlight-film links / video embeds) when available.
