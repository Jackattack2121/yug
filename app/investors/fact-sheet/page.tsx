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
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-32 flex items-center min-h-[60vh]">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-2 bg-accent-yellow text-black text-sm font-semibold uppercase tracking-wider mb-4 rounded">
                Company Fact Sheet
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-6">
                Yugo Metals at a Glance
              </h1>
              <p className="text-xl md:text-2xl font-josefin leading-relaxed opacity-90">
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
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg shadow-2xl p-8 md:p-12 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left Side - Info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <HiOutlineDocumentText className="w-12 h-12" />
                    <div>
                      <h2 className="text-3xl font-bold">Latest Fact Sheet</h2>
                      <p className="text-sm opacity-75">Version {latestFactSheet.version}</p>
                    </div>
                  </div>
                  <p className="text-lg mb-4 opacity-90">
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
                    className="group block bg-accent-yellow text-black px-8 py-6 rounded-lg font-bold text-lg uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    <div className="flex items-center space-x-3">
                      <HiOutlineDownload className="w-8 h-8 group-hover:animate-bounce" />
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
            <h2 className="text-3xl font-bold text-center mb-8">Key Company Metrics</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyMetrics.map((metric, index) => (
              <AnimatedSection key={metric.label} delay={index * 0.05}>
                <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-primary-600">
                  <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                  <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
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
            <h2 className="text-3xl font-bold mb-8">Previous Versions</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {previousVersions.map((version, index) => (
              <AnimatedSection key={version.id} delay={index * 0.05}>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex items-center justify-between hover:border-primary-500 hover:shadow-md transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-200 p-3 rounded-lg">
                      <HiOutlineDocumentText className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Fact Sheet {version.version}</h3>
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
                    className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
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
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6">
              Need More Information?
            </h2>
            <p className="text-lg mb-8 font-josefin">
              Explore our full range of investor resources and company reports
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/investors/financial-reports"
                className="inline-block px-8 py-4 bg-white text-primary-900 font-semibold uppercase tracking-wider rounded-lg hover:bg-gray-100 transition-colors"
              >
                Financial Reports
              </a>
              <a
                href="/investors/presentations"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold uppercase tracking-wider rounded-lg hover:bg-white hover:text-primary-900 transition-colors"
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

