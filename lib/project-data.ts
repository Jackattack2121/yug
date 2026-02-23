// lib/project-data.ts — Single source of truth for all geological/corporate project data
// All assay results are verbatim from ASX announcements. Do not round or modify grades.

// ─── Commodity types & display ─────────────────────────────────────────────

export type Commodity = 'Au' | 'Ag' | 'Cu' | 'Co' | 'Ni' | 'Zn' | 'Pb' | 'Sb'

export const COMMODITY_COLORS: Record<Commodity, { bg: string; text: string }> = {
  Au: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
  Ag: { bg: 'bg-gray-200', text: 'text-gray-800' },
  Cu: { bg: 'bg-orange-100', text: 'text-orange-800' },
  Co: { bg: 'bg-blue-100', text: 'text-blue-800' },
  Ni: { bg: 'bg-emerald-100', text: 'text-emerald-800' },
  Zn: { bg: 'bg-slate-200', text: 'text-slate-800' },
  Pb: { bg: 'bg-neutral-200', text: 'text-neutral-800' },
  Sb: { bg: 'bg-purple-100', text: 'text-purple-800' },
}

export const COMMODITY_NAMES: Record<Commodity, string> = {
  Au: 'Gold',
  Ag: 'Silver',
  Cu: 'Copper',
  Co: 'Cobalt',
  Ni: 'Nickel',
  Zn: 'Zinc',
  Pb: 'Lead',
  Sb: 'Antimony',
}

// ─── Interfaces ────────────────────────────────────────────────────────────

export interface ExplorationResult {
  sampleId?: string
  interval: string
  grades: string
  isSubInterval?: boolean
  asxRef?: string
  asxDate?: string
}

export interface Prospect {
  name: string
  commodities: Commodity[]
  description: string
  results: ExplorationResult[]
  asxReferences: { date: string; title: string }[]
  nextSteps: string[]
  images: { src: string; alt: string; caption?: string; todoPage?: number }[]
}

export interface Tenement {
  name: string
  area: string
  status: 'Granted' | 'Grant Pending'
  commodities: Commodity[]
}

export interface TimelineItem {
  period: string
  title: string
  description: string
}

export interface Project {
  slug: string
  name: string
  headline: string
  commodities: Commodity[]
  tenements: Tenement[]
  totalArea: string
  ownership: string
  location: string
  overview: string
  prospects: Prospect[]
  timeline: TimelineItem[]
  heroImage: string
  cardImage: string
  headlineResult: string
  seoTitle: string
  seoDescription: string
  hasHistoricalDisclaimer?: boolean
}

// ─── Project Data ──────────────────────────────────────────────────────────

