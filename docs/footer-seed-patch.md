# Footer seed patch

What this patch adds:
- `footerColumns` to Strapi `Global`
- `footerLegalLinks` to Strapi `Global`
- `footerCopyright` to Strapi `Global`
- `navigation.footer-column` component schema
- footer seed data for `ru`, `en`, `ar`
- `LocaleFooter` support for seeded footer columns and legal links

How to apply after copying files:
1. Restart Strapi so the updated `Global` schema and new component are registered.
2. Run Strapi once with:
   - `CMS_SEED_ON_BOOT=true`
   - `CMS_SEED_OVERWRITE=true`
   - `CMS_SEED_LOCALES=ru,en,ar`
3. Open `Global` in Strapi admin and confirm `footerColumns`, `footerLegalLinks`, `footerCopyright` are populated for each locale.
4. Set `CMS_SEED_OVERWRITE=false` again after the first successful reseed.

Notes:
- legal links are seeded with placeholder internal paths (`/privacy-policy`, `/terms-of-use`). Add matching pages later or change the hrefs in Strapi.
- the footer layout keeps the existing visual style and only swaps the data source to Strapi.
