const pillars = [
  {
    title: "Ясность до начала разработки",
    description: "Помогаем структурировать продукт так, чтобы его было легко согласовать, показать и передать в разработку."
  },
  {
    title: "Экспертный подход senior-уровня",
    description: "Работаем напрямую с командой, без junior-прослойки. Каждый проект ведёт senior product designer."
  },
  {
    title: "Структурированные спринты",
    description: "Понятный формат работы: фиксированный scope, ясные сроки, предсказуемый результат."
  },
  {
    title: "Премиальная подача без лишнего overhead",
    description: "Качество бутиковой студии без лишних процессов, встреч и накладных расходов."
  }
]

export function WhySection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Почему мы</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-light leading-[1.15] tracking-tight text-foreground max-w-2xl">
          Почему выбирают Atelier Meridian
        </h2>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="relative">
              <div className="flex items-start gap-4">
                <span className="text-[11px] font-medium text-accent/60 tracking-wider">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-base font-medium text-foreground">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
