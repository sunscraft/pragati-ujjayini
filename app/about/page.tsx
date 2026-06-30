import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { AboutHero } from '@/components/about/about-hero'
import { OurStory } from '@/components/about/our-story'
import { MissionVision } from '@/components/about/mission-vision'
import { HowWeWork } from '@/components/about/how-we-work'
import { WhoWeAre } from '@/components/about/who-we-are'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Pragati Ujjayini helps local businesses across India show up, stand out, and get chosen online. Learn our story, mission, vision, and how we work.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Pragati Ujjayini',
    description:
      'Making professional, results-driven digital marketing accessible to every local business in India.',
    url: '/about',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>

      <main>
        <AboutHero />
        <OurStory />
        <MissionVision />
        <HowWeWork />
        <WhoWeAre />
        <CtaBanner />
      </main>

    </>
  )
}
