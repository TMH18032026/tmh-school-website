import React from 'react'
import { Link } from 'react-router-dom'
import { site } from '../config/siteConfig'
import { Icon } from '../components/Icon'
import { PageHero } from '../components/ui'
import { Block, CardGrid } from '../components/blocks'

const PAGES = {
  'parent-portal': {
    title: 'Parent Portal',
    text: 'A single place for parents to follow their child’s school life.',
    icon: 'users',
    features: [
      { icon: 'check', title: 'Attendance', text: 'Daily and monthly attendance of your child.' },
      { icon: 'book', title: 'Homework', text: 'Homework and class updates from teachers.' },
      { icon: 'award', title: 'Results', text: 'Test and examination results and progress reports.' },
      { icon: 'card', title: 'Fee details', text: 'Fee status, receipts and due dates.' },
    ],
  },
  'fee-payment': {
    title: 'Online Fee Payment',
    text: 'Pay school and hostel fees online, safely and quickly.',
    icon: 'card',
    features: [
      { icon: 'card', title: 'Pay from home', text: 'Pay fees by UPI, card or net banking.' },
      { icon: 'file', title: 'Instant receipt', text: 'Download your receipt right after payment.' },
      { icon: 'bell', title: 'Due reminders', text: 'Get reminders before the due date.' },
    ],
  },
  'student-login': {
    title: 'Student Login',
    text: 'A personal login for students to study and track their progress.',
    icon: 'lock',
    features: [
      { icon: 'book', title: 'Study material', text: 'Notes, worksheets and practice papers.' },
      { icon: 'clipboard', title: 'Homework', text: 'See and submit homework.' },
      { icon: 'award', title: 'Results', text: 'View marks and progress.' },
    ],
  },
}

export default function ComingSoon({ slug }) {
  const p = PAGES[slug]
  return (
    <>
      <PageHero title={p.title} text={p.text} />
      <Block>
        <div className="mx-auto max-w-2xl text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-900 text-amber-400">
            <Icon name={p.icon} className="h-8 w-8" />
          </span>
          <span className="mt-5 inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-800">Coming soon</span>
          <h2 className="mt-4 text-3xl font-bold text-blue-950">This facility is being prepared</h2>
          <p className="mt-3 text-slate-600">
            We are working to bring this service online. Until then, please contact the school office for any help.
          </p>
        </div>
        <div className="mt-12">
          <CardGrid items={p.features} cols={p.features.length === 4 ? 4 : 3} />
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-md bg-amber-400 px-6 py-3 font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300">
            <Icon name="phone" className="h-5 w-5" /> Call {site.phone}
          </a>
          <Link to="/contact" className="rounded-md bg-blue-900 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800">
            Contact us
          </Link>
        </div>
      </Block>
    </>
  )
}
