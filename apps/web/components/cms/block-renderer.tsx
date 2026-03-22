import { blockKey } from '@/lib/normalize-page'
import type { SiteLocale } from '@/lib/i18n'
import type { CmsBlock } from '@/types/strapi'

import { HeroHomeBlockView } from '@/components/cms/blocks/home/hero-home-block'

export function BlockRenderer({
  blocks = [],
  locale,
}: {
  blocks?: CmsBlock[]
  locale: SiteLocale
  pageTitle?: string
  pageSlug?: string
}) {

  const homeComponentsMap = {
  'page.hero-hero': HeroHomeBlockView,
};

  return (
    <>
      {blocks.map((block, index) => {
        switch (block.__component) {
          case 'page.hero-home':
            return <HeroHomeBlockView key={blockKey(block, index)} block={block} locale={locale} />
         
          default:
            return null
        }
      })}
    </>
  )
}
