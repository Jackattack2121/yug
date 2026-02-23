import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'
import WebPageJsonLd from '@/components/seo/WebPageJsonLd'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import EventJsonLd from '@/components/seo/EventJsonLd'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  return createPageMetadata({
    title: 'Events Calendar',
    description:
      'Upcoming Yugo Metals investor events, AGMs, and important dates.',
    path: '/investors/calendar',
    locale,
  })
}

export default function Layout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <>
      <WebPageJsonLd title="Events Calendar" description="Upcoming Yugo Metals investor events, AGMs, and important dates." path="/investors/calendar" locale={locale} />
      <BreadcrumbJsonLd path="/investors/calendar" locale={locale} />
      <EventJsonLd />
      {children}
    </>
  )
}
