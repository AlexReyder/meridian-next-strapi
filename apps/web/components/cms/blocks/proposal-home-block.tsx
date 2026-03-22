import type { ProposalHomeBlock } from '@/types/strapi'
import { ProposalSection } from '@/components/proposal-section'

export function ProposalHomeBlockView({
  block,
}: {
  block: ProposalHomeBlock
  locale: string
}) {
  if (block.isEnabled === false) return null
  return <ProposalSection />
}
