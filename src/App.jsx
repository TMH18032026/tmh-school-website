import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { site } from './config/siteConfig'
import Home from './home/Home'
import HomePage from './home/HomePage'
import AboutSchool from './pages/AboutSchool'
import Faculty from './pages/Faculty'
import Facilities from './pages/Facilities'
import Academics from './pages/Academics'
import PublicDisclosure from './pages/PublicDisclosure'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

// Scrolls to the top on every page change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-6xl font-extrabold text-amber-400">404</p>
      <h1 className="mt-2 text-3xl font-bold text-blue-950">Page not found</h1>
      <p className="mt-3 text-slate-600">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-8 rounded-md bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
        Back to home
      </Link>
    </section>
  )
}

export default function App() {
  useEffect(() => {
    document.title = `${site.name}, ${site.place}`
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Home = layout (Header + page + Footer). Each page renders inside it. */}
        <Route path="/" element={<Home />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutSchool />} />
          <Route path="about/school" element={<AboutSchool />} />
          <Route path="about/faculty" element={<Faculty />} />
          <Route path="about/facilities" element={<Facilities />} />
          <Route path="academics" element={<Academics />} />
          <Route path="public-disclosure" element={<PublicDisclosure />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
