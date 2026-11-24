import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../config/siteConfig'
import logo from '../assets/logo.jpg'

const SCHOOL_NAME = site.name
const SCHOOL_PLACE = site.place
const PHONE = site.phone
const EMAIL = site.email

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'About School', href: '/about/school' },
      { label: 'Faculty', href: '/about/faculty' },
      { label: 'Facilities', href: '/about/facilities' },
    ],
  },
  { label: 'Academics', href: '/academics' },
  { label: 'Public Disclosure', href: '/public-disclosure' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
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

const ChevronDown = ({ className }) => (
  <Icon className={className}>
    <polyline points="6 9 12 15 18 9" />
  </Icon>
)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openSub, setOpenSub] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    setOpenSub(null)
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top info bar */}
      <div
        className={`hidden bg-blue-950 text-blue-100 transition-all duration-300 md:block ${scrolled ? 'max-h-0 overflow-hidden opacity-0' : 'max-h-12 opacity-100'
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <p className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-amber-400">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </Icon>
            {SCHOOL_PLACE}
          </p>
          <div className="flex items-center gap-6">
            <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="flex items-center gap-2 transition hover:text-amber-400">
              <Icon className="h-4 w-4 text-amber-400">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </Icon>
              {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 transition hover:text-amber-400">
              <Icon className="h-4 w-4 text-amber-400">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </Icon>
              {EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className={`bg-white transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Logo / name */}
          {/* <Link to="/" className="group flex items-center gap-3" onClick={closeMenu}>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-lg font-bold text-amber-400 transition-transform duration-500 group-hover:rotate-[360deg]">
              {SCHOOL_NAME.charAt(0)}
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-bold text-blue-950 sm:text-xl">{SCHOOL_NAME}</span>
              <span className="block text-xs font-medium text-amber-600 sm:text-sm">{SCHOOL_PLACE}</span>
            </span>
          </Link> */}

          <Link to="/" className="group flex items-center gap-3" onClick={closeMenu}>
            <img
              src={logo}
              alt={`${SCHOOL_NAME} Logo`}
              className="h-12 w-12 shrink-0 object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <span className="leading-tight">
              <span className="block text-lg font-bold text-blue-950 sm:text-xl">
                {SCHOOL_NAME}
              </span>
              <span className="block text-xs font-medium text-amber-600 sm:text-sm">
                {SCHOOL_PLACE}
              </span>
            </span>
          </Link>


          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="group relative">
                  <Link
                    to={link.href}
                    className="flex items-center gap-1 rounded-md px-3 py-2 font-medium text-blue-950 transition-colors hover:text-amber-600"
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-0 top-full w-56 translate-y-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <ul className="overflow-hidden rounded-lg border-t-4 border-amber-400 bg-white py-2 shadow-xl">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            to={child.href}
                            className="block px-5 py-2.5 text-sm font-medium text-blue-950 transition-all hover:bg-blue-50 hover:pl-7 hover:text-amber-600"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="relative rounded-md px-3 py-2 font-medium text-blue-950 transition-colors after:absolute after:bottom-0 after:left-3 after:h-0.5 after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:text-amber-600 hover:after:w-[calc(100%-1.5rem)]"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-md p-2 text-blue-950 transition hover:bg-blue-50 lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <Icon className="h-7 w-7">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </Icon>
            ) : (
              <Icon className="h-7 w-7">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </Icon>
            )}
          </button>
        </div>

        {/* Mobile panel */}
        <div
          className={`overflow-hidden border-t border-blue-100 bg-white transition-all duration-500 lg:hidden ${menuOpen ? 'max-h-[80vh] overflow-y-auto opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <ul className="mx-auto max-w-7xl px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.label} className="border-b border-blue-50 last:border-0">
                {link.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setOpenSub(openSub === link.label ? null : link.label)}
                      className="flex w-full items-center justify-between py-3 font-medium text-blue-950"
                      aria-expanded={openSub === link.label}
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${openSub === link.label ? 'rotate-180 text-amber-600' : ''}`}
                      />
                    </button>
                    <ul
                      className={`overflow-hidden transition-all duration-300 ${openSub === link.label ? 'max-h-60 pb-2' : 'max-h-0'
                        }`}
                    >
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            to={child.href}
                            onClick={closeMenu}
                            className="block rounded-md py-2.5 pl-5 text-sm text-blue-900 transition hover:bg-blue-50 hover:text-amber-600"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={link.href} onClick={closeMenu} className="block py-3 font-medium text-blue-950 transition hover:text-amber-600">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
