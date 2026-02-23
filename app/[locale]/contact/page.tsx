'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'

const HERO_METRICS = [
  { value: 'ASX: YUG', label: 'Listed Company' },
  { value: 'Level 8', label: 'Perth WA 6000' },
  { value: 'hello@yugometals.com', label: 'General Enquiries' },
  { value: '+61 8 9481 0389', label: 'Phone' },
]

export default function Contact() {
  const t = useTranslations('contact')
  const tForms = useTranslations('forms.contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setStatusMessage('')

    try {
      const form = e.target as HTMLFormElement
      const honeypot = (form.elements.namedItem('website') as HTMLInputElement)?.value

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'general',
          website: honeypot,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setStatusMessage('Thank you for your message. We\'ll get back to you shortly.')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      setStatusMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      )
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary-900 overflow-hidden min-h-[70vh] flex flex-col justify-end">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: 'url(/new_images/sinjakovo5.png)', backgroundPosition: 'center 35%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/65 to-secondary-900/25" />

        <div className="container relative z-10 pb-16 pt-40">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-400 mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat leading-tight max-w-3xl mb-4">
              {t('titleLine1')}<br />
              {t('titleLine2')}
            </h1>
            <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
              {t('subtitle')}
            </p>
          </AnimatedSection>

          {/* Metrics strip */}
          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {HERO_METRICS.map((m) => (
                <div key={m.label} className="bg-white/5 border border-white/10 px-5 py-4">
                  <p className="text-lg md:text-2xl font-bold text-white font-montserrat truncate">{m.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-12">
            <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <section className="section-padding bg-secondary-900 relative">
        <div
          className="absolute inset-0 opacity-[0.06] bg-cover"
          style={{ backgroundImage: 'url(/new_images/sinjakovo3.png)', backgroundPosition: 'center 35%' }}
        />
        <div className="container relative z-10">
          {/* Section header */}
          <AnimatedSection>
            <div className="mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-400 mb-3">
                Send a Message
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-3">
                {t('formTitle')}
              </h2>
              <p className="text-base text-white/50 max-w-2xl">
                Whether you have a question about our projects, investor relations, or partnership opportunities, our team is ready to help.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Contact Form — takes 3 of 5 cols */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="bg-white/5 border border-white/10 p-8 md:p-10">
                  {/* Success Message */}
                  {status === 'success' && (
                    <div className="mb-6 bg-green-500/10 border border-green-400/30 p-6">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="font-semibold text-green-300">{statusMessage}</p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {status === 'error' && (
                    <div className="mb-6 bg-red-500/10 border border-red-400/30 p-6">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <p className="font-semibold text-red-300">{statusMessage}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field - hidden from real users */}
                    <input
                      type="text"
                      name="website"
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-white/70 mb-2">
                          {t('nameLabel')}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-primary-400 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-white/70 mb-2">
                          {t('emailLabel')}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-primary-400 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-white/70 mb-2">
                          {t('phoneLabel')}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-primary-400 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-white/70 mb-2">
                          {t('subjectLabel')}
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-primary-400 focus:outline-none transition-colors [&>option]:bg-secondary-900 [&>option]:text-white"
                        >
                          <option value="">{t('subjectPlaceholder')}</option>
                          <option value="general">{t('subjectGeneral')}</option>
                          <option value="investor">{t('subjectInvestor')}</option>
                          <option value="media">{t('subjectMedia')}</option>
                          <option value="partnership">{t('subjectPartnership')}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-white/70 mb-2">
                        {t('messageLabel')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-primary-400 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="group inline-flex items-center gap-3 px-8 py-4 font-semibold uppercase tracking-wider transition-all duration-300 text-sm bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>{t('sendButton')}</span>
                          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Information Sidebar — takes 2 of 5 cols */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2}>
                <div className="space-y-5">
                  {/* Registered Office */}
                  <div className="bg-white/5 border border-white/10 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                        {t('registeredOffice')}
                      </h3>
                    </div>
                    <div className="space-y-1 text-white/70 text-sm leading-relaxed pl-12">
                      <p>Level 8, 216 St Georges Tce</p>
                      <p>Perth, WA 6000</p>
                      <p>Australia</p>
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="bg-white/5 border border-white/10 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                        {t('phoneEmail')}
                      </h3>
                    </div>
                    <div className="space-y-2 text-sm pl-12">
                      <p>
                        <span className="text-white/50">{t('phone')}:</span>{' '}
                        <a href="tel:+61894810389" className="text-white/70 hover:text-primary-400 transition-colors">+61 8 9481 0389</a>
                      </p>
                      <p>
                        <span className="text-white/50">{t('email')}:</span>{' '}
                        <a href="mailto:hello@yugometals.com" className="text-white/70 hover:text-primary-400 transition-colors">hello@yugometals.com</a>
                      </p>
                    </div>
                  </div>

                  {/* CEO Contact */}
                  <div className="bg-white/5 border border-white/10 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                        CEO Contact
                      </h3>
                    </div>
                    <div className="space-y-2 text-sm pl-12">
                      <p className="text-white font-semibold">Petar Tomasevic</p>
                      <p>
                        <span className="text-white/50">Email:</span>{' '}
                        <a href="mailto:Petar@yugometals.com" className="text-white/70 hover:text-primary-400 transition-colors">Petar@yugometals.com</a>
                      </p>
                      <p>
                        <span className="text-white/50">Mobile:</span>{' '}
                        <a href="tel:+61414830540" className="text-white/70 hover:text-primary-400 transition-colors">+61 414 830 540</a>
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="bg-white/5 border border-white/10 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                        {t('businessHours')}
                      </h3>
                    </div>
                    <div className="text-sm text-white/70 pl-12">
                      <p>{t('businessHoursValue')}</p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="bg-white/5 border border-white/10 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                        {t('followUs')}
                      </h3>
                    </div>
                    <div className="flex gap-4 pl-12">
                      <a href="https://x.com/YugoMetals" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-primary-400 transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/company/yugo-metals/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-primary-400 transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Share Registry Section */}
      <section className="py-16 md:py-20 bg-secondary-900 relative border-t border-white/5">
        <div
          className="absolute inset-0 opacity-[0.06] bg-cover"
          style={{ backgroundImage: 'url(/new_images/sinjakovo2.png)', backgroundPosition: 'center 35%' }}
        />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-400 mb-3">
                Share Registry
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-3">
                Computershare Investor Services
              </h2>
              <p className="text-base text-white/50 max-w-2xl">
                For all shareholding enquiries including changes of address, dividend payments, and transfer of shares.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl">
              {/* Registry Details */}
              <div className="bg-white/5 border border-white/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    Registry Office
                  </h3>
                </div>
                <div className="space-y-1 text-sm text-white/70 leading-relaxed pl-12">
                  <p className="text-white font-semibold">Computershare Investor Services Pty Limited</p>
                  <p>Level 17, 221 St Georges Terrace</p>
                  <p>Perth WA 6000</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="bg-white/5 border border-white/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    Phone
                  </h3>
                </div>
                <div className="space-y-2 text-sm pl-12">
                  <p>
                    <span className="text-white/50">Australia:</span>{' '}
                    <a href="tel:1300850505" className="text-white/70 hover:text-primary-400 transition-colors">1300 850 505</a>
                  </p>
                  <p>
                    <span className="text-white/50">International:</span>{' '}
                    <a href="tel:+61394154000" className="text-white/70 hover:text-primary-400 transition-colors">+61 3 9415 4000</a>
                  </p>
                </div>
              </div>

              {/* Email & Website */}
              <div className="bg-white/5 border border-white/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    Online
                  </h3>
                </div>
                <div className="space-y-2 text-sm pl-12">
                  <p>
                    <span className="text-white/50">Email:</span>{' '}
                    <a href="mailto:cgs@computershare.com.au" className="text-white/70 hover:text-primary-400 transition-colors">cgs@computershare.com.au</a>
                  </p>
                  <p>
                    <span className="text-white/50">Website:</span>{' '}
                    <a href="https://www.investorcentre.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary-400 transition-colors">www.investorcentre.com</a>
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
