import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { AudienceHomeBlock } from '@/types/strapi'
import type { SiteLocale } from '@/lib/i18n'

export function AudienceHomeBlockView({ block, locale }: { block: AudienceHomeBlock; locale: SiteLocale }) {
  const isRtl = locale === 'ar'
  return (
    <section id={block.sectionId || 'startups'} className="py-24 lg:py-32" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4"><div className="flex items-center">{isRtl ? <><span className="h-[2px] w-2 bg-signature-brass rounded-full" /><span className="h-[2px] w-3 bg-signature-cobalt mr-0.5 rounded-full" /></> : <><span className="h-[2px] w-3 bg-signature-cobalt rounded-full" /><span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" /></>}</div><span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{block.eyebrow}</span></div>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">{block.title}</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">{block.items?.map((item,index)=><div key={item.id ?? `${item.title}-${index}`} className="group relative flex flex-col p-8 lg:p-10 bg-card border border-border rounded-sm hover:border-foreground/20 transition-all duration-300 h-full">{index===0 && <div className={`absolute top-0 ${isRtl?'right-0':'left-0'}`}><div className={`absolute top-0 ${isRtl?'right-0 rounded-l-full':'left-0 rounded-r-full'} w-4 h-[2px] bg-signature-cobalt`} /><div className={`absolute top-0 ${isRtl?'right-0':'left-0'} h-4 w-[2px] bg-signature-cobalt rounded-b-full`} /><div className={`absolute top-[2px] ${isRtl?'right-4':'left-4'} w-2 h-[1.5px] bg-signature-brass/70 rounded-full`} /></div>}<h3 className="font-serif text-xl lg:text-2xl text-foreground mb-8 min-h-[3.5rem] lg:min-h-[4rem]">{item.title}</h3><div className="flex-1 space-y-6"><div className="min-h-[5rem]"><p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{item.problemLabel}</p><p className="text-muted-foreground leading-relaxed">{item.problem}</p></div><div className="min-h-[5rem]"><p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{item.solutionLabel}</p><p className="text-foreground leading-relaxed">{item.solution}</p></div><div className="min-h-[4rem]"><p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{item.resultLabel}</p><p className="text-foreground leading-relaxed">{item.result}</p></div></div>{item.ctaHref ? <Link href={item.ctaHref} className="inline-flex items-center gap-2 mt-8 pt-6 border-t border-border/60 text-sm text-foreground hover:text-signature-cobalt transition-colors group/link">{isRtl ? <ArrowLeft className="h-4 w-4 group-hover/link:-translate-x-1 transition-transform" /> : null}<span>{item.ctaLabel}</span>{!isRtl ? <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" /> : null}</Link> : null}</div>)}</div>
      </div>
    </section>
  )
}
