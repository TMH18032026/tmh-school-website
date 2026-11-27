import React from 'react'
import { site } from '../config/siteConfig'
import { PageHero } from '../components/ui'
import { AnchorNav, Sections } from '../components/blocks'
import { FACILITY_SECTIONS } from '../data/academicsData'

const NAV = [
  { id: 'learning', label: 'Classrooms & Labs' },
  { id: 'play', label: 'Library & Sports' },
  { id: 'safety', label: 'Safety & Health' },
  { id: 'transport', label: 'Transport' },
]

export default function Facilities() {
  return (
    <>
      <PageHero title="School Facilities" text={`Spaces at ${site.name} designed for learning, play and safety.`} />
      <AnchorNav items={NAV} />
      <Sections sections={FACILITY_SECTIONS} />
    </>
  )
}
