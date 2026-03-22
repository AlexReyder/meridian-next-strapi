import type { MethodHomeBlock } from '@/types/strapi'
import { MethodSection } from '@/components/method-section'

export function MethodHomeBlockView({
  block,
  locale,
}: {
  block: MethodHomeBlock
  locale: string
}) {
  if (block.isEnabled === false) return null

  return <MethodSection />
}

export const MethodHomeBlockView = MethodHomeBlockView
