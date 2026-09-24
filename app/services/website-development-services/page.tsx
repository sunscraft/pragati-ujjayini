import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Globe,
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
  FileText,
  MessageSquare,
  Wrench,
  Check,
  Target,
  Layout,
  Smartphone,
  Zap,
  ShoppingBag,
  RefreshCw,
  Code2,
  LifeBuoy,
  HelpCircle,
  DollarSign,
  Layers,
} from 'lucide-react'
import { WebsiteDevFaqAccordion } from './website-dev-faq-accordion'

export const metadata: Metadata = {
  title: 'Top Website Development Services in Ujjain & Indore',
  description:
    'Professional website development services in Ujjain & Indore. Upgrade your outdated site into a modern, mobile-friendly sales machine.',
  alternates: {
    canonical: 'https://www.pragatiujjayini.com/services/website-development-services/',
  },
  openGraph: {
    title: 'Top Website Development Services in Ujjain & Indore',
    description:
      'Professional website development services in Ujjain & Indore. Upgrade your outdated site into a modern, mobile-friendly sales machine.',
    url: 'https://www.pragatiujjayini.com/services/website-development-services/',
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
      "sameAs": [
        "https://share.google/VuMw4tqyzeo5P2OMa"
      ],
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
      "@id": "https://www.pragatiujjayini.com/services/website-development-services/#service",
      "name": "Website Development Services",
      "serviceType": "Website Development",
      "description": "Website development services for businesses in Ujjain and Indore, including business websites, responsive websites, WordPress development, SEO-friendly development, e-commerce websites, website redesign, custom development, and ongoing maintenance.",
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
      "url": "https://www.pragatiujjayini.com/services/website-development-services/"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pragatiujjayini.com/services/website-development-services/#breadcrumb",
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
          "name": "Website Development Services",
          "item": "https://www.pragatiujjayini.com/services/website-development-services/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.pragatiujjayini.com/services/website-development-services/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is website development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Website development is the process of building a website that works properly, looks professional, and gives visitors a smooth experience on any device."
          }
        },
        {
          "@type": "Question",
          "name": "What does a website development service include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It typically includes planning, design, development, content integration, SEO setup, testing, and launch support."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a business website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A straightforward business website usually takes a few weeks from start to launch. E-commerce or custom-functionality projects take longer, depending on scope."
          }
        },
        {
          "@type": "Question",
          "name": "Do you build WordPress websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Pragati Ujjayini builds websites on WordPress so businesses can manage their content easily after launch."
          }
        },
        {
          "@type": "Question",
          "name": "Will the website work on mobile phones?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every website built by Pragati Ujjayini is responsive and designed to work across mobile, tablet, and desktop screens."
          }
        },
        {
          "@type": "Question",
          "name": "Can you redesign my existing website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Pragati Ujjayini can modernize an existing website's design, structure, and performance."
          }
        },
        {
          "@type": "Question",
          "name": "Can you build an e-commerce website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. E-commerce websites can include product pages, payment gateway integration, shopping cart functionality, and checkout."
          }
        },
        {
          "@type": "Question",
          "name": "Will my website be SEO-friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Websites are built with clean structure, proper headings, and technical SEO foundations."
          }
        },
        {
          "@type": "Question",
          "name": "Can I update my website myself?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if the website is built on a CMS such as WordPress. You can manage text and image updates yourself, while structural changes may require developer support."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide website maintenance after launch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Pragati Ujjayini offers ongoing maintenance, including updates, security checks, performance checks, and bug fixes."
          }
        },
        {
          "@type": "Question",
          "name": "How much does website development cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Website development cost depends on the website's size, complexity, functionality, content requirements, integrations, and maintenance needs."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide website development services in Ujjain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Pragati Ujjayini provides website development services for businesses across Ujjain."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide website development services in Indore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Pragati Ujjayini provides website development services for businesses in Indore."
          }
        }
      ]
    }
  ]
}