export const SINJAKOVO: Project = {
  slug: 'sinjakovo',
  name: 'Sinjakovo Project',
  headline: 'Gold & Antimony',
  commodities: ['Au', 'Sb', 'Ag', 'Cu', 'Co', 'Zn', 'Pb'],
  totalArea: '80km²',
  ownership: '100%',
  location: 'Republic of Srpska, Bosnia and Herzegovina',
  heroImage: '/yugo_images/green-dense-forests-surround-old-mining-factory-wi-2025-08-28-11-53-12-utc.jpg',
  cardImage: '/yugo_images/green-dense-forests-surround-old-mining-factory-wi-2025-08-28-11-53-12-utc.jpg',
  headlineResult: '61m @ 1.5 g/t Au from surface trenching',
  seoTitle: 'Sinjakovo Gold & Antimony Project | Yugo Metals (ASX: YUG)',
  seoDescription: 'The Sinjakovo Project covers 80km² across two tenements targeting gold, antimony, silver, and copper in Bosnia and Herzegovina. Exploration highlights include 61m @ 1.5 g/t gold from surface trenching.',
  tenements: [
    { name: 'Sinjakovo', area: '50km²', status: 'Granted', commodities: ['Au', 'Ag', 'Cu', 'Co', 'Zn', 'Pb', 'Sb'] },
    { name: 'Jezero', area: '30km²', status: 'Granted', commodities: ['Au', 'Ag', 'Cu', 'Zn', 'Pb', 'Sb'] },
  ],
  overview: 'The Sinjakovo Project comprises two granted tenements — Sinjakovo (50km²) and Jezero (30km²) — covering 80km² in the Republic of Srpska, Bosnia and Herzegovina. The project targets gold, antimony, silver, copper, cobalt, zinc and lead mineralisation across multiple prospects identified through soil sampling, rock-chip sampling, and trenching programs.\n\nExploration to date has identified a 4km² gold-in-soil anomaly at Sinjakovo, with surface trenching returning up to 61m @ 1.5 g/t gold. Rock-chip results include up to 8 g/t gold, 16% copper, 2 kg/t silver and 4.5% antimony. The Krajevi prospect within the Jezero tenement has returned soil anomalies warranting further investigation.',
  prospects: [
    {
      name: 'Sinjakovo Gold & Antimony',
      commodities: ['Au', 'Sb', 'Ag', 'Cu'],
      description: 'The Sinjakovo prospect hosts a 4km² gold-in-soil anomaly defined by systematic soil sampling. Follow-up rock-chip sampling returned grades of up to 8 g/t gold, 16% copper, 2 kg/t silver and 4.5% antimony. Trenching confirmed continuity of the gold mineralisation at surface, with the best result being 61m @ 1.5 g/t gold.',
      results: [
        { interval: 'Soil sampling', grades: '4km² gold-in-soil anomaly', asxRef: 'ASX', asxDate: '22 Nov 2022' },
        { interval: 'Rock-chip sampling', grades: 'Up to 8 g/t Au, 16% Cu, 2 kg/t Ag, 4.5% Sb', asxRef: 'ASX', asxDate: '22 Nov 2022' },
        { interval: '61m from surface', grades: '1.5 g/t Au', asxRef: 'ASX', asxDate: '25 Jan 2023' },
      ],
      asxReferences: [
        { date: '22 November 2022', title: 'Significant Gold and Antimony Results at Sinjakovo' },
        { date: '25 January 2023', title: 'Exceptional Trenching Results at Sinjakovo' },
      ],
      nextSteps: [
        'Initial shallow drilling program to test the gold-in-soil anomaly at depth',
        'Resource drill-out following successful initial drilling',
      ],
      images: [
        // TODO: Extract from investor presentation PDF page 12 — gold soil sampling map
        { src: '/images/projects/sinjakovo/gold-soil-anomaly.png', alt: 'Sinjakovo 4km² gold-in-soil anomaly map', todoPage: 12 },
        // TODO: Extract from investor presentation PDF page 12 — channel sampling results
        { src: '/images/projects/sinjakovo/channel-results.png', alt: 'Sinjakovo channel sampling results', todoPage: 12 },
        // TODO: Extract from investor presentation PDF page 13-14 — cross-sections
        { src: '/images/projects/sinjakovo/cross-section.png', alt: 'Sinjakovo geological cross-section', todoPage: 13 },
      ],
    },
    {
      name: 'Barite-Silver-Zinc-Lead Veins',
      commodities: ['Ag', 'Zn', 'Pb', 'Sb', 'Cu'],
      description: 'Barite veins within the Sinjakovo tenement carry significant silver, zinc, lead, antimony and copper mineralisation. Rock-chip sampling has returned grades of up to 1 kg/t silver, 1.8% antimony, 4% copper, 12% zinc and 20% lead.',
      results: [
        { interval: 'Rock-chip sampling', grades: 'Up to 1 kg/t Ag, 1.8% Sb, 4% Cu, 12% Zn, 20% Pb', asxRef: 'ASX', asxDate: '8 Jun 2022' },
      ],
      asxReferences: [
        { date: '8 June 2022', title: 'Barite Vein Sampling Results' },
        { date: '20 July 2022', title: 'Additional Barite Vein Results' },
      ],
      nextSteps: [
        'Detailed geology mapping of barite vein systems',
        'Ground geophysics (IP/SP) to define drill targets',
        'Initial drilling to test vein extensions at depth',
      ],
      images: [
        // TODO: Extract from investor presentation PDF page 15 — barite vein photos
        { src: '/images/projects/sinjakovo/barite-veins.png', alt: 'Barite vein outcrop with silver-zinc-lead mineralisation', todoPage: 15 },
        // TODO: Extract from investor presentation PDF page 17 — mineralogy
        { src: '/images/projects/sinjakovo/mineralogy.png', alt: 'Sinjakovo mineralogy', todoPage: 17 },
      ],
    },
    {
      name: 'Krajevi (Jezero Tenement)',
      commodities: ['Au', 'Ag', 'Cu', 'Zn', 'Pb', 'Sb'],
      description: 'The Krajevi prospect is located within the Jezero tenement and has returned encouraging soil anomalies for gold, silver, copper, zinc, lead and antimony. The prospect is at an early stage and requires further systematic work to define drill targets.',
      results: [],
      asxReferences: [],
      nextSteps: [
        'Follow-up soil sampling to better define anomalies',
        'Rock-chip sampling on identified targets',
        'Geological mapping and target generation',
      ],
      images: [
        // TODO: Extract from investor presentation PDF page 18 — Krajevi soil anomaly map
        { src: '/images/projects/sinjakovo/krajevi-soil.png', alt: 'Krajevi prospect soil anomaly map', todoPage: 18 },
      ],
    },
  ],
  timeline: [
    { period: '2025', title: 'Shallow Drilling', description: 'Initial shallow drilling at the Sinjakovo gold-in-soil anomaly to test mineralisation at depth.' },
    { period: '2025', title: 'Geophysics Program', description: 'Ground geophysics (IP/SP) over barite vein systems to define drill targets.' },
    { period: '2025–2026', title: 'Resource Drilling', description: 'Follow-up resource drill-out at Sinjakovo, subject to initial drilling success.' },
    { period: '2026', title: 'Krajevi Follow-Up', description: 'Systematic exploration at the Krajevi prospect within the Jezero tenement.' },
  ],
}

