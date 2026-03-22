const solutions = [
  {
    title: "Сайты и landing pages",
    description: "Помогаем собрать структуру и дизайн сайта для startup-проекта — от концепции до готового к разработке результата.",
    whenRelevant: "Когда нужно запустить сайт для нового продукта или компании",
    result: "Готовый дизайн сайта с понятной структурой и материалами для разработки"
  },
  {
    title: "Product websites",
    description: "Проектируем продуктовые сайты, которые объясняют ценность, показывают функции и конвертируют посетителей.",
    whenRelevant: "Когда продукт уже есть, но нужна сильная презентация",
    result: "Сайт, который помогает продавать продукт и привлекать пользователей"
  },
  {
    title: "Web products и SaaS-интерфейсы",
    description: "Собираем архитектуру web-продукта — user flows, экранную карту, prototype и дизайн интерфейсов.",
    whenRelevant: "Когда нужно выстроить логику web-продукта перед разработкой",
    result: "Структурированный продукт, готовый к MVP или полноценному build"
  },
  {
    title: "Mobile apps",
    description: "Помогаем собрать структуру приложения, ключевые user flows и визуальное направление для iOS или Android.",
    whenRelevant: "Когда нужен mobile app, но пока нет ясности в интерфейсах",
    result: "Prototype и дизайн, которые можно показать, проверить и передать в разработку"
  },
  {
    title: "Redesign существующего продукта",
    description: "Улучшаем UX/UI существующего сайта или приложения — с фокусом на usability и бизнес-метрики.",
    whenRelevant: "Когда ранняя версия продукта требует доработки",
    result: "Обновлённый дизайн с улучшенным UX и понятной логикой"
  }
]

export function StartupsDeliverables() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Решения</span>
        </div>
        
        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl mb-12">
          С чем мы помогаем startup-командам
        </h2>

        {/* Solutions grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item) => (
            <div 
              key={item.title}
              className="group p-6 lg:p-8 bg-card border border-border/60 rounded-sm hover:border-accent/40 transition-colors"
            >
              <h3 className="font-serif text-xl font-light text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="pt-4 border-t border-border/40 space-y-3">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 block mb-1">Когда актуально</span>
                  <p className="text-xs text-muted-foreground">{item.whenRelevant}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 block mb-1">Результат</span>
                  <p className="text-xs text-foreground/80">{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
