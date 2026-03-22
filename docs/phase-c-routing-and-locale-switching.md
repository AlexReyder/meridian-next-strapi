# Phase C — canonical routing and locale switching

## What this patch does

1. Makes the frontend route layer canonical:
   - `/ru`
   - `/ru/solutions`
   - `/ru/for-startups`
   - `/ru/for-agencies`
   - `/ru/pricing`
   - `/ru/method`
   - `/ru/concepts`
   - `/ru/get-proposal`

   Same slugs for `en` and `ar`.

2. Redirects legacy aliases to canonical slugs:
   - `/en/for-partners` -> `/en/for-agencies`
   - `/en/how-we-work` -> `/en/method`
   - same for `ar` and non-localized legacy paths.

3. Stops treating unknown slugs as `home`.
   Unknown CMS routes now resolve to `notFound()` instead of silently rendering the homepage.

4. Aligns CMS schema with frontend routing:
   - `page.slug` is no longer localized
   - `page.template` supports the normalized templates
   - `page.blocks` includes the new block types introduced in Phase B

5. Adds alternate-language metadata for page routes.

## Apply order

1. Replace the files from this patch.
2. Restart Strapi to rebuild the content-type schema.
3. In Strapi content manager, verify:
   - `slug` is shared across locales
   - new templates are available
   - `blocks` allows the new block types
4. Re-save existing pages if Strapi asks for content migration.
5. Test these URLs:
   - `/` -> redirects to preferred locale
   - `/en/how-we-work` -> `/en/method`
   - `/ar/for-partners` -> `/ar/for-agencies`
   - `/ru/unknown` -> 404

## Notes

- This patch does not migrate page content yet.
- Existing top-level `app/page.tsx` and legacy route files can stay temporarily because `proxy.ts`
  redirects traffic into the localized CMS route layer first.
