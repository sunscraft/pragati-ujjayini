import type { Metadata } from 'next'
import Link from 'next/link'
import {
  PenTool,
  MapPin,
  Phone,
  MessageCircle,
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
  Printer,
  Globe,
  Palette,
  ShieldCheck,
  BarChart3,
} from 'lucide-react'
import { GraphicDesignFaqAccordion } from './graphic-design-faq-accordion'

function ImageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Graphic Design Services: Turn Visuals into Sales',
  description:
    'Build a strong brand identity with professional graphic design services. Create high-converting logos, social media posts, and marketing materials today',
  alternates: {
    canonical: 'https://www.pragatiujjayini.com/services/graphic-design-services',
  },
  openGraph: {
    title: 'Graphic Design Services: Turn Visuals into Sales',
    description:
      'Build a strong brand identity with professional graphic design services. Create high-converting logos, social media posts, and marketing materials today',
    url: 'https://www.pragatiujjayini.com/services/graphic-design-services',
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
      "telephone": "+91-XXXXXXXXXX",
      "priceRange": "",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ujjain",
        "addressRegion": "Madhya Pradesh",
        "addressCountry": "IN"
      },
      "areaServed": [
        { "@type": "City", "name": "Ujjain" },
        { "@type": "City", "name": "Indore" }
      ],
      "sameAs": ["https://share.google/VuMw4tqyzeo5P2OMa"]
    },
    {
      "@type": "Service",
      "@id": "https://www.pragatiujjayini.com/services/graphic-design-services/#service",
      "name": "Graphic Design Services",
      "serviceType": "Graphic Design",
      "description": "Professional graphic design services covering logo design, brand identity, social media creatives, website graphics, marketing materials, print design, packaging design, and Google Business Profile graphics for businesses in Ujjain and Indore.",
      "provider": { "@id": "https://www.pragatiujjayini.com/#organization" },
      "areaServed": [
        { "@type": "City", "name": "Ujjain" },
        { "@type": "City", "name": "Indore" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Graphic Design Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Logo Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Identity Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marketing & Promotional Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Graphics" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Print Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Packaging Design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Business Profile Graphics" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Graphic Design" } }
        ]
      },
      "url": "https://www.pragatiujjayini.com/services/graphic-design-services/"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.pragatiujjayini.com/services/graphic-design-services/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pragatiujjayini.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pragatiujjayini.com/services/" },
        { "@type": "ListItem", "position": 3, "name": "Graphic Design Services", "item": "https://www.pragatiujjayini.com/services/graphic-design-services/" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.pragatiujjayini.com/services/graphic-design-services/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What graphic design services do you provide?",
          "acceptedAnswer": { "@type": "Answer", "text": "We provide logo design, brand identity design, social media design, marketing and promotional design, website graphics, print design, packaging design, Google Business Profile graphics, and custom design work." }
        },
        {
          "@type": "Question",
          "name": "Do you create social media graphics?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We design Instagram posts, Facebook creatives, WhatsApp status designs, and promotional graphics." }
        },
        {
          "@type": "Question",
          "name": "Can you design brochures, flyers, and pamphlets?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We design flyers, pamphlets, posters, and other promotional materials." }
        },
        {
          "@type": "Question",
          "name": "Can you create graphics for my website?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We design website banners, icons, and other visual assets for your website." }
        },
        {
          "@type": "Question",
          "name": "How long does graphic design take?",
          "acceptedAnswer": { "@type": "Answer", "text": "Timelines depend on the design type and complexity. Simple designs are usually quicker, while complete brand identity work takes longer." }
        },
        {
          "@type": "Question",
          "name": "How much do graphic design services cost?",
          "acceptedAnswer": { "@type": "Answer", "text": "Cost depends on the type of design, number of deliverables, and complexity. We provide a quote based on your specific requirements." }
        },
        {
          "@type": "Question",
          "name": "Can you provide ongoing graphic design support?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer ongoing design support for businesses that need regular creatives, not just one-time projects." }
        }
      ]
    }
  ]
}

