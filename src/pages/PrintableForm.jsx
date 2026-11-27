import React from 'react'
import { site } from '../config/siteConfig'
import { Icon } from '../components/Icon'
import { FORM_SECTIONS, DOCUMENTS_REQUIRED } from '../data/admissionsData'
import { HOSTEL_DOCUMENTS } from '../data/hostelData'
import logo from '../assets/logo.jpg'

// Printable form: opens as a clean page; use Print > Save as PDF.
export default function PrintableForm({ mode = 'admission' }) {
  const isHostel = mode === 'hostel'
  const sections = FORM_SECTIONS[mode]
  const docs = isHostel ? HOSTEL_DOCUMENTS : DOCUMENTS_REQUIRED

  return (
    <div className="bg-slate-100 py-8 print:bg-white print:py-0">
      <div className="mx-auto mb-4 flex max-w-3xl items-center justify-between gap-4 px-4 print:hidden">
        <p className="text-sm text-slate-600">Click Print, then choose “Save as PDF” to download.</p>
        <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-md bg-blue-900 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-800">
          <Icon name="printer" className="h-5 w-5" /> Print / Save as PDF
        </button>
      </div>

      <div className="mx-auto max-w-3xl bg-white p-8 shadow print:max-w-none print:p-0 print:shadow-none">
        <header className="flex items-center gap-4 border-b-2 border-blue-950 pb-4">
          <img src={logo} alt="" className="h-16 w-16 object-contain" />
          <div className="flex-1 text-center">
            <h1 className="text-2xl font-extrabold uppercase text-blue-950">{site.name}</h1>
            <p className="text-sm text-slate-600">{site.address}</p>
            <p className="text-sm text-slate-600">{site.phone} | {site.email}</p>
          </div>
          <div className="flex h-24 w-20 items-center justify-center border border-dashed border-slate-400 text-center text-[10px] text-slate-500">Paste photo here</div>
        </header>

        <h2 className="mt-5 text-center text-xl font-bold text-blue-950">
          {isHostel ? `${site.hostelName.toUpperCase()}: ADMISSION FORM` : `ADMISSION FORM: SESSION ${site.session}`}
        </h2>

        {sections.map((s) => (
          <section key={s.title} className="mt-6 break-inside-avoid">
            <h3 className="bg-blue-950 px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-white print:bg-slate-200 print:text-black">{s.title}</h3>
            <div className="mt-2 grid gap-x-8 sm:grid-cols-2">
              {s.fields.map((f) => (
                <div key={f} className={`flex items-end gap-2 py-2 text-sm ${f.length > 40 ? 'sm:col-span-2' : ''}`}>
                  <span className="shrink-0 text-slate-700">{f}:</span>
                  <span className="h-5 flex-1 border-b border-slate-400" />
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-6 break-inside-avoid">
          <h3 className="bg-blue-950 px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-white print:bg-slate-200 print:text-black">Documents attached</h3>
          <ul className="mt-2 grid gap-x-8 gap-y-1 text-sm sm:grid-cols-2">
            {docs.slice(1).map((d) => (
              <li key={d} className="flex items-start gap-2"><span className="mt-1 inline-block h-3.5 w-3.5 shrink-0 border border-slate-500" />{d}</li>
            ))}
          </ul>
        </section>

        <section className="mt-6 break-inside-avoid">
          <h3 className="bg-blue-950 px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-white print:bg-slate-200 print:text-black">Declaration</h3>
          <p className="mt-2 text-sm text-slate-700">
            I declare that the information given above is true and correct. I agree to follow the rules and regulations of the school{isHostel ? ' and hostel' : ''}.
          </p>
          <div className="mt-10 flex justify-between text-sm text-slate-700">
            <span className="w-52 border-t border-slate-500 pt-1">Date and place</span>
            <span className="w-52 border-t border-slate-500 pt-1 text-right">Signature of parent / guardian</span>
          </div>
        </section>

        <p className="mt-8 border-t border-slate-300 pt-3 text-center text-xs text-slate-500">For office use only: Form no. ________ &nbsp; Date received ________ &nbsp; Received by ________</p>
      </div>
    </div>
  )
}
