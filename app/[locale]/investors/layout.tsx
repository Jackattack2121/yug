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
    title: 'Investor Centre',
    description:
      'Access Yugo Metals investor information including ASX announcements, presentations, share data, and financial reports.',
    path: '/investors',
    locale,
  })
}

export default function Layout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <>
      <WebPageJsonLd title="Investor Centre" description="Access Yugo Metals investor information including ASX announcements, presentations, share data, and financial reports." path="/investors" locale={locale} />
      <BreadcrumbJsonLd path="/investors" locale={locale} />
      {children}
    </>
  )
}
