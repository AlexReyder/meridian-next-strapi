import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const categoryTags = [
  "Сайты",
  "Корпоративные сайты",
  "Digital-системы",
  "B2B-платформы",
  "Клиентские порталы",
  "Dashboards",
  "Мобильные приложения",
  "Redesign и UX/UI",
  "White-label"
]

export function SolutionsHero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.008] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16 xl:gap-20">
          {/* Left: Content */}
          <div className="w-full lg:w-[48%] flex-shrink-0">
            {/* Signature eyebrow accent */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="flex items-center">
                <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
                <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
              </div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">UX/UI Design Solutions</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-light leading-[1.08] tracking-tight text-foreground text-balance">
              Решения для сайтов, digital&#8209;систем и мобильных приложений
            </h1>
            
            <p className="mt-7 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Atelier Meridian помогает founders, B2B-командам, агентствам и integrators превращать идею, сырой workflow или сложную цифровую задачу в понятную структуру, сильный интерфейс и материалы для следующего этапа — будь то сайт, digital-система, client portal или mobile app.
            </p>

            <p className="mt-4 text-sm text-muted-foreground/80">
              Подходит для новых проектов, redesign, presale, investor presentation и передачи в разработку.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <div className="relative group">
                <Link 
                  href="/get-proposal"
                  className="inline-flex items-center justify-center bg-foreground text-background hover:bg-foreground/90 text-[11px] uppercase tracking-[0.15em] px-7 h-11 rounded-md font-medium transition-colors"
                >
                  Получить предложение
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Link>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-signature-cobalt to-signature-brass rounded-full transition-all duration-300 group-hover:w-1/2" />
              </div>
              <Link 
                href="/pricing"
                className="inline-flex items-center justify-center border border-foreground/15 text-foreground hover:bg-foreground/5 text-[11px] uppercase tracking-[0.15em] px-7 h-11 rounded-md font-medium transition-colors"
              >
                Посмотреть цены
              </Link>
            </div>

            {/* Category Tags */}
            <div className="mt-12 pt-6 border-t border-border/50">
              <div className="flex flex-wrap gap-2">
                {categoryTags.map((tag, index) => (
                  <span 
                    key={tag}
                    className={`inline-flex items-center px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] bg-background border rounded-sm transition-colors duration-200 ${
                      index === 0 
                        ? 'text-foreground/70 border-signature-cobalt/30 hover:border-signature-cobalt/50' 
                        : 'text-muted-foreground/80 border-border/60 hover:border-border hover:text-muted-foreground'
                    }`}
                  >
                    {index === 0 && (
                      <span className="w-[3px] h-2.5 bg-gradient-to-b from-signature-cobalt to-signature-brass/70 rounded-full mr-2" />
                    )}
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Premium Editorial Visual */}
          <div className="relative w-full lg:w-[52%]">
            {/* Main image container with premium shadow and border */}
            <div className="relative">
              {/* Signature accent corner */}
              <div className="absolute -top-1 -left-1 z-10 hidden lg:block">
                <div className="w-5 h-[2px] bg-gradient-to-r from-signature-cobalt/50 to-signature-cobalt/0 rounded-r-full" />
                <div className="w-[2px] h-5 bg-gradient-to-b from-signature-cobalt/50 to-signature-cobalt/0 rounded-b-full" />
                <div className="absolute top-[2px] left-5 w-2 h-[1.5px] bg-signature-brass/40 rounded-full" />
              </div>
              
              {/* Image with elegant frame */}
              <div className="relative rounded-sm overflow-hidden shadow-[0_40px_80px_-20px_rgba(42,37,32,0.15),0_20px_40px_-12px_rgba(42,37,32,0.08)] border border-border/40">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20%D0%BC%D0%B0%D1%80.%202026%20%D0%B3.%2C%2015_27_08-Hno8Y8Yi5GvsrPDqbYym9CLoCCxXWk.png"
                  alt="Premium Digital Solutions - websites, digital systems, and mobile applications"
                  width={800}
                  height={640}
                  className="w-full h-auto"
                  priority
                />
                
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/5 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Bottom accent line */}
              <div className="hidden lg:flex absolute -bottom-3 left-8 right-8 items-center justify-center">
                <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-border/50 to-transparent" />
                <div className="mx-3 flex items-center gap-1">
                  <div className="w-1 h-1 bg-signature-cobalt/40 rounded-full" />
                  <div className="w-0.5 h-0.5 bg-signature-brass/50 rounded-full" />
                </div>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-border/50 to-transparent" />
              </div>
            </div>
            
            {/* Floating label */}
            <div className="absolute -bottom-4 right-4 lg:right-8 bg-card/95 backdrop-blur-sm border border-border/60 rounded-sm px-3 py-1.5 shadow-sm">
              <span className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground">Сайты · Системы · Приложения</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
