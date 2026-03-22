import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Play } from 'lucide-react'
import type { VideoSectionBlock } from '@/types/strapi'

function isExternalUrl(url?: string | null) {
  if (!url) return false
  return url.startsWith('http://') || url.startsWith('https://')
}

export function VideoSectionBlockView({
  block,
  locale,
}: {
  block: VideoSectionBlock
  locale: string
}) {
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  const primaryHref = block.primaryCtaHref
  const secondaryHref = block.secondaryCtaHref
  const videoUrl = block.videoUrl ?? null

  return (
    <section dir={dir}>
      {block.eyebrow ? <p>{block.eyebrow}</p> : null}
      {block.title ? <h2>{block.title}</h2> : null}
      {block.description ? <p>{block.description}</p> : null}

      {block.highlights?.length ? (
        <ul>
          {block.highlights.map((item, index) => (
            <li key={item.id ?? index}>{item.text}</li>
          ))}
        </ul>
      ) : null}

      {(primaryHref || secondaryHref) && (
        <div>
          {primaryHref ? <Link href={primaryHref}>{block.primaryCtaLabel || 'Open'}</Link> : null}
          {secondaryHref ? (
            <Link href={secondaryHref}>{block.secondaryCtaLabel || 'Learn more'}</Link>
          ) : null}
        </div>
      )}

      {block.note ? <p>{block.note}</p> : null}

      {block.posterImage?.url ? (
        <Image
          src={block.posterImage.url}
          alt={block.posterImage.alternativeText || block.title || 'Video poster'}
          width={block.posterImage.width || 1280}
          height={block.posterImage.height || 720}
        />
      ) : (
        <div>
          <Play />
        </div>
      )}

      {isExternalUrl(videoUrl) ? (
        <Link href={videoUrl} target="_blank" rel="noreferrer">
          <span>Open walkthrough</span>
          <ExternalLink />
        </Link>
      ) : null}
    </section>
  )
}