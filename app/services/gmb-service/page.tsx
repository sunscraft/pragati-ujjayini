import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  MapPin,
  Search,
  Phone,
  MessageCircle,
  CheckCircle2,
  TrendingUp,
  Star,
  Eye,
  Briefcase,
  Users,
  ShieldCheck,
  Building2,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  ChevronRight,
  BarChart3,
  Award,
  Globe,
  Camera,
  FileText,
  MessageSquare,
  Wrench,
  Check,
} from 'lucide-react'
import { GmbFaqAccordion } from './gmb-faq-accordion'

export const metadata: Metadata = {
  title: 'GMB Service | Rank #1 on Google Maps & Get Daily Calls',
  description:
    'Boost your Google Business Profile with expert GMB service. Get more local calls, reviews, and map rankings. Optimize your GMB profile today!',
  alternates: {
    canonical: 'https://www.pragatiujjayini.com/services/gmb-service',
  },
  openGraph: {
    title: 'GMB Service | Rank #1 on Google Maps & Get Daily Calls',
    description:
      'Boost your Google Business Profile with expert GMB service. Get more local calls, reviews, and map rankings. Optimize your GMB profile today!',
    url: 'https://www.pragatiujjayini.com/services/gmb-service',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Pragati Ujjayini',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.pragatiujjayini.com/#organization",
      "name": "Pragati Ujjayini",
      "url": "https://www.pragatiujjayini.com/",
      "logo": "https://www.pragatiujjayini.com/logo.png",
      "image": "https://www.pragatiujjayini.com/logo.png",
      "telephone": "+91-XXXXXXXXXX",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "YOUR STREET ADDRESS",
        "addressLocality": "Ujjain",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "YOUR PIN CODE",
        "addressCountry": "IN"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Ujjain"
        },
        {
          "@type": "City",
          "name": "Indore"
        }
      ],
      "sameAs": [
        "https://share.google/VuMw4tqyzeo5P2OMa"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.pragatiujjayini.com/gmb-optimization-service/#service",
      "name": "GMB Optimization Service",
      "serviceType": "Google Business Profile Optimization",
      "description": "Professional GMB optimization service that improves your Google Business Profile with accurate business information, categories, photos, posts, reviews, and local SEO support to help local customers find you on Google Search and Google Maps.",
      "provider": {
        "@id": "https://www.pragatiujjayini.com/#organization"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Ujjain"
        },
        {
          "@type": "City",
          "name": "Indore"
        }
      ],
      "url": "https://www.pragatiujjayini.com/gmb-optimization-service/"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pragatiujjayini.com/gmb-optimization-service/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.pragatiujjayini.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.pragatiujjayini.com/services/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "GMB Optimization Service",
          "item": "https://www.pragatiujjayini.com/gmb-optimization-service/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.pragatiujjayini.com/gmb-optimization-service/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is GMB optimization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GMB optimization means improving your Google Business Profile so it shows up correctly and ranks better in Google Search and Google Maps."
          }
        },
        {
          "@type": "Question",
          "name": "How is GMB optimization different from local SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GMB optimization is one part of local SEO. Local SEO also includes your website, citations, and backlinks. We offer GMB optimization on its own or as part of a full local SEO plan."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide this service in Ujjain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We manage Google Business Profiles for businesses across Ujjain."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide this service in Indore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We also work with businesses in Indore, including those managing more than one location."
          }
        },
        {
          "@type": "Question",
          "name": "How long does GMB optimization take to show results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most businesses see movement in profile views and rankings within 30 to 60 days. This depends on your starting profile and local competition."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my profile gets suspended?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We diagnose the cause, usually a guideline or verification issue, and help you through the reinstatement process."
          }
        }
      ]
    }
  ]
}

