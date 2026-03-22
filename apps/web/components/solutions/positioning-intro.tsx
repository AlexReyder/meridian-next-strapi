const valueMarkers = [
  {
    number: "01",
    title: "Сначала структура",
    description: "Прояснение логики продукта до визуального дизайна"
  },
  {
    number: "02",
    title: "Потом интерфейс",
    description: "Экраны и прототип на основе понятной архитектуры"
  },
  {
    number: "03",
    title: "Затем понятный следующий шаг",
    description: "Материалы для презентации, согласования или разработки"
  }
]

export function PositioningIntro() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-light leading-[1.15] tracking-tight text-foreground">
            Не просто дизайн, а решение под тип задачи
          </h2>
          <p className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed">
            Atelier Meridian работает не как студия «наборов экранов», а как boutique-партнёр по продуктовой структуре и интерфейсам. 
            Мы помогаем собрать логику сайта, digital-системы или mobile app до начала разработки, чтобы проект было проще согласовать, показать и передать дальше.
          </p>
        </div>

        {/* Value Markers */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 lg:gap-12">
          {valueMarkers.map((marker) => (
            <div key={marker.number} className="relative">
              <div className="flex items-start gap-4">
                <span className="text-[11px] font-medium text-accent/60 tracking-wider">{marker.number}</span>
                <div>
                  <h3 className="text-lg font-medium text-foreground">{marker.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{marker.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
