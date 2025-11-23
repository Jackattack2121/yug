import { Session } from 'next-auth';

/**
 * Generate Listmonk Basic Auth header
 */
export function getListmonkAuthHeader(): string {
  const username = process.env.LISTMONK_USERNAME || 'listmonk_api';
  const password = process.env.LISTMONK_PASSWORD || 'YUG_API_2024_Secure!';
  
  return 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
}

/**
 * Validate admin session
 */
export function isAdminSession(session: Session | null): boolean {
  return !!(session?.user?.role === 'admin');
}

/**
 * Hash password for admin user creation
 */
export async function hashPassword(password: string): Promise<string> {
  const bcrypt = await import('bcryptjs');
  return bcrypt.hash(password, 10);
}

