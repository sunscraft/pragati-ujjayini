import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Users,
  Search,
  Phone,
  MessageCircle,
  CheckCircle2,
  TrendingUp,
  Star,
  Eye,
  Briefcase,
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
  Send,
  UserCheck,
  Bot,
  PieChart,
  Layers,
  Zap,
  Cpu,
  Smile,
  Quote,
} from 'lucide-react'
import { LinkedinFaqAccordion } from './linkedin-faq-accordion'

export const metadata: Metadata = {
  title: 'LinkedIn Outreach Services for B2B Lead Generation | Pragati Ujjayini',
  description:
    'Looking for more B2B leads? Our LinkedIn Outreach Services help you find prospects, start conversations, book meetings, and grow your sales pipeline.',
  alternates: {
    canonical: 'https://www.pragatiujjayini.com/services/linkedin-outreach-services',
  },
  openGraph: {
    title: 'LinkedIn Outreach Services for B2B Lead Generation | Pragati Ujjayini',
    description:
      'Looking for more B2B leads? Our LinkedIn Outreach Services help you find prospects, start conversations, book meetings, and grow your sales pipeline.',
    url: 'https://www.pragatiujjayini.com/services/linkedin-outreach-services',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Pragati Ujjayini',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.grownfoster.com/services/linkedin-outreach-services/#service",
      "name": "LinkedIn Outreach Services for B2B Lead Generation",
      "serviceType": "LinkedIn Outreach Services",
      "description": "Looking for more B2B leads? Our LinkedIn Outreach Services help you find prospects, start conversations, book meetings, and grow your sales pipeline.",
      "url": "https://www.grownfoster.com/services/linkedin-outreach-services/",
      "provider": {
        "@type": "Organization",
        "@id": "https://www.grownfoster.com/#organization",
        "name": "Grow N Foster",
        "url": "https://www.grownfoster.com/"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "B2B businesses"
      },
      "category": [
        "B2B LinkedIn lead generation",
        "LinkedIn prospect list building",
        "LinkedIn Sales Navigator outreach",
        "LinkedIn cold message strategy",
        "LinkedIn outreach automation",
        "B2B appointment setting services"
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.grownfoster.com/#organization",
      "name": "Grow N Foster",
      "url": "https://www.grownfoster.com/"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.grownfoster.com/services/linkedin-outreach-services/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.grownfoster.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "LinkedIn Outreach Services",
          "item": "https://www.grownfoster.com/services/linkedin-outreach-services/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.grownfoster.com/services/linkedin-outreach-services/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is LinkedIn Outreach and how does it generate B2B leads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LinkedIn outreach is a targeted strategy to connect with your ideal decision makers directly on LinkedIn. By leveraging personalized messaging and prospect list building, we build relationships, initiate warm conversations, and convert prospects into qualified sales calls."
          }
        },
        {
          "@type": "Question",
          "name": "Is LinkedIn outreach safe for my personal or company profile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We follow controlled daily activity limits and combine manual touchpoints with safe outreach protocols. Your profile authority and safety are considered throughout the campaign."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a LinkedIn Sales Navigator subscription for this service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Having a Sales Navigator account is highly recommended because it allows advanced filtering to find decision makers by industry, company size, title, and location. These filters help us build focused prospect lists."
          }
        },
        {
          "@type": "Question",
          "name": "How soon can we expect booked meetings from your LinkedIn outreach campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Initial responses can begin after the prospect lists and campaigns are established. Consistent appointment setting and pipeline growth generally improve as the campaign is tested and optimized."
          }
        },
        {
          "@type": "Question",
          "name": "How do you write personalized messages that get high response rates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We create multi touch message sequences tailored to the prospect's business context and potential needs. Our cold message strategy focuses on relevance and starting genuine conversations instead of using generic sales pitches."
          }
        },
        {
          "@type": "Question",
          "name": "Will your team manage the inbox responses, or do we handle them?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer full service outreach where we can manage prospect list building, connection requests, and initial reply management. When a prospect expresses interest in a demo or call, the qualified lead can be handed to your sales team."
          }
        },
        {
          "@type": "Question",
          "name": "How is LinkedIn outreach better than cold emailing for B2B leads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LinkedIn outreach allows prospects to see your professional profile, network, and business context while you start a conversation. This can make targeted B2B prospecting more relationship focused than relying only on cold email."
          }
        }
      ]
    }
  ]
}

