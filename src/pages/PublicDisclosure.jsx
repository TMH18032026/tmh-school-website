import React from 'react'
import { site } from '../config/siteConfig'
import { Icon } from '../components/Icon'
import { DOCUMENTS, SCHOOL_INFO } from '../data/schoolData'
import { PageHero, Reveal, SectionTitle } from '../components/ui'

export default function PublicDisclosure() {
  const rows = [
    { label: 'Name of the school', value: site.name },
    { label: 'Address', value: site.address },
    { label: 'Phone', value: site.phone },
    { label: 'Email', value: site.email },
    ...SCHOOL_INFO,
  ]

  return (
    <>
      <PageHero title="Public Disclosure" text="Important school information and documents, available to everyone." />

      <section className="mx-auto max-w-5xl px-4 py-20">
        <SectionTitle title="General information" />
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[480px] text-left text-sm">
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.label} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
                    <th className="w-1/3 px-5 py-3.5 font-semibold text-blue-950">{r.label}</th>
                    <td className="px-5 py-3.5 text-slate-700">{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="mt-20">
          <SectionTitle title="Documents" text="Click a document to open or download it." />
          <div className="grid gap-4 sm:grid-cols-2">
            {DOCUMENTS.map((d, i) => (
              <Reveal key={d.file} delay={(i % 2) * 100}>
                <a
                  href={`/documents/${d.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-900 text-amber-400">
                    <Icon name="file" />
                  </span>
                  <span className="flex-1 font-medium text-blue-950">{d.title}</span>
                  <Icon name="download" className="h-5 w-5 text-slate-400 transition group-hover:translate-y-0.5 group-hover:text-amber-600" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
