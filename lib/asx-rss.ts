/**
 * ASX RSS Feed Integration
 * Fetches share price and announcements from ASX RSS feeds
 */


export interface ASXSharePrice {
  ticker: string
  price: number
  change: number
  changePercent: number
  volume: number
  lastUpdated: string
  high: number
  low: number
  open: number
}

export interface ASXAnnouncement {
  title: string
  date: string
  category: string
  url: string
  summary?: string
}

/**
 * REMOVED: getASXSharePrice() function
 * Share price data is now provided via TradingView widget
 * See: components/investor/TradingViewWidget.tsx
 */

/**
 * Fetch company announcements from ASX MarkIT Digital API
 */
export async function getASXAnnouncements(
  ticker: string,
  limit: number = 10
): Promise<ASXAnnouncement[]> {
  try {
    const url = `https://asx.api.markitdigital.com/asx-research/1.0/companies/${ticker}/announcements?count=${limit}&market_sensitive=false`

    const response = await fetch(url, {
      next: { revalidate: 900 },
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; YugoMetals/1.0)',
      },
    })

    if (!response.ok) {
      console.warn('ASX API returned status:', response.status)
      return []
    }

    const json = await response.json()
    const items = json?.data?.items || []

    const announcements: ASXAnnouncement[] = items.map((item: any) => {
      // Map announcementType to a readable category
      const type = (item.announcementType || '').toLowerCase()
      let category = 'Company Update'
      if (type.includes('quarterly')) {
        category = 'Quarterly Report'
      } else if (type.includes('progress')) {
        category = 'Exploration'
      } else if (type.includes('capital') || type.includes('issued')) {
        category = 'Capital Raising'
      } else if (type.includes('result') || type.includes('financial')) {
        category = 'Results'
      }

      // Build PDF download URL from documentKey
      const pdfUrl = item.documentKey
        ? `https://cdn-api.markitdigital.com/apiman-gateway/ASX/asx-research/1.0/file/${item.documentKey}?access_token=83ff96335c2d45a094df02a206a39ff4`
        : ''

      return {
        title: item.headline || '',
        date: item.date ? new Date(item.date).toISOString() : new Date().toISOString(),
        category,
        url: pdfUrl,
        summary: undefined,
      }
    })

    return announcements
  } catch (error) {
    console.error('Error fetching ASX announcements:', error)
    return []
  }
}


/**
 * Format currency for Australian dollars
 */
export function formatAUD(value: number): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  }).format(value)
}

/**
 * Format large numbers with commas
 */
export function formatVolume(value: number): string {
  return new Intl.NumberFormat('en-AU').format(value)
}

/**
 * Calculate percentage change
 */
export function calculatePercentChange(current: number, previous: number): number {
  return ((current - previous) / previous) * 100
}

