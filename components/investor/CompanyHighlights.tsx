'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { COMPANY_HIGHLIGHTS } from '@/lib/investor-data'

export default function CompanyHighlights() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <AnimatedSection>
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 mb-2">
              Company Highlights
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 font-montserrat">
              What Defines Yugo Metals
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_HIGHLIGHTS.map((point, i) => (
            <AnimatedSection key={point.id} delay={i * 0.05}>
              <div className="group bg-white border border-gray-200 p-6 hover:border-primary-600 hover:shadow-md transition-all h-full">
                {/* Number */}
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 text-4xl font-bold text-primary-100 font-montserrat leading-none group-hover:text-primary-200 transition-colors">
                    {point.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-secondary-900 mb-2 leading-snug">
                      {point.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
