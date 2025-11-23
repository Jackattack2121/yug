import type { Metadata } from 'next'
import { Montserrat, Josefin_Sans, Merriweather } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SessionProvider from '@/components/providers/SessionProvider'
import ConditionalLayout from '@/components/layout/ConditionalLayout'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
  display: 'swap',
  weight: ['100', '300', '400', '600', '700'],
})

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
  weight: ['300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Yugo Metals - European Metals Exploration and Development',
  description: 'Yugo Metals explores for nickel, copper, cobalt, and precious metals in Bosnia and Herzegovina, on the doorstep of the European Union.',
  keywords: 'mining, metals, Europe, Bosnia, Herzegovina, nickel, copper, cobalt, Yugo Metals, exploration, ASX',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${josefin.variable} ${merriweather.variable}`}>
      <body>
        <SessionProvider>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </SessionProvider>
      </body>
    </html>
  )
}
