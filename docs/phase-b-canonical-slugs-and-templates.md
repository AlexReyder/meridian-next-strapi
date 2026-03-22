# Phase B — canonical slugs, templates, and block model

This phase normalizes the multilingual archive into a single canonical routing model and expands the Strapi block library to fit the updated frontend.

## Canonical slugs for all locales

We use the same slug across `ru`, `en`, and `ar`.

- `/ru`
- `/ru/solutions`
- `/ru/for-startups`
- `/ru/for-agencies`
- `/ru/pricing`
- `/ru/method`
- `/ru/concepts`
- `/ru/get-proposal`

The same applies to `/en/*` and `/ar/*`.

We deliberately **do not** keep:

- `for-partners`
- `how-we-work`

These were translation-specific choices in the provided archive. The canonical CMS model keeps one shared slug across locales.

## Page template mapping

| Canonical slug | Template | Notes |
|---|---|---|
| `home` | `home` | Main landing page |
| `solutions` | `solutions` | Same block composition across locales |
| `for-startups` | `for-startups` | Startup-specific page |
| `for-agencies` | `for-agencies` | Replaces archive `for-partners` |
| `pricing` | `pricing` | Shared package/pricing layout |
| `method` | `method` | Replaces archive `how-we-work` |
| `concepts` | `concepts` | Arabic page still needs content filling |
| `get-proposal` | `get-proposal` | Wizard + upload flow, migrated later |

## Archive-to-block mapping

### Home
- hero
- cards-grid (`outcomes`)
- video-section
- cards-grid (`deliverables`)
- cards-grid (`pillars` / why)
- cards-grid (`audience`)
- cta (`concepts` teaser)
- cards-grid (`process` via cards-grid or `steps`)
- cards-grid (`pricing`)
- cta / cards-grid for proposal teaser
- statements-strip / cards-grid (`trust`)
- faq
- cta

### Solutions
- hero
- rich-text / media-text (`positioning intro`)
- video-section
- cards-grid (`solutions-grid`)
- cards-grid (`artifacts`)
- cards-grid (`audience`)
- cards-grid (`pillars` / why)
- cta
- faq

### For Startups
- hero
- cards-grid (`outcomes`)
- video-section
- cards-grid (`deliverables`)
- cards-grid (`situations`)
- cards-grid (`artifacts`)
- steps (`process`)
- cards-grid (`efficiency`)
- cards-grid (`concepts`)
- cta
- faq

### For Agencies
- hero
- rich-text (`clarification`)
- cards-grid (`audience`)
- video-section
- cards-grid (`outcomes`)
- cards-grid (`projects`)
- steps (`process`)
- cards-grid (`artifacts`)
- cards-grid (`pillars` / why)
- cards-grid (`concepts`) — present in EN, can be enabled in RU/AR later
- cta
- faq

### Pricing
- hero
- rich-text (`positioning block`)
- cards-grid (`packages`)
- cards-grid / rich-text (`choosing guide`)
- cards-grid (`deliverables` preview)
- rich-text (`price explanation`)
- cta (`no-call`)
- faq
- cta (final)

### Method
- hero
- rich-text (`positioning`)
- video-section
- steps (`method`)
- cards-grid (`deliverables`)
- cards-grid (`pillars` / why)
- cards-grid (`audience`)
- faq
- cta

### Concepts
- hero
- rich-text (`intro`)
- concept-nav
- concept-section[]
- cards-grid (`pillars` / why)
- video-section
- cta

### Get Proposal
- hero
- cards-grid (`conversion-paths`)
- form-section / custom proposal flow (Phase D)
- cards-grid (`trust`)
- cards-grid (`decision-support`)
- video-section
- faq
- cta / support section
- success state (later custom flow)

## Why this phase matters

The provided archive duplicates route trees and page components per locale. This patch keeps the current CMS-driven architecture intact and normalizes only the pieces needed for:

1. one route model,
2. one block renderer,
3. localized content in Strapi,
4. shared slug switching between locales.
