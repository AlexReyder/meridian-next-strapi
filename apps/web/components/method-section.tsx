const steps = [
  {
    number: "01",
    title: "Scope",
    description: "Определяем границы проекта, роли, ключевые сценарии. Фиксируем scope до начала работы.",
    details: ["Асинхронный бриф", "Документ по скоупу", "Оценка сроков"],
  },
  {
    number: "02",
    title: "Frame",
    description: "Формулируем продуктовую логику. Структурная рамка проекта как основа всех решений.",
    details: ["Согласование целей", "Карта ограничений", "Критерии успеха"],
  },
  {
    number: "03",
    title: "Architect",
    description: "Проектируем UX-архитектуру: роли, flows, screen structure. До первого пикселя дизайна.",
    details: ["Карта ролей", "Пользовательские сценарии", "Экранная матрица"],
  },
  {
    number: "04",
    title: "Design",
    description: "Создаём premium интерфейсы. Визуальное направление, UI-система, интерактивный прототип.",
    details: ["Визуальное направление", "UI-компоненты", "Прототип"],
  },
  {
    number: "05",
    title: "Deliver",
    description: "Передаём в разработку с понятной документацией — без лишних вопросов.",
    details: ["Design system", "Сводка для разработки", "Developer support"],
  },
]

export function MethodSection() {
  return (
    <section id="method" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          {/* Signature eyebrow accent */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center">
              <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
              <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Process</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">
            Метод работы
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
            Async-first подход. Меньше лишних созвонов, понятный scope, быстрее согласование.
          </p>
        </div>

        <div className="space-y-0">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="group grid lg:grid-cols-12 gap-8 py-10 border-t border-border first:border-t-0"
            >
              <div className="lg:col-span-1">
                <span className="font-serif text-3xl lg:text-4xl text-signature-cobalt/40 group-hover:text-signature-cobalt transition-colors">
                  {step.number}
                </span>
              </div>
              
              <div className="lg:col-span-2">
                <h3 className="font-serif text-2xl lg:text-3xl text-foreground">
                  {step.title}
                </h3>
              </div>
              
              <div className="lg:col-span-5">
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              <div className="lg:col-span-4">
                <div className="flex flex-wrap gap-2">
                  {step.details.map((detail) => (
                    <span 
                      key={detail}
                      className="text-xs uppercase tracking-wider text-muted-foreground border border-border px-3 py-1.5 rounded-sm"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
