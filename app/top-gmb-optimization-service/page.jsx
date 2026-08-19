import Script from "next/script";
import {
    MessageCircle,
    Check,
    MapPin,
    Search,
    Star,
    Eye,
    Phone,
    CheckCircle2,
    TrendingUp,
    Briefcase,
    Activity,
    Utensils,
    ShoppingBag,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "GMB Optimization Service: Get More Daily Local Calls | Pragati Ujjayini",
    description:
        "Boost your local ranking on Google Maps with our GMB optimization service. Get more profile views, customer calls, and walk-ins. Optimize your GBP now!",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://www.pragatiujjayini.com/#organization",
            name: "Pragati Ujjayini",
            url: "https://www.pragatiujjayini.com/",
            telephone: "+91-9202668977",
        },
        {
            "@type": "LocalBusiness",
            "@id": "https://www.pragatiujjayini.com/#localbusiness",
            name: "Pragati Ujjayini",
            url: "https://www.pragatiujjayini.com/",
            telephone: "+91-9202668977",
            hasMap: "https://share.google/SzXbnqNJrloZKwy7e",
            sameAs: ["https://share.google/SzXbnqNJrloZKwy7e"],
            address: {
                "@type": "PostalAddress",
                streetAddress:
                    "C - 1/2 1st Floor, Mahakal Vanijya Kendra, Nanakheda",
                addressLocality: "Ujjain",
                addressRegion: "Madhya Pradesh",
                postalCode: "456010",
                addressCountry: "IN",
            },
            areaServed: [
                { "@type": "City", name: "Ujjain" },
                { "@type": "City", name: "Indore" },
            ],
            parentOrganization: {
                "@id": "https://www.pragatiujjayini.com/#organization",
            },
        },
        {
            "@type": "WebSite",
            "@id": "https://www.pragatiujjayini.com/#website",
            url: "https://www.pragatiujjayini.com/",
            name: "Pragati Ujjayini",
            publisher: {
                "@id": "https://www.pragatiujjayini.com/#organization",
            },
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pragatiujjayini.com/gmb-optimization-service/",
            url: "https://www.pragatiujjayini.com/gmb-optimization-service/",
            name: "GMB Optimization Service: Get More Daily Local Calls | Pragati Ujjayini",
            description:
                "Boost your local ranking on Google Maps with our GMB optimization service. Get more profile views, customer calls, and walk-ins. Optimize your GBP now!",
            isPartOf: {
                "@id": "https://www.pragatiujjayini.com/#website",
            },
            about: {
                "@id": "https://www.pragatiujjayini.com/#localbusiness",
            },
            breadcrumb: {
                "@id":
                    "https://www.pragatiujjayini.com/gmb-optimization-service/#breadcrumb",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id":
                "https://www.pragatiujjayini.com/gmb-optimization-service/#breadcrumb",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.pragatiujjayini.com/",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: "https://www.pragatiujjayini.com/services/",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "GMB Optimization Service",
                    item:
                        "https://www.pragatiujjayini.com/gmb-optimization-service/",
                },
            ],
        },
        {
            "@type": "Service",
            "@id":
                "https://www.pragatiujjayini.com/gmb-optimization-service/#service",
            name: "GMB Optimization Service",
            serviceType: "Google Business Profile Optimization",
            provider: {
                "@id": "https://www.pragatiujjayini.com/#localbusiness",
            },
            areaServed: [
                { "@type": "City", name: "Ujjain" },
                { "@type": "City", name: "Indore" },
            ],
        },
        {
            "@type": "FAQPage",
            "@id":
                "https://www.pragatiujjayini.com/gmb-optimization-service/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is GMB optimization?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "GMB optimization means improving your Google Business Profile so it shows up correctly and ranks better in Google Search and Google Maps.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How is GMB optimization different from local SEO?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "GMB optimization is one part of local SEO. Local SEO also includes your website, citations, and backlinks. We offer GMB optimization on its own or as part of a full local SEO plan.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do you provide this service in Ujjain?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. We manage Google Business Profiles for businesses across Ujjain.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do you provide this service in Indore?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. We also work with businesses in Indore, including those managing more than one location.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How long does GMB optimization take to show results?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most businesses see movement in profile views and rankings within 30 to 60 days. This depends on your starting profile and local competition.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What happens if my profile gets suspended?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "We diagnose the cause, usually a guideline or verification issue, and help you through the reinstatement process.",
                    },
                },
            ],
        },
    ],
};

