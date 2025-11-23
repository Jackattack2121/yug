'use client'

import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <img
              src="/yugo/images/logo-white.png"
              alt="Yugo Metals"
              className="h-20 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Yugo Metals explores for nickel, copper, cobalt, and precious metals in Bosnia and Herzegovina, 
              on the doorstep of the European Union.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/why-yugo-metals" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Why Yugo Metals
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/investors/asx-announcements" className="text-gray-400 hover:text-white transition-colors text-sm">
                  ASX Announcements
                </Link>
              </li>
              <li>
                <Link href="/prospectus" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Prospectus
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/company/board-of-directors" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link href="/company/corporate-directory" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Corporate Directory
                </Link>
              </li>
              <li>
                <Link href="/company/corporate-governance" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Corporate Governance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <div className="text-gray-400 text-sm space-y-2">
              <p>Perth, WA 6000</p>
              <p>Australia</p>
              <p className="mt-4">
                <strong className="text-white">Phone:</strong><br />
                +61 8 9481 0389
              </p>
              <p className="mt-4">
                <strong className="text-white">Email:</strong><br />
                info@lykosmetals.com
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">Stay Informed</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to Yugo Metals Investor News
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 flex-1 max-w-md"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
          <p>Copyright © {new Date().getFullYear()} Yugo Metals. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

