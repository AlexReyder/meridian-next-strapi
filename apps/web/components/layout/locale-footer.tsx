import { Footer } from '@/components/footer'
import type { SiteLocale } from '@/lib/i18n'
import type { FooterColumn, MenuItem } from '@/types/strapi'

type LocaleFooterProps = {
  locale: SiteLocale
  contactEmail?: string
  menuItems?: MenuItem[]
  footerColumns?: FooterColumn[]
  footerLegalLinks?: MenuItem[]
  footerCopyright?: string
  siteName?: string
  siteDescription?: string
}

export function LocaleFooter(_props: LocaleFooterProps) {
  return <Footer />
}
