import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { FinalCtaHomeBlock } from '@/types/strapi'
import type { SiteLocale } from '@/lib/i18n'

export function FinalCtaHomeBlockView({ block, locale }: { block: FinalCtaHomeBlock; locale: SiteLocale }) {
  const isRtl = locale === 'ar'
  return (
    <section className="py-24 lg:py-32" dir={isRtl ? 'rtl' : 'ltr'}><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="text-center max-w-3xl mx-auto"><div className="flex items-center justify-center gap-0.5 mb-8"><div className="w-12 h-[1px] bg-border" />{isRtl ? <><div className="h-[2px] w-2 bg-signature-brass rounded-full" /><div className="h-[2px] w-3 bg-signature-cobalt rounded-full" /></> : <><div className="h-[2px] w-3 bg-signature-cobalt rounded-full" /><div className="h-[2px] w-2 bg-signature-brass rounded-full" /></>}<div className="w-12 h-[1px] bg-border" /></div><h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">{block.title}</h2><p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">{block.description}</p><div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"><div className="relative group">{block.primaryButtonHref ? <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 text-sm uppercase tracking-wider px-10 h-14"><Link href={block.primaryButtonHref}>{isRtl ? <ArrowLeft className="ml-2 h-4 w-4" /> : null}{block.primaryButtonLabel}{!isRtl ? <ArrowRight className="ml-2 h-4 w-4" /> : null}</Link></Button> : null}<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-signature-cobalt to-signature-brass rounded-full transition-all duration-300 group-hover:w-1/2" /></div>{block.secondaryButtonHref ? <Button asChild variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground/5 text-sm uppercase tracking-wider px-10 h-14"><Link href={block.secondaryButtonHref}>{block.secondaryButtonLabel}</Link></Button> : null}</div>{block.footnote ? <p className="mt-6 text-sm text-muted-foreground">{block.footnote}</p> : null}</div></div></section>
  )
}
