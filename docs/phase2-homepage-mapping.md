# Phase 2: homepage mapping into Strapi blocks

This mapping keeps the current homepage visual structure but moves content to reusable CMS blocks.

## Suggested `home` page block order

1. `page.hero`
   - maps current `Hero`
   - use `tags`, `primaryImage`, `secondaryImage`
2. `page.cards-grid` (`variant=outcomes`, `columns=3`)
   - maps current `ValueSection`
3. `page.cards-grid` (`variant=deliverables`, `columns=4`)
   - maps current `DeliverablesSection`
4. `page.cards-grid` (`variant=pillars`, `theme=dark`, `columns=4`)
   - maps current `WhySection`
5. `page.cards-grid` (`variant=audience`, `columns=3`)
   - maps current `AudienceSection`
6. `page.cards-grid` (`variant=concepts`, `columns=3`)
   - maps current `ConceptsSection`
7. `page.steps` (`variant=process`)
   - maps current `MethodSection`
8. `page.cards-grid` (`variant=pricing`, `columns=3`)
   - maps current `PricingSection`
9. `page.steps` (`variant=proposal`, `columns=3`)
   - maps current `ProposalSection`
10. `page.statements-strip`
   - maps current `TrustSection`
11. `page.faq`
   - maps current `FaqSection`
12. `page.cta` (`theme=dark`)
   - maps current `FinalCtaSection`

## Global settings

Use `global` single type for:
- site name
- favicon
- site description
- contact email
- menu items
- default SEO

## What still remains for the next phase

- real content import script from existing React arrays/components into Strapi payloads
- replacing the remaining hardcoded routes with localized CMS-driven routes
- real form submit flow with S3 + SMTP
- Arabic font switch in layout