export const SOCKOVAC: Project = {
  slug: 'sockovac',
  name: 'Sockovac Project',
  headline: 'Nickel & Cobalt',
  commodities: ['Ni', 'Co', 'Cu', 'Au'],
  totalArea: '60km²',
  ownership: '100%',
  location: 'Republic of Srpska, Bosnia and Herzegovina',
  heroImage: '/yugo_images/the-truck-transports-the-minerals-from-the-top-vie-2025-10-16-12-14-08-utc.jpg',
  cardImage: '/yugo_images/aerial-view-over-the-sand-pit-2025-10-13-02-21-23-utc.jpg',
  headlineResult: 'Historical drilling: up to 5.1m @ 6.6% Ni',
  seoTitle: 'Sockovac Nickel-Cobalt Project | Yugo Metals (ASX: YUG)',
  seoDescription: 'The Sockovac Project covers 60km² across two tenements targeting nickel and cobalt in Bosnia and Herzegovina. Historical drilling returned up to 5.1m @ 6.6% nickel.',
  hasHistoricalDisclaimer: true,
  tenements: [
    { name: 'Doboj', area: '50km²', status: 'Granted', commodities: ['Cu'] },
    { name: 'Petrovo', area: '10km²', status: 'Grant Pending', commodities: ['Au', 'Ni', 'Co'] },
  ],
  overview: 'The Sockovac Project comprises two tenements — Doboj (50km², granted) and Petrovo (10km², grant pending) — covering 60km² in the Republic of Srpska, Bosnia and Herzegovina. The project targets nickel and cobalt mineralisation identified through historical Yugoslav-era drilling and confirmed by modern soil geochemistry.\n\nHistorical drilling from 1969–1970 returned up to 5.1m @ 6.6% nickel. Cobalt was not analysed historically. Modern soil sampling has defined a large nickel-cobalt anomaly exceeding 1,000 ppm Ni and 100 ppm Co over a 14km² area. The company plans twin-drilling to confirm the historical results using modern JORC-compliant methods.',
  prospects: [
    {
      name: 'Sockovac Nickel-Cobalt',
      commodities: ['Ni', 'Co'],
      description: 'The principal prospect hosts high-grade nickel mineralisation confirmed by historical drilling. A large soil anomaly exceeding 1,000 ppm nickel and 100 ppm cobalt over 14km² demonstrates the scale of the target. Cobalt was not analysed in the historical drilling programs, representing potential additional upside.',
      results: [
        { interval: 'Historical drilling (1969–1970)', grades: 'Up to 5.1m @ 6.6% Ni', asxRef: 'ASX', asxDate: '19 Oct 2021' },
        { interval: 'Soil geochemistry', grades: '>1,000 ppm Ni and >100 ppm Co over 14km²', asxRef: 'ASX', asxDate: '13 Apr 2022' },
      ],
      asxReferences: [
        { date: '19 October 2021', title: 'Historical Nickel Results at Sockovac (also Prospectus)' },
        { date: '13 April 2022', title: 'Large Nickel-Cobalt Soil Anomaly Confirmed' },
      ],
      nextSteps: [
        'Petrovo tenement grant (pending)',
        'Twin-drilling program to confirm historical results using JORC-compliant methods',
        'Systematic drilling to test the extent of the 14km² soil anomaly',
      ],
      images: [
        // TODO: Extract from investor presentation PDF page 19 — Sockovac tenement map
        { src: '/images/projects/sockovac/tenement-map.png', alt: 'Sockovac project tenement map', todoPage: 19 },
        // TODO: Extract from investor presentation PDF page 20 — cross-section with planned drilling
        { src: '/images/projects/sockovac/cross-section-drilling.png', alt: 'Sockovac cross-section with planned twin-drilling locations', todoPage: 20 },
      ],
    },
  ],
  timeline: [
    { period: '2025', title: 'Petrovo Tenement Grant', description: 'Awaiting grant of the Petrovo tenement (10km²) to complete the project area.' },
    { period: '2025–2026', title: 'Twin-Drilling Program', description: 'Twin-drilling to confirm historical 1969–1970 nickel results using modern JORC-compliant methods.' },
    { period: '2026', title: 'Systematic Drilling', description: 'Systematic drilling across the 14km² nickel-cobalt soil anomaly to define the extent of mineralisation.' },
  ],
}

