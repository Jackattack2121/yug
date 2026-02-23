import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return createPageMetadata({
    title: 'Financial Reports',
    description:
      'Access Yugo Metals annual reports, quarterly reports, and financial statements.',
    path: '/investors/financial-reports',
    locale,
  })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
