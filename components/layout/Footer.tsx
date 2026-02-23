'use client'

import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export default function Footer() {
  const t = useTranslations('footer')
  const tProjects = useTranslations('footer.projects')
  const tCompany = useTranslations('footer.company')
  const tInvestors = useTranslations('footer.investors')
  const tLocation = useTranslations('footer.location')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container section-padding-small">
        {/* Logo */}
        <div className="mb-12">
          <div className="relative h-12 w-auto mb-4">
            <Image
              src="/yugo_logo.png"
              alt="Yugo Metals"
              width={150}
              height={48}
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="text-sm text-gray-400 mt-4 max-w-md">
            {t('tagline')}
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Projects */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">
              {t('navigation.projectsTitle')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/projects/sinjakovo" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {tProjects('sinjakovo')}
                </Link>
              </li>
              <li>
                <Link href="/projects/sockovac" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {tProjects('sockovac')}
                </Link>
              </li>
              <li>
                <Link href="/projects/cajnice" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {tProjects('cajnice')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">
              {t('navigation.companyTitle')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/why-yugo-metals" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {tCompany('about')}
                </Link>
              </li>
              <li>
                <Link href="/company/board-of-directors" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {tCompany('board')}
                </Link>
              </li>
              <li>
                <Link href="/company/corporate-governance" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {tCompany('governance')}
                </Link>
              </li>
              <li>
                <Link href="/investors/esg" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {tCompany('esg')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Investors */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">
              {t('navigation.investorsTitle')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/investors" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {tInvestors('centre')}
                </Link>
              </li>
              <li>
                <Link href="/investors/asx-announcements" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {tInvestors('announcements')}
                </Link>
              </li>
              <li>
                <Link href="/investors/presentations" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {tInvestors('presentations')}
                </Link>
              </li>
              <li>
                <Link href="/investors/fact-sheet" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {tInvestors('factSheet')}
                </Link>
              </li>
              {/* Prospectus hidden until documents are available */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">
              {t('navigation.contactTitle')}
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>{tLocation('city')}</p>
              <p>{tLocation('country')}</p>
              <p className="mt-4">
                <a href="tel:+61894810389" className="hover:text-white transition-colors">
                  +61 8 9481 0389
                </a>
              </p>
              <p>
                <a href="mailto:hello@yugometals.com" className="hover:text-white transition-colors">
                  info@yugometals.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">{t('newsletter.title')}</h3>
            <p className="text-gray-400 mb-6">
              {t('newsletter.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <label htmlFor="footer-newsletter-email" className="sr-only">Email address</label>
              <input
                id="footer-newsletter-email"
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="flex-1 px-4 py-3 bg-white/10 text-white placeholder:text-gray-500 border border-white/20 focus:border-primary-500 focus:outline-none transition-colors"
              />
              <button className="btn-primary whitespace-nowrap">
                {t('newsletter.button')}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-8">
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@yugometals.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <HiMail className="w-5 h-5" />
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-500">
              {t('copyright', { year: currentYear })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
