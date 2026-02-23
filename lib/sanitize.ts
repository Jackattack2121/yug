/**
 * Lightweight HTML sanitizer that works on both server and client.
 * Strips disallowed tags/attributes and removes event handlers.
 */

const ALLOWED_TAGS = new Set([
  'p', 'br', 'strong', 'em', 'b', 'i', 'a',
  'ul', 'ol', 'li', 'h2', 'h3', 'h4',
  'span', 'div', 'table', 'tr', 'td', 'th', 'thead', 'tbody',
])

const ALLOWED_ATTRS = new Set(['href', 'target', 'rel', 'class'])

export function sanitizeHtml(html: string): string {
  return html
    // Remove <script> blocks entirely
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove <style> blocks entirely
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    // Remove inline event handlers (onclick, onerror, etc.)
    .replace(/\s+on\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]*)/gi, '')
    // Filter tags and their attributes
    .replace(/<\/?([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)?\/?>/gi, (match, tag, attrStr) => {
      const lowerTag = tag.toLowerCase()
      if (!ALLOWED_TAGS.has(lowerTag)) return ''

      // Closing tags
      if (match.startsWith('</')) return `</${lowerTag}>`

      // Parse and filter attributes
      let safeAttrs = ''
      if (attrStr) {
        const attrRegex = /\s([a-zA-Z-]+)\s*=\s*"([^"]*)"/g
        let m
        while ((m = attrRegex.exec(attrStr)) !== null) {
          if (ALLOWED_ATTRS.has(m[1].toLowerCase())) {
            safeAttrs += ` ${m[1]}="${m[2]}"`
          }
        }
      }

      if (match.endsWith('/>')) return `<${lowerTag}${safeAttrs} />`
      return `<${lowerTag}${safeAttrs}>`
    })
}
