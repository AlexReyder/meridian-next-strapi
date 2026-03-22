import type { MethodHomeBlock } from '@/types/strapi'
import type { SiteLocale } from '@/lib/i18n'

export function MethodHomeBlockView({ block, locale }: { block: MethodHomeBlock; locale: SiteLocale }) {
  const isRtl = locale === 'ar'
  return (
    <section id={block.sectionId || 'method'} className="py-24 lg:py-32" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16"><div className="flex items-center gap-3 mb-4"><div className="flex items-center">{isRtl ? <><span className="h-[2px] w-2 bg-signature-brass rounded-full" /><span className="h-[2px] w-3 bg-signature-cobalt mr-0.5 rounded-full" /></> : <><span className="h-[2px] w-3 bg-signature-cobalt rounded-full" /><span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" /></>}</div><span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{block.eyebrow}</span></div><h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">{block.title}</h2>{block.description ? <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">{block.description}</p> : null}</div>
        <div className="space-y-0">{block.items?.map((step)=><div key={step.id ?? step.number} className="group grid lg:grid-cols-12 gap-8 py-10 border-t border-border first:border-t-0"><div className="lg:col-span-1"><span className="font-serif text-3xl lg:text-4xl text-signature-cobalt/40 group-hover:text-signature-cobalt transition-colors">{step.number}</span></div><div className="lg:col-span-2"><h3 className="font-serif text-2xl lg:text-3xl text-foreground">{step.title}</h3></div><div className="lg:col-span-5"><p className="text-muted-foreground leading-relaxed">{step.description}</p></div><div className="lg:col-span-4"><div className="flex flex-wrap gap-2">{step.details?.map((detail, index)=><span key={`${detail}-${index}`} className="text-xs uppercase tracking-wider text-muted-foreground border border-border px-3 py-1.5 rounded-sm">{detail}</span>)}</div></div></div>)}</div>
      </div>
    </section>
  )
}
