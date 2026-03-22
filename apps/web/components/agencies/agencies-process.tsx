const steps = [
  {
    number: "01",
    title: "Контекст проекта",
    description: "Вы делитесь brief, client notes или rough описанием. Мы понимаем задачу, ограничения и ваш формат работы."
  },
  {
    number: "02",
    title: "Scope и ограничения",
    description: "Согласовываем, что входит в работу, сроки и формат взаимодействия — white-label, async, под ваш бренд."
  },
  {
    number: "03",
    title: "Структура решения",
    description: "Собираем продуктовую логику: роли, сценарии, экранную карту. Готовим основу для интерфейсов."
  },
  {
    number: "04",
    title: "Интерфейсы и prototype",
    description: "Проектируем ключевые экраны, собираем prototype. Визуальное направление согласовываем с вами."
  },
  {
    number: "05",
    title: "Передача в разработку или клиенту",
    description: "Формируем материалы для dev-команды или client presentation. Всё готово для следующего этапа."
  }
]

const markers = [
  "можно подключаться точечно",
  "можно работать white-label",
  "можно подключаться под конкретный scope",
  "можно усиливать внутреннюю delivery-команду"
]

export function AgenciesProcess() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Signature eyebrow accent */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center">
            <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
            <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Process</span>
        </div>
        
        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl mb-14">
          Как обычно устроена работа с партнёрами
        </h2>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-4 mb-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-border/50 -translate-x-4" />
              )}
              
              <div className="relative p-5 lg:p-4 border border-border/60 rounded-sm bg-card hover:border-foreground/20 transition-colors h-full">
                <span className="font-serif text-2xl text-signature-cobalt/40">
                  {step.number}
                </span>
                <h3 className="font-serif text-base font-light text-foreground mt-3 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Markers */}
        <div className="flex flex-wrap gap-3 pt-8 border-t border-border/50">
          {markers.map((marker, index) => (
            <div 
              key={marker}
              className="relative inline-flex items-center px-4 py-2 bg-secondary/60 border border-border/50 rounded-sm"
            >
              {index === 0 && (
                <div className="absolute -left-px top-1/2 -translate-y-1/2 w-[2px] h-4 bg-gradient-to-b from-signature-cobalt to-signature-brass rounded-full" />
              )}
              <span className="text-xs text-foreground/70">{marker}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
