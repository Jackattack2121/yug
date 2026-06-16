'use client'

import { useTranslations } from 'next-intl'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Link } from '@/i18n/navigation'
import { KEY_METRICS, COMPANY_HIGHLIGHTS } from '@/lib/investor-data'
import { HiOutlineDownload, HiOutlineExternalLink } from 'react-icons/hi'

export default function FactSheetPage() {
  const t = useTranslations('investors.factSheet')
  const tBoard = useTranslations('company.board')

  const tenements = [
    { name: 'Sinjakovo', area: '50km\u00B2', metals: 'Au, Ag, Cu, Co, Zn, Pb, Sb', status: 'Granted' },
    { name: 'Jezero', area: '30km\u00B2', metals: 'Au, Ag, Cu, Zn, Pb, Sb', status: 'Granted' },
    { name: 'Cajnice', area: '50km\u00B2', metals: 'Au, Ag, Cu, Zn, Pb', status: 'Granted' },
    { name: 'Doboj', area: '50km\u00B2', metals: 'Cu', status: 'Granted' },
    { name: 'Petrovo', area: '10km\u00B2', metals: 'Au, Ni, Co', status: 'Grant Pending' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary-900 py-32 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/yugo_images/aerial-view-motor-grader-civil-at-construction-sit-2025-07-08-16-02-40-utc.jpg)' }}
        />
        <div className="absolute inset-0 bg-primary-600/60" />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h1 className="text-heading-lg text-white mb-4">{t('heroTitle')}</h1>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/90">
                {t('heroSubtitle')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Fact Sheet Content */}
      <section className="section-padding bg-white">
        <div className="container max-w-5xl">
          {/* Company Snapshot Header */}
          <AnimatedSection>
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 mb-2">ASX: YUG</p>
                <h2 className="text-3xl font-bold text-secondary-900 font-montserrat">
                  Company Snapshot
                </h2>
              </div>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold uppercase tracking-wider hover:bg-primary-700 transition-colors">
                <HiOutlineDownload className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </AnimatedSection>

          {/* Key Metrics */}
          <AnimatedSection delay={0.05}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {KEY_METRICS.map((metric) => (
                <div key={metric.label} className="bg-gray-50 border border-gray-200 p-5 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">{metric.label}</p>
                  <p className="text-2xl font-bold text-secondary-900 font-montserrat">{metric.value}</p>
                  {metric.sublabel && (
                    <p className="text-xs text-primary-600 mt-0.5">{metric.sublabel}</p>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Two column: Projects + Board */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Projects */}
            <AnimatedSection delay={0.1}>
              <div className="border border-gray-200 h-full">
                <div className="px-6 py-4 bg-secondary-900">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Exploration Tenements
                  </h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {tenements.map((t) => (
                    <div key={t.name} className="flex items-center justify-between px-6 py-3">
                      <div>
                        <p className="text-sm font-semibold text-secondary-900">{t.name} <span className="text-xs text-gray-400 font-normal">({t.area})</span></p>
                        <p className="text-xs text-gray-500">{t.metals}</p>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${t.status === 'Granted' ? 'text-emerald-700 bg-emerald-50' : 'text-amber-700 bg-amber-50'}`}>
                        {t.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                  <Link
                    href="/projects"
                    className="text-xs font-semibold uppercase tracking-wider text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    View All Projects →
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Board */}
            <AnimatedSection delay={0.15}>
              <div className="border border-gray-200 h-full">
                <div className="px-6 py-4 bg-secondary-900">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Board of Directors
                  </h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center justify-between px-6 py-3">
                      <div>
                        <p className="text-sm font-semibold text-secondary-900">{tBoard(`director${i}Name`)}</p>
                        <p className="text-xs text-primary-600">{tBoard(`director${i}Position`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                  <Link
                    href="/why-yugo-metals"
                    className="text-xs font-semibold uppercase tracking-wider text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Full Board Profiles →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Company Highlights */}
          <AnimatedSection delay={0.2}>
            <div className="border border-gray-200">
              <div className="px-6 py-4 bg-secondary-900">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Company Highlights
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                {COMPANY_HIGHLIGHTS.slice(0, 6).map((point) => (
                  <div key={point.id} className="flex items-start gap-3 px-6 py-4 border-b border-gray-100 last:border-0">
                    <span className="flex-shrink-0 text-lg font-bold text-primary-200 font-montserrat">
                      {point.icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-secondary-900">{point.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Footer */}
          <AnimatedSection delay={0.25}>
            <div className="mt-10 bg-primary-600 p-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white font-montserrat">Investor Relations</h3>
                <p className="text-sm text-white/80">hello@yugometals.com | +61 8 6275 2006</p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.asx.com.au/markets/company/YUG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary-600 text-sm font-semibold uppercase tracking-wider hover:bg-white/90 transition-colors"
                >
                  ASX Page
                  <HiOutlineExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-white text-white text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
                >
                  Contact IR
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
