import { AgenciesHero } from "@/components/agencies/agencies-hero"
import { PartnersClarification } from "@/components/agencies/partners-clarification"
import { PartnersAudience } from "@/components/agencies/partners-audience"
import { AgenciesValue } from "@/components/agencies/agencies-value"
import { AgenciesProjects } from "@/components/agencies/agencies-projects"
import { AgenciesProcess } from "@/components/agencies/agencies-process"
import { PartnersArtifacts } from "@/components/agencies/partners-artifacts"
import { PartnersWhy } from "@/components/agencies/partners-why"
import { PartnersConcepts } from "@/components/agencies/partners-concepts"
import { AgenciesCTA } from "@/components/agencies/agencies-cta"
import { PartnersFAQ } from "@/components/agencies/partners-faq"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Для партнёров — Atelier Meridian",
  description: "Внешний premium-партнёр для агентств, integrators и delivery-команд. White-label поддержка для сайтов, digital-систем, portals, dashboards и mobile apps.",
}

export default function ForAgenciesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <AgenciesHero />
        <PartnersClarification />
        <PartnersAudience />
        <AgenciesValue />
        <AgenciesProjects />
        <AgenciesProcess />
        <PartnersArtifacts />
        <PartnersWhy />
        <PartnersConcepts />
        <AgenciesCTA />
        <PartnersFAQ />
      </main>
      <Footer />
    </>
  )
}
