import { CheckCircle } from "lucide-react"

const trustStatements = [
  "Дизайн сайтов, порталов и B2B-систем",
  "Мобильные приложения и dashboards",
  "Редизайн и UX/UI-улучшение",
  "От структуры до передачи в разработку",
]

export function TrustSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Borders with signature accent center */}
        <div className="relative py-16">
          {/* Top border with accent */}
          <div className="absolute top-0 left-0 right-0 flex items-center">
            <div className="flex-1 h-[1px] bg-border" />
            <div className="h-[2px] w-3 bg-signature-cobalt rounded-full mx-1" />
            <div className="h-[2px] w-2 bg-signature-brass rounded-full" />
            <div className="flex-1 h-[1px] bg-border" />
          </div>
          {/* Bottom border with accent */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center">
            <div className="flex-1 h-[1px] bg-border" />
            <div className="h-[2px] w-3 bg-signature-cobalt rounded-full mx-1" />
            <div className="h-[2px] w-2 bg-signature-brass rounded-full" />
            <div className="flex-1 h-[1px] bg-border" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustStatements.map((statement) => (
              <div key={statement} className="flex items-start gap-4">
                <CheckCircle className="h-5 w-5 text-signature-cobalt flex-shrink-0 mt-0.5" />
                <p className="text-foreground leading-relaxed">
                  {statement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
