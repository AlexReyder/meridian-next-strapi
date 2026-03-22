#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

rm -f "$ROOT/apps/web/components/cms/blocks/cards-grid-block.tsx"
rm -f "$ROOT/apps/web/components/cms/blocks/cta-block.tsx"
rm -f "$ROOT/apps/web/components/cms/blocks/faq-block.tsx"
rm -f "$ROOT/apps/web/components/cms/blocks/form-section-block.tsx"
rm -f "$ROOT/apps/web/components/cms/blocks/hero-block.tsx"
rm -f "$ROOT/apps/web/components/cms/blocks/media-text-block.tsx"
rm -f "$ROOT/apps/web/components/cms/blocks/rich-text-block.tsx"
rm -f "$ROOT/apps/web/components/cms/blocks/statements-strip-block.tsx"
rm -f "$ROOT/apps/web/components/cms/blocks/steps-block.tsx"
rm -f "$ROOT/apps/web/components/cms/blocks/video-section-block.tsx"
rm -f "$ROOT/apps/web/components/cms/blocks/concept-nav-block.tsx"
rm -f "$ROOT/apps/web/components/cms/blocks/concept-section-block.tsx"

rm -f "$ROOT/apps/cms/src/components/page/hero.json"
rm -f "$ROOT/apps/cms/src/components/page/rich-text.json"
rm -f "$ROOT/apps/cms/src/components/page/media-text.json"
rm -f "$ROOT/apps/cms/src/components/page/cards-grid.json"
rm -f "$ROOT/apps/cms/src/components/page/video-section.json"
rm -f "$ROOT/apps/cms/src/components/page/steps.json"
rm -f "$ROOT/apps/cms/src/components/page/statements-strip.json"
rm -f "$ROOT/apps/cms/src/components/page/concept-nav.json"
rm -f "$ROOT/apps/cms/src/components/page/concept-section.json"
rm -f "$ROOT/apps/cms/src/components/page/faq.json"
rm -f "$ROOT/apps/cms/src/components/page/cta.json"
rm -f "$ROOT/apps/cms/src/components/page/form-section.json"

rm -f "$ROOT/apps/cms/src/seed/phase-e-pages-seed.ts"
rm -f "$ROOT/apps/cms/src/seed/phase-f-pages-seed.ts"

echo "Home-only cleanup completed."
