import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { PageHero, Reveal } from '../components/ui'
import { Block, CardGrid, EmptyState } from '../components/blocks'
import { NEWS, UPCOMING_EVENTS, EVENT_TYPES } from '../data/activitiesData'

const CATEGORIES = ['All', ...new Set(NEWS.map((n) => n.category))]

export default function NewsEvents() {
  const [filter, setFilter] = useState('All')
  const items = filter === 'All' ? NEWS : NEWS.filter((n) => n.category === filter)

  return (
    <>
      <PageHero title="News & Events" text="Latest news, announcements and events from our school and hostel." />

      <Block id="news" title="Latest news and announcements" text="Admission notifications, notices and updates for parents and students.">
        {CATEGORIES.length > 2 && (
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${filter === c ? 'bg-blue-900 text-white shadow' : 'bg-slate-100 text-blue-950 hover:bg-amber-100'}`}
              >
                {c}
              </button>
            ))}
          </div>
        )}
        <ul className="mx-auto max-w-3xl space-y-4">
          {items.map((n, i) => (
            <Reveal key={n.title} delay={i * 80}>
              <li className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-amber-400 hover:shadow-lg">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">{n.category}</span>
                  {n.date && <span className="flex items-center gap-1 text-sm text-slate-500"><Icon name="calendar" className="h-4 w-4" />{n.date}</span>}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-blue-950">{n.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{n.text}</p>
                {n.to && (
                  <Link to={n.to} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-amber-600 transition-all hover:gap-3">
                    {n.cta || 'Read more'} <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                )}
              </li>
            </Reveal>
          ))}
        </ul>
      </Block>

      <Block id="upcoming" title="Upcoming events" tone="slate">
        {UPCOMING_EVENTS.length ? (
          <CardGrid items={UPCOMING_EVENTS.map((e) => ({ title: e.title, text: `${e.date ? e.date + ' – ' : ''}${e.text || ''}`, icon: 'calendar' }))} cols={3} />
        ) : (
          <EmptyState title="No upcoming events right now" text="New events and dates will be announced here." />
        )}
      </Block>

      <Block id="events" title="Our school events" text="Highlights of the school year that we celebrate and update regularly.">
        <CardGrid items={EVENT_TYPES} cols={4} />
        <div className="mt-10 text-center">
          <Link to="/gallery" className="inline-flex items-center gap-2 font-semibold text-amber-600 transition-all duration-300 hover:gap-4">
            See event photos <Icon name="arrow" className="h-5 w-5" />
          </Link>
        </div>
      </Block>
    </>
  )
}
