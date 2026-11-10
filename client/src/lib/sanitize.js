import DOMPurify from 'dompurify'

const CONFIG = {
  ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'u', 'p', 'br', 'ul', 'ol', 'li', 'a'],
  ALLOWED_ATTR: ['href', 'title', 'target', 'rel'],
  ALLOW_DATA_ATTR: false,
  ALLOWED_URI_REGEXP: /^(?:https?:|mailto:)/i,
}

DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  if (node.tagName === 'A') {
    node.setAttribute('target', '_blank')
    node.setAttribute('rel', 'noopener noreferrer')
  }
})

export const sanitizeHtml = (dirty) => DOMPurify.sanitize(dirty ?? '', CONFIG)