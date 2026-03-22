import type { WhyHomeBlock } from '@/types/strapi'
import type { SiteLocale } from '@/lib/i18n'

export function WhyHomeBlockView({ block, locale }: { block: WhyHomeBlock; locale: SiteLocale }) {
  const isRtl = locale === 'ar'
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4"><div className="flex items-center">{isRtl ? <><span className="h-[2px] w-2 bg-signature-brass-soft rounded-full" /><span className="h-[2px] w-3 bg-signature-cobalt-soft mr-0.5 rounded-full" /></> : <><span className="h-[2px] w-3 bg-signature-cobalt-soft rounded-full" /><span className="h-[2px] w-2 bg-signature-brass-soft ml-0.5 rounded-full" /></>}</div><span className="text-[10px] uppercase tracking-[0.2em] text-background/50">{block.eyebrow}</span></div>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-background text-balance">{block.title}</h2>
          {block.description ? <p className="mt-4 text-background/60 leading-relaxed">{block.description}</p> : null}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {block.items?.map((item, index) => <div key={item.id ?? `${item.title}-${index}`} className="relative"><div className={`absolute -top-2 ${isRtl ? 'right-0' : 'left-0'} text-6xl font-serif text-signature-cobalt-soft/20`}>{String(index + 1).padStart(2, '0')}</div>{index===0 && <div className={`absolute top-0 ${isRtl ? 'right-0' : 'left-0'} flex items-center gap-0.5`}>{isRtl ? <><div className="w-1 h-1 bg-signature-brass-soft rounded-full" /><div className="w-1.5 h-1.5 bg-signature-cobalt-soft rounded-full" /></> : <><div className="w-1.5 h-1.5 bg-signature-cobalt-soft rounded-full" /><div className="w-1 h-1 bg-signature-brass-soft rounded-full" /></>}</div>}<div className="pt-12"><h3 className="text-lg font-medium text-background mb-4">{item.title}</h3><p className="text-background/60 leading-relaxed">{item.description}</p></div></div>)}
        </div>
      </div>
    </section>
  )
}
