import type { CmsBlock } from '@/types/strapi'
import { blockKey } from '@/lib/normalize-page'
import type { SiteLocale } from '@/lib/i18n'

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
import { HeroHomeBlockView } from '@/components/cms/blocks/hero-home-block'
import { ValueHomeBlockView } from '@/components/cms/blocks/value-home-block'
import { DeliverablesHomeBlockView } from '@/components/cms/blocks/deliverables-home-block'
import { WhyHomeBlockView } from '@/components/cms/blocks/why-home-block'
import { AudienceHomeBlockView } from '@/components/cms/blocks/audience-home-block'
import { ConceptsHomeBlockView } from '@/components/cms/blocks/concepts-home-block'
import { MethodHomeBlockView } from '@/components/cms/blocks/method-home-block'
import { PricingHomeBlockView } from '@/components/cms/blocks/pricing-home-block'
import { ProposalHomeBlockView } from '@/components/cms/blocks/proposal-home-block'
import { SamplePreviewHomeBlockView } from '@/components/cms/blocks/sample-preview-home-block'
import { TrustHomeBlockView } from '@/components/cms/blocks/trust-home-block'
import { FaqHomeBlockView } from '@/components/cms/blocks/faq-home-block'
import { FinalCtaHomeBlockView } from '@/components/cms/blocks/final-cta-home-block'

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
          case 'page.hero':
            return <HeroBlockView key={blockKey(block, index)} block={block} locale={locale} />
          case 'page.rich-text':
            return (
              <RichTextBlockView key={blockKey(block, index)} block={block} locale={locale} />
            )
          case 'page.media-text':
            return (
              <MediaTextBlockView key={blockKey(block, index)} block={block} locale={locale} />
            )
          case 'page.cards-grid':
            return (
              <CardsGridBlockView key={blockKey(block, index)} block={block} locale={locale} />
            )
          case 'page.video-section':
            return (
              <VideoSectionBlockView key={blockKey(block, index)} block={block} locale={locale} />
            )
          case 'page.steps':
            return <StepsBlockView key={blockKey(block, index)} block={block} locale={locale} />
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
              <ConceptNavBlockView key={blockKey(block, index)} block={block} locale={locale} />
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
            return <FaqBlockView key={blockKey(block, index)} block={block} locale={locale} />
          case 'page.cta':
            return <CtaBlockView key={blockKey(block, index)} block={block} locale={locale} />
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
          case 'page.hero-home':
            return (
              <HeroHomeBlockView key={blockKey(block, index)} block={block} locale={locale} />
            )
          case 'page.value-home':
            return (
              <ValueHomeBlockView key={blockKey(block, index)} block={block} locale={locale} />
            )
          case 'page.deliverables-home':
            return (
              <DeliverablesHomeBlockView
                key={blockKey(block, index)}
                block={block}
                locale={locale}
              />
            )
          case 'page.why-home':
            return (
              <WhyHomeBlockView key={blockKey(block, index)} block={block} locale={locale} />
            )
          case 'page.audience-home':
            return (
              <AudienceHomeBlockView key={blockKey(block, index)} block={block} locale={locale} />
            )
          case 'page.concepts-home':
            return (
              <ConceptsHomeBlockView key={blockKey(block, index)} block={block} locale={locale} />
            )
          case 'page.method-home':
            return (
              <MethodHomeBlockView key={blockKey(block, index)} block={block} locale={locale} />
            )
          case 'page.pricing-home':
            return (
              <PricingHomeBlockView key={blockKey(block, index)} block={block} locale={locale} />
            )
          case 'page.proposal-home':
            return (
              <ProposalHomeBlockView key={blockKey(block, index)} block={block} locale={locale} />
            )
          case 'page.sample-preview-home':
            return (
              <SamplePreviewHomeBlockView
                key={blockKey(block, index)}
                block={block}
                locale={locale}
              />
            )
          case 'page.trust-home':
            return (
              <TrustHomeBlockView key={blockKey(block, index)} block={block} locale={locale} />
            )
          case 'page.faq-home':
            return (
              <FaqHomeBlockView key={blockKey(block, index)} block={block} locale={locale} />
            )
          case 'page.final-cta-home':
            return (
              <FinalCtaHomeBlockView key={blockKey(block, index)} block={block} locale={locale} />
            )
          default:
            return null
        }
      })}
    </>
  )
}
