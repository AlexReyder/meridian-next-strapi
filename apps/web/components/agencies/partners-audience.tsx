const audiences = [
  {
    title: "Web-студии и digital-агентства",
    text: "Когда нужен внешний сильный UX/UI / product-слой для клиентского сайта, redesign или digital-продукта."
  },
  {
    title: "System integrators",
    text: "Когда проект сложный, ролей много, а интерфейсную логику и подачу нужно собрать аккуратно и быстро."
  },
  {
    title: "Outsourcing и dev shops",
    text: "Когда разработка есть, а дизайн, structure и product clarity выгоднее закрыть внешней premium-командой."
  },
  {
    title: "Delivery-команды",
    text: "Когда нужно усилить client-facing delivery, presale или прототипирование без расширения постоянного штата."
  },
  {
    title: "Consulting и partner teams",
    text: "Когда нужно упаковать решение, service portal, dashboard или интерфейс цифровой системы в понятную форму."
  }
]

export function PartnersAudience() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Signature eyebrow accent */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center">
            <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
            <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Целевая аудитория</span>
        </div>
        
        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-xl">
          Кому подходит этот формат
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <div 
              key={audience.title}
              className="relative bg-card border border-border rounded-sm p-6 lg:p-8 hover:border-foreground/20 transition-colors"
            >
              {index === 0 && (
                <div className="absolute top-0 left-0">
                  <div className="absolute top-0 left-0 w-4 h-[2px] bg-signature-cobalt rounded-r-full" />
                  <div className="absolute top-0 left-0 h-4 w-[2px] bg-signature-cobalt rounded-b-full" />
                  <div className="absolute top-[2px] left-4 w-2 h-[1.5px] bg-signature-brass/70 rounded-full" />
                </div>
              )}
              <h3 className="font-serif text-lg lg:text-xl font-light text-foreground">
                {audience.title}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {audience.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
