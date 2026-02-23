import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'
import WebPageJsonLd from '@/components/seo/WebPageJsonLd'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import PersonJsonLd from '@/components/seo/PersonJsonLd'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return createPageMetadata({
    title: 'Board of Directors',
    description:
      'Meet the Yugo Metals board of directors and leadership team.',
    path: '/company/board-of-directors',
    locale,
  })
}

export default function Layout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <>
      <WebPageJsonLd title="Board of Directors" description="Meet the Yugo Metals board of directors and leadership team." path="/company/board-of-directors" locale={locale} />
      <BreadcrumbJsonLd path="/company/board-of-directors" locale={locale} />
      <PersonJsonLd />
      {children}
    </>
  )
}
