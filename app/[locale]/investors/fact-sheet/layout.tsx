import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return createPageMetadata({
    title: 'Fact Sheet',
    description:
      'Key facts and figures about Yugo Metals including project overview, capital structure, and board.',
    path: '/investors/fact-sheet',
    locale,
  })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
