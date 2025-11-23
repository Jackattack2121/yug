import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

// Admin credentials (in production, these should be in a database)
// HARDCODED FOR DEVELOPMENT - Password: "admin123"
const ADMIN_USERS = [
  {
    id: '1',
    email: 'admin@yugometals.com',
    // Password: "admin123"
    passwordHash: '$2b$10$mKPvUnhXXwWDXwsxM9CzMeE0yz1yRDBMymgfC7n2kM1hiGhxn10Gy',
    name: 'Admin User',
    role: 'admin',
  },
];

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'CoreConnect Admin',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('🔐 Login attempt:', credentials?.email);
        
        if (!credentials?.email || !credentials?.password) {
          console.log('❌ Missing credentials');
          return null;
        }

        // Find admin user
        const user = ADMIN_USERS.find((u) => u.email === credentials.email);
        
        if (!user) {
          console.log('❌ User not found:', credentials.email);
          console.log('Available users:', ADMIN_USERS.map(u => u.email));
          return null;
        }

        console.log('👤 User found:', user.email);

        // Verify password
        const isValid = await bcrypt.compare(credentials.password, user.passwordHash);
        
        console.log('🔑 Password valid:', isValid);
        
        if (!isValid) {
          return null;
        }

        console.log('✅ Login successful for:', user.email);
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
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

