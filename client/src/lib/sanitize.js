import DOMPurify from 'dompurify'
export const sanitizeHtml = (dirty) => DOMPurify.sanitize(dirty ?? '')