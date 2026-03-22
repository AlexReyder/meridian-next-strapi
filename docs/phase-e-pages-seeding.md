# Phase E

This phase moves the next four marketing pages into the same CMS-driven route model:

- `for-startups`
- `for-agencies`
- `pricing`
- `method`

## Strategy

To keep this phase stable, the patch uses the block types that already exist in the project:

- `page.hero`
- `page.rich-text`
- `page.cards-grid`
- `page.video-section`
- `page.steps`
- `page.faq`
- `page.cta`

That means the pages become real CMS pages now, while more detailed visual parity from the translated archive can be added in the next phase.

## Seed

After applying the patch, boot Strapi with:

```bash
CMS_SEED_ON_BOOT=true
CMS_SEED_OVERWRITE=false
CMS_SEED_LOCALES=ru,en,ar
```

The seed will create:

- home
- for-startups
- for-agencies
- pricing
- method

for all configured locales.

## Notes

- RU content is more complete in this phase.
- EN and AR already get real CMS pages and canonical slugs, but some sections are intentionally shorter for now.
- This is enough to continue with route integration and then move to the next content-heavy pages.
