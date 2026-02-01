'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'

export default function ShareInformation() {
  return (
    <>
      <section className="relative bg-secondary-900 py-32 md:py-40 overflow-hidden">
        {/* Background Image with fade */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/yugo_images/flying-over-open-pit-gold-mine-quarry-in-rosia-m-2025-03-09-07-21-03-utc.jpg)' }}
        />
        
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-primary-600/60"></div>
        
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h1 className="text-heading-lg text-white mb-4">
                Share<br />
                Information
              </h1>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/90">
                Access share registry information and shareholder services
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="border-2 border-gray-200 p-8">
                <h3 className="text-2xl font-bold mb-6 text-secondary-900 uppercase tracking-wider">Company Details</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>ASX Code:</strong> YUG</p>
                  <p><strong>ABN:</strong> 65 650 011 644</p>
                  <p><strong>Share Registry:</strong> Automic Registry Services</p>
                </div>
              </div>

              <div className="border-2 border-gray-200 p-8">
                <h3 className="text-2xl font-bold mb-6 text-secondary-900 uppercase tracking-wider">Share Registry Contact</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Phone:</strong> 1300 288 664</p>
                  <p><strong>Email:</strong> hello@automicgroup.com.au</p>
                  <p><strong>Website:</strong> www.automicgroup.com.au</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="text-heading-lg text-secondary-900 mb-8">
              Shareholder Services
            </h2>
            <div className="bg-white border-2 border-gray-200 p-8">
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

