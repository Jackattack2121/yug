export interface InvestorVideo {
  id: string
  title: string
  thumbnailUrl: string
  videoUrl: string
  duration: string
  publishedAt: string
  announcementId?: string
}

export interface InvestorDocument {
  id: string
  title: string
  category: 'annual-report' | 'quarterly-report' | 'presentation' | 'governance' | 'prospectus' | 'other'
  date: string
  downloadUrl: string
  fileSize?: string
  fileType?: string
}

export interface CalendarEvent {
  id: string
  title: string
  date: string
  endDate?: string
  type: 'earnings' | 'agm' | 'conference' | 'webinar' | 'ex-dividend' | 'other'
  description?: string
  location?: string
  isUpcoming: boolean
}

export interface ThesisPoint {
  id: number
  title: string
  description: string
  icon: string
}

export interface KeyMetric {
  label: string
  value: string
  sublabel?: string
}

export interface AnnouncementCategory {
  key: string
  label: string
  color: string
  bgColor: string
}

export const ANNOUNCEMENT_CATEGORIES: AnnouncementCategory[] = [
  { key: 'all', label: 'All', color: 'text-white', bgColor: 'bg-primary-600' },
  { key: 'quarterly', label: 'Quarterly', color: 'text-amber-800', bgColor: 'bg-amber-100' },
  { key: 'exploration', label: 'Exploration', color: 'text-emerald-800', bgColor: 'bg-emerald-100' },
  { key: 'capital', label: 'Capital Raising', color: 'text-purple-800', bgColor: 'bg-purple-100' },
  { key: 'results', label: 'Results', color: 'text-blue-800', bgColor: 'bg-blue-100' },
  { key: 'company', label: 'Company Update', color: 'text-gray-800', bgColor: 'bg-gray-100' },
]

export function getCategoryStyle(category: string): { color: string; bgColor: string } {
  const lower = category.toLowerCase()
  if (lower.includes('quarterly')) return { color: 'text-amber-800', bgColor: 'bg-amber-100' }
  if (lower.includes('exploration') || lower.includes('drilling')) return { color: 'text-emerald-800', bgColor: 'bg-emerald-100' }
  if (lower.includes('capital') || lower.includes('raising')) return { color: 'text-purple-800', bgColor: 'bg-purple-100' }
  if (lower.includes('result')) return { color: 'text-blue-800', bgColor: 'bg-blue-100' }
  if (lower.includes('trading halt') || lower.includes('price sensitive')) return { color: 'text-red-800', bgColor: 'bg-red-100' }
  return { color: 'text-gray-800', bgColor: 'bg-gray-100' }
}
