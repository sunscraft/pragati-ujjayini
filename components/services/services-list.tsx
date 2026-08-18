'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
  ArrowRight,
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
  href?: string
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
    image: '/images/google-buisness-profile-image.png',
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
    image: '/images/local-seo.png',
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
    image: '/images/website-and-development.png',
    alt: 'Clean responsive storefront website layout displaying perfectly on a phone mockup',
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
    image: '/images/social-media-marketing.png',
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
    image: '/images/graphic-designing.png',
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
    image: '/images/Local-Google-Meta-Ads.png',
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
    image: '/images/whatsapp-marketing.png',
    alt: 'Interactive customer conversation utilizing a business custom automation catalog setup',
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
    image: '/images/local-listings.png',
    alt: 'Verified marketplace business catalog listings exhibiting precise contact details data profiles',
  },
]

function ScrollReveal({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        rootMargin: '-40px 0px',
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
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
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
      className="bg-white mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20 w-full overflow-hidden select-none touch-pan-y"
    >
      {/* Animated Header Section */}
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center px-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
            What We Offer
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Eight services, one growth engine
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-500 text-xs sm:text-base">
            Pick what you need today, or let us build a complete local marketing system around your business.
          </p>
        </div>
      </ScrollReveal>

      {/* Cards Container */}
      <div className="mt-10 sm:mt-14 flex flex-col gap-8 w-full">
        {services.map((service, index) => {
          const Icon = service.icon
          const isOrange = service.tone === 'orange'
          return (
            <ScrollReveal key={service.title}>
              <article className="group relative flex flex-col lg:flex-row items-stretch overflow-hidden rounded-3xl border border-zinc-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm transition-all duration-300 hover:shadow-md w-full gap-6 lg:gap-8 h-auto lg:h-[480px]">
                <div
                  aria-hidden="true"
                  className={`absolute left-0 top-0 h-full w-1.5 z-20 ${isOrange ? 'bg-orange-500' : 'bg-blue-500'
                    }`}
                />

                {/* Left Side Image Container */}
                <div className="relative w-full lg:w-1/2 aspect-[4/3] sm:aspect-video lg:aspect-auto h-auto lg:h-full overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-100 shrink-0 pointer-events-none select-none flex items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    draggable={false}
                    priority={index < 2}
                    className="object-contain p-1.5 sm:p-4 transition-transform duration-500 group-hover:scale-102"
                  />
                </div>

                {/* Right Side Details Content Area */}
                <div className="flex flex-col justify-between flex-1 min-w-0 gap-5">
                  {/* Text Details Description block */}
                  <div className="flex flex-col justify-start">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span
                        className={`flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl text-white ${isOrange
                            ? 'bg-orange-500 shadow-sm shadow-orange-500/10'
                            : 'bg-blue-500 shadow-sm shadow-blue-500/10'
                          }`}
                      >
                        <Icon className="size-5 sm:size-6 stroke-[2.25]" />
                      </span>
                      <div className="min-w-0">
                        <p
                          className={`text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] ${isOrange ? 'text-orange-500' : 'text-blue-500'
                            }`}
                        >
                          Service {String(index + 1).padStart(2, '0')}
                        </p>
                        <h3 className="mt-0.5 text-zinc-900 text-sm sm:text-base lg:text-lg font-bold leading-snug lg:truncate text-balance">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-600 lg:line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Checklist container block */}
                  <div
                    className={`rounded-2xl p-4 sm:p-5 w-full ${isOrange ? 'bg-orange-500/5' : 'bg-blue-500/5'
                      }`}
                  >
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                      Includes
                    </p>
                    <ul className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                      {service.includes.slice(0, 6).map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs sm:text-sm">
                          <Check
                            className={`mt-0.5 size-3.5 sm:size-4 shrink-0 ${isOrange ? 'text-orange-500' : 'text-blue-500'
                              }`}
                          />
                          <span className="leading-normal text-zinc-800 font-medium lg:truncate">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button Block */}
                  <div className="flex justify-end pt-1">
                    <Link
                      href={service.href || '#contact'}
                      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-200 shadow-sm ${isOrange
                          ? 'bg-orange-500 hover:bg-orange-600 shadow-orange-500/20'
                          : 'bg-blue-500 hover:bg-blue-600 shadow-blue-500/20'
                        }`}
                    >
                      <span>Explore this service</span>
                      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}