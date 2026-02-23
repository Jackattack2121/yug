'use client'

import InvestorHeroZone from '@/components/investor/InvestorHeroZone'
import InvestorAnnouncements from '@/components/investor/InvestorAnnouncements'
import InvestorVideoSection from '@/components/investor/InvestorVideoSection'
import InvestorDocuments from '@/components/investor/InvestorDocuments'
import CompanyHighlights from '@/components/investor/CompanyHighlights'
import InvestorBoardPreview from '@/components/investor/InvestorBoardPreview'
import InvestorCalendar from '@/components/investor/InvestorCalendar'
import InvestorRegistryAlerts from '@/components/investor/InvestorRegistryAlerts'
import InvestorDisclaimer from '@/components/investor/InvestorDisclaimer'

export default function InvestorCentre() {
  return (
    <>
      {/* 1. Hero Zone — Stock widget + Key Metrics + CTAs */}
      <InvestorHeroZone />

      {/* 2. Announcements + Video Split */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
              <InvestorAnnouncements />
            </div>
            <div className="lg:col-span-2">
              <InvestorVideoSection />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Documents with filter tabs */}
      <InvestorDocuments />

      {/* 4. Company Highlights */}
      <CompanyHighlights />

      {/* 5. Board & Management Preview */}
      <InvestorBoardPreview />

      {/* 6. Corporate Calendar */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <InvestorCalendar />
        </div>
      </section>

      {/* 7. Share Registry + Email Alerts */}
      <InvestorRegistryAlerts />

      {/* 8. Compliance Disclaimer */}
      <InvestorDisclaimer />
    </>
  )
}
