const efficiencyPoints = [
  {
    title: "Опытный специалист ведёт проект",
    description: "Работу ведёт senior, а не джуниор под присмотром",
  },
  {
    title: "Ускоренные внутренние процессы",
    description: "AI-assisted workflow без потери качества",
  },
  {
    title: "Структурированные форматы работы",
    description: "Понятные packages вместо размытого почасового биллинга",
  },
  {
    title: "Без лишних слоёв",
    description: "Прямая работа без account-менеджеров и промежуточных согласований",
  },
  {
    title: "Быстрая итерация",
    description: "Скорость за счёт структуры, а не компромисса по качеству",
  },
]

export function PriceExplanation() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text */}
          <div className="max-w-lg">
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Почему так</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground text-balance">
              Почему это стоит столько
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              Atelier Meridian стоит ниже крупных агентств не потому, что делает меньше, 
              а потому что работает без лишних накладных расходов.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Premium-результат с более рациональной моделью работы. 
              Быстрее за счёт структуры, а не компромисса по качеству.
            </p>
            
            <div className="mt-8 p-5 bg-secondary/50 border border-border/50 rounded-sm">
              <p className="text-sm text-foreground/80 italic">
                «Мы не продаём часы. Мы продаём результат — структурированный продукт, 
                готовый к следующему этапу.»
              </p>
            </div>
          </div>

          {/* Right: Points */}
          <div className="space-y-4">
            {efficiencyPoints.map((point, index) => (
              <div 
                key={point.title}
                className="flex items-start gap-4 p-5 bg-card border border-border/60 rounded-sm"
              >
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-accent/10 text-xs text-accent font-medium">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-1">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
