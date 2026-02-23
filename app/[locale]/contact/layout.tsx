import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return createPageMetadata({
    title: 'Contact Us',
    description:
      'Get in touch with Yugo Metals for general inquiries, investor relations, or partnership opportunities.',
    path: '/contact',
    locale,
  })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
