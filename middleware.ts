import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    // Allow access to admin routes only for authenticated users
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // Require authentication for all matched routes
        return !!token;
      },
    },
    pages: {
      signIn: '/admin/login',
    },
  }
);

export const config = {
  // Protect all /admin/(dashboard) routes - login is in /admin/(auth) and unprotected
  matcher: [
    '/admin/(dashboard)/:path*',
  ],
};