const serviceInclusions = [
    {
        title: "1. Profile Audit & Business Information",
        desc: "We check your business name, address, and phone number for consistency across the internet. We also fix your business categories and rewrite your business description in simple, relevant language.",
        bullets: [
            "NAP consistency check",
            "Category correction",
            "Business description rewrite",
            "Duplicate or suspended listing check",
            "Competitor profile comparison",
        ],
    },
    {
        title: "2. Photos & Business Details",
        desc: "We add and update photos of your shop, team, and work. We also keep your business hours, service areas, and attributes correct and current.",
        bullets: [
            "Regular photo and video uploads",
            "Business hours and service area updates",
            "Business attributes setup",
        ],
    },
    {
        title: "3. Google Posts & Content Updates",
        desc: "We post regular updates about your offers, services, and news. This keeps your profile active, which Google rewards with better visibility.",
        bullets: [
            "Weekly or monthly Google Posts",
            "Offer and update announcements",
            "Seasonal post planning",
        ],
    },
    {
        title: "4. Google Reviews & Reputation Management",
        desc: "We help you get more genuine reviews and reply to every review, good or bad. We also answer questions in your profile's Q&A section.",
        bullets: [
            "Review generation support",
            "Timely review replies",
            "Q&A monitoring and answers",
        ],
    },
    {
        title: "5. Local SEO & Visibility Support",
        desc: "We connect your Google Business Profile to your wider local SEO. This includes local citations and keyword tracking in the map pack.",
        bullets: [
            "Local citation building and cleanup",
            "Local keyword tracking",
            "Website and profile alignment",
        ],
    },
];

const processSteps = [
    {
        title: "1. Audit",
        desc: "We review your current Google Business Profile and find what's missing or wrong.",
    },
    {
        title: "2. Fix",
        desc: "We correct your business information, categories, and description.",
    },
    {
        title: "3. Set Up",
        desc: "We add photos, posts, attributes, and business hours.",
    },
    {
        title: "4. Build",
        desc: "We work on reviews, Q&A, and local citations.",
    },
    {
        title: "5. Monitor",
        desc: "We track your rankings and profile activity, adjusting the plan as needed.",
    },
];

const faqs = [
    {
        q: "What is GMB optimization?",
        a: "GMB optimization means improving your Google Business Profile so it shows up correctly and ranks better in Google Search and Google Maps.",
    },
    {
        q: "How is GMB optimization different from local SEO?",
        a: "GMB optimization is one part of local SEO. Local SEO also includes your website, citations, and backlinks. We offer GMB optimization on its own or as part of a full local SEO plan.",
    },
    {
        q: "Do you provide this service in Ujjain?",
        a: "Yes. We manage Google Business Profiles for businesses across Ujjain.",
    },
    {
        q: "Do you provide this service in Indore?",
        a: "Yes. We also work with businesses in Indore, including those managing more than one location.",
    },
    {
        q: "How long does GMB optimization take to show results?",
        a: "Most businesses see movement in profile views and rankings within 30 to 60 days. This depends on your starting profile and local competition.",
    },
    {
        q: "What happens if my profile gets suspended?",
        a: "We diagnose the cause, usually a guideline or verification issue, and help you through the reinstatement process.",
    },
];

