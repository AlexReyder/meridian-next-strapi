import type { AudienceHomeBlock } from '@/types/strapi'
import { AudienceSection } from '@/components/audience-section'

export function AudienceHomeBlockView({
  block,
}: {
  block: AudienceHomeBlock
  locale: string
}) {
  if (block.isEnabled === false) return null
  return <AudienceSection />
}
