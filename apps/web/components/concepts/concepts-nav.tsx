"use client"

import { useState, useEffect } from "react"

interface Concept {
  id: string
  title: string
  categoryLabel: string
}

interface ConceptsNavProps {
  concepts: Concept[]
}

export function ConceptsNav({ concepts }: ConceptsNavProps) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -40% 0px" }
    )

    concepts.forEach((concept) => {
      const element = document.getElementById(concept.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [concepts])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
          <span className="flex-shrink-0 text-[10px] uppercase tracking-[0.15em] text-muted-foreground mr-2">
            Концепты:
          </span>
          
          <div className="flex items-center gap-1.5">
            {concepts.map((concept, index) => (
              <button
                key={concept.id}
                onClick={() => scrollToSection(concept.id)}
                className={`group flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs transition-all ${
                  activeId === concept.id
                    ? "bg-foreground text-background"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <span className={`font-medium ${activeId === concept.id ? "text-background/70" : "text-signature-cobalt"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="hidden sm:inline truncate max-w-[140px]">
                  {concept.title.split(" ").slice(0, 2).join(" ")}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
