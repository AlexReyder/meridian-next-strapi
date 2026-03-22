import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SolutionsHero } from "@/components/solutions/solutions-hero"
import { PositioningIntro } from "@/components/solutions/positioning-intro"
import { SolutionsGrid } from "@/components/solutions/solutions-grid"
import { SolutionDetails } from "@/components/solutions/solution-details"
import { ClientArtifacts } from "@/components/solutions/client-artifacts"
import { AudienceSection } from "@/components/solutions/audience-section"
import { WhySection } from "@/components/solutions/why-section"
import { ConnectedCta } from "@/components/solutions/connected-cta"
import { SolutionsFaq } from "@/components/solutions/solutions-faq"

export const metadata: Metadata = {
  title: 'Решения — Дизайн сайтов, систем и приложений — Atelier Meridian',
  description: 'Дизайн сайтов, B2B-систем, клиентских порталов, dashboards и мобильных приложений. UX/UI-студия с продуктовым подходом.',
}

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SolutionsHero />
      <PositioningIntro />
      <SolutionsGrid />
      <SolutionDetails />
      <ClientArtifacts />
      <AudienceSection />
      <WhySection />
      <ConnectedCta />
      <SolutionsFaq />
      <Footer />
    </main>
  )
}
