import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Megaphone,
  MapPin,
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
  Target,
  Zap,
  ShoppingBag,
  Stethoscope,
  Utensils,
  Scissors,
  Hotel,
  Home,
  Check,
  Smartphone,
  Layers,
  Percent,
} from 'lucide-react'
import { LocalAdsFaqAccordion } from './local-ads-faq-accordion'

export const metadata: Metadata = {
  title: 'Local Google & Meta Ads Services in Ujjain & Indore | High ROI Paid Ads',
  description:
    'Generate instant local leads, phone calls, and store visits with hyper-targeted Google & Meta (Facebook/Instagram) ads in Ujjain & Indore. Get a free campaign audit today!',
  alternates: {
    canonical: 'https://www.pragatiujjayini.com/services/local-google-meta-ads',
  },
  openGraph: {
    title: 'Local Google & Meta Ads Services in Ujjain & Indore | Pragati Ujjayini',
    description:
      'Drive qualified leads and WhatsApp inquiries with precision Google Ads and Meta advertising for local businesses across Ujjain, Indore, and Bharat.',
    url: 'https://www.pragatiujjayini.com/services/local-google-meta-ads',
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
      "logo": "https://www.pragatiujjayini.com/images/logo.png",
      "image": "https://www.pragatiujjayini.com/images/logo.png",
      "telephone": "+91-9202668977",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ujjain",
        "addressRegion": "Madhya Pradesh",
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
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.pragatiujjayini.com/services/local-google-meta-ads/#service",
      "name": "Local Google & Meta Ads Services",
      "serviceType": "Paid Search & Social Media Advertising",
      "description": "Hyper-targeted Google Ads, Meta Facebook and Instagram ads, and Click-to-WhatsApp campaigns for local businesses in Ujjain and Indore looking to generate immediate phone calls, leads, and foot traffic.",
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
      "url": "https://www.pragatiujjayini.com/services/local-google-meta-ads"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pragatiujjayini.com/services/local-google-meta-ads/#breadcrumb",
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
          "item": "https://www.pragatiujjayini.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Local Google & Meta Ads",
          "item": "https://www.pragatiujjayini.com/services/local-google-meta-ads"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.pragatiujjayini.com/services/local-google-meta-ads/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are Local Google & Meta Ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local Google and Meta Ads are hyper-targeted paid advertising campaigns tailored for local businesses. Google Ads put your business at the top when people actively search for your services, while Meta Ads showcase your offers to people living within your specific neighborhood or city radius."
          }
        },
        {
          "@type": "Question",
          "name": "Which platform is better for my local business: Google Ads or Meta Ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google Ads capture high-intent customers actively searching right now. Meta Ads build awareness, showcase visual products or services, and generate affordable direct inquiries. Most businesses achieve peak ROI using a coordinated hybrid strategy."
          }
        },
        {
          "@type": "Question",
          "name": "Can ads send leads directly to our WhatsApp number?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Click-to-WhatsApp ads on Meta and Google allow prospective customers to tap your ad and immediately start a chat with your team on WhatsApp, pre-filled with the inquiry details."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly do Google and Meta Ads start generating customer inquiries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike organic SEO which takes time to mature, paid campaigns can begin driving phone calls, WhatsApp inquiries, and website leads within 24 to 48 hours of launch."
          }
        }
      ]
    }
  ]
}

