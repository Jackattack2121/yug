import type { Metadata } from 'next'
import CompanyPageLayout from '@/components/company/CompanyPageLayout'
import { createPageMetadata } from '@/lib/metadata'

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

export default function CorporateResponsibility() {
  return <CompanyPageLayout slug="corporate-responsibility" />
}

