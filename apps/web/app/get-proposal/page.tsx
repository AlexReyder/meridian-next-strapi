"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProposalHero } from "@/components/proposal/proposal-hero"
import { ConversionPaths } from "@/components/proposal/conversion-paths"
import { BriefWizard } from "@/components/proposal/brief-wizard"
import { UploadMaterials } from "@/components/proposal/upload-materials"
import { TrustSection } from "@/components/proposal/trust-section"
import { ProposalFAQ } from "@/components/proposal/proposal-faq"
import { FinalSupport } from "@/components/proposal/final-support"
import { SuccessState } from "@/components/proposal/success-state"

export default function GetProposalPage() {
  const [activeView, setActiveView] = useState<"intro" | "wizard" | "upload" | "success">("intro")
  const [wizardData, setWizardData] = useState({})

  const handleStartWizard = () => setActiveView("wizard")
  const handleStartUpload = () => setActiveView("upload")
  const handleSuccess = () => setActiveView("success")
  const handleBack = () => setActiveView("intro")

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {activeView === "success" ? (
        <SuccessState />
      ) : (
        <>
          <ProposalHero />
          
          {activeView === "intro" && (
            <ConversionPaths 
              onStartWizard={handleStartWizard} 
              onStartUpload={handleStartUpload} 
            />
          )}
          
          {activeView === "wizard" && (
            <BriefWizard 
              onBack={handleBack}
              onSuccess={handleSuccess}
              data={wizardData}
              setData={setWizardData}
            />
          )}
          
          {activeView === "upload" && (
            <UploadMaterials 
              onBack={handleBack}
              onSuccess={handleSuccess}
            />
          )}
          
          <TrustSection />
          <ProposalFAQ />
          <FinalSupport onUpload={handleStartUpload} />
        </>
      )}
      
      <Footer />
    </main>
  )
}
