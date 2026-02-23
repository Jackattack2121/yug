const YUGO_METALS_KNOWLEDGE = `
# Yugo Metals (ASX: YUG)

## Company Overview
Yugo Metals is an Australian mining company listed on the ASX under the ticker YUG. The company is focused on exploring for critical metals in Bosnia and Herzegovina, on the doorstep of the European Union. Yugo Metals owns 100% of five exploration projects targeting gold, antimony, nickel, copper, cobalt, and precious metals — essential metals for the energy transition and European supply security.

- **ABN:** 65 650 011 644
- **ASX Code:** YUG
- **Headquarters:** Perth, Western Australia
- **Registered Office:** Level 10, 123 St Georges Terrace, Perth WA 6000, Australia
- **Website:** www.yugometals.com

## Projects (all 100% owned, all in Republic of Srpska, Bosnia and Herzegovina)

### 1. Doboj Project
- **Commodities:** Nickel, Copper, Cobalt
- **Description:** High-grade nickel-copper project with a history of high-grade mineral discovery and significant exploration potential. The project is prospective for nickel, copper, and cobalt — critical metals essential for the energy transition. Historical exploration demonstrated mineral potential, and the project has never been subjected to modern systematic exploration. Exploration includes geochemical sampling, geophysical surveys, and diamond drilling.

### 2. Jezero Project
- **Commodities:** Precious Metals (Gold, Silver)
- **Description:** Strategic exploration opportunity prospective for precious metals. The project benefits from historical mining activity in the region, demonstrating the presence of economically viable mineralisation. Modern exploration techniques are being applied to this historically productive mining region.

### 3. Sockovac Project
- **Commodities:** Base Metals
- **Description:** High-potential base metals exploration project. The project area has seen limited modern exploration despite being in a historically productive mining region, representing an excellent opportunity for discovery with modern systematic techniques.

### 4. Sinjakovo Project
- **Commodities:** Copper, Cobalt
- **Description:** Copper-cobalt exploration project targeting critical battery metals essential for the energy transition and battery technology. The project benefits from historical exploration data while remaining underexplored with modern techniques.

### 5. Cajnice Project
- **Commodities:** Nickel, Precious Metals
- **Description:** Emerging exploration opportunity prospective for nickel and precious metals. Nickel is a critical metal for battery technology and stainless steel production, with strong demand growth expected as the world transitions to clean energy.

## Board of Directors

- **Sarah Johnson** — Managing Director. Geologist with over 25 years of experience in mineral exploration and project management across Europe. Holds a Master of Science in Geology and is a member of the Australian Institute of Geoscientists. Has been with Yugo Metals since inception.
- **Michael Chen** — Non-Executive Chairman. Over 30 years of experience in mining finance and corporate governance. Has served on the boards of several ASX-listed mining companies. Fellow of the Financial Services Institute of Australasia.
- **Dr. Elena Petrovic** — Technical Director. Geological engineer with extensive experience in the Balkans region and over 20 years in exploration and mining. Holds a PhD in Geological Engineering and has published extensively on Balkan metallogeny.

## Company Highlights
1. Strategic location in Bosnia and Herzegovina, an EU accession state with a land border to the EU
2. Rich mining history — the Balkans is one of the world's oldest mining areas
3. 100% project ownership across all five projects
4. Underexplored assets — never subjected to modern systematic exploration
5. Pro-mining environment with skilled workforce and existing infrastructure
6. Critical metals focus: gold, antimony, nickel, copper for the energy transition

## Contact Information
- **General Inquiries:** info@yugometals.com
- **Investor Relations:** investor.relations@yugometals.com
- **Phone:** +61 8 9481 0389
- **Office:** Level 10, 123 St Georges Terrace, Perth WA 6000, Australia
- **Business Hours:** Monday - Friday, 9:00 AM - 5:00 PM AWST

## Share Registry
- **Registry:** Automic Registry Services
- **Registry Phone:** 1300 288 664
- **Registry Email:** hello@automicgroup.com.au
- **Registry Website:** www.automicgroup.com.au

## ESG Commitment
Yugo Metals is committed to sustainable and responsible mining practices, encompassing environmental stewardship, community engagement, and strong corporate governance. The company adheres to the ASX Corporate Governance Council's Principles and Recommendations.

## Investor Centre
The Investor Centre at yugometals.com/investors provides access to ASX announcements, financial reports, investor presentations, share information, investor calendar, media coverage, fact sheets, and ESG information.
`

export function getKnowledgeBase(siteId: string): string {
  if (siteId === 'yugo-metals') {
    return YUGO_METALS_KNOWLEDGE
  }
  return YUGO_METALS_KNOWLEDGE
}
