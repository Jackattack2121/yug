import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'
import WebPageJsonLd from '@/components/seo/WebPageJsonLd'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'

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

export default function Layout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <>
      <WebPageJsonLd title="Contact Us" description="Get in touch with Yugo Metals for general inquiries, investor relations, or partnership opportunities." path="/contact" locale={locale} />
      <BreadcrumbJsonLd path="/contact" locale={locale} />
      {children}
    </>
  )
}
