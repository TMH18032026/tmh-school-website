import React, { useState } from 'react'
import { site } from '../config/siteConfig'
import { sendEnquiry } from '../services/sendEmail'
import { Icon } from '../components/Icon'
import { PageHero } from '../components/ui'
import { Block, Steps } from '../components/blocks'

const inputClass =
  'w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-blue-950 outline-none transition placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20'

const STEPS = [
  { title: 'Submit', text: 'Send your complaint using the form below, by phone or at the school office.' },
  { title: 'Acknowledged', text: 'The school office records your complaint and confirms it has been received.' },
  { title: 'Reviewed', text: 'The Principal looks into the matter and speaks with everyone concerned.' },
  { title: 'Resolved', text: 'You are informed of the decision and the action taken.' },
]

export default function Grievance() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const d = Object.fromEntries(new FormData(form))
    if (d._honey) return
    setStatus('sending')
    setError('')
    const fields = { 'Complaint from': d.role, Name: d.name, Phone: d.phone, Email: d.email, Subject: d.subject, Details: d.details, 'Sent from': 'Grievance page' }
    Object.keys(fields).forEach((k) => !fields[k] && delete fields[k])
    try {
      await sendEnquiry(fields, `Grievance: ${d.subject} - ${site.name}`)
      form.reset()
      setStatus('success')
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  return (
    <>
      <PageHero title="Grievance Redressal" text="Parents and students can raise a complaint or concern here. We listen and act." />
      <Block title="How we handle your concern" text="Every grievance is treated seriously, confidentially and fairly." tone="slate">
        <Steps items={STEPS} />
      </Block>
      <Block title="Submit a grievance">
        {status === 'success' ? (
          <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg" role="status">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Icon name="check" className="h-8 w-8" />
            </span>
            <h3 className="mt-4 text-xl font-bold text-blue-950">Your grievance has been sent</h3>
            <p className="mt-2 text-sm text-slate-600">We will review it and get back to you soon.</p>
            <button type="button" onClick={() => setStatus('idle')} className="mt-5 rounded-md bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800">
              Submit another
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="grid gap-3 sm:grid-cols-2">
              <select required name="role" defaultValue="" className={inputClass}>
                <option value="" disabled>I am a</option>
                <option>Parent</option>
                <option>Student</option>
                <option>Other</option>
              </select>
              <input required name="name" type="text" placeholder="Your name" autoComplete="name" className={inputClass} />
              <input required name="phone" type="tel" inputMode="tel" placeholder="Phone number" pattern="[0-9+\s\-]{10,15}" title="Enter a valid phone number (10 to 15 digits)" className={inputClass} />
              <input name="email" type="email" placeholder="Email address (optional)" className={inputClass} />
              <input required name="subject" type="text" placeholder="Subject" className={`${inputClass} sm:col-span-2`} />
              <textarea required name="details" rows={5} placeholder="Describe your concern" className={`${inputClass} sm:col-span-2`} />
              <button type="submit" disabled={status === 'sending'} className="rounded-md bg-blue-900 px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-800 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2">
                {status === 'sending' ? 'Sending...' : 'Submit grievance'}
              </button>
            </div>
            {status === 'error' && <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">{error}</p>}
          </form>
        )}
      </Block>
    </>
  )
}
