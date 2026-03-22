import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function MethodHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30 pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-accent" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Как мы работаем</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-light leading-[1.08] tracking-tight text-foreground">
            Процесс работы над сайтом, системой или приложением
          </h1>
          
          <p className="mt-8 text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Работаем с сайтами, digital-системами, порталами, dashboards и мобильными приложениями. 
            Сначала структурируем продукт — потом проектируем интерфейс и готовим материалы для разработки.
          </p>

          <p className="mt-4 text-base text-muted-foreground/80 leading-relaxed">
            Подходит для нового проекта, redesign существующего продукта, MVP-концепции 
            или investor-ready prototype.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link 
              href="/get-proposal"
              className="inline-flex items-center justify-center bg-foreground text-background hover:bg-foreground/90 text-[11px] uppercase tracking-[0.15em] px-7 h-12 rounded-md font-medium transition-colors"
            >
              Получить предложение
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/pricing"
              className="inline-flex items-center justify-center border border-foreground/15 text-foreground hover:bg-foreground/5 text-[11px] uppercase tracking-[0.15em] px-7 h-12 rounded-md font-medium transition-colors"
            >
              Посмотреть цены
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
