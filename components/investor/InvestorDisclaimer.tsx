'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'

interface InvestorDisclaimerProps {
  /** Show forward-looking statements paragraph (default: true) */
  forwardLooking?: boolean
  /** Show not-financial-advice paragraph (default: true) */
  notAdvice?: boolean
  /** Show share price delay paragraph (default: true) */
  sharePrice?: boolean
  /** Show competent person statement (default: true) */
  competentPerson?: boolean
}

export default function InvestorDisclaimer({
  forwardLooking = true,
  notAdvice = true,
  sharePrice = true,
  competentPerson = true,
}: InvestorDisclaimerProps) {
  return (
    <section className="py-8 bg-gray-50 border-t border-gray-200">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
              Important Information
            </h3>
            <div className="space-y-3 text-xs text-gray-400 leading-relaxed">
              {forwardLooking && (
                <p>
                  <strong className="text-gray-500">Forward-Looking Statements:</strong> This
                  page may contain forward-looking statements regarding Yugo Metals Limited
                  (ASX: YUG). These statements involve known and unknown risks, uncertainties,
                  and other factors that may cause actual results to differ materially from
                  those expressed or implied. Forward-looking statements are based on
                  assumptions and contingencies which are subject to change without notice.
                  Yugo Metals does not undertake any obligation to update forward-looking
                  statements to reflect events or circumstances after the date of this page.
                </p>
              )}
              {notAdvice && (
                <p>
                  <strong className="text-gray-500">Not Financial Advice:</strong> The
                  information provided on this page is for general informational purposes only
                  and does not constitute financial, investment, or professional advice by
                  Yugo Metals Ltd, its directors, or its officers. Before making any
                  investment decision, you should seek independent financial, legal, and
                  taxation advice from a qualified professional.
                </p>
              )}
              {sharePrice && (
                <p>
                  <strong className="text-gray-500">Share Price Data:</strong> Share price
                  data displayed on this website is provided by TradingView and may be
                  delayed by approximately 20 minutes. It is provided for informational
                  purposes only and should not be relied upon for trading decisions. Please
                  refer to your broker or the ASX for real-time pricing.
                </p>
              )}
              {competentPerson && (
                <p>
                  <strong className="text-gray-500">Competent Person Statement:</strong> Any
                  information relating to exploration results or mineral resources is based on
                  information compiled by competent persons as defined under the JORC Code
                  (2012 Edition). Full details are available in the relevant ASX announcements.
                </p>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
