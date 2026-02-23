export const SEO_CONFIG = {
  name: 'Yugo Metals Ltd',
  legalName: 'Yugo Metals Ltd',
  abn: '65 650 011 644',
  asxCode: 'YUG',
  baseUrl: 'https://yugometals.com',
  description:
    'Yugo Metals is an ASX-listed critical metals exploration company with three 100%-owned projects comprising five tenements in Bosnia and Herzegovina, covering 190km² and targeting gold, antimony, nickel, copper, silver, zinc, lead, and cobalt.',
  address: {
    streetAddress: 'Level 8, 216 St Georges Tce',
    addressLocality: 'Perth',
    addressRegion: 'WA',
    postalCode: '6000',
    addressCountry: 'AU',
  },
  phone: '+61 8 9481 0389',
  email: 'hello@yugometals.com',
  investorEmail: 'Petar@yugometals.com',
  ceoPhone: '+61 414 830 540',
  logo: 'https://yugometals.com/logo.png',
  sameAs: [
    'https://www.linkedin.com/company/yugo-metals/',
    'https://x.com/YugoMetals',
  ],
  shareRegistry: {
    name: 'Computershare Investor Services Pty Limited',
    address: 'Level 17, 221 St Georges Terrace, Perth WA 6000',
    phoneAU: '1300 850 505',
    phoneIntl: '+61 3 9415 4000',
    email: 'cgs@computershare.com.au',
    website: 'www.investorcentre.com',
  },
} as const

export interface BoardMember {
  name: string
  role: string
  description: string
}

export const BOARD_MEMBERS: BoardMember[] = [
  {
    name: 'David Wheeler',
    role: 'Non-Executive Chairman',
    description:
      'David has more than 30 years of Senior Executive Management, Directorships, and Corporate Advisory experience. He is a foundation Director and Partner of Pathways Corporate, a boutique Corporate Advisory firm that undertakes assignments on behalf of family offices, private clients, and ASX listed companies. David has engaged in business projects in the USA, UK, Europe, NZ, China, Malaysia, Singapore and the Middle East. David is a Fellow of the Australian Institute of Company Directors and has experience on public and private company boards, currently holding a number of Directorships and Advisory positions in Australian companies.',
  },
  {
    name: 'Petar Tomasevic',
    role: 'Chief Executive Officer',
    description:
      'Mr Tomasevic is a multilingual leader with a diverse background. Specializing in future metals, mineral acquisition, and asset implementation, Petar brings a deep understanding of the mining and financing sector to his role with Yugo Metals. Prior to his current role, Petar served as Director at Fenix Resources Ltd (ASX: FEX), playing a pivotal role in the company\'s transformation into a premium iron ore producer. He was instrumental in restructuring and financing Fenix\'s acclaimed Iron Ridge project, showcasing his ability to navigate complex financial challenges. Petar currently serves as a Non-Executive Director for both GTI Energy Ltd (ASX: GTR) and Regenerate Resources Ltd (ASX: R8R).',
  },
  {
    name: 'Mihajlo Matkovic',
    role: 'Non-Executive Director',
    description:
      'Mr Matkovic has 10+ years of experience with a multinational law firm headquartered in London, UK. Heavily involved in some of the most complex and significant large-scale Western Balkans transactions with the primary focus on Banking & Finance, Projects & Energy, Real Estate, Dispute Resolution and White Collar & Government Investigations. Member of the legal team advising the Serbian Government on the Belgrade Airport Concession; Bank of China on the set up and incorporation of the Serbian subsidiary and various compliance matters; General Electric on the financing of the first large-scale renewable/wind farm project in Western Balkans and various aviation matters; Zijin Mining, one of the biggest gold/copper miners, on the acquisition of a mining business in Serbia.',
  },
  {
    name: 'Craig McNab',
    role: 'Company Secretary',
    description:
      'Mr McNab is a highly credentialed CFO and company secretary with over 15 years\' experience in the resource industry and accounting profession in Australia, NZ and the UK. Mr McNab initially qualified as an auditor at PricewaterhouseCoopers and his experience includes senior finance positions held at the De Beers Group and various corporate roles at Anglo American plc in London. He provides services to a number of resource based ASX-listed companies, specializing in corporate compliance, governance and financial accounting.',
  },
  {
    name: 'Mladen Stevanovic',
    role: 'Geological Consultant',
    description:
      'Mr Stevanovic is a geologist with over 20 years experience across a number of commodities including precious metals (gold, silver, platinum), base metals (nickel, copper, chromite, lead, zinc and antimony) and uranium. Mr Stevanovic has held senior roles at major and junior international mining companies. He has led exploration teams that made significant discoveries in Europe, Australia and Africa. He has experience in managing JORC compliant exploration campaigns, resource estimates, metallurgical testwork and feasibility studies. Mr Stevanovic is Competent Person for reporting geological results on ASX, and accredited statutory supervisor in Western Australia and Bosnia-Herzegovina.',
  },
]

export const BREADCRUMB_LABELS: Record<string, string> = {
  '': 'Home',
  investors: 'Investor Centre',
  'asx-announcements': 'ASX Announcements',
  presentations: 'Presentations',
  calendar: 'Events Calendar',
  contact: 'Contact',
  esg: 'ESG',
  'fact-sheet': 'Fact Sheet',
  'financial-reports': 'Financial Reports',
  media: 'Media',
  'share-information': 'Share Information',
  company: 'Company',
  'board-of-directors': 'Board of Directors',
  'corporate-directory': 'Corporate Directory',
  'corporate-governance': 'Corporate Governance',
  'corporate-responsibility': 'Corporate Responsibility',
  projects: 'Our Projects',
  'why-yugo-metals': 'Why Yugo Metals',
  prospectus: 'Prospectus',
  sockovac: 'Sockovac',
  sinjakovo: 'Sinjakovo',
  cajnice: 'Cajnice',
}

export const LOCALES = ['en', 'de', 'bs', 'zh', 'ja', 'it'] as const
