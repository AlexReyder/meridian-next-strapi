import { StartupsHero } from "@/components/startups/startups-hero"
import { StartupsValue } from "@/components/startups/startups-value"
import { StartupsDeliverables } from "@/components/startups/startups-deliverables"
import { StartupsSituations } from "@/components/startups/startups-situations"
import { StartupsArtifacts } from "@/components/startups/startups-artifacts"
import { StartupsProcess } from "@/components/startups/startups-process"
import { StartupsEfficiency } from "@/components/startups/startups-efficiency"
import { StartupsConcepts } from "@/components/startups/startups-concepts"
import { StartupsCTA } from "@/components/startups/startups-cta"
import { StartupsFAQ } from "@/components/startups/startups-faq"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Для стартапов — Atelier Meridian",
  description: "Дизайн сайтов, web-продуктов и mobile apps для startup-команд. Структура и интерфейсы для MVP, investor presentation и передачи в разработку.",
}

export default function ForStartupsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* 1. Hero */}
        <StartupsHero />
        
        {/* 2. Why startups come to Atelier Meridian */}
        <StartupsValue />
        
        {/* 3. What we help startups design */}
        <StartupsDeliverables />
        
        {/* 4. Startup situations / use cases */}
        <StartupsSituations />
        
        {/* 5. What founders receive */}
        <StartupsArtifacts />
        
        {/* 6. How the process works */}
        <StartupsProcess />
        
        {/* 7. Why this is more efficient */}
        <StartupsEfficiency />
        
        {/* 8. Concept cases */}
        <StartupsConcepts />
        
        {/* 9. CTA block */}
        <StartupsCTA />
        
        {/* 10. FAQ */}
        <StartupsFAQ />
      </main>
      <Footer />
    </>
  )
}
