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
    title: 'ESG',
    description:
      'Yugo Metals environmental, social, and governance commitments and sustainability practices.',
    path: '/investors/esg',
    locale,
  })
}

export default function Layout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <>
      <WebPageJsonLd title="ESG" description="Yugo Metals environmental, social, and governance commitments and sustainability practices." path="/investors/esg" locale={locale} />
      <BreadcrumbJsonLd path="/investors/esg" locale={locale} />
      {children}
    </>
  )
}
