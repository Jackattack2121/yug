# Vercel Environment Variables Template

Add these environment variables to your Vercel project.

**Location:** Vercel Dashboard → Your Project → Settings → Environment Variables

---

## Production Variables

Add these variables with **Environment:** `Production`

```bash
# Resend API (Email & Subscriptions)
RESEND_API_KEY=re_your_resend_api_key
RESEND_FROM_EMAIL=Yugo Metals <noreply@yugometals.com>
RESEND_SEGMENT_ID=your-segment-id
CONTACT_EMAIL=info@yugometals.com

# Next.js Site URL
NEXT_PUBLIC_SITE_URL=https://yugometals.com

# Optional: Directus CMS (if deploying)
DIRECTUS_URL=https://cms.yugometals.com

# Optional: Anthropic API (for Cory AI Chatbot)
ANTHROPIC_API_KEY=sk-ant-your-anthropic-api-key
NEXT_PUBLIC_CORY_ENABLED=true
```

---

## Preview Variables (Optional)

For testing deployments, add with **Environment:** `Preview`

```bash
LISTMONK_URL=https://listmonk-staging.yugometals.com
LISTMONK_USERNAME=listmonk_api
LISTMONK_PASSWORD=your-staging-api-password
NEXT_PUBLIC_SITE_URL=https://preview.yugometals.com
```

---

## Development Variables (Optional)

For local development overrides, add with **Environment:** `Development`

```bash
LISTMONK_URL=http://localhost:9000
LISTMONK_USERNAME=listmonk_api
LISTMONK_PASSWORD=YUG_API_2024_Secure!
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Note:** For local development, `.env.local` file is preferred over Vercel dev variables.

---

## How to Get These Values

### RESEND_API_KEY
- Go to [resend.com/api-keys](https://resend.com/api-keys)
- Create a new API key with **Full Access**
- Copy the key (starts with `re_`)
- Used for sending emails and managing contacts

### RESEND_FROM_EMAIL
- Format: `Yugo Metals <noreply@yugometals.com>`
- Must be from a verified domain in Resend
- Go to [resend.com/domains](https://resend.com/domains) to add `yugometals.com`
- Add DNS records provided by Resend for verification

### RESEND_SEGMENT_ID
- Go to [resend.com/segments](https://resend.com/segments)
- Click **"Create Segment"**
- Name it **"Yugo Metals Investors"**
- Copy the Segment ID (e.g., `78261eea-8f8b-4381-83c6-79fa7120f1cf`)
- Used to organize subscriber contacts

### CONTACT_EMAIL
- Company email: `info@yugometals.com`
- Receives notifications when someone subscribes or uses contact form
- Can be any valid email address

### NEXT_PUBLIC_SITE_URL
- Production: `https://yugometals.com`
- This is your main website domain
- Used for generating absolute URLs
- Prefix `NEXT_PUBLIC_` makes it available in browser

---

## Adding Variables in Vercel

### Method 1: Web UI (Recommended)

1. Go to https://vercel.com/dashboard
2. Select your project: `yugo-metals`
3. Click **Settings** → **Environment Variables**
4. For each variable:
   - Enter **Key:** (e.g., `LISTMONK_URL`)
   - Enter **Value:** (e.g., `https://listmonk.yugometals.com`)
   - Select **Environment:** `Production`
   - Click **Add**
5. After adding all variables, redeploy:
   - Go to **Deployments**
   - Click **•••** on latest deployment
   - Click **Redeploy**

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
cd "/Users/jack/Documents/Luxe & Lens Co Projects/Luxe Web Projects/yugo-metals"
vercel link

# Add variables
vercel env add RESEND_API_KEY production
# Paste value when prompted

vercel env add RESEND_FROM_EMAIL production
# Paste value when prompted

vercel env add RESEND_SEGMENT_ID production
# Paste value when prompted

vercel env add CONTACT_EMAIL production
# Paste value when prompted

vercel env add NEXT_PUBLIC_SITE_URL production
# Paste value when prompted

# Redeploy
vercel --prod
```

---

## Verification Checklist

After adding variables:

- [ ] All 4 Resend variables are added (`RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_SEGMENT_ID`, `CONTACT_EMAIL`)
- [ ] Environment is set to `Production`
- [ ] No typos in variable names
- [ ] Domain is verified in Resend dashboard
- [ ] Segment is created in Resend dashboard
- [ ] `NEXT_PUBLIC_SITE_URL` has no trailing slash
- [ ] Redeployed after adding variables

---

## Testing Variables

### Test in Vercel Deployment

1. After redeployment, go to **Deployments** → Latest deployment
2. Click **View Function Logs**
3. Open browser to: `https://yugometals.com/investors`
4. Try subscribing with test email
5. Check function logs for any errors

