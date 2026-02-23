import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return createPageMetadata({
    title: 'Board of Directors',
    description:
      'Meet the Yugo Metals board of directors and leadership team.',
    path: '/company/board-of-directors',
    locale,
  })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
