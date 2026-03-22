const deliveryElements = [
  { title: "Прояснение структуры продукта", description: "Сценарии, роли и приоритеты" },
  { title: "Пользовательские сценарии", description: "Ключевые flows и точки перехода" },
  { title: "Архитектура экранов", description: "Карта экранов и состояний" },
  { title: "Интерактивный прототип", description: "Кликабельный preview продукта" },
  { title: "Визуальное направление", description: "Стиль и компоненты" },
  { title: "Передача в разработку", description: "Готовность к следующему этапу" },
]

export function PositioningBlock() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text */}
          <div className="max-w-lg">
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Понятный процесс работы</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground text-balance">
              Не прайс на дизайн, а понятные форматы продуктовой работы
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              Atelier Meridian продаёт не набор экранов, а структурированный результат — 
              от понимания продукта до готовности к передаче в разработку.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Каждый формат — это законченный этап с понятным результатом, 
              а не почасовая работа с размытым объёмом.
            </p>
          </div>

          {/* Right: Delivery elements */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Работа напрямую с командой</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {deliveryElements.map((element, index) => (
                <div 
                  key={element.title}
                  className="group p-5 bg-card border border-border/60 rounded-sm hover:border-foreground/20 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-secondary text-[10px] text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-sm font-medium text-foreground">{element.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{element.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
