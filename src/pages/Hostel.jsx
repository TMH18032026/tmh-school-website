import React from 'react'
import { Link } from 'react-router-dom'
import { site } from '../config/siteConfig'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/ui'
import { AnchorNav, Sections, DataTable, Checks, CardGrid, Block, Note } from '../components/blocks'
import AdmissionEnquiryForm from '../components/AdmissionEnquiryForm'
import { MESSAGES } from '../data/aboutData'
import { images } from '../config/images'
import {
  HOSTEL_PILLARS,
  HOSTEL_SECTIONS,
  HOSTEL_FEES,
  HOSTEL_DOCUMENTS,
  PARENT_COMMUNICATION,
} from '../data/hostelData'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'living', label: 'Facilities & Rooms' },
  { id: 'mess', label: 'Mess & Diet' },
  { id: 'routine', label: 'Routine & Study' },
  { id: 'safety', label: 'Safety & Health' },
  { id: 'recreation', label: 'Recreation' },
  { id: 'rules', label: 'Rules' },
  { id: 'admission', label: 'Admission & Fees' },
  { id: 'parents', label: 'Parent Communication' },
  { id: 'enquiry', label: 'Enquiry' },
]

function HostelHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-400/10" />
      <div className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-blue-700/30" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <nav className="text-sm text-blue-200" aria-label="Breadcrumb">
          <Link to="/" className="transition hover:text-amber-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-amber-400">Hostel &amp; Residential Life</span>
        </nav>
        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-amber-400">{site.shortName} Hostel &amp; Residency</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">A home that learns, lives and grows together</h1>
        <p className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-lg font-medium text-amber-300">
          {site.hostelTagline.split('|').map((t, i) => (
            <span key={t} className="flex items-center gap-3">
              {i > 0 && <span className="text-amber-400/50">|</span>}
              {t.trim()}
            </span>
          ))}
        </p>
        <p className="mt-5 max-w-2xl text-blue-100">
          More than accommodation and food: a structured residential learning environment with academic guidance, discipline, healthy food, supervision and opportunities for personal development.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#enquiry" className="inline-flex items-center gap-2 rounded-md bg-amber-400 px-6 py-3 font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300">
            Hostel enquiry <Icon name="arrow" className="h-5 w-5" />
          </a>
          <a href="#admission" className="inline-flex items-center rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
            Admission &amp; fees
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Hostel() {
  const m = MESSAGES.director

  const sections = HOSTEL_SECTIONS.map((s) => {
    if (s.id !== 'admission') return s
    return {
      ...s,
      render: () => (
        <div className="mt-12 space-y-12">
          <div>
            <h3 className="mb-5 text-center text-xl font-bold text-blue-950">Hostel fee structure</h3>
            <DataTable head={HOSTEL_FEES.head} rows={HOSTEL_FEES.rows} />
          </div>
          <div>
            <h3 className="mb-5 text-center text-xl font-bold text-blue-950">Documents required</h3>
            <Checks items={HOSTEL_DOCUMENTS} />
          </div>
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-4">
            <Link to="/hostel/form" className="inline-flex items-center gap-2 rounded-md bg-amber-400 px-6 py-3 font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300">
              <Icon name="printer" className="h-5 w-5" /> Hostel admission form
            </Link>
            <Link to="/admissions" className="rounded-md bg-blue-900 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800">
              School admission
            </Link>
          </div>
        </div>
      ),
    }
  })

  const before = sections.filter((s) => ['living', 'mess', 'routine', 'safety', 'recreation', 'rules'].includes(s.id))
  const after = sections.filter((s) => s.id === 'admission')

  return (
    <>
      <HostelHero />
      <AnchorNav items={NAV} />

      <Block id="about" title="About our hostel" text="Safe living, quality education and holistic development under one roof.">
        <div className="mx-auto mb-12 grid max-w-5xl items-start gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <p className="text-slate-600">
              {site.hostelName} is the residential wing of {site.name}. Students who live here study in our school, follow a disciplined daily routine, get supervised study time and evening academic support, and enjoy healthy meals, sports and festivals in a caring environment.
            </p>
            <p className="mt-4 text-slate-600">
              Parents can choose day-school admission as well as residential admission, subject to the actual availability of hostel facilities.
            </p>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-2">
            <figure className="rounded-2xl border-l-4 border-amber-400 bg-slate-50 p-6">
              <figcaption className="text-xs font-semibold uppercase tracking-wide text-amber-600">Director’s message: Hostel</figcaption>
              <blockquote className="mt-3 text-sm italic leading-relaxed text-slate-700">“{m.text[1]}”</blockquote>
              <p className="mt-3 text-sm font-semibold text-blue-950">{m.name}, {m.role}</p>
            </figure>
          </Reveal>
        </div>
        {images.hostel && (
          <Reveal>
            <img src={images.hostel} alt={`${site.hostelName}`} loading="lazy" className="mx-auto mb-12 aspect-[16/7] w-full max-w-5xl rounded-3xl object-cover shadow-lg" onError={(e) => (e.currentTarget.style.display = 'none')} />
          </Reveal>
        )}
        <CardGrid items={HOSTEL_PILLARS} cols={3} />
      </Block>

      <Sections sections={before} />
      <Sections sections={after} />

      <Block id="parents" title="Parent communication system" text="Staying connected with your child and with us." tone="blue">
        <CardGrid items={PARENT_COMMUNICATION} cols={4} dark />
      </Block>

      <Block id="gallery" title="Hostel photo gallery" text="A look at rooms, mess, celebrations and everyday hostel life.">
        <div className="text-center">
          <Link to="/gallery" className="inline-flex items-center gap-2 rounded-md bg-blue-900 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800">
            View hostel photos <Icon name="arrow" className="h-5 w-5" />
          </Link>
        </div>
      </Block>

      <Block id="enquiry" title="Hostel enquiry form" text="Tell us about your child and we will call you back." tone="slate">
        <AdmissionEnquiryForm mode="hostel" />
        <Note icon="pin">Hostel address: <a href={site.hostelMapsLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-600">{site.hostelAddress}</a></Note>
      </Block>
    </>
  )
}
