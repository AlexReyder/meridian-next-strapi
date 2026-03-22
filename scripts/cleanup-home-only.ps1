$Root = Split-Path -Parent $PSScriptRoot

$files = @(
  "apps\web\components\cms\blocks\cards-grid-block.tsx",
  "apps\web\components\cms\blocks\cta-block.tsx",
  "apps\web\components\cms\blocks\faq-block.tsx",
  "apps\web\components\cms\blocks\form-section-block.tsx",
  "apps\web\components\cms\blocks\hero-block.tsx",
  "apps\web\components\cms\blocks\media-text-block.tsx",
  "apps\web\components\cms\blocks\rich-text-block.tsx",
  "apps\web\components\cms\blocks\statements-strip-block.tsx",
  "apps\web\components\cms\blocks\steps-block.tsx",
  "apps\web\components\cms\blocks\video-section-block.tsx",
  "apps\web\components\cms\blocks\concept-nav-block.tsx",
  "apps\web\components\cms\blocks\concept-section-block.tsx",
  "apps\cms\src\components\page\hero.json",
  "apps\cms\src\components\page\rich-text.json",
  "apps\cms\src\components\page\media-text.json",
  "apps\cms\src\components\page\cards-grid.json",
  "apps\cms\src\components\page\video-section.json",
  "apps\cms\src\components\page\steps.json",
  "apps\cms\src\components\page\statements-strip.json",
  "apps\cms\src\components\page\concept-nav.json",
  "apps\cms\src\components\page\concept-section.json",
  "apps\cms\src\components\page\faq.json",
  "apps\cms\src\components\page\cta.json",
  "apps\cms\src\components\page\form-section.json",
  "apps\cms\src\seed\phase-e-pages-seed.ts",
  "apps\cms\src\seed\phase-f-pages-seed.ts"
)

foreach ($relativePath in $files) {
  $absolutePath = Join-Path $Root $relativePath
  if (Test-Path $absolutePath) {
    Remove-Item $absolutePath -Force
  }
}

Write-Host "Home-only cleanup completed."
