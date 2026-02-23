import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return createPageMetadata({
    title: 'Events Calendar',
    description:
      'Upcoming Yugo Metals investor events, AGMs, and important dates.',
    path: '/investors/calendar',
    locale,
  })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
