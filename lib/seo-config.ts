export const SEO_CONFIG = {
  name: 'Yugo Metals Ltd',
  legalName: 'Yugo Metals Ltd',
  abn: '65 650 011 644',
  asxCode: 'YUG',
  baseUrl: 'https://yugometals.com',
  description:
    'Yugo Metals is an ASX-listed critical metals exploration company with three 100%-owned projects comprising five tenements in Bosnia and Herzegovina, covering 190km² and targeting gold, antimony, nickel, copper, silver, zinc, lead, and cobalt.',
  address: {
    streetAddress: '9 Aldous Place',
    addressLocality: 'Booragoon',
    addressRegion: 'WA',
    postalCode: '6154',
    addressCountry: 'AU',
  },
  phone: '+61 8 6275 2006',
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
    name: 'Craig McNab',
    role: 'Non-Executive Director & Company Secretary',
    description:
      'Mr McNab is a Chartered Accountant and Fellow member of the Governance Institute of Australia (Chartered Secretary) with over 15 years\' experience in the resources industry and accounting profession in Australia, New Zealand and the UK. Mr McNab currently holds CFO and Company Secretary positions with various ASX listed companies and brings strong experience across corporate.',
  },
  {
    name: 'Mladen Stevanovic',
    role: 'Geological Consultant',
    description:
      'Mr Stevanovic is a geologist with over 20 years experience across a number of commodities including precious metals (gold, silver, platinum), base metals (nickel, copper, chromite, lead, zinc and antimony) and uranium. Mr Stevanovic has held senior roles at major and junior international mining companies. He has led exploration teams that made significant discoveries in Europe, Australia and Africa. He has experience in managing JORC compliant exploration campaigns, resource estimates, metallurgical testwork and feasibility studies. Mr Stevanovic is Competent Person for reporting geological results on ASX, and accredited statutory supervisor in Western Australia and Bosnia-Herzegovina.',
  },
  {
    name: 'Cameron Peacock',
    role: 'Non-Executive Director',
    description:
      'Mr Peacock is an experienced corporate finance and capital markets executive with more than 25 years\' experience working across various banking, private equity and corporate finance roles. Most recently Mr Peacock was Head of Investor Relations and Business Development at Nickel Industries Limited (ASX: NIC) where he served as a member of the executive team that has grown that company into the world\'s largest listed pure-play nickel producer. Mr Peacock has also previously held similar positions at Santana Minerals Limited (ASX: SMI) and Alpha HPA Limited (ASX: A4N). Mr Peacock has been deeply involved in numerous large-scale equity and debt transactions and has an established network across the world\'s leading global resources and generalist investment funds. He holds a Bachelor of Commerce Degree from the University of Western Australia, a Graduate Diploma in Applied Finance and Investment from FINSIA and a Masters in Applied Finance from the University of Melbourne. Mr Peacock is currently a Non-Executive Director of ASX-listed FMR Resources Limited.',
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

export const LOCALES = ['en', 'de', 'zh'] as const
