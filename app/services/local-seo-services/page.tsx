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
  FileText,
  MessageSquare,
  Wrench,
  Check,
  Target,
  FileSearch,
  Link2,
  Layout,
  Stethoscope,
  Utensils,
  Scissors,
  Hotel,
  Home,
  ShoppingBag,
} from 'lucide-react'
import { LocalSeoFaqAccordion } from './local-seo-faq-accordion'

export const metadata: Metadata = {
  title: 'Local SEO Services in Ujjain & Indore | Rank #1 on Google',
  description:
    'Get more local leads and rank #1 on Google Maps. Professional Local SEO services in Ujjain & Indore to grow your business fast. Get a free audit today!',
  alternates: {
    canonical: 'https://www.pragatiujjayini.com/services/local-seo-services/',
  },
  openGraph: {
    title: 'Local SEO Services in Ujjain & Indore | Rank #1 on Google',
    description:
      'Get more local leads and rank #1 on Google Maps. Professional Local SEO services in Ujjain & Indore to grow your business fast. Get a free audit today!',
    url: 'https://www.pragatiujjayini.com/services/local-seo-services/',
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
      "areaServed": [
        {
          "@type": "City",
          "name": "Ujjain"
        },
        {
          "@type": "City",
          "name": "Indore"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.pragatiujjayini.com/services/local-seo-services/#service",
      "name": "Local SEO Services",
      "serviceType": "Local SEO",
      "description": "Local SEO services for businesses in Ujjain and Indore to improve visibility on Google Search, Google Maps, and local search results.",
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
      "url": "https://www.pragatiujjayini.com/services/local-seo-services/"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pragatiujjayini.com/services/local-seo-services/#breadcrumb",
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
          "name": "Local SEO Services",
          "item": "https://www.pragatiujjayini.com/services/local-seo-services/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.pragatiujjayini.com/services/local-seo-services/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is local SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local SEO helps your business appear when people nearby search for your products or services on Google. It covers your Google Business Profile, website, citations, and reviews."
          }
        },
        {
          "@type": "Question",
          "name": "What does a local SEO company do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A local SEO company manages the signals that determine whether your business shows up in local search results, the map pack, and Google Maps for nearby customers."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in local SEO services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local SEO typically includes Google Business Profile optimization, Google Maps optimization, local keyword research, citation management, review management, on-page local SEO, local content, local link building, audits, and reporting."
          }
        },
        {
          "@type": "Question",
          "name": "How does local SEO help a business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local SEO connects you with customers who are already searching for what you offer, which can help increase calls, enquiries, and store visits."
          }
        },
        {
          "@type": "Question",
          "name": "Does local SEO include Google Business Profile optimization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Google Business Profile optimization is a core part of local SEO. Pragati Ujjayini also offers it as a standalone GMB optimization service."
          }
        },
        {
          "@type": "Question",
          "name": "Can local SEO improve Google Maps visibility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Google Maps optimization is a part of local SEO and helps businesses improve their presence in map-based search results."
          }
        },
        {
          "@type": "Question",
          "name": "How long does local SEO take to show results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local SEO results vary by competition, location, website condition, Google Business Profile strength, and other ranking factors. Initial movement may appear within 30 to 60 days, while stronger ranking gains can take longer."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide local SEO services in Ujjain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Pragati Ujjayini provides local SEO services for businesses across Ujjain."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide local SEO services in Indore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Pragati Ujjayini provides local SEO services for businesses in Indore, including businesses with multiple locations."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between local SEO and GMB optimization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GMB optimization focuses specifically on your Google Business Profile. Local SEO is broader and includes your website, citations, reviews, content, and Google Business Profile."
          }
        },
        {
          "@type": "Question",
          "name": "Can local SEO help a business get more calls and enquiries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. By improving your visibility for relevant local searches, local SEO can help connect your business with customers who are ready to call, visit, or enquire."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide ongoing local SEO management?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Local SEO is ongoing work. Pragati Ujjayini monitors rankings and visibility regularly and adjusts the strategy as needed."
          }
        }
      ]
    }
  ]
}

