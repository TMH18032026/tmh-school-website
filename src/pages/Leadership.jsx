import React from 'react'
import { site } from '../config/siteConfig'
import { PageHero, Reveal } from '../components/ui'
import { Block } from '../components/blocks'
import { MESSAGES } from '../data/aboutData'

const initials = (name) => name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()

export function MessageCard({ m, flip = false }) {
  return (
    <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-3">
      <Reveal className={flip ? 'lg:order-2' : ''}>
        <div className="mx-auto w-56">
          {m.photo ? (
            <img src={m.photo} alt={m.name} className="aspect-square w-full rounded-3xl object-cover ring-4 ring-amber-400/40" />
          ) : (
            <div className="flex aspect-square w-full items-center justify-center rounded-3xl bg-gradient-to-br from-blue-800 to-blue-950 text-6xl font-bold text-amber-400 ring-4 ring-amber-400/40">
              {initials(m.name)}
            </div>
          )}
          <p className="mt-4 text-center text-lg font-semibold text-blue-950">{m.name}</p>
          <p className="text-center text-sm font-semibold text-amber-600">{m.role}</p>
        </div>
      </Reveal>
      <Reveal delay={150} className="lg:col-span-2">
        <div className="relative rounded-2xl border-l-4 border-amber-400 bg-slate-50 p-6 sm:p-8">
          <span aria-hidden="true" className="absolute -top-4 left-6 text-6xl leading-none text-amber-400">“</span>
          {m.text.map((t) => (
            <p key={t} className="mt-3 text-slate-700 first:mt-2">{t}</p>
          ))}
        </div>
      </Reveal>
    </div>
  )
}

export default function Leadership() {
  return (
    <>
      <PageHero title="Director & Principal Messages" text={`Words of welcome from the leaders of ${site.name}.`} />
      <Block id="director" title="Message from the Director">
        <MessageCard m={MESSAGES.director} />
      </Block>
      <Block id="principal" title="Message from the Principal" tone="slate">
        <MessageCard m={MESSAGES.principal} flip />
      </Block>
    </>
  )
}
