import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// ---------------------------------------------------------------------------
// Rate limiting (simple in-memory store)
// ---------------------------------------------------------------------------
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000 // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5

const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  entry.count += 1
  return entry.count > MAX_REQUESTS_PER_WINDOW
}

// Periodically clean up expired entries so the map doesn't grow unbounded
setInterval(() => {
  const now = Date.now()
  rateLimitMap.forEach((entry, ip) => {
    if (now > entry.resetAt) {
      rateLimitMap.delete(ip)
    }
  })
}, RATE_LIMIT_WINDOW_MS)

// ---------------------------------------------------------------------------
// Email validation helper
// ---------------------------------------------------------------------------
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// ---------------------------------------------------------------------------
// CORS headers applied to every response
// ---------------------------------------------------------------------------
function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

// ---------------------------------------------------------------------------
// OPTIONS (preflight)
// ---------------------------------------------------------------------------
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders() })
}

// ---------------------------------------------------------------------------
// POST handler
// ---------------------------------------------------------------------------
export async function POST(request: Request) {
  try {
    // --- Determine caller IP for rate limiting ---
    const forwarded = request.headers.get('x-forwarded-for')
    const realIp = request.headers.get('x-real-ip')
    const ip = forwarded?.split(',')[0]?.trim() || realIp || 'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: corsHeaders() }
      )
    }

    // --- Parse & validate body ---
    const body = await request.json()

    const {
      name,
      email,
      message,
      subject,
      phone,
      type,
      website, // honeypot
    } = body as {
      name?: string
      email?: string
      message?: string
      subject?: string
      phone?: string
      type?: string
      website?: string
    }

    // Honeypot check - bots will fill this hidden field
    if (website) {
      // Return success so the bot thinks it worked
      return NextResponse.json({ success: true }, { headers: corsHeaders() })
    }

    // Required fields
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Name is required.' },
        { status: 400, headers: corsHeaders() }
      )
    }

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400, headers: corsHeaders() }
      )
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: 'Message is required.' },
        { status: 400, headers: corsHeaders() }
      )
    }

    // Optional type validation
    const contactType = type === 'investor' ? 'investor' : 'general'

    // --- Build email content ---
    const toEmail = process.env.CONTACT_EMAIL || 'info@yugometals.com'
    const emailSubject = `[Yugo Metals ${contactType === 'investor' ? 'Investor' : 'Contact'}] ${subject || 'New inquiry'} from ${name.trim()}`

    const emailHtml = `
      <h2>New ${contactType === 'investor' ? 'Investor' : 'Contact'} Inquiry</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(name.trim())}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        ${phone ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(phone)}</td></tr>` : ''}
        ${subject ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Subject</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${escapeHtml(subject)}</td></tr>` : ''}
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Type</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${contactType}</td></tr>
      </table>
      <h3 style="margin-top: 24px;">Message</h3>
      <p style="white-space: pre-wrap; background: #f9f9f9; padding: 16px; border-left: 4px solid #2563eb;">${escapeHtml(message.trim())}</p>
    `

    // --- Send email via Resend (or graceful fallback) ---
    const resendApiKey = process.env.RESEND_API_KEY

    if (resendApiKey) {
      const resend = new Resend(resendApiKey)

      const { error: sendError } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'Yugo Metals <noreply@yugometals.com>',
        to: [toEmail],
        replyTo: email,
        subject: emailSubject,
        html: emailHtml,
      })

      if (sendError) {
        console.error('Resend send error:', sendError)
        return NextResponse.json(
          { error: 'Failed to send message. Please try again later.' },
          { status: 500, headers: corsHeaders() }
        )
      }
    } else {
      // Graceful degradation for development
      console.log('--- Contact Form Submission (Resend not configured) ---')
      console.log('To:', toEmail)
      console.log('Subject:', emailSubject)
      console.log('From:', `${name.trim()} <${email}>`)
      if (phone) console.log('Phone:', phone)
      console.log('Type:', contactType)
      console.log('Message:', message.trim())
      console.log('------------------------------------------------------')
    }

    return NextResponse.json({ success: true }, { headers: corsHeaders() })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500, headers: corsHeaders() }
    )
  }
}

// ---------------------------------------------------------------------------
// Utility: escape HTML to prevent XSS in email content
// ---------------------------------------------------------------------------
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
