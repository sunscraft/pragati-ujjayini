import Script from "next/script";
import { MessageCircle, ArrowRight, CheckCircle2, BarChart2, Rocket, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Digital Marketing Agency in Ujjain | Pragati Ujjayini",
    description:
        "Looking for a digital marketing agency in Ujjain? Pragati Ujjayini offers SEO, Google Ads, Social Media and Web Design with proven local results. Get a free quote.",
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
            "@id": "https://www.pragatiujjayini.com/ujjain-digital-marketing/",
            url: "https://www.pragatiujjayini.com/ujjain-digital-marketing/",
            name: "Digital Marketing Agency in Ujjain | Pragati Ujjayini",
            description:
                "Pragati Ujjayini provides digital marketing services in Ujjain including SEO, Local SEO, Google Ads, social media marketing, website designing and content marketing.",
            isPartOf: {
                "@id": "https://www.pragatiujjayini.com/#website",
            },
            about: {
                "@id": "https://www.pragatiujjayini.com/#localbusiness",
            },
            breadcrumb: {
                "@id":
                    "https://www.pragatiujjayini.com/ujjain-digital-marketing/#breadcrumb",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id":
                "https://www.pragatiujjayini.com/ujjain-digital-marketing/#breadcrumb",
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
                    name: "Digital Marketing Agency Near Me",
                    item:
                        "https://www.pragatiujjayini.com/digital-marketing-agency-near-me/",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Digital Marketing Agency in Ujjain",
                    item: "https://www.pragatiujjayini.com/ujjain-digital-marketing/",
                },
            ],
        },
        {
            "@type": "Service",
            "@id":
                "https://www.pragatiujjayini.com/ujjain-digital-marketing/#service",
            name: "Digital Marketing Agency in Ujjain",
            serviceType: "Digital Marketing Services",
            provider: {
                "@id": "https://www.pragatiujjayini.com/#localbusiness",
            },
            areaServed: {
                "@type": "City",
                name: "Ujjain",
            },
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.pragatiujjayini.com/ujjain-digital-marketing/#faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Which is the best digital marketing agency in Ujjain?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The right agency depends on your specific goals and budget, but look for one with a clear process, transparent pricing, and reporting tied to your actual business metrics rather than only activity. Pragati Ujjayini offers a free consultation to review your current online presence before recommending a starting point.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How much does a digital marketing agency in Ujjain charge?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Cost depends on which services you need and how competitive your industry is within Ujjain. Pragati Ujjayini uses tiered packages so pricing is clear before you commit, with details available on request during a free consultation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do you serve businesses outside Ujjain city limits?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Pragati Ujjayini works with businesses based in Ujjain as well as businesses in nearby areas and other cities including Indore, with campaigns adjusted to fit each specific market.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How long does it take to see results?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Google Ads can generate inquiries within days of launch. SEO, local SEO, and content marketing typically take a few months to show measurable movement in rankings and organic traffic, since these depend on search engines reevaluating your site over time.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I hire this agency for just one service instead of a full package?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Each service listed on this page can be hired individually or combined into a broader plan depending on your goals and budget.",
                    },
                },
            ],
        },
    ],
};

const processSteps = [
    {
        num: "01",
        title: "Consultation & Audit",
        desc: "Free consultation and audit of your current website, search visibility, and any existing ad accounts.",
        icon: Target,
        cardBg: "bg-white border-brand-navy/20 hover:border-brand-orange",
        badgeBg: "bg-brand-navy text-white",
        iconColor: "text-brand-orange",
        titleColor: "text-brand-navy",
    },
    {
        num: "02",
        title: "Proposal & Scope",
        desc: "A proposal outlining which services fit your goals and budget, with a clearly defined project scope.",
        icon: CheckCircle2,
        cardBg: "bg-orange-50/60 border-orange-200 hover:border-brand-orange",
        badgeBg: "bg-brand-orange text-white",
        iconColor: "text-brand-orange",
        titleColor: "text-brand-navy",
    },
    {
        num: "03",
        title: "Setup & Launch",
        desc: "Campaign setup and launch, with tracking in place so results can be measured from day one.",
        icon: Rocket,
        cardBg: "bg-brand-navy text-white border-brand-navy hover:border-brand-orange",
        badgeBg: "bg-brand-orange text-white",
        iconColor: "text-brand-orange",
        titleColor: "text-white",
    },
    {
        num: "04",
        title: "Optimization & Reporting",
        desc: "Ongoing optimization based on real performance data, alongside regular reporting in plain language covering what changed and why.",
        icon: BarChart2,
        cardBg: "bg-white border-slate-200 hover:border-brand-orange",
        badgeBg: "bg-slate-900 text-white",
        iconColor: "text-brand-navy",
        titleColor: "text-brand-navy",
    },
];

