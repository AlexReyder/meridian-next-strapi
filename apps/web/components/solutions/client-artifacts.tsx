"use client"

import Image from "next/image"

const artifacts = [
  {
    title: "Структура проекта",
    subtitle: "Фиксирует цели, ограничения и приоритеты",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0-izxISwxnsh153iue55fxis0BfXpJZy.png"
  },
  {
    title: "Пользовательские сценарии",
    subtitle: "Показывает критичные сценарии и точки перехода",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B5%20%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B8-6Cd1Gr0fJ9T1bQvpwusenVE1qH0EeF.png"
  },
  {
    title: "Экранная карта продукта",
    subtitle: "Собирает логику экранов в единую систему",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%B0%D1%80%D1%82%D0%B0%20-CjniSYt05jhRhvZGAnVzEoa5nOSJcb.png"
  },
  {
    title: "Интерактивный прототип",
    subtitle: "Даёт visual preview будущего продукта",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%20-f73wC5LUW8rwRcU9w00neMYkmRnmYY.png"
  },
  {
    title: "Базовая система компонентов",
    subtitle: "Задаёт основу интерфейсной системы",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B1%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2%20-jGYBTni2xDRwj42dKtF24HSFdKvWWU.png"
  },
  {
    title: "Материалы для передачи в разработку",
    subtitle: "Помогает перейти к следующему этапу разработки",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B0%D1%87%D0%B8%20%D0%B2%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83-9j8bJBhHm3WST7opiGXatymjBgtw86.png"
  }
]

export function ClientArtifacts() {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1">
              <span className="h-[2px] w-2 bg-signature-cobalt rounded-full" />
              <span className="h-[2px] w-1 bg-signature-brass rounded-full" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-background/50">Что входит в работу</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-background text-balance">
            Что вы получаете на первом этапе
          </h2>
          <p className="mt-4 text-base lg:text-lg text-background/60 max-w-2xl">
            Каждый проект включает набор структурных и визуальных материалов, которые помогают прояснить решение и перейти к следующему этапу.
          </p>
        </div>

        {/* Artifacts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {artifacts.map((artifact, index) => (
            <div
              key={artifact.title}
              className="group relative bg-background/[0.06] rounded-sm border border-background/[0.12] overflow-hidden hover:border-background/20 hover:bg-background/[0.08] transition-all duration-300"
            >
              {/* Signature accent on first card */}
              {index === 0 && (
                <div className="absolute top-0 left-0 z-10">
                  <div className="absolute top-0 left-0 w-4 h-[2px] bg-signature-cobalt/70 rounded-r-full" />
                  <div className="absolute top-0 left-0 h-4 w-[2px] bg-signature-cobalt/70 rounded-b-full" />
                  <div className="absolute top-[2px] left-4 w-2 h-[1.5px] bg-signature-brass/60 rounded-full" />
                </div>
              )}
              
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={artifact.image}
                  alt={artifact.title}
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
                {/* Subtle gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-5 lg:p-6">
                <h3 className="font-serif text-lg lg:text-xl font-light text-background group-hover:text-background/90 transition-colors">
                  {artifact.title}
                </h3>
                <p className="mt-2 text-sm text-background/50 leading-relaxed">
                  {artifact.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 pt-8 border-t border-background/10 flex items-center justify-center">
          <p className="text-sm text-background/40 text-center">
            Все материалы передаются в Figma и готовы для обсуждения или передачи в разработку
          </p>
        </div>
      </div>
    </section>
  )
}
