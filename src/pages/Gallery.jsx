import React, { useEffect, useState } from 'react'
import { site } from '../config/siteConfig'
import { Icon } from '../components/Icon'
import { GALLERY_ITEMS } from '../data/schoolData'
import { PageHero, Reveal } from '../components/ui'

const CATEGORIES = ['All', ...new Set(GALLERY_ITEMS.map((g) => g.category))]

function Tile({ item, className = '' }) {
  if (item.src) {
    return <img src={item.src} alt={item.label} loading="lazy" className={`object-cover ${className}`} />
  }
  return <div className={`bg-gradient-to-br ${item.tone} ${className}`} role="img" aria-label={item.label} />
}

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null) // index of the open photo

  const items = filter === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === filter)

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((a) => (a + 1) % items.length)
      if (e.key === 'ArrowLeft') setActive((a) => (a - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, items.length])

  const current = active !== null ? items[active] : null

  return (
    <>
      <PageHero title="Gallery" text={`Moments from school life at ${site.name}.`} />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                filter === c ? 'bg-blue-900 text-white shadow' : 'bg-slate-100 text-blue-950 hover:bg-amber-100'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={(i % 4) * 80}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block aspect-square w-full overflow-hidden rounded-2xl"
                aria-label={`Open ${item.label}`}
              >
                <Tile item={item} className="h-full w-full transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left text-sm font-semibold text-white">
                  {item.label}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {current && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button type="button" onClick={() => setActive(null)} aria-label="Close" className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20">
            <Icon name="x" className="h-7 w-7" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setActive((active - 1 + items.length) % items.length)
            }}
            aria-label="Previous photo"
            className="absolute left-2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:left-6"
          >
            <Icon name="left" className="h-7 w-7" />
          </button>
          <figure className="w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <Tile item={current} className="aspect-[4/3] w-full rounded-2xl" />
            <figcaption className="mt-3 text-center text-white">
              {current.label} <span className="text-white/60">({active + 1}/{items.length})</span>
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setActive((active + 1) % items.length)
            }}
            aria-label="Next photo"
            className="absolute right-2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:right-6"
          >
            <Icon name="right" className="h-7 w-7" />
          </button>
        </div>
      )}
    </>
  )
}
