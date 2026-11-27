import React from 'react'
import { site } from '../config/siteConfig'
import { Icon } from '../components/Icon'
import EnquiryForm from '../components/EnquiryForm'
import { PageHero, Reveal } from '../components/ui'
import { Link } from 'react-router-dom'

const SOCIALS = [
  { name: 'Instagram', href: site.instagram, icon: 'instagram', hover: 'hover:bg-pink-600' },
  { name: 'Facebook', href: site.facebook, icon: 'facebook', hover: 'hover:bg-blue-600' },
  { name: 'YouTube', href: site.youtube, icon: 'youtube', hover: 'hover:bg-red-600' },
  { name: 'WhatsApp', href: site.whatsappUrl, icon: 'whatsapp', hover: 'hover:bg-green-500' },
].filter((s) => s.href)

const INFO = [
  { icon: 'pin', title: 'School address', text: site.address, href: site.mapsLink },
  { icon: 'home', title: 'Hostel address', text: site.hostelAddress, href: site.hostelMapsLink },
  { icon: 'phone', title: 'Call us', text: site.phone, href: site.phoneHref },
  { icon: 'mail', title: 'Email us', text: site.email, href: `mailto:${site.email}` },
  { icon: 'clock', title: 'Office working hours', text: site.officeHours },
].filter((i) => i.text)

export default function Contact() {
  return (
    <>
      <PageHero title="Contact Us" text="Questions about admission, fees or the school? Send us a message or call us." />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {INFO.map((c, i) => {
            const body = (
              <>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-900 text-amber-400">
                  <Icon name={c.icon} />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-blue-950">{c.title}</span>
                  <span className="block break-words text-sm text-slate-600">{c.text}</span>
                </span>
              </>
            )
            const cls = 'flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg'
            return (
              <Reveal key={c.title} delay={i * 100}>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={cls}>
                    {body}
                  </a>
                ) : (
                  <div className={cls}>{body}</div>
                )}
              </Reveal>
            )
          })}

          <Reveal delay={350}>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link to="/admissions#enquiry" className="rounded-xl bg-amber-400 px-4 py-3 text-center font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300">
                Admission enquiry
              </Link>
              <Link to="/hostel#enquiry" className="rounded-xl bg-blue-900 px-4 py-3 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800">
                Hostel enquiry
              </Link>
            </div>
          </Reveal>

          {SOCIALS.length > 0 && (
            <Reveal delay={400}>
              <p className="mb-3 mt-6 font-semibold text-blue-950">Follow us</p>
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className={`flex h-11 w-11 items-center justify-center rounded-full bg-blue-900 text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${s.hover}`}
                  >
                    <Icon name={s.icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </Reveal>
          )}
        </div>

        <Reveal delay={150} className="lg:col-span-3">
          <EnquiryForm variant="full" source="Contact page" />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        {site.mapEmbedUrl ? (
          <iframe
            title={`Map of ${site.name}`}
            src={site.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full rounded-2xl border-0 shadow-lg sm:h-96"
          />
        ) : (
          <div className="flex flex-col items-center rounded-2xl bg-slate-50 p-10 text-center">
            <Icon name="pin" className="h-10 w-10 text-amber-500" />
            <p className="mt-3 text-slate-600">{site.address}</p>
            <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="mt-5 rounded-md bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
              Open in Google Maps
            </a>
          </div>
        )}
      </section>
    </>
  )
}
