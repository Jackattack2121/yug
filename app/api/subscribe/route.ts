import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders() })
}

export async function POST(request: Request) {
  try {
    const { email, name, preferences } = await request.json()

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400, headers: corsHeaders() }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const audienceId = process.env.RESEND_AUDIENCE_ID

    if (!resendApiKey || !audienceId) {
      // Graceful degradation — log in dev, don't expose config errors to users
      console.log('--- Subscriber Sign-Up (Resend not fully configured) ---')
      console.log('Email:', email)
      console.log('Name:', name || '(not provided)')
      console.log('Preferences:', preferences)
      console.log('Set RESEND_API_KEY and RESEND_AUDIENCE_ID to enable subscriber saving.')
      console.log('--------------------------------------------------------')
      return NextResponse.json(
        { success: true, message: 'Thank you for subscribing! You\'ll hear from us soon.' },
        { headers: corsHeaders() }
      )
    }

    const resend = new Resend(resendApiKey)

    // Split name into first/last for Resend contact record
    const nameParts = (name || '').trim().split(/\s+/)
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''

    // Add/update subscriber in Resend Audience
    const { error: contactError } = await resend.contacts.create({
      email,
      firstName: firstName || undefined,
      lastName: lastName || undefined,
      unsubscribed: false,
      audienceId,
    })

    if (contactError) {
      // Resend returns a specific error when the contact already exists
      const msg = (contactError as { message?: string }).message || ''
      if (msg.toLowerCase().includes('already exists') || msg.toLowerCase().includes('duplicate')) {
        return NextResponse.json(
          { error: 'This email address is already subscribed.' },
          { status: 409, headers: corsHeaders() }
        )
      }
      console.error('Resend contacts error:', contactError)
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again later.' },
        { status: 500, headers: corsHeaders() }
      )
    }

    // Send a welcome confirmation email to the subscriber
    const prefsLabel = buildPrefsLabel(preferences)
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Yugo Metals <noreply@yugometals.com>'

    await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: 'You\'re subscribed to Yugo Metals investor updates',
      html: buildConfirmationEmail(firstName || email.split('@')[0], prefsLabel),
    })

    // Also notify the company about the new subscriber
    const companyEmail = process.env.CONTACT_EMAIL || 'info@yugometals.com'
    await resend.emails.send({
      from: fromEmail,
      to: [companyEmail],
      subject: `[Yugo Metals] New subscriber: ${email}`,
      html: `
        <h2>New Investor Subscriber</h2>
        <p><strong>Email:</strong> ${email}</p>
        ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
        ${preferences ? `<p><strong>Preferences:</strong> ${prefsLabel}</p>` : ''}
        <p><strong>Subscribed at:</strong> ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Perth' })} AWST</p>
      `,
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for subscribing! A confirmation email is on its way.',
      },
      { headers: corsHeaders() }
    )
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500, headers: corsHeaders() }
    )
  }
}

function buildPrefsLabel(preferences?: { announcements?: boolean; reports?: boolean; news?: boolean }): string {
  if (!preferences) return 'All updates'
  const selected: string[] = []
  if (preferences.announcements) selected.push('ASX Announcements')
  if (preferences.reports) selected.push('Quarterly & Annual Reports')
  if (preferences.news) selected.push('Company News & Updates')
  return selected.length > 0 ? selected.join(', ') : 'All updates'
}

function buildConfirmationEmail(firstName: string, prefsLabel: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8" /></head>
    <body style="font-family: Arial, sans-serif; color: #1a1a2e; margin: 0; padding: 0; background: #f4f4f4;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background: #f4f4f4; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <!-- Header -->
              <tr>
                <td style="background: #1a1a2e; padding: 32px 40px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 2px; text-transform: uppercase;">YUGO METALS</h1>
                  <p style="color: #3b82f6; margin: 6px 0 0; font-size: 12px; letter-spacing: 3px; text-transform: uppercase;">ASX: YUG</p>
                </td>
              </tr>
              <!-- Body -->
              <tr>
                <td style="padding: 40px;">
                  <h2 style="color: #1a1a2e; margin: 0 0 16px; font-size: 22px;">You&rsquo;re subscribed!</h2>
                  <p style="color: #4b5563; line-height: 1.6; margin: 0 0 20px;">
                    Hi ${firstName},<br /><br />
                    Thank you for subscribing to Yugo Metals investor updates. You&rsquo;ll be the first to know about our latest news and developments.
                  </p>
                  <div style="background: #f0f7ff; border-left: 4px solid #3b82f6; padding: 16px 20px; margin: 20px 0; border-radius: 0 4px 4px 0;">
                    <p style="color: #1a1a2e; margin: 0; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Your subscriptions</p>
                    <p style="color: #4b5563; margin: 8px 0 0; font-size: 14px;">${prefsLabel}</p>
                  </div>
                  <p style="color: #4b5563; line-height: 1.6; margin: 20px 0 0;">
                    Stay up to date with our exploration progress across Bosnia and Herzegovina — on the doorstep of the European Union.
                  </p>
                </td>
              </tr>
              <!-- Footer -->
              <tr>
                <td style="background: #f9fafb; border-top: 1px solid #e5e7eb; padding: 24px 40px; text-align: center;">
                  <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                    Yugo Metals Limited &bull; Level 8, 216 St Georges Tce, Perth WA 6000, Australia<br />
                    You received this email because you subscribed at yugometals.com.<br />
                    <a href="https://yugometals.com" style="color: #3b82f6;">Unsubscribe</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `
}
