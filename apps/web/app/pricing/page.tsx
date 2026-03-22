import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PositioningBlock } from "@/components/pricing/positioning-block"
import { PackageCards } from "@/components/pricing/package-cards"
import { ChoosingGuide } from "@/components/pricing/choosing-guide"
import { DeliverablesPreview } from "@/components/pricing/deliverables-preview"
import { PriceExplanation } from "@/components/pricing/price-explanation"
import { NoCallCta } from "@/components/pricing/no-call-cta"
import { PricingFaq } from "@/components/pricing/pricing-faq"
import { PricingFinalCta } from "@/components/pricing/pricing-final-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Цены на дизайн сайтов, систем и приложений — Atelier Meridian",
  description: "Стоимость дизайна сайтов, B2B-систем, порталов, dashboards и mobile apps. Форматы работы от структурирования до передачи в разработку.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PricingHero />
      <PositioningBlock />
      <PackageCards />
      <ChoosingGuide />
      <DeliverablesPreview />
      <PriceExplanation />
      <NoCallCta />
      <PricingFaq />
      <PricingFinalCta />
      <Footer />
    </main>
  )
}
