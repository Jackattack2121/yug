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
    title: 'Corporate Directory',
    description:
      'Yugo Metals registered office, share registry, auditor, and legal adviser details.',
    path: '/company/corporate-directory',
    locale,
  })
}

export default function CorporateDirectory() {
  return <CompanyPageLayout slug="corporate-directory" />
}

