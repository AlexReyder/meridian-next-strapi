import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ConceptData {
  id: string
  categoryLabel: string
  title: string
  intro: string
  image: string
  challenge: string
  structured: string
  delivered: string
  suitableFor: string
  layout: "imageLeft" | "imageRight"
}

interface ConceptSectionProps {
  concept: ConceptData
  index: number
}

export function ConceptSection({ concept, index }: ConceptSectionProps) {
  const isImageLeft = concept.layout === "imageLeft"
  const sectionNumber = String(index + 1).padStart(2, "0")

  return (
    <section 
      id={concept.id}
      className={`py-20 lg:py-32 ${index % 2 === 0 ? "bg-background" : "bg-muted/20"} scroll-mt-20`}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${isImageLeft ? "" : "lg:flex-row-reverse"}`}>
          
          {/* Image */}
          <div className={`relative ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
            {/* Signature accent */}
            <div className="absolute -top-2 -left-2 z-10">
              <div className="absolute top-0 left-0 w-6 h-[2px] bg-signature-cobalt rounded-r-full" />
              <div className="absolute top-0 left-0 h-6 w-[2px] bg-signature-cobalt rounded-b-full" />
              <div className="absolute top-[2px] left-6 w-3 h-[1.5px] bg-signature-brass/70 rounded-full" />
            </div>
            
            {/* Image container */}
            <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-sm overflow-hidden bg-muted border border-border/50 shadow-lg">
              <Image
                src={concept.image}
                alt={concept.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
            
            {/* Image caption */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                Concept {sectionNumber}
              </span>
              <span className="text-[10px] text-muted-foreground">
                Atelier Meridian Studio
              </span>
            </div>
          </div>

          {/* Content */}
          <div className={`${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
            {/* Category label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl font-light text-signature-cobalt/40">
                {sectionNumber}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-signature-cobalt border border-signature-cobalt/25 px-2 py-1 rounded-sm">
                {concept.categoryLabel}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-2xl lg:text-3xl xl:text-4xl font-light leading-tight text-foreground mb-6">
              {concept.title}
            </h2>

            {/* Intro */}
            <p className="text-base lg:text-lg text-foreground/80 leading-relaxed mb-10">
              {concept.intro}
            </p>

            {/* Details grid */}
            <div className="space-y-6 mb-10">
              <div className="p-5 bg-muted/40 border border-border/50 rounded-sm">
                <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-2">
                  Задача
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  {concept.challenge}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 bg-background border border-border/50 rounded-sm">
                  <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-2">
                    Что структурировали
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {concept.structured}
                  </p>
                </div>

                <div className="p-5 bg-background border border-border/50 rounded-sm">
                  <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-2">
                    Что подготовили
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {concept.delivered}
                  </p>
                </div>
              </div>
            </div>

            {/* Suitable for */}
            <div className="flex items-start gap-2 mb-8">
              <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-0.5">
                Подходит для:
              </span>
              <p className="text-sm text-foreground/70">
                {concept.suitableFor}
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/get-proposal"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-sm text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Получить предложение
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
