import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function MethodCTA() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">
          Готовы начать работу над проектом?
        </h2>
        
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Расскажите о вашей задаче — сайт, digital-система, портал или mobile app. 
          Мы предложим формат работы, сроки и стоимость.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/get-proposal"
            className="inline-flex items-center justify-center bg-foreground text-background hover:bg-foreground/90 text-[11px] uppercase tracking-[0.15em] px-8 h-12 rounded-md font-medium transition-colors"
          >
            Получить предложение
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link 
            href="/pricing"
            className="inline-flex items-center justify-center border border-foreground/15 text-foreground hover:bg-foreground/5 text-[11px] uppercase tracking-[0.15em] px-8 h-12 rounded-md font-medium transition-colors"
          >
            Посмотреть цены
          </Link>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Для сайта, mobile app, портала, dashboard или digital-системы.
        </p>
      </div>
    </section>
  )
}
