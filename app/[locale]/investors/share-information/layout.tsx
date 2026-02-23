import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return createPageMetadata({
    title: 'Share Information',
    description:
      'Yugo Metals share registry information, capital structure, and top shareholders.',
    path: '/investors/share-information',
    locale,
  })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