export default function GraphicDesignPage() {
  return (
    <main className="bg-[#FFFBF7] min-h-screen text-zinc-800 antialiased selection:bg-orange-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Breadcrumbs */}
      <div className="bg-[#FFF3EA] border-b border-orange-200/60 py-3">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <nav className="flex items-center gap-2 text-zinc-600 font-medium">
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <ChevronRight className="size-3.5 text-orange-400" />
            <Link href="/services" className="hover:text-orange-600 transition-colors">Services</Link>
            <ChevronRight className="size-3.5 text-orange-400" />
            <span className="text-orange-950 font-bold truncate">Graphic Design Services</span>
          </nav>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-orange-200 text-xs font-semibold text-orange-700 shadow-2xs">
            <PenTool className="size-3.5 text-orange-500" />
            Professional Design for Ujjain &amp; Indore Businesses
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5EC] via-[#FFF9F5] to-[#FFFBF7] pt-10 pb-16 sm:pt-16 sm:pb-24">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-100/60 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-700 mb-6">
                <Sparkles className="size-3.5" />
                <span>Graphic Design Services</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 leading-[1.15]">
                <span className="text-orange-600">Turn Visuals into Sales:</span>{' '}
                Graphic Design Services in Ujjain &amp; Indore
              </h1>
              <p className="mt-5 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                We create professional designs that help your business look consistent, trustworthy, and easy to recognize across digital and print channels. From logo and branding to social media creatives, website graphics, and print materials, we design everything your business needs to look its best.
              </p>
              <div className="mt-6 p-4 rounded-2xl bg-[#FFF0E6] border-l-4 border-orange-500 text-zinc-800 text-sm leading-relaxed flex items-start gap-3 shadow-2xs">
                <PenTool className="size-5 text-orange-600 shrink-0 mt-0.5" />
                <p><strong>What we design:</strong> Logo, branding, social media creatives, website graphics, marketing materials, and print design.</p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-600/25 transition-all duration-200 hover:bg-orange-700 hover:scale-[1.02]"
                >
                  <span>Get a Graphic Design Quote</span>
                  <ArrowRight className="size-4.5" />
                </Link>
                <a
                  href="https://wa.me/919202668977?text=Hi%20Pragati%20Ujjayini%2C%20I%20want%20to%20discuss%20Graphic%20Design%20Services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0284C7] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition-all duration-200 hover:bg-sky-700 hover:scale-[1.02]"
                >
                  <MessageCircle className="size-4.5 fill-white stroke-none" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-3.5 w-full">
                <div className="rounded-2xl border border-orange-100 bg-white p-4 text-center shadow-xs">
                  <p className="text-xl sm:text-2xl font-black text-orange-600">100%</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">Brand Consistent</p>
                </div>
                <div className="rounded-2xl border border-sky-100 bg-white p-4 text-center shadow-xs">
                  <p className="text-xl sm:text-2xl font-black text-[#0284C7]">Digital</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">+ Print Design</p>
                </div>
                <div className="rounded-2xl border border-orange-100 bg-white p-4 text-center shadow-xs">
                  <p className="text-xl sm:text-2xl font-black text-orange-600">9+</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-zinc-500 mt-1">Design Services</p>
                </div>
              </div>
            </div>

            {/* Hero Right Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white p-6 sm:p-7 shadow-xl border border-orange-200/80">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                      <Palette className="size-5" />
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-wider">Design Studio</span>
                      <h3 className="text-sm font-extrabold text-zinc-900 mt-1">Logo, Brand &amp; Creative Design</h3>
                    </div>
                  </div>
                  <span className="flex size-3 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="mt-5 space-y-3.5">
                  <div className="p-3.5 rounded-2xl bg-[#FFF6F0] border border-orange-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Award className="size-4 text-orange-600" />
                      <div>
                        <p className="text-xs font-bold text-zinc-900">Logo &amp; Brand Identity</p>
                        <p className="text-[10px] text-zinc-500">Professional First Impression</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">Completed</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ImageIcon className="size-4 text-sky-600" />
                      <span className="text-xs font-semibold text-zinc-700">Social Media Creatives</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600">Active</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Printer className="size-4 text-orange-600" />
                      <span className="text-xs font-semibold text-zinc-700">Print &amp; Marketing Materials</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-700">Ready</span>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-zinc-100">
                  <div className="flex items-center gap-2 rounded-xl bg-zinc-100 p-2.5 text-xs text-zinc-600">
                    <Palette className="size-4 text-orange-500 shrink-0" />
                    <span className="truncate">Design: &quot;Consistent visuals across every channel&quot;</span>
                    <span className="ml-auto text-[10px] font-bold text-white bg-orange-600 px-2 py-0.5 rounded-md">Brand</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What Are Graphic Design Services? */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200/80 p-6 sm:p-10 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">Defining Visual Branding</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">What Are Graphic Design Services?</h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600">Graphic design services help businesses create visual materials that represent their brand and communicate with customers.</p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600">This includes your logo, brand colors and fonts, social media designs, website graphics, marketing materials, print materials, and packaging.</p>
                <div className="mt-6 pt-5 border-t border-zinc-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Key Takeaways:</p>
                  <ul className="space-y-2">
                    {[
                      'Graphic design covers everything from your logo to social media posts, website graphics, and print materials',
                      'Consistent design across every channel makes your business easier to recognize and trust',
                      'We design for both digital use (social media, website) and print use (business cards, brochures, signboards)',
                      'Your logo, social media graphics, and Google Business Profile should share one consistent visual identity',
                      'We provide graphic design services for businesses across Ujjain and Indore',
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
                  <div className="size-11 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0"><Award className="size-5" /></div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Logo &amp; Brand Identity</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Colors, typography, visual style &amp; guidelines</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-[#F0F9FF] border border-sky-200 flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-[#0284C7] text-white flex items-center justify-center shrink-0"><ImageIcon className="size-5" /></div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">Digital Design</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">Social media, website graphics &amp; creatives</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-900 text-white flex items-center gap-4">
                  <div className="size-11 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0"><Printer className="size-5" /></div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Print Design</h4>
                    <p className="text-xs text-zinc-300 mt-0.5">Business cards, brochures, signboards &amp; more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Does Your Business Need Professional Graphic Design? */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">Signs You Need Design Help</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">Does Your Business Need Professional Graphic Design?</h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">You may need professional graphic design if any of the following apply to your business.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Inconsistent Logo', desc: 'Your logo looks inconsistent across different platforms and materials.', icon: Award, color: 'text-orange-600', bg: 'bg-orange-100' },
              { title: 'Unprofessional Social Content', desc: "Your social media designs don't look consistent or professional.", icon: ImageIcon, color: 'text-sky-600', bg: 'bg-sky-100' },
              { title: 'Launching New Products', desc: "You're launching a new product, service, or promotional campaign.", icon: Sparkles, color: 'text-orange-600', bg: 'bg-orange-100' },
              { title: 'New Shop or Branch', desc: "You're opening a new shop or branch and need fresh branding.", icon: Building2, color: 'text-sky-600', bg: 'bg-sky-100' },
              { title: 'Website Needs Graphics', desc: 'Your website needs professional graphics and visual assets.', icon: Globe, color: 'text-orange-600', bg: 'bg-orange-100' },
              { title: 'Weak Brand Recognition', desc: "Your current branding doesn't represent your business quality.", icon: ShieldCheck, color: 'text-sky-600', bg: 'bg-sky-100' },
              { title: 'Festival & Event Promotions', desc: "You're promoting a festival offer, event, or seasonal campaign.", icon: Star, color: 'text-amber-600', bg: 'bg-amber-100' },
              { title: 'Print Materials Needed', desc: 'You need professional print materials for in-store or outdoor use.', icon: Printer, color: 'text-emerald-600', bg: 'bg-emerald-100' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="rounded-3xl border border-orange-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
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

      {/* Section 3: Our Graphic Design Services */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">Complete 9-Part Design System</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">Our Graphic Design Services</h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600">We handle design as one connected system, so every visual element of your brand works together.</p>
          </div>
          <div className="mt-12 space-y-6">
            {[
              { num: '01', title: 'Logo Design', desc: 'We design new logos or redesign existing ones, delivered in the file formats you need for both digital and print use.', items: ['New logo creation', 'Logo redesign', 'Multiple format delivery', 'Digital & print ready files'] },
              { num: '02', title: 'Brand Identity Design', desc: 'We build your complete visual identity with a consistent look and feel across every channel.', items: ['Brand colors', 'Typography selection', 'Visual style guide', 'Brand guidelines document'] },
              { num: '03', title: 'Social Media Design', desc: 'We create graphics built for how people actually use social media — scroll-stopping and on-brand.', items: ['Instagram posts & carousels', 'Facebook creatives', 'WhatsApp status designs', 'Festival & offer creatives'] },
              { num: '04', title: 'Marketing & Promotional Design', desc: 'We design materials for your offline and online marketing campaigns.', items: ['Flyers & pamphlets', 'Posters & banners', 'Offer creatives', 'Event promotional materials'] },
              { num: '05', title: 'Website Graphics', desc: 'We create the visual assets your website needs to look professional and convert visitors.', items: ['Website banners', 'Icons & section graphics', 'Promotional visuals', 'Other website design assets'] },
              { num: '06', title: 'Print Design', desc: 'We prepare print-ready designs for real-world use, ensuring quality at any size.', items: ['Business cards', 'Menus & brochures', 'Signboards', 'Print-ready artwork'] },
              { num: '07', title: 'Packaging Design', desc: "We design packaging that reflects your product's visual identity and stands out.", items: ['Product packaging', 'Labels & boxes', 'Product visual identity', 'Packaging mockups'] },
              { num: '08', title: 'Google Business Profile Graphics', desc: 'We design graphics specifically for your Google Business Profile to keep your branding consistent.', items: ['Business profile photos', 'Promotional graphics', 'Offer visuals', 'Consistent branding across profile'] },
              { num: '09', title: 'Custom Graphic Design', desc: "For requirements that don't fit a standard category, we design custom visuals for events, campaigns, and business-specific materials.", items: ['Event creatives', 'Campaign materials', 'Business-specific designs', 'One-off custom projects'] },
            ].map((part) => (
              <div key={part.num} className="rounded-3xl border border-orange-200/80 bg-white overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-5 bg-[#FFF4ED] p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-orange-200/60">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-black uppercase tracking-wider mb-3">Part {part.num}</span>
                    <h3 className="text-xl font-extrabold text-zinc-900 leading-snug">{part.title}</h3>
                    <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">{part.desc}</p>
                  </div>
                </div>
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center bg-white">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-zinc-400 mb-4">Key Features Included:</p>
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

      {/* Section 4: How Graphic Design Helps */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">Business Impact</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">How Graphic Design Helps Your Business</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Professional First Impression', desc: 'Creates a professional first impression that builds immediate trust.', icon: Star },
              { title: 'Easier Brand Recognition', desc: 'Makes your brand easier to recognize across every channel.', icon: Eye },
              { title: 'Consistent Branding', desc: 'Keeps your branding consistent so customers recognize you everywhere.', icon: ShieldCheck },
              { title: 'Better Social Media Presence', desc: 'Improves how your business looks on social media with professional graphics.', icon: ImageIcon },
              { title: 'Supports Marketing Campaigns', desc: 'Supports your marketing campaigns with purpose-built visuals.', icon: Sparkles },
              { title: 'Easier to Understand Materials', desc: 'Makes promotional material easier for customers to understand.', icon: FileText },
              { title: 'Builds Customer Trust', desc: 'Helps build customer trust through consistent, professional design.', icon: Award },
              { title: 'Unified Visual Identity', desc: 'Your logo, social media, website, and GMB share one consistent look.', icon: Palette },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="rounded-2xl bg-white p-5 border border-orange-200/80 shadow-2xs hover:shadow-xs transition-shadow flex flex-col gap-3">
                  <div className="size-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-extrabold text-zinc-900">{item.title}</h3>
                    <p className="mt-1 text-xs text-zinc-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-8 rounded-2xl bg-white border border-orange-200 p-5 shadow-xs">
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed text-center">
              Your logo, social media graphics, website visuals, and Google Business Profile should use one consistent visual identity. This makes your business easier to recognize, whether a customer finds you on{' '}
              <Link href="/services/gmb-service" className="text-orange-600 font-bold underline">Google Business Profile</Link>,{' '}
              <Link href="/services/social-media-marketing-services" className="text-orange-600 font-bold underline">social media</Link>, or your website.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Design Process */}
      <section className="py-14 sm:py-20 bg-[#FFF5EE]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200 p-6 sm:p-10 shadow-md">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">Structured Design Workflow</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">Our Graphic Design Process</h2>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
              {[
                { step: 'Understand', desc: 'Learn about your business, audience, and design purpose.', icon: Briefcase },
                { step: 'Direction', desc: 'Decide style, colors, format, and design direction.', icon: Target },
                { step: 'Design', desc: 'Create initial design concepts for review.', icon: PenTool },
                { step: 'Feedback', desc: 'Refine design based on your feedback and revisions.', icon: MessageCircle },
                { step: 'Final Design', desc: 'Prepare the approved design in all formats needed.', icon: Award },
                { step: 'Delivery', desc: 'Deliver digital or print-ready files, ready to use.', icon: Package },
              ].map((st, idx) => {
                const Icon = st.icon
                return (
                  <div key={st.step} className="rounded-2xl border border-orange-100 bg-[#FFFBF7] p-3.5 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow">
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[10px] font-black uppercase tracking-wider text-orange-600 bg-orange-100 px-2 py-0.5 rounded">0{idx + 1}</span>
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

      {/* Section 6: Benefits */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">Business Advantages</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">Benefits of Professional Graphic Design</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              'A professional brand image',
              'Consistent visual identity across every channel',
              'Better social media presence',
              'Better marketing materials',
              'Stronger brand recognition',
              'A more professional customer experience',
              'Consistent digital and print branding',
              'Better presentation of your products and services',
            ].map((benefit, i) => (
              <div key={i} className="rounded-2xl bg-white p-5 border border-orange-200/80 shadow-2xs hover:shadow-xs transition-shadow flex items-center gap-3">
                <div className="size-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="size-4" />
                </div>
                <p className="text-xs sm:text-sm font-extrabold text-zinc-900">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Who Can Benefit */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">Target Industries</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">Who Can Benefit From Graphic Design Services?</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-6 gap-4">
            {['Local shops', 'Clinics & doctors', 'Restaurants & cafes', 'Salons', 'Hotels', 'Real estate businesses', 'E-commerce businesses', 'Service businesses', 'Professional businesses', 'Startups', 'Growing local brands', 'Product businesses'].map((who, i) => (
              <div key={i} className="rounded-2xl border border-orange-200/80 bg-white p-4 text-center shadow-2xs hover:shadow-xs transition-shadow flex flex-col items-center justify-center">
                <div className="size-9 rounded-xl bg-orange-50 flex items-center justify-center mb-2">
                  <Building2 className="size-4 text-orange-600" />
                </div>
                <h4 className="text-xs font-extrabold text-zinc-900">{who}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Regional Spotlight + Why Choose Us */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200/80 p-6 sm:p-10 shadow-md">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-wider mb-3">
                <MapPin className="size-3.5" /> Regional Market Focus
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">Graphic Design Services in Ujjain and Indore</h2>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-700 font-medium">We provide graphic design services for businesses in <strong>Ujjain</strong>, including shops, clinics, restaurants, service businesses, and growing local brands.</p>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-700 font-medium">We also create professional graphics for businesses targeting customers in <strong>Indore</strong>, delivering everything from social media creatives and branding to marketing and print materials.</p>
            </div>
            <div className="mt-10 pt-8 border-t border-orange-200">
              <div className="text-center mb-8">
                <h3 className="text-xl font-extrabold text-zinc-900">Why Choose Pragati Ujjayini for Graphic Design?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: 'Business-Focused Designs', desc: 'Business-focused designs, not generic templates that look like everyone else.', color: 'bg-orange-600' },
                  { title: 'Consistent Branding', desc: 'Consistent branding across every channel, digital and print.', color: 'bg-[#0284C7]' },
                  { title: 'Digital & Print Together', desc: 'Both digital and print design under one service for seamless consistency.', color: 'bg-orange-600' },
                  { title: 'Social Creative Support', desc: 'Social media creative support built into your design service.', color: 'bg-[#0284C7]' },
                  { title: 'Local Market Understanding', desc: 'An understanding of the Ujjain and Indore markets and their audiences.', color: 'bg-orange-600' },
                  { title: 'Ongoing Design Support', desc: 'Ongoing design support and a clear feedback and revision process.', color: 'bg-[#0284C7]' },
                ].map((reason, i) => (
                  <div key={i} className="rounded-2xl bg-[#FFFBF7] border border-orange-200/80 p-5 shadow-2xs flex flex-col justify-between">
                    <div>
                      <div className={`size-7 rounded-lg ${reason.color} text-white font-bold text-xs flex items-center justify-center mb-3`}>0{i + 1}</div>
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

      {/* Section 9: Pricing */}
      <section className="py-14 sm:py-20 bg-[#FFF5EC]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white border border-orange-200 p-6 sm:p-10 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">Pricing Factors</span>
                <h3 className="text-xl font-extrabold text-zinc-900">What Affects Graphic Design Pricing?</h3>
                <p className="text-xs text-zinc-600 mt-1 mb-4">Pricing depends on the following factors:</p>
                <ul className="space-y-2.5">
                  {['Type of design', 'Number of deliverables', 'Design complexity', 'Number of revisions', 'Digital vs. print requirements', 'One-time vs. ongoing design support'].map((factor) => (
                    <li key={factor} className="flex items-center gap-2.5 text-xs font-semibold text-zinc-800">
                      <Check className="size-3.5 text-orange-600 stroke-[3]" />
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center">
                <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider mb-3">Get Started</span>
                <h3 className="text-xl font-extrabold text-zinc-900">Ready to Discuss Your Design Needs?</h3>
                <p className="text-xs sm:text-sm text-zinc-600 mt-3 mb-6 leading-relaxed">Get a custom graphic design quote based on your specific requirements.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-600/25 transition-all duration-200 hover:bg-orange-700 hover:scale-[1.02]">
                    <span>Get a Design Quote</span>
                    <ArrowRight className="size-4" />
                  </Link>
                  <a href="https://wa.me/919202668977?text=Hi%20Pragati%20Ujjayini%2C%20I%20want%20to%20discuss%20Graphic%20Design%20Services." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0284C7] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition-all duration-200 hover:bg-sky-700 hover:scale-[1.02]">
                    <MessageCircle className="size-4 fill-white stroke-none" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: FAQs */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">Got Questions?</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">Frequently Asked Questions</h2>
            <p className="mt-2 text-sm text-zinc-600">Everything you need to know about our graphic design services.</p>
          </div>
          <GraphicDesignFaqAccordion />
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-zinc-950 via-zinc-900 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Ready to Give Your Brand a Professional Look?</h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto font-normal">
            If your branding feels inconsistent or your business does not look as professional as it should online and offline, let&apos;s fix that. Contact Pragati Ujjayini for a custom graphic design quote for your business in Ujjain or Indore.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-sm font-extrabold text-white shadow-xl hover:bg-orange-700 hover:scale-[1.02] transition-all">
              <span>Get Your Custom Design Quote</span>
              <ArrowRight className="size-4.5" />
            </Link>
            <a href="https://wa.me/919202668977?text=Hi%20Pragati%20Ujjayini%2C%20I%20want%20a%20graphic%20design%20quote%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0284C7] px-8 py-4 text-sm font-extrabold text-white shadow-xl hover:bg-sky-700 hover:scale-[1.02] transition-all">
              <MessageCircle className="size-4.5 fill-white stroke-none" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
