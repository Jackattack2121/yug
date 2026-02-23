import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createHmac } from 'crypto'

function generateUnsubscribeToken(email: string, secret: string): string {
  return createHmac('sha256', secret)
    .update(email.toLowerCase())
    .digest('hex')
    .substring(0, 32)
}

function verifyUnsubscribeToken(email: string, token: string, secret: string): boolean {
  const expectedToken = generateUnsubscribeToken(email, secret)
  return token === expectedToken
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')
  const token = searchParams.get('token')

  if (!email || !token) {
    return new Response(buildErrorPage('Invalid unsubscribe link'), {
      status: 400,
      headers: { 'Content-Type': 'text/html' },
    })
  }

  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    console.error('RESEND_API_KEY not configured for unsubscribe')
    return new Response(buildErrorPage('Service temporarily unavailable'), {
      status: 503,
      headers: { 'Content-Type': 'text/html' },
    })
  }

  // Verify the token
  if (!verifyUnsubscribeToken(email, token, resendApiKey)) {
    return new Response(buildErrorPage('Invalid or expired unsubscribe link'), {
      status: 403,
      headers: { 'Content-Type': 'text/html' },
    })
  }

  try {
    const resend = new Resend(resendApiKey)

    // Unsubscribe the contact
    const { error } = await resend.contacts.update({
      email,
      unsubscribed: true,
    })

    if (error) {
      console.error('Resend unsubscribe error:', error)
      return new Response(buildErrorPage('Failed to unsubscribe. Please try again later.'), {
        status: 500,
        headers: { 'Content-Type': 'text/html' },
      })
    }

    return new Response(buildSuccessPage(email), {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    })
  } catch (error) {
    console.error('Unsubscribe error:', error)
    return new Response(buildErrorPage('An unexpected error occurred'), {
      status: 500,
      headers: { 'Content-Type': 'text/html' },
    })
  }
}

function buildSuccessPage(email: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Unsubscribed - Yugo Metals</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: #ffffff;
          margin: 0;
          padding: 20px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          max-width: 600px;
          background: #ffffff;
          border-radius: 12px;
          padding: 48px 40px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          text-align: center;
        }
        .logo {
          color: #1a1a2e;
          font-size: 28px;
          font-weight: bold;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .ticker {
          color: #3b82f6;
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 32px;
        }
        .icon {
          font-size: 64px;
          margin-bottom: 24px;
        }
        h1 {
          color: #1a1a2e;
          font-size: 28px;
          margin: 0 0 16px;
        }
        p {
          color: #4b5563;
          line-height: 1.6;
          margin: 0 0 16px;
        }
        .email {
          background: #f0f7ff;
          border-left: 4px solid #3b82f6;
          padding: 16px;
          border-radius: 4px;
          margin: 24px 0;
          color: #1a1a2e;
          font-weight: 500;
        }
        .button {
          display: inline-block;
          background: #3b82f6;
          color: #ffffff;
          padding: 14px 32px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          margin-top: 24px;
          transition: background 0.2s;
        }
        .button:hover {
          background: #2563eb;
        }
        .footer {
          margin-top: 32px;
          color: #9ca3af;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">YUGO METALS</div>
        <div class="ticker">ASX: YUG</div>
        <div class="icon">✓</div>
        <h1>You've been unsubscribed</h1>
        <p>You will no longer receive investor updates from Yugo Metals.</p>
        <div class="email">${email}</div>
        <p>If this was a mistake, you can resubscribe at any time by visiting our investor centre.</p>
        <a href="https://yugometals.com/investors" class="button">Visit Investor Centre</a>
        <div class="footer">
          Yugo Metals Limited<br />
          Level 8, 216 St Georges Tce, Perth WA 6000, Australia
        </div>
      </div>
    </body>
    </html>
  `
}

function buildErrorPage(message: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Error - Yugo Metals</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: #ffffff;
          margin: 0;
          padding: 20px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          max-width: 600px;
          background: #ffffff;
          border-radius: 12px;
          padding: 48px 40px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          text-align: center;
        }
        .logo {
          color: #1a1a2e;
          font-size: 28px;
          font-weight: bold;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .ticker {
          color: #3b82f6;
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 32px;
        }
        .icon {
          font-size: 64px;
          margin-bottom: 24px;
          color: #ef4444;
        }
        h1 {
          color: #1a1a2e;
          font-size: 28px;
          margin: 0 0 16px;
        }
        p {
          color: #4b5563;
          line-height: 1.6;
          margin: 0 0 16px;
        }
        .button {
          display: inline-block;
          background: #3b82f6;
          color: #ffffff;
          padding: 14px 32px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          margin-top: 24px;
          transition: background 0.2s;
        }
        .button:hover {
          background: #2563eb;
        }
        .footer {
          margin-top: 32px;
          color: #9ca3af;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">YUGO METALS</div>
        <div class="ticker">ASX: YUG</div>
        <div class="icon">✕</div>
        <h1>Something went wrong</h1>
        <p>${message}</p>
        <p>If you continue to experience issues, please contact us directly at <a href="mailto:info@yugometals.com" style="color: #3b82f6;">info@yugometals.com</a></p>
        <a href="https://yugometals.com" class="button">Return to Homepage</a>
        <div class="footer">
          Yugo Metals Limited<br />
          Level 8, 216 St Georges Tce, Perth WA 6000, Australia
        </div>
      </div>
    </body>
    </html>
  `
}
