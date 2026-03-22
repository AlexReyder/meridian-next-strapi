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

export interface GlobalSettingsResponse {
  id: number
  siteName: string
  siteDescription: string
  contactEmail: string
  favicon?: StrapiImage | null
  defaultSeo?: SeoComponent | null
  menuItems?: MenuItem[]
}

export interface HeroBlock {
  __component: 'page.hero'
  id: number
  eyebrow?: string
  title: string
  description?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  image?: StrapiImage | null
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
  id: number
  title: string
  description?: string
  image?: StrapiImage | null
}

export interface CardsGridBlock {
  __component: 'page.cards-grid'
  id: number
  sectionId?: string
  title?: string
  description?: string
  items?: CardItem[]
}

export interface FaqItem {
  id: number
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
  title: string
  description?: string
  buttonLabel?: string
  buttonHref?: string
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

export type CmsBlock =
  | HeroBlock
  | RichTextBlock
  | MediaTextBlock
  | CardsGridBlock
  | FaqBlock
  | CtaBlock
  | FormSectionBlock

export interface CmsPage {
  id: number
  title: string
  slug: string
  template: 'home' | 'landing' | 'service' | 'proposal' | 'generic'
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
