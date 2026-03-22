/**
 * Signature Chromatic Accent System
 * 
 * A minimal luxury line system using:
 * - Deep cobalt blue
 * - Muted brass / warm metallic amber  
 * - Graphite-blue / dark steel blue
 * 
 * Applied sparingly for premium editorial feel.
 * 90-93% restrained neutral design, 7-10% signature accents.
 */

import { cn } from "@/lib/utils"

// ============================================
// SECTION EYEBROW ACCENT
// Small chromatic marker before section headers
// ============================================
interface SectionEyebrowProps {
  children: React.ReactNode
  className?: string
  variant?: "cobalt" | "brass" | "steel" | "dual"
}

export function SectionEyebrow({ children, className, variant = "dual" }: SectionEyebrowProps) {
  return (
    <div className={cn("flex items-center gap-3 mb-4", className)}>
      {variant === "dual" && (
        <div className="flex items-center">
          <span className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
          <span className="h-[2px] w-2 bg-signature-brass ml-0.5 rounded-full" />
        </div>
      )}
      {variant === "cobalt" && (
        <span className="h-[2px] w-5 bg-signature-cobalt rounded-full" />
      )}
      {variant === "brass" && (
        <span className="h-[2px] w-5 bg-signature-brass rounded-full" />
      )}
      {variant === "steel" && (
        <span className="h-[2px] w-5 bg-signature-steel rounded-full" />
      )}
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {children}
      </span>
    </div>
  )
}

// ============================================
// SIGNATURE LINE DIVIDER
// Thin premium line for section transitions
// ============================================
interface SignatureDividerProps {
  className?: string
  variant?: "horizontal" | "vertical"
  accent?: "cobalt" | "brass" | "dual"
}

export function SignatureDivider({ className, variant = "horizontal", accent = "dual" }: SignatureDividerProps) {
  if (variant === "vertical") {
    return (
      <div className={cn("flex flex-col items-center gap-0.5", className)}>
        <div className="w-[1.5px] h-4 bg-border" />
        {accent === "dual" ? (
          <>
            <div className="w-[2px] h-2 bg-signature-cobalt rounded-full" />
            <div className="w-[2px] h-1.5 bg-signature-brass rounded-full" />
          </>
        ) : accent === "cobalt" ? (
          <div className="w-[2px] h-3 bg-signature-cobalt rounded-full" />
        ) : (
          <div className="w-[2px] h-3 bg-signature-brass rounded-full" />
        )}
        <div className="w-[1.5px] h-4 bg-border" />
      </div>
    )
  }

  return (
    <div className={cn("flex items-center gap-0.5 w-full", className)}>
      <div className="flex-1 h-[1px] bg-border" />
      {accent === "dual" ? (
        <>
          <div className="h-[2px] w-3 bg-signature-cobalt rounded-full" />
          <div className="h-[2px] w-2 bg-signature-brass rounded-full" />
        </>
      ) : accent === "cobalt" ? (
        <div className="h-[2px] w-5 bg-signature-cobalt rounded-full" />
      ) : (
        <div className="h-[2px] w-5 bg-signature-brass rounded-full" />
      )}
      <div className="flex-1 h-[1px] bg-border" />
    </div>
  )
}

// ============================================
// CARD ACCENT EDGE
// Subtle chromatic corner/edge detail for cards
// ============================================
interface CardAccentEdgeProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top" | "left"
  className?: string
}

export function CardAccentEdge({ position = "top-left", className }: CardAccentEdgeProps) {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "top": "top-0 left-4 right-4",
    "left": "top-4 bottom-4 left-0",
  }

  if (position === "top") {
    return (
      <div className={cn("absolute h-[2px] bg-gradient-to-r from-signature-cobalt via-signature-brass to-transparent", positionClasses[position], className)} />
    )
  }

  if (position === "left") {
    return (
      <div className={cn("absolute w-[2px] bg-gradient-to-b from-signature-cobalt via-signature-brass to-transparent", positionClasses[position], className)} />
    )
  }

  return (
    <div className={cn("absolute", positionClasses[position], className)}>
      <div className="relative">
        <div className="absolute top-0 left-0 w-4 h-[2px] bg-signature-cobalt rounded-r-full" />
        <div className="absolute top-0 left-0 h-4 w-[2px] bg-signature-cobalt rounded-b-full" />
        <div className="absolute top-[2px] left-4 w-2 h-[1.5px] bg-signature-brass/70 rounded-full" />
      </div>
    </div>
  )
}

// ============================================
// PREMIUM TAG WITH ACCENT
// Elegant outlined tag with chromatic edge
// ============================================
interface AccentTagProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "featured"
}

export function AccentTag({ children, className, variant = "default" }: AccentTagProps) {
  return (
    <div className={cn(
      "relative inline-flex items-center px-2.5 py-1.5 bg-background/90 backdrop-blur-sm border border-border rounded-[3px]",
      variant === "featured" && "border-signature-cobalt/30",
      className
    )}>
      {variant === "featured" && (
        <div className="absolute -left-px top-1/2 -translate-y-1/2 w-[2px] h-3 bg-gradient-to-b from-signature-cobalt to-signature-brass rounded-full" />
      )}
      <span className="text-[8px] uppercase tracking-[0.12em] text-muted-foreground font-medium">
        {children}
      </span>
    </div>
  )
}

// ============================================
// CTA BUTTON ACCENT VARIANT
// Button with subtle chromatic accent on hover
// ============================================
interface AccentButtonWrapperProps {
  children: React.ReactNode
  className?: string
  showAccent?: boolean
}

export function AccentButtonWrapper({ children, className, showAccent = true }: AccentButtonWrapperProps) {
  return (
    <div className={cn("relative inline-flex group", className)}>
      {showAccent && (
        <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-signature-cobalt to-signature-brass rounded-full transition-all duration-300 group-hover:w-3/4" />
      )}
      {children}
    </div>
  )
}

// ============================================
// PROGRESS INDICATOR WITH ACCENT
// For wizards/multi-step forms
// ============================================
interface AccentProgressProps {
  steps: number
  currentStep: number
  className?: string
}

export function AccentProgress({ steps, currentStep, className }: AccentProgressProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: steps }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-1 rounded-full transition-all duration-300",
            i < currentStep
              ? "w-6 bg-signature-cobalt"
              : i === currentStep
              ? "w-8 bg-gradient-to-r from-signature-cobalt to-signature-brass"
              : "w-4 bg-border"
          )}
        />
      ))}
    </div>
  )
}

// ============================================
// SIGNATURE MARKER
// Small chromatic dot/mark for list items
// ============================================
interface SignatureMarkerProps {
  className?: string
  variant?: "dot" | "bar" | "dual"
}

export function SignatureMarker({ className, variant = "dot" }: SignatureMarkerProps) {
  if (variant === "bar") {
    return (
      <div className={cn("flex items-center", className)}>
        <div className="w-1 h-3 bg-signature-cobalt rounded-full" />
        <div className="w-0.5 h-2 bg-signature-brass/70 rounded-full ml-0.5" />
      </div>
    )
  }

  if (variant === "dual") {
    return (
      <div className={cn("flex items-center gap-0.5", className)}>
        <div className="w-1.5 h-1.5 bg-signature-cobalt rounded-full" />
        <div className="w-1 h-1 bg-signature-brass rounded-full" />
      </div>
    )
  }

  return (
    <div className={cn("w-2 h-2 rounded-full bg-gradient-to-br from-signature-cobalt to-signature-brass", className)} />
  )
}
