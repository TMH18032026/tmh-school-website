import { site } from '../config/siteConfig'

// Sends a message to the address in VITE_QUERY_EMAIL using FormSubmit (https://formsubmit.co).
// No backend or API key is needed. The FIRST time a message is sent, FormSubmit emails that
// address an activation link. Click it once and every later message arrives normally.
export async function sendEnquiry(fields, subject) {
  if (!site.queryEmail) {
    throw new Error('Email is not set up. Add VITE_QUERY_EMAIL in the .env file.')
  }

  let response
  try {
    response = await fetch(`https://formsubmit.co/ajax/${site.queryEmail}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...fields,
        // So you can press "Reply" in your inbox and answer the parent directly
        ...(fields.Email ? { _replyto: fields.Email } : {}),
        _subject: subject,
        _template: 'table',
        _captcha: 'false',
      }),
    })
  } catch {
    throw new Error('No internet connection. Please check and try again.')
  }

  const data = await response.json().catch(() => ({}))
  if (!response.ok || data.success === false || data.success === 'false') {
    throw new Error(data.message || 'Could not send your message. Please try again or call us.')
  }
  return data
}
