import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ConceptsHero } from "@/components/concepts/concepts-hero"
import { ConceptsIntro } from "@/components/concepts/concepts-intro"
import { ConceptsNav } from "@/components/concepts/concepts-nav"
import { ConceptSection } from "@/components/concepts/concept-section"
import { ConceptsWhy } from "@/components/concepts/concepts-why"
import { ConceptsCta } from "@/components/concepts/concepts-cta"

export const metadata: Metadata = {
  title: "Концепты студии | Atelier Meridian",
  description: "Демонстрационные проекты Atelier Meridian — сайты, digital-системы, web-продукты, клиентские порталы и мобильные приложения. Clarity before code.",
}

const concepts = [
  {
    id: "b2b-platform",
    categoryLabel: "ДИЗАЙН B2B-СИСТЕМ",
    title: "B2B-платформа и внутренняя система",
    intro: "Концепт для сложной операционной среды, где важно собрать workflow, роли, статусы и логику работы команды в одну понятную digital-систему.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B2B-%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20%D0%B8%20%D0%B2%D0%BD%D1%83%D1%82%D1%80%D0%B5%D0%BD%D0%BD%D1%8F%D1%8F%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0-nfjB6TIcpHm2krsv9QxEOV6JqBP6jO.png",
    challenge: "Собрать в единую digital-систему сложный операционный workflow с несколькими ролями, сценариями согласования и dashboard-логикой.",
    structured: "Роли и права доступа, ключевые пользовательские сценарии, экранную карту продукта, логику модулей и повседневные сценарии работы команды.",
    delivered: "Premium prototype, визуальную систему интерфейсов, структуру ключевых экранов и материалы для передачи в разработку.",
    suitableFor: "B2B-платформ, внутренних систем, operational tools и complex admin interfaces.",
    layout: "imageLeft" as const,
  },
  {
    id: "mobile-app",
    categoryLabel: "ДИЗАЙН МОБИЛЬНЫХ ПРИЛОЖЕНИЙ",
    title: "Дизайн мобильного приложения",
    intro: "Концепт mobile-first продукта, собранный так, чтобы его можно было показать инвестору, использовать в pitch или взять как основу для следующего этапа разработки.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%94%D0%B8%D0%B7%D0%B0%D0%B8%CC%86%D0%BD%20%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-WPXYUHUvoGBadJ6HNUNIFKIWraf70B.png",
    challenge: "Упаковать fintech-продукт в понятный mobile-first формат, который можно показать инвесторам и использовать как основу для следующего этапа product delivery.",
    structured: "Пользовательские сценарии, onboarding flow, логику финансовых экранов, приоритетные модули и структуру mobile app.",
    delivered: "Investor-ready prototype, визуальное направление, ключевые экраны приложения и материалы для следующего этапа разработки.",
    suitableFor: "Mobile apps, MVP, investor-ready concept и redesign мобильных продуктов.",
    layout: "imageRight" as const,
  },
  {
    id: "client-portal",
    categoryLabel: "PORTAL & DASHBOARD DESIGN",
    title: "Клиентский портал и dashboard",
    intro: "Концепт сервиса, где сложный процесс превращён в понятный client portal с прозрачной навигацией, статусами, workflow-логикой и role-based структурой.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%9A%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B8%D0%B8%CC%86%20%D0%BF%D0%BE%D1%80%D1%82%D0%B0%D0%BB%20%D0%B8%20dashboard-JlI8wKPt6UWq4rRVcyFQXwBsL2XAHb.png",
    challenge: "Превратить сложный сервисный процесс в понятный client portal с прозрачной навигацией, workflow-логикой и role-based структурой.",
    structured: "Архитектуру portal, пользовательские сценарии, статусы сервисных запросов, экранную матрицу и ключевые точки взаимодействия.",
    delivered: "Структуру интерфейсов, prototype ключевых экранов, UI-направление и пакет материалов для передачи в разработку.",
    suitableFor: "Service portals, account areas, dashboards и внутренних сервисных интерфейсов.",
    layout: "imageLeft" as const,
  },
  {
    id: "b2b-website",
    categoryLabel: "ДИЗАЙН САЙТОВ",
    title: "Корпоративный сайт для B2B-компании",
    intro: "Концепт корпоративного сайта, который помогает premium B2B-компании ясно объяснить сложный сервис, усилить доверие и сделать первый контакт с брендом более убедительным.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%81%D0%B0%D0%B8%CC%86%D1%82%20%D0%B4%D0%BB%D1%8F%20premium%20B2B-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8-6RgbOJ9HFWZMTpHDeV3gRjnxMU9UZF.png",
    challenge: "Создать корпоративный сайт, который выглядит premium, ясно объясняет сложный сервис и усиливает доверие к компании на этапе первого контакта.",
    structured: "Архитектуру сайта, иерархию смысловых блоков, логику ключевых страниц, сценарии навигации и подачу сложного B2B-предложения.",
    delivered: "Визуальную концепцию сайта, структуру основных страниц, UI-систему для web-интерфейса и материалы для передачи в разработку.",
    suitableFor: "B2B-компаний, integrators, outsourcing-команд, технологических сервисов и premium corporate websites.",
    layout: "imageRight" as const,
  },
  {
    id: "startup-landing",
    categoryLabel: "STARTUP WEBSITE DESIGN",
    title: "Investor-ready landing page для startup-продукта",
    intro: "Концепт landing page для раннего продукта, собранный так, чтобы идею было проще объяснить инвестору, партнёру и первым пользователям.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Investor-ready%20landing%20page%20%D0%B4%D0%BB%D1%8F%20startup-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0-b85KxA9lUQySVtGgn38fMd2GX2STAN.png",
    challenge: "Упаковать ранний продукт в landing page, который помогает быстро объяснить идею, ценность и сценарий продукта инвестору, партнёру или первым клиентам.",
    structured: "Логику первого экрана, narrative продукта, порядок смысловых блоков, ключевые proof points и визуальную подачу startup-концепции.",
    delivered: "Landing page concept, структуру сайта, визуальное направление и набор ключевых экранов для запуска или презентации.",
    suitableFor: "Startup-сайтов, pre-seed / seed продуктов, launch pages, investor presentation и early-stage positioning.",
    layout: "imageLeft" as const,
  },
  {
    id: "saas-interface",
    categoryLabel: "WEB PRODUCT DESIGN",
    title: "SaaS-интерфейс для web-продукта",
    intro: "Концепт интерфейса для web-продукта, где важно собрать сложную функциональность в понятную, масштабируемую и продуктово зрелую систему.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaaS-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B8%CC%86%D1%81%20%D0%B4%D0%BB%D1%8F%20web-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0-ypxGBLA8NjWgvW2cxBxjUL68xoXEGf.png",
    challenge: "Собрать интерфейс web-продукта так, чтобы сложная функциональность выглядела понятно, современно и была готова к росту по модулям и ролям.",
    structured: "Ключевые пользовательские сценарии, экранную архитектуру, продуктовые модули, приоритетные workflows и иерархию основных разделов.",
    delivered: "Prototype web-продукта, структуру ключевых экранов, базовую систему компонентов и материалы для передачи в разработку.",
    suitableFor: "SaaS, dashboards, web products, startup software и B2B digital tools.",
    layout: "imageRight" as const,
  },
  {
    id: "booking-platform",
    categoryLabel: "SERVICE PLATFORM DESIGN",
    title: "Сервисная платформа / booking interface",
    intro: "Концепт customer-facing платформы, где сложный сервис превращён в понятный поиск, выбор, booking flow и прозрачный путь пользователя.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%BD%D0%B0%D1%8F%20%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20%3A%20booking%20interface-LmkTbFEVKsDBsJTHI6LSbVWUfH0eCy.png",
    challenge: "Превратить сложный клиентский сервис в понятный digital-продукт с прозрачным поиском, выбором, booking flow и личным кабинетом.",
    structured: "Путь пользователя от выбора до бронирования, логику сервиса, ключевые точки принятия решения, статусы, экранную карту и сценарии повторного взаимодействия.",
    delivered: "Структуру платформы, prototype ключевых flows, UI-направление и материалы для следующего этапа продукта.",
    suitableFor: "Service marketplaces, booking platforms, customer portals и digital products with transaction flow.",
    layout: "imageLeft" as const,
  },
]

export default function ConceptsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ConceptsHero />
        <ConceptsIntro />
        <ConceptsNav concepts={concepts} />
        
        {/* Concept Sections */}
        <div className="relative">
          {concepts.map((concept, index) => (
            <ConceptSection 
              key={concept.id} 
              concept={concept} 
              index={index}
            />
          ))}
        </div>
        
        <ConceptsWhy />
        <ConceptsCta />
      </main>
      <Footer />
    </div>
  )
}