export default function GmbServicePage() {
  return (
    <main className="bg-[#FFFBF7] min-h-screen text-zinc-800 antialiased selection:bg-orange-500 selection:text-white">
      {/* JSON-LD Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Top Breadcrumbs & Notification Banner */}
      <div className="bg-[#FFF3EA] border-b border-orange-200/60 py-3">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <nav className="flex items-center gap-2 text-zinc-600 font-medium">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-orange-400" />
            <Link href="/services" className="hover:text-orange-600 transition-colors">
              Services
            </Link>
            <ChevronRight className="size-3.5 text-orange-400" />
            <span className="text-orange-950 font-bold truncate">
              GMB Optimization Service
            </span>
          </nav>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-orange-200 text-xs font-semibold text-orange-700 shadow-2xs">
            <MapPin className="size-3.5 text-orange-500" />
            Rank #1 on Google Maps & Get Daily Calls
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5EC] via-[#FFF9F5] to-[#FFFBF7] pt-10 pb-16 sm:pt-16 sm:pb-24">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-100/60 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-700 mb-6">
                <Sparkles className="size-3.5" />
                <span>Google Business Profile Optimization</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 leading-[1.15]">
                <span className="text-orange-600">Rank #1 on Google Maps:</span>{' '}
                Top GMB Optimization Service
              </h1>

              <p className="mt-5 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                We help local businesses get found on Google Search and Google Maps. Our GMB service fixes your Google Business Profile, keeps it active, and helps more local customers find and call you.
              </p>

              {/* Alert Callout Box */}
              <div className="mt-6 p-4.5 rounded-2xl bg-[#FFF0E6] border-l-4 border-orange-500 text-zinc-800 text-sm leading-relaxed flex items-start gap-3 shadow-2xs">
                <MapPin className="size-5 text-orange-600 shrink-0 mt-0.5" />
                <p>
                  If your shop, clinic, or restaurant is not showing up when people search nearby, your profile needs work. That's what we do.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-600/25 transition-all duration-200 hover:bg-orange-700 hover:scale-[1.02]"
                >
                  <span>Book a Free Audit</span>
                  <ArrowRight className="size-4.5" />
                </Link>

                <a
                  href="https://wa.me/919202668977?text=Hi%20Pragati%20Ujjayini%2C%20I%20want%20to%20optimize%20my%20Google%20Business%20Profile."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0284C7] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition-all duration-200 hover:bg-sky-700 hover:scale-[1.02]"
                >
                  <MessageCircle className="size-4.5 fill-white stroke-none" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>

              {/* 3 Metric Cards */}
              <div className="mt-10 grid grid-cols-3 gap-3.5 w-full">
                <div className="rounded-2xl border border-orange-100 bg-white p-4 text-center shadow-xs">
                  <p className="text-xl sm:text-2xl font-black text-orange-600">100%</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">Profile Optimization</p>
                </div>
                <div className="rounded-2xl border border-sky-100 bg-white p-4 text-center shadow-xs">
                  <p className="text-xl sm:text-2xl font-black text-[#0284C7]">3x</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">More Local Calls</p>
                </div>
                <div className="rounded-2xl border border-orange-100 bg-white p-4 text-center shadow-xs">
                  <p className="text-xl sm:text-2xl font-black text-orange-600">24/7</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">Active Monitoring</p>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Graphic Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white p-6 sm:p-7 shadow-xl border border-orange-200/80">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-wider">
                        Google Business Profile
                      </span>
                      <h3 className="text-sm font-extrabold text-zinc-900 mt-1">Local Map Pack Mockup</h3>
                    </div>
                  </div>
                  <span className="flex size-3 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="mt-5 space-y-3.5">
                  <div className="p-3.5 rounded-2xl bg-[#FFF6F0] border border-orange-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-orange-600 text-white font-extrabold text-xs flex items-center justify-center">#1</div>
                      <div>
                        <p className="text-xs font-bold text-zinc-900">Your Business Profile</p>
                        <p className="text-[10px] text-zinc-500">Ujjain & Indore Top Ranking</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">Top 3 Pack</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Phone className="size-4 text-sky-600" />
                      <span className="text-xs font-semibold text-zinc-700">Direct Phone Calls</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600">+180% Increase</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Star className="size-4 text-amber-500 fill-amber-500" />
                      <span className="text-xs font-semibold text-zinc-700">Verified 5-Star Reviews</span>
                    </div>
                    <span className="text-xs font-bold text-amber-600">Active Replies</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-100">
                  <div className="flex items-center gap-2 rounded-xl bg-zinc-100 p-2.5 text-xs text-zinc-600">
                    <Search className="size-4 text-zinc-400 shrink-0" />
                    <span className="truncate">Search: "clinic / store near me in Ujjain"</span>
                    <span className="ml-auto text-[10px] font-bold text-white bg-orange-600 px-2 py-0.5 rounded-md">Search</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What Is a GMB Optimization Service? */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200/80 p-6 sm:p-10 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
                  Defining Local SEO
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                  What Is a GMB Optimization Service?
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600">
                  A GMB optimization service is the process of improving your Google Business Profile so it shows up correctly in Google Search and Google Maps.
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600">
                  We check your business details, fix errors, add the right categories, and keep your profile active with posts, photos, and reviews. This is part of local SEO, and it works closely with your website and Google listings.
                </p>

                <div className="mt-6 pt-5 border-t border-zinc-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                    Related Search Terms
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Google Business Profile optimization',
                      'Google My Business optimization',
                      'GMB management service',
                      'Google Maps optimization service',
                    ].map((term) => (
                      <span
                        key={term}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF5EC] border border-orange-200 text-xs font-semibold text-orange-800"
                      >
                        <Search className="size-3 text-orange-600" />
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right stacked cards */}
              <div className="lg:col-span-5 space-y-3.5">
                <div className="p-4 rounded-2xl bg-[#FFF6F0] border border-orange-200 flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0">
                    <FileText className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Profile Audit & Details</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Correct details, categories, & description</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F0F9FF] border border-sky-200 flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-[#0284C7] text-white flex items-center justify-center shrink-0">
                    <Camera className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Active Posts & Media</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Weekly posts, photos & special offers</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900 text-white flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-amber-500 text-zinc-950 flex items-center justify-center shrink-0 font-bold">
                    <Star className="size-5 fill-zinc-950" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Reputation & Reviews</h4>
                    <p className="text-xs text-zinc-300 mt-0.5">Review replies & Q&A monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Your Business Needs This Service */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Local Map Ranking Factors
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Why Your Business Needs This Service
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              Just having a Google Business Profile is not enough. Google looks at many things before it shows your business to nearby customers.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Category & Business Details',
                desc: 'Your category and business details must be correct.',
                pill: 'MUST BE 100% ACCURATE',
                icon: MapPin,
                color: 'text-orange-600',
                bg: 'bg-orange-100',
              },
              {
                title: 'Regular Photos & Posts',
                desc: 'Your profile needs regular photos and posts.',
                pill: 'MUST STAY ACTIVE WEEKLY',
                icon: Camera,
                color: 'text-sky-600',
                bg: 'bg-sky-100',
              },
              {
                title: 'Real Customer Reviews',
                desc: 'You need real, recent reviews from genuine customers.',
                pill: 'MUST RECEIVE RECENT REVIEWS',
                icon: Star,
                color: 'text-amber-600',
                bg: 'bg-amber-100',
              },
              {
                title: 'NAP Consistency',
                desc: 'Your name, address, and phone number (NAP) must match everywhere online.',
                pill: 'MUST MATCH ACROSS WEB',
                icon: Globe,
                color: 'text-emerald-600',
                bg: 'bg-emerald-100',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-orange-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className={`size-12 rounded-2xl ${item.bg} flex items-center justify-center mb-4`}>
                      <Icon className={`size-6 ${item.color}`} />
                    </div>
                    <h3 className="text-base font-extrabold text-zinc-900 leading-snug">{item.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-zinc-100">
                    <span className="text-[10px] font-bold text-orange-700 tracking-wider uppercase bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200 inline-block">
                      {item.pill}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Callout Banner at bottom */}
          <div className="mt-10 rounded-3xl bg-[#FFF0E8] border border-orange-300/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-orange-600 text-white flex items-center justify-center shrink-0 font-bold mt-0.5">
                !
              </div>
              <p className="text-xs sm:text-sm font-semibold text-zinc-800 leading-relaxed">
                If any of these are missing or outdated, other businesses in Ujjain or Indore will rank above you. This directly affects your Google Maps ranking and local search visibility.
              </p>
            </div>

            <Link
              href="/#contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-zinc-800 transition-colors"
            >
              <span>Get Profile Audit</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: What Our GMB Optimization Service Includes */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Our Complete 5-Part Service
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              What Our GMB Optimization Service Includes
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              We break your profile work into five simple parts.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {[
              {
                num: '01',
                title: 'Profile Audit and Business Information',
                desc: 'We check your business name, address, and phone number for consistency across the internet. We also fix your business categories and rewrite your business description in simple, relevant language.',
                items: [
                  'NAP consistency check',
                  'Category correction',
                  'Business description rewrite',
                  'Duplicate or suspended listing check',
                  'Competitor profile comparison',
                ],
              },
              {
                num: '02',
                title: 'Photos and Business Details',
                desc: 'We add and update photos of your shop, team, and work. We also keep your business hours, service areas, and attributes correct and current.',
                items: [
                  'Regular photo and video uploads',
                  'Business hours and service area updates',
                  'Business attributes setup',
                ],
              },
              {
                num: '03',
                title: 'Google Posts and Content Updates',
                desc: 'We post regular updates about your offers, services, and news. This keeps your profile active, which Google rewards with better visibility.',
                items: [
                  'Weekly or monthly Google Posts',
                  'Offer and update announcements',
                  'Seasonal post planning',
                ],
              },
              {
                num: '04',
                title: 'Google Reviews and Reputation Management',
                desc: 'We help you get more genuine reviews and reply to every review, good or bad. We also answer questions in your profile’s Q&A section.',
                items: [
                  'Review generation support',
                  'Timely review replies',
                  'Q&A monitoring and answers',
                ],
              },
              {
                num: '05',
                title: 'Local SEO and Visibility Support',
                desc: 'We connect your Google Business Profile to your wider local SEO. This includes local citations and keyword tracking in the map pack (the local search results box on Google).',
                items: [
                  'Local citation building and cleanup',
                  'Local keyword tracking',
                  'Website and profile alignment',
                ],
              },
            ].map((part) => (
              <div
                key={part.num}
                className="rounded-3xl border border-orange-200/80 bg-white overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Left Part Box */}
                <div className="lg:col-span-5 bg-[#FFF4ED] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-orange-200/60">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-black uppercase tracking-wider mb-3">
                      Section {part.num}
                    </span>
                    <h3 className="text-xl font-extrabold text-zinc-900 leading-snug">{part.title}</h3>
                    <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">{part.desc}</p>
                  </div>
                </div>

                {/* Right Checklist Box */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center bg-white">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-zinc-400 mb-4">
                    Includes Key Deliverables:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {part.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-800 font-semibold">
                        <span className="size-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                          <Check className="size-3.5 stroke-[3]" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: How Our Process Works */}
      <section className="py-14 sm:py-20 bg-[#FFF5EE]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200 p-6 sm:p-10 shadow-md">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
                Continuous Monthly Workflow
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                How Our Process Works
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600">
                We follow a clear, step-by-step process for every business we work with.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  step: 'Audit',
                  desc: 'We review your current Google Business Profile and find what is missing or wrong.',
                  icon: Search,
                  color: 'text-orange-600',
                  bg: 'bg-orange-100',
                },
                {
                  step: 'Fix',
                  desc: 'We correct your business information, categories, and description.',
                  icon: Wrench,
                  color: 'text-sky-600',
                  bg: 'bg-sky-100',
                },
                {
                  step: 'Set Up',
                  desc: 'We add photos, posts, attributes, and business hours.',
                  icon: Calendar,
                  color: 'text-orange-600',
                  bg: 'bg-orange-100',
                },
                {
                  step: 'Build',
                  desc: 'We work on reviews, Q&A, and local citations.',
                  icon: Building2,
                  color: 'text-sky-600',
                  bg: 'bg-sky-100',
                },
                {
                  step: 'Monitor',
                  desc: 'We track your rankings and profile activity, and adjust the plan as needed.',
                  icon: BarChart3,
                  color: 'text-orange-600',
                  bg: 'bg-orange-100',
                },
              ].map((st, idx) => {
                const Icon = st.icon
                return (
                  <div
                    key={st.step}
                    className="rounded-2xl border border-orange-100 bg-[#FFFBF7] p-5 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-black uppercase tracking-wider text-orange-600 bg-orange-100 px-2 py-0.5 rounded">
                          Step 0{idx + 1}
                        </span>
                        <div className={`size-8 rounded-lg ${st.bg} flex items-center justify-center`}>
                          <Icon className={`size-4 ${st.color}`} />
                        </div>
                      </div>
                      <h3 className="text-base font-extrabold text-zinc-900">{st.step}</h3>
                      <p className="mt-2 text-xs text-zinc-600 leading-relaxed">{st.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 rounded-full bg-[#FFF0E6] border border-orange-300 p-4 text-center max-w-3xl mx-auto flex items-center justify-center gap-3">
              <Clock className="size-5 text-orange-600 shrink-0" />
              <p className="text-xs sm:text-sm font-semibold text-orange-950">
                This process repeats every month, since Google Business Profile optimization is ongoing work, not a one-time task.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Benefits of GMB Optimization */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Measurable Advantages
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Benefits of GMB Optimization
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              Why ranking in the local map pack drives real business value for you.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'More Visibility', desc: 'More visibility on Google Search and Google Maps', icon: Eye, color: 'text-orange-600' },
              { title: 'More Customer Calls', desc: 'More calls and direction requests from local customers', icon: Phone, color: 'text-sky-600' },
              { title: 'Stronger Trust', desc: 'A stronger, more trustworthy review profile', icon: Star, color: 'text-orange-600' },
              { title: 'Map Pack Ranking', desc: 'Better rankings in the local map pack', icon: MapPin, color: 'text-sky-600' },
              { title: 'Consistent Identity', desc: 'One consistent business identity across the internet', icon: Globe, color: 'text-orange-600' },
            ].map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white p-5 border border-orange-200/80 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
                >
                  <div className="size-10 rounded-xl bg-orange-50 flex items-center justify-center mb-3">
                    <Icon className={`size-5 ${benefit.color}`} />
                  </div>
                  <h4 className="text-sm font-extrabold text-zinc-900 mb-1">{benefit.title}</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 6: Who We Help */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Tailored For Your Industry
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Who We Help
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              Our GMB optimization service works well for:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Photo Collage Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-orange-200 shadow-sm">
                <Image
                  src="/images/Shop owner Image 1 (2).png"
                  alt="Local service shop owner in Ujjain"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-orange-200 shadow-sm">
                <Image
                  src="/images/retail-shop.png"
                  alt="Retail store front"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-orange-200 shadow-sm">
                <Image
                  src="/images/Shop 3.png"
                  alt="Restaurant and hospitality store"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-orange-200 shadow-sm">
                <Image
                  src="/images/Corporate Image 1 (1).png"
                  alt="Multi-location business office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Industry List */}
            <div className="lg:col-span-6 space-y-4">
              {[
                {
                  title: 'Local Service Businesses',
                  desc: 'Clinics, salons, and repair shops where phone calls drive appointments.',
                  icon: Wrench,
                  color: 'text-sky-600',
                  bg: 'bg-sky-50 border-sky-200',
                },
                {
                  title: 'Restaurants & Hospitality',
                  desc: 'Dining & food venues, where photos and reviews matter most.',
                  icon: Users,
                  color: 'text-orange-600',
                  bg: 'bg-orange-50 border-orange-200',
                },
                {
                  title: 'Retail Shops',
                  desc: 'Physical stores competing directly for local footfall and walk-in customers.',
                  icon: Building2,
                  color: 'text-sky-600',
                  bg: 'bg-sky-50 border-sky-200',
                },
                {
                  title: 'Multi-Location Businesses',
                  desc: 'Businesses with more than one location, needing profiles managed together.',
                  icon: Award,
                  color: 'text-orange-600',
                  bg: 'bg-orange-50 border-orange-200',
                },
              ].map((who) => {
                const Icon = who.icon
                return (
                  <div
                    key={who.title}
                    className={`rounded-2xl border p-5 bg-white flex items-start gap-4 shadow-2xs ${who.bg}`}
                  >
                    <div className="size-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-2xs">
                      <Icon className={`size-5 ${who.color}`} />
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-zinc-900">{who.title}</h4>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">{who.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Regional Spotlight (Ujjain & Indore) + Why Choose Us */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-[#FFF6F0] border border-orange-200/80 p-6 sm:p-10 shadow-md">
            {/* Top Regional Spotlight */}
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-wider mb-3">
                <MapPin className="size-3.5" /> Regional Market Focus
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                GMB Optimization Service in Ujjain and Indore
              </h2>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-700 font-medium">
                We provide GMB optimization services to help local businesses in <strong>Ujjain</strong> build profiles that match how customers search, complete with full audits to fix what is missing.
              </p>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-700 font-medium">
                We also help businesses in <strong>Indore</strong> improve their Google Business Profile and local presence, keeping listings active and accurate across clinics, restaurants, retail, and service industries.
              </p>
            </div>

            {/* Bottom Why Choose Us */}
            <div className="mt-10 pt-8 border-t border-orange-200">
              <div className="text-center mb-8">
                <h3 className="text-xl font-extrabold text-zinc-900">Why Choose Pragati Ujjayini</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: 'Local Market Focus',
                    desc: 'We focus on local businesses in Ujjain and Indore, not generic national strategies.',
                    color: 'bg-orange-600',
                  },
                  {
                    title: 'Plain Language Updates',
                    desc: 'We explain our process in plain language, month by month.',
                    color: 'bg-[#0284C7]',
                  },
                  {
                    title: 'Real Reporting Access',
                    desc: 'We give you access to real reporting, not just summary emails.',
                    color: 'bg-orange-600',
                  },
                  {
                    title: 'Flexible Monthly Plans',
                    desc: 'We offer flexible plans instead of long, locked-in contracts.',
                    color: 'bg-[#0284C7]',
                  },
                ].map((reason, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-white border border-orange-200/80 p-5 shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className={`size-7 rounded-lg ${reason.color} text-white font-bold text-xs flex items-center justify-center mb-3`}>
                        0{i + 1}
                      </div>
                      <h4 className="text-sm font-extrabold text-zinc-900">{reason.title}</h4>
                      <p className="mt-2 text-xs text-zinc-600 leading-relaxed">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: What Results You Can Expect */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200 p-6 sm:p-10 shadow-md">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
                Transparent Expectations
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                What Results You Can Expect
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600">
                We don't promise fixed numbers or guaranteed rankings. No honest agency can, since Google's system keeps changing.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Profile Views', desc: 'Gradual increase in profile views and searches' },
                { title: 'Customer Clicks', desc: 'More website clicks and direction requests' },
                { title: 'Map Pack Rank', desc: 'Better visibility in the local map pack over time' },
                { title: 'Trust & Reviews', desc: 'A stronger review profile that builds trust' },
              ].map((res, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#FFF5EC] border border-orange-200 p-5 shadow-2xs"
                >
                  <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest bg-orange-100 px-2 py-0.5 rounded">
                    Outcome 0{idx + 1}
                  </span>
                  <h4 className="text-sm font-extrabold text-zinc-900 mt-2">{res.title}</h4>
                  <p className="text-xs text-zinc-600 mt-1 leading-relaxed">{res.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-zinc-500 font-medium">
                These changes usually build up over the first <strong>30 to 60 days</strong> and continue as your profile stays active.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Frequently Asked Questions */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              Everything you need to know about our Google Business Profile optimization service.
            </p>
          </div>

          <GmbFaqAccordion />
        </div>
      </section>

      {/* Section 10: Final CTA Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-zinc-950 via-zinc-900 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Ready to Improve Your Google Business Profile?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto font-normal">
            If your business isn't getting calls or direction requests from Google, your profile needs attention. Book a free audit with Pragati Ujjayini today, or message us on WhatsApp to discuss your GMB optimization plan for Ujjain or Indore.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-sm font-extrabold text-white shadow-xl hover:bg-orange-700 hover:scale-[1.02] transition-all"
            >
              <span>Book Your Free Audit</span>
              <ArrowRight className="size-4.5" />
            </Link>

            <a
              href="https://wa.me/919202668977?text=Hi%20Pragati%20Ujjayini%2C%20I%20want%20to%20book%20a%20free%20GMB%20audit."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0284C7] px-8 py-4 text-sm font-extrabold text-white shadow-xl hover:bg-sky-700 hover:scale-[1.02] transition-all"
            >
              <MessageCircle className="size-4.5 fill-white stroke-none" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
