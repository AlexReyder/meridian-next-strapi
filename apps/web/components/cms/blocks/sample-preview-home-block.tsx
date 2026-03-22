import type { SamplePreviewHomeBlock } from '@/types/strapi'
import { SamplePreviewSection } from '@/components/sample-preview-section'

export function SamplePreviewHomeBlockView({
  block,
}: {
  block: SamplePreviewHomeBlock
  locale: string
}) {
  if (block.isEnabled === false) return null
  return <SamplePreviewSection />
}
