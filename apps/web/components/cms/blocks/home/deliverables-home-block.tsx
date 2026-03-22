import type { DeliverablesHomeBlock } from '@/types/strapi'
import { DeliverablesSection } from '@/components/deliverables-section'

export function DeliverablesHomeBlockView({
  block,
  locale,
}: {
  block: DeliverablesHomeBlock
  locale: string
}) {
  if (block.isEnabled === false) return null

  return <DeliverablesSection />
}

export const DeliverablesHomeBlockView = DeliverablesHomeBlockView
