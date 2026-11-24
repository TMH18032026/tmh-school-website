import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../config/siteConfig'
import { sendEnquiry } from '../services/sendEmail'

const SCHOOL_NAME = site.name
const ADDRESS = site.address
const PHONE = site.phone
const EMAIL = site.email
const SOCIAL = {
  instagram: site.instagram,
  facebook: site.facebook,
  youtube: site.youtube,
  whatsapp: site.whatsappUrl,
}

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Public Disclosure', href: '/public-disclosure' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

const Icon = ({ children, className = 'h-5 w-5' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
)

const InstagramIcon = (p) => (
  <Icon {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </Icon>
)
const FacebookIcon = (p) => (
  <Icon {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </Icon>
)
const YoutubeIcon = (p) => (
  <Icon {...p}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </Icon>
)
const WhatsappIcon = (p) => (
  <Icon {...p}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </Icon>
)
const PhoneIcon = (p) => (
  <Icon {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Icon>
)
const MailIcon = (p) => (
  <Icon {...p}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </Icon>
)
const PinIcon = (p) => (
  <Icon {...p}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
)

const socialLinks = [
  { name: 'Instagram', href: SOCIAL.instagram, Icon: InstagramIcon, hover: 'hover:bg-pink-600' },
  { name: 'Facebook', href: SOCIAL.facebook, Icon: FacebookIcon, hover: 'hover:bg-blue-600' },
  { name: 'YouTube', href: SOCIAL.youtube, Icon: YoutubeIcon, hover: 'hover:bg-red-600' },
  { name: 'WhatsApp', href: SOCIAL.whatsapp, Icon: WhatsappIcon, hover: 'hover:bg-green-500' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email.trim() || sending) return
    setSending(true)
    setError('')
    try {
      await sendEnquiry({ Email: email, Type: 'Newsletter subscription' }, `Newsletter subscription - ${SCHOOL_NAME}`)
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    } catch (err) {
      setError(err.message)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <footer className="bg-blue-950 text-blue-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">{SCHOOL_NAME}</h3>
            <p className="text-sm leading-relaxed text-blue-200">
              {SCHOOL_NAME} is committed to providing a holistic education that empowers students to achieve academic
              excellence and personal growth.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.filter((s) => s.href).map(({ name, href, Icon: SocialIcon, hover }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${hover}`}
                >
                  <SocialIcon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-amber-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                <span>{ADDRESS}</span>
              </li>
              <li>
                <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="flex gap-3 transition hover:text-amber-400">
                  <PhoneIcon className="h-5 w-5 shrink-0 text-amber-400" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex gap-3 break-all transition hover:text-amber-400">
                  <MailIcon className="h-5 w-5 shrink-0 text-amber-400" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Newsletter</h3>
            <p className="mb-4 text-sm text-blue-200">Subscribe to our newsletter to get the latest updates and news.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="w-full rounded-md border border-blue-800 bg-blue-900 px-4 py-2.5 text-sm text-white placeholder-blue-300 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/40"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-md bg-amber-400 px-4 py-2.5 text-sm font-semibold text-blue-950 transition-all duration-300 hover:bg-amber-300 active:scale-95 disabled:opacity-60"
              >
                {sending ? 'Sending...' : 'Subscribe'}
              </button>
            </form>
            <p
              className={`mt-3 text-sm text-green-400 transition-all duration-500 ${
                subscribed ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'
              }`}
              role="status"
            >
              Thank you for subscribing!
            </p>
            {error && (
              <p className="mt-3 text-sm text-red-400" role="alert">
                {error}
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-blue-900 px-4 py-5 text-center text-sm text-blue-300">
          © {new Date().getFullYear()} {SCHOOL_NAME}. All Rights Reserved.
        </div>
      </footer>

      {/* Floating call + WhatsApp buttons (bottom right) */}
      <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-4 sm:right-6">
        <a
          href={`tel:${PHONE.replace(/\s/g, '')}`}
          aria-label="Call us"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg transition-transform duration-300 hover:scale-110"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-40" />
          <PhoneIcon className="relative h-6 w-6" />
        </a>
        <a
          href={SOCIAL.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex h-14 w-14 animate-bounce items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-300 hover:scale-110"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
          <WhatsappIcon className="relative h-7 w-7" />
        </a>
      </div>
    </>
  )
}
