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
    title: 'Corporate Governance',
    description:
      'Yugo Metals corporate governance framework, policies, and board charters.',
    path: '/company/corporate-governance',
    locale,
  })
}

export default function CorporateGovernance() {
  return <CompanyPageLayout slug="corporate-governance" />
}

