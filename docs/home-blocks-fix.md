This patch fixes the main runtime reason Home-specific blocks do not appear:

1. `getPageBySlug()` did not populate `page.*-home` fragments, so Strapi omitted those components from the API response.
2. `types/strapi.ts` still described only the old generic block set.

After applying this patch:
- restart Next.js dev server
- if content was already seeded, `/ru` should receive the `page.*-home` blocks from Strapi
- if some blocks still do not render, the corresponding `*-home-block.tsx` files are still missing locally and need to be restored
