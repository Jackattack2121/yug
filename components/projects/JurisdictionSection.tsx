'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { JURISDICTION_DATA } from '@/lib/project-data'

export default function JurisdictionSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <AnimatedSection>
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 mb-2">
              Jurisdiction
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 font-montserrat">
              Bosnia &amp; Herzegovina
            </h2>
            <p className="text-base text-gray-600 mt-2 max-w-2xl">
              An EU accession state with an established mining regulatory framework and a skilled workforce.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <AnimatedSection delay={0}>
            <div className="text-center p-6 bg-gray-50">
              <div className="text-4xl font-black text-primary-600 mb-2">{JURISDICTION_DATA.profitTax}</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-secondary-900 mb-1">Profit Tax</div>
              <div className="text-xs text-gray-500">{JURISDICTION_DATA.profitTaxNote}</div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <div className="text-center p-6 bg-gray-50">
              <div className="text-4xl font-black text-primary-600 mb-2">{JURISDICTION_DATA.miningRoyalties}</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-secondary-900 mb-1">Mining Royalties</div>
              <div className="text-xs text-gray-500">{JURISDICTION_DATA.miningRoyaltiesNote}</div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="text-center p-6 bg-gray-50">
              <div className="text-4xl font-black text-primary-600 mb-2">8yr</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-secondary-900 mb-1">Exploration License</div>
              <div className="text-xs text-gray-500">{JURISDICTION_DATA.explorationLicense}</div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="text-center p-6 bg-gray-50">
              <div className="text-4xl font-black text-primary-600 mb-2">30yr</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-secondary-900 mb-1">Mining License</div>
              <div className="text-xs text-gray-500">{JURISDICTION_DATA.miningLicense}</div>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection delay={0.2}>
            <div className="p-6 bg-gray-50">
              <h4 className="text-sm font-bold uppercase tracking-wider text-secondary-900 mb-3">
                Infrastructure
              </h4>
              <ul className="space-y-2">
                {JURISDICTION_DATA.infrastructure.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.25}>
            <div className="p-6 bg-gray-50">
              <h4 className="text-sm font-bold uppercase tracking-wider text-secondary-900 mb-3">
                Foreign Miners Operating
              </h4>
              <ul className="space-y-2">
                {JURISDICTION_DATA.foreignMiners.map((name) => (
                  <li key={name} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
