import type { Metadata } from 'next'
import CompanyPageLayout from '@/components/company/CompanyPageLayout'
import { createPageMetadata } from '@/lib/metadata'
import WebPageJsonLd from '@/components/seo/WebPageJsonLd'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'

export const revalidate = 3600 // Revalidate every hour

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return createPageMetadata({
    title: 'Corporate Responsibility',
    description:
      'Yugo Metals commitment to responsible mining, community engagement, and environmental stewardship.',
    path: '/company/corporate-responsibility',
    locale,
  })
}

export default function CorporateResponsibility({ params: { locale } }: { params: { locale: string } }) {
  return (
    <>
      <WebPageJsonLd title="Corporate Responsibility" description="Yugo Metals commitment to responsible mining, community engagement, and environmental stewardship." path="/company/corporate-responsibility" locale={locale} />
      <BreadcrumbJsonLd path="/company/corporate-responsibility" locale={locale} />
      <CompanyPageLayout slug="corporate-responsibility" />
    </>
  )
}

