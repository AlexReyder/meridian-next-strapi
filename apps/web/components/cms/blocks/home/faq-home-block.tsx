import type { FaqHomeBlock } from '@/types/strapi'
import { FaqSection } from '@/components/faq-section'

export function FaqHomeBlockView({
  block,
  locale,
}: {
  block: FaqHomeBlock
  locale: string
}) {
  if (block.isEnabled === false) return null

  return <FaqSection />
}

export const FaqHomeBlockView = FaqHomeBlockView
