const pillars = [
  {
    title: "Не нужно расширять штат",
    description: "Подключаете внешнюю premium-команду под конкретный проект или scope — без hiring overhead и постоянных затрат."
  },
  {
    title: "Удобно закрывать presale и сложные интерфейсы",
    description: "Мы помогаем выиграть pitch, подготовить client-facing материалы и собрать интерфейсы для сложных B2B-систем."
  },
  {
    title: "Senior-подход без лишнего overhead",
    description: "Работаем структурированно, async-friendly, с понятными deliverables. Без лишних созвонов и management слоёв."
  },
  {
    title: "Премиальная подача для client-facing work",
    description: "Качество boutique-уровня для проектов, где важна сильная визуальная и продуктовая подача."
  }
]

export function PartnersWhy() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Signature eyebrow accent */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center">
            <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
            <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Why</span>
        </div>
        
        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl mb-14">
          Почему этот формат удобен партнёрам
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className="relative p-6 lg:p-8 border border-border rounded-sm hover:border-foreground/20 transition-colors"
            >
              <div className="absolute -top-2 left-6 text-5xl font-serif text-signature-cobalt/20">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="font-serif text-lg lg:text-xl font-light text-foreground mb-3 pt-6">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
