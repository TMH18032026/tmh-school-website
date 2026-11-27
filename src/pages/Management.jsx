import React from 'react'
import { site } from '../config/siteConfig'
import { PageHero, Reveal } from '../components/ui'
import { AnchorNav, Block, CardGrid, DataTable } from '../components/blocks'
import { MANAGEMENT, SMC, ADMIN_TEAM } from '../data/aboutData'

const initials = (name) => name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
const NAV = [
  { id: 'management', label: 'Our Management' },
  { id: 'smc', label: 'School Management Committee' },
  { id: 'administration', label: 'School Administration' },
]

export default function Management() {
  return (
    <>
      <PageHero title="Management & Committee" text={`The people who govern and administer ${site.name}.`} />
      <AnchorNav items={NAV} />
      <Block id="management" title="Our management" text="Guiding the vision and growth of the school.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MANAGEMENT.map((m, i) => (
            <Reveal key={m.role} delay={(i % 3) * 120}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-800 to-blue-950 text-3xl font-bold text-amber-400 ring-4 ring-amber-400/30">
                  {initials(m.name)}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-blue-950">{m.name}</h3>
                <p className="mt-1 text-sm font-semibold text-amber-600">{m.role}</p>
                <p className="mt-2 text-sm text-slate-600">{m.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Block>
      <Block id="smc" title="School Management Committee" text="Parents, teachers and management working together for the school." tone="slate">
        <DataTable head={SMC.head} rows={SMC.rows} />
      </Block>
      <Block id="administration" title="School administration" text="Offices that keep the school running smoothly.">
        <CardGrid items={ADMIN_TEAM} cols={4} />
      </Block>
    </>
  )
}
