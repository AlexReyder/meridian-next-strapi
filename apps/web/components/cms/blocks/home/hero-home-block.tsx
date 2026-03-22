import type { HeroHomeBlock } from '@/types/strapi'
import { Hero } from '@/components/hero'

export function HeroHomeBlockView({
  block,
  locale,
}: {
  block: HeroHomeBlock
  locale: string
}) {
  if (block.isEnabled === false) return null

  return <Hero />
}

export const HeroHomeBlockView = HeroHomeBlockView
