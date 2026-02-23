import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return createPageMetadata({
    title: 'Investor Centre',
    description:
      'Access Yugo Metals investor information including ASX announcements, presentations, share data, and financial reports.',
    path: '/investors',
    locale,
  })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
