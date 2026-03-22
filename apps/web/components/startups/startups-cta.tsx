import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function StartupsCTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">
          Не уверены, с чего начать: с сайта, MVP или prototype?
        </h2>
        
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Опишите задачу — мы предложим подходящий формат работы, 
          ориентир по срокам и следующий шаг.
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
          Подходит для startup-сайтов, web products, mobile apps и investor-ready materials.
        </p>
      </div>
    </section>
  )
}
