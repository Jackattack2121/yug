import AnimatedSection from '@/components/ui/AnimatedSection'

const reports = [
  {
    id: '1',
    title: 'Annual Report 2024',
    description: 'Annual financial report for the year ended 30 June 2024',
    date: '2024-09-30',
    file: '/documents/annual-report-2024.pdf',
  },
  {
    id: '2',
    title: 'Half-Yearly Report 2024',
    description: 'Half-yearly financial report for the period ended 31 December 2023',
    date: '2024-03-15',
    file: '/documents/half-yearly-report-2024.pdf',
  },
  {
    id: '3',
    title: 'Quarterly Report Q3 2024',
    description: 'Quarterly activities report for the period ended 30 September 2024',
    date: '2024-10-31',
    file: '/documents/quarterly-report-q3-2024.pdf',
  },
  {
    id: '4',
    title: 'Quarterly Report Q2 2024',
    description: 'Quarterly activities report for the period ended 30 June 2024',
    date: '2024-07-31',
    file: '/documents/quarterly-report-q2-2024.pdf',
  },
]

export default function FinancialReports() {
  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/images/hero-mining-2.jpg)' }} />
        <div className="relative container text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider">
            Financial Reports
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <AnimatedSection>
            {reports.length > 0 ? (
              <div className="space-y-4">
                {reports.map((report, index) => (
                  <div key={report.id} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{report.title}</h3>
                        {report.description && (
                          <p className="text-gray-600 mb-2">{report.description}</p>
                        )}
                        <p className="text-sm text-gray-500">
                          {new Date(report.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                      </div>
                      <a 
                        href={report.file} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded hover:bg-primary-700 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download PDF
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No financial reports available at this time.</p>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

