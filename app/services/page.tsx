import type { Metadata } from 'next'
import { ServicesHero } from '@/components/services/services-hero'
import { ServicesList } from '@/components/services/services-list'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'End-to-end local marketing services for Indian businesses: Google Business Profile, Local SEO, websites, social media, graphic design, Google & Meta ads, WhatsApp marketing, and business listings.',
  keywords: [
    'Google Business Profile optimization',
    'Local SEO India',
    'WhatsApp Business marketing',
    'local Google and Meta ads',
    'business listings JustDial Sulekha IndiaMART',
    'social media marketing for local business',
  ],
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services — Pragati Ujjayini',
    description:
      'Local marketing services built for local discovery and growth — for retail, healthcare, food, services, and every other local business category.',
    url: '/services',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <>

      <main>
        <ServicesHero />
        <ServicesList />
        <CtaBanner />
      </main>

    </>
  )
}
