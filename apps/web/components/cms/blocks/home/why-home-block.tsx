import type { WhyHomeBlock } from '@/types/strapi'
import { WhySection } from '@/components/why-section'

export function WhyHomeBlockView({
  block,
  locale,
}: {
  block: WhyHomeBlock
  locale: string
}) {
  if (block.isEnabled === false) return null

  return <WhySection />
}

export const WhyHomeBlockView = WhyHomeBlockView
