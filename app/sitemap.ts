import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

const baseUrl = 'https://yugometals.com';

// All public routes that should be in the sitemap
const routes = [
  '',
  '/why-yugo-metals',
  '/investors',
  '/investors/asx-announcements',
  '/investors/calendar',
  '/investors/contact',
  '/investors/esg',
  '/investors/fact-sheet',
  '/investors/financial-reports',
  '/investors/media',
  '/investors/presentations',
  '/investors/share-information',
  '/company/board-of-directors',
  '/company/corporate-directory',
  '/company/corporate-governance',
  '/company/corporate-responsibility',
  '/contact',
  '/projects',
  '/projects/doboj',
  '/projects/jezero',
  '/projects/sockovac',
  '/projects/sinjakovo',
  '/projects/cajnice',
  '/prospectus',
];

// Priority mapping for different page types
const getPriority = (path: string): number => {
  if (path === '') return 1.0;
  if (path.startsWith('/investors')) return 0.9;
  if (path.startsWith('/projects')) return 0.8;
  if (path.startsWith('/company')) return 0.7;
  return 0.6;
};

// Change frequency mapping
const getChangeFrequency = (path: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' => {
  if (path === '/investors/asx-announcements') return 'daily';
  if (path.startsWith('/investors')) return 'weekly';
  if (path === '') return 'weekly';
  return 'monthly';
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Generate entries for each locale and route combination
  locales.forEach((locale) => {
    routes.forEach((route) => {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: getChangeFrequency(route),
        priority: getPriority(route),
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${route}`])
          ),
        },
      });
    });
  });

  return entries;
}
