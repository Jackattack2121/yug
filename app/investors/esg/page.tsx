'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import SubscriptionForm from '@/components/investor/SubscriptionForm'
import { HiOutlineGlobe, HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineLightningBolt } from 'react-icons/hi'

export default function ESGPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-32 md:py-40">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h1 className="text-display text-secondary-900 mb-6">
                Environmental,<br />
                Social &<br />
                Governance
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-josefin">
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
              <h2 className="text-heading-xl text-secondary-900 mb-6">
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
              <div className="bg-emerald-50 border-2 border-emerald-200 p-8 text-center hover:border-emerald-600 transition-all">
                <div className="bg-emerald-600 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <HiOutlineGlobe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-3 uppercase tracking-wider">Environmental</h3>
                <p className="text-gray-700 leading-relaxed">
                  Minimizing our environmental footprint through responsible exploration and sustainable practices
                </p>
              </div>
            </AnimatedSection>

            {/* Social */}
            <AnimatedSection delay={0.2}>
              <div className="bg-blue-50 border-2 border-blue-200 p-8 text-center hover:border-blue-600 transition-all">
                <div className="bg-blue-600 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <HiOutlineUserGroup className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-3 uppercase tracking-wider">Social</h3>
                <p className="text-gray-700 leading-relaxed">
                  Building strong relationships with communities, stakeholders, and our team
                </p>
              </div>
            </AnimatedSection>

            {/* Governance */}
            <AnimatedSection delay={0.3}>
              <div className="bg-purple-50 border-2 border-purple-200 p-8 text-center hover:border-purple-600 transition-all">
                <div className="bg-purple-600 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <HiOutlineShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-3 uppercase tracking-wider">Governance</h3>
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
              <div className="bg-white p-12 text-center border-2 border-gray-200">
                <div className="bg-primary-600 w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <HiOutlineLightningBolt className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-heading-lg text-secondary-900 mb-6 uppercase tracking-wider">
                  Comprehensive ESG Report Coming Soon
                </h2>
                <p className="text-lg text-gray-600 mb-8 font-josefin leading-relaxed">
                  We are currently developing a detailed ESG framework and report that will outline our commitments, 
                  targets, and progress across environmental stewardship, social responsibility, and corporate governance.
                </p>
                <p className="text-gray-700 mb-6 font-semibold uppercase tracking-wider">
                  Our upcoming ESG report will include:
                </p>
                <ul className="text-left max-w-2xl mx-auto space-y-2 mb-8 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 mt-1 font-bold">✓</span>
                    <span>Environmental management and rehabilitation plans</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 mt-1 font-bold">✓</span>
                    <span>Community engagement and Traditional Owner partnerships</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 mt-1 font-bold">✓</span>
                    <span>Health, safety, and wellbeing initiatives</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 mt-1 font-bold">✓</span>
                    <span>Board diversity and corporate governance policies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 mt-1 font-bold">✓</span>
                    <span>Climate risk assessment and carbon footprint analysis</span>
                  </li>
                </ul>
                
                <div className="max-w-md mx-auto">
                  <p className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
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
      <section className="section-padding bg-primary-600 text-white text-center">
        <div className="container max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-heading-xl mb-8">
              Our Commitment
            </h2>
            <p className="text-xl font-josefin leading-relaxed mb-12 opacity-90">
              "Yugo Metals is committed to creating long-term value for all stakeholders through 
              responsible exploration and development. We strive to operate with integrity, transparency, 
              and respect for the environment and communities in which we work."
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/company/corporate-governance"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors"
              >
                Corporate Governance
              </a>
              <a
                href="/company/corporate-responsibility"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-primary-600 transition-colors"
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

