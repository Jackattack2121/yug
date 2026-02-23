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
    title: 'Fact Sheet',
    description:
      'Key facts and figures about Yugo Metals including project overview, capital structure, and board.',
    path: '/investors/fact-sheet',
    locale,
  })
}

export default function Layout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <>
      <WebPageJsonLd title="Fact Sheet" description="Key facts and figures about Yugo Metals including project overview, capital structure, and board." path="/investors/fact-sheet" locale={locale} />
      <BreadcrumbJsonLd path="/investors/fact-sheet" locale={locale} />
      {children}
    </>
  )
}
