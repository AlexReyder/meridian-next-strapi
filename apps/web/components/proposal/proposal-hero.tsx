import { FileText, Clock, Shield, Users } from "lucide-react"

const reassuranceItems = [
  { icon: Clock, text: "Brief на 7 минут" },
  { icon: FileText, text: "Без обязательного звонка" },
  { icon: Shield, text: "NDA-friendly" },
  { icon: Users, text: "Сайты, системы, приложения" },
]

export function ProposalHero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Получить предложение
          </span>
          <span className="h-px w-8 bg-accent" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-light leading-[1.1] tracking-tight text-foreground text-balance">
          Закажите дизайн сайта, системы или мобильного приложения
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
          Расскажите, что вы планируете — сайт, корпоративный портал, B2B-систему, dashboard или mobile app. 
          Мы предложим формат работы, сроки и стоимость без обязательного стартового звонка.
        </p>

        {/* Reassurance Row */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {reassuranceItems.map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon className="h-4 w-4 text-accent" />
              <span className="text-sm text-muted-foreground">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Brand Paragraph */}
        <div className="mt-12 pt-8 border-t border-border/60 max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Atelier Meridian помогает founders, B2B-командам, агентствам и integrators 
            превращать идеи, сложные процессы и product requirements в понятную структуру, 
            prototype и материалы для передачи в разработку.
          </p>
        </div>
      </div>
    </section>
  )
}
