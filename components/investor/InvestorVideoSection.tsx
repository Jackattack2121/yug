'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { HiOutlinePlay } from 'react-icons/hi'

export default function InvestorVideoSection() {
  return (
    <AnimatedSection delay={0.1}>
      <div className="bg-white border border-gray-200 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-secondary-900 uppercase tracking-wider font-montserrat">
            Videos
          </h2>
        </div>

        {/* Coming soon */}
        <div className="flex flex-col items-center justify-center flex-1 px-6 py-14 text-center">
          <HiOutlinePlay className="w-10 h-10 text-gray-200 mb-4" />
          <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-600 bg-primary-50 border border-primary-200 mb-3">
            Coming Soon
          </span>
          <p className="text-sm text-gray-400 max-w-xs">
            Video presentations and company updates will be available here shortly.
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}
