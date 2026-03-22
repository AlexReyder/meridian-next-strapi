import type { ConceptsHomeBlock } from '@/types/strapi'
import { ConceptsSection } from '@/components/concepts-section'

export function ConceptsHomeBlockView({
  block,
}: {
  block: ConceptsHomeBlock
  locale: string
}) {
  if (block.isEnabled === false) return null
  return <ConceptsSection />
}
