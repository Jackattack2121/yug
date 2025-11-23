import CompanySectionRenderer from './CompanySectionRenderer'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { CompanyContentSection } from '@/lib/admin/section-types'

interface Props {
  slug: string
}

function getCompanyPageData(slug: string): { heroTitle: string; heroSubtitle?: string; heroImage: string; sections: CompanyContentSection[] } | null {
  const pages: Record<string, any> = {
    'corporate-directory': {
      heroTitle: 'Corporate Directory',
      heroSubtitle: 'Contact Information and Office Locations',
      heroImage: '/images/hero-mining-1.jpg',
      sections: [
        {
          id: 'overview',
          type: 'text_content',
          order: 1,
          heading: 'Corporate Office',
          content: '<p>Yugo Metals is headquartered in Perth, Australia, with exploration operations in Bosnia and Herzegovina.</p>',
          centered: false,
        },
        {
          id: 'contact',
          type: 'contact_info',
          order: 2,
          heading: 'Contact Information',
          items: [
            {
              label: 'Address',
              value: 'Level 10, 123 St Georges Terrace, Perth WA 6000',
              icon: '📍',
            },
            {
              label: 'Phone',
              value: '+61 8 1234 5678',
              icon: '📞',
              link: 'tel:+61812345678',
            },
            {
              label: 'Email',
              value: 'info@yugometals.com',
              icon: '✉️',
              link: 'mailto:info@yugometals.com',
            },
            {
              label: 'Website',
              value: 'www.yugometals.com',
              icon: '🌐',
              link: 'https://www.yugometals.com',
            },
          ],
        },
        {
          id: 'asx',
          type: 'text_content',
          order: 3,
          heading: 'ASX Listing',
          content: '<p><strong>ASX Code:</strong> LYK</p><p><strong>Company Name:</strong> Yugo Metals</p><p>For investor relations inquiries, please contact: <a href="mailto:ir@lykosmetals.com">ir@lykosmetals.com</a></p>',
          centered: false,
        },
      ],
    },
    'corporate-governance': {
      heroTitle: 'Corporate Governance',
      heroSubtitle: 'Commitment to Best Practice',
      heroImage: '/images/hero-mining-2.jpg',
      sections: [
        {
          id: 'overview',
          type: 'text_content',
          order: 1,
          heading: 'Governance Framework',
          content: '<p>Yugo Metals is committed to maintaining the highest standards of corporate governance. Our governance framework is designed to ensure transparency, accountability, and ethical conduct across all aspects of our operations.</p><p>We adhere to the ASX Corporate Governance Council\'s Corporate Governance Principles and Recommendations, and regularly review our governance practices to ensure they remain current and effective.</p>',
          centered: false,
        },
        {
          id: 'board',
          type: 'text_content',
          order: 2,
          heading: 'Board of Directors',
          content: '<p>Our Board of Directors brings together a diverse range of skills and experience, with expertise in mining, finance, corporate governance, and sustainability. The Board is responsible for setting the Company\'s strategic direction and ensuring effective oversight of management.</p><p>The Board meets regularly and maintains appropriate committees to oversee key areas including audit, risk management, and remuneration.</p>',
          centered: false,
        },
        {
          id: 'policies',
          type: 'card_grid',
          order: 3,
          heading: 'Governance Policies',
          columns: 3,
          cards: [
            {
              title: 'Code of Conduct',
              content: 'Our Code of Conduct sets out the standards of behaviour expected from all directors, officers, and employees.',
            },
            {
              title: 'Risk Management',
              content: 'We maintain a comprehensive risk management framework to identify, assess, and manage risks across our operations.',
            },
            {
              title: 'Whistleblower Policy',
              content: 'Our Whistleblower Policy provides a mechanism for reporting concerns about misconduct or breaches of law or policy.',
            },
          ],
        },
      ],
    },
    'corporate-responsibility': {
      heroTitle: 'Corporate Responsibility',
      heroSubtitle: 'Sustainable Mining Practices',
      heroImage: '/images/hero-mining-1.jpg',
      sections: [
        {
          id: 'overview',
          type: 'text_content',
          order: 1,
          heading: 'Our Commitment',
          content: '<p>Yugo Metals is committed to operating responsibly and sustainably. We recognise that our operations have an impact on the environment, communities, and stakeholders, and we are dedicated to minimising negative impacts while maximising positive contributions.</p><p>Our approach to corporate responsibility encompasses environmental stewardship, community engagement, workplace safety, and ethical business practices.</p>',
          centered: false,
        },
        {
          id: 'environment',
          type: 'two_column',
          order: 2,
          heading: 'Environmental Stewardship',
          leftContent: '<h3>Environmental Management</h3><p>We are committed to minimising our environmental footprint through responsible exploration practices, rehabilitation of disturbed areas, and ongoing monitoring of our environmental impact.</p>',
          rightContent: '<h3>Sustainability</h3><p>Our focus on critical minerals and rare earth elements supports the global transition to clean energy, contributing to a more sustainable future while operating responsibly in the present.</p>',
        },
        {
          id: 'community',
          type: 'text_content',
          order: 3,
          heading: 'Community Engagement',
          content: '<p>We believe in building strong relationships with the communities in which we operate. This includes engaging with local stakeholders, respecting Indigenous rights and cultural heritage, and contributing to local economic development where possible.</p><p>Our community engagement approach is based on open communication, mutual respect, and a commitment to leaving a positive legacy in the regions where we operate.</p>',
          centered: false,
        },
      ],
    },
  };

  return pages[slug] || null;
}

export default function CompanyPageLayout({ slug }: Props) {
  const pageData = getCompanyPageData(slug)

  if (!pageData) {
    return null
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${pageData.heroImage})` }}
        />
        <div className="relative container text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider">
            {pageData.heroTitle}
          </h1>
          {pageData.heroSubtitle && (
            <p className="text-xl md:text-2xl mt-4 font-light">
              {pageData.heroSubtitle}
            </p>
          )}
        </div>
      </section>

      {/* Content Sections */}
      {pageData.sections && (
        <CompanySectionRenderer sections={pageData.sections} />
      )}
    </>
  )
}

