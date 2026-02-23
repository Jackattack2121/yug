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
    title: 'Media',
    description:
      'Yugo Metals media releases, press coverage, and media contact information.',
    path: '/investors/media',
    locale,
  })
}

export default function Layout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <>
      <WebPageJsonLd title="Media" description="Yugo Metals media releases, press coverage, and media contact information." path="/investors/media" locale={locale} />
      <BreadcrumbJsonLd path="/investors/media" locale={locale} />
      {children}
    </>
  )
}
