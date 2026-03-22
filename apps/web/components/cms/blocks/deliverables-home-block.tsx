import type { DeliverablesHomeBlock } from '@/types/strapi'
import type { SiteLocale } from '@/lib/i18n'
import { getHomeIcon } from '@/components/cms/blocks/home-icon-map'

export function DeliverablesHomeBlockView({ block, locale }: { block: DeliverablesHomeBlock; locale: SiteLocale }) {
  const isRtl = locale === 'ar'
  return (
    <section className="py-24 lg:py-32" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4"><div className="flex items-center">{isRtl ? <><span className="h-[2px] w-2 bg-signature-brass rounded-full" /><span className="h-[2px] w-3 bg-signature-cobalt mr-0.5 rounded-full" /></> : <><span className="h-[2px] w-3 bg-signature-cobalt rounded-full" /><span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" /></>}</div><span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{block.eyebrow}</span></div>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">{block.title}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {block.items?.map((item, index) => {
            const Icon = getHomeIcon(item.icon)
            return <div key={item.id ?? `${item.title}-${index}`} className="group relative p-6 border border-border rounded-sm hover:border-foreground/20 hover:bg-secondary/30 transition-all duration-300">{index===0 && <div className={`absolute top-0 ${isRtl ? 'right-0' : 'left-0'}`}><div className={`absolute top-0 ${isRtl ? 'right-0 rounded-l-full' : 'left-0 rounded-r-full'} w-4 h-[2px] bg-signature-cobalt`} /><div className={`absolute top-0 ${isRtl ? 'right-0' : 'left-0'} h-4 w-[2px] bg-signature-cobalt rounded-b-full`} /><div className={`absolute top-[2px] ${isRtl ? 'right-4' : 'left-4'} w-2 h-[1.5px] bg-signature-brass/70 rounded-full`} /></div>}<div className="mb-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-signature-cobalt/10 transition-colors"><Icon className="h-4 w-4 text-foreground group-hover:text-signature-cobalt transition-colors" /></div><h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p></div>
          })}
        </div>
      </div>
    </section>
  )
}
