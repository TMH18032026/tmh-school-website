import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { PageHero } from '../components/ui'
import { AnchorNav, Block, CardGrid, EmptyState } from '../components/blocks'
import { STUDENT_CORNER, ACHIEVEMENT_LIST } from '../data/activitiesData'

const NAV = [
  { id: 'achievements', label: 'Achievements & Results' },
  { id: 'leadership', label: 'Council & Houses' },
  { id: 'learning', label: 'E-Learning' },
  { id: 'login', label: 'Student Login' },
]

export default function StudentCorner() {
  return (
    <>
      <PageHero title="Student Corner" text="A space for our students: achievements, leadership, learning resources and more." />
      <AnchorNav items={NAV} />

      <Block id="achievements" title="Achievements and results" text="We are proud of what our students accomplish.">
        <CardGrid items={STUDENT_CORNER.achievements} cols={4} />
        <div className="mt-12">
          {ACHIEVEMENT_LIST.length ? (
            <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
              {ACHIEVEMENT_LIST.map((a) => (
                <li key={a.title} className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-amber-600">{a.year}</p>
                  <p className="font-semibold text-blue-950">{a.title}</p>
                  <p className="text-sm text-slate-600">{a.detail}</p>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState title="Results and achievements will be posted here" text="Check back after the next examination or competition." />
          )}
        </div>
      </Block>

      <Block id="leadership" title="Student council and house system" text="Leadership and teamwork, learned by doing." tone="slate">
        <CardGrid items={STUDENT_CORNER.leadership} cols={3} />
      </Block>

      <Block id="learning" title="Learning resources" text="Support for study at home and at school.">
        <CardGrid items={STUDENT_CORNER.learning} cols={3} />
      </Block>

      <Block id="login" tone="blue">
        <div className="mx-auto max-w-2xl text-center text-white">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-blue-950">
            <Icon name="lock" />
          </span>
          <h2 className="mt-5 text-3xl font-bold">Student login</h2>
          <p className="mt-3 text-blue-200">A personal login for students to see homework, study material and results is coming soon.</p>
          <Link to="/student-login" className="mt-6 inline-block rounded-md bg-amber-400 px-6 py-3 font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300">
            Know more
          </Link>
        </div>
      </Block>
    </>
  )
}
