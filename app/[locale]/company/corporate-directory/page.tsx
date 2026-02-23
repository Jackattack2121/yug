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
    title: 'Corporate Directory',
    description:
      'Yugo Metals registered office, share registry, auditor, and legal adviser details.',
    path: '/company/corporate-directory',
    locale,
  })
}

export default function CorporateDirectory({ params: { locale } }: { params: { locale: string } }) {
  return (
    <>
      <WebPageJsonLd title="Corporate Directory" description="Yugo Metals registered office, share registry, auditor, and legal adviser details." path="/company/corporate-directory" locale={locale} />
      <BreadcrumbJsonLd path="/company/corporate-directory" locale={locale} />
      <CompanyPageLayout slug="corporate-directory" />
    </>
  )
}