export const CAJNICE: Project = {
  slug: 'cajnice',
  name: 'Cajnice Project',
  headline: 'Copper & Gold',
  commodities: ['Cu', 'Au', 'Ag', 'Zn', 'Pb'],
  totalArea: '50km²',
  ownership: '100%',
  location: 'Republic of Srpska, Bosnia and Herzegovina',
  heroImage: '/yugo_images/lush-mountain-forest-in-bosnia-aerial-shot-2025-09-09-00-26-14-utc.jpg',
  cardImage: '/yugo_images/natural-quarry-is-located-near-road-against-backdr-2025-01-29-05-43-49-utc.jpg',
  headlineResult: 'Rock samples up to 10.5% Cu and 155 g/t Ag',
  seoTitle: 'Cajnice Copper-Gold Project | Yugo Metals (ASX: YUG)',
  seoDescription: 'The Cajnice Project covers 50km² targeting copper, gold, silver, zinc and lead in Bosnia and Herzegovina. Rock samples returned up to 10.5% copper and 155 g/t silver.',
  tenements: [
    { name: 'Cajnice', area: '50km²', status: 'Granted', commodities: ['Au', 'Ag', 'Cu', 'Zn', 'Pb'] },
  ],
  overview: 'The Cajnice Project comprises a single granted tenement of 50km² in the Republic of Srpska, Bosnia and Herzegovina. The project targets copper, gold, silver, zinc and lead mineralisation across multiple prospects identified through rock-chip and channel sampling programs.\n\nExploration to date has identified significant copper mineralisation at the Gramusovici and Majdan prospects, with rock samples returning up to 10.5% copper and 155 g/t silver. Gold-silver mineralisation has also been identified, with rock samples returning up to 2 g/t gold and 220 g/t silver.',
  prospects: [
    {
      name: 'Gramusovici Copper',
      commodities: ['Cu', 'Ag'],
      description: 'The Gramusovici prospect has returned high-grade copper results from channel and rock-chip sampling. A channel sample returned 1.4m @ 1.4% copper and 21 g/t silver. Rock-chip samples returned up to 10.5% copper and 155 g/t silver.',
      results: [
        { interval: 'Channel sample: 1.4m', grades: '1.4% Cu, 21 g/t Ag', asxRef: 'ASX', asxDate: '9 May 2022' },
        { interval: 'Rock-chip sampling', grades: 'Up to 10.5% Cu, 155 g/t Ag', asxRef: 'ASX', asxDate: '9 May 2022' },
      ],
      asxReferences: [
        { date: '9 May 2022', title: 'High-Grade Copper Results at Cajnice' },
      ],
      nextSteps: [
        'Detailed geological mapping of the Gramusovici prospect',
        'Additional channel sampling to define the extent of copper mineralisation',
        'Initial drilling to test mineralisation at depth',
      ],
      images: [
        // TODO: Extract from investor presentation PDF page 22 — Gramusovici copper photos
        { src: '/images/projects/cajnice/gramusovici-copper.png', alt: 'Gramusovici prospect copper mineralisation', todoPage: 22 },
      ],
    },
    {
      name: 'Majdan Copper',
      commodities: ['Cu', 'Ag'],
      description: 'The Majdan prospect hosts copper-silver mineralisation in cliff exposures. Further sampling and geological mapping is planned to evaluate the extent and grade of the copper mineralisation.',
      results: [],
      asxReferences: [],
      nextSteps: [
        'Systematic rock-chip sampling along cliff exposures',
        'Geological mapping to define the extent of mineralised structures',
      ],
      images: [
        // TODO: Extract from investor presentation PDF page 23 — Majdan cliff photos
        { src: '/images/projects/cajnice/majdan-cliff.png', alt: 'Majdan prospect cliff exposure with copper mineralisation', todoPage: 23 },
      ],
    },
    {
      name: 'Gold-Silver Prospects',
      commodities: ['Au', 'Ag'],
      description: 'Multiple gold-silver occurrences have been identified across the Cajnice tenement, with rock samples returning up to 2 g/t gold and 220 g/t silver.',
      results: [
        { interval: 'Rock-chip sampling', grades: 'Up to 2 g/t Au, 220 g/t Ag', asxRef: 'ASX', asxDate: '20 Jul 2022' },
      ],
      asxReferences: [
        { date: '20 July 2022', title: 'Gold-Silver Results at Cajnice' },
      ],
      nextSteps: [
        'Follow-up soil and rock-chip sampling to define gold-silver targets',
      ],
      images: [],
    },
    {
      name: 'Silver-Lead-Zinc',
      commodities: ['Ag', 'Zn', 'Pb'],
      description: 'Silver-lead-zinc mineralisation has been identified from rock-chip sampling, with grades of up to 51 g/t silver, 1% zinc and 3% lead.',
      results: [
        { interval: 'Rock-chip sampling', grades: 'Up to 51 g/t Ag, 1% Zn, 3% Pb', asxRef: 'ASX', asxDate: '1 Jun 2022' },
      ],
      asxReferences: [
        { date: '1 June 2022', title: 'Silver-Lead-Zinc Results at Cajnice' },
      ],
      nextSteps: [
        'Follow-up sampling to better define the silver-lead-zinc targets',
      ],
      images: [
        // TODO: Extract from investor presentation PDF page 24 — soil sampling map
        { src: '/images/projects/cajnice/soil-sampling.png', alt: 'Cajnice soil sampling results', todoPage: 24 },
      ],
    },
  ],
  timeline: [
    { period: '2025', title: 'Geological Mapping', description: 'Detailed geological mapping at Gramusovici and Majdan copper prospects.' },
    { period: '2025', title: 'Channel Sampling', description: 'Additional channel sampling program at Gramusovici to define copper mineralisation extent.' },
    { period: '2025–2026', title: 'Initial Drilling', description: 'Initial drilling to test copper mineralisation at depth at Gramusovici.' },
    { period: '2026', title: 'Gold-Silver Follow-Up', description: 'Follow-up sampling at gold-silver and silver-lead-zinc prospects.' },
  ],
}

