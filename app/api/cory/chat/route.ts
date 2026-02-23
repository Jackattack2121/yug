import { NextRequest } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { getKnowledgeBase } from '@/lib/cory/knowledge-base'
import { isRateLimited } from '@/lib/cory/rate-limiter'
import { CORY_CONFIG } from '@/lib/cory/config'

const config = CORY_CONFIG['yugo-metals']

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  return request.headers.get('x-real-ip') || '127.0.0.1'
}

function buildSystemPrompt(): string {
  const knowledgeBase = getKnowledgeBase(config.siteId)

  return `You are Cory, the AI assistant for Yugo Metals (ASX: YUG), an Australian mining company.

Your personality:
- Friendly, professional, and knowledgeable
- Speak clearly and concisely — no jargon unless the user uses it first
- Helpful but honest — if you don't know something, say so
- Never give financial advice or forward-looking statements
- Always clarify that investors should read official ASX announcements for material information

IMPORTANT RULES:
1. NEVER provide specific financial advice or stock recommendations
2. NEVER make price predictions or forward-looking statements
3. NEVER quote specific numbers from announcements unless from the knowledge base — direct users to official sources
4. If asked about something you don't know, say: "I don't have that specific information. I'd recommend checking the Yugo Metals Investor Centre or contacting the team at info@yugometals.com"
5. Keep responses concise — under 150 words unless the question genuinely requires more detail
6. For ASX compliance: never discuss material non-public information

Company Knowledge:
${knowledgeBase}`
}

export async function POST(request: NextRequest) {
  // Check for API key
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'Cory AI is not configured. Please set ANTHROPIC_API_KEY.' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    )
  }

  // Rate limit by IP
  const ip = getClientIp(request)
  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({ error: 'Too many requests. Please wait a moment and try again.' }),
      { status: 429, headers: { 'Content-Type': 'application/json' } }
    )
  }

  // Parse and validate body
  let body: { message?: string; history?: Array<{ role: string; content: string }> }
  try {
    body = await request.json()
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid request body.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }

  const { message, history } = body

  // Validate message
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return new Response(
      JSON.stringify({ error: 'Message is required.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }

  if (message.length > config.maxMessageLength) {
    return new Response(
      JSON.stringify({ error: `Message must be under ${config.maxMessageLength} characters.` }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }

  // Validate history
  if (history && !Array.isArray(history)) {
    return new Response(
      JSON.stringify({ error: 'History must be an array.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }

  // Build messages array from history + current message
  const formattedHistory: Array<{ role: 'user' | 'assistant'; content: string }> = []

  if (history && Array.isArray(history)) {
    const trimmedHistory = history.slice(-config.maxHistoryMessages)
    for (const msg of trimmedHistory) {
      if (
        msg.role === 'user' || msg.role === 'assistant'
      ) {
        formattedHistory.push({
          role: msg.role as 'user' | 'assistant',
          content: typeof msg.content === 'string' ? msg.content : '',
        })
      }
    }
  }

  formattedHistory.push({ role: 'user', content: message.trim() })

  // Build system prompt
  const systemPrompt = buildSystemPrompt()

  // Call Anthropic API with streaming
  try {
    const client = new Anthropic()

    const stream = client.messages.stream({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 512,
      system: systemPrompt,
      messages: formattedHistory,
    })

    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        stream.on('text', (text) => {
          controller.enqueue(encoder.encode(`data: ${text}\n\n`))
        })
        stream.on('end', () => {
          controller.enqueue(encoder.encode('data: [DONE]\n\n'))
          controller.close()
        })
        stream.on('error', () => {
          controller.enqueue(encoder.encode('data: [ERROR]\n\n'))
          controller.close()
        })
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })
  } catch {
    return new Response(
      JSON.stringify({ error: 'Failed to connect to AI service.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
