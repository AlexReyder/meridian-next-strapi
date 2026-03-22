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

export interface HeroBlock {
  __component: 'page.hero'
  id: number
  sectionId?: string
  eyebrow?: string
  title: string
  description?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  tags?: HeroTag[]
  primaryImage?: StrapiImage | null
  primaryImageLabel?: string
  secondaryImage?: StrapiImage | null
  secondaryImageLabel?: string
}

export interface RichTextBlock {
  __component: 'page.rich-text'
  id: number
  sectionId?: string
  title?: string
  body: string
}

export interface MediaTextBlock {
  __component: 'page.media-text'
  id: number
  sectionId?: string
  title?: string
  body?: string
  image?: StrapiImage | null
  imageAlt?: string
  mediaPosition?: 'left' | 'right'
}

export interface CardItem {
  id?: number
  eyebrow?: string
  title: string
  description?: string
  image?: StrapiImage | null
  buttonLabel?: string
  buttonHref?: string
}

export type CardsGridVariant =
  | 'default'
  | 'outcomes'
  | 'deliverables'
  | 'pillars'
  | 'audience'
  | 'concepts'
  | 'pricing'
  | 'solutions-grid'
  | 'artifacts'
  | 'situations'
  | 'efficiency'
  | 'projects'
  | 'packages'
  | 'conversion-paths'
  | 'decision-support'
  | 'trust'

export interface CardsGridBlock {
  __component: 'page.cards-grid'
  id: number
  sectionId?: string
  eyebrow?: string
  title?: string
  description?: string
  variant?: CardsGridVariant
  theme?: 'light' | 'dark' | 'muted'
  columns?: '2' | '3' | '4'
  items?: CardItem[]
}

export interface TextItem {
  id?: number
  text: string
}

export interface VideoSectionBlock {
  __component: 'page.video-section'
  id: number
  sectionId?: string
  eyebrow?: string
  title?: string
  description?: string
  highlights?: TextItem[]
  videoUrl?: string | null
  posterImage?: StrapiImage | null
  note?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
}

export interface StepItem {
  id?: number
  number?: string
  title: string
  description?: string
  details?: string[]
}

export interface StepsBlock {
  __component: 'page.steps'
  id: number
  sectionId?: string
  eyebrow?: string
  title?: string
  description?: string
  variant?: 'process' | 'proposal' | 'method' | 'checklist'
  items?: StepItem[]
}

export interface StatementsStripBlock {
  __component: 'page.statements-strip'
  id: number
  sectionId?: string
  items?: TextItem[]
}

export interface ConceptNavItem {
  id?: number
  anchorId: string
  label: string
}

export interface ConceptNavBlock {
  __component: 'page.concept-nav'
  id: number
  sectionId?: string
  title?: string
  items?: ConceptNavItem[]
}

export interface ConceptDetail {
  id?: number
  label: string
  value: string
}

export interface ConceptSectionBlock {
  __component: 'page.concept-section'
  id: number
  sectionId?: string
  categoryLabel?: string
  title: string
  intro?: string
  image?: StrapiImage | null
  layout?: 'imageLeft' | 'imageRight'
  details?: ConceptDetail[]
  ctaLabel?: string
  ctaHref?: string
}

export interface FaqItem {
  id?: number
  question: string
  answer: string
}

export interface FaqBlock {
  __component: 'page.faq'
  id: number
  sectionId?: string
  title?: string
  items?: FaqItem[]
}

export interface CtaBlock {
  __component: 'page.cta'
  id: number
  sectionId?: string
  eyebrow?: string
  title: string
  description?: string
  buttonLabel?: string
  buttonHref?: string
  secondaryButtonLabel?: string
  secondaryButtonHref?: string
  theme?: 'light' | 'dark'
}

export interface FormSectionBlock {
  __component: 'page.form-section'
  id: number
  sectionId?: string
  title: string
  description?: string
  submitLabel?: string
  successMessage?: string
  acceptsFiles?: boolean
  maxFileSizeMb?: number
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
  primaryImageUrl?: string
  primaryImageAlt?: string
  primaryImageLabel?: string
  secondaryImageUrl?: string
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
  | HeroBlock
  | RichTextBlock
  | MediaTextBlock
  | CardsGridBlock
  | VideoSectionBlock
  | StepsBlock
  | StatementsStripBlock
  | ConceptNavBlock
  | ConceptSectionBlock
  | FaqBlock
  | CtaBlock
  | FormSectionBlock
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
  template:
    | 'home'
    | 'solutions'
    | 'for-startups'
    | 'for-agencies'
    | 'pricing'
    | 'method'
    | 'concepts'
    | 'get-proposal'
    | 'landing'
    | 'generic'
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
