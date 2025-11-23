import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Yugo Metals brand colors
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',  // Main Yugo blue
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',  // Dark navy text
          900: '#0f172a',
        },
        accent: {
          blue: '#2563eb',  // Primary accent (same as primary-600)
        },
        // CoreConnect admin branding - DO NOT CHANGE
        coreconnect: {
          orange: '#FF7B42',  // Primary CoreConnect orange
          red: '#D14D15',     // CoreConnect accent red
          slate: '#1E293B',   // Dark slate for admin UI
        },
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        josefin: ['var(--font-josefin)', 'sans-serif'],
        merriweather: ['var(--font-merriweather)', 'serif'],
      },
      fontSize: {
        'hero': ['clamp(2rem, 6.5vw, 5.5rem)', { lineHeight: '0.9', letterSpacing: '-0.02em', fontWeight: '900' }],
        'display': ['clamp(2.5rem, 7vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: '800' }],
        'heading-xl': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1', fontWeight: '800' }],
        'heading-lg': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.2', fontWeight: '700' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

