import React, { useEffect } from 'react'
// import { BrowserRouter, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
import { HashRouter, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
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
import Admissions from './pages/Admissions'
import Hostel from './pages/Hostel'
import BeyondAcademics from './pages/BeyondAcademics'
import StudentCorner from './pages/StudentCorner'
import NewsEvents from './pages/NewsEvents'
import Leadership from './pages/Leadership'
import Management from './pages/Management'
import DownloadCentre from './pages/DownloadCentre'
import Grievance from './pages/Grievance'
import PolicyPage from './pages/PolicyPage'
import ComingSoon from './pages/ComingSoon'
import PrintableForm from './pages/PrintableForm'

// Scrolls to the top on every page change
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Jump to a section such as /admissions#fees once the page has rendered
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 120)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
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
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* Home = layout (Header + page + Footer). Each page renders inside it. */}
        <Route path="/" element={<Home />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutSchool />} />
          <Route path="about/school" element={<AboutSchool />} />
          <Route path="about/faculty" element={<Faculty />} />
          <Route path="about/leadership" element={<Leadership />} />
          <Route path="about/management" element={<Management />} />
          <Route path="about/facilities" element={<Navigate to="/facilities" replace />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="admissions/form" element={<PrintableForm mode="admission" />} />
          <Route path="hostel" element={<Hostel />} />
          <Route path="hostel/form" element={<PrintableForm mode="hostel" />} />
          <Route path="beyond-academics" element={<BeyondAcademics />} />
          <Route path="student-corner" element={<StudentCorner />} />
          <Route path="news-events" element={<NewsEvents />} />
          <Route path="download-centre" element={<DownloadCentre />} />
          <Route path="grievance" element={<Grievance />} />
          <Route path="parent-portal" element={<ComingSoon slug="parent-portal" />} />
          <Route path="fee-payment" element={<ComingSoon slug="fee-payment" />} />
          <Route path="student-login" element={<ComingSoon slug="student-login" />} />
          <Route path="privacy-policy" element={<PolicyPage slug="privacy" />} />
          <Route path="terms-and-conditions" element={<PolicyPage slug="terms" />} />
          <Route path="child-protection-policy" element={<PolicyPage slug="child-protection" />} />
          <Route path="anti-bullying-policy" element={<PolicyPage slug="anti-bullying" />} />
          <Route path="academics" element={<Academics />} />
          <Route path="public-disclosure" element={<PublicDisclosure />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
