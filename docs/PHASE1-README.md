# Meridian phase 1 patch

This patch is the first structural step of the migration from a static Next.js marketing site to a CMS-driven Next.js + Strapi setup.

## What is included

### Strapi
- `page` collection type with localized `title`, `slug`, `seo`, and `blocks`
- expanded `global` single type with menu items, contact email, and default SEO
- reusable components for:
  - hero
  - rich text
  - media + text
  - cards grid
  - FAQ
  - CTA
  - form section

### Next.js
- locale-aware route skeleton at `app/[locale]/[[...slug]]/page.tsx`
- root request redirect using `proxy.ts`
- locale helpers and Strapi REST client
- metadata generation from Strapi SEO fields
- simple block renderer for the first set of CMS blocks
- locale-aware header/footer skeletons

## Before applying

1. Remove or archive the starter Strapi content types: `about`, `article`, `author`, `category`
2. Decide whether you will keep the existing `global` API id or rename it to `global-settings`
3. Make sure the Strapi i18n plugin is enabled in the admin panel and that locales `ru`, `en`, and `ar` exist
4. Set the following environment variables in `apps/web`:
   - `STRAPI_URL`
   - `STRAPI_TOKEN` (optional, recommended)

## Expected next step after this patch

- wire existing visual sections to the generic CMS blocks
- migrate current hardcoded page content into Strapi entries
- replace the placeholder form block with the real proposal form flow and SMTP/S3 submission pipeline
