import type { Metadata } from 'next'
import Link from 'next/link'
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
  ListChecks,
  AlertTriangle,
  RefreshCw,
  Layers,
  DollarSign,
  HelpCircle,
} from 'lucide-react'
import { LocalBusinessListingFaq } from './local-business-listing-faq'

export const metadata: Metadata = {
  title: 'Local Business Listing Services: Complete Growth Guide',
  description:
    'Fix inconsistent business details and rank higher locally. Discover how professional local business listing services drive daily calls and customer trust',
  alternates: {
    canonical: 'https://www.pragatiujjayini.com/services/local-business-listing',
  },
  openGraph: {
    title: 'Local Business Listing Services: Complete Growth Guide',
    description:
      'Fix inconsistent business details and rank higher locally. Discover how professional local business listing services drive daily calls and customer trust',
    url: 'https://www.pragatiujjayini.com/services/local-business-listing',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Pragati Ujjayini',
  },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://pragatiujjayini.com/#organization',
      name: 'Pragati Ujjayini',
      url: 'https://pragatiujjayini.com/',
      areaServed: [
        {
          '@type': 'City',
          name: 'Ujjain',
        },
        {
          '@type': 'City',
          name: 'Indore',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://pragatiujjayini.com/services/local-business-listing/#service',
      name: 'Local Business Listing Services',
      serviceType: 'Local Business Listing Services',
      description:
        'Fix inconsistent business details and rank higher locally. Discover how professional local business listing services drive daily calls and customer trust.',
      provider: {
        '@id': 'https://pragatiujjayini.com/#organization',
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Ujjain',
        },
        {
          '@type': 'City',
          name: 'Indore',
        },
      ],
      url: 'https://pragatiujjayini.com/services/local-business-listing',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://pragatiujjayini.com/services/local-business-listing/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://pragatiujjayini.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://pragatiujjayini.com/services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Local Business Listing Services',
          item: 'https://pragatiujjayini.com/services/local-business-listing',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://pragatiujjayini.com/services/local-business-listing/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How many directories should my business be listed on?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This depends on your industry and location. We identify which directories are actually relevant to your business, instead of submitting to every directory regardless of value.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if I already have duplicate listings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We identify duplicates and either merge or remove them, since duplicates can split reviews and confuse both customers and search engines.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can local business listings be managed alongside my Google Business Profile?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Listings and your Google Business Profile work together, and we manage both as part of a connected local visibility strategy.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is local listing management a one-time service or ongoing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both. We offer an initial cleanup and setup, followed by ongoing monitoring to catch new inconsistencies as they appear.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does listing management affect my Google Maps ranking?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Consistent listings act as trust signals that support your visibility in Google Maps and local search results.',
          },
        },
      ],
    },
  ],
}

