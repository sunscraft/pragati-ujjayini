import Script from "next/script";

export const metadata = {
    title: "Digital Marketing Agency | Get a Free Growth Audit & Custom Quote",
    description:
        "Hire a full-service digital marketing agency for SEO, Google Ads, Social Media & Web Design. Transparent pricing, free consultation. Get your custom plan today.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://www.pragatiujjayini.com/#" + "organization",
            name: "Pragati Ujjayini",
            url: "https://www.pragatiujjayini.com/",
            logo: "https://www.pragatiujjayini.com/logo.png",
            sameAs: [
                "https://www.facebook.com/pragatiujjayini",
                "https://www.instagram.com/pragatiujjayini",
                "https://www.linkedin.com/company/pragatiujjayini",
            ],
        },
        {
            "@type": "LocalBusiness",
            "@id": "https://www.pragatiujjayini.com/#" + "localbusiness",
            name: "Pragati Ujjayini",
            image: "https://www.pragatiujjayini.com/logo.png",
            url: "https://www.pragatiujjayini.com/",
            telephone: "+91-9202668977",
            priceRange: "$$",
            address: {
                "@type": "PostalAddress",
                streetAddress:
                    "C - 1/2 1st Floor, Mahakal Vanijya Kendra, Nanakheda",
                addressLocality: "Ujjain",
                addressRegion: "Madhya Pradesh",
                postalCode: "456010",
                addressCountry: "IN",
            },
            "areaServed": [
                { "@type": "City", name: "Indore" },
                { "@type": "City", name: "Ujjain" },
            ],
            parentOrganization: {
                "@id": "https://www.pragatiujjayini.com/#" + "organization",
            },
        },
        {
            "@type": "WebSite",
            "@id": "https://www.pragatiujjayini.com/#" + "website",
            url: "https://www.pragatiujjayini.com/",
            name: "Pragati Ujjayini",
            publisher: {
                "@id": "https://www.pragatiujjayini.com/#" + "organization",
            },
            potentialAction: {
                "@type": "SearchAction",
                target: {
                    "@type": "EntryPoint",
                    urlTemplate:
                        "https://www.pragatiujjayini.com/?s={search_term_string}",
                },
                "query-input": "required name=search_term_string",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id":
                "https://www.pragatiujjayini.com/digital-marketing-agency-near-me/#" +
                "breadcrumb",
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
            ],
        },
        {
            "@type": "FAQPage",
            "@id":
                "https://www.pragatiujjayini.com/digital-marketing-agency-near-me/#" +
                "faq",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "How do I know if I should hire a digital marketing agency?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "If you're spending time managing marketing yourself with limited results, or need SEO, ads, social, and web design coordinated together rather than handled separately, a digital marketing agency is typically worth the investment. A free audit is the fastest way to find out where the biggest opportunity is for your specific business.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How much does it cost to hire a digital marketing agency?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Cost depends on which services you need and how competitive your industry is. Pragati Ujjayini offers transparent, tiered packages (Starter, Growth, Pro) so you can compare pricing before committing.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How soon can a digital marketing agency start working on my business?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most engagements begin with a free audit, followed by a proposal and campaign launch within days. PPC campaigns can start generating leads almost immediately after launch; SEO and content typically take a few months to show ranking movement.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What's included in a free growth audit?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A free audit typically reviews website performance, current search rankings, ad accounts, Google Business Profile, and competitor landscape, giving a clear picture of what's working and what to fix first, at no cost.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can I hire a digital marketing agency for just one service, like SEO or ads?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. SEO, local SEO, PPC, social media, website design, and content marketing can each be hired individually or combined into a full package, depending on goals and budget.",
                    },
                },
            ],
        },
    ],
};

