import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return createPageMetadata({
    title: 'Why Yugo Metals',
    description:
      "Discover why Yugo Metals is positioned to unlock Europe's critical metals potential in Bosnia and Herzegovina.",
    path: '/why-yugo-metals',
    locale,
  })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