### Test API Endpoint

```bash
curl -X POST https://yugometals.com/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "name": "Test User",
    "preferences": {
      "news": true
    }
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Thank you for subscribing! A confirmation email is on its way."
}
```

If you get errors:
- Check function logs in Vercel
- Verify Resend API key is valid
- Confirm domain is verified in Resend
- Check segment ID is correct

---

## Troubleshooting

### Error: "Failed to subscribe"

**Cause:** Can't reach Resend API or invalid API key

**Solution:**
1. Verify `RESEND_API_KEY` is set and valid
2. Check API key at [resend.com/api-keys](https://resend.com/api-keys)
3. Ensure API key has Full Access permissions
4. Test API key works:
```bash
curl https://api.resend.com/contacts \
  -H "Authorization: Bearer re_your_api_key"
```

### Error: "Domain not verified"

**Cause:** Sending domain hasn't been verified in Resend

**Solution:**
1. Go to [resend.com/domains](https://resend.com/domains)
2. Add `yugometals.com` if not already there
3. Add DNS records to your DNS provider (Cloudflare, etc.)
4. Wait for verification (can take a few minutes to 24 hours)
5. Emails will fail until domain is verified

### Error: "Invalid segment ID"

**Cause:** Segment doesn't exist or ID is wrong

**Solution:**
1. Go to [resend.com/segments](https://resend.com/segments)
2. Verify segment exists and copy the correct ID
3. Update `RESEND_SEGMENT_ID` in Vercel with correct value

### Error: Variables not loaded

**Cause:** Vercel didn't redeploy after adding variables

**Solution:**
1. Go to **Deployments** tab
2. Find latest deployment
3. Click **•••** → **Redeploy**
4. Wait for build to complete (~2 minutes)

### Error: CORS issues

**Cause:** API route not allowing requests

**Solution:**
1. Check `app/api/subscribe/route.ts` has OPTIONS handler
2. Verify no CORS errors in browser console
3. Railway Listmonk should allow all origins (default)

---

## Security Best Practices

✅ **DO:**
- Use Vercel's encrypted environment variables
- Set sensitive variables to `Production` only (not Preview)
- Rotate API keys every 6-12 months
- Use different API keys for staging vs production
- Monitor function logs for unauthorized access attempts
- Restrict API key permissions if possible

❌ **DON'T:**
- Expose `RESEND_API_KEY` in client-side code
- Use `NEXT_PUBLIC_` prefix for sensitive variables
- Commit `.env.production` or `.env.local` to Git
- Share API keys in plain text
- Use the same API key across multiple projects

---

## Variable Reference

| Variable | Type | Public? | Required | Default |
|----------|------|---------|----------|---------|
| `RESEND_API_KEY` | Server | No | Yes | - |
| `RESEND_FROM_EMAIL` | Server | No | No | `Yugo Metals <noreply@yugometals.com>` |
| `RESEND_SEGMENT_ID` | Server | No | No | - |
| `CONTACT_EMAIL` | Server | No | No | `info@yugometals.com` |
| `NEXT_PUBLIC_SITE_URL` | Client | Yes | No | Auto-detected |
| `DIRECTUS_URL` | Server | No | No | - |
| `ANTHROPIC_API_KEY` | Server | No | No | - |

**Server variables:** Only available in API routes and server components
**Client variables:** Available in browser (use `NEXT_PUBLIC_` prefix)

---

## Updating Variables

To update an existing variable:

1. Go to **Settings** → **Environment Variables**
2. Find the variable you want to update
3. Click **Edit** (pencil icon)
4. Enter new value
5. Click **Save**
6. **Important:** Redeploy for changes to take effect

**Note:** Updates take effect after next deployment, not immediately.

---

## Exporting Variables (Backup)

To backup your environment variables:

```bash
# Using Vercel CLI
vercel env pull .env.vercel

# This creates .env.vercel with all variables
# DO NOT commit this file to Git
```

Add to `.gitignore`:
```
.env.vercel
.env*.local
.env.production
```

---

**Last updated:** 2026-02-24

