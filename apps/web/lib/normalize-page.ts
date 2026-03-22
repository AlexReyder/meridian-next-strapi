import type { CmsBlock, CmsPage, PageResponse } from '@/types/strapi'

export function extractPage(response: PageResponse): CmsPage | null {
  return response.data?.[0] ?? null
}

export function blockKey(block: CmsBlock, index: number): string {
  return `${block.__component}-${block.id ?? index}`
}
