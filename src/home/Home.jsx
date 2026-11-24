import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../bar/Header'
import Footer from '../bar/Footer'

// Layout: Header + current page + Footer.
// <Outlet /> is where HomePage (or any other page) is shown.
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-slate-800">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
