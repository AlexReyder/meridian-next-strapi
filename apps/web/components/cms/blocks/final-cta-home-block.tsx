import type { FinalCtaHomeBlock } from '@/types/strapi'
import { FinalCtaSection } from '@/components/final-cta-section'

export function FinalCtaHomeBlockView({
  block,
}: {
  block: FinalCtaHomeBlock
  locale: string
}) {
  if (block.isEnabled === false) return null
  return <FinalCtaSection />
}
