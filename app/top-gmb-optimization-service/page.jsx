import Script from "next/script";
import { MessageCircle, CheckCircle, MapPin, Search, Star, ArrowRight, PhoneCall } from "lucide-react";
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
        desc: "We connect your Google Business Profile to your wider local SEO. This includes local citations and keyword tracking in the map pack (the local search results box on Google).",
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

const targetAudiences = [
    {
        title: "Local Service Businesses",
        desc: "Clinics, salons, repair shops, and field services looking to capture nearby local intent.",
    },
    {
        title: "Restaurants & Hospitality",
        desc: "Businesses where high-quality photos, updated hours, and customer reviews drive decisions.",
    },
    {
        title: "Retail Shops",
        desc: "Physical store locations competing directly for nearby footfall and localized buyer searches.",
    },
    {
        title: "Multi-Location Brands",
        desc: "Businesses operating multiple branches that require centralized profile management and consistency.",
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

            <div className="bg-slate-50 text-slate-800 min-h-screen">
                {/* Black Hero Section */}
                <header className="bg-slate-100 text-slate-900 py-16 md:py-24 px-6 border-b border-slate-200 relative overflow-hidden">
                    {/* Subtle Orange Glow Accent */}
                    <div className="absolute top-0 right-0 size-96 bg-brand-orange/15 blur-3xl rounded-full pointer-events-none" />

                    <div className="max-w-5xl mx-auto space-y-6 relative z-10">
                        <span className="inline-block bg-brand-orange/10 text-brand-orange border border-brand-orange/30 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                            Google Business Profile & Map Ranking
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
                            Rank #1 on Google Maps: Top{" "}
                            <span className="text-brand-orange">GMB Optimization Service</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-700 max-w-3xl leading-relaxed">
                            We help local businesses get found on Google Search and Google Maps. Our GMB optimization service fixes your Google Business Profile, keeps it active, and helps more local customers find and call you.
                        </p>
                        <p className="text-slate-600 max-w-3xl leading-relaxed">
                            If your shop, clinic, or restaurant is not showing up when people search nearby, your profile needs work. That's what we do.
                        </p>
                        <div className="pt-4 flex flex-wrap gap-4">
                            <Button
                                nativeButton={false}
                                render={<a href="/contact" />}
                                className="h-11 rounded-full bg-brand-orange px-6 text-sm font-semibold text-brand-orange-foreground hover:bg-brand-orange/90 shadow-md shadow-brand-orange/20"
                            >
                                Get a Free Profile Audit →
                            </Button>
                            <Button
                                nativeButton={false}
                                render={<a href="https://wa.me/919202668977" target="_blank" rel="noopener noreferrer" />}
                                className="h-11 rounded-full border border-slate-300 bg-white text-slate-800 px-6 text-sm font-semibold hover:bg-slate-50 shadow-sm"
                            >
                                <MessageCircle className="mr-2 h-4 w-4 text-emerald-600" /> Quick WhatsApp Inquiry
                            </Button>
                        </div>
                    </div>
                </header>

                <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
                    {/* Definition Section */}
                    <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200/80 space-y-4">
                        <h2 className="text-2xl font-bold text-brand-navy">
                            What Is a GMB Optimization Service?
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            A GMB optimization service is the process of improving your Google Business Profile so it shows up correctly in Google Search and Google Maps.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            We check your business details, fix errors, add the right categories, and keep your profile active with posts, photos, and reviews. This is part of local SEO, and it works closely with your website and Google listings.
                        </p>
                        <div className="pt-2 text-sm text-slate-500">
                            <strong>Related terms:</strong> Google Business Profile optimization, Google My Business optimization, GMB management service, Google Maps optimization service.
                        </div>
                    </section>

                    {/* Why Your Business Needs This Service */}
                    <section className="space-y-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
                                Why Your Business Needs This Service
                            </h2>
                            <p className="text-slate-600 mt-2 leading-relaxed">
                                Just having a Google Business Profile is not enough. Google looks at many key signals before showing your business to nearby customers:
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2 border-t-4 border-t-brand-orange">
                                <h3 className="font-bold text-brand-navy text-lg">Accurate Category & Details</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Your primary categories and specific operational details must be exact so Google maps your profile to relevant intent.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2 border-t-4 border-t-brand-orange">
                                <h3 className="font-bold text-brand-navy text-lg">Regular Photos & Updates</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Your profile needs fresh visual media and weekly post updates to demonstrate active business operations.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2 border-t-4 border-t-brand-orange">
                                <h3 className="font-bold text-brand-navy text-lg">Real, Recent Reviews</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Continuous incoming authentic reviews accompanied by prompt owner responses build trust and ranking strength.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2 border-t-4 border-t-brand-orange">
                                <h3 className="font-bold text-brand-navy text-lg">NAP Consistency</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Your Name, Address, and Phone number (NAP) must match identically across all local search directories and website pages.
                                </p>
                            </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            If any of these are missing or outdated, competitors in Ujjain or Indore will rank above you. This directly affects your Google Maps ranking and local search visibility.
                        </p>
                    </section>

                    {/* What Our Service Includes */}
                    <section className="space-y-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
                                What Our GMB Optimization Service Includes
                            </h2>
                            <p className="text-slate-600 mt-2">
                                We break your profile work into five structured parts:
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            {serviceInclusions.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3"
                                >
                                    <h3 className="text-xl font-bold text-brand-navy">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 pt-2">
                                        {item.bullets.map((b, bIdx) => (
                                            <li key={bIdx} className="flex items-center gap-2">
                                                <span className="text-brand-orange font-bold">•</span>
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Working Process */}
                    <section className="space-y-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
                                How Our Process Works
                            </h2>
                            <p className="text-slate-600 mt-2">
                                We follow a clear, repeatable process since Google Business Profile optimization is ongoing work, not a one-time task.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {processSteps.map((step, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2"
                                >
                                    <h3 className="text-lg font-bold text-brand-navy">{step.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Benefits Section */}
                    <section className="bg-brand-navy text-brand-navy-foreground p-8 rounded-2xl space-y-6">
                        <h2 className="text-2xl font-bold">
                            Benefits of GMB Optimization
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-brand-navy-foreground/80 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="text-brand-orange font-bold">•</span>
                                <span>More visibility on Google Search and Google Maps</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-orange font-bold">•</span>
                                <span>More calls and direction requests from local customers</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-orange font-bold">•</span>
                                <span>A stronger, more trustworthy review profile</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-brand-orange font-bold">•</span>
                                <span>Better rankings in the local map pack</span>
                            </li>
                            <li className="flex items-start gap-3 md:col-span-2">
                                <span className="text-brand-orange font-bold">•</span>
                                <span>One consistent business identity across the internet</span>
                            </li>
                        </ul>
                    </section>

                    {/* Who We Help */}
                    <section className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
                            Who We Help
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {targetAudiences.map((aud, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2"
                                >
                                    <h3 className="text-lg font-bold text-brand-navy">{aud.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{aud.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Regional Service Areas: Ujjain & Indore */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                            <h3 className="text-xl font-bold text-brand-navy">
                                GMB Optimization Service in Ujjain
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                We provide GMB optimization services for local businesses in Ujjain. We understand how customers in Ujjain search for services, and we build your profile to match that.
                            </p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                If your Ujjain business isn't showing up for local searches, we can audit your profile and show you exactly what's missing.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                            <h3 className="text-xl font-bold text-brand-navy">
                                GMB Optimization Service in Indore
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                We also help businesses in Indore improve their Google Business Profile and local search presence. Whether you run one location or manage a branch alongside another city, we keep your profile active and accurate.
                            </p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Our team manages listings for Indore businesses across clinics, restaurants, retail, and service industries.
                            </p>
                        </div>
                    </section>

                    {/* Why Choose Us & Results Expectations */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                            <h3 className="text-xl font-bold text-brand-navy">
                                Why Choose Pragati Ujjayini
                            </h3>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-brand-orange font-bold">•</span>
                                    <span>Focus on local businesses in Ujjain and Indore, not generic national strategies</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-brand-orange font-bold">•</span>
                                    <span>Clear process explained in plain language, month by month</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-brand-orange font-bold">•</span>
                                    <span>Access to real performance reporting, not just summary emails</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-brand-orange font-bold">•</span>
                                    <span>Flexible plans instead of long, locked-in contracts</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                            <h3 className="text-xl font-bold text-brand-navy">
                                What Results You Can Expect
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                We don't promise fixed numbers or guaranteed rankings—no honest agency can since Google's system updates continuously.
                            </p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                With consistent GMB optimization, expect gradual increases in profile views, searches, direction requests, website clicks, and a stronger review profile. These changes typically build up over the first 30 to 60 days.
                            </p>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2"
                                >
                                    <h3 className="font-bold text-brand-navy text-lg">{faq.q}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Bottom CTA Banner */}
                    <section id="contact" className="mx-auto max-w-6xl py-4">
                        <div className="rounded-3xl bg-brand-navy px-6 py-14 text-center text-white sm:px-12 shadow-xl">
                            <h2 className="mx-auto max-w-2xl text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
                                Ready to Scale Your{" "}
                                <span className="text-brand-orange">Local Business?</span>
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-slate-200">
                                Join 500+ local businesses that have already transformed their trade into a modern digital brand.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-3">
                                <Button
                                    nativeButton={false}
                                    render={<a href="/contact" />}
                                    className="h-11 rounded-full bg-brand-orange px-6 text-sm font-semibold text-brand-orange-foreground [a]:hover:bg-brand-orange/90 shadow-md"
                                >
                                    Book Free Consultation
                                </Button>

                                <Button
                                    nativeButton={false}
                                    render={<a href="/contact" />}
                                    className="h-11 rounded-full border border-white/20 bg-transparent px-6 text-sm font-semibold text-white [a]:hover:bg-white/10"
                                >
                                    <MessageCircle className="size-4" />
                                    WhatsApp Us
                                </Button>
                            </div>

                            <div className="bg-white/10 p-6 rounded-2xl max-w-lg mx-auto text-sm text-slate-200 space-y-1 border border-white/10 mt-8">
                                <p className="font-semibold text-white">Pragati Ujjayini</p>
                                <p>
                                    Address: C - 1/2 1st Floor, Mahakal Vanijya Kendra, Nanakheda, Ujjain, MP 456010
                                </p>
                                <p className="text-brand-orange font-bold">Phone: +91-9202668977</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}