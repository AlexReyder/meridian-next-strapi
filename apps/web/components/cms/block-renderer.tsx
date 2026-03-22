import { blockKey } from '@/lib/normalize-page'
import type { SiteLocale } from '@/lib/i18n'
import type { CmsBlock } from '@/types/strapi'

import { HeroHomeBlockView } from '@/components/cms/blocks/home/hero-home-block'
import { ValueHomeBlockView } from '@/components/cms/blocks/home/value-home-block'
import { DeliverablesHomeBlockView } from '@/components/cms/blocks/home/deliverables-home-block'
import { WhyHomeBlockView } from '@/components/cms/blocks/home/why-home-block'
import { AudienceHomeBlockView } from '@/components/cms/blocks/home/audience-home-block'
import { ConceptsHomeBlockView } from '@/components/cms/blocks/home/concepts-home-block'
import { MethodHomeBlockView } from '@/components/cms/blocks/home/method-home-block'
import { PricingHomeBlockView } from '@/components/cms/blocks/home/pricing-home-block'
import { ProposalHomeBlockView } from '@/components/cms/blocks/home/proposal-home-block'
import { SamplePreviewHomeBlockView } from '@/components/cms/blocks/home/sample-preview-home-block'
import { TrustHomeBlockView } from '@/components/cms/blocks/home/trust-home-block'
import { FaqHomeBlockView } from '@/components/cms/blocks/home/faq-home-block'
import { FinalCtaHomeBlockView } from '@/components/cms/blocks/home/final-cta-home-block'

export function BlockRenderer({
  blocks = [],
  locale,
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
            return <HeroHomeBlockView key={blockKey(block, index)} block={block} locale={locale} />
          case 'page.value-home':
            return <ValueHomeBlockView key={blockKey(block, index)} block={block} locale={locale} />
          case 'page.deliverables-home':
            return (
              <DeliverablesHomeBlockView
                key={blockKey(block, index)}
                block={block}
                locale={locale}
              />
            )
          case 'page.why-home':
            return <WhyHomeBlockView key={blockKey(block, index)} block={block} locale={locale} />
          case 'page.audience-home':
            return (
              <AudienceHomeBlockView key={blockKey(block, index)} block={block} locale={locale} />
            )
          case 'page.concepts-home':
            return (
              <ConceptsHomeBlockView key={blockKey(block, index)} block={block} locale={locale} />
            )
          case 'page.method-home':
            return <MethodHomeBlockView key={blockKey(block, index)} block={block} locale={locale} />
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
            return <TrustHomeBlockView key={blockKey(block, index)} block={block} locale={locale} />
          case 'page.faq-home':
            return <FaqHomeBlockView key={blockKey(block, index)} block={block} locale={locale} />
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