export default function LocalGoogleMetaAdsPage() {
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
              Local Google &amp; Meta Ads
            </span>
          </nav>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-orange-200 text-xs font-semibold text-orange-700 shadow-2xs">
            <Zap className="size-3.5 text-orange-500" />
            Instant Inquiries &amp; Geo-Targeted Local Leads
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
                <span>Paid Search &amp; Social Ads</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 leading-[1.15]">
                <span className="text-orange-600">Local Google &amp; Meta Ads:</span>{' '}
                Instant Leads, Calls &amp; Store Footfall
              </h1>

              <p className="mt-5 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                Put your business right in front of high-intent buyers in Ujjain, Indore, and your target local radius. We build, manage, and optimize Google Search, Call-only ads, and high-converting Meta (Facebook &amp; Instagram) campaigns designed for direct ROI — not just empty clicks.
              </p>

              {/* Alert Callout Box */}
              <div className="mt-6 p-4.5 rounded-2xl bg-[#FFF0E6] border-l-4 border-orange-500 text-zinc-800 text-sm leading-relaxed flex items-start gap-3 shadow-2xs">
                <Target className="size-5 text-orange-600 shrink-0 mt-0.5" />
                <p>
                  Tired of burning budget on generic &ldquo;Boost Post&rdquo; buttons with zero inquiries? We use precision geo-fencing, negative keywords, and Click-to-WhatsApp funnels that turn every rupee spent into measurable local leads.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-600/25 transition-all duration-200 hover:bg-orange-700 hover:scale-[1.02]"
                >
                  <span>Get Free Ads Consultation</span>
                  <ArrowRight className="size-4.5" />
                </Link>

                <a
                  href="https://wa.me/919202668977?text=Hi%20Pragati%20Ujjayini%2C%20I%20want%20to%20discuss%20Local%20Google%20and%20Meta%20Ads."
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
                  <p className="text-xl sm:text-2xl font-black text-orange-600">4.8x</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">Average Target ROAS</p>
                </div>
                <div className="rounded-2xl border border-sky-100 bg-white p-4 text-center shadow-xs">
                  <p className="text-xl sm:text-2xl font-black text-[#0284C7]">&lt; 24h</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">Fast Campaign Setup</p>
                </div>
                <div className="rounded-2xl border border-orange-100 bg-white p-4 text-center shadow-xs">
                  <p className="text-xl sm:text-2xl font-black text-orange-600">100%</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">Geo-Radius Targeting</p>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Graphic Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white p-6 sm:p-7 shadow-xl border border-orange-200/80">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                      <Megaphone className="size-5" />
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-wider">
                        Live Ads Engine
                      </span>
                      <h3 className="text-sm font-extrabold text-zinc-900 mt-1">Google + Meta Performance</h3>
                    </div>
                  </div>
                  <span className="flex size-3 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="mt-5 space-y-3.5">
                  <div className="p-3.5 rounded-2xl bg-[#FFF6F0] border border-orange-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-orange-600 text-white font-extrabold text-xs flex items-center justify-center">Ad</div>
                      <div>
                        <p className="text-xs font-bold text-zinc-900">Google Search: Top Placement</p>
                        <p className="text-[10px] text-zinc-500">Targeting High-Intent Local Keywords</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold bg-orange-100 text-orange-800 px-2.5 py-1 rounded-full">Position #1</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-[#0284C7] text-white font-extrabold text-xs flex items-center justify-center">Meta</div>
                      <div>
                        <p className="text-xs font-bold text-zinc-900">Instagram &amp; FB Local Feeds</p>
                        <p className="text-[10px] text-zinc-500">Sponsored Video &amp; Carousel Creatives</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold bg-sky-100 text-sky-800 px-2.5 py-1 rounded-full">High CTR</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="size-5 text-emerald-600" />
                      <div>
                        <p className="text-xs font-bold text-zinc-900">Direct WhatsApp Leads</p>
                        <p className="text-[10px] text-zinc-500">1-Tap Inquiry Direct to Your Phone</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700">+340% Inquiries</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-100">
                  <div className="flex items-center gap-2 rounded-xl bg-zinc-100 p-2.5 text-xs text-zinc-600">
                    <MapPin className="size-4 text-orange-600 shrink-0" />
                    <span className="truncate">Active Geo-Radius: 5-15 km around Ujjain &amp; Indore</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What Are Local Google & Meta Ads? */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200/80 p-6 sm:p-10 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
                  Paid Advertising Decoded
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                  What Are Local Google &amp; Meta Ads?
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600">
                  Local Google &amp; Meta Ads are hyper-targeted paid campaigns engineered specifically to capture buyers in your immediate geographical market. Unlike national campaigns that spend heavily without local relevance, local advertising focuses only on people who can actually visit your shop or hire your service.
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600">
                  <strong>Google Ads</strong> targets users who are <em>actively searching</em> right now for immediate answers (e.g., &ldquo;best eye clinic in Ujjain&rdquo; or &ldquo;interior designer in Indore&rdquo;). <strong>Meta Ads</strong> (Instagram and Facebook) targets users based on their exact location, age, interests, and habits, showing attractive visual creatives and video reels that turn passive scrollers into interested inquiries.
                </p>

                <div className="mt-6 pt-5 border-t border-zinc-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                    Why Local Ads Deliver Outsized Results:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Immediate visibility at the very top of Google Search and Instagram feeds from day one',
                      'Hyper-targeted geo-fencing so your money is never wasted on people outside your service area',
                      'Direct WhatsApp and Click-to-Call actions that connect prospects directly with your staff',
                      'A/B testing of creatives, offers, and hooks to drive down your Cost Per Acquisition (CPA)',
                      'Perfect synergy with Local SEO — dominate both the organic map pack and paid positions simultaneously',
                    ].map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-800 font-semibold">
                        <CheckCircle2 className="size-4 text-orange-600 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-3.5">
                <div className="p-4 rounded-2xl bg-[#FFF6F0] border border-orange-200 flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0">
                    <Target className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Google Search Ads (Intent)</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Capture customers actively searching for your service</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F0F9FF] border border-sky-200 flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-[#0284C7] text-white flex items-center justify-center shrink-0">
                    <Smartphone className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Meta Feed &amp; Reels (Attention)</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Captivate local audiences on Instagram and Facebook</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900 text-white flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Geo-Radius &amp; Pin Codes</h4>
                    <p className="text-xs text-zinc-300 mt-0.5">1-15 km radius around your shop or hospital</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Does Your Business Need Local Google & Meta Ads? */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Signs You Need Paid Ads
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Does Your Business Need Local Google &amp; Meta Ads?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              Paid ads are the fastest accelerator for local customer acquisition. You should run campaigns if any of these sound familiar:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Need Leads Right Now',
                desc: 'SEO takes a few months to mature; paid ads put high-intent inquiries on your desk within 24 to 48 hours.',
                icon: Zap,
                color: 'text-orange-600',
                bg: 'bg-orange-100',
              },
              {
                title: 'Outrank Entrenched Competitors',
                desc: 'If older competitors hold legacy map pack spots, Google Ads lets you leapfrog them to the absolute top of the page.',
                icon: TrendingUp,
                color: 'text-sky-600',
                bg: 'bg-sky-100',
              },
              {
                title: 'Festival & Seasonal Offers',
                desc: 'Running a Diwali, wedding season, or seasonal discount? Ads give you massive local reach for short promotional windows.',
                icon: Sparkles,
                color: 'text-amber-600',
                bg: 'bg-amber-100',
              },
              {
                title: 'New Branch or Store Opening',
                desc: 'Announce your opening to every resident within 5 km on Instagram and Google Maps with precision radius campaigns.',
                icon: Building2,
                color: 'text-emerald-600',
                bg: 'bg-emerald-100',
              },
              {
                title: 'Want Direct WhatsApp Leads',
                desc: 'Bypass cumbersome contact forms. Send interested buyers straight into a friendly WhatsApp conversation.',
                icon: MessageCircle,
                color: 'text-orange-600',
                bg: 'bg-orange-100',
              },
              {
                title: 'Wasted Money on "Boost Post"',
                desc: 'Boosted posts bring empty likes. You need conversion-focused campaigns built in Ads Manager for real commercial results.',
                icon: Target,
                color: 'text-sky-600',
                bg: 'bg-sky-100',
              },
              {
                title: 'High-Ticket Local Services',
                desc: 'For clinics, real estate, interior design, and legal services, a single customer easily pays for months of ad spend.',
                icon: ShieldCheck,
                color: 'text-amber-600',
                bg: 'bg-amber-100',
              },
              {
                title: 'Track Every Rupee Spent',
                desc: 'Never wonder if marketing works. We track calls, forms, and WhatsApp inquiries down to the exact rupee.',
                icon: BarChart3,
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
        </div>
      </section>

      {/* Section 3: Our 6 Core Local Ads Modules */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              End-to-End Ads Management
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Our Local Ads Management System
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              We handle strategy, copywriting, creatives, targeting, and daily bid optimizations so you can focus on servicing new clients.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {[
              {
                num: '01',
                title: 'Hyper-Local Google Search & Call-Only Ads',
                desc: 'Target people searching for your exact service with high commercial intent. We set up call extensions and location assets so searchers can dial your front desk with a single tap.',
                icon: Target,
                items: [
                  'High-intent keyword research (near me & city terms)',
                  'Negative keyword lists to block wasted spend',
                  'Call-only ad campaigns for immediate phone inquiries',
                  'Location extensions linked to your Google Business Profile',
                ],
              },
              {
                num: '02',
                title: 'Meta Ads (Instagram & Facebook Lead Generation)',
                desc: 'Visually capture local customers on Instagram and Facebook with attention-grabbing carousels, video reels, and instant lead forms that auto-fill contact information.',
                icon: Smartphone,
                items: [
                  'Targeted audience profiling by location and interests',
                  'Instant lead gen forms with built-in spam verification',
                  'Instagram Reels and Stories ad formatting',
                  'Retargeting website visitors and past page engagers',
                ],
              },
              {
                num: '03',
                title: 'Click-to-WhatsApp Ads Integration',
                desc: 'For Indian businesses, WhatsApp is where deals get closed. We build ads that open a WhatsApp chat directly on the user’s phone with a pre-filled greeting message.',
                icon: MessageCircle,
                items: [
                  '1-tap chat initiation directly from Instagram & Facebook',
                  'Automated welcome greeting and quick reply triggers',
                  'Catalog showcase integration for products & services',
                  'Lead tracking to calculate exact cost per WhatsApp conversation',
                ],
              },
              {
                num: '04',
                title: 'Precision Geo-Fencing & Radius Targeting',
                desc: 'We set up geographic boundaries ranging from a 2 km radius around your storefront to city-wide campaigns across Ujjain, Indore, Dewas, and neighboring regions.',
                icon: MapPin,
                items: [
                  'Pin code and neighborhood specific bidding',
                  'Exclusion of non-serviceable pin codes and regions',
                  'Store visit optimization for physical retail and clinics',
                  'Commuter and resident demographic segmentation',
                ],
              },
              {
                num: '05',
                title: 'High-Converting Ad Creatives & Local Copywriting',
                desc: 'Generic ad copy gets ignored. We craft culturally resonant English and Hinglish hooks, professional banners, and festival creatives tailored for local buyers.',
                icon: Sparkles,
                items: [
                  'Culturally resonant Hinglish and English ad copies',
                  'Compelling promotional banners and offer layouts',
                  'Clear, frictionless call-to-action (CTA) buttons',
                  'Multi-variant testing to discover winning hooks',
                ],
              },
              {
                num: '06',
                title: 'Conversion Tracking & Continuous ROAS Optimization',
                desc: 'We don’t just launch campaigns and walk away. We monitor budgets, bids, and keyword performance daily to progressively lower your Cost Per Lead (CPL).',
                icon: BarChart3,
                items: [
                  'End-to-end conversion tracking on website and calls',
                  'Weekly budget optimization and bid management',
                  'Transparent reporting on leads and return on ad spend',
                  'Dedicated account strategist accessible over WhatsApp and call',
                ],
              },
            ].map((part) => {
              const ServiceIcon = part.icon
              return (
                <div
                  key={part.num}
                  className="rounded-3xl border border-orange-200/80 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
                >
                  <div className="lg:col-span-4 bg-[#FFF4ED] p-6 sm:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-orange-200/60">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-black text-orange-600 bg-orange-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          Module {part.num}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-zinc-900 tracking-tight">
                        {part.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                        {part.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-orange-200/60 flex items-center gap-3">
                      <div className="size-9 rounded-xl bg-orange-600 text-white flex items-center justify-center">
                        <ServiceIcon className="size-4.5" />
                      </div>
                      <span className="text-xs font-bold text-orange-900">High-Conversion Execution</span>
                    </div>
                  </div>

                  <div className="lg:col-span-8 p-6 sm:p-7 flex flex-col justify-center bg-white">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
                      Key Deliverables &amp; Activities:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {part.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 rounded-xl bg-orange-50/50 border border-orange-100/60 p-3">
                          <CheckCircle2 className="size-4 text-orange-600 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-semibold text-zinc-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Google Ads vs Meta Ads Comparison Table */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200 p-6 sm:p-10 shadow-md">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
                Strategic Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                Google Ads vs. Meta Ads: Which Do You Need?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600">
                Understanding where each platform shines helps you allocate your budget for maximum local impact.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-orange-200 bg-[#FFF4ED]">
                    <th className="p-4 font-bold text-zinc-900 rounded-l-2xl">Feature / Channel</th>
                    <th className="p-4 font-bold text-orange-700">Google Ads (Search &amp; Maps)</th>
                    <th className="p-4 font-bold text-[#0284C7] rounded-r-2xl">Meta Ads (Instagram &amp; FB)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr>
                    <td className="p-4 font-bold text-zinc-800">User Intent</td>
                    <td className="p-4 text-zinc-600">High intent: User actively searches to buy or book now</td>
                    <td className="p-4 text-zinc-600">Visual discovery: User browses feed and discovers offer</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-zinc-800">Best For</td>
                    <td className="p-4 text-zinc-600">Emergency services, clinics, repairs, legal, B2B services</td>
                    <td className="p-4 text-zinc-600">Restaurants, retail, salons, real estate, lifestyle, offers</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-zinc-800">Primary Ad Formats</td>
                    <td className="p-4 text-zinc-600">Text Search ads, Call-only ads, Map Pack Promoted Pins</td>
                    <td className="p-4 text-zinc-600">Video Reels, Image Carousels, Instant Lead Forms, Stories</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-zinc-800">Lead Conversion Action</td>
                    <td className="p-4 text-zinc-600">Direct phone call or website inquiry form</td>
                    <td className="p-4 text-zinc-600">Direct WhatsApp chat or instant native lead form</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-zinc-800">Cost Structure</td>
                    <td className="p-4 text-zinc-600">Pay Per Click (PPC) — pay only when someone clicks or calls</td>
                    <td className="p-4 text-zinc-600">CPM / CPL — lower cost per impression and direct chat lead</td>
                  </tr>
                  <tr className="bg-orange-50/40">
                    <td className="p-4 font-bold text-orange-950">Pragati Recommendation</td>
                    <td className="p-4 font-semibold text-orange-800" colSpan={2}>
                      Combine both: Capture urgent buyers on Google Ads while building daily community awareness and WhatsApp inquiries on Meta!
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Who Can Benefit From Local Ads? */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Industry Applications
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Who Can Benefit From Local Google &amp; Meta Ads?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              Our targeted ad campaigns generate steady inquiries for diverse local business categories across central India:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { title: 'Doctors & Clinics', icon: Stethoscope, color: 'text-rose-600', bg: 'bg-rose-50' },
              { title: 'Local Shops & Retail', icon: ShoppingBag, color: 'text-orange-600', bg: 'bg-orange-50' },
              { title: 'Restaurants & Cafes', icon: Utensils, color: 'text-amber-600', bg: 'bg-amber-50' },
              { title: 'Real Estate & Builders', icon: Home, color: 'text-sky-600', bg: 'bg-sky-50' },
              { title: 'Salons & Spas', icon: Scissors, color: 'text-purple-600', bg: 'bg-purple-50' },
              { title: 'Hotels & Hospitality', icon: Hotel, color: 'text-indigo-600', bg: 'bg-indigo-50' },
              { title: 'Coaching & Education', icon: Award, color: 'text-blue-600', bg: 'bg-blue-50' },
              { title: 'Home & Professional Services', icon: Briefcase, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { title: 'Startups & Tech Brands', icon: Zap, color: 'text-orange-600', bg: 'bg-orange-50' },
              { title: 'Growing Local Brands', icon: TrendingUp, color: 'text-teal-600', bg: 'bg-teal-50' },
            ].map((who, idx) => {
              const Icon = who.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-orange-200/80 bg-white p-4.5 text-center shadow-2xs hover:shadow-sm hover:border-orange-300 transition-all flex flex-col items-center justify-center gap-3"
                >
                  <div className={`size-11 rounded-xl ${who.bg} flex items-center justify-center`}>
                    <Icon className={`size-5 ${who.color}`} />
                  </div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-zinc-900">{who.title}</h4>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 6: Our 4-Step Process */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Our 4-Step Campaign Launch Process
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              A transparent, structured approach to get your campaigns generating profitable leads as fast as possible.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Market & Competitor Audit',
                desc: 'We analyze what your local competitors are bidding on, identify high-volume local search terms, and plan your ideal budget.',
              },
              {
                step: '02',
                title: 'Creative & Funnel Design',
                desc: 'We write compelling Hinglish/English copy, design on-brand image and video assets, and configure your Click-to-WhatsApp funnel.',
              },
              {
                step: '03',
                title: 'Precision Geo-Targeting & Launch',
                desc: 'We configure exact radius coordinates, pin code inclusions/exclusions, negative keywords, and tracking pixels before campaign go-live.',
              },
              {
                step: '04',
                title: 'Daily Optimization & Reporting',
                desc: 'We monitor lead volume, eliminate non-converting terms, refine bid strategies, and provide clear weekly lead count reports.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-orange-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-orange-600/30">Step {item.step}</span>
                  <h3 className="text-base font-extrabold text-zinc-900 mt-2">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: FAQs */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Local Google &amp; Meta Ads FAQs
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              Clear answers to help you make informed decisions regarding your paid marketing investment.
            </p>
          </div>

          <LocalAdsFaqAccordion />
        </div>
      </section>

      {/* Section 8: Final CTA Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-zinc-950 via-zinc-900 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Ready to Accelerate Your Local Inquiries Today?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Stop waiting months for organic traction alone. Combine local SEO with high-ROI Google and Meta Ads to capture every customer looking for your services in Ujjain and Indore right now.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-sm font-extrabold text-white shadow-xl hover:bg-orange-700 hover:scale-[1.02] transition-all"
            >
              <span>Get Free Ads Consultation</span>
              <ArrowRight className="size-4.5" />
            </Link>

            <a
              href="https://wa.me/919202668977?text=Hi%20Pragati%20Ujjayini%2C%20I%20want%20to%20get%20started%20with%20Local%20Google%20and%20Meta%20Ads."
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