export default function LocalBusinessListingPage() {
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
              Local Business Listing Services
            </span>
          </nav>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-orange-200 text-xs font-semibold text-orange-700 shadow-2xs">
            <MapPin className="size-3.5 text-orange-500" />
            Directory Management & Citation Building in Ujjain & Indore
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
                <span>Local Business Listing Services</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 leading-[1.15]">
                Get Found Everywhere Customers Search:{' '}
                <span className="text-orange-600">Local Business Listing Services</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                We manage your business listings across Google, directories, and maps, so every platform shows the same accurate information. Consistent listings help customers find you and help search engines trust your business.
              </p>

              {/* Summary Box: What we manage */}
              <div className="mt-6 w-full p-5 rounded-2xl bg-[#FFF0E6] border border-orange-200 text-zinc-800 text-sm leading-relaxed shadow-2xs">
                <p className="text-xs font-extrabold uppercase tracking-wider text-orange-700 mb-2 flex items-center gap-1.5">
                  <ListChecks className="size-4 text-orange-600" />
                  What we manage:
                </p>
                <p className="font-semibold text-zinc-800">
                  Directory listings, citation building, NAP consistency, duplicate listing cleanup, and ongoing accuracy monitoring.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-600/25 transition-all duration-200 hover:bg-orange-700 hover:scale-[1.02]"
                >
                  <span>Get a Local Listing Audit</span>
                  <ArrowRight className="size-4.5" />
                </Link>

                <a
                  href="https://wa.me/919202668977?text=Hi%20Pragati%20Ujjayini%2C%20I%20want%20to%20get%20a%20Local%20Listing%20Audit."
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
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">NAP Accuracy</p>
                </div>
                <div className="rounded-2xl border border-sky-100 bg-white p-4 text-center shadow-xs">
                  <p className="text-xl sm:text-2xl font-black text-[#0284C7]">0</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">Duplicate Listings</p>
                </div>
                <div className="rounded-2xl border border-orange-100 bg-white p-4 text-center shadow-xs">
                  <p className="text-xl sm:text-2xl font-black text-orange-600">24/7</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">Ongoing Monitoring</p>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Graphic Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white p-6 sm:p-7 shadow-xl border border-orange-200/80">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                      <ListChecks className="size-5" />
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-wider">
                        Listing Consistency Status
                      </span>
                      <h3 className="text-sm font-extrabold text-zinc-900 mt-1">Multi-Platform Sync</h3>
                    </div>
                  </div>
                  <span className="flex size-3 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="mt-5 space-y-3.5">
                  <div className="p-3.5 rounded-2xl bg-[#FFF6F0] border border-orange-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-orange-600 text-white font-extrabold text-xs flex items-center justify-center">
                        <Check className="size-4 stroke-[3]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-zinc-900">Google Business Profile</p>
                        <p className="text-[10px] text-zinc-500">Verified & Synced</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">Consistent</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-sky-600 text-white font-extrabold text-xs flex items-center justify-center">
                        <Check className="size-4 stroke-[3]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-zinc-900">Directory Mentions & Citations</p>
                        <p className="text-[10px] text-zinc-500">JustDial, Sulekha, IndiaMART & more</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">Verified</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-amber-500 text-zinc-950 font-extrabold text-xs flex items-center justify-center">
                        <Check className="size-4 stroke-[3]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-zinc-900">Duplicate Resolution</p>
                        <p className="text-[10px] text-zinc-500">Merged / Removed Conflicting Data</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">Resolved</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-100">
                  <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950 font-medium leading-relaxed">
                    💡 Get a Local Listing Audit to see exactly where your business information is missing, outdated, or inconsistent.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What Are Local Business Listing Services? */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200/80 p-6 sm:p-10 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
                  Service Definition
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                  What Are Local Business Listing Services?
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600">
                  Local Business Listing Services manage your business information across directories, maps, and platforms, so your name, address, and phone number stay accurate and consistent everywhere.
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600">
                  This includes directory management, citation building, NAP consistency, duplicate listing cleanup, and ongoing accuracy monitoring.
                </p>

                <div className="mt-6 pt-5 border-t border-zinc-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                    Core Listing Pillars
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Directory Management',
                      'Citation Building',
                      'NAP Consistency',
                      'Duplicate Cleanup',
                      'Accuracy Monitoring',
                    ].map((term) => (
                      <span
                        key={term}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF5EC] border border-orange-200 text-xs font-semibold text-orange-800"
                      >
                        <CheckCircle2 className="size-3 text-orange-600" />
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right graphic visual */}
              <div className="lg:col-span-5 space-y-3.5">
                <div className="p-4 rounded-2xl bg-[#FFF6F0] border border-orange-200 flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0">
                    <Globe className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Web-Wide Directory Coverage</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Accurate info across maps and major platforms</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F0F9FF] border border-sky-200 flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-[#0284C7] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Engine Trust Signal</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Consistent NAP boosts search engine confidence</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900 text-white flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-amber-500 text-zinc-950 flex items-center justify-center shrink-0 font-bold">
                    <RefreshCw className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Active Duplicate Cleanup</h4>
                    <p className="text-xs text-zinc-300 mt-0.5">Stop splitting reviews & confusing customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Key Takeaways */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Essential Insights
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Key Takeaways
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              Why business listings directly affect your local search visibility and customer trust.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Rankings Impact',
                text: 'Inconsistent business listings make search engines trust your business less, which lowers your local rankings.',
                icon: TrendingUp,
                color: 'text-orange-600',
                bg: 'bg-orange-100',
              },
              {
                title: 'Small Differences Matter',
                text: 'Even small differences, like "St." vs "Street" or an old phone number, weaken local search trust.',
                icon: AlertTriangle,
                color: 'text-amber-600',
                bg: 'bg-amber-100',
              },
              {
                title: 'Duplicate Risks',
                text: 'Duplicate listings split your reviews and confuse both customers and search engines.',
                icon: RefreshCw,
                color: 'text-sky-600',
                bg: 'bg-sky-100',
              },
              {
                title: 'Ecosystem Alignment',
                text: 'Local listings work alongside your Google Business Profile and local SEO, not separately.',
                icon: Layers,
                color: 'text-orange-600',
                bg: 'bg-orange-100',
              },
              {
                title: 'Regional Focus',
                text: 'We manage local business listings for businesses in both Ujjain and Indore.',
                icon: MapPin,
                color: 'text-emerald-600',
                bg: 'bg-emerald-100',
              },
            ].map((takeaway, idx) => {
              const Icon = takeaway.icon
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-orange-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className={`size-12 rounded-2xl ${takeaway.bg} flex items-center justify-center mb-4`}>
                      <Icon className={`size-6 ${takeaway.color}`} />
                    </div>
                    <h3 className="text-base font-extrabold text-zinc-900">{takeaway.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                      {takeaway.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Why Does Your Business Need Local Listing Management? */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              The Need For Consistency
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Why Does Your Business Need Local Listing Management?
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600">
              When your business details don't match across the web, customers get confused and search engines trust you less. This shows up as lower rankings in local search results, not just a minor inconvenience.
            </p>
          </div>

          <div className="mt-10 rounded-3xl bg-white border border-orange-200 p-6 sm:p-8 shadow-md">
            <h3 className="text-lg font-extrabold text-zinc-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="size-5 text-orange-600" />
              You may need local listing management if:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Your phone number or address has changed and isn\'t updated everywhere',
                'You suspect duplicate listings exist for your business',
                'Your business details differ across directories',
                'You\'ve never actively managed your listings',
                'You\'re not showing up in nearby "near me" searches you\'d expect to rank for',
              ].map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FFF6F0] border border-orange-200/60"
                >
                  <div className="size-6 rounded-full bg-orange-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-800 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Local Business Listing Services (5 Core Services) */}
      <section className="py-14 sm:py-20 bg-[#FFF5EE]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Connected Growth System
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Our Local Business Listing Services
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              We manage your listings as one connected system, not a one-time task.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {[
              {
                num: '1',
                title: 'Business Directory Management',
                desc: 'We create and maintain accurate profiles across major directories and industry-specific platforms relevant to your business.',
                icon: DirectoryIcon,
              },
              {
                num: '2',
                title: 'Citation Building',
                desc: 'We build consistent mentions of your business name, address, and phone number across the web. Search engines use these citations as trust signals for local rankings.',
                icon: CitationIcon,
              },
              {
                num: '3',
                title: 'NAP Consistency',
                desc: 'We make sure your Name, Address, and Phone number match exactly across every listing. Even small differences can weaken local search trust.',
                icon: NapIcon,
              },
              {
                num: '4',
                title: 'Duplicate Listing Identification & Resolution',
                desc: 'We find and merge or remove duplicate profiles that split your reviews, confuse customers, and dilute your search visibility.',
                icon: DuplicateIcon,
              },
              {
                num: '5',
                title: 'Accuracy Monitoring',
                desc: 'We run ongoing checks so your business hours, categories, and contact details stay correct as things change, instead of going stale after the initial setup.',
                icon: MonitorIcon,
              },
            ].map((service) => (
              <div
                key={service.num}
                className="rounded-3xl border border-orange-200/80 bg-white overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12"
              >
                <div className="lg:col-span-4 bg-[#FFF4ED] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-orange-200/60">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-black uppercase tracking-wider mb-3">
                      Service 0{service.num}
                    </span>
                    <h3 className="text-xl font-extrabold text-zinc-900 leading-snug">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="lg:col-span-8 p-6 sm:p-8 flex items-center bg-white">
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: How Local Listings Connect to Local SEO and Your Google Business Profile */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200 p-6 sm:p-10 shadow-md">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
              Strategic Ecosystem
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              How Local Listings Connect to Local SEO and Your Google Business Profile
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600">
              Local business listings don't work alone. They're one part of a larger local visibility system.
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600">
              Your{' '}
              <Link
                href="/services/gmb-service"
                className="font-bold text-orange-600 underline hover:text-orange-700"
              >
                Google Business Profile
              </Link>{' '}
              is the most visible listing, but the citations and directory listings behind it reinforce its credibility. This consistency also supports your broader{' '}
              <Link
                href="/services/local-seo-services"
                className="font-bold text-orange-600 underline hover:text-orange-700"
              >
                local SEO
              </Link>{' '}
              strategy, since search engines are more confident ranking a business whose information matches everywhere.
            </p>

            {/* Interlinked cards grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/services/gmb-service"
                className="group p-6 rounded-2xl bg-[#FFF6F0] border border-orange-200 transition-all hover:border-orange-400 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                    Standalone & Ecosystem Service
                  </span>
                  <ArrowRight className="size-4 text-orange-600 transition-transform group-hover:translate-x-1" />
                </div>
                <h3 className="mt-2 text-lg font-bold text-zinc-900 group-hover:text-orange-600 transition-colors">
                  Google Business Profile (GMB) Optimization →
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Maximize visibility on Google Maps and search results with active GMB management.
                </p>
              </Link>

              <Link
                href="/services/local-seo-services"
                className="group p-6 rounded-2xl bg-[#F0F9FF] border border-sky-200 transition-all hover:border-sky-400 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                    Complete Growth System
                  </span>
                  <ArrowRight className="size-4 text-sky-600 transition-transform group-hover:translate-x-1" />
                </div>
                <h3 className="mt-2 text-lg font-bold text-zinc-900 group-hover:text-sky-600 transition-colors">
                  Local SEO Services →
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Full local search optimization across website pages, local keywords, citations, and reviews.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Our Local Listing Management Process (6 Steps) */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Step-By-Step Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Our Local Listing Management Process
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              A disciplined, step-by-step approach to cleaning up and strengthening your local business presence.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Listing Audit',
                desc: 'We review your existing listings across directories, maps, and platforms.',
              },
              {
                step: '02',
                title: 'Duplicate Check',
                desc: 'We identify duplicate or conflicting listings.',
              },
              {
                step: '03',
                title: 'Cleanup & Correction',
                desc: 'We fix outdated or inconsistent information.',
              },
              {
                step: '04',
                title: 'Citation Building',
                desc: 'We create and strengthen listings on relevant directories.',
              },
              {
                step: '05',
                title: 'NAP Standardization',
                desc: 'We make sure your name, address, and phone number match exactly everywhere.',
              },
              {
                step: '06',
                title: 'Ongoing Monitoring',
                desc: 'We check your listings regularly to catch new inconsistencies as they appear.',
              },
            ].map((st) => (
              <div
                key={st.step}
                className="rounded-3xl border border-orange-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black uppercase tracking-wider text-orange-600 bg-orange-100 px-2.5 py-1 rounded-md">
                      Step {st.step}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-zinc-900">{st.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Benefits of Local Business Listing Management */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Measurable Advantages
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Benefits of Local Business Listing Management
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              Clear business outcomes from maintaining accurate, verified listings.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'More accurate, consistent business information everywhere',
              'Stronger trust signals for search engines',
              'Better visibility in local and "near me" searches',
              'Fewer duplicate listings splitting your reviews',
              'A stronger foundation for your Google Business Profile and local SEO',
              'Less confusion for customers trying to find or contact you',
            ].map((benefit, i) => (
              <div
                key={i}
                className="rounded-2xl border border-orange-200/80 bg-white p-5 shadow-xs flex items-start gap-3.5"
              >
                <div className="size-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="size-4 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-zinc-800 leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Who Can Benefit From Local Business Listing Services? */}
      <section className="py-14 sm:py-20 bg-[#FFF5EE]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Target Industries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Who Can Benefit From Local Business Listing Services?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              Any business relying on nearby, local search traffic can transform their customer discovery.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {[
              { label: 'Local shops', icon: ShoppingBag },
              { label: 'Clinics and doctors', icon: Stethoscope },
              { label: 'Restaurants', icon: Utensils },
              { label: 'Hotels', icon: Hotel },
              { label: 'Salons', icon: Scissors },
              { label: 'Service businesses', icon: Wrench },
              { label: 'Real estate businesses', icon: Home },
              { label: 'Multi-location businesses', icon: Building2 },
              { label: 'Any business relying on nearby, local search traffic', icon: Target },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-orange-200/70 bg-white p-4.5 flex items-center gap-3.5 shadow-2xs"
                >
                  <div className="size-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">
                    {item.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 9: Local Business Listing Services in Ujjain and Indore */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-br from-[#FFF0E6] via-white to-[#F0F9FF] border border-orange-200 p-6 sm:p-10 shadow-md">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-wider mb-3">
              Geographic Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Local Business Listing Services in Ujjain and Indore
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-700">
              Businesses in Ujjain often compete in tightly local searches where customers look for services just a few kilometres away rather than across the whole city. We help you capture this demand by getting your business listed accurately across key local directories.
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-700">
              We also manage listings for businesses targeting Indore, cleaning up inconsistent details and building strong citation consistency to boost your local visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Why Choose Pragati Ujjayini? */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Why Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Why Choose Pragati Ujjayini?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              Pragmatic, execution-focused directory and citation management.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Accurate, consistent listing management across relevant directories',
              'Active duplicate identification and resolution, not just new listing creation',
              'NAP consistency checks across every listing, not just the major ones',
              'An understanding of which directories actually matter in Ujjain and Indore',
              'Listings managed alongside your Google Business Profile and local SEO',
              'Ongoing monitoring, not a one-time setup',
            ].map((reason, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-orange-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
              >
                <div className="size-10 rounded-2xl bg-orange-600 text-white flex items-center justify-center shrink-0 font-extrabold text-sm mt-0.5">
                  ✓
                </div>
                <p className="text-xs sm:text-sm font-semibold text-zinc-800 leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: What Affects Local Listing Pricing? */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200/80 p-6 sm:p-10 shadow-md">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
                Transparent Factors
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                What Affects Local Listing Pricing?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600">
                Pricing depends on the scope of work and existing condition of your business citations:
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Number of locations',
                'Number of directories covered',
                'Current condition of your existing listings',
                'Whether cleanup and duplicate resolution are needed',
                'Manual vs. automated submission',
                'Ongoing monitoring requirements',
                'Reporting requirements',
              ].map((factor, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-[#FFF6F0] border border-orange-200/60 flex items-center gap-3"
                >
                  <DollarSign className="size-5 text-orange-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-zinc-800">
                    {factor}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center pt-4 border-t border-zinc-100">
              <p className="text-sm font-bold text-zinc-900">
                Get a custom local listing management plan based on your business.
              </p>
              <Link
                href="/#contact"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-3 text-sm font-bold text-white hover:bg-orange-700 transition-colors"
              >
                <span>Request Custom Pricing Plan</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Local Business Listing FAQs */}
      <section className="py-14 sm:py-20 bg-[#FFF5EE]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Local Business Listing FAQs
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              Clear answers to common questions about managing directory listings and citations.
            </p>
          </div>

          <LocalBusinessListingFaq />
        </div>
      </section>

      {/* Section 13: Ready to Fix Your Local Listings? (CTA Banner) */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-zinc-900 p-8 sm:p-12 text-white shadow-2xl">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
                Take The Next Step
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Ready to Fix Your Local Listings?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                Whether your listings need a full cleanup or you're starting from scratch, consistent and accurate business listings are one of the most overlooked ways to help customers find you.
              </p>
              <p className="mt-2 text-sm sm:text-base text-orange-400 font-semibold">
                Request a Local Listing Audit with Pragati Ujjayini for your business in Ujjain or Indore.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-sm font-bold text-white hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/30"
                >
                  <span>Request Local Listing Audit</span>
                  <ArrowRight className="size-4" />
                </Link>

                <a
                  href="https://wa.me/919202668977?text=Hi%20Pragati%20Ujjayini%2C%20I%20want%20to%20request%20a%20Local%20Listing%20Audit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/20 px-8 py-4 text-sm font-bold text-white hover:bg-white/20 transition-colors"
                >
                  <MessageCircle className="size-4.5 text-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function DirectoryIcon(props: any) {
  return <Building2 {...props} />
}
function CitationIcon(props: any) {
  return <Globe {...props} />
}
function NapIcon(props: any) {
  return <MapPin {...props} />
}
function DuplicateIcon(props: any) {
  return <RefreshCw {...props} />
}
function MonitorIcon(props: any) {
  return <ShieldCheck {...props} />
}
