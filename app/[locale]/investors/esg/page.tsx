'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SubscriptionForm from '@/components/investor/SubscriptionForm'
import { HiOutlineGlobe, HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineLightningBolt } from 'react-icons/hi'

const JURISDICTION_FACTS = [
  { value: '10%', label: 'Corporate Profit Tax', sublabel: 'Lowest in Europe' },
  { value: '5%', label: 'Mining Royalties', sublabel: 'Metallic Minerals' },
  { value: '4+', label: 'Foreign Miners Operating', sublabel: 'Established Precedent' },
  { value: 'EU', label: 'Accession State', sublabel: 'Strategic Access' },
]

const FOREIGN_MINERS = [
  'Adriatic Metals',
  'Mineco',
  'Arcelor Mittal',
  'Leviathan Gold',
]

export default function ESGPage() {
  const t = useTranslations('investors.esg')

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary-900 overflow-hidden min-h-[70vh] flex flex-col justify-end">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: 'url(/new_images/sinjakovo7.png)', backgroundPosition: 'center 35%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/60 to-secondary-900/20" />

        <div className="container relative z-10 pb-16 pt-40">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-400 mb-4">
              ESG Framework
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat leading-tight max-w-3xl mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
              {t('heroSubtitle')}
            </p>
          </AnimatedSection>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-12">
            <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ESG Framework - Three Pillars */}
      <section className="section-padding bg-secondary-900">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-400 mb-4">
                Three Pillars
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-6">
                {t('frameworkHeading')}
              </h2>
              <p className="text-lg text-white/60 font-josefin max-w-3xl mx-auto leading-relaxed">
                {t('frameworkDescription')}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Environmental */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white/5 border border-white/10 p-8 text-center hover:border-emerald-400/30 transition-all h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-400/10 border border-emerald-400/20 mb-6">
                  <HiOutlineGlobe className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4">{t('environmentTitle')}</h3>
                <p className="text-white/60 leading-relaxed">
                  {t('environmentalDescription')}
                </p>
              </div>
            </AnimatedSection>

            {/* Social */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white/5 border border-white/10 p-8 text-center hover:border-blue-400/30 transition-all h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-400/10 border border-blue-400/20 mb-6">
                  <HiOutlineUserGroup className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4">{t('socialTitle')}</h3>
                <p className="text-white/60 leading-relaxed">
                  {t('socialDescription')}
                </p>
              </div>
            </AnimatedSection>

            {/* Governance */}
            <AnimatedSection delay={0.3}>
              <div className="bg-white/5 border border-white/10 p-8 text-center hover:border-purple-400/30 transition-all h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-400/10 border border-purple-400/20 mb-6">
                  <HiOutlineShieldCheck className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4">{t('governanceTitle')}</h3>
                <p className="text-white/60 leading-relaxed">
                  {t('governanceDescription')}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Site Image Break */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="/new_images/sinjakovo9.png"
          alt="Sinjakovo project site"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 35%' }}
        />
        <div className="absolute inset-0 bg-secondary-900/50" />
      </div>

      {/* Jurisdiction Context */}
      <section className="py-16 bg-secondary-900 overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-10 bg-cover"
          style={{ backgroundImage: 'url(/new_images/sinjakovo8.png)', backgroundPosition: 'center 35%' }}
        />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-400 mb-4">
                Operating Environment
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">
                Bosnia and Herzegovina Mining Framework
              </h2>
              <p className="text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
                An established regulatory environment with competitive fiscal terms and a proven track record of hosting international mining companies.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {JURISDICTION_FACTS.map((m, i) => (
                <div
                  key={m.label}
                  className="bg-white/5 border border-white/10 px-5 py-5 text-center"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <p className="text-2xl lg:text-3xl font-bold text-white font-montserrat leading-tight">
                    {m.value}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mt-2">
                    {m.label}
                  </p>
                  {m.sublabel && (
                    <p className="text-[10px] text-primary-400 mt-0.5">{m.sublabel}</p>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white/5 border border-white/10 p-8 max-w-3xl mx-auto">
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">
                International Miners Operating in BiH
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Bosnia and Herzegovina has an established mining regulatory framework with multiple international companies already operating successfully in the jurisdiction:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {FOREIGN_MINERS.map((name) => (
                  <div key={name} className="bg-white/5 border border-white/10 px-4 py-3 text-center">
                    <p className="text-sm font-semibold text-white/80">{name}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Coming Soon / Report Section */}
      <section className="section-padding bg-secondary-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-white/5 border border-white/10 p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-600/10 border border-primary-600/20 mb-6">
                  <HiOutlineLightningBolt className="w-10 h-10 text-primary-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-6">
                  {t('comingSoonTitle')}
                </h2>
                <p className="text-lg text-white/60 mb-8 font-josefin leading-relaxed max-w-2xl mx-auto">
                  {t('comingSoonIntro')}
                </p>
                <p className="text-sm font-bold text-white/80 mb-6 uppercase tracking-wider">
                  {t('reportWillInclude')}
                </p>
                <ul className="text-left max-w-2xl mx-auto space-y-3 mb-10">
                  <li className="flex items-start space-x-3">
                    <span className="text-primary-400 mt-0.5 font-bold text-sm">--</span>
                    <span className="text-white/60">{t('reportItem1')}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary-400 mt-0.5 font-bold text-sm">--</span>
                    <span className="text-white/60">{t('reportItem2')}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary-400 mt-0.5 font-bold text-sm">--</span>
                    <span className="text-white/60">{t('reportItem3')}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary-400 mt-0.5 font-bold text-sm">--</span>
                    <span className="text-white/60">{t('reportItem4')}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary-400 mt-0.5 font-bold text-sm">--</span>
                    <span className="text-white/60">{t('reportItem5')}</span>
                  </li>
                </ul>

                <div className="max-w-md mx-auto">
                  <p className="text-xs font-bold text-white/50 mb-4 uppercase tracking-[0.15em]">
                    {t('subscribePrompt')}
                  </p>
                  <SubscriptionForm variant="inline" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Commitment CTA */}
      <section className="section-padding bg-secondary-900">
        <div className="container max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-primary-600/10 border border-primary-600/20 p-12 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-400 mb-4">
                Our Pledge
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-8">
                {t('commitmentTitle')}
              </h2>
              <p className="text-lg font-josefin leading-relaxed mb-12 text-white/70 max-w-3xl mx-auto">
                {t('commitmentQuote')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/why-yugo-metals"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-semibold uppercase tracking-wider hover:bg-white/5 hover:border-white/40 transition-all"
                >
                  {t('governanceButton')}
                </Link>
                <Link
                  href="/why-yugo-metals"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-semibold uppercase tracking-wider hover:bg-white/5 hover:border-white/40 transition-all"
                >
                  {t('responsibilityButton')}
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
