export function PartnersClarification() {
  const pillars = [
    "Белая маркировка возможна",
    "Удобно для presale и delivery",
    "Премиальная подача без расширения штата"
  ]

  return (
    <section className="py-20 lg:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-serif text-2xl lg:text-3xl font-light leading-tight text-foreground">
            Не просто подрядчик по дизайну, а внешний product / interface partner
          </h2>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed">
            Atelier Meridian подключается туда, где партнёрской команде не хватает времени, 
            внутренней UX/UI-ёмкости или сильной продуктовой упаковки. Мы помогаем прояснить структуру, 
            собрать интерфейсы и подготовить решение к презентации, client delivery или следующему этапу разработки.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-3">
            {pillars.map((pillar, index) => (
              <div 
                key={pillar}
                className="relative inline-flex items-center px-4 py-2 bg-card border border-border rounded-sm"
              >
                {index === 0 && (
                  <div className="absolute -left-px top-1/2 -translate-y-1/2 w-[2px] h-4 bg-gradient-to-b from-signature-cobalt to-signature-brass rounded-full" />
                )}
                <span className="text-sm text-foreground/80">{pillar}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
