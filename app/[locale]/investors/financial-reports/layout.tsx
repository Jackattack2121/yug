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
    title: 'Financial Reports',
    description:
      'Access Yugo Metals annual reports, quarterly reports, and financial statements.',
    path: '/investors/financial-reports',
    locale,
  })
}

export default function Layout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <>
      <WebPageJsonLd title="Financial Reports" description="Access Yugo Metals annual reports, quarterly reports, and financial statements." path="/investors/financial-reports" locale={locale} />
      <BreadcrumbJsonLd path="/investors/financial-reports" locale={locale} />
      {children}
    </>
  )
}