export default function LinkedinOutreachPage() {
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
              LinkedIn Outreach Services
            </span>
          </nav>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-orange-200 text-xs font-semibold text-orange-700 shadow-2xs">
            <Target className="size-3.5 text-orange-500" />
            B2B Lead Generation & Appointment Setting
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
                <span>B2B LinkedIn Lead Generation</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 leading-[1.15]">
                <span className="text-orange-600">B2B LinkedIn Outreach Services</span> for Consistent Lead Generation
              </h1>

              <p className="mt-5 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                Grow N Foster provides LinkedIn Outreach Services that help businesses connect with the right decision makers, start meaningful conversations, and create qualified sales opportunities. Our approach combines B2B LinkedIn lead generation, personalized messaging, prospect research, and smart outreach processes to help your sales pipeline grow.
              </p>

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
                  href="https://wa.me/919202668977?text=Hi%20Grow%20N%20Foster%2C%20I%20want%20to%20discuss%20LinkedIn%20Outreach%20Services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0284C7] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition-all duration-200 hover:bg-sky-700 hover:scale-[1.02]"
                >
                  <MessageCircle className="size-4.5 fill-white stroke-none" />
                  <span>Talk to an Expert</span>
                </a>
              </div>

              {/* 3 Metric Cards */}
              <div className="mt-10 grid grid-cols-3 gap-3.5 w-full">
                <div className="rounded-2xl border border-orange-100 bg-white p-4 text-center shadow-xs">
                  <p className="text-xl sm:text-2xl font-black text-orange-600">95%+</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">Decision Maker Targeting</p>
                </div>
                <div className="rounded-2xl border border-sky-100 bg-white p-4 text-center shadow-xs">
                  <p className="text-xl sm:text-2xl font-black text-[#0284C7]">3.5x</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">Higher Reply Rate</p>
                </div>
                <div className="rounded-2xl border border-orange-100 bg-white p-4 text-center shadow-xs">
                  <p className="text-xl sm:text-2xl font-black text-orange-600">100%</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">Safe Human Protocol</p>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Graphic Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white p-6 sm:p-7 shadow-xl border border-orange-200/80">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-sky-100 flex items-center justify-center text-[#0284C7] font-bold">
                      <Users className="size-5" />
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-wider">
                        LinkedIn Sales Navigator
                      </span>
                      <h3 className="text-sm font-extrabold text-zinc-900 mt-1">B2B Outreach Pipeline</h3>
                    </div>
                  </div>
                  <span className="flex size-3 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="mt-5 space-y-3.5">
                  <div className="p-3.5 rounded-2xl bg-[#FFF6F0] border border-orange-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-orange-600 text-white font-extrabold text-xs flex items-center justify-center">
                        <UserCheck className="size-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-zinc-900">Ideal Customer Profiles</p>
                        <p className="text-[10px] text-zinc-500">VP, Director & Founder Targeting</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold bg-orange-100 text-orange-800 px-2.5 py-1 rounded-full">Active List</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Send className="size-4 text-sky-600" />
                      <span className="text-xs font-semibold text-zinc-700">Personalized Message Sequences</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600">Multi-Touch</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="size-4 text-amber-500" />
                      <span className="text-xs font-semibold text-zinc-700">Qualified B2B Appointments</span>
                    </div>
                    <span className="text-xs font-bold text-amber-600">Booked Meetings</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-100">
                  <div className="flex items-center gap-2 rounded-xl bg-zinc-100 p-2.5 text-xs text-zinc-600">
                    <Search className="size-4 text-zinc-400 shrink-0" />
                    <span className="truncate">Target: "SaaS CEOs & VP Marketing in Tech"</span>
                    <span className="ml-auto text-[10px] font-bold text-white bg-sky-600 px-2 py-0.5 rounded-md">Connected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Build a Stronger B2B Lead Generation System */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200/80 p-6 sm:p-10 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
                  Structured Outreach System
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                  Build a Stronger B2B Lead Generation System
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600">
                  Finding the right prospects is only the first step. The real challenge is starting a conversation that feels relevant and useful.
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600">
                  Our LinkedIn outreach services help your business find the right people, understand their needs, and reach them with clear and personalized messages. We build outreach campaigns around your ideal customers instead of sending the same message to everyone.
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600">
                  From prospect list building to follow ups and appointment setting, we create a structured process that helps turn LinkedIn connections into real business conversations.
                </p>

                <div className="mt-6 pt-5 border-t border-zinc-100">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-zinc-800 transition-colors"
                  >
                    <span>Talk to a LinkedIn Outreach Expert</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>

              {/* Right Cards */}
              <div className="lg:col-span-5 space-y-3.5">
                <div className="p-4.5 rounded-2xl bg-[#FFF6F0] border border-orange-200 flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0">
                    <Target className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Precision Prospect List</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Filter by title, company size, & region</p>
                  </div>
                </div>

                <div className="p-4.5 rounded-2xl bg-[#F0F9FF] border border-sky-200 flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-[#0284C7] text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Personalized Conversations</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Value-first cold messaging sequences</p>
                  </div>
                </div>

                <div className="p-4.5 rounded-2xl bg-zinc-900 text-white flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-amber-500 text-zinc-950 flex items-center justify-center shrink-0 font-bold">
                    <Calendar className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">B2B Appointment Setting</h4>
                    <p className="text-xs text-zinc-300 mt-0.5">Turning positive replies into meetings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Meet Your LinkedIn Outreach Experts */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Strategy & Audience Targeting
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Meet Your LinkedIn Outreach Experts
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
              Successful outreach requires more than sending connection requests. Our team combines prospect research, audience targeting, messaging strategy, campaign management, and lead qualification to build a focused outreach process.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-zinc-500 leading-relaxed">
              We study your target market, ideal customer profile, industry, job roles, and business goals before developing your campaign. This helps us create a more relevant LinkedIn cold message strategy and reach prospects who are more likely to become customers.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-orange-200/80 bg-white p-6 shadow-sm">
              <div className="size-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                <Target className="size-6" />
              </div>
              <h3 className="text-base font-extrabold text-zinc-900">Ideal Customer Profile (ICP)</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                We define exact company criteria, revenue tiers, decision maker titles, and geographic targets to eliminate wasted outreach.
              </p>
            </div>

            <div className="rounded-3xl border border-sky-200/80 bg-white p-6 shadow-sm">
              <div className="size-12 rounded-2xl bg-sky-100 text-[#0284C7] flex items-center justify-center mb-4">
                <FileText className="size-6" />
              </div>
              <h3 className="text-base font-extrabold text-zinc-900">Cold Message Strategy</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Multi-touch messaging tailored to pain points and industry context—built for starting natural conversations, not spammy pitches.
              </p>
            </div>

            <div className="rounded-3xl border border-amber-200/80 bg-white p-6 shadow-sm">
              <div className="size-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <UserCheck className="size-6" />
              </div>
              <h3 className="text-base font-extrabold text-zinc-900">Lead Qualification</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                We filter incoming responses and hand off pre-qualified, warm prospects straight to your sales team to close.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Key Capabilities of LinkedIn Outreach (12 Capabilities Grid) */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              12 Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Key Capabilities of LinkedIn Outreach
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              We combine research, personalization, messaging, and campaign management to create effective B2B lead generation campaigns.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'LinkedIn Prospect List Building',
                desc: 'We identify potential prospects based on your ideal customer profile, industry, company size, job role, location, and other relevant business criteria.',
                icon: Search,
                color: 'text-orange-600',
              },
              {
                title: 'Ideal Customer Profile Targeting',
                desc: 'We define the type of companies and decision makers that are most valuable to your business so outreach efforts stay focused on the right audience.',
                icon: Target,
                color: 'text-sky-600',
              },
              {
                title: 'LinkedIn Sales Navigator Outreach',
                desc: 'We use LinkedIn Sales Navigator based research to identify relevant prospects and create focused outreach lists based on your campaign requirements.',
                icon: Globe,
                color: 'text-orange-600',
              },
              {
                title: 'Decision Maker Identification',
                desc: 'We help identify people who influence or make purchasing decisions so your outreach can reach the right contacts instead of random profiles.',
                icon: Users,
                color: 'text-sky-600',
              },
              {
                title: 'Personalized LinkedIn Outreach',
                desc: 'We create relevant messages based on the prospect, company, industry, and business context. Personalization helps make conversations feel more natural and useful.',
                icon: MessageSquare,
                color: 'text-orange-600',
              },
              {
                title: 'LinkedIn Cold Message Strategy',
                desc: 'A good cold message should quickly explain why you are reaching out without sounding like a generic sales pitch. Our strategy focuses on relevance, clarity, and conversation.',
                icon: Send,
                color: 'text-sky-600',
              },
              {
                title: 'LinkedIn Outreach Automation',
                desc: 'Where appropriate, we use structured outreach processes and automation tools to make campaign management more efficient while keeping targeting and messaging controlled.',
                icon: Bot,
                color: 'text-orange-600',
              },
              {
                title: 'LinkedIn Social Selling Management',
                desc: 'We help businesses use LinkedIn to build relationships before asking for a sale. This creates opportunities to engage prospects through useful conversations and consistent interactions.',
                icon: Smile,
                color: 'text-sky-600',
              },
              {
                title: 'Follow Up Campaigns',
                desc: 'Many prospects do not respond to the first message. We create thoughtful follow up sequences designed to keep the conversation open without overwhelming the prospect.',
                icon: Clock,
                color: 'text-orange-600',
              },
              {
                title: 'Lead Qualification',
                desc: 'We help identify which conversations show genuine business interest so your sales team can spend more time with relevant opportunities.',
                icon: UserCheck,
                color: 'text-sky-600',
              },
              {
                title: 'B2B Appointment Setting Services',
                desc: 'When a prospect shows interest, the next step can be a sales conversation. Our B2B appointment setting services help move qualified prospects toward meetings with your sales team.',
                icon: Calendar,
                color: 'text-orange-600',
              },
              {
                title: 'Lead Tracking and Reporting',
                desc: 'We track outreach activity, connections, responses, conversations, qualified leads, and appointments to understand campaign performance and identify areas for improvement.',
                icon: BarChart3,
                color: 'text-sky-600',
              },
            ].map((cap, i) => {
              const Icon = cap.icon
              return (
                <div
                  key={i}
                  className="rounded-3xl border border-orange-200/80 bg-white p-6 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="size-10 rounded-xl bg-orange-50 flex items-center justify-center">
                        <Icon className={`size-5 ${cap.color}`} />
                      </div>
                      <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest bg-orange-100 px-2 py-0.5 rounded">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-zinc-900 leading-snug">{cap.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 4: See Our LinkedIn Outreach Impact */}
      <section className="py-14 sm:py-20 bg-[#FFF5EE]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200 p-6 sm:p-10 shadow-md">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
                Measurable Performance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                See Our LinkedIn Outreach Impact
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600">
                Effective outreach should create more than connection numbers. The goal is to build relevant conversations and generate genuine sales opportunities.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xs font-extrabold uppercase tracking-widest text-zinc-400 text-center mb-6">
                Key Performance Indicators We Track & Deliver:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {[
                  'Targeted Prospects Reached',
                  'Connection Acceptance',
                  'Message Responses',
                  'Qualified Conversations',
                  'Sales Opportunities',
                  'Appointments Booked',
                  'Pipeline Growth',
                ].map((kpi, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#FFF6F0] border border-orange-200 p-3.5 text-center shadow-2xs flex flex-col items-center justify-center"
                  >
                    <CheckCircle2 className="size-4 text-orange-600 mb-1.5" />
                    <span className="text-[11px] font-bold text-zinc-800 leading-tight">{kpi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Why LinkedIn Outreach Investment Pays Off (6 Advantages) */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Proven ROI Drivers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Why LinkedIn Outreach Investment Pays Off
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              Why decision-maker level outreach drives compounding revenue growth.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Reach the Right Decision Makers',
                desc: 'LinkedIn provides access to professionals and business decision makers across many industries. Targeted outreach helps you focus on people who match your ideal customer profile.',
                icon: Users,
                color: 'text-orange-600',
              },
              {
                title: 'Generate Qualified B2B Leads',
                desc: 'Instead of reaching a broad audience, B2B LinkedIn lead generation focuses on prospects that match your specific business requirements.',
                icon: Target,
                color: 'text-sky-600',
              },
              {
                title: 'Build Meaningful Business Connections',
                desc: 'Good outreach starts a conversation rather than immediately pushing a sales offer. This can help create stronger professional relationships.',
                icon: MessageSquare,
                color: 'text-orange-600',
              },
              {
                title: 'Create Consistent Sales Opportunities',
                desc: 'A structured campaign can create a repeatable process for finding prospects and starting new conversations.',
                icon: TrendingUp,
                color: 'text-sky-600',
              },
              {
                title: 'Personalize Your Outreach',
                desc: 'Relevant messaging helps prospects understand why you are contacting them and how your business may be useful to them.',
                icon: Send,
                color: 'text-orange-600',
              },
              {
                title: 'Build a Scalable Lead Generation Process',
                desc: 'Once your targeting, messaging, follow ups, and qualification process are clearly defined, your outreach can become a more consistent part of your sales strategy.',
                icon: Zap,
                color: 'text-sky-600',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="rounded-3xl border border-orange-200/80 bg-white p-6 shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <div className="size-11 rounded-2xl bg-orange-50 flex items-center justify-center mb-4">
                    <Icon className={`size-5 ${item.color}`} />
                  </div>
                  <h3 className="text-base font-extrabold text-zinc-900">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 6: Data-Driven Strategy & Checklist */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200/80 p-6 sm:p-10 shadow-md">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
                Data Driven Decisions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                Measurable B2B Lead Growth & Data-Driven Strategy
              </h2>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-600">
                Our LinkedIn outreach campaigns are built around measurable activity and business outcomes. We monitor campaign performance to understand which audiences, messages, and approaches are generating the strongest conversations.
              </p>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-600">
                We focus on meaningful indicators such as qualified responses, sales conversations, appointments, and pipeline opportunities rather than relying only on connection counts.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100">
              <p className="text-xs font-extrabold uppercase tracking-widest text-zinc-400 text-center mb-4">
                Data Points & Optimization Checklist:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  'Ideal customer profile research',
                  'Prospect list analysis',
                  'Industry and company targeting',
                  'Message performance analysis',
                  'Response tracking',
                  'Lead qualification',
                  'Appointment tracking',
                  'Campaign performance monitoring',
                ].map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 rounded-xl bg-[#FFF6F0] p-3 border border-orange-200/60"
                  >
                    <Check className="size-4 text-orange-600 shrink-0 stroke-[3]" />
                    <span className="text-xs font-bold text-zinc-800">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: LinkedIn Outreach Partnership vs Alternatives (Comparison) */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Channel Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              LinkedIn Outreach Partnership vs Alternatives
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              Different lead generation channels work in different ways. LinkedIn outreach is especially effective for businesses selling to other businesses requiring direct access to decision makers.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-orange-200 bg-white p-6 shadow-2xs">
              <span className="text-xs font-black text-orange-600 uppercase tracking-widest bg-orange-100 px-2.5 py-1 rounded-full">
                VS Cold Email
              </span>
              <h3 className="text-lg font-extrabold text-zinc-900 mt-3">LinkedIn Outreach vs Cold Email</h3>
              <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                Cold email reaches prospects in their inbox, while LinkedIn allows building professional trust & profile visibility.
              </p>
              <ul className="mt-4 space-y-2">
                {['Professional networking environment', 'Direct decision maker targeting', 'Personalized conversations', 'Relationship focused selling'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-semibold text-zinc-800">
                    <CheckCircle2 className="size-3.5 text-orange-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-sky-200 bg-white p-6 shadow-2xs">
              <span className="text-xs font-black text-[#0284C7] uppercase tracking-widest bg-sky-100 px-2.5 py-1 rounded-full">
                VS Paid Ads
              </span>
              <h3 className="text-lg font-extrabold text-zinc-900 mt-3">LinkedIn Outreach vs Paid Advertising</h3>
              <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                Paid ads reach a broad audience, while LinkedIn outreach focuses specifically on key target decision makers.
              </p>
              <ul className="mt-4 space-y-2">
                {['Account specific targeting', 'Direct prospect communication', 'Personalized messaging', 'Focused B2B prospecting'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-semibold text-zinc-800">
                    <CheckCircle2 className="size-3.5 text-sky-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-sky-200 bg-white p-6 shadow-2xs">
              <span className="text-xs font-black text-[#0284C7] uppercase tracking-widest bg-sky-100 px-2.5 py-1 rounded-full">
                VS Organic Social
              </span>
              <h3 className="text-lg font-extrabold text-zinc-900 mt-3">LinkedIn Outreach vs Organic Social</h3>
              <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                Organic social focuses on broadcasting content. LinkedIn outreach actively contacts specific decision makers.
              </p>
              <ul className="mt-4 space-y-2">
                {['Direct prospect engagement', 'Targeted conversations', 'Personalized outreach', 'Sales focused activity'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-semibold text-zinc-800">
                    <CheckCircle2 className="size-3.5 text-sky-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-orange-200 bg-white p-6 shadow-2xs">
              <span className="text-xs font-black text-orange-600 uppercase tracking-widest bg-orange-100 px-2.5 py-1 rounded-full">
                Agency VS In-House
              </span>
              <h3 className="text-lg font-extrabold text-zinc-900 mt-3">LinkedIn Outreach Agency vs In House Team</h3>
              <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                An agency provides specialized research, messaging, and execution without requiring hiring an internal team.
              </p>
              <ul className="mt-4 space-y-2">
                {['Specialized outreach expertise', 'Flexible campaign support', 'Faster campaign execution', 'Scalable prospecting'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs font-semibold text-zinc-800">
                    <CheckCircle2 className="size-3.5 text-orange-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Industry Specific LinkedIn Outreach Strategies */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Tailored Industry Strategies
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Industry Specific LinkedIn Outreach Strategies
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              Every industry has different buyers, sales cycles, and decision makers. Outreach should reflect those differences.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'B2B Technology',
                desc: 'Reach technology leaders and business decision makers with outreach focused on business problems, software solutions, and growth opportunities.',
                icon: Cpu,
                color: 'text-orange-600',
              },
              {
                title: 'SaaS',
                desc: 'Target relevant decision makers with personalized conversations around software needs, operational challenges, and product solutions.',
                icon: Layers,
                color: 'text-sky-600',
              },
              {
                title: 'Professional Services',
                desc: 'Connect with business owners, executives, and department leaders who may need specialized professional support.',
                icon: Briefcase,
                color: 'text-orange-600',
              },
              {
                title: 'Consulting',
                desc: 'Build conversations with organizations and decision makers who are actively looking for expertise, strategy, or operational support.',
                icon: Users,
                color: 'text-sky-600',
              },
              {
                title: 'Marketing Agencies',
                desc: 'Help agencies connect with potential clients who may need digital marketing, SEO, content, advertising, or other growth services.',
                icon: TrendingUp,
                color: 'text-orange-600',
              },
              {
                title: 'Business Services',
                desc: 'Identify companies and decision makers that match your service criteria and build targeted B2B lead generation campaigns.',
                icon: Building2,
                color: 'text-sky-600',
              },
            ].map((ind, i) => {
              const Icon = ind.icon
              return (
                <div
                  key={i}
                  className="rounded-3xl border border-orange-200/80 bg-white p-6 shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <div className="size-11 rounded-2xl bg-orange-50 flex items-center justify-center mb-4">
                    <Icon className={`size-5 ${ind.color}`} />
                  </div>
                  <h3 className="text-base font-extrabold text-zinc-900">{ind.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">{ind.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 9: What Our Clients Say */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Client Success Stories
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              What Our Clients Say
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-3xl border border-orange-200/80 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <Quote className="size-8 text-orange-500 mb-4 opacity-80" />
                <p className="text-sm font-extrabold text-zinc-900 mb-2">
                  “Great experience working with Grow N Foster.”
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  The team was professional, responsive, and easy to work with. They understood our goals and helped us improve our online presence and generate better results.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-3">
                <div className="size-10 rounded-full bg-orange-600 text-white font-black text-sm flex items-center justify-center">
                  DW
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-900">Daniel Wilson</h4>
                  <p className="text-[10px] text-zinc-500 font-medium">Business Owner</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-sky-200/80 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <Quote className="size-8 text-sky-500 mb-4 opacity-80" />
                <p className="text-sm font-extrabold text-zinc-900 mb-2">
                  “A helpful and reliable marketing team.”
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Grow N Foster made the whole process simple and easy to understand. The team was supportive, communicated well, and delivered good results for our business.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-3">
                <div className="size-10 rounded-full bg-[#0284C7] text-white font-black text-sm flex items-center justify-center">
                  EJ
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-900">Emily Johnson</h4>
                  <p className="text-[10px] text-zinc-500 font-medium">Marketing Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Frequently Asked Questions */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              LinkedIn Outreach FAQs
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              Everything you need to know about our B2B LinkedIn outreach services.
            </p>
          </div>

          <LinkedinFaqAccordion />
        </div>
      </section>

      {/* Section 11: Final CTA Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-zinc-950 via-zinc-900 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Ready to Grow Smarter?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Your ideal customers are already building networks on LinkedIn. A focused outreach strategy can help your business find them, start meaningful conversations, and create new sales opportunities.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-sm font-extrabold text-white shadow-xl hover:bg-orange-700 hover:scale-[1.02] transition-all"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="size-4.5" />
            </Link>

            <a
              href="https://wa.me/919202668977?text=Hi%20Grow%20N%20Foster%2C%20I%20want%20to%20get%20started%20with%20LinkedIn%20Outreach."
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
