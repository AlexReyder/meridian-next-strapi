import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ValueSection } from "@/components/value-section"
import { DeliverablesSection } from "@/components/deliverables-section"
import { WhySection } from "@/components/why-section"
import { AudienceSection } from "@/components/audience-section"
import { ConceptsSection } from "@/components/concepts-section"
import { MethodSection } from "@/components/method-section"
import { PricingSection } from "@/components/pricing-section"
import { ProposalSection } from "@/components/proposal-section"
import { SamplePreviewSection } from "@/components/sample-preview-section"
import { TrustSection } from "@/components/trust-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ValueSection />
      <DeliverablesSection />
      <WhySection />
      <AudienceSection />
      <ConceptsSection />
      <MethodSection />
      <PricingSection />
      <ProposalSection />
      <SamplePreviewSection />
      <TrustSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
