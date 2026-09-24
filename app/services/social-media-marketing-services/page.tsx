import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Share2,
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
  Layout,
  Smartphone,
  Zap,
  ShoppingBag,
  Video,
  PenTool,
  Megaphone,
  UserCheck,
  PieChart,
  Repeat,
  Heart,
  HelpCircle,
} from 'lucide-react'
import { SocialMediaFaqAccordion } from './social-media-faq-accordion'

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Social Media Marketing Services: Turn Followers to Sales',
  description:
    'Turn your social media pages into a steady source of leads and sales. Discover how professional social media marketing services drive real growth and ROI!',
  alternates: {
    canonical: 'https://www.pragatiujjayini.com/services/social-media-marketing-services/',
  },
  openGraph: {
    title: 'Social Media Marketing Services: Turn Followers to Sales',
    description:
      'Turn your social media pages into a steady source of leads and sales. Discover how professional social media marketing services drive real growth and ROI!',
    url: 'https://www.pragatiujjayini.com/services/social-media-marketing-services/',
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
      "@id": "https://www.pragatiujjayini.com/services/social-media-marketing-services/#service",
      "name": "Social Media Marketing Services",
      "serviceType": "Social Media Marketing",
      "description": "Social media marketing services covering strategy, content creation, Instagram marketing, Facebook marketing, WhatsApp marketing, social media management, paid social advertising, lead generation, and performance reporting for businesses in Ujjain and Indore.",
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
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Social Media Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Strategy"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Content Planning"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Content Creation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Instagram Marketing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Facebook Marketing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WhatsApp Marketing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Paid Social Media Advertising"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Lead Generation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Performance Reporting"
            }
          }
        ]
      },
      "url": "https://www.pragatiujjayini.com/services/social-media-marketing-services/"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pragatiujjayini.com/services/social-media-marketing-services/#breadcrumb",
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
          "name": "Social Media Marketing Services",
          "item": "https://www.pragatiujjayini.com/services/social-media-marketing-services/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.pragatiujjayini.com/services/social-media-marketing-services/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is social media marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Social media marketing is the process of using platforms like Instagram, Facebook, and WhatsApp to reach customers, build trust, and generate enquiries for a business."
          }
        },
        {
          "@type": "Question",
          "name": "What does social media marketing include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It includes strategy, content planning, content creation, publishing, community management, paid advertising, lead generation, and performance reporting."
          }
        },
        {
          "@type": "Question",
          "name": "Which social media platforms do you manage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We manage Instagram, Facebook, and WhatsApp, and recommend the right mix based on your audience and business goals."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide Instagram marketing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We manage Instagram posts, reels, stories, engagement, and profile growth."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide Facebook marketing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We handle Facebook posts, community engagement, and promotional campaigns."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide WhatsApp marketing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We manage WhatsApp Business marketing for direct customer communication and enquiry support."
          }
        },
        {
          "@type": "Question",
          "name": "Do you create social media posts and reels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We create graphics, posts, reels, short videos, and captions suited to your brand."
          }
        },
        {
          "@type": "Question",
          "name": "Do you manage social media accounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We handle scheduling, publishing, comments, messages, and community management."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide paid social media advertising?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We run Meta Ads campaigns for awareness, engagement, and lead generation."
          }
        },
        {
          "@type": "Question",
          "name": "Can social media marketing generate leads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We build campaigns designed to move people from engagement to actual enquiries."
          }
        },
        {
          "@type": "Question",
          "name": "How long does social media marketing take to show results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Engagement and brand consistency usually build within the first couple of months. Lead and enquiry growth depends on your strategy, industry, and whether paid advertising is included."
          }
        },
        {
          "@type": "Question",
          "name": "How much do social media marketing services cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cost depends on the number of platforms, content volume, video requirements, and whether paid advertising is included. We provide a plan based on your specific needs."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide social media marketing services in Ujjain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We manage social media marketing for businesses across Ujjain."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide social media marketing services in Indore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We also work with businesses in Indore."
          }
        }
      ]
    }
  ]
}

