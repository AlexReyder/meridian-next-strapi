"use client"

import Image from "next/image"

const artifacts = [
  {
    title: "Структурная рамка",
    subtitle: "Цели, контекст, границы проекта",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B0%D0%BC%D0%BA%D0%B0-ymV853nVDkOWvhLmmek2QmfUFbENUM.png",
    alt: "Strategic framing document showing goals, scope, criteria, priorities and restrictions"
  },
  {
    title: "Архитектура сценариев",
    subtitle: "Структура пользовательских flows",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%B0%20%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B5%D0%B2%20-1nYqEzacq4GuL3RHRwA9Ss9VDASxnW.png",
    alt: "Flow architecture diagram showing entry points, choices, success and warning paths"
  },
  {
    title: "Экранная матрица",
    subtitle: "Матрица экранов по ролям",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BC%D0%B0%D1%82%D1%80%D0%B8%D1%86%D0%B0%20-ERkytJ7R8AhKODiumExXqNLPexWfT8.png",
    alt: "Screen matrix showing role-based screen structure across Core, Finance, Team Leads, and Users"
  },
  {
    title: "Интерактивный прототип",
    subtitle: "Кликабельный прототип ключевых flows",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D1%82%D0%BE%D1%82%D0%B8%D0%BF%20-sl3pKDIW3vAOChr0PT1KdWnbmO8RND.png",
    alt: "Interactive prototype showing laptop and mobile app with polished UI"
  }
]

export function SamplePreviewSection() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center">
              <span className="h-[2px] w-3 bg-signature-cobalt-soft rounded-full" />
              <span className="h-[2px] w-2 bg-signature-brass-soft ml-0.5 rounded-full" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-background/50">
              Материалы первого этапа
            </span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-background text-balance">
            Что вы получаете на первом этапе
          </h2>
          <p className="mt-6 text-base text-background/60 max-w-2xl">
            Структура, логика, прототип и документация — всё, что нужно для уверенного старта разработки.
          </p>
        </div>

        {/* Artifact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artifacts.map((artifact, index) => (
            <div 
              key={artifact.title}
              className="group relative bg-background/[0.03] border border-background/10 rounded-sm overflow-hidden hover:bg-background/[0.06] hover:border-background/20 transition-all duration-300"
            >
              {/* Signature accent on first card */}
              {index === 0 && (
                <div className="absolute top-0 left-0 z-10">
                  <div className="absolute top-0 left-0 w-4 h-[2px] bg-signature-cobalt-soft/60 rounded-r-full" />
                  <div className="absolute top-0 left-0 h-4 w-[2px] bg-signature-cobalt-soft/60 rounded-b-full" />
                  <div className="absolute top-[2px] left-4 w-2 h-[1.5px] bg-signature-brass-soft/50 rounded-full" />
                </div>
              )}
              
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={artifact.image}
                  alt={artifact.alt}
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Subtle gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Card Content */}
              <div className="p-5">
                <h3 className="font-serif text-lg text-background mb-1.5 group-hover:text-background transition-colors">
                  {artifact.title}
                </h3>
                <p className="text-sm text-background/50 leading-relaxed">
                  {artifact.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional bottom note */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-sm text-background/40 text-center">
            Все материалы передаются в Figma с полной документацией и готовы к обсуждению с командой разработки.
          </p>
        </div>
      </div>
    </section>
  )
}
