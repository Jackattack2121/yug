'use client'

import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function ShareInformation() {
  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/images/hero-mining-1.jpg)' }} />
        <div className="relative container text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider">
            Share Information
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-primary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Company Details</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>ASX Code:</strong> YUG</p>
                  <p><strong>ABN:</strong> XX XXX XXX XXX</p>
                  <p><strong>Share Registry:</strong> Automic Registry Services</p>
                </div>
              </div>

              <div className="bg-primary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Share Registry Contact</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Phone:</strong> 1300 288 664</p>
                  <p><strong>Email:</strong> hello@automicgroup.com.au</p>
                  <p><strong>Website:</strong> www.automicgroup.com.au</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <SectionTitle title="Shareholder Services" centered={false} />
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <p className="text-gray-600 leading-relaxed mb-6">
                For all shareholder enquiries including change of address, dividend payments, 
                consolidation of shareholdings, or any other registry matters, please contact 
                our share registry directly.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Update your contact details</li>
                <li>• View your shareholding balance</li>
                <li>• Download holding statements</li>
                <li>• Elect for electronic communications</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

