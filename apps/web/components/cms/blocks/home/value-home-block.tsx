import type { ValueHomeBlock } from '@/types/strapi'
import { ValueSection } from '@/components/value-section'

export function ValueHomeBlockView({
  block,
  locale,
}: {
  block: ValueHomeBlock
  locale: string
}) {
  if (block.isEnabled === false) return null

  return <ValueSection />
}

export const ValueHomeBlockView = ValueHomeBlockView
