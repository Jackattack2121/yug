'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SubscriptionForm from '@/components/investor/SubscriptionForm'
import { HiOutlineGlobe, HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineLightningBolt } from 'react-icons/hi'

export default function ESGPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-20">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-2 bg-accent-yellow text-black text-sm font-semibold uppercase tracking-wider mb-4 rounded">
                ESG Commitment
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-6">
                Environmental, Social & Governance
              </h1>
              <p className="text-xl md:text-2xl font-josefin leading-relaxed opacity-90">
                Our commitment to sustainable and responsible mining practices
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ESG Pillars */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">
                Our ESG Framework
              </h2>
              <p className="text-lg text-gray-600 font-josefin max-w-3xl mx-auto">
                At Yugo Metals, we recognize our responsibility to operate sustainably and ethically
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Environmental */}
            <AnimatedSection delay={0.1}>
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineGlobe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Environmental</h3>
                <p className="text-gray-700 leading-relaxed">
                  Minimizing our environmental footprint through responsible exploration and sustainable practices
                </p>
              </div>
            </AnimatedSection>

            {/* Social */}
            <AnimatedSection delay={0.2}>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineUserGroup className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Social</h3>
                <p className="text-gray-700 leading-relaxed">
                  Building strong relationships with communities, stakeholders, and our team
                </p>
              </div>
            </AnimatedSection>

            {/* Governance */}
            <AnimatedSection delay={0.3}>
              <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiOutlineShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Governance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Maintaining the highest standards of corporate governance and transparency
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-lg shadow-xl p-12 text-center border-2 border-gray-200">
                <div className="bg-accent-yellow/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HiOutlineLightningBolt className="w-12 h-12 text-accent-yellow" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Comprehensive ESG Report Coming Soon
                </h2>
                <p className="text-lg text-gray-600 mb-8 font-josefin leading-relaxed">
                  We are currently developing a detailed ESG framework and report that will outline our commitments, 
                  targets, and progress across environmental stewardship, social responsibility, and corporate governance.
                </p>
                <p className="text-gray-700 mb-6">
                  Our upcoming ESG report will include:
                </p>
                <ul className="text-left max-w-2xl mx-auto space-y-2 mb-8 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-yellow mt-1">✓</span>
                    <span>Environmental management and rehabilitation plans</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-yellow mt-1">✓</span>
                    <span>Community engagement and Traditional Owner partnerships</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-yellow mt-1">✓</span>
                    <span>Health, safety, and wellbeing initiatives</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-yellow mt-1">✓</span>
                    <span>Board diversity and corporate governance policies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-accent-yellow mt-1">✓</span>
                    <span>Climate risk assessment and carbon footprint analysis</span>
                  </li>
                </ul>
                
                <div className="max-w-md mx-auto">
                  <p className="text-sm font-semibold text-gray-900 mb-4">
                    Subscribe to be notified when our ESG report is published:
                  </p>
                  <SubscriptionForm variant="inline" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="section-padding bg-gradient-to-br from-emerald-600 to-emerald-800 text-white text-center">
        <div className="container max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6">
              Our Commitment
            </h2>
            <p className="text-xl font-josefin leading-relaxed mb-8">
              "Yugo Metals is committed to creating long-term value for all stakeholders through 
              responsible exploration and development. We strive to operate with integrity, transparency, 
              and respect for the environment and communities in which we work."
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/company/corporate-governance"
                className="inline-block px-8 py-4 bg-white text-emerald-900 font-semibold uppercase tracking-wider rounded-lg hover:bg-gray-100 transition-colors"
              >
                Corporate Governance
              </a>
              <a
                href="/company/corporate-responsibility"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold uppercase tracking-wider rounded-lg hover:bg-white hover:text-emerald-900 transition-colors"
              >
                Corporate Responsibility
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

