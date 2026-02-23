'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { HiOutlineGlobe, HiOutlineUserGroup, HiOutlineShieldCheck } from 'react-icons/hi'

const PILLARS = [
  {
    icon: HiOutlineGlobe,
    title: 'Environmental Stewardship',
    body: 'Minimising our environmental footprint through responsible exploration practices, rehabilitation of disturbed areas, and ongoing monitoring. Our exploration methodology prioritises minimal-impact techniques.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: HiOutlineUserGroup,
    title: 'Community Engagement',
    body: 'Building genuine relationships with local communities in Bosnia and Herzegovina. We prioritise local employment, open stakeholder consultation, and contributing to regional economic development.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Corporate Governance',
    body: 'Adhering to the ASX Corporate Governance Council\'s Principles and Recommendations. Transparent reporting, board independence, and ethical conduct underpin everything we do.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
]

export default function ResponsibleExploration() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <AnimatedSection>
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 mb-2">
              Our Commitment
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 font-montserrat mb-3">
              Responsible Exploration
            </h2>
            <p className="text-base text-gray-600 max-w-2xl">
              Operating responsibly is not optional — it&apos;s fundamental to who we are and how we build lasting value for all stakeholders.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <AnimatedSection key={pillar.title} delay={i * 0.1}>
                <div className="bg-white border border-gray-200 p-8 hover:border-primary-600 hover:shadow-md transition-all h-full">
                  <div className={`inline-flex p-3 ${pillar.bgColor} mb-5`}>
                    <Icon className={`w-7 h-7 ${pillar.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