// ─── All Projects & Helpers ────────────────────────────────────────────────

export const ALL_PROJECTS: Project[] = [SINJAKOVO, SOCKOVAC, CAJNICE]
export const PROJECT_SLUGS = ALL_PROJECTS.map((p) => p.slug)

export function getProjectBySlug(slug: string): Project | undefined {
  return ALL_PROJECTS.find((p) => p.slug === slug)
}

// ─── Tenement × Commodity Matrix (Investor Presentation p6) ───────────────

export interface TenementRow {
  tenement: string
  project: string
  area: string
  status: 'Granted' | 'Grant Pending'
  commodities: Record<Commodity, boolean>
}

export const TENEMENT_TABLE: TenementRow[] = [
  {
    tenement: 'Sinjakovo',
    project: 'Sinjakovo',
    area: '50km²',
    status: 'Granted',
    commodities: { Au: true, Ag: true, Cu: true, Co: true, Ni: false, Zn: true, Pb: true, Sb: true },
  },
  {
    tenement: 'Jezero',
    project: 'Sinjakovo',
    area: '30km²',
    status: 'Granted',
    commodities: { Au: true, Ag: true, Cu: true, Co: false, Ni: false, Zn: true, Pb: true, Sb: true },
  },
  {
    tenement: 'Cajnice',
    project: 'Cajnice',
    area: '50km²',
    status: 'Granted',
    commodities: { Au: true, Ag: true, Cu: true, Co: false, Ni: false, Zn: true, Pb: true, Sb: false },
  },
  {
    tenement: 'Doboj',
    project: 'Sockovac',
    area: '50km²',
    status: 'Granted',
    commodities: { Au: false, Ag: false, Cu: true, Co: false, Ni: false, Zn: false, Pb: false, Sb: false },
  },
  {
    tenement: 'Petrovo',
    project: 'Sockovac',
    area: '10km²',
    status: 'Grant Pending',
    commodities: { Au: true, Ag: false, Cu: false, Co: true, Ni: true, Zn: false, Pb: false, Sb: false },
  },
]

