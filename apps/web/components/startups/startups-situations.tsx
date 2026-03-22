import Link from "next/link"
import { ArrowRight } from "lucide-react"

const situations = [
  {
    situation: "Есть идея, но пока непонятно, как она должна выглядеть как продукт",
    explanation: "Превращаем rough concept в структуру экранов, сценариев и приоритетов. Помогаем увидеть продукт до того, как начнётся разработка."
  },
  {
    situation: "Нужно быстро собрать MVP-интерфейс без лишнего хаоса",
    explanation: "Фокусируем на главном, убираем лишнее, собираем минимальный, но сильный набор экранов и сценариев."
  },
  {
    situation: "Нужно показать продукт инвестору или партнёру",
    explanation: "Собираем investor-ready prototype и визуальную подачу, которая делает идею понятной и убедительной."
  },
  {
    situation: "Есть разработка, но нет ясной продуктовой структуры",
    explanation: "Помогаем выстроить логику интерфейсов, сценарии и приоритеты — чтобы разработка двигалась увереннее."
  },
  {
    situation: "Нужен redesign ранней версии сайта или приложения",
    explanation: "Улучшаем UX/UI существующего продукта с фокусом на usability, конверсии и визуальную подачу."
  },
  {
    situation: "Нужно собрать сильный prototype до следующего раунда",
    explanation: "Готовим prototype и материалы для pitch — чтобы продукт выглядел убедительно для инвесторов."
  }
]

export function StartupsSituations() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Когда актуально</span>
        </div>
        
        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl mb-12">
          Когда эта страница особенно актуальна
        </h2>

        {/* Situations grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {situations.map((item, index) => (
            <div 
              key={index}
              className="group p-6 lg:p-8 bg-card border border-border/60 rounded-sm hover:border-accent/40 transition-colors"
            >
              <div className="text-3xl font-light text-accent/30 mb-4">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="font-serif text-lg font-light text-foreground mb-4 leading-snug">
                {item.situation}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {item.explanation}
              </p>
              <Link 
                href="/get-proposal"
                className="inline-flex items-center text-xs uppercase tracking-wider text-foreground/70 hover:text-foreground transition-colors"
              >
                Получить предложение
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
