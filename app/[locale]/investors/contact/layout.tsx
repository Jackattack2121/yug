import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return createPageMetadata({
    title: 'Investor Contact',
    description:
      'Contact Yugo Metals investor relations team for shareholder inquiries and information requests.',
    path: '/investors/contact',
    locale,
  })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
