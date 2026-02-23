'use client'

import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { HiOutlineChartBar, HiOutlineGlobe, HiOutlineMail, HiOutlineArrowRight } from 'react-icons/hi'

const CTA_CARDS = [
  {
    icon: HiOutlineChartBar,
    title: 'Investor Centre',
    description: 'Live stock price, ASX announcements, financial reports, and key documents.',
    href: '/investors',
  },
  {
    icon: HiOutlineGlobe,
    title: 'Our Projects',
    description: 'Explore our portfolio of five critical metals projects across Bosnia and Herzegovina.',
    href: '/projects',
  },
  {
    icon: HiOutlineMail,
    title: 'Get in Touch',
    description: 'Contact our investor relations team for inquiries about Yugo Metals.',
    href: '/investors/contact',
  },
]

export default function AboutCTA() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 font-montserrat mb-3">
              Ready to Learn More?
            </h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Explore our projects, review the latest investor information, or reach out to our team.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {CTA_CARDS.map((card, i) => {
            const Icon = card.icon
            return (
              <AnimatedSection key={card.title} delay={i * 0.1}>
                <Link
                  href={card.href}
                  className="group block bg-white border border-gray-200 p-8 text-center hover:border-primary-600 hover:shadow-lg transition-all h-full"
                >
                  <div className="inline-flex p-4 bg-primary-50 mb-5 group-hover:bg-primary-100 transition-colors">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600">
                    Explore
                    <HiOutlineArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
