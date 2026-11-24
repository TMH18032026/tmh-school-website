import React from 'react'
import { site } from '../config/siteConfig'
import { Icon } from '../components/Icon'
import { FACILITY_DETAILS } from '../data/schoolData'
import { PageHero, Reveal, SectionTitle } from '../components/ui'

export default function Facilities() {
  return (
    <>
      <PageHero title="Facilities" text={`Spaces at ${site.name} designed for learning, play and safety.`} />
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle title="Everything your child needs" text="Good facilities help children learn better and feel happier at school." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITY_DETAILS.map((f, i) => (
            <Reveal key={f.name} delay={(i % 3) * 120}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-900 text-amber-400 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon name={f.icon} />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-blue-950">{f.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
