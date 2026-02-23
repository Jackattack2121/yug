'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { HiOutlineCalendar } from 'react-icons/hi'

export default function InvestorCalendar() {
  return (
    <AnimatedSection>
      <div className="bg-white border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <HiOutlineCalendar className="w-5 h-5 text-primary-600" />
            <h2 className="text-lg font-bold text-secondary-900 uppercase tracking-wider font-montserrat">
              Corporate Calendar
            </h2>
          </div>
        </div>

        {/* Coming soon */}
        <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
          <HiOutlineCalendar className="w-10 h-10 text-gray-200 mb-4" />
          <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-600 bg-primary-50 border border-primary-200 mb-3">
            Coming Soon
          </span>
          <p className="text-sm text-gray-400 max-w-xs">
            Our corporate calendar with upcoming events, reports, and meetings will be published here shortly.
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}
