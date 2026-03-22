import { MethodHero } from "@/components/method/method-hero"
import { MethodSteps } from "@/components/method/method-steps"
import { MethodDeliverables } from "@/components/method/method-deliverables"
import { MethodCTA } from "@/components/method/method-cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Как мы работаем — Atelier Meridian",
  description: "Процесс работы над дизайном сайтов, digital-систем и мобильных приложений. От структурирования продукта до передачи в разработку.",
}

export default function MethodPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <MethodHero />
        <MethodSteps />
        <MethodDeliverables />
        <MethodCTA />
      </main>
      <Footer />
    </>
  )
}
