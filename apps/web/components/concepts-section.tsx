"use client"

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState, useCallback } from "react"

const concepts = [
  {
    title: "B2B-платформа и внутренняя система",
    badge: "ДИЗАЙН B2B-СИСТЕМ",
    challenge: "Собрать в единую digital-систему сложный операционный workflow с несколькими ролями, сценариями согласования и dashboard-логикой.",
    structured: "Роли и права доступа, ключевые пользовательские сценарии, экранную карту продукта, логику модулей и повседневные сценарии работы команды.",
    delivered: "Premium prototype, визуальную систему интерфейсов, структуру ключевых экранов и материалы для передачи в разработку.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20%D0%BC%D0%B0%D1%80.%202026%20%D0%B3.%2C%2014_40_41-CePFENS9WLG2LnMAAvGPqCTSEXmfAA.png",
  },
  {
    title: "Дизайн мобильного приложения",
    badge: "ДИЗАЙН МОБИЛЬНЫХ ПРИЛОЖЕНИЙ",
    challenge: "Упаковать fintech-продукт в понятный mobile-first формат, который можно показать инвесторам и использовать как основу для следующего этапа product delivery.",
    structured: "Пользовательские сценарии, onboarding flow, логику финансовых экранов, приоритетные модули и структуру mobile app.",
    delivered: "Investor-ready prototype, визуальное направление, ключевые экраны приложения и материалы для следующего этапа разработки.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20%D0%BC%D0%B0%D1%80.%202026%20%D0%B3.%2C%2014_36_16-zSBwb23xZfTkH98sfm4PeJisalCp4J.png",
  },
  {
    title: "Клиентский портал и dashboard",
    badge: "PORTAL & DASHBOARD DESIGN",
    challenge: "Превратить сложный сервисный процесс в понятный client portal с прозрачной навигацией, workflow-логикой и role-based структурой.",
    structured: "Архитектуру portal, пользовательские сценарии, статусы сервисных запросов, экранную матрицу и ключевые точки взаимодействия.",
    delivered: "Структуру интерфейсов, prototype ключевых экранов, UI-направление и пакет материалов для передачи в разработку.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2014%20%D0%BC%D0%B0%D1%80.%202026%20%D0%B3.%2C%2014_36_44-4Jg9PpfqhaWF1jqQJot1Qe8kayuahF.png",
  },
  {
    title: "Корпоративный сайт для B2B-компании",
    badge: "ДИЗАЙН САЙТОВ",
    challenge: "Создать корпоративный сайт, который выглядит premium, ясно объясняет сложный сервис и усиливает доверие к компании на этапе первого контакта.",
    structured: "Архитектуру сайта, иерархию смысловых блоков, логику ключевых страниц, сценарии навигации и подачу сложного B2B-предложения.",
    delivered: "Визуальную концепцию сайта, структуру основных страниц, UI-систему для web-интерфейса и материалы для передачи в разработку.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%81%D0%B0%D0%B8%CC%86%D1%82%20%D0%B4%D0%BB%D1%8F%20premium%20B2B-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8-SPKXmEMqMFrNE7j2kZJceAyP95E6Wr.png",
  },
  {
    title: "Investor-ready landing page для startup-продукта",
    badge: "STARTUP WEBSITE DESIGN",
    challenge: "Упаковать ранний продукт в landing page, который помогает быстро объяснить идею, ценность и сценарий продукта инвестору, партнёру или первым клиентам.",
    structured: "Логику первого экрана, narrative продукта, порядок смысловых блоков, ключевые proof points и визуальную подачу startup-концепции.",
    delivered: "Landing page concept, структуру сайта, визуальное направление и набор ключевых экранов для запуска или презентации.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Investor-ready%20landing%20page%20%D0%B4%D0%BB%D1%8F%20startup-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0-AiYHAxUpvYA99vGPPXm86hKNtp0p4v.png",
  },
  {
    title: "SaaS-интерфейс для web-продукта",
    badge: "WEB PRODUCT DESIGN",
    challenge: "Собрать интерфейс web-продукта так, чтобы сложная функциональность выглядела понятно, современно и была готова к росту по модулям и ролям.",
    structured: "Ключевые пользовательские сценарии, экранную архитектуру, продуктовые модули, приоритетные workflows и иерархию основных разделов.",
    delivered: "Prototype web-продукта, структуру ключевых экранов, базовую систему компонентов и материалы для передачи в разработку.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaaS-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B8%CC%86%D1%81%20%D0%B4%D0%BB%D1%8F%20web-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0-8Gn65RinntBPWpZHQNjQi1hZLKvCaJ.png",
  },
  {
    title: "Сервисная платформа / booking interface",
    badge: "SERVICE PLATFORM DESIGN",
    challenge: "Превратить сложный клиентский сервис в понятный digital-продукт с прозрачным поиском, выбором, booking flow и личным кабинетом.",
    structured: "Путь пользователя от выбора до бронирования, логику сервиса, ключевые точки принятия решения, статусы, экранную карту и сценарии повторного взаимодействия.",
    delivered: "Структуру платформы, prototype ключевых flows, UI-направление и материалы для следующего этапа продукта.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%BD%D0%B0%D1%8F%20%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20%3A%20booking%20interface-qA90VaWibxKuGT5KGLlC9qTlSMGM6O.png",
  },
]

