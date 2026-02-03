'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { HiOutlineMail, HiOutlineCheckCircle } from 'react-icons/hi'

interface SubscriptionFormProps {
  variant?: 'inline' | 'card'
  className?: string
}

export default function SubscriptionForm({ variant = 'inline', className = '' }: SubscriptionFormProps) {
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
        // Handle 503 (service unavailable) specifically
        if (response.status === 503) {
          throw new Error(t('launchingSoon'))
        }
        throw new Error(data.error || t('errorMessage'))
      }

      setStatus('success')
      setMessage(data.message || t('successMessage'))
      setEmail('')
      setName('')
    } catch (error) {
      setStatus('error')
      const errorMessage = error instanceof Error ? error.message : t('errorMessage')
      setMessage(errorMessage)
    }
  }

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('emailPlaceholder')}
          required
          className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {status === 'loading' ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>{t('subscribingButton')}</span>
            </>
          ) : status === 'success' ? (
            <>
              <HiOutlineCheckCircle className="w-5 h-5" />
              <span>{t('subscribedButton')}</span>
            </>
          ) : (
            <>
              <HiOutlineMail className="w-5 h-5" />
              <span>{t('subscribeButton')}</span>
            </>
          )}
        </button>
        {status === 'success' && (
          <div className="sm:hidden text-green-600 text-sm mt-2">{message}</div>
        )}
        {status === 'error' && (
          <div className="sm:hidden text-red-600 text-sm mt-2">{message}</div>
        )}
      </form>
    )
  }

  // Card variant - full form with preferences
  return (
    <div className={`bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 text-white h-full flex flex-col ${className}`}>
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
          <HiOutlineMail className="w-7 h-7 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Stay Informed</h3>
          <p className="text-sm text-white/80">Subscribe to investor updates</p>
        </div>
      </div>

      {status === 'success' ? (
        <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg p-6 text-center flex-1 flex flex-col items-center justify-center">
          <HiOutlineCheckCircle className="w-16 h-16 text-accent-yellow mx-auto mb-3" />
          <p className="text-white font-bold text-lg mb-2">Successfully Subscribed!</p>
          <p className="text-sm text-white/90">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:bg-white/20 transition-all text-white placeholder-white/60"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:bg-white/20 transition-all text-white placeholder-white/60"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-3">
              Email Preferences
            </label>
            <div className="space-y-2">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={preferences.announcements}
                  onChange={() => togglePreference('announcements')}
                  className="w-5 h-5 text-accent-yellow bg-white/10 border-white/30 rounded focus:ring-accent-yellow focus:ring-offset-0"
                />
                <span className="text-sm text-white/90 group-hover:text-white transition-colors">ASX Announcements</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={preferences.reports}
                  onChange={() => togglePreference('reports')}
                  className="w-5 h-5 text-accent-yellow bg-white/10 border-white/30 rounded focus:ring-accent-yellow focus:ring-offset-0"
                />
                <span className="text-sm text-white/90 group-hover:text-white transition-colors">Quarterly & Annual Reports</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={preferences.news}
                  onChange={() => togglePreference('news')}
                  className="w-5 h-5 text-accent-yellow bg-white/10 border-white/30 rounded focus:ring-accent-yellow focus:ring-offset-0"
                />
                <span className="text-sm text-white/90 group-hover:text-white transition-colors">Company News & Updates</span>
              </label>
            </div>
          </div>

          {status === 'error' && (
            <div className="bg-red-500/20 backdrop-blur-sm border border-red-300/50 rounded-lg p-3 text-white text-sm">
              {message}
            </div>
          )}

          <div className="mt-auto pt-2">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-accent-yellow text-black font-bold py-4 px-6 rounded-lg hover:bg-yellow-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {status === 'loading' ? (
                <>
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>Subscribing...</span>
                </>
              ) : (
                <>
                  <HiOutlineMail className="w-5 h-5" />
                  <span>Subscribe to Updates</span>
                </>
              )}
            </button>

            <p className="text-xs text-white/70 text-center mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </form>
      )}
    </div>
  )
}

