'use client';

import dynamic from 'next/dynamic';
import { usePathname } from '@/i18n/navigation';
import HeaderWrapper from './HeaderWrapper';
import Footer from './Footer';
import ComingSoon, { COMING_SOON_ENABLED } from '@/components/ComingSoon';

// Lazy load Cory chatbot — no SSR, doesn't block page render
const CoryWidget = dynamic(() => import('@/components/cory/CoryWidget'), {
  ssr: false,
});

const CORY_ENABLED = process.env.NEXT_PUBLIC_CORY_ENABLED !== 'false';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Check if we're in the admin area
  const isAdminRoute = pathname?.startsWith('/admin');

  // For admin routes, render children without Header/Footer
  if (isAdminRoute) {
    return <>{children}</>;
  }

  // Show coming soon page instead of the real website
  if (COMING_SOON_ENABLED) {
    return <ComingSoon />;
  }

  // For public routes, render with Header/Footer + Cory chatbot
  return (
    <>
      <HeaderWrapper />
      <main>{children}</main>
      <Footer />
      {CORY_ENABLED && <CoryWidget />}
    </>
  );
}

