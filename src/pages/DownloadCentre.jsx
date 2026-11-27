import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { PageHero, Reveal } from '../components/ui'
import { Block } from '../components/blocks'
import { DOWNLOAD_GROUPS } from '../data/schoolData'

export default function DownloadCentre() {
  return (
    <>
      <PageHero title="Download Centre" text="Forms, circulars, syllabus and notices in one place." />
      {DOWNLOAD_GROUPS.map((g, gi) => (
        <Block key={g.title} title={g.title} text={g.text} tone={gi % 2 ? 'slate' : 'white'}>
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
            {g.items.map((d, i) => {
              const inner = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-900 text-amber-400">
                    <Icon name={d.to ? 'printer' : 'file'} />
                  </span>
                  <span className="flex-1 font-medium text-blue-950">{d.title}</span>
                  <Icon name={d.to ? 'arrow' : 'download'} className="h-5 w-5 text-slate-400 transition group-hover:text-amber-600" />
                </>
              )
              const cls = 'group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg'
              return (
                <Reveal key={d.title} delay={(i % 2) * 100}>
                  {d.to ? (
                    <Link to={d.to} className={cls}>{inner}</Link>
                  ) : (
                    <a href={`/documents/${d.file}`} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
                  )}
                </Reveal>
              )
            })}
          </div>
        </Block>
      ))}
    </>
  )
}
