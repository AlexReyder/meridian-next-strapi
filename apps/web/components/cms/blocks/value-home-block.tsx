import type { ValueHomeBlock } from '@/types/strapi'
import type { SiteLocale } from '@/lib/i18n'
import { getHomeIcon } from '@/components/cms/blocks/home-icon-map'

export function ValueHomeBlockView({ block, locale }: { block: ValueHomeBlock; locale: SiteLocale }) {
  const isRtl = locale === 'ar'
  return (
    <section className="py-20 lg:py-24 bg-secondary/30" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center">
              {isRtl ? (
                <>
                  <span className="h-[2px] w-2 bg-signature-brass rounded-full" />
                  <span className="h-[2px] w-3 bg-signature-cobalt mr-0.5 rounded-full" />
                </>
              ) : (
                <>
                  <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
                  <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
                </>
              )}
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{block.eyebrow}</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">{block.title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {block.items?.map((item, index) => {
            const Icon = getHomeIcon(item.icon)
            return (
              <div key={item.id ?? `${item.label}-${index}`} className="group relative p-8 lg:p-10 bg-card border border-border rounded-sm hover:border-foreground/20 transition-colors duration-300">
                {index === 0 && (
                  <div className={`absolute top-0 ${isRtl ? 'right-0' : 'left-0'}`}>
                    <div className={`absolute top-0 ${isRtl ? 'right-0 rounded-l-full' : 'left-0 rounded-r-full'} w-4 h-[2px] bg-signature-cobalt`} />
                    <div className={`absolute top-0 ${isRtl ? 'right-0' : 'left-0'} h-4 w-[2px] bg-signature-cobalt rounded-b-full`} />
                    <div className={`absolute top-[2px] ${isRtl ? 'right-4' : 'left-4'} w-2 h-[1.5px] bg-signature-brass/70 rounded-full`} />
                  </div>
                )}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center"><Icon className="h-5 w-5 text-foreground" /></div>
                  <div>
                    <span className="block text-xs uppercase tracking-[0.15em] text-signature-cobalt font-medium">{item.label}</span>
                    {item.secondaryLabel ? <span className="block text-lg font-serif text-foreground">{item.secondaryLabel}</span> : null}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
