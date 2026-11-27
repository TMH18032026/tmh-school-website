import React, { useState } from 'react'
import { site } from '../config/siteConfig'
import { sendEnquiry } from '../services/sendEmail'
import { Icon } from './Icon'
import { HOSTEL } from '../data/hostelData'

const inputClass =
  'w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-blue-950 outline-none transition placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20'

export const CLASS_OPTIONS = ['Play Group', 'Nursery', 'LKG', 'UKG', 'Class I', 'Class II', 'Class III', 'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X']

// mode="admission": online admission enquiry (day school or residential)
// mode="hostel":    hostel enquiry (boys / girls hostel)
export default function AdmissionEnquiryForm({ mode = 'admission', source }) {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [error, setError] = useState('')
  const isHostel = mode === 'hostel'

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const d = Object.fromEntries(new FormData(form))
    if (d._honey) return

    setStatus('sending')
    setError('')

    const fields = {
      'Enquiry type': isHostel ? 'Hostel enquiry' : 'Admission enquiry',
      'Student name': d.student,
      'Class for admission': d.class,
      'Parent / guardian name': d.parent,
      Phone: d.phone,
      Email: d.email,
      [isHostel ? 'Hostel required' : 'Day school / residential']: d.choice,
      Message: d.message,
      'Sent from': source || (isHostel ? 'Hostel page' : 'Admissions page'),
    }
    Object.keys(fields).forEach((k) => !fields[k] && delete fields[k])

    try {
      await sendEnquiry(fields, `${isHostel ? 'Hostel' : 'Admission'} enquiry for ${d.student} - ${site.name}`)
      form.reset()
      setStatus('success')
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  const wrapper = 'mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8'

  if (status === 'success') {
    return (
      <div className={`${wrapper} flex flex-col items-center text-center`} role="status">
        <span className="flex h-16 w-16 animate-bounce items-center justify-center rounded-full bg-green-100 text-green-600">
          <Icon name="check" className="h-8 w-8" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-blue-950">Thank you for your enquiry!</h3>
        <p className="mt-2 text-sm text-slate-600">Our office will contact you soon with the next steps.</p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-5 rounded-md bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800">
          Send another enquiry
        </button>
      </div>
    )
  }

  const choices = isHostel
    ? ['Boys hostel', ...(HOSTEL.girlsOperational ? ['Girls hostel'] : [])]
    : ['Day school', 'Residential (hostel)', 'Not sure yet']

  return (
    <form onSubmit={onSubmit} className={wrapper}>
      <h3 className="text-xl font-bold text-blue-950">{isHostel ? 'Hostel enquiry form' : 'Online admission enquiry'}</h3>
      <p className="mt-1 text-sm text-slate-600">Fill in the details below and our office will get back to you.</p>

      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <input required name="student" type="text" placeholder="Student's name" className={inputClass} />
        <select required name="class" defaultValue="" className={inputClass}>
          <option value="" disabled>
            Class for admission
          </option>
          {CLASS_OPTIONS.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <input required name="parent" type="text" placeholder="Parent / guardian name" autoComplete="name" className={inputClass} />
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
        <input name="email" type="email" placeholder="Email address (optional)" autoComplete="email" className={inputClass} />
        <select required name="choice" defaultValue="" className={inputClass}>
          <option value="" disabled>
            {isHostel ? 'Hostel required' : 'Day school or residential?'}
          </option>
          {choices.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <textarea name="message" rows={3} placeholder="Anything you would like to ask (optional)" className={`${inputClass} sm:col-span-2`} />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-md bg-blue-900 px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-800 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
        >
          {status === 'sending' ? 'Sending...' : 'Submit enquiry'}
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