export default function WebsiteDevServicesPage() {
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
              Website Development Services
            </span>
          </nav>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-orange-200 text-xs font-semibold text-orange-700 shadow-2xs">
            <Globe className="size-3.5 text-orange-500" />
            Fast, Mobile-Friendly & High-Converting Websites
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
                <span>Custom Website Development</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 leading-[1.15]">
                <span className="text-orange-600">Custom Website Development</span> Services in Ujjain & Indore
              </h1>

              <p className="mt-5 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                We build websites that work properly, load fast, and turn visitors into enquiries. Our website development services cover new websites, redesigns, e-commerce, and ongoing support for businesses in Ujjain and Indore.
              </p>

              {/* Alert Callout Box */}
              <div className="mt-6 p-4.5 rounded-2xl bg-[#FFF0E6] border-l-4 border-orange-500 text-zinc-800 text-sm leading-relaxed flex items-start gap-3 shadow-2xs">
                <Globe className="size-5 text-orange-600 shrink-0 mt-0.5" />
                <p>
                  If your current website looks outdated, loads slowly, or doesn't work well on mobile, it's costing you customers. That's what we fix.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-600/25 transition-all duration-200 hover:bg-orange-700 hover:scale-[1.02]"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="size-4.5" />
                </Link>

                <a
                  href="https://wa.me/919202668977?text=Hi%20Pragati%20Ujjayini%2C%20I%20want%20to%20discuss%20Website%20Development%20Services."
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
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">Mobile Responsive</p>
                </div>
                <div className="rounded-2xl border border-sky-100 bg-white p-4 text-center shadow-xs">
                  <p className="text-xl sm:text-2xl font-black text-[#0284C7]">&lt; 2s</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">Fast Load Speed</p>
                </div>
                <div className="rounded-2xl border border-orange-100 bg-white p-4 text-center shadow-xs">
                  <p className="text-xl sm:text-2xl font-black text-orange-600">SEO</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">Search Ready Code</p>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Graphic Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white p-6 sm:p-7 shadow-xl border border-orange-200/80">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                      <Layout className="size-5" />
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-wider">
                        Responsive Web Design
                      </span>
                      <h3 className="text-sm font-extrabold text-zinc-900 mt-1">Modern Sales Machine</h3>
                    </div>
                  </div>
                  <span className="flex size-3 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="mt-5 space-y-3.5">
                  <div className="p-3.5 rounded-2xl bg-[#FFF6F0] border border-orange-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Smartphone className="size-4 text-orange-600" />
                      <div>
                        <p className="text-xs font-bold text-zinc-900">Mobile-First Optimization</p>
                        <p className="text-[10px] text-zinc-500">Perfect on Mobile, Tablet & Desktop</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">Optimized</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Zap className="size-4 text-sky-600" />
                      <span className="text-xs font-semibold text-zinc-700">Ultra Page Speed & Technical SEO</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600">Grade A</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="size-4 text-amber-500" />
                      <span className="text-xs font-semibold text-zinc-700">Lead-Capture & Enquiry Forms</span>
                    </div>
                    <span className="text-xs font-bold text-amber-600">Active Setup</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-100">
                  <div className="flex items-center gap-2 rounded-xl bg-zinc-100 p-2.5 text-xs text-zinc-600">
                    <Globe className="size-4 text-zinc-400 shrink-0" />
                    <span className="truncate">www.yourbusiness.com</span>
                    <span className="ml-auto text-[10px] font-bold text-white bg-orange-600 px-2 py-0.5 rounded-md">Live Preview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What Is Website Development? */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200/80 p-6 sm:p-10 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
                  Defining Digital Infrastructure
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                  What Is Website Development?
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600">
                  Website development is the process of building a website that works properly, looks professional, loads quickly, and gives visitors an easy experience on both desktop and mobile.
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600">
                  It includes the website's structure, functionality, content management system (CMS), responsive design, performance, and SEO foundations. A good website isn't just about looks. It also needs to work well for search engines and everyday visitors.
                </p>

                <div className="mt-6 pt-5 border-t border-zinc-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                    Core Development Solutions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'WordPress website development',
                      'Responsive web design',
                      'E-commerce website Ujjain',
                      'Custom website Indore',
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
                    <Smartphone className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Responsive Layouts</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Seamless UI across mobile & desktop</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F0F9FF] border border-sky-200 flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-[#0284C7] text-white flex items-center justify-center shrink-0">
                    <Code2 className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">WordPress & CMS Setup</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Easy content management control</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900 text-white flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-amber-500 text-zinc-950 flex items-center justify-center shrink-0 font-bold">
                    <Zap className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Speed & SEO Foundations</h4>
                    <p className="text-xs text-zinc-300 mt-0.5">Fast page speed & technical SEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Does Your Business Need a New Website? */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Redesign Indicators
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Does Your Business Need a New Website?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              You may need a new website or a redesign if any of these sound familiar. An outdated website is already costing you enquiries and trust.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "No Website Yet", desc: "You don't have a website yet for your business.", icon: Globe, color: 'text-orange-600', bg: 'bg-orange-100' },
              { title: 'Outdated Design', desc: 'Your current website looks outdated or unprofessional.', icon: Layout, color: 'text-sky-600', bg: 'bg-sky-100' },
              { title: 'Mobile Issues', desc: "Your website doesn't work properly on mobile or tablet screens.", icon: Smartphone, color: 'text-orange-600', bg: 'bg-orange-100' },
              { title: 'Slow Load Times', desc: 'Your website loads slowly, losing impatient visitors.', icon: Zap, color: 'text-sky-600', bg: 'bg-sky-100' },
              { title: 'Broken Forms & Links', desc: 'You have broken contact forms, error messages, or dead links.', icon: FileText, color: 'text-orange-600', bg: 'bg-orange-100' },
              { title: 'Hard to Navigate', desc: 'Visitors find your website confusing or hard to navigate.', icon: Search, color: 'text-sky-600', bg: 'bg-sky-100' },
              { title: 'Zero Enquiries', desc: "Your website isn't generating lead forms or phone enquiries.", icon: Phone, color: 'text-orange-600', bg: 'bg-orange-100' },
              { title: 'Missing Features', desc: 'You need booking, catalog, or e-commerce features.', icon: ShoppingBag, color: 'text-sky-600', bg: 'bg-sky-100' },
              { title: 'Hard to Manage', desc: 'Your current website is hard to update or edit yourself.', icon: Code2, color: 'text-amber-600', bg: 'bg-amber-100' },
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
                If any of these sound familiar, an outdated website is already costing you enquiries and trust. We upgrade your site into a modern, mobile-friendly sales machine.
              </p>
            </div>

            <Link
              href="/#contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-zinc-800 transition-colors"
            >
              <span>Get a Website Audit</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Our Website Development Services (8 Connected Parts) */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Complete 8-Part Service
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Our Website Development Services
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              We handle website development as one connected process, from planning to launch and support.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {[
              {
                num: '01',
                title: 'Business Website Development',
                desc: 'We build professional business websites with service pages, an about page, contact details, and custom layouts suited to your business.',
                items: ['Custom service layouts', 'Brand-tailored structure', 'Click-to-call & enquiry forms', 'Location details & map integration'],
              },
              {
                num: '02',
                title: 'Responsive Website Development',
                desc: 'We build websites that work well on mobile, tablet, and desktop screens. Since most local searches happen on mobile, this is essential for every website we build.',
                items: ['Mobile-first layout design', 'Touch-friendly navigation', 'Optimized assets for fast load', 'Cross-browser compatibility'],
              },
              {
                num: '03',
                title: 'WordPress Website Development',
                desc: 'We build websites on WordPress, so you can manage your own content without needing a developer for small changes.',
                items: ['Easy content management', 'Plugin integration', 'Simple, editable structure', 'Training for your team'],
              },
              {
                num: '04',
                title: 'SEO-Friendly Website Development',
                desc: 'We structure your website’s code, headings, and pages so they support your visibility in search results, not work against it.',
                link: { text: 'Explore our local SEO services →', href: '/services/local-seo-services' },
                items: ['Clean site structure', 'Proper heading hierarchy', 'Page speed optimization', 'Technical SEO foundations'],
              },
              {
                num: '05',
                title: 'E-commerce Website Development',
                desc: 'We set up online stores for businesses that sell products online.',
                items: ['Product & category pages', 'Shopping cart setup', 'Payment gateway integration', 'Checkout flow & basic inventory'],
              },
              {
                num: '06',
                title: 'Website Redesign',
                desc: 'We modernize your existing website without always rebuilding it from scratch.',
                items: ['Updated design aesthetics', 'Improved navigation', 'Mobile optimization', 'Better performance & structural fixes'],
              },
              {
                num: '07',
                title: 'Custom Website Development',
                desc: 'We build custom functionality for businesses with specific needs.',
                items: ['Booking & appointment systems', 'Third-party API integrations', 'Membership features', 'Business-specific requirements'],
              },
              {
                num: '08',
                title: 'Website Maintenance & Support',
                desc: 'We keep your website running smoothly after launch.',
                items: ['Regular updates & backups', 'Security monitoring', 'Bug fixes & performance checks', 'Ongoing support'],
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
                    Key Features Included:
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

      {/* Section 4: Our Website Development Process (8 Steps) */}
      <section className="py-14 sm:py-20 bg-[#FFF5EE]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200 p-6 sm:p-10 shadow-md">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
                Structured Development Workflow
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                Our Website Development Process
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600">
                We follow a clear process for every website project.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: 'Requirement & Discovery', desc: 'Understand business, audience, goals, & website requirements.', icon: FileText },
                { step: 'Website Planning', desc: 'Decide pages, navigation, structure, & functionality.', icon: Layout },
                { step: 'Design', desc: 'Create layout & visual structure with visitors in mind.', icon: Code2 },
                { step: 'Development', desc: 'Build on the right platform or CMS for your needs.', icon: Wrench },
                { step: 'Content Integration', desc: 'Add text, images, services, & other content.', icon: FileText },
                { step: 'SEO & Performance Setup', desc: 'Set up basic technical SEO, mobile responsiveness, & speed.', icon: Zap },
                { step: 'Testing', desc: 'Test across mobile, desktop, browsers, forms, & links.', icon: CheckCircle2 },
                { step: 'Launch & Support', desc: 'Launch after final checks & provide post-launch support.', icon: Globe },
              ].map((st, idx) => {
                const Icon = st.icon
                return (
                  <div
                    key={st.step}
                    className="rounded-2xl border border-orange-100 bg-[#FFFBF7] p-4.5 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-black uppercase tracking-wider text-orange-600 bg-orange-100 px-2 py-0.5 rounded">
                          Step 0{idx + 1}
                        </span>
                        <div className="size-7 rounded-lg bg-orange-100 flex items-center justify-center">
                          <Icon className="size-3.5 text-orange-600" />
                        </div>
                      </div>
                      <h3 className="text-sm font-extrabold text-zinc-900">{st.step}</h3>
                      <p className="mt-1.5 text-[11px] text-zinc-600 leading-relaxed">{st.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Benefits of Professional Website Development (10 Benefits) */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Business Advantages
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Benefits of Professional Website Development
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              A high-performing website is the foundation of your digital marketing engine.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              'A professional online presence',
              'Better mobile experience for visitors',
              'Faster website performance',
              'Easier navigation for customers',
              'Better overall user experience',
              'SEO-friendly structure',
              'More enquiry opportunities',
              'A website that can scale as you grow',
              'Easier content management',
              'Better integration with marketing channels',
            ].map((benefit, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-5 border border-orange-200/80 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div className="size-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mb-3">
                  <CheckCircle2 className="size-5" />
                </div>
                <p className="text-xs sm:text-sm font-extrabold text-zinc-900 leading-snug">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Website Development for Different Business Needs */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Tailored Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Website Development for Different Business Needs
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'Small Local Businesses', desc: 'A simple, fast, and professional business website.', icon: Building2 },
              { title: 'Service Businesses', desc: 'Service pages, enquiry forms, and location pages.', icon: Briefcase },
              { title: 'E-commerce Businesses', desc: 'Product pages, categories, checkout, and payment integration.', icon: ShoppingBag },
              { title: 'Multi-Location Brands', desc: 'Location-specific pages and a website structure that can scale.', icon: MapPin },
              { title: 'Growing Businesses', desc: 'Custom features and integrations as your requirements expand.', icon: TrendingUp },
            ].map((cat, i) => {
              const Icon = cat.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-orange-200/80 bg-white p-5 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
                >
                  <div className="size-10 rounded-xl bg-orange-50 flex items-center justify-center mb-3">
                    <Icon className="size-5 text-orange-600" />
                  </div>
                  <h4 className="text-sm font-extrabold text-zinc-900 mb-1">{cat.title}</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">{cat.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 7: Regional Spotlight (Ujjain & Indore) + Why Choose Us */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200/80 p-6 sm:p-10 shadow-md">
            {/* Top Regional Spotlight */}
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-wider mb-3">
                <MapPin className="size-3.5" /> Regional Expertise
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                Website Development Services in Ujjain and Indore
              </h2>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-700 font-medium">
                We build professional websites for businesses in <strong>Ujjain</strong>, including local shops, service businesses, professionals, clinics, restaurants, and growing brands.
              </p>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-700 font-medium">
                We also provide website development for businesses targeting customers in <strong>Indore</strong>, designing custom site structures tailored around your specific business goals, services, and target audience.
              </p>
            </div>

            {/* Bottom Why Choose Us */}
            <div className="mt-10 pt-8 border-t border-orange-200">
              <div className="text-center mb-8">
                <h3 className="text-xl font-extrabold text-zinc-900">Why Choose Pragati Ujjayini for Website Development?</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Business-Focused', desc: 'Business-focused website development, not generic templates.', color: 'bg-orange-600' },
                  { title: 'Built-in SEO Structure', desc: 'SEO-friendly structure built in from the start.', color: 'bg-[#0284C7]' },
                  { title: 'Mobile-First Responsive', desc: 'A mobile-first, responsive approach for every screen.', color: 'bg-orange-600' },
                  { title: 'WordPress & CMS Expertise', desc: 'WordPress and CMS expertise for easy content updates.', color: 'bg-[#0284C7]' },
                  { title: 'Custom Functionality', desc: 'Custom functionality where your business needs it.', color: 'bg-orange-600' },
                  { title: 'Post-Launch Support', desc: 'Ongoing support and maintenance after launch.', color: 'bg-[#0284C7]' },
                  { title: 'Ujjain & Indore Insight', desc: 'An understanding of the Ujjain and Indore local markets.', color: 'bg-orange-600' },
                  { title: 'Clear Communication', desc: 'Transparent, clear project communication.', color: 'bg-[#0284C7]' },
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

      {/* Section 8: What Affects Website Development Cost? */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200 p-6 sm:p-10 shadow-md">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
                Transparent Pricing Factors
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                What Affects Website Development Cost?
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Website development pricing depends on your specific requirements:
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-4xl mx-auto">
              {[
                'Number of pages',
                'Website complexity',
                'Custom functionality',
                'WordPress or CMS setup',
                'E-commerce requirements',
                'Content requirements',
                'Third-party integrations',
                'SEO requirements',
                'Ongoing maintenance needs',
              ].map((factor, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 rounded-xl bg-[#FFF6F0] p-3.5 border border-orange-200/60"
                >
                  <Check className="size-4 text-orange-600 shrink-0 stroke-[3]" />
                  <span className="text-xs font-bold text-zinc-800">{factor}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-orange-700 transition-colors"
              >
                <span>Get a Custom Website Development Quote</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Website Development FAQs */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Website Development FAQs
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              Everything you need to know about our website development services in Ujjain and Indore.
            </p>
          </div>

          <WebsiteDevFaqAccordion />
        </div>
      </section>

      {/* Section 10: Final CTA Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-zinc-950 via-zinc-900 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Ready to Discuss Your Website Project?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto font-normal">
            If your website isn't generating the enquiries you expect, or you don't have one yet, let's talk about what a proper website development plan would look like for your business. Contact Pragati Ujjayini to discuss your website requirements for Ujjain or Indore.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-sm font-extrabold text-white shadow-xl hover:bg-orange-700 hover:scale-[1.02] transition-all"
            >
              <span>Discuss Your Website Project</span>
              <ArrowRight className="size-4.5" />
            </Link>

            <a
              href="https://wa.me/919202668977?text=Hi%20Pragati%20Ujjayini%2C%20I%20want%20to%20discuss%20a%20new%20Website%20Development%20project."
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
