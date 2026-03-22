import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categoryTags = [
  "Landing pages и сайты",
  "Web products",
  "Mobile apps",
  "MVP interfaces",
  "Investor-ready prototype",
  "Redesign"
]

export function StartupsHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.008] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-accent" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Для стартапов</span>
          </div>
          
          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-light leading-[1.08] tracking-tight text-foreground text-balance">
            Для стартапов, которым нужен ясный продукт до начала разработки
          </h1>
          
          {/* Subheadline */}
          <p className="mt-8 text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Мы помогаем startup-командам собрать структуру сайта, web-продукта или mobile app, 
            чтобы проект было проще показать инвесторам, объяснить команде и передать в разработку.
          </p>

          {/* Support line */}
          <p className="mt-4 text-base text-muted-foreground/80 leading-relaxed">
            Подходит для MVP, pitch, investor presentation, redesign и ранней product-упаковки.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
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

          {/* Category Tags */}
          <div className="mt-12 pt-8 border-t border-border/40">
            <div className="flex flex-wrap gap-2.5">
              {categoryTags.map((tag) => (
                <span 
                  key={tag}
                  className="inline-flex items-center px-3.5 py-2 text-[10px] uppercase tracking-[0.12em] text-muted-foreground/80 bg-background border border-border/50 rounded-sm hover:border-border/80 hover:text-foreground/70 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
