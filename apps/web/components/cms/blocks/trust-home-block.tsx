import type { TrustHomeBlock } from '@/types/strapi'
import { TrustSection } from '@/components/trust-section'

export function TrustHomeBlockView({
  block,
}: {
  block: TrustHomeBlock
  locale: string
}) {
  if (block.isEnabled === false) return null
  return <TrustSection />
}
