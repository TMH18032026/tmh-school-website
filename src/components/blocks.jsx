import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from './Icon'
import { Reveal, SectionTitle } from './ui'

// Reusable page building blocks. Pages describe their content as data
// (see src/data/*) and these components turn it into consistent sections.

const TONES = { white: 'bg-white', slate: 'bg-slate-50', blue: 'bg-blue-950' }

const isBlank = (v) => v === undefined || v === null || v === '' || v === '—'

// Shows "To be updated" for any value still left as "—" in the data files
export function Val({ v }) {
  return isBlank(v) ? <span className="italic text-slate-400">To be updated</span> : <>{v}</>
}

export function Block({ id, title, text, tone = 'white', width = 'max-w-7xl', children }) {
  return (
    <section id={id} className={`${TONES[tone]} scroll-mt-32 py-16 sm:py-20`}>
      <div className={`mx-auto ${width} px-4`}>
        {title && <SectionTitle title={title} text={text} light={tone === 'blue'} />}
        {children}
      </div>
    </section>
  )
}

// Sticky row of "jump to" chips shown under the page banner
export function AnchorNav({ items }) {
  return (
    <nav className="sticky top-[68px] z-30 border-b border-slate-200 bg-white/95 backdrop-blur print:hidden" aria-label="On this page">
      <div className="mx-auto max-w-7xl overflow-x-auto px-4">
        <ul className="flex gap-1 whitespace-nowrap py-2">
          {items.map((i) => (
            <li key={i.id}>
              <a href={`#${i.id}`} className="inline-block rounded-full px-4 py-1.5 text-sm font-medium text-blue-950 transition hover:bg-amber-100">
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export function Prose({ paras, dark = false }) {
  return (
    <div className={`mx-auto max-w-3xl space-y-4 text-center sm:text-left ${dark ? 'text-blue-100' : 'text-slate-600'}`}>
      {paras.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  )
}

export function CardGrid({ items, cols = 3, dark = false }) {
  const grid = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-2 lg:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }[cols]
  return (
    <div className={`grid gap-6 ${grid}`}>
      {items.map((it, i) => (
        <Reveal key={`${it.title}-${i}`} delay={(i % cols) * 100}>
          <div
            className={`group relative h-full rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl ${
              dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'
            }`}
          >
            {it.badge && (
              <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">{it.badge}</span>
            )}
            {it.icon && (
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 ${
                  dark ? 'bg-amber-400 text-blue-950' : 'bg-blue-900 text-amber-400'
                }`}
              >
                <Icon name={it.icon} />
              </span>
            )}
            <h3 className={`text-xl font-semibold ${it.icon ? 'mt-5' : ''} ${dark ? 'text-white' : 'text-blue-950'}`}>{it.title}</h3>
            {it.text && <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-blue-200' : 'text-slate-600'}`}>{it.text}</p>}
            {it.points && (
              <ul className="mt-3 space-y-1.5">
                {it.points.map((p) => (
                  <li key={p} className={`flex items-start gap-2 text-sm ${dark ? 'text-blue-100' : 'text-slate-700'}`}>
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    {p}
                  </li>
                ))}
              </ul>
            )}
            {it.to && (
              <Link to={it.to} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-600 transition-all hover:gap-3">
                {it.cta || 'Learn more'} <Icon name="arrow" className="h-4 w-4" />
              </Link>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function Checks({ items, cols = 2 }) {
  return (
    <ul className={`mx-auto grid max-w-5xl gap-x-10 gap-y-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 ${cols === 2 ? 'sm:grid-cols-2' : ''}`}>
      {items.map((p) => (
        <li key={p} className="flex items-start gap-3 text-slate-700">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400 text-blue-950">
            <Icon name="check" className="h-4 w-4" />
          </span>
          {p}
        </li>
      ))}
    </ul>
  )
}

export function DataTable({ head, rows }) {
  return (
    <Reveal>
      <div className="mx-auto max-w-4xl overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full min-w-[460px] text-left text-sm">
          {head && (
            <thead className="bg-blue-950 text-white">
              <tr>
                {head.map((h) => (
                  <th key={h} className="px-5 py-3.5 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
                {r.map((c, j) => (
                  <td key={j} className={`px-5 py-3.5 ${j === 0 ? 'font-semibold text-blue-950' : 'text-slate-700'}`}>
                    <Val v={c} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  )
}

export function Steps({ items }) {
  return (
    <ol className={`grid gap-6 sm:grid-cols-2 ${items.length % 3 === 0 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
      {items.map((st, i) => (
        <Reveal key={st.title} delay={(i % 4) * 100}>
          <li className="h-full list-none rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 font-bold text-amber-400">{i + 1}</span>
            <h3 className="mt-4 text-lg font-semibold text-blue-950">{st.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{st.text}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  )
}

export function Faq({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-blue-950"
            >
              {f.q}
              <Icon name="chevron" className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-600' : ''}`} />
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function Note({ children, icon = 'bulb' }) {
  return (
    <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-blue-950">
      <Icon name={icon} className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
      <div>{children}</div>
    </div>
  )
}

export function EmptyState({ title, text }) {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border-2 border-dashed border-slate-300 bg-white p-8 text-center">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
        <Icon name="clock" />
      </span>
      <h3 className="mt-4 font-semibold text-blue-950">{title}</h3>
      {text && <p className="mt-1 text-sm text-slate-500">{text}</p>}
    </div>
  )
}

export function CtaButtons({ items }) {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      {items.map((b, i) => (
        <Link
          key={b.label}
          to={b.to}
          className={`inline-flex items-center gap-2 rounded-md px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
            i === 0 ? 'bg-amber-400 text-blue-950 hover:bg-amber-300' : 'bg-blue-900 text-white hover:bg-blue-800'
          }`}
        >
          {b.label}
        </Link>
      ))}
    </div>
  )
}

// Renders a list of section descriptions. Each section may contain any of:
// paras, cards, checks, table, steps, faq, note, render()
export function Sections({ sections }) {
  return (
    <>
      {sections.map((s) => (
        <Block key={s.id} id={s.id} title={s.title} text={s.text} tone={s.tone} width={s.width}>
          {s.paras && <Prose paras={s.paras} dark={s.tone === 'blue'} />}
          {s.cards && (
            <div className={s.paras ? 'mt-10' : ''}>
              <CardGrid items={s.cards} cols={s.cols} dark={s.tone === 'blue'} />
            </div>
          )}
          {s.checks && <Checks items={s.checks} cols={s.checkCols} />}
          {s.table && <DataTable head={s.table.head} rows={s.table.rows} />}
          {s.steps && <Steps items={s.steps} />}
          {s.faq && <Faq items={s.faq} />}
          {s.render && s.render()}
          {s.note && <Note>{s.note}</Note>}
          {s.cta && <CtaButtons items={s.cta} />}
        </Block>
      ))}
    </>
  )
}
