'use client'

import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'

export default function Prospectus() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/images/hero-mining-1.jpg)' }} />
        <div className="relative container text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-4">
            Entitlement Issue Prospectus
          </h1>
          <p className="text-xl md:text-2xl font-josefin italic">
            Current Rights Issue Information
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <SectionTitle title="Rights Issue Overview" centered={false} />
              
              <div className="prose max-w-none text-gray-600 leading-relaxed space-y-4 mb-8">
                <p>
                  Yugo Metals is pleased to offer eligible shareholders the opportunity to 
                  participate in our current entitlement issue. This capital raising will fund 
                  our continued exploration activities across our five projects in Bosnia and Herzegovina.
                </p>
                
                <p>
                  The funds raised will support:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Two-year systematic exploration program across all five projects</li>
                  <li>Modern geophysical surveys and drilling campaigns</li>
                  <li>Metallurgical test work and preliminary economic assessments</li>
                  <li>Regional exploration activities targeting nickel, copper, and cobalt</li>
                  <li>General working capital and corporate costs</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-primary-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">
                  Important Dates
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between border-b border-gray-300 pb-2">
                    <span className="font-semibold">Announcement Date:</span>
                    <span>28 September 2024</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-2">
                    <span className="font-semibold">Record Date:</span>
                    <span>5 October 2024</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-2">
                    <span className="font-semibold">Opening Date:</span>
                    <span>10 October 2024</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-300 pb-2">
                    <span className="font-semibold">Closing Date:</span>
                    <span>31 October 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Issue Date:</span>
                    <span>7 November 2024</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white border-2 border-primary-500 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 text-primary-900">
                  Prospectus Documents
                </h3>
                <p className="text-gray-600 mb-6">
                  Download the prospectus and related documents below. Please read these documents 
                  carefully before making any investment decision.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="/documents/prospectus.pdf"
                    download
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <h4 className="font-bold text-gray-900">Prospectus</h4>
                      <p className="text-sm text-gray-600">Full prospectus document (PDF, 2.4 MB)</p>
                    </div>
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>

                  <a
                    href="/documents/entitlement-form.pdf"
                    download
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <h4 className="font-bold text-gray-900">Entitlement and Acceptance Form</h4>
                      <p className="text-sm text-gray-600">Application form (PDF, 245 KB)</p>
                    </div>
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                <h4 className="font-bold text-yellow-900 mb-2">Important Notice</h4>
                <p className="text-yellow-800 text-sm">
                  This information is not financial advice. Before making any investment decision, 
                  you should read the prospectus in full and consider whether the offer is appropriate 
                  for you having regard to your investment objectives, financial situation and needs. 
                  If you are in doubt, you should consult your financial, legal or tax adviser.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="text-center mt-12">
                <Button href="/contact" variant="primary">
                  Contact Us for More Information
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}

