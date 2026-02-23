import type { Metadata } from 'next'

const BASE_URL = 'https://www.yugometals.com'

export function createPageMetadata({
  title,
  description,
  path,
  locale,
}: {
  title: string
  description: string
  path: string
  locale: string
}): Metadata {
  const url = `${BASE_URL}/${locale}${path}`
  return {
    title: `${title} | Yugo Metals`,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Yugo Metals',
      images: [{ url: `/api/og?title=${encodeURIComponent(title)}`, width: 1200, height: 630 }],
      type: 'website',
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: { canonical: url },
  }
}
