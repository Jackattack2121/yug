'use client'

import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container section-padding-small">
        {/* Logo */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <div className="text-4xl font-black">Y</div>
            <div>
              <div className="text-lg font-black uppercase tracking-wider">YUGO</div>
              <div className="text-sm font-semibold text-primary-400 uppercase tracking-wider">METALS</div>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-4 max-w-md">
            Exploring for nickel, copper, cobalt, and precious metals in Bosnia and Herzegovina, 
            on the doorstep of the European Union.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Projects */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">
              Projects
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/projects/doboj" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Doboj Project
                </Link>
              </li>
              <li>
                <Link href="/projects/jezero" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Jezero Project
                </Link>
              </li>
              <li>
                <Link href="/projects/sockovac" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Sočkovac Project
                </Link>
              </li>
              <li>
                <Link href="/projects/sinjakovo" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Sinjakovo Project
                </Link>
              </li>
              <li>
                <Link href="/projects/cajnice" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Čajniče Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/why-yugo-metals" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/company/board-of-directors" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Board & Management
                </Link>
              </li>
              <li>
                <Link href="/company/corporate-governance" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Corporate Governance
                </Link>
              </li>
              <li>
                <Link href="/investors/esg" className="text-sm text-gray-400 hover:text-white transition-colors">
                  ESG
                </Link>
              </li>
            </ul>
          </div>

          {/* Investors */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">
              Investors
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/investors" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Investor Centre
                </Link>
              </li>
              <li>
                <Link href="/investors/asx-announcements" className="text-sm text-gray-400 hover:text-white transition-colors">
                  ASX Announcements
                </Link>
              </li>
              <li>
                <Link href="/investors/presentations" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Presentations
                </Link>
              </li>
              <li>
                <Link href="/investors/fact-sheet" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Fact Sheet
                </Link>
              </li>
              <li>
                <Link href="/prospectus" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Prospectus
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>Perth, WA 6000</p>
              <p>Australia</p>
              <p className="mt-4">
                <a href="tel:+61894810389" className="hover:text-white transition-colors">
                  +61 8 9481 0389
                </a>
              </p>
              <p>
                <a href="mailto:info@lykosmetals.com" className="hover:text-white transition-colors">
                  info@lykosmetals.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Stay Informed</h3>
            <p className="text-gray-400 mb-6">
              Receive updates on exploration results and company developments
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-white/10 text-white placeholder:text-gray-500 border border-white/20 focus:border-primary-500 focus:outline-none transition-colors"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
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
              href="mailto:info@lykosmetals.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <HiMail className="w-5 h-5" />
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Yugo Metals. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