const services = [
    {
        title: "SEO Services",
        desc: "Get found on Google without paying for every click. Our SEO services include a technical site audit, on-page optimization, keyword-targeted content, and link building — all aimed at ranking pages that bring in buyers, not just traffic.",
        linkText: "See what's included in our SEO services →",
        href: "/seo-services/",
    },
    {
        title: "Local SEO",
        desc: "If customers near you are searching and not finding you, this is usually why. Local SEO gets your Google Business Profile, citations, and reviews working together so you show up in the map pack for 'near me' searches — often the fastest local SEO win available.",
        linkText: "Get a Local SEO quote →",
        href: "/local-seo-services/",
    },
    {
        title: "Google Ads / PPC Management",
        desc: "Need leads this month, not in six? PPC management puts you at the top of Google search results immediately, with campaigns built around cost-per-lead — not just clicks — so your ad spend turns into actual inquiries.",
        linkText: "Request a PPC campaign proposal →",
        href: "/google-ads-services/",
    },
    {
        title: "Social Media Marketing",
        desc: "Turn followers into customers with a content and ad strategy built for your specific goals — awareness, traffic, or direct leads. We handle content planning, posting, community management, and paid social campaigns.",
        linkText: "See social media marketing packages →",
        href: "/social-media-marketing/",
    },
    {
        title: "Website Design & Development",
        desc: "Every other service sends traffic to your website — if it's slow or doesn't convert, that traffic is wasted. We design and build fast, mobile-friendly, conversion-focused websites, from simple business sites to full ecommerce builds.",
        linkText: "Get a website design quote →",
        href: "/website-designing-services/",
    },
    {
        title: "Content Marketing",
        desc: "Rank for the questions your customers are already asking, and give AI tools like ChatGPT and Google AI Overviews clear, citable information about your business. We write blog posts, guides, and service pages that do both.",
        linkText: "See content marketing packages →",
        href: "/content-marketing-services/",
    },
];

const processSteps = [
    {
        title: "1. Book a free growth audit",
        desc: "We review your website, rankings, ad accounts, and social presence — no cost, no obligation.",
    },
    {
        title: "2. Get a custom proposal",
        desc: "Based on the audit, we recommend the specific services that will move fastest for your budget and goals.",
    },
    {
        title: "3. Launch within days",
        desc: "Campaigns, website fixes, and content go live with tracking set up from day one.",
    },
    {
        title: "4. Get ongoing optimization & reporting",
        desc: "We adjust targeting and spend based on real performance, and report back in plain language — not jargon.",
    },
];

const checklistItems = [
    "Clear, tiered pricing you can see before a sales call, not just custom quotes",
    "A written scope of work — exactly which services, deliverables, and timelines are included",
    "Realistic timelines — SEO and content take months to show results; instant-ranking promises are a red flag",
    "Reporting tied to your goals — leads and revenue, not just posts published or clicks delivered",
];

const faqs = [
    {
        q: "How do I know if I should hire a digital marketing agency?",
        a: "If you're spending time managing marketing yourself with limited results, or need SEO, ads, social, and web design coordinated together rather than handled separately, a digital marketing agency is typically worth the investment. A free audit is the fastest way to find out where the biggest opportunity is for your specific business.",
    },
    {
        q: "How much does it cost to hire a digital marketing agency?",
        a: "Cost depends on which services you need and how competitive your industry is. We offer transparent, tiered packages (Starter, Growth, Pro) so you can compare pricing before committing — no hidden fees or vague custom quotes.",
    },
    {
        q: "How soon can a digital marketing agency start working on my business?",
        a: "Most engagements begin with a free audit, followed by a proposal and campaign launch within days — not weeks. PPC campaigns can start generating leads almost immediately after launch; SEO and content typically take a few months to show ranking movement.",
    },
    {
        q: "What's included in a free growth audit?",
        a: "A free audit typically reviews your website performance, current search rankings, ad accounts (if any), Google Business Profile, and competitor landscape — giving you a clear picture of what's working and what to fix first, at no cost.",
    },
    {
        q: "Can I hire a digital marketing agency for just one service, like SEO or ads?",
        a: "Yes. Every service — SEO, local SEO, PPC, social media, website design, content marketing — can be hired individually or combined into a full package, depending on your goals and budget.",
    },
];

export default function DigitalMarketingAgencyNearMePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="bg-slate-50 text-slate-800 min-h-screen">
                {/* Hero Section */}
                <header className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white py-16 md:py-24 px-6">
                    <div className="max-w-5xl mx-auto space-y-6">
                        <span className="inline-block bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                            Full-Service Digital Marketing
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                            Digital Marketing Agency: Get a Custom Growth Plan Built Around Your Business
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
                            Pragati Ujjayini is a full-service digital marketing agency offering SEO, Google Ads, social media marketing, website design, and content marketing under one team — so you get a coordinated strategy instead of juggling separate freelancers for each channel.
                        </p>
                        <p className="text-slate-300 max-w-3xl leading-relaxed">
                            If you're comparing digital marketing agencies right now, here's what to expect from working with us, what's included in each service, and how to get a free, no-obligation growth audit before you commit to anything.
                        </p>
                        <div className="pt-4">
                            <a
                                href="#growth-audit"
                                className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition shadow-md"
                            >
                                Get My Free Growth Audit →
                            </a>
                        </div>
                    </div>
                </header>

                <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
                    {/* What You Get Section */}
                    <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200/80 space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                            What You Get When You Hire a Digital Marketing Agency
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Hiring a digital marketing agency means you get a team — not a single freelancer juggling every channel — working from one coordinated plan. In practice, that means:
                        </p>
                        <ul className="space-y-3 text-slate-600">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 font-bold">•</span>
                                <span><strong>One point of contact</strong> who understands your full marketing picture, not just one channel in isolation</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 font-bold">•</span>
                                <span><strong>Specialists per channel</strong> — an SEO strategist, a paid ads manager, a designer, a content writer — instead of one generalist stretched thin</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 font-bold">•</span>
                                <span><strong>Tools and reporting already in place</strong>, so you're not paying separately for software licenses or building dashboards yourself</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 font-bold">•</span>
                                <span><strong>Faster execution</strong>, since campaigns, website fixes, and content can move in parallel instead of one person handling everything sequentially</span>
                            </li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed pt-2">
                            Every engagement starts the same way: a free audit of your current website, search rankings, ad accounts, and social channels, so you know exactly where you stand before spending a rupee.
                        </p>
                    </section>

                    {/* Services Grid */}
                    <section className="space-y-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                Our Core Digital Marketing Services — And What's Included
                            </h2>
                            <p className="text-slate-600 mt-2">
                                Each service below can be hired individually or combined into a full package. Here's exactly what you're paying for with each one.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((s, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4"
                                >
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-bold text-blue-900">{s.title}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                                    </div>
                                    <a
                                        href={s.href}
                                        className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition block pt-2"
                                    >
                                        {s.linkText}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* How to Get Started */}
                    <section className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                            How to Get Started
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {processSteps.map((step, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2"
                                >
                                    <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="pt-2 text-center">
                            <a
                                href="#growth-audit"
                                className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition shadow-md"
                            >
                                Book Your Free Audit →
                            </a>
                        </div>
                    </section>

                    {/* Comparison Table */}
                    <section className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                            Why Businesses Choose Pragati Ujjayini Over a Freelancer or Another Agency
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse bg-white rounded-xl shadow-sm border border-slate-200">
                                <thead>
                                    <tr className="bg-slate-100 text-slate-900 text-sm border-b border-slate-200">
                                        <th className="p-4 font-bold">Feature</th>
                                        <th className="p-4 font-bold text-blue-900 bg-blue-50/50">Pragati Ujjayini</th>
                                        <th className="p-4 font-bold">Freelancer</th>
                                        <th className="p-4 font-bold">Typical Large Agency</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-slate-600 divide-y divide-slate-200">
                                    <tr>
                                        <td className="p-4 font-semibold text-slate-800">Services covered</td>
                                        <td className="p-4 bg-blue-50/30 font-medium text-slate-900">SEO, Ads, Social, Web, Content — one team</td>
                                        <td className="p-4">Usually one specialization</td>
                                        <td className="p-4">Full-service, at premium pricing</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold text-slate-800">Pricing</td>
                                        <td className="p-4 bg-blue-50/30 font-medium text-slate-900">Transparent, tiered packages</td>
                                        <td className="p-4">Varies widely, often unclear</td>
                                        <td className="p-4">Frequently custom-quote only</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold text-slate-800">Turnaround on changes</td>
                                        <td className="p-4 bg-blue-50/30 font-medium text-slate-900">Days</td>
                                        <td className="p-4">Depends on availability</td>
                                        <td className="p-4">Often slower, layered approvals</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold text-slate-800">Point of contact</td>
                                        <td className="p-4 bg-blue-50/30 font-medium text-slate-900">Dedicated</td>
                                        <td className="p-4">Direct, but single point of failure</td>
                                        <td className="p-4">Often rotates</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold text-slate-800">Getting started</td>
                                        <td className="p-4 bg-blue-50/30 font-medium text-slate-900">Free audit, no obligation</td>
                                        <td className="p-4">Varies</td>
                                        <td className="p-4">Usually a sales call first</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* What to Check Before You Sign */}
                    <section className="bg-slate-900 text-white p-8 rounded-xl space-y-6">
                        <h2 className="text-2xl font-bold">
                            What to Check Before You Sign With Any Digital Marketing Agency
                        </h2>
                        <p className="text-slate-300 text-sm">
                            Before committing to a contract, confirm the agency offers:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300 text-sm">
                            {checklistItems.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="text-blue-400 font-bold">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Local Presence */}
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                            Local Presence Behind the Team
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Pragati Ujjayini's team is based in Indore, working directly with local businesses across retail, healthcare, education, and professional services, in addition to clients outside the region — experience that shapes how we build campaigns for competitive markets everywhere.
                        </p>
                        <div className="pt-1">
                            <a
                                href="/indore-digital-marketing/"
                                className="inline-block text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-4"
                            >
                                Digital Marketing Agency in Indore →
                            </a>
                        </div>
                        <p className="text-slate-600 leading-relaxed pt-2">
                            We also serve businesses in Ujjain, where demand is shaped by a mix of steady local commerce and seasonal footfall tied to religious tourism — a pattern that informs how we plan campaigns for any seasonal or footfall-driven business, not just those based there.
                        </p>
                        <div className="pt-1">
                            <a
                                href="/ujjain-digital-marketing/"
                                className="inline-block text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-4"
                            >
                                Digital Marketing Agency in Ujjain →
                            </a>
                        </div>
                    </section>

                    {/* Pricing & Proof Section */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                            <h3 className="text-xl font-bold text-slate-900">
                                Pricing: What Digital Marketing Costs & What's Included
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                We price in three clear tiers — Starter, Growth, and Pro — so you know exactly what's included before you commit, rather than working from a vague custom quote. Pricing depends on which services you need and how competitive your industry is, but every tier includes transparent deliverables and no long lock-in contracts.
                            </p>
                            <div className="pt-2">
                                <a href="/pricing/" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                                    See full pricing and package details →
                                </a>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                            <h3 className="text-xl font-bold text-slate-900">
                                Proof It Works: See Real Client Results
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Before you commit, see how we've helped other businesses grow — real before-and-after numbers, not generic claims.
                            </p>
                            <div className="pt-2">
                                <a href="/portfolio/" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                                    View our portfolio and case studies →
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Accordions */}
                    <section className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <details
                                    key={index}
                                    className="bg-white rounded-xl border border-slate-200 p-5 group cursor-pointer"
                                >
                                    <summary className="font-semibold text-slate-900 list-none flex justify-between items-center">
                                        <span>{faq.q}</span>
                                        <span className="transition group-open:rotate-180 text-slate-400">
                                            ▼
                                        </span>
                                    </summary>
                                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                        {faq.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section
                        id="growth-audit"
                        className="bg-blue-900 text-white p-8 md:p-12 rounded-2xl space-y-6 text-center"
                    >
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Ready to Grow? Get Your Free Digital Growth Audit
                        </h2>
                        <p className="text-blue-200 max-w-2xl mx-auto leading-relaxed">
                            Stop guessing what's working in your marketing. Get a free, no-obligation 15-minute Digital Growth Audit and walk away with a clear picture of what to fix first — whether or not you decide to work with us.
                        </p>
                        <div className="pt-2">
                            <a
                                href="#contact"
                                className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg transition shadow-lg text-lg"
                            >
                                Get My Free Growth Audit →
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}