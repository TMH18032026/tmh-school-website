import React, { useState } from 'react'
import { site } from '../config/siteConfig'
import { sendEnquiry } from '../services/sendEmail'
import { Icon } from './Icon'

const inputClass =
  'w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-blue-950 outline-none transition placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20'

const CLASSES = ['Play Group', 'Nursery', 'LKG', 'UKG', 'Class I – V', 'Class VI – VIII', 'Class IX – X']

// variant="card": short form for the home page hero (name, phone, class)
// variant="full": complete query form for the Contact page (adds email and message)
export default function EnquiryForm({ variant = 'full', source = 'Website' }) {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [error, setError] = useState('')
  const isCard = variant === 'card'

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    if (data._honey) return // spam bots fill this hidden field

    setStatus('sending')
    setError('')

    const fields = {
      Name: data.name,
      Phone: data.phone,
      Email: data.email,
      'Class for admission': data.class,
      Message: data.message,
      'Sent from': source,
    }
    Object.keys(fields).forEach((k) => !fields[k] && delete fields[k])

    try {
      await sendEnquiry(fields, `New enquiry from ${data.name} - ${site.name}`)
      form.reset()
      setStatus('success')
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  const wrapper = isCard
    ? 'w-full rounded-2xl bg-white p-6 text-blue-950 shadow-2xl sm:p-8 lg:w-96'
    : 'rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8'

  if (status === 'success') {
    return (
      <div className={`${wrapper} flex flex-col items-center text-center`} role="status">
        <span className="flex h-16 w-16 animate-bounce items-center justify-center rounded-full bg-green-100 text-green-600">
          <Icon name="check" className="h-8 w-8" />
        </span>
        <h2 className="mt-4 text-xl font-bold">Thank you!</h2>
        <p className="mt-2 text-sm text-slate-600">Your message has been sent. We will contact you soon.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-5 rounded-md bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className={wrapper}>
      <h2 className="text-xl font-bold">{isCard ? 'Quick admission enquiry' : 'Send us a message'}</h2>
      <p className="mt-1 text-sm text-slate-600">
        {isCard ? 'Leave your details and we will call you back.' : 'Ask about admissions, fees or anything else. We reply as soon as we can.'}
      </p>

      {/* hidden spam trap */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="mt-5 space-y-3">
        <input required name="name" type="text" placeholder="Your name" autoComplete="name" className={inputClass} />
        <input
          required
          name="phone"
          type="tel"
          inputMode="tel"
          placeholder="Phone number"
          autoComplete="tel"
          pattern="[0-9+\s\-]{10,15}"
          title="Enter a valid phone number (10 to 15 digits)"
          className={inputClass}
        />
        {!isCard && <input name="email" type="email" placeholder="Email address (optional)" autoComplete="email" className={inputClass} />}
        <select name="class" required={isCard} defaultValue="" className={inputClass}>
          <option value="" disabled={isCard}>
            {isCard ? 'Class for admission' : 'Class for admission (optional)'}
          </option>
          {CLASSES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        {!isCard && <textarea required name="message" rows={4} placeholder="Write your query here" className={inputClass} />}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full rounded-md bg-blue-900 px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-800 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending...' : isCard ? 'Request a call back' : 'Send message'}
        </button>
      </div>

      {status === 'error' && (
        <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
    </form>
  )
}
