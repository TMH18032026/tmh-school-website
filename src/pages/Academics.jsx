import React from 'react'
import { Link } from 'react-router-dom'
import { site } from '../config/siteConfig'
import { STAGES } from '../data/schoolData'
import { PageHero, Reveal, SectionTitle } from '../components/ui'
import { AnchorNav, Sections, Block, CardGrid, Note } from '../components/blocks'
import { ACADEMIC_SECTIONS, FOUNDATION_PROGRAMMES } from '../data/academicsData'

const SUBJECTS = {
  'Pre-Primary': ['English', 'Hindi', 'Numbers', 'Rhymes & stories', 'Art & craft', 'Play activities'],
  Primary: ['English', 'Hindi', 'Mathematics', 'EVS', 'Computer', 'Drawing & games'],
  Middle: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'Sanskrit', 'Computer'],
  Secondary: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'IT'],
}

const STEPS = [
  { title: 'Enquire', text: 'Call us, send a message or visit the school office.' },
  { title: 'Visit the campus', text: 'Meet the teachers and see the classrooms.' },
  { title: 'Submit the form', text: 'Fill the admission form with the required documents.' },
  { title: 'Confirm admission', text: 'Complete the formalities and your child is ready to start.' },
]

const NAV = [
  { id: 'classes', label: 'Classes Offered' },
  { id: 'curriculum', label: 'Curriculum & Methods' },
  { id: 'assessment', label: 'Assessment' },
  { id: 'digital', label: 'Digital Learning' },
  { id: 'foundation', label: 'Competitive Preparation' },
  { id: 'admission', label: 'Admission' },
]

export default function Academics() {
  const offered = FOUNDATION_PROGRAMMES.filter((f) => f.offered).map((f) => ({ icon: 'target', title: f.title }))

  return (
    <>
      <PageHero kicker={`${site.shortName} Academics`} title="Academics" text={`How learning is planned at ${site.name}, from the first class to the board exams.`} />
      <AnchorNav items={NAV} />

      <section id="classes" className="mx-auto max-w-7xl scroll-mt-32 px-4 py-20">
        <SectionTitle title="Classes offered" text="Play Group to Class X. Each stage builds on the one before it." />
        <div className="grid gap-6 md:grid-cols-2">
          {STAGES.map((s, i) => (
            <Reveal key={s.name} delay={(i % 2) * 120}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl sm:p-8">
                <p className="text-sm font-semibold text-amber-600">{s.range}</p>
                <h3 className="mt-1 text-2xl font-bold text-blue-950">{s.name}</h3>
                <p className="mt-3 text-slate-600">{s.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(SUBJECTS[s.name] || []).map((sub) => (
                    <span key={sub} className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-900">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Sections sections={ACADEMIC_SECTIONS} />

      <Block id="foundation" title="Competitive examination preparation" text={`${site.shortName} Foundation Programme: early preparation for entrance and competitive examinations.`}>
        {offered.length ? (
          <CardGrid items={offered} cols={4} />
        ) : (
          <Note icon="phone">Ask the school office about our foundation and competitive-examination coaching for your child’s class.</Note>
        )}
      </Block>

      <section id="admission" className="scroll-mt-32 bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionTitle title="How to get admission" text={`Admissions are open for ${site.session}.`} />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((st, i) => (
              <Reveal key={st.title} delay={i * 120}>
                <li className="h-full list-none rounded-2xl bg-white p-6 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 font-bold text-amber-400">{i + 1}</span>
                  <h3 className="mt-4 text-lg font-semibold text-blue-950">{st.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{st.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <Link to="/admissions" className="inline-block rounded-md bg-amber-400 px-6 py-3 font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300">
              Apply for admission
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
