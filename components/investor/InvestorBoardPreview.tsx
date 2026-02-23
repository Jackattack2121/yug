'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { HiOutlineArrowRight, HiOutlineUserCircle } from 'react-icons/hi'

export default function InvestorBoardPreview() {
  const t = useTranslations('company.board')

  const directors = [
    {
      name: t('director1Name'),
      position: t('director1Position'),
    },
    {
      name: t('director2Name'),
      position: t('director2Position'),
    },
    {
      name: t('director3Name'),
      position: t('director3Position'),
    },
  ]

  return (
    <section className="section-padding bg-secondary-900 text-white overflow-hidden relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: 'url(/yugo_images/three-contemporary-builders-in-uniform-2025-03-16-04-36-05-utc.jpg)' }}
      />

      <div className="container relative z-10">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-400 mb-2">
                Leadership
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat">
                Board & Management
              </h2>
            </div>
            <Link
              href="/company/board-of-directors"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-400 hover:text-primary-300 transition-colors"
            >
              Full Board Profiles
              <HiOutlineArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {directors.map((director, i) => (
            <AnimatedSection key={director.name} delay={i * 0.1}>
              <Link
                href="/company/board-of-directors"
                className="group block bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-primary-600/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 bg-primary-600/20 flex items-center justify-center">
                    <HiOutlineUserCircle className="w-8 h-8 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
                      {director.name}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary-400/80">
                      {director.position}
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Governance links */}
        <AnimatedSection delay={0.3}>
          <div className="flex flex-wrap gap-3 mt-8 pt-8 border-t border-white/10">
            <Link
              href="/company/corporate-governance"
              className="text-xs font-semibold uppercase tracking-wider text-white/60 hover:text-primary-400 transition-colors"
            >
              Corporate Governance
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/company/corporate-directory"
              className="text-xs font-semibold uppercase tracking-wider text-white/60 hover:text-primary-400 transition-colors"
            >
              Corporate Directory
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/company/corporate-responsibility"
              className="text-xs font-semibold uppercase tracking-wider text-white/60 hover:text-primary-400 transition-colors"
            >
              Corporate Responsibility
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