// ─── Jurisdiction Data ─────────────────────────────────────────────────────

export const JURISDICTION_DATA = {
  country: 'Bosnia and Herzegovina',
  profitTax: '10%',
  profitTaxNote: 'One of the lowest in Europe',
  miningRoyalties: '5%',
  miningRoyaltiesNote: 'For metallic minerals — one of the lowest in Europe',
  explorationLicense: 'Up to 8 years',
  miningLicense: '30 years with possible extensions',
  population: '3.3 million',
  keyCities: ['Sarajevo', 'Banja Luka'],
  infrastructure: [
    'International airport at Sarajevo',
    'Industrial seaport at Bar',
    'Roads, railway, and power network',
  ],
  foreignMiners: ['Adriatic Metals', 'Mineco', 'Arcelor Mittal', 'Leviathan Gold'],
} as const

// ─── Exploration Timeline (Company-wide) ───────────────────────────────────

export const EXPLORATION_TIMELINE: TimelineItem[] = [
  { period: '2025 H1', title: 'Sinjakovo Drilling', description: 'Initial shallow drilling at the Sinjakovo gold-in-soil anomaly.' },
  { period: '2025 H1', title: 'Sockovac Twin-Drilling', description: 'Twin-drilling to confirm historical nickel results at Sockovac.' },
  { period: '2025 H2', title: 'Cajnice Mapping & Sampling', description: 'Detailed geological mapping and channel sampling at Gramusovici and Majdan copper prospects.' },
  { period: '2025 H2', title: 'Sinjakovo Geophysics', description: 'Ground geophysics (IP/SP) program over barite vein systems.' },
  { period: '2026', title: 'Resource Drilling', description: 'Follow-up resource drilling at Sinjakovo, subject to initial drilling success.' },
  { period: '2026', title: 'Systematic Exploration', description: 'Systematic drilling across the Sockovac 14km² nickel-cobalt soil anomaly.' },
]
