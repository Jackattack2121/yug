'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import gsap from 'gsap'
import { HiOutlineMail, HiOutlineCheckCircle, HiX } from 'react-icons/hi'

const STORAGE_KEY = 'yugo_alerts_dismissed'
const AUTO_SHOW_DELAY = 1500 // 1.5 seconds

interface InvestorAlertsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function InvestorAlertsModal({ isOpen, onClose }: InvestorAlertsModalProps) {
  const t = useTranslations('forms.subscription')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [preferences, setPreferences] = useState({
    announcements: true,
    reports: true,
    news: true,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  
  const backdropRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const handleClose = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, '1')
    onClose()
  }, [onClose])

  // ESC key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, handleClose])

  // GSAP animation on open/close
  useEffect(() => {
    if (!backdropRef.current || !modalRef.current) return

    if (isOpen) {
      // Animate in
      gsap.to(backdropRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power3.out', delay: 0.1 }
      )
    } else {
      // Animate out
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
      })
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 20,
        duration: 0.25,
        ease: 'power2.in',
      })
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, preferences }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 409) {
          setStatus('success')
          setMessage(t('alreadySubscribed') || 'You\'re already subscribed — we\'ll keep you posted!')
          setEmail('')
          setName('')
          localStorage.setItem(STORAGE_KEY, '1')
          setTimeout(() => onClose(), 3000)
          return
        }
        throw new Error(data.error || t('errorMessage'))
      }

      setStatus('success')
      setMessage(data.message || t('successMessage'))
      setEmail('')
      setName('')
      localStorage.setItem(STORAGE_KEY, '1')
      
      // Auto-close after 3 seconds
      setTimeout(() => onClose(), 3000)
    } catch (error) {
      setStatus('error')
      const errorMessage = error instanceof Error ? error.message : t('errorMessage')
      setMessage(errorMessage)
    }
  }

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  if (!isOpen) return null

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70"
      style={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose()
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl bg-secondary-900 rounded-lg overflow-hidden shadow-2xl"
        style={{ opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400"
          aria-label="Close modal"
        >
          <HiX className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Panel - Branded Image */}
          <div className="relative min-h-[200px] md:min-h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url(/new_images/sinjakovo.jpg)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/95 via-secondary-900/80 to-transparent"></div>
            <div className="relative h-full flex flex-col justify-center p-8 md:p-12 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-400 mb-3">
                Stay Informed
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 leading-tight">
                Investor Updates
              </h2>
              <div className="space-y-3 text-sm md:text-base text-white/80">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                  <span>ASX Announcements</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Quarterly & Annual Reports</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Company News & Updates</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
            {status === 'success' ? (
              <div className="text-center py-12" role="status" aria-live="polite">
                <HiOutlineCheckCircle className="w-20 h-20 text-primary-600 mx-auto mb-6" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                  Successfully Subscribed!
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {message}
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Closing in 3 seconds...
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <HiOutlineMail className="w-7 h-7 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-900 font-montserrat">Email Updates</h3>
                    <p className="text-sm text-gray-600">Receive notifications for:</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" aria-label="Email subscription form">
                  <div>
                    <label htmlFor="modal-name" className="block text-sm font-semibold text-secondary-900 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-all text-secondary-900 placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-email" className="block text-sm font-semibold text-secondary-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-all text-secondary-900 placeholder-gray-400"
                    />
                  </div>

                  <fieldset>
                    <legend className="block text-sm font-semibold text-secondary-900 mb-3">
                      Email Preferences
                    </legend>
                    <div className="space-y-2.5">
                      <label className="flex items-center space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="preferences-announcements"
                          checked={preferences.announcements}
                          onChange={() => togglePreference('announcements')}
                          aria-label="Subscribe to ASX Announcements"
                          className="w-5 h-5 text-primary-600 bg-white border-gray-300 rounded focus:ring-primary-600 focus:ring-offset-0"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-secondary-900 transition-colors">ASX Announcements</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="preferences-reports"
                          checked={preferences.reports}
                          onChange={() => togglePreference('reports')}
                          aria-label="Subscribe to Quarterly & Annual Reports"
                          className="w-5 h-5 text-primary-600 bg-white border-gray-300 rounded focus:ring-primary-600 focus:ring-offset-0"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-secondary-900 transition-colors">Quarterly & Annual Reports</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="preferences-news"
                          checked={preferences.news}
                          onChange={() => togglePreference('news')}
                          aria-label="Subscribe to Company News & Updates"
                          className="w-5 h-5 text-primary-600 bg-white border-gray-300 rounded focus:ring-primary-600 focus:ring-offset-0"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-secondary-900 transition-colors">Company News & Updates</span>
                      </label>
                    </div>
                  </fieldset>

                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-300 rounded-lg p-3 text-red-700 text-sm" role="alert" aria-live="polite">
                      {message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    aria-label={status === 'loading' ? 'Subscribing to updates' : 'Subscribe to investor updates'}
                    className="w-full bg-primary-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-primary-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <HiOutlineMail className="w-5 h-5" aria-hidden="true" />
                        <span>Subscribe to Updates</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center" role="note">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