function ConceptCard({ concept, index }: { concept: typeof concepts[0]; index: number }) {
  return (
    <div 
      className="group relative bg-card border border-border rounded-sm overflow-hidden hover:border-foreground/20 transition-all duration-300 flex-shrink-0 w-[calc(100vw-48px)] sm:w-[380px] lg:w-[400px] h-[680px] sm:h-[700px] lg:h-[720px] flex flex-col"
    >
      {/* Signature accent edge on cards */}
      <div className="absolute top-0 left-0 z-10">
        <div className="absolute top-0 left-0 w-4 h-[2px] bg-signature-cobalt rounded-r-full" />
        <div className="absolute top-0 left-0 h-4 w-[2px] bg-signature-cobalt rounded-b-full" />
        <div className="absolute top-[2px] left-4 w-2 h-[1.5px] bg-signature-brass/70 rounded-full" />
      </div>

      {/* Image Container - Fixed height */}
      <div className="relative h-[200px] sm:h-[220px] lg:h-[240px] flex-shrink-0 bg-[#1a1816] overflow-hidden">
        <Image
          src={concept.image}
          alt={concept.title}
          fill
          className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1816]/20 to-transparent" />
      </div>
      
      {/* Content - Flex grow to fill space */}
      <div className="p-6 lg:p-8 flex flex-col flex-grow">
        <span className="text-[10px] uppercase tracking-[0.15em] text-signature-cobalt border border-signature-cobalt/25 px-2 py-1 rounded-sm self-start">
          {concept.badge}
        </span>
        
        <h3 className="font-serif text-xl lg:text-2xl font-light text-foreground mt-4 mb-5 line-clamp-2 min-h-[56px] lg:min-h-[64px]">
          {concept.title}
        </h3>
        
        {/* Text content area - grows to fill available space */}
        <div className="space-y-4 flex-grow">
          <div>
            <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-1.5">Задача</div>
            <p className="text-sm text-foreground/80 leading-relaxed line-clamp-2">
              {concept.challenge}
            </p>
          </div>
          
          <div>
            <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-1.5">Что структурировали</div>
            <p className="text-sm text-foreground/80 leading-relaxed line-clamp-2">
              {concept.structured}
            </p>
          </div>
          
          <div>
            <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-1.5">Что подготовили</div>
            <p className="text-sm text-foreground/80 leading-relaxed line-clamp-2">
              {concept.delivered}
            </p>
          </div>
        </div>
        
        {/* CTA - Pinned to bottom with mt-auto */}
        <div className="mt-auto pt-5 border-t border-border/60">
          <Link 
            href="/concepts"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-signature-cobalt transition-colors group/link"
          >
            Посмотреть концепты
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export function ConceptsSection() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  
  const totalSlides = concepts.length
  const cardWidth = 416 // 400px card + 16px gap
  
  const scrollToIndex = useCallback((index: number) => {
    if (!sliderRef.current) return
    const newIndex = ((index % totalSlides) + totalSlides) % totalSlides
    setCurrentIndex(newIndex)
    sliderRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth"
    })
  }, [totalSlides])
  
  const nextSlide = useCallback(() => {
    scrollToIndex(currentIndex + 1)
  }, [currentIndex, scrollToIndex])
  
  const prevSlide = useCallback(() => {
    scrollToIndex(currentIndex - 1)
  }, [currentIndex, scrollToIndex])
  
  // Autoplay
  useEffect(() => {
    if (isPaused) {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
        autoplayRef.current = null
      }
      return
    }
    
    autoplayRef.current = setInterval(() => {
      nextSlide()
    }, 5000)
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [isPaused, nextSlide])
  
  // Handle scroll snap for manual scrolling
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return
    
    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft
      const newIndex = Math.round(scrollLeft / cardWidth)
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < totalSlides) {
        setCurrentIndex(newIndex)
      }
    }
    
    slider.addEventListener("scroll", handleScroll, { passive: true })
    return () => slider.removeEventListener("scroll", handleScroll)
  }, [currentIndex, totalSlides])

  return (
    <section className="py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-3xl">
            {/* Signature eyebrow accent */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center">
                <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
                <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light leading-tight text-foreground text-balance">
              Концепты студии
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
              Демонстрационные проекты, показывающие наш подход к сайтам, digital-системам, web-продуктам, client portals и мобильным приложениям.
            </p>
          </div>
          
          {/* Navigation Controls - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
              aria-label="Previous concept"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
              aria-label="Next concept"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Slider Container - Full width */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slider Track */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-6 lg:px-[calc((100vw-1280px)/2+32px)]"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {concepts.map((concept, index) => (
            <div key={concept.title} className="snap-start">
              <ConceptCard concept={concept} index={index} />
            </div>
          ))}
          {/* Duplicate first few cards for seamless loop feel */}
          {concepts.slice(0, 3).map((concept, index) => (
            <div key={`${concept.title}-dup`} className="snap-start">
              <ConceptCard concept={concept} index={index + concepts.length} />
            </div>
          ))}
        </div>
        
        {/* Subtle fade edges */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-secondary/30 to-transparent pointer-events-none z-10" />
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-secondary/30 to-transparent pointer-events-none z-10" />
      </div>
      
      {/* Progress Indicator */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-8">
        <div className="flex items-center justify-between">
          {/* Mobile Navigation */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Previous concept"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Next concept"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          
          {/* Dots */}
          <div className="flex items-center gap-2 ml-auto lg:ml-0">
            {concepts.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? "w-6 h-1.5 bg-signature-cobalt" 
                    : "w-1.5 h-1.5 bg-border hover:bg-foreground/30"
                }`}
                aria-label={`Go to concept ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Slide Counter - Desktop */}
          <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-foreground font-medium">{String(currentIndex + 1).padStart(2, "0")}</span>
            <span>/</span>
            <span>{String(totalSlides).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
