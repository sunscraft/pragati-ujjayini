'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  MapPin,
  Search,
  Globe,
  Share2,
  PenTool,
  Megaphone,
  MessageCircle,
  ListChecks,
  Check,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Service = {
  icon: LucideIcon
  title: string
  description: string
  includes: string[]
  tone: 'orange' | 'blue'
  image: string
  alt: string
}

const services: Service[] = [
  {
    icon: MapPin,
    title: 'Google Business Profile (GMB) Optimization & Management',
    description:
      'Your Google Business Profile is often the first thing a potential customer sees. We optimize and manage it so you show up in local search and Maps results, build trust through reviews, and convert searchers into walk-ins or calls.',
    includes: [
      'Profile setup & optimization',
      'Category & keyword targeting',
      'Photos & posts',
      'Review generation & management',
      'Q&A management',
      'Performance tracking',
    ],
    tone: 'orange',
    image: '/images/services/gmb-optimization.jpg',
    alt: 'Local business map pin location showing top ranking on a mobile screen',
  },
  {
    icon: Search,
    title: 'Local SEO',
    description:
      'We help your business rank when people nearby search for what you offer — “near me” searches, local keywords, and Google Maps rankings.',
    includes: [
      'Local keyword research',
      'On-page SEO',
      'Citation building & NAP consistency',
      'Local backlink building',
      'Competitor gap analysis',
      'Monthly ranking reports',
    ],
    tone: 'blue',
    image: '/images/services/local-seo.jpg',
    alt: 'Organic search query showing local business results near the user location',
  },
  {
    icon: Globe,
    title: 'Website Design & Development',
    description:
      'A fast, mobile-friendly website that turns visitors into customers — built to reflect your brand and convert local search traffic into enquiries.',
    includes: [
      'Custom website design',
      'Mobile optimization',
      'Lead-capture forms',
      'Click-to-call & WhatsApp integration',
      'Basic on-site SEO setup',
    ],
    tone: 'orange',
    image: '/images/services/website-design.jpg',
    alt: 'Clean responsive storefront website layout displaying perfectly on an Indian retail phone mockup',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description:
      'We manage your social presence so your business stays visible and top-of-mind with your local audience.',
    includes: [
      'Content calendars',
      'Instagram & Facebook management',
      'Community engagement',
      'Local hashtag & geo-targeting strategy',
      'Performance reporting',
    ],
    tone: 'blue',
    image: '/images/services/social-marketing.jpg',
    alt: 'Local community engagement interface on Instagram with target demographics',
  },
  {
    icon: PenTool,
    title: 'Graphic Designing',
    description:
      'Eye-catching, on-brand visuals for every platform — built to grab attention and drive action.',
    includes: [
      'Social media creatives',
      'Offer & promotional banners',
      'Branding collateral',
      'Festival/seasonal campaign designs',
      'Print-ready materials for in-store use',
    ],
    tone: 'orange',
    image: '/images/services/graphic-design.jpg',
    alt: 'Premium local promotional festival offer banner and graphic assets layout',
  },
  {
    icon: Megaphone,
    title: 'Local Google & Meta Ads',
    description:
      'Targeted paid campaigns that put your business in front of people actively searching or browsing in your service area — built for lead generation, not just impressions.',
    includes: [
      'Geo-targeted ad campaigns',
      'Audience research',
      'Ad creative & copy',
      'Budget management',
      'Performance tracking & optimization',
    ],
    tone: 'blue',
    image: '/images/services/local-ads.jpg',
    alt: 'Sponsored target advertisements layout tracking high physical shop footfall clicks',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Business Marketing',
    description:
      'For most Indian customers, WhatsApp is where the actual conversation happens after they find you on Google or Instagram. We set up and manage WhatsApp as a proper sales channel, not just a chat box.',
    includes: [
      'WhatsApp Business profile setup',
      'Product/service catalog creation',
      'Quick-reply & greeting message setup',
      'Broadcast lists for offers & updates',
      'Click-to-WhatsApp ad integration',
      'Order/enquiry tracking',
    ],
    tone: 'orange',
    image: '/images/services/whatsapp-marketing.jpg',
    alt: 'Interactive customer conversation utilizing a business custom automation catalog catalog setup',
  },
  {
    icon: ListChecks,
    title: 'Local Business Listings & Directories',
    description:
      'Beyond Google, a large share of local discovery and trust-building in India still happens through dedicated business directories. We get you listed correctly and consistently across the platforms your customers already use to compare and verify local businesses.',
    includes: [
      'Listing creation & optimization on JustDial, Sulekha & IndiaMART',
      'Consistent NAP details across all listings',
      'Category and keyword optimization on each platform',
      'Response & enquiry management',
      'Periodic listing audits',
    ],
    tone: 'blue',
    image: '/images/services/business-listings.jpg',
    alt: 'Verified marketplace business catalog listings exhibiting precise contact details data profiles',
  },
]

