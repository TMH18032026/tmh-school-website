import React from 'react'
import { Link } from 'react-router-dom'
import { site } from '../config/siteConfig'
import { Icon } from '../components/Icon'
import { PageHero, Reveal, SectionTitle } from '../components/ui'

const PILLARS = [
  { icon: 'eye', title: 'Our vision', text: 'To be a school where every child grows into a confident, kind and capable citizen.' },
  { icon: 'target', title: 'Our mission', text: 'To give quality education in a safe and caring place, with equal attention to studies, skills and character.' },
  { icon: 'heart', title: 'Our values', text: 'Respect, honesty, discipline, hard work and care for others guide everything we do.' },
]

const POINTS = [
  'Child-friendly classrooms and activity-based learning',
  'Regular tests and feedback so parents know how their child is doing',
  'Sports, art, music and events alongside academics',
  'A friendly, disciplined and safe school environment',
]

export default function AboutSchool() {
  return (
    <>
      <PageHero title="About School" text={`Know more about ${site.name}, ${site.place}.`} />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-bold text-blue-950 sm:text-4xl">A school that cares for every child</h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-amber-400" />
          <p className="mt-5 text-slate-600">
            {site.name} is committed to providing a complete education that helps students do well in studies and grow as
            good human beings. Our teachers know each child personally and work closely with parents.
          </p>
          <p className="mt-4 text-slate-600">
            We believe children learn best when they feel safe, respected and encouraged. That is why our classrooms are
            friendly, our lessons are practical, and our campus is a happy place to be.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <ul className="space-y-4 rounded-2xl bg-slate-50 p-6 sm:p-8">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400 text-blue-950">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="bg-blue-950 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle light title="What we stand for" />
          <div className="grid gap-6 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-blue-950">
                    <Icon name={p.icon} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-blue-200">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-blue-950 sm:text-3xl">Come and see our school</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">Meet our teachers and walk through the campus with us.</p>
        <Link to="/contact" className="mt-6 inline-block rounded-md bg-amber-400 px-6 py-3 font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300">
          Contact us
        </Link>
      </section>
    </>
  )
}
