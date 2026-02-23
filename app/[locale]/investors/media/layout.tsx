import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return createPageMetadata({
    title: 'Media',
    description:
      'Yugo Metals media releases, press coverage, and media contact information.',
    path: '/investors/media',
    locale,
  })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
