import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return createPageMetadata({
    title: 'ESG',
    description:
      'Yugo Metals environmental, social, and governance commitments and sustainability practices.',
    path: '/investors/esg',
    locale,
  })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