export default function SocialMediaMarketingPage() {
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
              Social Media Marketing Services
            </span>
          </nav>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-orange-200 text-xs font-semibold text-orange-700 shadow-2xs">
            <Share2 className="size-3.5 text-orange-500" />
            Turn Followers to Sales in Ujjain & Indore
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
                <span>Social Media Marketing Services</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 leading-[1.15]">
                <span className="text-orange-600">Turn Followers into Sales:</span>{' '}
                Social Media Marketing Services
              </h1>

              <p className="mt-5 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                We help businesses turn social media into a real growth channel, not just a page full of posts. Our social media marketing services cover strategy, content, Instagram, Facebook, WhatsApp, and paid advertising, all built around your business goals.
              </p>

              {/* Alert Callout Box */}
              <div className="mt-6 p-4.5 rounded-2xl bg-[#FFF0E6] border-l-4 border-orange-500 text-zinc-800 text-sm leading-relaxed flex items-start gap-3 shadow-2xs">
                <Share2 className="size-5 text-orange-600 shrink-0 mt-0.5" />
                <p>
                  <strong>What we offer:</strong> Strategy, content creation, platform management, paid ads, lead generation, and performance reporting.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-600/25 transition-all duration-200 hover:bg-orange-700 hover:scale-[1.02]"
                >
                  <span>Get a Social Media Plan</span>
                  <ArrowRight className="size-4.5" />
                </Link>

                <a
                  href="https://wa.me/919202668977?text=Hi%20Pragati%20Ujjayini%2C%20I%20want%20to%20discuss%20Social%20Media%20Marketing%20Services."
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
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">Consistent Posting</p>
                </div>
                <div className="rounded-2xl border border-sky-100 bg-white p-4 text-center shadow-xs">
                  <p className="text-xl sm:text-2xl font-black text-[#0284C7]">3x</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">More Engagement</p>
                </div>
                <div className="rounded-2xl border border-orange-100 bg-white p-4 text-center shadow-xs">
                  <p className="text-xl sm:text-2xl font-black text-orange-600">ROI</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">Focused Leads</p>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Graphic Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white p-6 sm:p-7 shadow-xl border border-orange-200/80">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                      <InstagramIcon className="size-5" />
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-wider">
                        Social Campaign Manager
                      </span>
                      <h3 className="text-sm font-extrabold text-zinc-900 mt-1">Instagram, Facebook & Meta Ads</h3>
                    </div>
                  </div>
                  <span className="flex size-3 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="mt-5 space-y-3.5">
                  <div className="p-3.5 rounded-2xl bg-[#FFF6F0] border border-orange-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Video className="size-4 text-orange-600" />
                      <div>
                        <p className="text-xs font-bold text-zinc-900">Reels & Short Video Creatives</p>
                        <p className="text-[10px] text-zinc-500">High-Engagement Brand Content</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">Viral Reach</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Megaphone className="size-4 text-sky-600" />
                      <span className="text-xs font-semibold text-zinc-700">Meta Ads Lead Generation</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600">High ROI</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="size-4 text-emerald-600" />
                      <span className="text-xs font-semibold text-zinc-700">WhatsApp Enquiry Funnel</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-700">Active</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-100">
                  <div className="flex items-center gap-2 rounded-xl bg-zinc-100 p-2.5 text-xs text-zinc-600">
                    <Heart className="size-4 text-orange-500 fill-orange-500 shrink-0" />
                    <span className="truncate">Engagement: "Turn likes into real customer calls"</span>
                    <span className="ml-auto text-[10px] font-bold text-white bg-orange-600 px-2 py-0.5 rounded-md">Growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What Is Social Media Marketing? */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200/80 p-6 sm:p-10 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
                  Defining Brand Engagement
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                  What Is Social Media Marketing?
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600">
                  Social media marketing is the process of using platforms like Instagram, Facebook, and WhatsApp to reach customers, build trust, and generate enquiries for a business.
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600">
                  Our service combines strategy, content creation, publishing, engagement, and paid advertising, based on your specific business goals.
                </p>

                <div className="mt-6 pt-5 border-t border-zinc-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                    Key Takeaways:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Social media marketing includes strategy, content, publishing, engagement, and paid ads',
                      'We manage Instagram, Facebook, and WhatsApp based on where your customers actually are',
                      'Content alone isn’t a strategy. Planning and tracking results is what makes it work',
                      'Organic content and paid advertising work best together, not separately',
                      'We serve businesses in both Ujjain and Indore with strategies built for their local market',
                    ].map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-800 font-semibold">
                        <CheckCircle2 className="size-4 text-orange-600 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right stacked cards */}
              <div className="lg:col-span-5 space-y-3.5">
                <div className="p-4 rounded-2xl bg-[#FFF6F0] border border-orange-200 flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0">
                    <InstagramIcon className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Instagram Growth</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Posts, Reels, Stories & Engagement</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F0F9FF] border border-sky-200 flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-[#0284C7] text-white flex items-center justify-center shrink-0">
                    <FacebookIcon className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Facebook & Meta Ads</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Local targeting & lead generation</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-900 text-white flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-emerald-500 text-zinc-950 flex items-center justify-center shrink-0 font-bold">
                    <MessageCircle className="size-5 fill-zinc-950 stroke-none" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">WhatsApp Business Funnel</h4>
                    <p className="text-xs text-zinc-300 mt-0.5">Direct chat & customer enquiries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Does Your Business Need Social Media Marketing? */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Managed Account Benefits
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Why Does Your Business Need Social Media Marketing?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              Managing social media well takes regular planning, content creation, posting, engagement, and performance tracking. We handle these activities so you can focus on running your business.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Consistent Posting', desc: 'Regular, scheduled posts so your business stays top-of-mind.', icon: Calendar, color: 'text-orange-600', bg: 'bg-orange-100' },
              { title: 'Professional Content', desc: 'High-quality graphics, reels, and video creatives suited to your brand.', icon: PenTool, color: 'text-sky-600', bg: 'bg-sky-100' },
              { title: 'Customer Engagement', desc: 'Active response management to comments, messages, and mentions.', icon: MessageSquare, color: 'text-orange-600', bg: 'bg-orange-100' },
              { title: 'More Local Reach', desc: 'Expanding your brand visibility across Ujjain, Indore, & target cities.', icon: Eye, color: 'text-sky-600', bg: 'bg-sky-100' },
              { title: 'More Customer Enquiries', desc: 'Moving followers from passive viewing into real business leads.', icon: Phone, color: 'text-orange-600', bg: 'bg-orange-100' },
              { title: 'Strong Brand Visibility', desc: 'Building trust & recognition through cohesive visual identity.', icon: ShieldCheck, color: 'text-sky-600', bg: 'bg-sky-100' },
              { title: 'Performance Tracking', desc: 'Clear reporting analytics on reach, clicks, enquiries, & ad spend.', icon: BarChart3, color: 'text-amber-600', bg: 'bg-amber-100' },
              { title: 'Targeted Growth', desc: 'Reaching specific demographics searching for your exact offers.', icon: Target, color: 'text-emerald-600', bg: 'bg-emerald-100' },
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

      {/* Section 3: Our Social Media Marketing Services (10 Connected Parts) */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Complete 10-Part System
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Our Social Media Marketing Services
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              We manage your full social media presence as one connected system.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {[
              {
                num: '01',
                title: 'Social Media Strategy',
                desc: 'We start with your business goals, target audience, platform selection, content direction, and campaign planning.',
                items: ['Business goal alignment', 'Audience persona research', 'Platform selection', 'Campaign roadmap planning'],
              },
              {
                num: '02',
                title: 'Content Planning',
                desc: 'We build a monthly content calendar with a mix of content themes, promotional posts, educational content, and engagement content.',
                items: ['Monthly content calendars', 'Promotional post schedules', 'Educational & tip posts', 'Engagement-driven content'],
              },
              {
                num: '03',
                title: 'Social Media Content Creation',
                desc: 'We create the actual content your audience sees.',
                items: ['Social media graphics', 'Promotional posts', 'Instagram Reels', 'Short videos & captions'],
              },
              {
                num: '04',
                title: 'Instagram Marketing',
                desc: 'We manage Instagram posts, reels, stories, engagement, and profile growth.',
                items: ['Feed posts & carousels', 'Reels production', 'Story campaigns', 'Follower & profile growth'],
              },
              {
                num: '05',
                title: 'Facebook Marketing',
                desc: 'We handle Facebook posts, community engagement, promotional campaigns, and local audience targeting.',
                items: ['Facebook page management', 'Local group engagement', 'Promotional offer posts', 'Community building'],
              },
              {
                num: '06',
                title: 'WhatsApp Marketing',
                desc: 'We manage WhatsApp Business marketing for direct customer communication.',
                items: ['Promotional broadcast campaigns', 'Catalog setup', 'Enquiry support setup', 'Customer communication'],
              },
              {
                num: '07',
                title: 'Social Media Management',
                desc: 'We manage the day-to-day activity on your accounts.',
                items: ['Scheduling & publishing', 'Comment & DM monitoring', 'Mention tracking', 'Community management'],
              },
              {
                num: '08',
                title: 'Paid Social Media Advertising',
                desc: 'We run Meta Ads campaigns designed for your specific goals.',
                items: ['Audience geo-targeting', 'Lead generation ads', 'Brand awareness campaigns', 'Performance monitoring'],
              },
              {
                num: '09',
                title: 'Social Media Lead Generation',
                desc: 'We create social campaigns designed to move users from engagement to actual enquiries and leads, not just likes.',
                items: ['Click-to-WhatsApp ads', 'Lead form campaigns', 'Offer landing pages', 'Conversion tracking'],
              },
              {
                num: '10',
                title: 'Performance Reporting',
                desc: 'We track what actually matters for your business growth.',
                items: ['Reach & engagement metrics', 'Profile visits & website clicks', 'Enquiries & leads count', 'Ad spend & Cost Per Lead'],
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

      {/* Section 4: Which Social Media Platforms Do We Manage? */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Platform Selection
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Which Social Media Platforms Do We Manage?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              We recommend platforms based on your audience and business goals, instead of using the same strategy for every business.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-orange-200 bg-white p-6 shadow-sm">
              <div className="size-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center mb-4">
                <InstagramIcon className="size-6" />
              </div>
              <h3 className="text-lg font-extrabold text-zinc-900">Instagram</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Useful for visual businesses like products, food, beauty, lifestyle, clinics, and local consumer brands.
              </p>
            </div>

            <div className="rounded-3xl border border-sky-200 bg-white p-6 shadow-sm">
              <div className="size-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-4">
                <FacebookIcon className="size-6" />
              </div>
              <h3 className="text-lg font-extrabold text-zinc-900">Facebook</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Useful for local businesses, community offers, family demographics, and broader audience targeting.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm">
              <div className="size-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-4">
                <MessageCircle className="size-6 fill-white stroke-none" />
              </div>
              <h3 className="text-lg font-extrabold text-zinc-900">WhatsApp Business</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Useful for direct communication, fast customer enquiries, catalog sharing, and customer relationship building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Organic Social Media + Paid Advertising */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200/80 p-6 sm:p-10 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
                  Dual-Engine Strategy
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                  Organic Social Media + Paid Advertising
                </h2>
                <p className="mt-4 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Organic content builds visibility, trust, and brand familiarity over time. Paid advertising helps you reach a targeted audience faster and supports lead generation.
                </p>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  We plan both together from the start, so your organic content and paid campaigns support each other instead of working in isolation.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4.5 rounded-2xl bg-[#FFF6F0] border border-orange-200 flex items-center gap-4">
                  <div className="size-10 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0">
                    <Heart className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Organic Content Engine</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Builds long-term brand trust, loyalty & social proof</p>
                  </div>
                </div>

                <div className="p-4.5 rounded-2xl bg-[#F0F9FF] border border-sky-200 flex items-center gap-4">
                  <div className="size-10 rounded-xl bg-[#0284C7] text-white flex items-center justify-center shrink-0">
                    <Megaphone className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Paid Meta Advertising</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Accelerates lead generation & immediate customer calls</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: How Our Social Media Marketing Process Works */}
      <section className="py-14 sm:py-20 bg-[#FFF5EE]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200 p-6 sm:p-10 shadow-md">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
                Structured Marketing Workflow
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                How Our Social Media Marketing Process Works
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
              {[
                { step: 'Strategy', desc: 'Define goals, audience, & platform focus.', icon: Target },
                { step: 'Calendar', desc: 'Build monthly content calendar.', icon: Calendar },
                { step: 'Creation', desc: 'Produce graphics, reels, & posts.', icon: PenTool },
                { step: 'Publishing', desc: 'Schedule & post consistently.', icon: Clock },
                { step: 'Engagement', desc: 'Manage comments, DMs, & mentions.', icon: MessageSquare },
                { step: 'Advertising', desc: 'Run & manage paid Meta campaigns.', icon: Megaphone },
                { step: 'Reporting', desc: 'Review performance & optimize.', icon: BarChart3 },
              ].map((st, idx) => {
                const Icon = st.icon
                return (
                  <div
                    key={st.step}
                    className="rounded-2xl border border-orange-100 bg-[#FFFBF7] p-3.5 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[10px] font-black uppercase tracking-wider text-orange-600 bg-orange-100 px-2 py-0.5 rounded">
                          0{idx + 1}
                        </span>
                        <Icon className="size-4 text-orange-600" />
                      </div>
                      <h3 className="text-xs font-extrabold text-zinc-900">{st.step}</h3>
                      <p className="mt-1 text-[10px] text-zinc-600 leading-relaxed">{st.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Benefits of Social Media Marketing (9 Benefits) */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Business Advantages
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Benefits of Social Media Marketing
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              'Consistent online presence',
              'Better brand visibility',
              'More audience engagement',
              'More website visits',
              'More customer enquiries',
              'Better brand trust',
              'Targeted advertising',
              'Measurable campaign performance',
              'Stronger customer relationships',
            ].map((benefit, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-5 border border-orange-200/80 shadow-2xs hover:shadow-xs transition-shadow flex items-center gap-3"
              >
                <div className="size-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="size-4" />
                </div>
                <p className="text-xs sm:text-sm font-extrabold text-zinc-900">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Who Can Benefit From Social Media Marketing? */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Target Industries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Who Can Benefit From Social Media Marketing?
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-4">
            {[
              'Local businesses',
              'Retail shops',
              'Restaurants & cafes',
              'Salons & beauty',
              'Clinics & professionals',
              'Hotels & hospitality',
              'Real estate businesses',
              'E-commerce businesses',
              'Service businesses',
              'Startups & growing brands',
            ].map((who, i) => (
              <div
                key={i}
                className="rounded-2xl border border-orange-200/80 bg-white p-4 text-center shadow-2xs hover:shadow-xs transition-shadow flex flex-col items-center justify-center"
              >
                <div className="size-9 rounded-xl bg-orange-50 flex items-center justify-center mb-2">
                  <Building2 className="size-4 text-orange-600" />
                </div>
                <h4 className="text-xs font-extrabold text-zinc-900">{who}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Regional Spotlight (Ujjain & Indore) + Why Choose Us */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200/80 p-6 sm:p-10 shadow-md">
            {/* Top Regional Spotlight */}
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-wider mb-3">
                <MapPin className="size-3.5" /> Regional Market Focus
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                Social Media Marketing Services in Ujjain and Indore
              </h2>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-700 font-medium">
                We help businesses in <strong>Ujjain</strong> build a consistent social media presence through strategy, content, engagement, and paid campaigns.
              </p>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-700 font-medium">
                We also provide social media marketing services for businesses in <strong>Indore</strong>, creating custom strategies based on your industry, audience, and business goals.
              </p>
            </div>

            {/* Bottom Why Choose Us */}
            <div className="mt-10 pt-8 border-t border-orange-200">
              <div className="text-center mb-8">
                <h3 className="text-xl font-extrabold text-zinc-900">Why Choose Pragati Ujjayini?</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: 'Customized Strategy', desc: 'Customized social media strategy for your business.', color: 'bg-orange-600' },
                  { title: 'Local Market Insight', desc: 'Local market understanding across Ujjain and Indore.', color: 'bg-[#0284C7]' },
                  { title: 'Content + Account Management', desc: 'Content creation and account management together.', color: 'bg-orange-600' },
                  { title: 'Paid Advertising Support', desc: 'Paid advertising support via targeted Meta Ads.', color: 'bg-[#0284C7]' },
                  { title: 'Clear Regular Reporting', desc: 'Regular, clear performance reporting.', color: 'bg-orange-600' },
                  { title: 'Business-Focused ROI', desc: 'Business-focused campaigns, not vanity metrics.', color: 'bg-[#0284C7]' },
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

      {/* Section 10: Pricing & Performance Measurement */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200 p-6 sm:p-10 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
                  Pricing Factors
                </span>
                <h3 className="text-xl font-extrabold text-zinc-900">What Affects Social Media Marketing Pricing?</h3>
                <ul className="mt-4 space-y-2.5">
                  {[
                    'Number of platforms managed',
                    'Posting frequency',
                    'Number of creatives needed',
                    'Reels and video requirements',
                    'Level of community management',
                    'Paid advertising involvement',
                    'Strategy and reporting depth',
                  ].map((factor) => (
                    <li key={factor} className="flex items-center gap-2.5 text-xs font-semibold text-zinc-800">
                      <Check className="size-3.5 text-orange-600 stroke-[3]" />
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider mb-3">
                  Performance Metrics
                </span>
                <h3 className="text-xl font-extrabold text-zinc-900">How We Measure Performance</h3>
                <p className="text-xs text-zinc-600 mt-1 mb-4">We look beyond follower count. We track:</p>
                <div className="grid grid-cols-2 gap-2">
                  {['Reach', 'Engagement', 'Profile visits', 'Website clicks', 'Messages & enquiries', 'Leads', 'Cost per lead', 'Ad performance'].map((metric) => (
                    <div key={metric} className="p-2.5 rounded-xl bg-[#FFF6F0] border border-orange-200/60 text-xs font-bold text-zinc-800 text-center">
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100 text-center">
              <p className="text-xs text-zinc-600 font-medium">
                Social media, your Google Business Profile, and local SEO work together. Explore our{' '}
                <Link href="/services/local-seo-services" className="text-orange-600 font-bold underline">
                  local SEO services
                </Link>{' '}
                if you want ongoing local visibility alongside your social presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Social Media Marketing FAQs */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              Everything you need to know about our social media marketing services.
            </p>
          </div>

          <SocialMediaFaqAccordion />
        </div>
      </section>

      {/* Section 12: Final CTA Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-zinc-950 via-zinc-900 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Ready to Build a Social Media Strategy That Works?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto font-normal">
            If your social media presence feels inconsistent or isn't bringing in real enquiries, let's fix that with a clear plan. Contact Pragati Ujjayini to discuss your business goals, or get a custom social media marketing plan for your business in Ujjain or Indore.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-sm font-extrabold text-white shadow-xl hover:bg-orange-700 hover:scale-[1.02] transition-all"
            >
              <span>Get Your Custom Social Plan</span>
              <ArrowRight className="size-4.5" />
            </Link>

            <a
              href="https://wa.me/919202668977?text=Hi%20Pragati%20Ujjayini%2C%20I%20want%20to%20discuss%20a%20Social%20Media%20Marketing%20plan."
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
