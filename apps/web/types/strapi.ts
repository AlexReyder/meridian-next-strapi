export interface StrapiImageFormat {
  url: string
  width: number
  height: number
}

export interface StrapiImage {
  id: number
  url: string
  alternativeText?: string | null
  caption?: string | null
  width?: number
  height?: number
  formats?: Record<string, StrapiImageFormat>
}

export interface SeoComponent {
  metaTitle?: string
  metaDescription?: string
  shareImage?: StrapiImage | null
}

export interface MenuItem {
  id: number
  label: string
  href: string
  openInNewTab?: boolean
}

export interface FooterColumn {
  id: number
  title: string
  items?: MenuItem[]
}

export interface GlobalSettingsResponse {
  id: number
  siteName: string
  siteDescription: string
  contactEmail?: string
  favicon?: StrapiImage | null
  defaultSeo?: SeoComponent | null
  menuItems?: MenuItem[]
  footerColumns?: FooterColumn[]
  footerLegalLinks?: MenuItem[]
  footerCopyright?: string
}

export interface HeroTag {
  id?: number
  label: string
}

export interface HomeSimpleItem {
  id?: number
  title?: string
  label?: string
  secondaryLabel?: string
  description?: string
  icon?: string
  badge?: string
  challengeLabel?: string
  challenge?: string
  structuredLabel?: string
  structured?: string
  deliveredLabel?: string
  delivered?: string
  imageUrl?: string
  imageAlt?: string
  name?: string
  price?: string
  timeline?: string
  includes?: string[]
  featured?: boolean
  buttonLabel?: string
  buttonHref?: string
  problemLabel?: string
  problem?: string
  solutionLabel?: string
  solution?: string
  resultLabel?: string
  result?: string
  ctaLabel?: string
  ctaHref?: string
  question?: string
  answer?: string
}

export interface FaqItem {
  id?: number
  question: string
  answer: string
}

export interface StepItem {
  id?: number
  number?: string
  title: string
  description?: string
  details?: string[]
}

export interface HeroHomeBlock {
  __component: 'page.hero-home'
  id: number
  sectionId?: string
  isEnabled?: boolean
  eyebrow?: string
  titleHtml?: string
  description?: string
  supportingText?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  tags?: HeroTag[]
  primaryImage?: StrapiImage | null
  primaryImageAlt?: string
  primaryImageLabel?: string
  secondaryImage?: StrapiImage | null
  secondaryImageAlt?: string
  secondaryImageLabel?: string
}

export interface ValueHomeBlock {
  __component: 'page.value-home'
  id: number
  sectionId?: string
  isEnabled?: boolean
  eyebrow?: string
  title?: string
  items?: HomeSimpleItem[]
}

export interface DeliverablesHomeBlock {
  __component: 'page.deliverables-home'
  id: number
  sectionId?: string
  isEnabled?: boolean
  eyebrow?: string
  title?: string
  items?: HomeSimpleItem[]
}

export interface WhyHomeBlock {
  __component: 'page.why-home'
  id: number
  sectionId?: string
  isEnabled?: boolean
  eyebrow?: string
  title?: string
  description?: string
  items?: HomeSimpleItem[]
}

export interface AudienceHomeBlock {
  __component: 'page.audience-home'
  id: number
  sectionId?: string
  isEnabled?: boolean
  eyebrow?: string
  title?: string
  items?: HomeSimpleItem[]
}

export interface ConceptsHomeBlock {
  __component: 'page.concepts-home'
  id: number
  sectionId?: string
  isEnabled?: boolean
  eyebrow?: string
  title?: string
  ctaLabel?: string
  ctaHref?: string
  items?: HomeSimpleItem[]
}

export interface MethodHomeBlock {
  __component: 'page.method-home'
  id: number
  sectionId?: string
  isEnabled?: boolean
  eyebrow?: string
  title?: string
  description?: string
  items?: StepItem[]
}

export interface PricingHomeBlock {
  __component: 'page.pricing-home'
  id: number
  sectionId?: string
  isEnabled?: boolean
  eyebrow?: string
  title?: string
  items?: HomeSimpleItem[]
}

export interface ProposalHomeBlock {
  __component: 'page.proposal-home'
  id: number
  sectionId?: string
  isEnabled?: boolean
  title?: string
  description?: string
  buttonLabel?: string
  buttonHref?: string
  items?: HomeSimpleItem[]
}

export interface SamplePreviewHomeBlock {
  __component: 'page.sample-preview-home'
  id: number
  sectionId?: string
  isEnabled?: boolean
  eyebrow?: string
  title?: string
  description?: string
  items?: HomeSimpleItem[]
}

export interface TrustHomeBlock {
  __component: 'page.trust-home'
  id: number
  sectionId?: string
  isEnabled?: boolean
  eyebrow?: string
  title?: string
  description?: string
  items?: HomeSimpleItem[]
}

export interface FaqHomeBlock {
  __component: 'page.faq-home'
  id: number
  sectionId?: string
  isEnabled?: boolean
  title?: string
  items?: FaqItem[]
}

export interface FinalCtaHomeBlock {
  __component: 'page.final-cta-home'
  id: number
  sectionId?: string
  isEnabled?: boolean
  eyebrow?: string
  title?: string
  description?: string
  buttonLabel?: string
  buttonHref?: string
  secondaryButtonLabel?: string
  secondaryButtonHref?: string
}

export type CmsBlock =
  | HeroHomeBlock
  | ValueHomeBlock
  | DeliverablesHomeBlock
  | WhyHomeBlock
  | AudienceHomeBlock
  | ConceptsHomeBlock
  | MethodHomeBlock
  | PricingHomeBlock
  | ProposalHomeBlock
  | SamplePreviewHomeBlock
  | TrustHomeBlock
  | FaqHomeBlock
  | FinalCtaHomeBlock

export interface CmsPage {
  id: number
  title: string
  slug: string
  template: 'home'
  seo?: SeoComponent | null
  blocks?: CmsBlock[]
}

export interface StrapiSingleResponse<T> {
  data: T
  meta: Record<string, unknown>
}

export interface PageResponse {
  data: CmsPage[]
  meta: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}
