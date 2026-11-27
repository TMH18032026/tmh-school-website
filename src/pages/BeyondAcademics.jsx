import React from 'react'
import { Link } from 'react-router-dom'
import { site } from '../config/siteConfig'
import { PageHero } from '../components/ui'
import { Block, CardGrid, CtaButtons } from '../components/blocks'
import { BEYOND } from '../data/activitiesData'

export default function BeyondAcademics() {
  return (
    <>
      <PageHero
        kicker={`${site.shortName} Beyond Academics`}
        title="Beyond Academics"
        text="Marks matter, but so do confidence, character and creativity. This is how we develop the whole child."
      />
      <Block title="Learning that goes beyond the classroom" text="Every student gets the chance to discover a talent, build a skill and grow as a leader.">
        <CardGrid items={BEYOND} cols={3} />
      </Block>
      <Block tone="blue">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">See it in action</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-amber-400" />
          <p className="mt-4 text-blue-200">Browse photos and updates from our events, sports days, cultural programmes and educational tours.</p>
          <CtaButtons items={[{ label: 'View gallery', to: '/gallery' }, { label: 'News & events', to: '/news-events' }]} />
        </div>
      </Block>
    </>
  )
}
