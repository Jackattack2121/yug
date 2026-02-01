'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { HiOutlineDownload, HiOutlineDocumentText, HiOutlineClock } from 'react-icons/hi'

// Mock fact sheet data - in production, fetch from Directus
const latestFactSheet = {
  id: '1',
  version: 'v1.0',
  date: '2024-10-01',
  fileSize: '2.4 MB',
  downloadUrl: '/documents/yugo-metals-fact-sheet-v1.0.pdf',
}

const previousVersions = [
  {
    id: '2',
    version: 'v0.9',
    date: '2024-07-01',
    downloadUrl: '/documents/yugo-metals-fact-sheet-v0.9.pdf',
  },
  {
    id: '3',
    version: 'v0.8',
    date: '2024-04-01',
    downloadUrl: '/documents/yugo-metals-fact-sheet-v0.8.pdf',
  },
  {
    id: '4',
    version: 'v0.7',
    date: '2024-01-01',
    downloadUrl: '/documents/yugo-metals-fact-sheet-v0.7.pdf',
  },
]

const keyMetrics = [
  { label: 'ASX Code', value: 'YUG' },
  { label: 'Market Cap', value: '$15.5M' },
  { label: 'Shares on Issue', value: '134.8M' },
  { label: 'Exploration Tenure', value: '913 km²' },
  { label: 'Active Projects', value: '4' },
  { label: 'Headquarters', value: 'Perth, WA' },
]

export default function FactSheetPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-32 md:py-40">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h1 className="text-display text-secondary-900 mb-6">
                Company<br />
                Fact Sheet
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-josefin">
                Quick reference guide to key company information and metrics
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Latest Fact Sheet Download */}
      <section className="section-padding bg-white">
        <div className="container max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="bg-primary-600 p-8 md:p-12 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left Side - Info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <HiOutlineDocumentText className="w-12 h-12" />
                    <div>
                      <h2 className="text-heading-lg font-black uppercase tracking-wider">Latest Fact Sheet</h2>
                      <p className="text-sm opacity-75 uppercase tracking-wider">Version {latestFactSheet.version}</p>
                    </div>
                  </div>
                  <p className="text-lg mb-4 opacity-90 font-josefin">
                    Comprehensive overview of Yugo Metals including projects, management, 
                    share structure, and key highlights.
                  </p>
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <HiOutlineClock className="w-4 h-4" />
                      <span>Updated: {new Date(latestFactSheet.date).toLocaleDateString('en-AU', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}</span>
                    </div>
                    <span>•</span>
                    <span>{latestFactSheet.fileSize}</span>
                  </div>
                </div>

                {/* Right Side - Download Button */}
                <div>
                  <a
                    href={latestFactSheet.downloadUrl}
                    className="group block bg-white text-primary-600 px-8 py-6 font-bold text-lg uppercase tracking-wider hover:bg-gray-100 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <HiOutlineDownload className="w-8 h-8" />
                      <div>
                        <div>Download</div>
                        <div className="text-xs font-normal normal-case opacity-75">PDF Format</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Metrics Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-heading-lg text-secondary-900 text-center mb-12">Key Company Metrics</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyMetrics.map((metric, index) => (
              <AnimatedSection key={metric.label} delay={index * 0.05}>
                <div className="bg-white p-6 border-l-4 border-primary-600">
                  <div className="text-sm text-gray-600 mb-1 uppercase tracking-wider font-semibold">{metric.label}</div>
                  <div className="text-2xl font-bold text-secondary-900">{metric.value}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Versions */}
      <section className="section-padding bg-white">
        <div className="container max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-heading-lg text-secondary-900 mb-8">Previous Versions</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {previousVersions.map((version, index) => (
              <AnimatedSection key={version.id} delay={index * 0.05}>
                <div className="bg-white border-2 border-gray-200 p-6 flex items-center justify-between hover:border-primary-600 transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-200 p-3">
                      <HiOutlineDocumentText className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary-900">Fact Sheet {version.version}</h3>
                      <p className="text-sm text-gray-600">
                        {new Date(version.date).toLocaleDateString('en-AU', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                  <a
                    href={version.downloadUrl}
                    className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white hover:bg-primary-700 transition-colors uppercase tracking-wider font-semibold"
                  >
                    <HiOutlineDownload className="w-5 h-5" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section-padding bg-primary-600 text-white text-center">
        <div className="container max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-heading-xl mb-8">
              Need More Information?
            </h2>
            <p className="text-xl mb-12 font-josefin opacity-90">
              Explore our full range of investor resources and company reports
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/investors/financial-reports"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors"
              >
                Financial Reports
              </a>
              <a
                href="/investors/presentations"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold uppercase tracking-wider hover:bg-white hover:text-primary-600 transition-colors"
              >
                Presentations
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

