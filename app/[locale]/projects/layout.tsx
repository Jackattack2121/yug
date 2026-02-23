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
    title: 'Our Projects',
    description:
      "Explore Yugo Metals' five critical metals exploration projects across Bosnia and Herzegovina.",
    path: '/projects',
    locale,
  })
}

export default function Layout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <>
      <WebPageJsonLd title="Our Projects" description="Explore Yugo Metals' five critical metals exploration projects across Bosnia and Herzegovina." path="/projects" locale={locale} />
      <BreadcrumbJsonLd path="/projects" locale={locale} />
      {children}
    </>
  )
}