export default function GMBOptimizationPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="bg-[#FAF6F0] text-slate-800 min-h-screen font-sans selection:bg-orange-200">

                {/* HERO SECTION */}
                <header className="pt-12 pb-16 md:py-20 px-6 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Left Content */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-block bg-[#FEF0E6] text-[#D9531E] border border-orange-200/60 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-md">
                                GMB SERVICE • UJJAIN & INDORE
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
                                Rank <span className="text-[#D9531E]">#1 on Google Maps:</span> Top GMB Optimization Service
                            </h1>

                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                                We help local businesses get found on Google Search and Google Maps. Our GMB service fixes your Google Business Profile, keeps it active, and helps more local customers find and call you.
                            </p>

                            <p className="text-slate-600 leading-relaxed font-normal">
                                If your shop, clinic, or restaurant is not showing up when people search nearby, your profile needs work. That's what we do.
                            </p>

                            <div className="pt-2 flex flex-wrap gap-4 items-center">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center h-12 px-7 rounded-lg bg-[#D9531E] text-white font-semibold text-sm hover:bg-[#c44718] transition-colors shadow-sm"
                                >
                                    Get a Free GMB Audit
                                </a>
                                <a
                                    href="#includes"
                                    className="inline-flex items-center justify-center h-12 px-7 rounded-lg border border-slate-900 text-slate-900 bg-transparent font-semibold text-sm hover:bg-slate-900/5 transition-colors"
                                >
                                    See What's Included
                                </a>
                            </div>

                            {/* Trust Indicators */}
                            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600">
                                <span className="flex items-center gap-1.5">
                                    <Check className="size-4 text-[#D9531E]" /> 500+ Businesses Helped
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Check className="size-4 text-[#D9531E]" /> 10+ Cities Served
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Check className="size-4 text-[#D9531E]" /> Trusted Since 2021
                                </span>
                            </div>
                        </div>

                        {/* Right Interactive Mockup Card */}
                        <div className="lg:col-span-5 relative">
                            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl p-5 sm:p-6 relative">
                                {/* #1 Badge */}
                                <div className="absolute -top-3 -right-3 bg-[#0F172A] text-white font-extrabold text-lg px-3 py-1 rounded-md shadow-md">
                                    #1
                                </div>

                                {/* Mock Search Bar */}
                                <div className="bg-[#FAF6F0] rounded-lg px-4 py-3 flex items-center gap-3 border border-orange-100 mb-5">
                                    <Search className="size-4 text-slate-400" />
                                    <span className="text-xs sm:text-sm text-slate-700 font-medium truncate">
                                        "gmb optimization near me" — Ujjain
                                    </span>
                                </div>

                                {/* Listing Items */}
                                <div className="space-y-3">
                                    {/* Item A - Highlighted */}
                                    <div className="bg-[#FFF5EE] border border-orange-200/80 rounded-xl p-4 flex items-start gap-3 shadow-xs">
                                        <div className="size-8 rounded-lg bg-[#D9531E] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                                            A
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-slate-900 text-base leading-tight">Your Business</h4>
                                            <div className="flex items-center gap-1 text-xs">
                                                <div className="flex text-amber-500">
                                                    {"★".repeat(5)}
                                                </div>
                                                <span className="font-semibold text-slate-800">4.9</span>
                                                <span className="text-slate-500">(210)</span>
                                            </div>
                                            <p className="text-xs text-slate-500">Open · 1.2 km · Mahakal Road</p>
                                        </div>
                                    </div>

                                    {/* Item B */}
                                    <div className="bg-white border border-slate-100 rounded-xl p-4 flex items-start gap-3">
                                        <div className="size-8 rounded-lg bg-slate-200 text-slate-600 font-bold flex items-center justify-center shrink-0 text-sm">
                                            B
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-semibold text-slate-700 text-base leading-tight">Competitor Clinic</h4>
                                            <div className="flex items-center gap-1 text-xs">
                                                <div className="flex text-amber-400">
                                                    {"★".repeat(3)}<span className="text-slate-300">★★</span>
                                                </div>
                                                <span className="font-semibold text-slate-700">3.8</span>
                                                <span className="text-slate-400">(64)</span>
                                            </div>
                                            <p className="text-xs text-slate-400">Open · 2.4 km</p>
                                        </div>
                                    </div>

                                    {/* Item C */}
                                    <div className="bg-white border border-slate-100 rounded-xl p-4 flex items-start gap-3">
                                        <div className="size-8 rounded-lg bg-slate-200 text-slate-600 font-bold flex items-center justify-center shrink-0 text-sm">
                                            C
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-semibold text-slate-700 text-base leading-tight">Another Local Shop</h4>
                                            <div className="flex items-center gap-1 text-xs">
                                                <div className="flex text-amber-400">
                                                    {"★".repeat(3)}<span className="text-slate-300">★★</span>
                                                </div>
                                                <span className="font-semibold text-slate-700">3.2</span>
                                                <span className="text-slate-400">(31)</span>
                                            </div>
                                            <p className="text-xs text-slate-400">Open · 3.1 km</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </header>

                {/* SECTION 1: WHAT IS GMB OPTIMIZATION */}
                <section className="max-w-7xl mx-auto px-6 py-8">
                    <div className="bg-white p-8 rounded-2xl border border-slate-200/70 shadow-xs space-y-4">
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            What Is a GMB Optimization Service?
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            A GMB optimization service is the process of improving your Google Business Profile so it shows up correctly in Google Search and Google Maps.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            We check your business details, fix errors, add the right categories, and keep your profile active with posts, photos, and reviews. This is part of local SEO, and it works closely with your website and Google listings.
                        </p>
                        <div className="pt-2 text-xs text-slate-500 border-t border-slate-100 mt-4">
                            <strong className="text-slate-700">Related terms:</strong> Google Business Profile optimization, Google My Business optimization, GMB management service, Google Maps optimization service.
                        </div>
                    </div>
                </section>

                {/* SECTION 2: BENEFITS OF GMB OPTIMIZATION */}
                <section className="max-w-7xl mx-auto px-6 py-12">
                    <div className="space-y-6">
                        <div>
                            <span className="inline-block bg-[#FEF0E6] text-[#D9531E] border border-orange-200/60 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-2">
                                BENEFITS
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                                Benefits of GMB Optimization
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs divide-y md:divide-y-0 md:divide-x border-slate-200">
                            {/* Row 1 */}
                            <div className="p-6 space-y-2 border-b border-slate-200">
                                <Eye className="size-5 text-[#D9531E]" />
                                <h3 className="font-bold text-slate-900 text-base">More Visibility</h3>
                                <p className="text-xs text-slate-500">On Google Search and Google Maps</p>
                            </div>

                            <div className="p-6 space-y-2 border-b border-slate-200">
                                <Phone className="size-5 text-[#D9531E]" />
                                <h3 className="font-bold text-slate-900 text-base">More Calls</h3>
                                <p className="text-xs text-slate-500">And direction requests from local customers</p>
                            </div>

                            <div className="p-6 space-y-2 border-b border-slate-200">
                                <CheckCircle2 className="size-5 text-[#D9531E]" />
                                <h3 className="font-bold text-slate-900 text-base">Stronger Reviews</h3>
                                <p className="text-xs text-slate-500">A more trustworthy review profile</p>
                            </div>

                            {/* Row 2 */}
                            <div className="p-6 space-y-2">
                                <TrendingUp className="size-5 text-[#D9531E]" />
                                <h3 className="font-bold text-slate-900 text-base">Better Rankings</h3>
                                <p className="text-xs text-slate-500">In the local map pack</p>
                            </div>

                            <div className="p-6 space-y-2">
                                <Briefcase className="size-5 text-[#D9531E]" />
                                <h3 className="font-bold text-slate-900 text-base">One Identity</h3>
                                <p className="text-xs text-slate-500">Consistent business identity across the internet</p>
                            </div>

                            {/* Empty visual tile accent */}
                            <div className="hidden md:block bg-[#EFECE6]/50 p-6"></div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: WHAT OUR SERVICE INCLUDES */}
                <section id="includes" className="max-w-7xl mx-auto px-6 py-12">
                    <div className="space-y-6">
                        <div>
                            <span className="inline-block bg-[#FEF0E6] text-[#D9531E] border border-orange-200/60 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-2">
                                OUR SERVICES
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                                What Our GMB Optimization Service Includes
                            </h2>
                            <p className="text-slate-600 mt-1">
                                We break your profile work into five structured parts:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-5">
                            {serviceInclusions.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3"
                                >
                                    <h3 className="text-lg font-bold text-[#0F172A]">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700 pt-1">
                                        {item.bullets.map((b, bIdx) => (
                                            <li key={bIdx} className="flex items-center gap-2">
                                                <span className="size-1.5 rounded-full bg-[#D9531E]"></span>
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 4: HOW OUR PROCESS WORKS */}
                <section className="max-w-7xl mx-auto px-6 py-12">
                    <div className="space-y-6">
                        <div>
                            <span className="inline-block bg-[#FEF0E6] text-[#D9531E] border border-orange-200/60 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-2">
                                OUR PROCESS
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                                How Our Process Works
                            </h2>
                            <p className="text-slate-600 mt-1">
                                We follow a clear, repeatable process since Google Business Profile optimization is ongoing work.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            {processSteps.map((step, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2"
                                >
                                    <h3 className="text-base font-bold text-[#0F172A]">{step.title}</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 5: WHO WE HELP / WORKS WELL FOR */}
                <section className="max-w-7xl mx-auto px-6 py-12">
                    <div className="space-y-6">
                        <div>
                            <span className="inline-block bg-[#FEF0E6] text-[#D9531E] border border-orange-200/60 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-2">
                                WHO WE HELP
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                                Our GMB Optimization Service Works Well For
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                            <div className="p-6 text-center space-y-2">
                                <Activity className="size-6 text-[#D9531E] mx-auto" />
                                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Local Service Businesses</h3>
                                <p className="text-xs text-slate-500">Clinics, salons, and repair shops</p>
                            </div>

                            <div className="p-6 text-center space-y-2">
                                <Utensils className="size-6 text-[#D9531E] mx-auto" />
                                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Restaurants & Hospitality</h3>
                                <p className="text-xs text-slate-500">Where photos and reviews matter most</p>
                            </div>

                            <div className="p-6 text-center space-y-2">
                                <ShoppingBag className="size-6 text-[#D9531E] mx-auto" />
                                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Retail Shops</h3>
                                <p className="text-xs text-slate-500">Competing for local customers</p>
                            </div>

                            <div className="p-6 text-center space-y-2">
                                <MapPin className="size-6 text-[#D9531E] mx-auto" />
                                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Multi-Location Businesses</h3>
                                <p className="text-xs text-slate-500">Needing profiles managed together</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 6: CITY-SPECIFIC STRATEGY & THE PRAGATI EDGE */}
                <section className="max-w-7xl mx-auto px-6 py-12 space-y-12">

                    {/* City Specific */}
                    <div className="space-y-6">
                        <div>
                            <span className="inline-block bg-[#FEF0E6] text-[#D9531E] border border-orange-200/60 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-2">
                                CITY-SPECIFIC STRATEGY
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                                GMB Optimization Service in Ujjain and Indore
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Ujjain */}
                            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                                <span className="inline-block bg-[#FEF0E6] text-[#D9531E] text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded">
                                    UJJAIN
                                </span>
                                <h3 className="text-xl font-bold text-[#0F172A]">
                                    GMB Optimization for Businesses in Ujjain
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    We provide GMB optimization services to help local businesses in Ujjain build profiles that match how customers search, complete with full audits to fix what is missing.
                                </p>
                            </div>

                            {/* Indore */}
                            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                                <span className="inline-block bg-[#FEF0E6] text-[#D9531E] text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded">
                                    INDORE
                                </span>
                                <h3 className="text-xl font-bold text-[#0F172A]">
                                    GMB Optimization for Businesses in Indore
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    We also help businesses in Indore improve their Google Business Profile and local presence, keeping listings active and accurate across clinics, restaurants, retail, and service industries.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Pragati Edge */}
                    <div className="space-y-6 pt-4">
                        <div>
                            <span className="inline-block bg-[#FEF0E6] text-[#D9531E] border border-orange-200/60 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-2">
                                THE PRAGATI EDGE
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                                Why Choose Pragati Ujjayini
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm font-medium text-slate-700">
                            <div className="flex items-start gap-2.5">
                                <Check className="size-5 text-[#D9531E] shrink-0 mt-0.5" />
                                <span>We focus on local businesses in Ujjain and Indore, not generic national strategies</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <Check className="size-5 text-[#D9531E] shrink-0 mt-0.5" />
                                <span>We explain our process in plain language, month by month</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <Check className="size-5 text-[#D9531E] shrink-0 mt-0.5" />
                                <span>We give you access to real reporting, not just summary emails</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <Check className="size-5 text-[#D9531E] shrink-0 mt-0.5" />
                                <span>We offer flexible plans instead of long, locked-in contracts</span>
                            </div>
                        </div>
                    </div>

                </section>

                {/* SECTION 7: HONEST EXPECTATIONS */}
                <section className="max-w-7xl mx-auto px-6 py-12">
                    <div className="space-y-6">
                        <div>
                            <span className="inline-block bg-[#FEF0E6] text-[#D9531E] border border-orange-200/60 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-2">
                                HONEST EXPECTATIONS
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                                What Results You Can Expect
                            </h2>
                        </div>

                        <div className="bg-[#FAF6F0] p-6 sm:p-8 rounded-2xl border border-orange-200/70 space-y-6">
                            <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/60 text-slate-600 text-sm leading-relaxed">
                                We don't promise fixed numbers or guaranteed rankings. No honest agency can, since Google's system keeps changing.
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-bold text-[#0F172A] text-base">
                                    What you can expect with consistent GMB optimization:
                                </h3>

                                <div className="space-y-3 text-sm text-slate-700 font-medium">
                                    <div className="flex items-center gap-2.5">
                                        <Check className="size-4 text-[#D9531E]" />
                                        <span>Gradual increase in profile views and searches</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <Check className="size-4 text-[#D9531E]" />
                                        <span>More website clicks and direction requests</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <Check className="size-4 text-[#D9531E]" />
                                        <span>Better visibility in the local map pack over time</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <Check className="size-4 text-[#D9531E]" />
                                        <span>A stronger review profile that builds trust</span>
                                    </div>
                                </div>

                                <p className="text-xs text-slate-500 pt-2">
                                    These changes usually build up over the first 30 to 60 days and continue as your profile stays active.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 8: FAQ */}
                <section className="max-w-7xl mx-auto px-6 py-12">
                    <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                            Frequently Asked Questions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {faqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2"
                                >
                                    <h3 className="font-bold text-[#0F172A] text-base">{faq.q}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* BOTTOM CTA BANNER */}
                <section id="contact" className="max-w-7xl mx-auto px-6 py-12">
                    <div className="rounded-3xl bg-[#0F172A] px-6 py-12 text-center text-white sm:px-12 shadow-xl space-y-6">
                        <h2 className="text-2xl sm:text-4xl font-extrabold max-w-2xl mx-auto leading-tight">
                            Ready to Get More Local Calls from Google Maps?
                        </h2>
                        <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                            Let us audit your Google Business Profile and create an actionable optimization plan tailored to your business in Ujjain or Indore.
                        </p>
                        <div className="pt-2 flex flex-wrap justify-center gap-4">
                            <a
                                href="https://wa.me/919202668977"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center h-12 px-7 rounded-lg bg-[#D9531E] text-white font-semibold text-sm hover:bg-[#c44718] transition-colors"
                            >
                                <MessageCircle className="mr-2 size-4" /> WhatsApp Us Now
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center h-12 px-7 rounded-lg border border-slate-700 text-white bg-slate-800/80 font-semibold text-sm hover:bg-slate-800 transition-colors"
                            >
                                Get a Free Audit →
                            </a>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}