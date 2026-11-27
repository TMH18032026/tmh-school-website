import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../config/siteConfig'
import { Icon } from '../components/Icon'
import { Reveal, Counter, SectionTitle } from '../components/ui'
import EnquiryForm from '../components/EnquiryForm'
import { STATS, FEATURES, STAGES, FACILITIES, GALLERY } from '../data/schoolData'
import { MESSAGES } from '../data/aboutData'
import { NEWS, TESTIMONIALS } from '../data/activitiesData'
import { HOSTEL_PILLARS } from '../data/hostelData'
import { images } from '../config/images'

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
      {/* background photo (set in src/config/images.js) */}
      {images.hero && (
        <img src={images.hero} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25" onError={(e) => (e.currentTarget.style.display = 'none')} />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-blue-950/40" />
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
            {site.motto}.
          </h1>
          <p className={`mt-5 max-w-xl text-lg text-blue-100 ${enter('delay-300')}`}>
            “Building Knowledge, Character, Confidence and Leadership for a Better Tomorrow.”
          </p>
          <p className={`mt-3 font-semibold text-amber-300 ${enter('delay-300')}`}>Schooling with a Difference. Learning for Life.</p>
          <div className={`mt-8 flex flex-wrap gap-4 ${enter('delay-500')}`}>
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 rounded-md bg-amber-400 px-6 py-3 font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-lg"
            >
              Apply for admission
              <Icon name="arrow" className="h-5 w-5" />
            </Link>
            <Link
              to="/hostel"
              className="inline-flex items-center rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Hostel &amp; Residency
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
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-blue-800 to-blue-950 p-8 text-center text-white">
            {images.about && (
              <img src={images.about} alt={`${SCHOOL_NAME} campus`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
            )}
            <div className="relative">
              <p className="text-6xl font-extrabold tracking-wider text-amber-400 sm:text-7xl">{site.shortName}</p>
              <p className="mt-2 text-lg font-medium">International School</p>
              <p className="text-sm text-blue-200">{site.place}</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-600">Welcome to {SCHOOL_NAME}</p>
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
        <SectionTitle title={`Why choose ${SCHOOL_NAME}?`} text="Everything a child needs to learn well, feel safe and enjoy school." />
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

function Messages() {
  const items = [MESSAGES.director, MESSAGES.principal]
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <SectionTitle title="Messages from our leaders" text="A word of welcome to parents and students." />
      <div className="grid gap-8 lg:grid-cols-2">
        {items.map((m, i) => (
          <Reveal key={m.role} delay={i * 150}>
            <div className="h-full rounded-2xl border-l-4 border-amber-400 bg-slate-50 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">{m.role}’s message</p>
              <p className="mt-3 italic leading-relaxed text-slate-700">“{m.text[0]}”</p>
              <p className="mt-4 font-semibold text-blue-950">{m.name}</p>
              <p className="text-sm text-slate-500">{m.role}, {SCHOOL_NAME}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/about/leadership" className="inline-flex items-center gap-2 font-semibold text-amber-600 transition-all duration-300 hover:gap-4">
          Read full messages <Icon name="arrow" className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}

function HostelHighlight() {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">{site.hostelName}</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">A home away from home</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-amber-400" />
          <p className="mt-4 font-medium text-amber-300">{site.hostelTagline}</p>
          <p className="mt-3 text-blue-200">Choose day-school or residential admission, subject to hostel seat availability.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {HOSTEL_PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-400">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-blue-950">
                  <Icon name={p.icon} />
                </span>
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-blue-200">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/hostel" className="inline-flex items-center gap-2 rounded-md bg-amber-400 px-6 py-3 font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300">
            Explore the hostel <Icon name="arrow" className="h-5 w-5" />
          </Link>
          <Link to="/hostel#enquiry" className="rounded-md border border-white/40 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
            Hostel enquiry
          </Link>
        </div>
      </div>
    </section>
  )
}

function Announcements() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-4xl px-4">
        <SectionTitle title="Latest announcements" text="News and notices for parents and students." />
        <ul className="space-y-4">
          {NEWS.slice(0, 3).map((n, i) => (
            <Reveal key={n.title} delay={i * 100}>
              <li className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-amber-400 hover:shadow-lg">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-900 text-amber-400">
                  <Icon name="bell" />
                </span>
                <div>
                  <span className="rounded-full bg-amber-100 px-3 py-0.5 text-xs font-semibold text-amber-800">{n.category}</span>
                  <h3 className="mt-1 font-semibold text-blue-950">{n.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{n.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Link to="/news-events" className="inline-flex items-center gap-2 font-semibold text-amber-600 transition-all duration-300 hover:gap-4">
            All news &amp; events <Icon name="arrow" className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  if (!TESTIMONIALS.length) return null
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <SectionTitle title="What parents say" />
      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={i * 100}>
            <figure className="h-full rounded-2xl border border-slate-200 bg-white p-6">
              <blockquote className="italic text-slate-700">“{t.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-blue-950">{t.name}</figcaption>
            </figure>
          </Reveal>
        ))}
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
      <SectionTitle title="Life at our school" text="A glimpse of events, classrooms and celebrations." />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {GALLERY.map((g, i) => (
          <Reveal key={g.label} delay={(i % 3) * 100}>
            <Link
              to="/gallery"
              className={`group relative flex aspect-[4/3] items-end overflow-hidden rounded-2xl bg-gradient-to-br ${g.tone} p-4`}
            >
              {g.src && <img src={g.src} alt={g.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" onError={(e) => (e.currentTarget.style.display = 'none')} />}
              <span className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/30" />
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
          <p className="relative mx-auto mt-3 max-w-xl text-blue-950/80">Choose day-school or residential admission (subject to hostel availability). Visit the campus, meet our teachers and see how your child can learn and grow with us.</p>
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
      <Messages />
      <Features />
      <Academics />
      <HostelHighlight />
      <Facilities />
      <Announcements />
      <GalleryPreview />
      <Testimonials />
      <AdmissionCTA />
    </>
  )
}
