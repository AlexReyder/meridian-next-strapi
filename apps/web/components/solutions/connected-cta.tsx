import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ConnectedCta() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="bg-card rounded-lg border border-border/60 p-8 lg:p-12 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-light leading-snug tracking-tight text-foreground max-w-2xl mx-auto">
            Не уверены, какое решение подходит именно вам?
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
            Опишите задачу — мы предложим подходящий формат работы, ориентир по срокам и следующий шаг.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-proposal"
              className="inline-flex items-center justify-center bg-foreground text-background hover:bg-foreground/90 text-[11px] uppercase tracking-[0.15em] px-7 h-11 rounded-md font-medium transition-colors"
            >
              Получить предложение
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center border border-foreground/15 text-foreground hover:bg-foreground/5 text-[11px] uppercase tracking-[0.15em] px-7 h-11 rounded-md font-medium transition-colors"
            >
              Посмотреть цены
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
