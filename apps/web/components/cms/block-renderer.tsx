import type { CmsBlock } from '@/types/strapi'
import { blockKey } from '@/lib/normalize-page'
import { HeroBlockView } from '@/components/cms/blocks/hero-block'
import { RichTextBlockView } from '@/components/cms/blocks/rich-text-block'
import { MediaTextBlockView } from '@/components/cms/blocks/media-text-block'
import { CardsGridBlockView } from '@/components/cms/blocks/cards-grid-block'
import { FaqBlockView } from '@/components/cms/blocks/faq-block'
import { CtaBlockView } from '@/components/cms/blocks/cta-block'
import { FormSectionBlockView } from '@/components/cms/blocks/form-section-block'

export function BlockRenderer({ blocks = [], locale }: { blocks?: CmsBlock[]; locale: string }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.__component) {
          case 'page.hero':
            return <HeroBlockView key={blockKey(block, index)} block={block} locale={locale} />
          case 'page.rich-text':
            return <RichTextBlockView key={blockKey(block, index)} block={block} />
          case 'page.media-text':
            return <MediaTextBlockView key={blockKey(block, index)} block={block} />
          case 'page.cards-grid':
            return <CardsGridBlockView key={blockKey(block, index)} block={block} />
          case 'page.faq':
            return <FaqBlockView key={blockKey(block, index)} block={block} />
          case 'page.cta':
            return <CtaBlockView key={blockKey(block, index)} block={block} locale={locale} />
          case 'page.form-section':
            return <FormSectionBlockView key={blockKey(block, index)} block={block} />
          default:
            return null
        }
      })}
    </>
  )
}
