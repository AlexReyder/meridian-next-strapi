import type { DeliverablesHomeBlock } from '@/types/strapi'
import { DeliverablesSection } from '@/components/deliverables-section'

export function DeliverablesHomeBlockView({
  block,
}: {
  block: DeliverablesHomeBlock
  locale: string
}) {
  if (block.isEnabled === false) return null
  return <DeliverablesSection />
}
