const steps = [
  {
    number: "01",
    title: "Brief",
    description: "Собираем задачу, цели, ограничения и контекст проекта."
  },
  {
    number: "02",
    title: "Структура",
    description: "Определяем, какие сценарии и экраны действительно нужны на старте."
  },
  {
    number: "03",
    title: "Приоритеты",
    description: "Отделяем MVP от второстепенного. Фокусируем на главном."
  },
  {
    number: "04",
    title: "Интерфейсы",
    description: "Собираем prototype, сайт или mobile screens в сильную и понятную систему."
  },
  {
    number: "05",
    title: "Следующий этап",
    description: "Готовим рекомендации и материалы для передачи в разработку или следующего pitch."
  }
]

export function StartupsProcess() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Процесс</span>
        </div>
        
        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl mb-12">
          Как это обычно происходит
        </h2>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-border/50" />
              )}
              <div className="text-4xl font-light text-accent/40 mb-4">{step.number}</div>
              <h3 className="font-serif text-lg font-light text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
