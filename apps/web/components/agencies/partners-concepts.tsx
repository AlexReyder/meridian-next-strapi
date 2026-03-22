import Link from "next/link"
import { ArrowRight } from "lucide-react"

const concepts = [
  {
    badge: "Концепт студии",
    title: "B2B Operations Platform",
    challenge: "Партнёру нужно было показать клиенту, как будет выглядеть операционная система до старта разработки.",
    clarified: "Роли, сценарии, модульная архитектура, ключевые экраны.",
    prepared: "Prototype, визуальное направление, материалы для client presentation."
  },
  {
    badge: "Концепт студии",
    title: "Enterprise Service Portal",
    challenge: "Integrator-команда выигрывала тендер и нуждалась в premium упаковке концепции сервисного портала.",
    clarified: "User journeys, ролевая модель, информационная архитектура.",
    prepared: "Presale package, интерактивный prototype, presentation deck support."
  },
  {
    badge: "Концепт студии",
    title: "Client-Facing Dashboard Concept",
    challenge: "Dev shop нужен был premium UI layer для аналитического dashboard под крупного B2B-клиента.",
    clarified: "Data visualization logic, widget structure, user scenarios.",
    prepared: "UI kit, prototype, build-ready экраны, материалы для dev."
  }
]

export function PartnersConcepts() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Signature eyebrow accent */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center">
            <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
            <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Cases</span>
        </div>
        
        <h2 className="font-serif text-3xl lg:text-4xl font-light leading-tight text-foreground max-w-2xl mb-14">
          Как это выглядит в работе
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {concepts.map((concept, index) => (
            <div 
              key={concept.title}
              className="relative bg-card rounded-sm border border-border overflow-hidden hover:border-foreground/20 transition-colors"
            >
              {index === 0 && (
                <div className="absolute top-0 left-0 z-10">
                  <div className="absolute top-0 left-0 w-4 h-[2px] bg-signature-cobalt rounded-r-full" />
                  <div className="absolute top-0 left-0 h-4 w-[2px] bg-signature-cobalt rounded-b-full" />
                  <div className="absolute top-[2px] left-4 w-2 h-[1.5px] bg-signature-brass/70 rounded-full" />
                </div>
              )}
              
              {/* Placeholder visual */}
              <div className="aspect-[16/10] bg-secondary/50 border-b border-border/50 flex items-center justify-center">
                <span className="text-xs text-muted-foreground/50 uppercase tracking-wider">Preview</span>
              </div>
              
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-[0.15em] text-signature-cobalt border border-signature-cobalt/25 px-2 py-1 rounded-sm">
                  {concept.badge}
                </span>
                
                <h3 className="font-serif text-lg font-light text-foreground mt-4 mb-4">
                  {concept.title}
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-muted-foreground/70">Challenge</span>
                    <p className="mt-1 text-muted-foreground leading-relaxed">{concept.challenge}</p>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-muted-foreground/70">Clarified</span>
                    <p className="mt-1 text-foreground/70 leading-relaxed">{concept.clarified}</p>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-muted-foreground/70">Prepared</span>
                    <p className="mt-1 text-foreground/70 leading-relaxed">{concept.prepared}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link 
            href="/concepts"
            className="inline-flex items-center text-sm text-foreground hover:text-signature-cobalt transition-colors group"
          >
            Посмотреть концепты
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
