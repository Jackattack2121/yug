'use client'

import { useState, useEffect } from 'react'
import InvestorHeroZone from '@/components/investor/InvestorHeroZone'
import InvestorAnnouncements from '@/components/investor/InvestorAnnouncements'
import InvestorVideoSection from '@/components/investor/InvestorVideoSection'
import InvestorDocuments from '@/components/investor/InvestorDocuments'
import CompanyHighlights from '@/components/investor/CompanyHighlights'
import InvestorBoardPreview from '@/components/investor/InvestorBoardPreview'
import InvestorCalendar from '@/components/investor/InvestorCalendar'
import InvestorRegistryAlerts from '@/components/investor/InvestorRegistryAlerts'
import InvestorDisclaimer from '@/components/investor/InvestorDisclaimer'
import InvestorAlertsModal from '@/components/investor/InvestorAlertsModal'

const STORAGE_KEY = 'yugo_alerts_dismissed'
const AUTO_SHOW_DELAY = 1500

export default function InvestorCentre() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Auto-show modal after delay if not dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsModalOpen(true)
      }, AUTO_SHOW_DELAY)
      return () => clearTimeout(timer)
    }
  }, [])
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
      <InvestorRegistryAlerts onOpenModal={() => setIsModalOpen(true)} />

      {/* 8. Compliance Disclaimer */}
      <InvestorDisclaimer />

      {/* Modal - Email Alerts Subscription */}
      <InvestorAlertsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