// Lightweight Reusable Scroll Animation Wrapper
function ScrollReveal({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target) // Animate once and stop observing
        }
      },
      {
        rootMargin: '-40px 0px', // Triggers slightly before element enters view
        threshold: 0.05,
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
        }`}
    >
      {children}
    </div>
  )
}

export function ServicesList() {
  return (
    <section
      id="services-list"
      className="mx-auto max-w-6xl px-5 sm:px-8 py-20 w-full overflow-hidden select-none touch-pan-y"
    >
      {/* Animated Header Section */}
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            What We Offer
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl text-brand-navy">
            Eight services, one growth engine
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-sm sm:text-base">
            Pick what you need today, or let us build a complete local marketing
            system around your business.
          </p>
        </div>
      </ScrollReveal>

      {/* Cards Stream Container */}
      <div className="mt-14 flex flex-col gap-8 w-full">
        {services.map((service, index) => {
          const Icon = service.icon
          const isOrange = service.tone === 'orange'
          return (
            <ScrollReveal key={service.title}>
              <article
                className="group relative grid gap-6 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8 lg:grid-cols-[1fr_1.3fr_1fr] items-center w-full"
              >
                <div
                  aria-hidden="true"
                  className={`absolute left-0 top-0 h-full w-1.5 ${isOrange ? 'bg-brand-orange' : 'bg-brand-blue'
                    }`}
                />

                {/* Column 1: Graphic Showcase Preview */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-square overflow-hidden rounded-2xl bg-muted border border-border/40 pointer-events-none select-none">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 30vw, 25vw"
                    draggable={false}
                    className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none select-none"
                  />
                </div>

                {/* Column 2: Text Title and Descriptions */}
                <div className="h-full flex flex-col justify-start">
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${isOrange
                          ? 'bg-brand-orange text-brand-orange-foreground shadow-sm shadow-brand-orange/10'
                          : 'bg-brand-blue text-brand-blue-foreground shadow-sm shadow-brand-blue/10'
                        }`}
                    >
                      <Icon className="size-6 stroke-[2.25]" />
                    </span>
                    <div>
                      <p
                        className={`text-xs font-bold uppercase tracking-[0.2em] ${isOrange ? 'text-brand-orange' : 'text-brand-blue'
                          }`}
                      >
                        Service {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-1 text-balance font-heading text-lg font-bold leading-snug text-brand-navy">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 text-xs sm:text-sm leading-relaxed text-muted-foreground text-pretty">
                    {service.description}
                  </p>
                </div>

                {/* Column 3: Feature Checklist */}
                <div
                  className={`rounded-2xl p-5 self-stretch flex flex-col justify-center ${isOrange ? 'bg-brand-orange/5' : 'bg-brand-blue/5'
                    }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    Includes
                  </p>
                  <ul className="mt-3 flex flex-col gap-2.5">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check
                          className={`mt-0.5 size-4 shrink-0 ${isOrange ? 'text-brand-orange' : 'text-brand-blue'
                            }`}
                        />
                        <span className="leading-normal text-foreground/90">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}