import React from 'react'
import { Link } from 'react-router-dom'
import { site } from '../config/siteConfig'
import { FACULTY } from '../data/schoolData'
import { PageHero, Reveal, SectionTitle } from '../components/ui'

const initials = (name) =>
  name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

export default function Faculty() {
  return (
    <>
      <PageHero title="Faculty & Staff" text={`The teachers and staff who guide the students of ${site.name}.`} />
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle title="Our leadership team" text="Experienced, caring teachers who bring out the best in every child." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FACULTY.map((f, i) => (
            <Reveal key={f.role} delay={(i % 3) * 120}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-800 to-blue-950 text-3xl font-bold text-amber-400 ring-4 ring-amber-400/30 transition-transform duration-300 group-hover:scale-105">
                  {initials(f.name)}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-blue-950">{f.name}</h3>
                <p className="mt-1 text-sm font-semibold text-amber-600">{f.role}</p>
                <p className="mt-2 text-sm text-slate-600">{f.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-20">
          <SectionTitle title="Teaching and non-teaching staff" text="Our full staff list with qualifications is available in Public Disclosure." />
          <div className="text-center">
            <Link to="/public-disclosure" className="inline-block rounded-md bg-blue-900 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800">
              View staff list
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
