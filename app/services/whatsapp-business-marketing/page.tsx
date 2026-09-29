import type { Metadata } from 'next'
import Link from 'next/link'
import {
  MessageCircle,
  MapPin,
  Phone,
  CheckCircle2,
  Star,
  Eye,
  Briefcase,
  Building2,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Award,
  FileText,
  Wrench,
  Check,
  Target,
  Layout,
  Smartphone,
  Package,
  Globe,
  ShieldCheck,
  BarChart3,
  Bot,
  Users,
  Send,
  Zap,
  Lock,
  Search,
  Megaphone,
} from 'lucide-react'
import { WhatsappFaqAccordion } from './whatsapp-faq-accordion'

export const metadata: Metadata = {
  title: 'WhatsApp Business Marketing: Turn Chats into Sales',
  description:
    'Automate customer chats, show product catalogs, and boost sales. Discover how WhatsApp Business Marketing helps local businesses drive instant leads!',
  alternates: {
    canonical: 'https://www.pragatiujjayini.com/services/whatsapp-business-marketing',
  },
  openGraph: {
    title: 'WhatsApp Business Marketing: Turn Chats into Sales',
    description:
      'Automate customer chats, show product catalogs, and boost sales. Discover how WhatsApp Business Marketing helps local businesses drive instant leads!',
    url: 'https://www.pragatiujjayini.com/services/whatsapp-business-marketing',
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
      "@id": "https://www.pragatiujjayini.com/whatsapp-business-marketing-services/#service",
      "name": "WhatsApp Business Marketing Services",
      "serviceType": "WhatsApp Business Marketing",
      "description": "WhatsApp Business Marketing services covering profile setup, catalog setup, WhatsApp Business API setup, automation, broadcast and campaign management, lead generation, customer follow-up, CRM integration, and reporting for businesses in Ujjain and Indore.",
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
        "name": "WhatsApp Business Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WhatsApp Business Profile Setup"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WhatsApp Catalog Setup"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WhatsApp Business API Setup"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WhatsApp Automation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Broadcast & Campaign Management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WhatsApp Lead Generation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Customer Follow-Up"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WhatsApp CRM & Business Integrations"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WhatsApp Marketing Reporting"
            }
          }
        ]
      },
      "url": "https://www.pragatiujjayini.com/whatsapp-business-marketing-services/"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pragatiujjayini.com/whatsapp-business-marketing-services/#breadcrumb",
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
          "name": "WhatsApp Business Marketing Services",
          "item": "https://www.pragatiujjayini.com/whatsapp-business-marketing-services/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.pragatiujjayini.com/whatsapp-business-marketing-services/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is WhatsApp Business Marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "WhatsApp Business Marketing uses WhatsApp to communicate with customers, promote products or services, generate enquiries, and follow up with leads."
          }
        },
        {
          "@type": "Question",
          "name": "What does WhatsApp marketing include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It includes profile setup, catalog setup, automation, broadcast campaigns, lead generation, customer follow-up, integrations, and reporting."
          }
        },
        {
          "@type": "Question",
          "name": "Do you set up WhatsApp Business profiles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We set up your business description, contact details, hours, and location correctly from the start."
          }
        },
        {
          "@type": "Question",
          "name": "Can you create a WhatsApp catalog?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We build a product or service catalog customers can browse directly on WhatsApp."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide WhatsApp Business API setup?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, for businesses that need higher-volume communication and integrations."
          }
        },
        {
          "@type": "Question",
          "name": "Can you automate WhatsApp replies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We set up greeting messages, auto-replies, away messages, and FAQ responses."
          }
        },
        {
          "@type": "Question",
          "name": "Can WhatsApp marketing generate leads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We connect your other channels to WhatsApp and follow up on enquiries to convert conversations into leads."
          }
        },
        {
          "@type": "Question",
          "name": "Can WhatsApp be connected with Google Ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We can set up ad-to-WhatsApp campaigns so people can message you directly from your ads."
          }
        },
        {
          "@type": "Question",
          "name": "Can WhatsApp be connected with my website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We can add WhatsApp buttons and chat options to your website."
          }
        },
        {
          "@type": "Question",
          "name": "Can you manage WhatsApp broadcast campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We manage promotional campaigns, offers, announcements, and reminders within WhatsApp's messaging policies."
          }
        },
        {
          "@type": "Question",
          "name": "Is WhatsApp marketing allowed for promotional messages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, when sent to customers who have given the required consent and in line with WhatsApp's messaging policies."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need customer consent for WhatsApp marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Promotional messages should only go to customers who have opted in."
          }
        },
        {
          "@type": "Question",
          "name": "How much does WhatsApp marketing cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cost depends on your number of contacts, campaign frequency, automation needs, and whether API setup is required. We provide a plan based on your specific requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How long does WhatsApp marketing setup take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This depends on the scope, such as profile and catalog setup versus full API integration with automation and other systems."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide WhatsApp marketing services in Ujjain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We work with businesses across Ujjain."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide WhatsApp marketing services in Indore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We also work with businesses in Indore."
          }
        }
      ]
    }
  ]
}

