import Link from "next/link"
import { ArrowRight } from "lucide-react"

const audiences = [
  {
    title: "Founders и startup-команды",
    challenge: "Идея есть, но продукт ещё не собран в понятную систему. Нужно показать инвестору, согласовать с командой, дать разработке понятную основу.",
    result: "Структурированный продукт, prototype и материалы для следующего этапа — без долгих discovery-процессов.",
    cta: { label: "Для стартапов", href: "/for-startups" }
  },
  {
    title: "B2B-команды и внутренние digital-направления",
    challenge: "Сложный бизнес-процесс нужно превратить в digital-систему. Много ролей, сценариев, модулей — и нет ясной структуры.",
    result: "Архитектура продукта, карта ролей, экранная матрица и prototype — готово к передаче в разработку.",
    cta: { label: "Получить предложение", href: "/get-proposal" }
  },
  {
    title: "Агентства и integrators",
    challenge: "Нужен внешний premium-партнёр для presale, сложных B2B-интерфейсов или white-label поддержки — без лишнего overhead.",
    result: "Structured deliverables, async-коллаборация, понятная передача в разработку — под вашим брендом или совместно.",
    cta: { label: "Для партнёров", href: "/for-agencies" }
  },
  {
    title: "Команды, которым нужна понятная передача в разработку",
    challenge: "Есть дизайн или prototype, но его сложно передать в разработку. Не хватает структуры, логики, понятных материалов.",
    result: "Структурированная interface delivery с экранной логикой, компонентами и материалами для dev-команды.",
    cta: { label: "Получить предложение", href: "/get-proposal" }
  }
]

export function AudienceSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-accent" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Целевая аудитория</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-light leading-[1.15] tracking-tight text-foreground max-w-2xl">
          Кому подходит этот подход
        </h2>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {audiences.map((audience) => (
            <div 
              key={audience.title}
              className="bg-card rounded border border-border/60 p-6 lg:p-8 flex flex-col min-h-[320px]"
            >
              <h3 className="font-serif text-xl lg:text-[1.35rem] font-light leading-snug text-foreground">
                {audience.title}
              </h3>
              
              <div className="mt-6 space-y-4 flex-1">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Типичная задача</span>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {audience.challenge}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Что становится проще</span>
                  <p className="mt-1.5 text-sm text-foreground/80 leading-relaxed">
                    {audience.result}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-border/40">
                <Link
                  href={audience.cta.href}
                  className="inline-flex items-center text-sm text-foreground hover:text-accent transition-colors group"
                >
                  {audience.cta.label}
                  <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
