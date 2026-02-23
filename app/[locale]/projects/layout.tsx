import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return createPageMetadata({
    title: 'Our Projects',
    description:
      "Explore Yugo Metals' five critical metals exploration projects across Bosnia and Herzegovina.",
    path: '/projects',
    locale,
  })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