export default function WhatsappBusinessMarketingPage() {
  return (
    <main className="bg-[#FFFBF7] min-h-screen text-zinc-800 antialiased selection:bg-emerald-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-orange-50/50 border-b border-orange-100/60 py-3">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-xs text-zinc-600 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3.5 text-zinc-400" />
          <Link href="/services" className="hover:text-orange-600 transition-colors">
            Services
          </Link>
          <ChevronRight className="size-3.5 text-zinc-400" />
          <span className="font-semibold text-zinc-900">
            WhatsApp Business Marketing
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="absolute top-0 right-1/4 -z-10 size-96 rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 -z-10 size-96 rounded-full bg-orange-100/40 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <MessageCircle className="size-4 text-emerald-600 fill-emerald-600" />
                Instant B2B & B2C Lead Channel
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-[1.15]">
                Get Instant Leads & Enquiries with{' '}
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
                  WhatsApp Business Marketing
                </span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                We help businesses use WhatsApp to generate enquiries, communicate with customers, follow up on leads, and promote products or services. From profile setup to automation and campaigns, we manage it all.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-600/25 transition-all duration-200 hover:bg-emerald-700 hover:scale-[1.02]"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href="https://wa.me/919202668977?text=Hi%20Pragati%20Ujjayini%2C%20I%20want%20to%20know%20more%20about%20WhatsApp%20Business%20Marketing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0284C7] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-sky-600/20 transition-all duration-200 hover:bg-sky-700 hover:scale-[1.02]"
                >
                  <MessageCircle className="size-4 fill-white stroke-none" />
                  <span>WhatsApp Us Direct</span>
                </a>
              </div>

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-orange-100 text-xs text-zinc-600 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Catalog & Auto-Replies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Google Ads to WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>API & Workflow Integration</span>
                </div>
              </div>
            </div>

            {/* Visual Feature Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-gradient-to-b from-white to-emerald-50/50 p-6 sm:p-8 border border-emerald-200/80 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-emerald-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                      <MessageCircle className="size-5 fill-white stroke-none" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900">WhatsApp Sales Hub</h4>
                      <p className="text-xs text-zinc-500">Instant Lead Conversion</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    Active Channel
                  </span>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="rounded-2xl bg-white border border-emerald-100 p-3.5 shadow-2xs">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Automated Greeting</span>
                    <p className="mt-1 font-semibold text-zinc-900">"Hi! Thanks for reaching out to Pragati Ujjayini. How can we help your business grow today?"</p>
                  </div>
                  <div className="rounded-2xl bg-emerald-600 text-white p-3.5 shadow-2xs ml-4">
                    <span className="text-[10px] font-bold text-emerald-200 uppercase tracking-wider">Instant Catalog</span>
                    <p className="mt-1 text-xs">View Product & Service Catalog (Ujjain & Indore)</p>
                  </div>
                  <div className="rounded-2xl bg-white border border-emerald-100 p-3.5 shadow-2xs">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Lead Captured</span>
                    <p className="mt-1 text-zinc-700">Ad Click → Instant Chat → Sales Follow-Up Scheduled</p>
                  </div>
                </div>

                <div className="pt-2 text-center border-t border-emerald-100">
                  <span className="text-xs font-bold text-zinc-800">
                    Get a WhatsApp Marketing Plan built around how your customers reach out.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What Is WhatsApp Business Marketing? & Key Takeaways */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-emerald-200/80 p-6 sm:p-10 shadow-sm space-y-8">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
                Overview & Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                What Is WhatsApp Business Marketing?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                WhatsApp Business Marketing uses WhatsApp to communicate with customers, promote products or services, generate enquiries, and follow up with leads. It can include a WhatsApp Business profile, a product catalog, automated replies, broadcasts, campaigns, customer follow-ups, and integrations with your other marketing channels.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-emerald-50/70 to-teal-50/50 p-6 border border-emerald-200/70">
              <h3 className="text-base font-extrabold text-zinc-900 flex items-center gap-2 mb-4">
                <Sparkles className="size-5 text-emerald-600" />
                Key Takeaways
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>WhatsApp gives customers a direct, instant way to contact your business</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Our service covers profile setup, catalog, automation, campaigns, and follow-ups</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Works best connected to Google Ads, Google Business Profile, social media, and website</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Every campaign follows WhatsApp's messaging policies and requires proper customer consent</span>
                </div>
                <div className="flex items-start gap-2.5 sm:col-span-2">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>We provide WhatsApp Business Marketing services for businesses in both Ujjain and Indore</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Use WhatsApp Business Marketing? */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              Instant Engagement
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Why Use WhatsApp Business Marketing?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              WhatsApp gives customers a direct way to contact your business. Instead of waiting for a form submission or a phone call, they can start a conversation immediately.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Direct Contact', desc: 'Customers can contact you directly from any platform.', icon: MessageCircle, color: 'text-emerald-600', bg: 'bg-emerald-100' },
              { title: 'Faster Response', desc: 'Faster response to customer enquiries builds trust quickly.', icon: Zap, color: 'text-sky-600', bg: 'bg-sky-100' },
              { title: 'Easy Follow-Up', desc: 'Easy and structured follow-up with interested leads.', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-100' },
              { title: 'Quick Product Info', desc: 'Quick sharing of product or service information via catalogs.', icon: Package, color: 'text-sky-600', bg: 'bg-sky-100' },
              { title: 'Repeat Enquiries', desc: 'Better management of repeat customer enquiries.', icon: Bot, color: 'text-emerald-600', bg: 'bg-emerald-100' },
              { title: 'Promotional Campaigns', desc: 'Full support for segmented promotional campaigns.', icon: Send, color: 'text-sky-600', bg: 'bg-sky-100' },
              { title: 'Traffic Integration', desc: 'Direct connection point for Google Ads and social media traffic.', icon: Globe, color: 'text-emerald-600', bg: 'bg-emerald-100' },
              { title: 'Zero Missed Enquiries', desc: 'Fewer missed enquiries with automated instant replies.', icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-100' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="rounded-3xl border border-emerald-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
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

      {/* Section 3: Our 9 WhatsApp Business Marketing Services */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              Complete 9-Part Messaging System
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Our WhatsApp Business Marketing Services
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              We manage your WhatsApp presence as one connected system.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'WhatsApp Business Profile Setup',
                desc: 'We set up your business profile correctly from the start.',
                items: ['Business description', 'Contact details', 'Business hours', 'Location setup', 'Complete profile info'],
                icon: Building2,
              },
              {
                num: '02',
                title: 'WhatsApp Catalog Setup',
                desc: 'We build a catalog customers can browse directly on WhatsApp.',
                items: ['Product or service catalog', 'Product information', 'Pricing where applicable', 'Product images', 'Categories organization'],
                icon: Package,
              },
              {
                num: '03',
                title: 'WhatsApp Business API Setup',
                desc: 'For businesses needing higher-volume communication, we set up the WhatsApp API.',
                items: ['API setup & verification support', 'Business integrations', 'High message volume support', 'App vs. API guidance'],
                icon: Bot,
              },
              {
                num: '04',
                title: 'WhatsApp Automation',
                desc: 'Set up automated responses so customers get replies even when you are away.',
                items: ['Greeting messages', 'Auto-replies', 'Away messages', 'FAQ responses', 'Automated workflows'],
                icon: Zap,
              },
              {
                num: '05',
                title: 'Broadcast & Campaign Management',
                desc: 'We manage promotional messaging campaigns within WhatsApp messaging policies.',
                items: ['Promotional campaigns', 'Offers & announcements', 'Reminder messages', 'Segmented customer lists'],
                icon: Send,
              },
              {
                num: '06',
                title: 'WhatsApp Lead Generation',
                desc: 'Connect your other marketing channels directly into WhatsApp for faster replies.',
                items: ['Website WhatsApp buttons', 'Google Profile enquiries', 'Ad-to-WhatsApp campaigns', 'Social media integration', 'Lead follow-up'],
                icon: Target,
              },
              {
                num: '07',
                title: 'Customer Follow-Up',
                desc: 'We help you stay on top of every incoming customer enquiry.',
                items: ['New enquiry follow-up', 'Reminder messages', 'Lead nurturing', 'Repeat customer communication'],
                icon: Users,
              },
              {
                num: '08',
                title: 'WhatsApp CRM & Business Integrations',
                desc: 'Connect WhatsApp with your other business systems where required.',
                items: ['CRM integration', 'Booking systems', 'Website integration', 'Order management', 'Customer databases'],
                icon: Wrench,
              },
              {
                num: '09',
                title: 'WhatsApp Marketing Reporting',
                desc: 'Get clear visibility into how your WhatsApp marketing is performing.',
                items: ['Messages sent & delivered', 'Response rate tracking', 'Leads and enquiries', 'Campaign performance', 'Follow-up analytics'],
                icon: BarChart3,
              },
            ].map((service, i) => {
              const Icon = service.icon
              return (
                <div
                  key={i}
                  className="rounded-3xl border border-emerald-200/80 bg-white p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                        {service.num}
                      </span>
                      <div className="size-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                        <Icon className="size-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-extrabold text-zinc-900">{service.title}</h3>
                    <p className="mt-2 text-xs text-zinc-600 leading-relaxed">{service.desc}</p>
                    <ul className="mt-4 space-y-2 border-t border-emerald-100 pt-4">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                          <Check className="size-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 4: WhatsApp Marketing With Your Other Channels */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-emerald-950 via-zinc-900 to-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-2">
              Multi-Channel Integration
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              WhatsApp Marketing With Your Other Channels
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-300">
              WhatsApp works best when it connects with the channels customers already use to find your business. A customer can find you through Google, Instagram, or an advertisement, and then contact you directly on WhatsApp.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-zinc-900/90 border border-emerald-800/50 p-6 flex items-start gap-4">
              <div className="size-12 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Megaphone className="size-6" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">Google Ads → WhatsApp</h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  People who click your Google Ads can message you directly on WhatsApp instead of filling out a contact form.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-zinc-900/90 border border-emerald-800/50 p-6 flex items-start gap-4">
              <div className="size-12 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                <MapPin className="size-6" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">Google Business Profile → WhatsApp</h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Customers searching for you on Google Maps and Local Search can reach out through WhatsApp right from your Google Business Profile.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-zinc-900/90 border border-emerald-800/50 p-6 flex items-start gap-4">
              <div className="size-12 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Users className="size-6" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">Social Media → WhatsApp</h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Followers engaging with your Instagram and Facebook social media marketing can move straight into a 1-on-1 WhatsApp conversation.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-zinc-900/90 border border-emerald-800/50 p-6 flex items-start gap-4">
              <div className="size-12 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Globe className="size-6" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">Website → WhatsApp</h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Visitors to your website can click a WhatsApp button to start an instant chat instead of waiting for a callback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Process */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              Clear Implementation Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Our WhatsApp Marketing Process
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">
              A structured 7-step process designed to maximize response rates and turn chat conversations into sales.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Analysis', desc: 'Understand your business, audience, products/services, and enquiry process.' },
              { step: '02', title: 'WhatsApp Setup', desc: 'Configure your profile, catalog, and required business settings.' },
              { step: '03', title: 'Campaign Strategy', desc: 'Decide how WhatsApp fits your goals: leads, follow-up, promotions, or support.' },
              { step: '04', title: 'Automation', desc: 'Set up automated responses, greeting messages, and workflows.' },
              { step: '05', title: 'Campaign & Follow-Up', desc: 'Run approved broadcast campaigns and follow up on incoming leads.' },
              { step: '06', title: 'Integration', desc: 'Connect WhatsApp with your website, Google Ads, CRM, or other systems.' },
              { step: '07', title: 'Reporting', desc: 'Track messages, responses, enquiries, and campaign performance.' },
            ].map((p, i) => (
              <div key={i} className="rounded-3xl border border-emerald-200/80 bg-white p-6 shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-black text-emerald-600">{p.step}</span>
                  <h3 className="mt-3 text-base font-extrabold text-zinc-900">{p.title}</h3>
                  <p className="mt-2 text-xs text-zinc-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Benefits & Target Audience */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Benefits */}
            <div className="rounded-3xl bg-white border border-emerald-200/80 p-6 sm:p-8 shadow-sm">
              <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
                Key Advantages
              </span>
              <h3 className="text-xl font-extrabold text-zinc-900 mb-4">
                Benefits of WhatsApp Business Marketing
              </h3>
              <ul className="space-y-3">
                {[
                  'Direct communication with customers',
                  'Faster response to enquiries',
                  'Better lead follow-up',
                  'Fewer missed enquiries',
                  'Easy sharing of product or service information',
                  'Stronger customer engagement',
                  'Support for promotional campaigns',
                  'Better lead nurturing',
                  'Integration with your ads and website',
                  'More organized customer communication',
                ].map((b, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-700 font-medium">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who Can Benefit */}
            <div className="rounded-3xl bg-white border border-emerald-200/80 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
                  Target Industries
                </span>
                <h3 className="text-xl font-extrabold text-zinc-900 mb-4">
                  Who Can Benefit From WhatsApp Marketing?
                </h3>
                <div className="grid grid-cols-2 gap-2.5 text-xs font-medium text-zinc-800">
                  {[
                    'Local shops (product enquiries)',
                    'Clinics & doctors (appointments)',
                    'Restaurants (orders & reservations)',
                    'Hotels & stay bookings',
                    'Salons & beauty centers',
                    'Retail stores',
                    'E-commerce businesses',
                    'Real estate businesses',
                    'Service businesses (lead follow-up)',
                    'Education & coaching institutes',
                    'Appointment-based businesses',
                  ].map((ind, idx) => (
                    <div key={idx} className="rounded-xl bg-emerald-50/60 border border-emerald-100 p-2.5 flex items-center gap-2">
                      <div className="size-2 rounded-full bg-emerald-500 shrink-0" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-200 p-4 text-xs text-amber-900 leading-relaxed flex items-start gap-2.5">
                <Lock className="size-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">WhatsApp Marketing & Customer Consent:</span> WhatsApp marketing should only be sent to customers who have provided the required consent. All campaigns follow WhatsApp's messaging policies, and we avoid unsolicited bulk messaging.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Local Focus - Ujjain & Indore */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-emerald-200/80 p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
                  Local Presence
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                  WhatsApp Business Marketing Services in Ujjain & Indore
                </h2>
                <p className="mt-4 text-sm text-zinc-600 leading-relaxed font-normal">
                  We help businesses in Ujjain use WhatsApp for customer enquiries, promotions, follow-ups, and direct communication. We also offer WhatsApp marketing services for businesses in Indore, creating custom campaigns and messaging workflows designed around your specific business goals.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-zinc-800">
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200">Ujjain Businesses</span>
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200">Indore Businesses</span>
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200">Local Lead Workflows</span>
                </div>
              </div>

              {/* Why Choose Pragati Ujjayini */}
              <div className="rounded-2xl bg-gradient-to-b from-emerald-50/50 to-teal-50/30 p-6 border border-emerald-200/80">
                <h3 className="text-lg font-extrabold text-zinc-900 mb-3">
                  Why Choose Pragati Ujjayini?
                </h3>
                <ul className="space-y-2.5 text-xs text-zinc-700">
                  {[
                    'Clear WhatsApp marketing strategy tailored to your goals',
                    'Deep understanding of local business needs in Ujjain & Indore',
                    'Lead-focused campaigns, not just broadcast messages',
                    'Structured customer follow-up workflows',
                    'Integration with Google Ads, GMB, and social media',
                    'Ongoing campaign management, not just a one-time setup',
                  ].map((why, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="size-3.5 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                      <span>{why}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Pricing Factors & Performance Metrics */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-emerald-200 p-6 sm:p-10 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
                  Pricing Scope
                </span>
                <h3 className="text-xl font-extrabold text-zinc-900">What Affects WhatsApp Marketing Pricing?</h3>
                <p className="text-xs text-zinc-600 mt-1 mb-4">Pricing depends on the following factors:</p>
                <ul className="space-y-2.5">
                  {[
                    'Number of contacts',
                    'Campaign frequency',
                    'Automation complexity',
                    'API setup requirements',
                    'Integrations needed (CRM, website, ads)',
                    'Content and creative requirements',
                    'Ongoing management scope',
                    'Reporting requirements',
                  ].map((factor) => (
                    <li key={factor} className="flex items-center gap-2.5 text-xs font-semibold text-zinc-800">
                      <Check className="size-3.5 text-emerald-600 stroke-[3]" />
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-zinc-500 mt-4 italic">
                  Note: WhatsApp marketing management fees and WhatsApp/API messaging charges may be separate, depending on your setup.
                </p>
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
                  Key Metrics
                </span>
                <h3 className="text-xl font-extrabold text-zinc-900">How We Measure Performance</h3>
                <p className="text-xs text-zinc-600 mt-1 mb-4">We track what actually matters to your business growth:</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Messages Sent', desc: 'Delivered volume tracking' },
                    { label: 'Response Rate', desc: 'Customer interaction percentage' },
                    { label: 'Enquiries Captured', desc: 'Inbound customer questions' },
                    { label: 'Leads Generated', desc: 'Qualified prospects' },
                    { label: 'Follow-Ups Done', desc: 'Completed sales touches' },
                    { label: 'Bookings / Orders', desc: 'Conversions where trackable' },
                  ].map((m, idx) => (
                    <div key={idx} className="rounded-xl bg-emerald-50/70 border border-emerald-100 p-3">
                      <div className="text-xs font-extrabold text-emerald-900">{m.label}</div>
                      <div className="text-[10px] text-zinc-600 mt-0.5">{m.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: FAQs */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              Everything you need to know about our WhatsApp Business Marketing services.
            </p>
          </div>
          <WhatsappFaqAccordion />
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-zinc-950 via-emerald-950 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Ready to Turn WhatsApp Into a Growth Channel?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto font-normal">
            If enquiries are slipping through the cracks, WhatsApp marketing can help you respond faster and follow up better. Contact Pragati Ujjayini to get a WhatsApp marketing plan for your business in Ujjain or Indore.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-extrabold text-white shadow-xl hover:bg-emerald-700 hover:scale-[1.02] transition-all"
            >
              <span>Get Your WhatsApp Marketing Plan</span>
              <ArrowRight className="size-4.5" />
            </Link>
            <a
              href="https://wa.me/919202668977?text=Hi%20Pragati%20Ujjayini%2C%20I%20want%20a%20WhatsApp%20marketing%20plan%20for%20my%20business."
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
