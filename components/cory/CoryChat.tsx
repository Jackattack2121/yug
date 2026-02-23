'use client'

import { useEffect, useRef, useState, useCallback, type KeyboardEvent } from 'react'
import type { CoryMessage } from './types'
import CoryStarters from './CoryStarters'

/** Lightweight markdown-to-HTML for bot messages: **bold**, bullet lists, line breaks */
function renderMarkdown(text: string): string {
  return text
    // Bold: **text**
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic: *text* (but not inside bold)
    .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>')
    // Bullet lines starting with - or *
    .replace(/^[\-\*]\s+(.+)$/gm, '<li>$1</li>')
    // Wrap consecutive <li> in <ul>
    .replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul class="list-disc pl-4 my-1 space-y-0.5">$1</ul>')
    // Line breaks (double newline = paragraph break, single = <br>)
    .replace(/\n{2,}/g, '</p><p class="mt-2">')
    .replace(/\n/g, '<br/>')
    // Wrap in paragraph
    .replace(/^(.*)$/, '<p>$1</p>')
}

interface CoryChatProps {
  isOpen: boolean
  onClose: () => void
  messages: CoryMessage[]
  onSendMessage: (message: string) => void
  isStreaming: boolean
  starters: string[]
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary-600 text-white text-xs font-bold font-montserrat shrink-0">
        C
      </div>
      <div className="ml-2 flex items-center gap-1 bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  )
}

export default function CoryChat({
  isOpen,
  onClose,
  messages,
  onSendMessage,
  isStreaming,
  starters,
}: CoryChatProps) {
  const [input, setInput] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const MAX_CHARS = 500
  const CHAR_WARNING_THRESHOLD = 400

  // Handle open/close animation
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      // Trigger animation on next frame
      requestAnimationFrame(() => {
        setIsAnimating(true)
      })
    } else {
      setIsAnimating(false)
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isStreaming])

  // Focus textarea when chat opens
  useEffect(() => {
    if (isOpen && textareaRef.current) {
      const timer = setTimeout(() => {
        textareaRef.current?.focus()
      }, 350)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Auto-resize textarea
  const handleInputChange = useCallback((value: string) => {
    if (value.length <= MAX_CHARS) {
      setInput(value)
    }
  }, [])

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`
    }
  }, [input])

  const handleSend = useCallback(() => {
    const trimmed = input.trim()
    if (!trimmed || isStreaming) return
    onSendMessage(trimmed)
    setInput('')
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
  }, [input, isStreaming, onSendMessage])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        handleSend()
      }
    },
    [handleSend]
  )

  if (!isVisible) return null

  const hasMessages = messages.length > 0

  return (
    <div
      className={`fixed z-[9999] bottom-24 right-6 w-[400px] h-[550px] sm:w-[400px] sm:h-[550px] max-sm:inset-0 max-sm:w-full max-sm:h-full max-sm:bottom-0 max-sm:right-0 max-sm:rounded-none flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-300 ease-out ${
        isAnimating
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      }`}
      style={{
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
      }}
      role="dialog"
      aria-label="Chat with Cory"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-600 text-white text-sm font-bold font-montserrat">
            C
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold font-montserrat text-secondary-800">
                Cory
              </span>
              <span className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <span className="text-xs text-secondary-400 font-montserrat">
              AI Assistant
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close chat"
          className="w-8 h-8 flex items-center justify-center rounded-lg text-secondary-400 hover:text-secondary-600 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {!hasMessages && (
          <CoryStarters starters={starters} onSelect={onSendMessage} />
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-2 ${
              msg.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.role === 'assistant' && (
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary-600 text-white text-xs font-bold font-montserrat shrink-0">
                C
              </div>
            )}
            {msg.role === 'user' ? (
              <div className="max-w-[75%] px-4 py-2.5 text-sm font-montserrat leading-relaxed whitespace-pre-wrap break-words bg-primary-600 text-white rounded-2xl rounded-br-md">
                {msg.content}
              </div>
            ) : (
              <div
                className="max-w-[75%] px-4 py-2.5 text-sm font-montserrat leading-relaxed break-words bg-gray-100 text-gray-900 rounded-2xl rounded-bl-md [&_strong]:font-bold [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:my-1 [&_li]:ml-0"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }}
              />
            )}
          </div>
        ))}

        {isStreaming && messages[messages.length - 1]?.role !== 'assistant' && (
          <TypingIndicator />
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="shrink-0 border-t border-gray-100 bg-white px-4 py-3">
        <div className="flex items-end gap-2">
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              rows={1}
              className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm font-montserrat text-secondary-800 placeholder:text-secondary-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors duration-200"
              style={{ maxHeight: '120px' }}
              disabled={isStreaming}
            />
            {input.length > CHAR_WARNING_THRESHOLD && (
              <span
                className={`absolute bottom-1 right-3 text-[10px] font-montserrat ${
                  input.length >= MAX_CHARS
                    ? 'text-red-500'
                    : 'text-secondary-400'
                }`}
              >
                {input.length}/{MAX_CHARS}
              </span>
            )}
          </div>
          <button
            onClick={handleSend}
            disabled={!input.trim() || isStreaming}
            aria-label="Send message"
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shrink-0 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Powered by CoreConnect */}
      <div className="shrink-0 text-center py-1.5 bg-gray-50 border-t border-gray-100">
        <a
          href="https://coreconnect.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-montserrat text-secondary-400 hover:text-secondary-500 transition-colors duration-200"
        >
          Powered by CoreConnect
        </a>
      </div>
    </div>
  )
}
