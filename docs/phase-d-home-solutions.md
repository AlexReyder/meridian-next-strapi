# Phase D — Home + Solutions content layer

This patch does four things:

1. Extends the `video-section` block so it can represent the walkthrough sections from the new localized frontend.
2. Expands the `cards-grid` variants so Home and Solutions can be mapped without ad-hoc component forks.
3. Activates Strapi bootstrap seeding and seeds `global`, `home`, and `solutions` for `ru`, `en`, and `ar`.
4. Updates the frontend block layer to render `video-section`, `concept-nav`, and `concept-section` blocks.

## After applying the patch

1. Restart Strapi.
2. Ensure locales `ru`, `en`, `ar` exist in the admin panel.
3. Run Strapi with:

```bash
CMS_SEED_ON_BOOT=true
CMS_SEED_OVERWRITE=false
CMS_SEED_LOCALES=ru,en,ar
```

4. Open in the browser:
   - `/ru`
   - `/en`
   - `/ar`
   - `/ru/solutions`
   - `/en/solutions`
   - `/ar/solutions`

## Notes

- The seed intentionally uses canonical slugs shared across locales.
- Video URLs are placeholders and should be replaced later.
- Image/media fields are left empty in the seed so you can attach final assets from Strapi media library or S3.
- This phase focuses only on `home` and `solutions`. Other page templates remain for later phases.
