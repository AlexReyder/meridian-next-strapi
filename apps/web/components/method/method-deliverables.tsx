const deliverables = [
  {
    title: "Структура проекта",
    description: "Цели, роли, сценарии, приоритеты — зафиксированная архитектура продукта."
  },
  {
    title: "Пользовательские сценарии",
    description: "User flows и логика взаимодействия — как пользователи решают свои задачи."
  },
  {
    title: "Экранная карта",
    description: "Визуальная структура всех экранов и переходов — scope становится понятным."
  },
  {
    title: "Интерактивный prototype",
    description: "Кликабельная демонстрация продукта — для презентации и тестирования."
  },
  {
    title: "Детальный дизайн",
    description: "Premium-интерфейсы для всех ключевых экранов — готовые к разработке."
  },
  {
    title: "Материалы для разработки",
    description: "Спецификации, assets, documentation — всё для передачи в команду разработки."
  }
]

export function MethodDeliverables() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Результаты</span>
        </div>
        
        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl mb-4">
          Что вы получаете в результате работы
        </h2>
        
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-12">
          Подходит для дизайна сайта, корпоративного портала, B2B-системы, dashboard или mobile app. 
          Состав материалов зависит от формата работы и сложности проекта.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item) => (
            <div 
              key={item.title}
              className="p-6 border border-border/60 rounded-sm hover:border-accent/40 transition-colors"
            >
              <h3 className="font-serif text-lg font-light text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
