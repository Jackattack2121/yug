import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { checkRateLimit, recordFailedAttempt, clearRateLimit, extractIpAddress } from './rate-limiter';

// ============================================
// SECURITY: Environment Variable Validation
// ============================================
// Validate all security-critical environment variables at startup
// Fail fast if any are missing or improperly formatted

// Validate NEXTAUTH_SECRET
if (!process.env.NEXTAUTH_SECRET) {
  throw new Error('SECURITY: NEXTAUTH_SECRET not configured. Generate one with: openssl rand -base64 32');
}

if (process.env.NEXTAUTH_SECRET.length < 32) {
  throw new Error('SECURITY: NEXTAUTH_SECRET must be at least 32 characters for cryptographic security');
}

// Validate ADMIN_EMAIL
if (!process.env.ADMIN_EMAIL) {
  throw new Error('SECURITY: ADMIN_EMAIL not configured. Set ADMIN_EMAIL in environment variables.');
}

if (!process.env.ADMIN_EMAIL.includes('@') || !process.env.ADMIN_EMAIL.includes('.')) {
  throw new Error('SECURITY: ADMIN_EMAIL must be a valid email address');
}

// Validate ADMIN_PASSWORD_HASH
if (!process.env.ADMIN_PASSWORD_HASH) {
  throw new Error('SECURITY: ADMIN_PASSWORD_HASH not configured. Generate one with: node scripts/generate-admin-password.js "YourSecurePassword"');
}

if (!process.env.ADMIN_PASSWORD_HASH.startsWith('$2a$') && !process.env.ADMIN_PASSWORD_HASH.startsWith('$2b$')) {
  throw new Error('SECURITY: ADMIN_PASSWORD_HASH must be a valid bcrypt hash (should start with $2a$ or $2b$)');
}

if (process.env.ADMIN_PASSWORD_HASH.length < 50) {
  throw new Error('SECURITY: ADMIN_PASSWORD_HASH appears to be invalid (too short for a bcrypt hash)');
}

// Dummy hash for constant-time comparison to prevent timing attacks
const DUMMY_HASH = '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'CoreConnect Admin',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Extract IP address for rate limiting
        const ipAddress = extractIpAddress(req);
        
        // Check rate limit before processing
        const rateLimitCheck = checkRateLimit(ipAddress);
        if (!rateLimitCheck.allowed) {
          // Rate limited - return null without revealing this
          // The user will see the same generic error message
          return null;
        }

        // Use constant-time comparison to prevent user enumeration
        const adminEmail = process.env.ADMIN_EMAIL!;
        const adminHash = process.env.ADMIN_PASSWORD_HASH!;
        
        // Always perform password comparison, even if email doesn't match
        // This prevents timing attacks that could reveal valid vs invalid emails
        const hashToCompare = credentials.email === adminEmail ? adminHash : DUMMY_HASH;
        const isValidPassword = await bcrypt.compare(credentials.password, hashToCompare);
        
        // Only return user if BOTH email AND password match
        if (credentials.email === adminEmail && isValidPassword) {
          // Successful login - clear rate limit
          clearRateLimit(ipAddress);
          
          return {
            id: '1',
            email: adminEmail,
            name: 'Admin User',
            role: 'admin',
          };
        }

        // Failed login - record attempt for rate limiting
        recordFailedAttempt(ipAddress);
        
        // Generic failure - no indication of which field was wrong
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 8 * 60 * 60, // 8 hours for admin sessions (enhanced security)
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

