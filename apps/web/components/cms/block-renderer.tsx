import { HeroHomeBlockView } from '@/components/cms/blocks/hero-home-block'
import { HeroBlockView } from '@/components/cms/blocks/hero-block'
import { RichTextBlockView } from '@/components/cms/blocks/rich-text-block'
import { MediaTextBlockView } from '@/components/cms/blocks/media-text-block'
import { CardsGridBlockView } from '@/components/cms/blocks/cards-grid-block'
import { VideoSectionBlockView } from '@/components/cms/blocks/video-section-block'
import { StepsBlockView } from '@/components/cms/blocks/steps-block'
import { StatementsStripBlockView } from '@/components/cms/blocks/statements-strip-block'
import { ConceptNavBlockView } from '@/components/cms/blocks/concept-nav-block'
import { ConceptSectionBlockView } from '@/components/cms/blocks/concept-section-block'
import { FaqBlockView } from '@/components/cms/blocks/faq-block'
import { CtaBlockView } from '@/components/cms/blocks/cta-block'
import { FormSectionBlockView } from '@/components/cms/blocks/form-section-block'
import { blockKey } from '@/lib/normalize-page'
import type { SiteLocale } from '@/lib/i18n'
import type { CmsBlock } from '@/types/strapi'

export function BlockRenderer({
  blocks = [],
  locale,
  pageTitle,
  pageSlug,
}: {
  blocks?: CmsBlock[]
  locale: SiteLocale
  pageTitle?: string
  pageSlug?: string
}) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.__component) {
          case 'page.hero-home':
            return (
              <HeroHomeBlockView
                key={blockKey(block, index)}
                block={block}
                locale={locale}
              />
            )
          case 'page.hero':
            return (
              <HeroBlockView
                key={blockKey(block, index)}
                block={block}
                locale={locale}
              />
            )
          case 'page.rich-text':
            return (
              <RichTextBlockView
                key={blockKey(block, index)}
                block={block}
                locale={locale}
              />
            )
          case 'page.media-text':
            return (
              <MediaTextBlockView
                key={blockKey(block, index)}
                block={block}
                locale={locale}
              />
            )
          case 'page.cards-grid':
            return (
              <CardsGridBlockView
                key={blockKey(block, index)}
                block={block}
                locale={locale}
              />
            )
          case 'page.video-section':
            return (
              <VideoSectionBlockView
                key={blockKey(block, index)}
                block={block}
                locale={locale}
              />
            )
          case 'page.steps':
            return (
              <StepsBlockView
                key={blockKey(block, index)}
                block={block}
                locale={locale}
              />
            )
          case 'page.statements-strip':
            return (
              <StatementsStripBlockView
                key={blockKey(block, index)}
                block={block}
                locale={locale}
              />
            )
          case 'page.concept-nav':
            return (
              <ConceptNavBlockView
                key={blockKey(block, index)}
                block={block}
                locale={locale}
              />
            )
          case 'page.concept-section':
            return (
              <ConceptSectionBlockView
                key={blockKey(block, index)}
                block={block}
                locale={locale}
              />
            )
          case 'page.faq':
            return (
              <FaqBlockView
                key={blockKey(block, index)}
                block={block}
                locale={locale}
              />
            )
          case 'page.cta':
            return (
              <CtaBlockView
                key={blockKey(block, index)}
                block={block}
                locale={locale}
              />
            )
          case 'page.form-section':
            return (
              <FormSectionBlockView
                key={blockKey(block, index)}
                block={block}
                locale={locale}
                pageTitle={pageTitle}
                pageSlug={pageSlug}
              />
            )
          default:
            return null
        }
      })}
    </>
  )
}
