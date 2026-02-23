'use client'

import { useState, useEffect, useCallback } from 'react'
import type { CoryMessage } from './types'
import CoryButton from './CoryButton'
import CoryChat from './CoryChat'

const STORAGE_KEY = 'cory_chat_history'
const MAX_MESSAGES = 20

const WELCOME_MESSAGE =
  "Hi! I'm Cory, Yugo Metals' AI assistant. I can help you with questions about our projects, team, investors, and more. What would you like to know?"

const CONVERSATION_STARTERS = [
  'What projects is Yugo Metals working on?',
  'Who is on the management team?',
  'How can I contact investor relations?',
  'What are the latest announcements?',
]

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

function loadMessages(): CoryMessage[] {
  if (typeof window === 'undefined') return []
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored) as CoryMessage[]
      return Array.isArray(parsed) ? parsed : []
    }
  } catch {
    // Ignore parse errors
  }
  return []
}

function saveMessages(messages: CoryMessage[]) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
  } catch {
    // Ignore storage errors
  }
}

export default function CoryWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<CoryMessage[]>([])
  const [isStreaming, setIsStreaming] = useState(false)
  const [hasShownWelcome, setHasShownWelcome] = useState(false)

  // Load messages from sessionStorage on mount
  useEffect(() => {
    const stored = loadMessages()
    if (stored.length > 0) {
      setMessages(stored)
      setHasShownWelcome(true)
    }
  }, [])

  // Persist messages to sessionStorage
  useEffect(() => {
    if (messages.length > 0) {
      saveMessages(messages)
    }
  }, [messages])

  const addMessage = useCallback(
    (role: 'user' | 'assistant', content: string) => {
      const newMessage: CoryMessage = {
        id: generateId(),
        role,
        content,
        timestamp: Date.now(),
      }
      setMessages((prev) => {
        const updated = [...prev, newMessage]
        // Trim to max messages
        if (updated.length > MAX_MESSAGES) {
          return updated.slice(updated.length - MAX_MESSAGES)
        }
        return updated
      })
      return newMessage.id
    },
    []
  )

  const handleOpen = useCallback(() => {
    const opening = !isOpen
    setIsOpen((prev) => !prev)

    // Show welcome message on first open
    if (opening && !hasShownWelcome && messages.length === 0) {
      setHasShownWelcome(true)
      // Slight delay so the chat animation starts before the message appears
      setTimeout(() => {
        addMessage('assistant', WELCOME_MESSAGE)
      }, 400)
    }
  }, [isOpen, hasShownWelcome, messages.length, addMessage])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleSendMessage = useCallback(
    async (message: string) => {
      // Add user message
      addMessage('user', message)
      setIsStreaming(true)

      // Create a placeholder for the assistant response
      const assistantId = generateId()
      const assistantMessage: CoryMessage = {
        id: assistantId,
        role: 'assistant',
        content: '',
        timestamp: Date.now(),
      }

      setMessages((prev) => {
        const updated = [...prev, assistantMessage]
        if (updated.length > MAX_MESSAGES) {
          return updated.slice(updated.length - MAX_MESSAGES)
        }
        return updated
      })

      try {
        const response = await fetch('/api/cory/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message,
            history: messages.slice(-18),
          }),
        })

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }

        const reader = response.body?.getReader()
        if (!reader) {
          throw new Error('No response stream')
        }

        const decoder = new TextDecoder()
        let accumulated = ''

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value)
          const lines = chunk.split('\n')

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6)
              if (data === '[DONE]') break
              if (data === '[ERROR]') throw new Error('Stream error')
              accumulated += data
              // Update the assistant message content in real-time
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === assistantId
                    ? { ...msg, content: accumulated }
                    : msg
                )
              )
            }
          }
        }

        // If no content was received, show a fallback
        if (!accumulated) {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantId
                ? {
                    ...msg,
                    content:
                      "I'm sorry, I didn't receive a response. Please try again.",
                  }
                : msg
            )
          )
        }
      } catch {
        // On error, update the assistant message with an error notice
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantId
              ? {
                  ...msg,
                  content:
                    "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
                }
              : msg
          )
        )
      } finally {
        setIsStreaming(false)
      }
    },
    [messages, addMessage]
  )

  return (
    <>
      <CoryChat
        isOpen={isOpen}
        onClose={handleClose}
        messages={messages}
        onSendMessage={handleSendMessage}
        isStreaming={isStreaming}
        starters={CONVERSATION_STARTERS}
      />
      <CoryButton isOpen={isOpen} onClick={handleOpen} />
    </>
  )
}
