const steps = [
  {
    number: "01",
    title: "Асинхронный brief",
    subtitle: "Понимаем задачу без долгих встреч",
    description: "Вы заполняете структурированный brief или присылаете материалы. Мы разбираем задачу, уточняем детали асинхронно и формируем понимание проекта.",
    duration: "1–2 дня"
  },
  {
    number: "02",
    title: "Структурирование продукта",
    subtitle: "Фиксируем архитектуру и границы",
    description: "Разбираем цели, роли, сценарии, приоритеты. Формируем экранную карту и логику продукта. Согласовываем scope до начала дизайна.",
    duration: "3–5 дней"
  },
  {
    number: "03",
    title: "Проектирование интерфейса",
    subtitle: "Создаём user flows и wireframes",
    description: "Прорабатываем навигацию, сценарии, состояния. Логика продукта становится видимой и обсуждаемой. Готовим основу для дизайна.",
    duration: "5–7 дней"
  },
  {
    number: "04",
    title: "Prototype и дизайн",
    subtitle: "Собираем premium-интерфейс",
    description: "Создаём интерактивный prototype и детальный дизайн. Готовый результат можно показать инвесторам, клиентам или команде разработки.",
    duration: "7–14 дней"
  },
  {
    number: "05",
    title: "Передача в разработку",
    subtitle: "Готовые материалы для dev-команды",
    description: "Готовим спецификации, assets, documentation. Отвечаем на вопросы разработчиков на старте. Поддерживаем до успешного запуска.",
    duration: "2–3 дня"
  }
]

export function MethodSteps() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Этапы работы</span>
        </div>
        
        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl mb-12">
          Как устроен процесс — от первого контакта до передачи в разработку
        </h2>

        <div className="space-y-6">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="bg-card rounded border border-border/60 p-6 lg:p-8 hover:border-accent/30 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="text-4xl lg:text-5xl font-light text-accent/40">{step.number}</div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="font-serif text-xl lg:text-2xl font-light text-foreground">
                      {step.title}
                    </h3>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground bg-secondary/80 px-3 py-1 rounded-sm w-fit">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-sm text-accent mb-3">{step.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
