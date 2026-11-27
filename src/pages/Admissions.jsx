import React from 'react'
import { Link } from 'react-router-dom'
import { site } from '../config/siteConfig'
import { Icon } from '../components/Icon'
import { PageHero } from '../components/ui'
import { AnchorNav, Sections, DataTable, Steps, Faq } from '../components/blocks'
import AdmissionEnquiryForm from '../components/AdmissionEnquiryForm'
import {
  ELIGIBILITY,
  ADMISSION_STEPS,
  DOCUMENTS_REQUIRED,
  FEE_STRUCTURE,
  SCHOOL_RULES,
  WITHDRAWAL,
  ADMISSION_FAQS,
} from '../data/admissionsData'

const NAV = [
  { id: 'overview', label: 'Overview' },
  { id: 'open', label: `Admission ${site.session}` },
  { id: 'eligibility', label: 'Eligibility & Age' },
  { id: 'procedure', label: 'Procedure' },
  { id: 'documents', label: 'Documents' },
  { id: 'fees', label: 'Fees' },
  { id: 'rules', label: 'Rules' },
  { id: 'withdrawal', label: 'Transfer Certificate' },
  { id: 'enquiry', label: 'Enquiry' },
  { id: 'form', label: 'Download Form' },
  { id: 'faqs', label: 'FAQs' },
]

export default function Admissions() {
  const sections = [
    {
      id: 'overview',
      title: 'Admission overview',
      text: 'A simple, friendly process from the first enquiry to the first day of school.',
      cards: [
        { icon: 'sun', title: 'Day school', text: 'Children attend school and return home each day, with school transport on selected routes.' },
        { icon: 'bed', title: 'Residential (hostel)', text: 'Children live in our supervised hostel with study support, healthy food and care. Subject to hostel seat availability.', to: '/hostel', cta: 'About the hostel' },
        { icon: 'users', title: 'Play Group to Class X', text: 'Admissions for Pre-Primary, Primary, Middle and Secondary classes.' },
      ],
    },
    {
      id: 'open',
      tone: 'blue',
      render: () => (
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-1.5 text-sm font-semibold text-blue-950">
            <span className="h-2 w-2 animate-ping rounded-full bg-blue-950" /> Admission open
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">Admissions are open for {site.session}</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-amber-400" />
          <p className="mt-5 text-blue-100">
            Seats are limited, so we suggest enquiring early. Parents can choose day-school admission or residential admission, subject to the actual availability of hostel facilities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#enquiry" className="rounded-md bg-amber-400 px-6 py-3 font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300">
              Apply online
            </a>
            <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
              <Icon name="phone" className="h-5 w-5" /> Call {site.phone}
            </a>
          </div>
        </div>
      ),
    },
    {
      id: 'eligibility',
      title: 'Eligibility and age criteria',
      text: 'Admission is given class-wise according to the child’s age and previous class.',
      render: () => <DataTable head={ELIGIBILITY.head} rows={ELIGIBILITY.rows} />,
      note: `Age is counted as on 31 March ${site.sessionStartYear} (session ${site.session}). Please confirm the current age criteria with the school office.`,
    },
    {
      id: 'procedure',
      title: 'Admission procedure',
      tone: 'slate',
      render: () => <Steps items={ADMISSION_STEPS} />,
    },
    {
      id: 'documents',
      title: 'Documents required',
      text: 'Please keep these ready when you come for admission.',
      checks: DOCUMENTS_REQUIRED,
    },
    {
      id: 'fees',
      title: 'Fee structure',
      text: 'Fees are explained clearly at the time of admission.',
      tone: 'slate',
      render: () => <DataTable head={FEE_STRUCTURE.head} rows={FEE_STRUCTURE.rows} />,
      note: 'For hostel and mess charges, see the Hostel page. Online fee payment will be available soon.',
      cta: [
        { label: 'Hostel fees', to: '/hostel#admission' },
        { label: 'Online fee payment', to: '/fee-payment' },
      ],
    },
    {
      id: 'rules',
      title: 'School rules and regulations',
      text: 'Simple rules that help every child learn in a safe and respectful school.',
      checks: SCHOOL_RULES,
    },
    {
      id: 'withdrawal',
      title: 'Withdrawal and Transfer Certificate',
      text: 'If you need to move your child to another school, this is how it works.',
      tone: 'slate',
      render: () => (
        <div className="grid gap-6 sm:grid-cols-3">
          {WITHDRAWAL.map((w, i) => (
            <div key={w.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 font-bold text-amber-400">{i + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-blue-950">{w.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{w.text}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'enquiry',
      title: 'Online admission enquiry',
      text: 'Submit your details and our admission office will contact you.',
      render: () => <AdmissionEnquiryForm mode="admission" />,
    },
    {
      id: 'form',
      title: 'Download admission form',
      text: 'Print the form, fill it in and submit it at the school office with your documents.',
      tone: 'slate',
      render: () => (
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-900 text-amber-400">
            <Icon name="printer" />
          </span>
          <p className="text-slate-600">Open the printable form, then choose “Print” or “Save as PDF”.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/admissions/form" className="rounded-md bg-amber-400 px-6 py-3 font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300">
              Admission form
            </Link>
            <Link to="/hostel/form" className="rounded-md bg-blue-900 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800">
              Hostel admission form
            </Link>
          </div>
        </div>
      ),
    },
    {
      id: 'faqs',
      title: 'Frequently asked questions',
      render: () => <Faq items={ADMISSION_FAQS} />,
    },
  ]

  return (
    <>
      <PageHero title="Admissions" text={`Admissions for ${site.session}: day school and residential, Play Group to Class X.`} />
      <AnchorNav items={NAV} />
      <Sections sections={sections} />
    </>
  )
}
