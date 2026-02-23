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
    title: 'Share Information',
    description:
      'Yugo Metals share registry information, capital structure, and top shareholders.',
    path: '/investors/share-information',
    locale,
  })
}

export default function Layout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <>
      <WebPageJsonLd title="Share Information" description="Yugo Metals share registry information, capital structure, and top shareholders." path="/investors/share-information" locale={locale} />
      <BreadcrumbJsonLd path="/investors/share-information" locale={locale} />
      {children}
    </>
  )
}
