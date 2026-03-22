import Link from "next/link"
import { ArrowRight } from "lucide-react"

const concepts = [
  {
    title: "Investor-Ready Fintech App",
    challenge: "Startup-команде нужно было показать продукт инвесторам, но интерфейсы были сырыми и неубедительными.",
    clarified: "Определили ключевые сценарии, приоритеты, визуальное направление и логику экранов.",
    prepared: "Интерактивный prototype, UI-дизайн ключевых экранов, материалы для pitch."
  },
  {
    title: "Product Website for Early-Stage Startup",
    challenge: "Нужен был сильный продуктовый сайт для нового B2B-инструмента, но не хватало ясности в позиционировании.",
    clarified: "Выстроили структуру сайта, messaging, визуальное направление и конверсионную логику.",
    prepared: "Готовый дизайн сайта с понятной структурой и материалами для разработки."
  },
  {
    title: "MVP Dashboard / Web Product Concept",
    challenge: "Founder хотел быстро собрать MVP dashboard-продукта, но не знал, с чего начать в интерфейсах.",
    clarified: "Определили core features, user flows, экранную карту и визуальный подход.",
    prepared: "Prototype и UI-дизайн MVP-версии, готовые к обсуждению и разработке."
  }
]

export function StartupsConcepts() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Концепты</span>
        </div>
        
        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl mb-12">
          Как это может выглядеть
        </h2>

        {/* Concepts grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {concepts.map((concept) => (
            <div 
              key={concept.title}
              className="group p-6 lg:p-8 bg-card border border-border/60 rounded-sm hover:border-accent/40 transition-colors"
            >
              {/* Label */}
              <div className="inline-flex items-center px-2.5 py-1 bg-secondary/80 rounded-sm mb-5">
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Концепт студии</span>
              </div>
              
              <h3 className="font-serif text-xl font-light text-foreground mb-5">
                {concept.title}
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 block mb-1.5">Задача</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{concept.challenge}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 block mb-1.5">Что прояснили</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{concept.clarified}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 block mb-1.5">Что подготовили</span>
                  <p className="text-sm text-foreground/80 leading-relaxed">{concept.prepared}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link 
            href="/concepts"
            className="inline-flex items-center text-sm text-foreground hover:text-foreground/80 transition-colors"
          >
            Посмотреть концепты
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
