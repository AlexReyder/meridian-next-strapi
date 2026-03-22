const pillars = [
  {
    title: "Экспертный подход senior-уровня",
    description: "Каждый проект ведёт опытный product-архитектор. Без junior-итераций, без пересогласований основ.",
  },
  {
    title: "AI-ускоренный workflow",
    description: "Используем AI для рутинных задач — больше времени на стратегические решения и качество.",
  },
  {
    title: "Структурированные спринты",
    description: "Понятный scope, фиксированные сроки, предсказуемый результат. Никаких сюрпризов.",
  },
  {
    title: "Без agency overhead",
    description: "Бутиковый формат без лишних слоёв менеджмента. Работаете напрямую с теми, кто делает.",
  },
]

export function WhySection() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          {/* Signature eyebrow accent - inverted for dark bg */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center">
              <span className="h-[2px] w-3 bg-signature-cobalt-soft rounded-full" />
              <span className="h-[2px] w-2 bg-signature-brass-soft ml-0.5 rounded-full" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-background/50">Почему мы</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-background text-balance">
            Почему Atelier Meridian
          </h2>
          <p className="mt-4 text-background/60 leading-relaxed">
            Проектируем дизайн сайтов, digital-систем и мобильных приложений с продуктовым подходом.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="relative">
              <div className="absolute -top-2 left-0 text-6xl font-serif text-signature-cobalt-soft/20">
                {String(index + 1).padStart(2, '0')}
              </div>
              {/* Small accent marker */}
              {index === 0 && (
                <div className="absolute top-0 left-0 flex items-center gap-0.5">
                  <div className="w-1.5 h-1.5 bg-signature-cobalt-soft rounded-full" />
                  <div className="w-1 h-1 bg-signature-brass-soft rounded-full" />
                </div>
              )}
              <div className="pt-12">
                <h3 className="text-lg font-medium text-background mb-4">
                  {pillar.title}
                </h3>
                <p className="text-background/60 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