export default function LocalSeoServicesPage() {
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
              Local SEO Services
            </span>
          </nav>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-orange-200 text-xs font-semibold text-orange-700 shadow-2xs">
            <MapPin className="size-3.5 text-orange-500" />
            Rank #1 on Google Search & Maps in Ujjain & Indore
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
                <span>Top Local SEO Services</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 leading-[1.15]">
                <span className="text-orange-600">Get #1 Rank on Google Maps:</span>{' '}
                Local SEO Services in Ujjain & Indore
              </h1>

              <p className="mt-5 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                We help local businesses show up on Google Search, Google Maps, and the local map pack. Our local SEO services cover your Google Business Profile, website, citations, and reviews, so nearby customers find you first.
              </p>

              {/* Alert Callout Box */}
              <div className="mt-6 p-4.5 rounded-2xl bg-[#FFF0E6] border-l-4 border-orange-500 text-zinc-800 text-sm leading-relaxed flex items-start gap-3 shadow-2xs">
                <MapPin className="size-5 text-orange-600 shrink-0 mt-0.5" />
                <p>
                  If competitors keep ranking above you for searches your customers are already making, your local SEO needs work. That's exactly what we fix.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-600/25 transition-all duration-200 hover:bg-orange-700 hover:scale-[1.02]"
                >
                  <span>Get a Free Local SEO Audit</span>
                  <ArrowRight className="size-4.5" />
                </Link>

                <a
                  href="https://wa.me/919202668977?text=Hi%20Pragati%20Ujjayini%2C%20I%20want%20to%20discuss%20Local%20SEO%20Services."
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
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">Local Search Coverage</p>
                </div>
                <div className="rounded-2xl border border-sky-100 bg-white p-4 text-center shadow-xs">
                  <p className="text-xl sm:text-2xl font-black text-[#0284C7]">3x</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">More Customer Leads</p>
                </div>
                <div className="rounded-2xl border border-orange-100 bg-white p-4 text-center shadow-xs">
                  <p className="text-xl sm:text-2xl font-black text-orange-600">#1</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">Map Pack Target</p>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Graphic Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white p-6 sm:p-7 shadow-xl border border-orange-200/80">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                      <Search className="size-5" />
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-wider">
                        Local SEO Dashboard
                      </span>
                      <h3 className="text-sm font-extrabold text-zinc-900 mt-1">Ujjain & Indore Map Pack</h3>
                    </div>
                  </div>
                  <span className="flex size-3 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="mt-5 space-y-3.5">
                  <div className="p-3.5 rounded-2xl bg-[#FFF6F0] border border-orange-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-orange-600 text-white font-extrabold text-xs flex items-center justify-center">#1</div>
                      <div>
                        <p className="text-xs font-bold text-zinc-900">Google Map Pack Ranking</p>
                        <p className="text-[10px] text-zinc-500">Targeted "Near Me" Searches</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">Top 3 Pack</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Phone className="size-4 text-sky-600" />
                      <span className="text-xs font-semibold text-zinc-700">Direct Calls & Enquiries</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600">+250% Growth</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Globe className="size-4 text-amber-500" />
                      <span className="text-xs font-semibold text-zinc-700">Consistent Directory Citations</span>
                    </div>
                    <span className="text-xs font-bold text-amber-600">100% Verified</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-100">
                  <div className="flex items-center gap-2 rounded-xl bg-zinc-100 p-2.5 text-xs text-zinc-600">
                    <Search className="size-4 text-zinc-400 shrink-0" />
                    <span className="truncate">Search: "best doctor / service in Indore"</span>
                    <span className="ml-auto text-[10px] font-bold text-white bg-orange-600 px-2 py-0.5 rounded-md">Search</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What Is Local SEO? */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200/80 p-6 sm:p-10 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
                  Defining Local Search
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                  What Is Local SEO?
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600">
                  Local SEO helps your business appear when people nearby search for your products or services on Google.
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600">
                  It covers your Google Business Profile, your website, your local citations, your reviews, and other local ranking factors. Local SEO is different from regular SEO, since regular SEO focuses on ranking a website nationally, not for a specific area.
                </p>

                <div className="mt-6 pt-5 border-t border-zinc-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                    Core Local Search Concepts
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Local SEO services Ujjain',
                      'Local SEO services Indore',
                      'Google Maps ranking',
                      'Local citation building',
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
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Google Business Profile</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Map pack presence & business details</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F0F9FF] border border-sky-200 flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-[#0284C7] text-white flex items-center justify-center shrink-0">
                    <Globe className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">On-Page & Location Pages</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Optimized content for local keywords</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900 text-white flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-amber-500 text-zinc-950 flex items-center justify-center shrink-0 font-bold">
                    <Star className="size-5 fill-zinc-950" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Citations & Reviews</h4>
                    <p className="text-xs text-zinc-300 mt-0.5">NAP consistency & trust signals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Does Your Business Need Local SEO? */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Local Ranking Signals
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Why Does Your Business Need Local SEO?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              You need local SEO if your business isn't getting calls or competitors keep ranking above you.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Not Showing on Maps',
                desc: 'Your business isn’t showing up on Google Maps for searches you’d expect to rank for.',
                icon: MapPin,
                color: 'text-orange-600',
                bg: 'bg-orange-100',
              },
              {
                title: 'Competitors Outranking You',
                desc: 'Competitors with similar services keep ranking above you in local search results.',
                icon: TrendingUp,
                color: 'text-sky-600',
                bg: 'bg-sky-100',
              },
              {
                title: 'Fewer Calls & Enquiries',
                desc: 'You’re getting fewer phone calls or enquiries from nearby customers.',
                icon: Phone,
                color: 'text-orange-600',
                bg: 'bg-orange-100',
              },
              {
                title: 'Unoptimized GBP Profile',
                desc: 'Your Google Business Profile is missing critical information or categories.',
                icon: FileText,
                color: 'text-sky-600',
                bg: 'bg-sky-100',
              },
              {
                title: 'Website Doesn’t Rank',
                desc: 'Your website doesn’t rank for targeted local search terms in your city.',
                icon: Globe,
                color: 'text-orange-600',
                bg: 'bg-orange-100',
              },
              {
                title: 'New Location Launch',
                desc: 'You’ve opened a new location and need visibility from scratch.',
                icon: Building2,
                color: 'text-sky-600',
                bg: 'bg-sky-100',
              },
              {
                title: 'Unmanaged Reviews',
                desc: 'Your reviews and directory listings aren’t being actively managed.',
                icon: Star,
                color: 'text-amber-600',
                bg: 'bg-amber-100',
              },
              {
                title: 'Direct High-Intent Traffic',
                desc: 'Connect directly with customers already searching for your services.',
                icon: Target,
                color: 'text-emerald-600',
                bg: 'bg-emerald-100',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="rounded-3xl border border-orange-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className={`size-12 rounded-2xl ${item.bg} flex items-center justify-center mb-4`}>
                      <Icon className={`size-6 ${item.color}`} />
                    </div>
                    <h3 className="text-base font-extrabold text-zinc-900 leading-snug">{item.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
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
                Local SEO connects you with people who are already searching for what you offer. This makes it more effective than general brand marketing for getting calls, enquiries, and store visits.
              </p>
            </div>

            <Link
              href="/#contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-zinc-800 transition-colors"
            >
              <span>Get Free Local Audit</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Our Local SEO Services (10 Connected Parts) */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Complete 10-Part System
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Our Local SEO Services
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              We manage local SEO as one connected system, not separate, unrelated tasks. Here's what's included.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {[
              {
                num: '01',
                title: 'Google Business Profile Optimization',
                desc: 'We optimize your Google Business Profile to improve your local visibility. This includes accurate categories, complete business information, regular posts, and Q&A monitoring.',
                link: { text: 'Learn more about our GMB optimization service →', href: '/services/gmb-service' },
                items: ['Accurate category selection', 'Business description rewrite', 'Regular post updates', 'Q&A monitoring'],
              },
              {
                num: '02',
                title: 'Google Maps Optimization',
                desc: 'We improve how your business appears in Google Maps and the local pack, which often ranks differently from regular search results.',
                items: ['Map visibility improvements', 'Local pack ranking support', 'Location relevance signals', 'Ongoing ranking monitoring'],
              },
              {
                num: '03',
                title: 'Local Keyword Research',
                desc: 'We find the exact words and phrases nearby customers use to search for your business.',
                items: ['"Near me" search terms', 'Location-based keywords', 'Service plus location keywords', 'Local search intent mapping'],
              },
              {
                num: '04',
                title: 'Local Citation Management',
                desc: 'We keep your business name, address, and phone number (NAP) consistent across directories. Inconsistent listings actively hurt your rankings.',
                items: ['Citation building on relevant directories', 'NAP consistency checks', 'Duplicate listing cleanup'],
              },
              {
                num: '05',
                title: 'Review Management',
                desc: 'We help you build genuine reviews and manage your online reputation.',
                items: ['Review monitoring', 'Timely responses to reviews', 'Reputation management support'],
              },
              {
                num: '06',
                title: 'On-Page Local SEO',
                desc: 'We optimize your website pages to reinforce local relevance.',
                items: ['Title tags & meta descriptions', 'Local-focused headings', 'Location pages setup', 'Internal linking & local schema'],
              },
              {
                num: '07',
                title: 'Local Content Strategy',
                desc: 'We create content that answers the real questions your local customers are searching for.',
                items: ['Location-based content', 'Service-related content', 'Common local customer Q&As'],
              },
              {
                num: '08',
                title: 'Local Link Building',
                desc: 'We help you earn links from relevant local and industry websites, not just any external site.',
                items: ['Regionally relevant link outreach', 'Industry-relevant partnerships', 'Local authority building'],
              },
              {
                num: '09',
                title: 'Local SEO Audit',
                desc: 'Before building a strategy, we review your current visibility and gaps.',
                items: ['Website & GBP audit', 'Citation check', 'Competitor comparison', 'Technical issue identification'],
              },
              {
                num: '10',
                title: 'Local SEO Reporting',
                desc: 'We give you clear, regular updates so you know exactly what’s working.',
                items: ['Ranking reports', 'Organic traffic data', 'Profile visibility numbers', 'Calls & website clicks summary'],
              },
            ].map((part) => (
              <div
                key={part.num}
                className="rounded-3xl border border-orange-200/80 bg-white overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Left Box */}
                <div className="lg:col-span-5 bg-[#FFF4ED] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-orange-200/60">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-black uppercase tracking-wider mb-3">
                      Part {part.num}
                    </span>
                    <h3 className="text-xl font-extrabold text-zinc-900 leading-snug">{part.title}</h3>
                    <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">{part.desc}</p>
                    {part.link && (
                      <Link href={part.link.href} className="inline-block mt-3 text-xs font-bold text-orange-700 underline hover:text-orange-900">
                        {part.link.text}
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right Checklist Box */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center bg-white">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-zinc-400 mb-4">
                    Key Action Deliverables:
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

      {/* Section 4: How Our Local SEO Process Works */}
      <section className="py-14 sm:py-20 bg-[#FFF5EE]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200 p-6 sm:p-10 shadow-md">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
                Repeatable Growth Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                How Our Local SEO Process Works
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600">
                We follow a clear, repeatable process for every business.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5">
              {[
                {
                  step: 'Audit',
                  desc: 'Review current website, GBP, citations, & competitors.',
                  icon: FileSearch,
                  color: 'text-orange-600',
                  bg: 'bg-orange-100',
                },
                {
                  step: 'Keywords',
                  desc: 'Identify what local customers are actually searching for.',
                  icon: Search,
                  color: 'text-sky-600',
                  bg: 'bg-sky-100',
                },
                {
                  step: 'Optimize',
                  desc: 'Optimize GBP & website pages for local relevance.',
                  icon: Layout,
                  color: 'text-orange-600',
                  bg: 'bg-orange-100',
                },
                {
                  step: 'Citations',
                  desc: 'Build consistent citations & strengthen review profile.',
                  icon: ShieldCheck,
                  color: 'text-sky-600',
                  bg: 'bg-sky-100',
                },
                {
                  step: 'Content & Links',
                  desc: 'Create local content & build relevant local links.',
                  icon: Link2,
                  color: 'text-orange-600',
                  bg: 'bg-orange-100',
                },
                {
                  step: 'Monitor',
                  desc: 'Track rankings, traffic, & adjust strategy based on data.',
                  icon: BarChart3,
                  color: 'text-sky-600',
                  bg: 'bg-sky-100',
                },
              ].map((st, idx) => {
                const Icon = st.icon
                return (
                  <div
                    key={st.step}
                    className="rounded-2xl border border-orange-100 bg-[#FFFBF7] p-4 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-black uppercase tracking-wider text-orange-600 bg-orange-100 px-2 py-0.5 rounded">
                          Step 0{idx + 1}
                        </span>
                        <div className={`size-7 rounded-lg ${st.bg} flex items-center justify-center`}>
                          <Icon className={`size-3.5 ${st.color}`} />
                        </div>
                      </div>
                      <h3 className="text-sm font-extrabold text-zinc-900">{st.step}</h3>
                      <p className="mt-1.5 text-[11px] text-zinc-600 leading-relaxed">{st.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 rounded-full bg-[#FFF0E6] border border-orange-300 p-4 text-center max-w-3xl mx-auto flex items-center justify-center gap-3">
              <Clock className="size-5 text-orange-600 shrink-0" />
              <p className="text-xs sm:text-sm font-semibold text-orange-950">
                This cycle repeats on an ongoing basis, since local SEO is continuous work, not a one-time project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Benefits of Local SEO */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Measurable Advantages
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Benefits of Local SEO
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              Why investing in local search authority delivers high ROI.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'More Search Visibility', desc: 'More visibility on Google Search and Google Maps', icon: Eye, color: 'text-orange-600' },
              { title: 'More Local Web Traffic', desc: 'More website traffic from local search queries', icon: Globe, color: 'text-sky-600' },
              { title: 'More Calls & Enquiries', desc: 'More calls and direct enquiries from nearby customers', icon: Phone, color: 'text-orange-600' },
              { title: 'More Direction Requests', desc: 'More direction requests leading directly to your physical location', icon: MapPin, color: 'text-sky-600' },
              { title: 'Better Keyword Rankings', desc: 'Better rankings for the local keywords that matter to your business', icon: TrendingUp, color: 'text-orange-600' },
              { title: 'Strong Online Presence', desc: 'A stronger, more trustworthy online brand presence', icon: ShieldCheck, color: 'text-sky-600' },
            ].map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <div
                  key={i}
                  className="rounded-3xl bg-white p-6 border border-orange-200/80 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
                >
                  <div className="size-11 rounded-2xl bg-orange-50 flex items-center justify-center mb-4">
                    <Icon className={`size-5 ${benefit.color}`} />
                  </div>
                  <h4 className="text-base font-extrabold text-zinc-900 mb-1">{benefit.title}</h4>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 6: Local SEO for Businesses in Ujjain and Indore + Why Choose Pragati Ujjayini */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200/80 p-6 sm:p-10 shadow-md">
            {/* Top Regional Spotlight */}
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-wider mb-3">
                <MapPin className="size-3.5" /> Regional Market Specialization
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                Local SEO for Businesses in Ujjain and Indore
              </h2>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-700 font-medium">
                Local search behaviour changes from city to city, so a business in <strong>Ujjain</strong> competes for completely different searches than one in a bigger metro market. We build simple, effective local SEO strategies for Ujjain businesses based on local competition and search habits.
              </p>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-700 font-medium">
                We also provide local SEO services in <strong>Indore</strong>, creating custom plans tailored to its specific market and customer behaviour to help you reach the right audience.
              </p>
            </div>

            {/* Bottom Why Choose Us */}
            <div className="mt-10 pt-8 border-t border-orange-200">
              <div className="text-center mb-8">
                <h3 className="text-xl font-extrabold text-zinc-900">Why Choose Pragati Ujjayini</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: 'Ujjain & Indore Expertise',
                    desc: 'We understand the Ujjain and Indore markets, not just generic national strategies.',
                    color: 'bg-orange-600',
                  },
                  {
                    title: 'Custom Location Strategy',
                    desc: 'Our local SEO strategy is built around your specific location and industry.',
                    color: 'bg-[#0284C7]',
                  },
                  {
                    title: 'GBP Core Offering',
                    desc: 'Google Business Profile optimization is part of our core offering, not an afterthought.',
                    color: 'bg-orange-600',
                  },
                  {
                    title: 'Transparent Reporting',
                    desc: 'We give you transparent, understandable reporting dashboards.',
                    color: 'bg-[#0284C7]',
                  },
                  {
                    title: 'Customized Plans',
                    desc: 'We build customized plans instead of one-size-fits-all packages.',
                    color: 'bg-orange-600',
                  },
                  {
                    title: 'Ongoing Adjustments',
                    desc: 'We monitor and adjust your strategy on an ongoing basis.',
                    color: 'bg-[#0284C7]',
                  },
                ].map((reason, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-[#FFFBF7] border border-orange-200/80 p-5 shadow-2xs flex flex-col justify-between"
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

      {/* Section 7: Who Can Benefit From Local SEO? */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Target Industries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Who Can Benefit From Local SEO?
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { title: 'Local Shops', icon: ShoppingBag, color: 'text-orange-600' },
              { title: 'Doctors & Clinics', icon: Stethoscope, color: 'text-sky-600' },
              { title: 'Restaurants', icon: Utensils, color: 'text-orange-600' },
              { title: 'Salons', icon: Scissors, color: 'text-sky-600' },
              { title: 'Hotels', icon: Hotel, color: 'text-orange-600' },
              { title: 'Real Estate', icon: Home, color: 'text-sky-600' },
              { title: 'Home Services', icon: Wrench, color: 'text-orange-600' },
              { title: 'Professional Services', icon: Briefcase, color: 'text-sky-600' },
              { title: 'Retail Businesses', icon: Building2, color: 'text-orange-600' },
              { title: 'Multi-Location Brands', icon: Award, color: 'text-sky-600' },
            ].map((who, i) => {
              const Icon = who.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-orange-200/80 bg-white p-4.5 text-center shadow-2xs hover:shadow-xs transition-shadow flex flex-col items-center justify-center"
                >
                  <div className="size-10 rounded-xl bg-orange-50 flex items-center justify-center mb-2.5">
                    <Icon className={`size-5 ${who.color}`} />
                  </div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-zinc-900">{who.title}</h4>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 8: What Results Can You Expect From Local SEO? */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200 p-6 sm:p-10 shadow-md">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
                Realistic Outcomes
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                What Results Can You Expect From Local SEO?
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                We don't promise fixed rankings or guaranteed lead numbers. No agency can ethically make that promise, since Google's ranking system depends on many factors outside anyone's direct control.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Better Visibility Over Time', desc: 'Consistent improvement in local search presence' },
                { title: 'Google Maps Pack Growth', desc: 'More visibility in Google Maps and the local pack' },
                { title: 'Increased Website Traffic', desc: 'More organic traffic from nearby searches' },
                { title: 'More Calls & Enquiries', desc: 'Higher volume of direct phone calls & contact forms' },
                { title: 'More Direction Requests', desc: 'More physical store visits via map directions' },
                { title: 'Better Keyword Rankings', desc: 'Stronger rankings for relevant local search terms' },
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
                Local SEO results vary based on competition, location, your website's condition, your Google Business Profile strength, and other ranking factors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Local SEO FAQs */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Local SEO FAQs
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              Everything you need to know about our local SEO services in Ujjain and Indore.
            </p>
          </div>

          <LocalSeoFaqAccordion />
        </div>
      </section>

      {/* Section 10: Final CTA Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-zinc-950 via-zinc-900 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Ready to Improve Your Local Search Visibility?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto font-normal">
            If your business isn't showing up where your customers are searching, a local SEO audit is the right place to start. Get a free local SEO audit with Pragati Ujjayini, or reach out to discuss a custom local SEO plan for your business in Ujjain or Indore.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-sm font-extrabold text-white shadow-xl hover:bg-orange-700 hover:scale-[1.02] transition-all"
            >
              <span>Get a Free Local SEO Audit</span>
              <ArrowRight className="size-4.5" />
            </Link>

            <a
              href="https://wa.me/919202668977?text=Hi%20Pragati%20Ujjayini%2C%20I%20want%20to%20get%20a%20free%20Local%20SEO%20audit."
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
