import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../config/siteConfig'
import { Icon } from '../components/Icon'
import { Reveal, Counter, SectionTitle } from '../components/ui'
import EnquiryForm from '../components/EnquiryForm'
import { STATS, FEATURES, STAGES, FACILITIES, GALLERY } from '../data/schoolData'

const SCHOOL_NAME = site.name
const SESSION = site.session
const PHONE = site.phone

/* ---------- sections ---------- */

function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  const enter = (delay) =>
    `transition-all duration-700 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} ${delay}`

  return (
    <section className="relative overflow-hidden bg-blue-950 text-white">
      {/* decorative shapes */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-400/10" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-700/30" />
      <div className="pointer-events-none absolute right-1/3 top-1/2 h-40 w-40 animate-pulse rounded-full border-4 border-amber-400/20" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-28 pt-14 lg:grid-cols-2 lg:pb-36 lg:pt-20">
        <div>
          <span className={`inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-1.5 text-sm font-semibold text-blue-950 ${enter('')}`}>
            <span className="h-2 w-2 animate-ping rounded-full bg-blue-950" />
            Admissions open for {SESSION}
          </span>
          <h1 className={`mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl ${enter('delay-150')}`}>
            Where curiosity grows into confidence
          </h1>
          <p className={`mt-5 max-w-xl text-lg text-blue-100 ${enter('delay-300')}`}>
            {SCHOOL_NAME} gives children a caring place to learn, play and grow, with strong academics and good values.
          </p>
          <div className={`mt-8 flex flex-wrap gap-4 ${enter('delay-500')}`}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-amber-400 px-6 py-3 font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-lg"
            >
              Apply for admission
              <Icon name="arrow" className="h-5 w-5" />
            </Link>
            <Link
              to="/academics"
              className="inline-flex items-center rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Explore academics
            </Link>
          </div>
        </div>

        {/* Enquiry card */}
        <div className={`${enter('delay-700')} lg:justify-self-end`}>
          <EnquiryForm variant="card" source="Home page" />
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="relative z-10 -mt-14 px-4">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-amber-400/40 shadow-xl lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-white px-4 py-8 text-center">
            <p className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
              <Counter end={s.end} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-sm font-medium text-slate-600">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
      <Reveal>
        <div className="relative mx-auto max-w-md">
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border-4 border-amber-400" />
          <div className="relative flex aspect-[4/3] items-center justify-center rounded-3xl bg-gradient-to-br from-blue-800 to-blue-950 p-8 text-center text-white">
            <div>
              <p className="text-6xl font-extrabold tracking-wider text-amber-400 sm:text-7xl">{site.shortName}</p>
              <p className="mt-2 text-lg font-medium">International School</p>
              <p className="text-sm text-blue-200">{site.place}</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <h2 className="text-3xl font-bold text-blue-950 sm:text-4xl">Education that looks after the whole child</h2>
        <div className="mt-4 h-1 w-16 rounded-full bg-amber-400" />
        <p className="mt-5 text-slate-600">
          At {SCHOOL_NAME}, we believe every child can do well when they are taught with care. Our teachers work with students and
          parents together, so that learning continues at school and at home.
        </p>
        <ul className="mt-6 space-y-3">
          {['Child-friendly classrooms and activity-based learning', 'Regular parent–teacher communication', 'Focus on discipline, values and good habits'].map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-700">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400 text-blue-950">
                <Icon name="check" className="h-4 w-4" />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <Link
          to="/about/school"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-blue-900 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800"
        >
          More about our school
          <Icon name="arrow" className="h-5 w-5" />
        </Link>
      </Reveal>
    </section>
  )
}

function Features() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title="Why parents choose us" text="Everything a child needs to learn well, feel safe and enjoy school." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 120}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-900 text-amber-400 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon name={f.icon} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-blue-950">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Academics() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <SectionTitle title="Our academic journey" text="From the first day of school to the board exams, each stage is planned with care." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STAGES.map((s, i) => (
          <Reveal key={s.name} delay={i * 120}>
            <Link
              to="/academics"
              className="group relative block h-full overflow-hidden rounded-2xl bg-blue-950 p-6 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-amber-400 transition-transform duration-500 group-hover:scale-x-100" />
              <p className="text-sm font-medium text-amber-400">{s.range}</p>
              <h3 className="mt-2 text-2xl font-bold">{s.name}</h3>
              <p className="mt-3 text-sm text-blue-200">{s.text}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-amber-400 transition-all duration-300 group-hover:gap-3">
                Learn more <Icon name="arrow" className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Facilities() {
  return (
    <section className="bg-blue-950 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle light title="Campus facilities" text="Spaces designed for learning, play and safety." />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
          {FACILITIES.map((f, i) => (
            <Reveal key={f.name} delay={(i % 3) * 100}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-white/10">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-blue-950">
                  <Icon name={f.icon} />
                </span>
                <p className="mt-4 font-semibold text-white">{f.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/about/facilities" className="inline-flex items-center gap-2 font-semibold text-amber-400 transition-all duration-300 hover:gap-4">
            See all facilities <Icon name="arrow" className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function GalleryPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <SectionTitle title="Life at our school" text="A glimpse of events, classrooms and celebrations. Replace these tiles with real photos." />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {GALLERY.map((g, i) => (
          <Reveal key={g.label} delay={(i % 3) * 100}>
            <Link
              to="/gallery"
              className={`group relative flex aspect-[4/3] items-end overflow-hidden rounded-2xl bg-gradient-to-br ${g.tone} p-4`}
            >
              <span className="absolute inset-0 scale-100 bg-black/0 transition-all duration-500 group-hover:scale-110 group-hover:bg-black/20" />
              <span className="relative rounded-md bg-white/90 px-3 py-1 text-sm font-semibold text-blue-950 transition-transform duration-300 group-hover:-translate-y-1">
                {g.label}
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 rounded-md bg-blue-900 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800"
        >
          View full gallery <Icon name="arrow" className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}

function AdmissionCTA() {
  return (
    <section className="px-4 pb-20">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-amber-400 to-amber-500 p-8 text-center sm:p-12">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-blue-950/10" />
          <h2 className="relative text-3xl font-extrabold text-blue-950 sm:text-4xl">Admissions are open for {SESSION}</h2>
          <p className="relative mx-auto mt-3 max-w-xl text-blue-950/80">Visit the campus, meet our teachers and see how your child can learn and grow with us.</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-md bg-blue-950 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-900"
            >
              <Icon name="phone" className="h-5 w-5" />
              Call {PHONE}
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-white px-6 py-3 font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Features />
      <Academics />
      <Facilities />
      <GalleryPreview />
      <AdmissionCTA />
    </>
  )
}