const faqs = [
    {
        q: "Which is the best digital marketing agency in Ujjain?",
        a: "The right agency depends on your specific goals and budget, but look for one with a clear process, transparent pricing, and reporting tied to your actual business metrics rather than only activity. Pragati Ujjayini offers a free consultation to review your current online presence before recommending a starting point.",
    },
    {
        q: "How much does a digital marketing agency in Ujjain charge?",
        a: "Cost depends on which services you need and how competitive your industry is within Ujjain. We use tiered packages so pricing is clear before you commit, with details available on request during a free consultation.",
    },
    {
        q: "Do you serve businesses outside Ujjain city limits?",
        a: "Yes. We work with businesses based in Ujjain as well as businesses in nearby areas and other cities including Indore, with campaigns adjusted to fit each specific market.",
    },
    {
        q: "How long does it take to see results?",
        a: "Google Ads can generate inquiries within days of launch. SEO, local SEO, and content marketing typically take a few months to show measurable movement in rankings and organic traffic, since these depend on search engines reevaluating your site over time.",
    },
    {
        q: "Can I hire this agency for just one service instead of a full package?",
        a: "Yes. Each service listed on this page can be hired individually or combined into a broader plan depending on your goals and budget.",
    },
];

export default function DigitalMarketingUjjainPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="bg-slate-50 text-slate-800 min-h-screen">
                {/* Clean Hero Header with Navy & Orange highlights */}
                <header className="bg-brand-navy text-white py-16 md:py-24 px-6 border-b border-brand-navy/80 relative overflow-hidden">
                    <div className="absolute top-0 right-0 size-96 bg-brand-orange/10 blur-3xl rounded-full pointer-events-none" />
                    <div className="max-w-5xl mx-auto space-y-6 relative z-10">
                        <span className="inline-block bg-brand-orange/20 text-brand-orange border border-brand-orange/30 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                            Full-Service Local Agency
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                            Top-Rated <span className="text-brand-orange">Digital Marketing Agency in Ujjain</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed">
                            Pragati Ujjayini is a digital marketing agency serving businesses in Ujjain, offering SEO, Google Ads management, social media marketing, website designing, local SEO, and content marketing under one team.
                        </p>
                        <p className="text-slate-200 max-w-3xl leading-relaxed">
                            If your business operates in Ujjain and you are comparing agencies to grow your online visibility and lead volume, this page covers exactly what we offer, how we work, and how to request a quote.
                        </p>
                        <div className="pt-4">
                            <Button
                                nativeButton={false}
                                render={<a href="/contact" />}
                                className="h-11 rounded-full bg-brand-orange px-6 text-sm font-semibold text-brand-orange-foreground [a]:hover:bg-brand-orange/90 shadow-md shadow-brand-orange/20"
                            >
                                Request a Free Consultation →
                            </Button>
                        </div>
                    </div>
                </header>

                <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
                    {/* Overview Section - Crisp Light Card */}
                    <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4 border-l-4 border-l-brand-orange">
                        <h2 className="text-2xl font-bold text-brand-navy flex items-center gap-2">
                            What This Agency Offers Businesses in Ujjain
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            As a full-service digital marketing company in Ujjain, we manage the channels that determine whether local customers find your business online: search rankings, Google Business Profile visibility, paid ads, social media presence, and your website itself.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Rather than treating each channel separately, campaigns are planned together so your SEO, ads, and content support one goal: more qualified inquiries for your business. We work directly with business owners in Ujjain rather than through an outsourced account manager, so decisions and changes to a campaign happen quickly.
                        </p>
                    </section>

                    {/* Why Digital Marketing Matters */}
                    <section className="space-y-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
                                Why Digital Marketing Matters for Businesses in Ujjain
                            </h2>
                            <p className="text-slate-600 mt-2 leading-relaxed">
                                Ujjain combines an established base of local retail, healthcare, and service businesses with seasonal spikes in demand tied to religious tourism and pilgrimage seasons.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2 border-t-4 border-t-brand-orange">
                                <h3 className="font-bold text-brand-navy text-lg">Year-Round Local Demand</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Capture local residents searching daily for reliable healthcare, retail, educational institutes, and professional services.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2 border-t-4 border-t-brand-navy">
                                <h3 className="font-bold text-brand-navy text-lg">Seasonal Tourist Surges</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Maximize visibility during pilgrimage spikes when non-resident visitors rely entirely on mobile search and Google Maps.
                                </p>
                            </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            A business that only relies on walk-in customers or word-of-mouth misses buyers who are already searching online. An online marketing agency in Ujjain that understands this seasonal pattern plans campaigns to capture both steady local demand and high-intent tourist traffic.
                        </p>
                    </section>

                    {/* Strategic Synergy / Value - Dark Contrast Accent Box */}
                    <section className="bg-brand-navy text-white p-8 rounded-2xl space-y-6 shadow-md">
                        <h2 className="text-2xl font-bold text-brand-orange">
                            How These Services Support Business Growth
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-200 text-sm">
                            <li className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                                <span className="text-brand-orange font-bold">•</span>
                                <span>
                                    <strong className="text-white">SEO & Local SEO:</strong> Build long-term, lower-cost organic visibility that keeps generating traffic without ongoing ad spend.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                                <span className="text-brand-orange font-bold">•</span>
                                <span>
                                    <strong className="text-white">Google Ads:</strong> Generates qualified leads quickly while SEO foundations are still building momentum.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                                <span className="text-brand-orange font-bold">•</span>
                                <span>
                                    <strong className="text-white">Social Media:</strong> Keeps your business top-of-mind between purchases and builds trust through continuous presence.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                                <span className="text-brand-orange font-bold">•</span>
                                <span>
                                    <strong className="text-white">High-Converting Website:</strong> Turns incoming traffic generated from all other channels into actual customer inquiries.
                                </span>
                            </li>
                            <li className="flex items-start gap-3 md:col-span-2 bg-white/5 p-3 rounded-xl border border-white/10">
                                <span className="text-brand-orange font-bold">•</span>
                                <span>
                                    <strong className="text-white">Content Marketing:</strong> Supports search rankings while positioning your business as a credible answer for AI search tools.
                                </span>
                            </li>
                        </ul>
                    </section>

                    {/* STRICT 1-ROW HORIZONTAL WORKING PROCESS (Light Theme) */}
                    <section className="space-y-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-orange-100/80 px-3 py-1 rounded-full border border-orange-200">
                                    Structured Framework
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mt-2">
                                    Our Working Process
                                </h2>
                                <p className="text-slate-600 text-sm mt-1">
                                    We follow a structured 4-step framework to plan, execute, and scale digital marketing campaigns.
                                </p>
                            </div>
                        </div>

                        {/* Flex container enforcing single row design */}
                        <div className="flex overflow-x-auto gap-5 pb-4 pt-2 scrollbar-thin scrollbar-thumb-brand-orange/40 snap-x snap-mandatory">
                            {processSteps.map((step, idx) => {
                                const IconComponent = step.icon;
                                return (
                                    <div
                                        key={idx}
                                        className={`flex-1 min-w-[260px] md:min-w-[270px] snap-start rounded-2xl p-6 border shadow-sm ${step.cardBg} flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
                                    >
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${step.badgeBg}`}>
                                                    Step {step.num}
                                                </span>
                                                <IconComponent className={`size-5 ${step.iconColor}`} />
                                            </div>

                                            <div className="space-y-2">
                                                <h3 className={`text-base font-bold tracking-tight ${step.titleColor}`}>
                                                    {step.title}
                                                </h3>
                                                <p className={`text-xs leading-relaxed ${step.titleColor === "text-white" ? "text-slate-200" : "text-slate-600"}`}>
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>

                                        <div className={`mt-6 pt-4 border-t ${step.titleColor === "text-white" ? "border-white/10 text-slate-300" : "border-slate-100 text-slate-400"} flex items-center justify-between text-xs`}>
                                            <span>Phase {idx + 1} of 4</span>
                                            {idx < processSteps.length - 1 && (
                                                <ArrowRight className="size-3.5 text-brand-orange" />
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Service Selection & Deliverables */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                            <h3 className="text-xl font-bold text-brand-navy">
                                How to Select the Right Service
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                A business with little online visibility often benefits most from Local SEO and Google Business Profile setup first. Businesses that rank reasonably well but need faster leads usually prioritize Google Ads. Long-term organic growth combines SEO and content marketing.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                            <h3 className="text-xl font-bold text-brand-navy">
                                What You Can Expect as a Deliverable
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Deliverables include technical SEO audits, an optimized Google Business Profile, live ad campaign management, content calendars with published posts, custom website development, and regular blog/service content alongside agreed reporting schedules.
                            </p>
                        </div>
                    </section>

                    {/* Measurement & Client Focus */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                            <h3 className="text-xl font-bold text-brand-navy">
                                Measurement & Reporting
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                We track traffic and rankings for SEO, cost per lead and conversion rates for Google Ads, map pack actions for Local SEO, and reach/engagement for social media. Reports explain real commercial impact, not just vanity metrics.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                            <h3 className="text-xl font-bold text-brand-navy">
                                Businesses That Work With Us
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                We work across retail stores, healthcare clinics, educational institutes, and local service providers reliant on nearby discovery, as well as businesses tapping into seasonal tourism and pilgrimage cycles.
                            </p>
                        </div>
                    </section>

                    {/* Why Choose & Internal Links */}
                    <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                        <h2 className="text-2xl font-bold text-brand-navy">
                            Why Businesses Choose Pragati Ujjayini
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            Trust in a digital marketing agency comes down to clear processes and direct reporting. We define exact project scopes before work begins, report on metrics tied directly to business revenue, and remain your direct contact without rotating account managers.
                        </p>
                        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-sm font-semibold">
                            <a href="/pricing/" className="text-brand-orange hover:underline">
                                View Pricing & Packages →
                            </a>
                            <a href="/portfolio/" className="text-brand-orange hover:underline">
                                View Client Work & Portfolio →
                            </a>
                            <a href="/indore-digital-marketing/" className="text-brand-orange hover:underline">
                                Digital Marketing Agency in Indore →
                            </a>
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
                                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2"
                                >
                                    <h3 className="font-bold text-brand-navy text-lg">{faq.q}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Bottom CTA Section */}
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