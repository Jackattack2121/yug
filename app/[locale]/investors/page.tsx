'use client'

import { useLocale, useTranslations } from 'next-intl'
import SharePriceWidget from '@/components/investor/SharePriceWidget'
import SubscriptionForm from '@/components/investor/SubscriptionForm'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { 
  HiOutlineDocumentText, 
  HiOutlinePresentationChartLine, 
  HiOutlineNewspaper,
  HiOutlineCalendar,
  HiOutlineChartBar,
  HiOutlineDownload,
  HiOutlineGlobe
} from 'react-icons/hi'

export default function InvestorCentre() {
  const locale = useLocale()
  const t = useTranslations('investors')
  const tQuickLinks = useTranslations('investors.quickLinks')

  const quickLinks = [
    {
      title: tQuickLinks('asxAnnouncements'),
      description: tQuickLinks('asxDescription'),
      icon: HiOutlineDocumentText,
      href: `/${locale}/investors/asx-announcements`,
    },
    {
      title: tQuickLinks('financialReports'),
      description: tQuickLinks('financialDescription'),
      icon: HiOutlineChartBar,
      href: `/${locale}/investors/financial-reports`,
    },
    {
      title: tQuickLinks('presentations'),
      description: tQuickLinks('presentationsDescription'),
      icon: HiOutlinePresentationChartLine,
      href: `/${locale}/investors/presentations`,
    },
    {
      title: tQuickLinks('shareInfo'),
      description: tQuickLinks('shareDescription'),
      icon: HiOutlineChartBar,
      href: `/${locale}/investors/share-information`,
    },
    {
      title: tQuickLinks('calendar'),
      description: tQuickLinks('calendarDescription'),
      icon: HiOutlineCalendar,
      href: `/${locale}/investors/calendar`,
    },
    {
      title: tQuickLinks('media'),
      description: tQuickLinks('mediaDescription'),
      icon: HiOutlineNewspaper,
      href: `/${locale}/investors/media`,
    },
    {
      title: tQuickLinks('factSheet'),
      description: tQuickLinks('factSheetDescription'),
      icon: HiOutlineDownload,
      href: `/${locale}/investors/fact-sheet`,
    },
    {
      title: tQuickLinks('esg'),
      description: tQuickLinks('esgDescription'),
      icon: HiOutlineGlobe,
      href: `/${locale}/investors/esg`,
    },
  ]
  return (
    <>
      {/* Hero Section - Minimal */}
      <section className="relative bg-white py-32 md:py-40">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h1 className="text-display text-secondary-900 mb-6">
                {t('centre.title').split(' ')[0]}<br />
                {t('centre.title').split(' ')[1]}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-josefin">
                {t('centre.subtitle')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Share Price Widget */}
      <section className="section-padding-small bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedSection className="lg:col-span-2">
              <SharePriceWidget ticker="YUG" />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <SubscriptionForm variant="card" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-heading-lg text-secondary-900 mb-4">
                {t('centre.resourcesTitle')}
              </h2>
              <div className="w-24 h-1 bg-primary-600"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <AnimatedSection key={link.title} delay={index * 0.05}>
                  <Link href={link.href}>
                    <div className="group bg-white border border-gray-200 p-8 hover-lift hover:border-primary-600 transition-all h-full">
                      <Icon className="w-12 h-12 text-primary-600 mb-4 transition-transform group-hover:scale-110" />
                      <h3 className="text-lg font-bold mb-3 group-hover:text-primary-600 transition-colors uppercase tracking-wide">
                        {link.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {link.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-600">
                        <span>{tQuickLinks('view')}</span>
                        <svg className="w-3 h-3 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact IR Team CTA */}
      <section className="section-padding bg-primary-600 text-white text-center">
        <div className="container max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-heading-xl mb-8">
              {t('centre.questionsTitle')}
            </h2>
            <p className="text-xl mb-12 font-josefin opacity-90">
              {t('centre.questionsSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href={`/${locale}/investors/contact`} variant="secondary">
                {t('centre.contactIrButton')}
              </Button>
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-primary-600">
                <span>{t('centre.downloadFactSheet')}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
