'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlinePaperAirplane } from 'react-icons/hi'

export default function InvestorContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // TODO: Implement actual form submission
      // In production, send to API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setStatus('success')
      setMessage('Thank you for your inquiry. Our Investor Relations team will respond within 24-48 hours.')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (error) {
      setStatus('error')
      setMessage('Failed to send message. Please try again or email us directly.')
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-2 bg-accent-yellow text-black text-sm font-semibold uppercase tracking-wider mb-4 rounded">
                Contact Investor Relations
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-6">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl font-josefin leading-relaxed opacity-90">
                Our team is here to answer your questions and provide information
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information Cards */}
            <div className="space-y-6">
              <AnimatedSection>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <HiOutlineMail className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Email</h3>
                  </div>
                  <a 
                    href="mailto:investor.relations@yugometals.com"
                    className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                  >
                    investor.relations@yugometals.com
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <HiOutlinePhone className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Phone</h3>
                  </div>
                  <a 
                    href="tel:+61894810389"
                    className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                  >
                    +61 8 9481 0389
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <HiOutlineLocationMarker className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Registered Office</h3>
                  </div>
                  <address className="text-gray-700 not-italic">
                    Level 8, London House<br />
                    216 St George's Terrace<br />
                    Perth, WA 6000<br />
                    Australia
                  </address>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.1}>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                  {status === 'success' ? (
                    <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <HiOutlinePaperAirplane className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent Successfully!</h3>
                      <p className="text-green-700">{message}</p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors"
                          placeholder="Your full name"
                        />
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors"
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors"
                            placeholder="+61 4XX XXX XXX"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="reports">Financial Reports</option>
                          <option value="share-registry">Share Registry</option>
                          <option value="presentations">Presentations & Briefings</option>
                          <option value="projects">Project Information</option>
                          <option value="media">Media Inquiry</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors resize-none"
                          placeholder="Please provide details about your inquiry..."
                        />
                      </div>

                      {/* Error Message */}
                      {status === 'error' && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800 text-sm">
                          {message}
                        </div>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                      >
                        {status === 'loading' ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <HiOutlinePaperAirplane className="w-5 h-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>

                      <p className="text-xs text-gray-500 text-center">
                        * Required fields. We typically respond within 24-48 business hours.
                      </p>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links CTA */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Looking for Something Specific?
            </h2>
            <p className="text-gray-600 mb-8">
              You might find what you need in one of our investor resource sections
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <a
                href="/investors/asx-announcements"
                className="p-4 bg-gray-50 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900">ASX Announcements</h3>
              </a>
              <a
                href="/investors/financial-reports"
                className="p-4 bg-gray-50 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900">Financial Reports</h3>
              </a>
              <a
                href="/investors/share-information"
                className="p-4 bg-gray-50 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900">Share Information</h3>
              </a>
              <a
                href="/investors/fact-sheet"
                className="p-4 bg-gray-50 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900">Fact Sheet</h3>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

