import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}

export function Counter({ end, suffix = '' }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const duration = 1600
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1)
        setValue(Math.round(end * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [end])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export function SectionTitle({ title, text, light = false }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className={`text-3xl font-bold sm:text-4xl ${light ? 'text-white' : 'text-blue-950'}`}>{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-amber-400" />
      {text && <p className={`mt-4 ${light ? 'text-blue-200' : 'text-slate-600'}`}>{text}</p>}
    </div>
  )
}


// Banner at the top of every inner page
export function PageHero({ title, text, kicker }) {
  return (
    <section className="relative overflow-hidden bg-blue-950 text-white">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-400/10" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-blue-700/30" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:py-20">
        <nav className="text-sm text-blue-200" aria-label="Breadcrumb">
          <Link to="/" className="transition hover:text-amber-400">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-amber-400">{title}</span>
        </nav>
        {kicker && <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-amber-400">{kicker}</p>}
        <h1 className={`${kicker ? 'mt-1' : 'mt-3'} text-4xl font-extrabold sm:text-5xl`}>{title}</h1>
        {text && <p className="mt-4 max-w-2xl text-blue-100">{text}</p>}
      </div>
    </section>
  )
}
