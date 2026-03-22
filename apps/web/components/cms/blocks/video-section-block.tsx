import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Play } from 'lucide-react'
import type { VideoSectionBlock } from '@/types/strapi'

function isExternalUrl(url: string) {
  return url.startsWith('http://') || url.startsWith('https://')
}

export function VideoSectionBlockView({ block, locale }: { block: VideoSectionBlock; locale: string }) {
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  const primaryHref = block.primaryCtaHref
  const secondaryHref = block.secondaryCtaHref

  return (
    <section id={block.sectionId} className="py-20 lg:py-28 bg-secondary/30" dir={dir}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            {block.eyebrow ? (
              <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{block.eyebrow}</p>
            ) : null}
            {block.title ? (
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-light leading-[1.15] tracking-tight text-foreground">
                {block.title}
              </h2>
            ) : null}
            {block.description ? (
              <p className="mt-5 max-w-2xl text-base lg:text-lg leading-relaxed text-muted-foreground">
                {block.description}
              </p>
            ) : null}

            {block.highlights?.length ? (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {block.highlights.map((item, index) => (
                  <li
                    key={`${item.id ?? index}-${item.text}`}
                    className="rounded-md border border-border/60 bg-card px-4 py-3 text-sm leading-relaxed text-foreground/90"
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            ) : null}

            {(primaryHref || secondaryHref) && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {primaryHref ? (
                  <Link
                    href={primaryHref}
                    className="inline-flex items-center justify-center rounded-md bg-foreground px-6 h-11 text-[11px] uppercase tracking-[0.15em] text-background transition-colors hover:bg-foreground/90"
                  >
                    {block.primaryCtaLabel || 'Open'}
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Link>
                ) : null}
                {secondaryHref ? (
                  <Link
                    href={secondaryHref}
                    className="inline-flex items-center justify-center rounded-md border border-border/70 px-6 h-11 text-[11px] uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-card"
                  >
                    {block.secondaryCtaLabel || 'Learn more'}
                  </Link>
                ) : null}
              </div>
            )}

            {block.note ? <p className="mt-4 text-sm text-muted-foreground/80">{block.note}</p> : null}
          </div>

          <div>
            <div className="relative overflow-hidden rounded-lg border border-border/60 bg-card shadow-sm">
              {block.posterImage?.url ? (
                <Image
                  src={block.posterImage.url}
                  alt={block.posterImage.alternativeText || block.title || 'Video preview'}
                  width={block.posterImage.width || 1400}
                  height={block.posterImage.height || 900}
                  className="h-auto w-full"
                />
              ) : (
                <div className="aspect-video w-full bg-gradient-to-br from-muted to-secondary" />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-black/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                {isExternalUrl(block.videoUrl) ? (
                  <a
                    href={block.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-background/95 px-5 py-3 text-sm font-medium text-foreground shadow"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
                      <Play className="h-4 w-4 fill-current" />
                    </span>
                    <span>Open walkthrough</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
