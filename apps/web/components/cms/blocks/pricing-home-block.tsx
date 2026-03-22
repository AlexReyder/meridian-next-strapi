import type { PricingHomeBlock } from '@/types/strapi'
import { PricingSection } from '@/components/pricing-section'

export function PricingHomeBlockView({
  block,
}: {
  block: PricingHomeBlock
  locale: string
}) {
  if (block.isEnabled === false) return null
  return <PricingSection />
}
