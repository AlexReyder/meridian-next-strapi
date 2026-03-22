import { CheckCircle } from 'lucide-react'
import type { TrustHomeBlock } from '@/types/strapi'
import type { SiteLocale } from '@/lib/i18n'

export function TrustHomeBlockView({ block, locale }: { block: TrustHomeBlock; locale: SiteLocale }) {
  const isRtl = locale === 'ar'
  return (
    <section className="py-24 lg:py-32" dir={isRtl ? 'rtl' : 'ltr'}><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="relative py-16"><div className="absolute top-0 left-0 right-0 flex items-center"><div className="flex-1 h-[1px] bg-border" />{isRtl ? <><div className="h-[2px] w-2 bg-signature-brass rounded-full mx-1" /><div className="h-[2px] w-3 bg-signature-cobalt rounded-full" /></> : <><div className="h-[2px] w-3 bg-signature-cobalt rounded-full mx-1" /><div className="h-[2px] w-2 bg-signature-brass rounded-full" /></>}<div className="flex-1 h-[1px] bg-border" /></div><div className="absolute bottom-0 left-0 right-0 flex items-center"><div className="flex-1 h-[1px] bg-border" />{isRtl ? <><div className="h-[2px] w-2 bg-signature-brass rounded-full mx-1" /><div className="h-[2px] w-3 bg-signature-cobalt rounded-full" /></> : <><div className="h-[2px] w-3 bg-signature-cobalt rounded-full mx-1" /><div className="h-[2px] w-2 bg-signature-brass rounded-full" /></>}<div className="flex-1 h-[1px] bg-border" /></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">{block.items?.map((item,index)=><div key={item.id ?? index} className="flex items-start gap-4"><CheckCircle className="h-5 w-5 text-signature-cobalt flex-shrink-0 mt-0.5" /><p className="text-foreground leading-relaxed">{item.text}</p></div>)}</div></div></div></section>
  )
}
