import React from 'react'
import { site } from '../config/siteConfig'
import { PageHero } from '../components/ui'
import { Icon } from '../components/Icon'
import { POLICIES } from '../data/policiesData'

export default function PolicyPage({ slug }) {
  const policy = POLICIES[slug]
  return (
    <>
      <PageHero title={policy.title} text={policy.text} />
      <article className="mx-auto max-w-3xl px-4 py-16">
        {policy.sections.map((s) => (
          <section key={s.h} className="mb-10">
            <h2 className="text-2xl font-bold text-blue-950">{s.h}</h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-amber-400" />
            {s.p && s.p.map((t) => <p key={t} className="mt-4 text-slate-600">{t}</p>)}
            {s.list && (
              <ul className="mt-4 space-y-2">
                {s.list.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400 text-blue-950">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <p className="border-t border-slate-200 pt-6 text-sm text-slate-500">
          {site.name}, {site.place}. Questions? Email <a className="text-blue-800 underline" href={`mailto:${site.email}`}>{site.email}</a> or call {site.phone}.
        </p>
      </article>
    </>
  )
}
