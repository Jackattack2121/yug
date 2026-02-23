'use client'

import { useTranslations } from 'next-intl'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { HiOutlineExternalLink, HiOutlineMail, HiArrowRight } from 'react-icons/hi'

interface InvestorRegistryAlertsProps {
  onOpenModal: () => void
}

export default function InvestorRegistryAlerts({ onOpenModal }: InvestorRegistryAlertsProps) {
  const t = useTranslations('investors.shareInfo')

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Share Registry */}
          <AnimatedSection>
            <div className="bg-gray-50 border border-gray-200 p-8 h-full">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 mb-2">
                Shareholder Services
              </p>
              <h2 className="text-2xl font-bold text-secondary-900 font-montserrat mb-6">
                Share Registry
              </h2>

              <div className="space-y-4">
                {/* Registry details */}
                <div className="bg-white border border-gray-200 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold text-secondary-900 uppercase tracking-wider">
                      {t('companyDetailsRegistryValue')}
                    </h3>
                    <a
                      href={`https://${t('registryContactWebsiteValue')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <HiOutlineExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">{t('registryContactPhone')}</span>
                      <a href={`tel:${t('registryContactPhoneValue')}`} className="text-secondary-900 font-medium hover:text-primary-600 transition-colors">
                        {t('registryContactPhoneValue')}
                      </a>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">{t('registryContactEmail')}</span>
                      <a href={`mailto:${t('registryContactEmailValue')}`} className="text-secondary-900 font-medium hover:text-primary-600 transition-colors">
                        {t('registryContactEmailValue')}
                      </a>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">{t('registryContactWebsite')}</span>
                      <a
                        href={`https://${t('registryContactWebsiteValue')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-900 font-medium hover:text-primary-600 transition-colors"
                      >
                        {t('registryContactWebsiteValue')}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Company details */}
                <div className="bg-white border border-gray-200 p-5">
                  <h3 className="text-sm font-bold text-secondary-900 uppercase tracking-wider mb-3">
                    Company Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">{t('companyDetailsASXCode')}</span>
                      <span className="text-secondary-900 font-bold">{t('companyDetailsASXValue')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">{t('companyDetailsABN')}</span>
                      <span className="text-secondary-900 font-medium">{t('companyDetailsABNValue')}</span>
                    </div>
                  </div>
                </div>

                {/* Services list */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                    {t('servicesTitle')}
                  </p>
                  <ul className="space-y-1.5">
                    {[t('service1'), t('service2'), t('service3'), t('service4')].map((service) => (
                      <li key={service} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1 h-1 bg-primary-600 rounded-full flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Email Alerts CTA */}
          <AnimatedSection delay={0.1}>
            <div className="bg-primary-600 p-8 h-full flex flex-col justify-center text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <HiOutlineMail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                    Stay Informed
                  </p>
                  <h2 className="text-2xl font-bold font-montserrat">
                    Email Alerts
                  </h2>
                </div>
              </div>

              <p className="text-base text-white/90 mb-6 leading-relaxed">
                Subscribe to receive ASX announcements, quarterly reports, and company news directly to your inbox.
              </p>

              <div className="space-y-3 mb-8 text-sm text-white/80">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />
                  <span>ASX Announcements</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />
                  <span>Quarterly & Annual Reports</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />
                  <span>Company News & Updates</span>
                </div>
              </div>

              <button
                onClick={onOpenModal}
                className="group w-full bg-white text-primary-600 font-bold py-4 px-6 rounded-lg hover:bg-primary-50 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              >
                <HiOutlineMail className="w-5 h-5" />
                <span>Subscribe to Updates</span>
                <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
