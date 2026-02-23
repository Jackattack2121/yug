import type { InvestorVideo, InvestorDocument, CalendarEvent, ThesisPoint, KeyMetric } from '@/components/investor/types'

/**
 * Static fallback data for the investor centre.
 * Will be replaced by CMS/API data when available.
 */

export const KEY_METRICS: KeyMetric[] = [
  { label: 'ASX Code', value: 'YUG', sublabel: 'Australian Securities Exchange' },
  { label: 'Projects', value: '3', sublabel: '5 Tenements, 100% Owned' },
  { label: 'Focus', value: 'Critical Metals', sublabel: 'Au, Ag, Sb, Ni, Cu, Co' },
  { label: 'Location', value: 'Bosnia & Herzegovina', sublabel: 'EU Accession State' },
]

export const COMPANY_HIGHLIGHTS: ThesisPoint[] = [
  {
    id: 1,
    title: 'Strategic EU-Adjacent Location',
    description: 'Bosnia and Herzegovina is an EU accession state with a land border to the European Union, offering strategic access to European markets and supply chains.',
    icon: '01',
  },
  {
    id: 2,
    title: '100% Tenement Ownership',
    description: 'Full ownership and operational control of three exploration projects comprising five tenements covering 190km², providing strategic flexibility across the portfolio.',
    icon: '02',
  },
  {
    id: 3,
    title: 'Critical Metals Portfolio',
    description: 'Tenements contain gold, silver, antimony, nickel, copper, zinc, lead, and cobalt mineralisation — metals on the critical minerals lists of multiple countries including Australia, the US, and the EU.',
    icon: '03',
  },
  {
    id: 4,
    title: 'Underexplored with Modern Techniques',
    description: 'Projects explored sporadically during the Yugoslav era are now being assessed using modern systematic exploration methods, presenting opportunities for new discoveries.',
    icon: '04',
  },
  {
    id: 5,
    title: 'Rich Mining History',
    description: 'The Balkans is one of the world\'s oldest mining regions with documented mineral wealth, existing infrastructure, and a skilled workforce.',
    icon: '05',
  },
  {
    id: 6,
    title: 'Established Mining Environment',
    description: 'Bosnia and Herzegovina has an established regulatory framework for mining, with existing infrastructure and a workforce experienced in mineral extraction.',
    icon: '06',
  },
]

export const SAMPLE_VIDEOS: InvestorVideo[] = [
  {
    id: 'v1',
    title: 'Yugo Metals — Company Overview',
    thumbnailUrl: '/yugo_images/open-pit-mine-with-machines-2024-09-16-10-43-35-utc.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=placeholder',
    duration: '4:32',
    publishedAt: '2026-01-15',
  },
  {
    id: 'v2',
    title: 'Exploration Update — Sinjakovo Project',
    thumbnailUrl: '/yugo_images/drill-rig-working-2024-11-12-08-26-36-utc.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=placeholder',
    duration: '6:18',
    publishedAt: '2026-01-02',
  },
  {
    id: 'v3',
    title: 'Managing Director Interview — Strategy Outlook',
    thumbnailUrl: '/yugo_images/three-contemporary-builders-in-uniform-2025-03-16-04-36-05-utc.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=placeholder',
    duration: '8:45',
    publishedAt: '2025-12-10',
  },
]

export const SAMPLE_DOCUMENTS: InvestorDocument[] = [
  {
    id: 'd1',
    title: 'Annual Report 2025',
    category: 'annual-report',
    date: '2025-09-30',
    downloadUrl: '#',
    fileSize: '4.2 MB',
    fileType: 'PDF',
  },
  {
    id: 'd2',
    title: 'Quarterly Activities Report — Dec 2025',
    category: 'quarterly-report',
    date: '2026-01-31',
    downloadUrl: '#',
    fileSize: '1.8 MB',
    fileType: 'PDF',
  },
  {
    id: 'd3',
    title: 'Quarterly Activities Report — Sep 2025',
    category: 'quarterly-report',
    date: '2025-10-31',
    downloadUrl: '#',
    fileSize: '1.6 MB',
    fileType: 'PDF',
  },
  {
    id: 'd4',
    title: 'Investor Presentation — February 2026',
    category: 'presentation',
    date: '2026-02-01',
    downloadUrl: '#',
    fileSize: '3.1 MB',
    fileType: 'PDF',
  },
  {
    id: 'd5',
    title: 'Corporate Governance Statement',
    category: 'governance',
    date: '2025-09-30',
    downloadUrl: '#',
    fileSize: '980 KB',
    fileType: 'PDF',
  },
  {
    id: 'd6',
    title: 'Quarterly Activities Report — Jun 2025',
    category: 'quarterly-report',
    date: '2025-07-31',
    downloadUrl: '#',
    fileSize: '1.5 MB',
    fileType: 'PDF',
  },
]

export const CALENDAR_EVENTS: CalendarEvent[] = [
  {
    id: 'e1',
    title: 'Quarterly Activities Report — March 2026',
    date: '2026-04-30',
    type: 'earnings',
    description: 'Release of quarterly activities and cashflow report for the period ending 31 March 2026.',
    isUpcoming: true,
  },
  {
    id: 'e2',
    title: 'Annual General Meeting',
    date: '2026-11-28',
    type: 'agm',
    description: 'Annual General Meeting of shareholders.',
    location: 'Perth, Western Australia',
    isUpcoming: true,
  },
  {
    id: 'e3',
    title: 'Half-Year Financial Report',
    date: '2026-03-15',
    type: 'earnings',
    description: 'Release of half-year financial report for the period ending 31 December 2025.',
    isUpcoming: true,
  },
  {
    id: 'e4',
    title: 'Resources Rising Stars Conference',
    date: '2026-05-20',
    endDate: '2026-05-21',
    type: 'conference',
    description: 'Managing Director presenting at Resources Rising Stars investor conference.',
    location: 'Sydney, NSW',
    isUpcoming: true,
  },
  {
    id: 'e5',
    title: 'Quarterly Activities Report — June 2026',
    date: '2026-07-31',
    type: 'earnings',
    description: 'Release of quarterly activities and cashflow report for the period ending 30 June 2026.',
    isUpcoming: true,
  },
]

export const DOCUMENT_CATEGORIES = [
  { key: 'all', label: 'All Documents' },
  { key: 'annual-report', label: 'Annual Reports' },
  { key: 'quarterly-report', label: 'Quarterly Reports' },
  { key: 'presentation', label: 'Presentations' },
  { key: 'governance', label: 'Governance' },
] as const

export const EVENT_TYPE_STYLES: Record<string, { color: string; bgColor: string; label: string }> = {
  earnings: { color: 'text-blue-800', bgColor: 'bg-blue-100', label: 'Earnings' },
  agm: { color: 'text-purple-800', bgColor: 'bg-purple-100', label: 'AGM' },
  conference: { color: 'text-emerald-800', bgColor: 'bg-emerald-100', label: 'Conference' },
  webinar: { color: 'text-amber-800', bgColor: 'bg-amber-100', label: 'Webinar' },
  'ex-dividend': { color: 'text-red-800', bgColor: 'bg-red-100', label: 'Ex-Dividend' },
  other: { color: 'text-gray-800', bgColor: 'bg-gray-100', label: 'Event' },
}
