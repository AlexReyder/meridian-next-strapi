import type { SamplePreviewHomeBlock } from '@/types/strapi'
import { SamplePreviewSection } from '@/components/sample-preview-section'

export function SamplePreviewHomeBlockView({
  block,
  locale,
}: {
  block: SamplePreviewHomeBlock
  locale: string
}) {
  if (block.isEnabled === false) return null

  return <SamplePreviewSection />
}

export const SamplePreviewHomeBlockView = SamplePreviewHomeBlockView
