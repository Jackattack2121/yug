import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig = {
  images: {
    domains: ['www.yugometals.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable React strict mode for better error detection
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
