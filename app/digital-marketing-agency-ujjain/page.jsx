import Script from "next/script";

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
            "@id": "https://www.pragatiujjayini.com/#" + "organization",
            name: "Pragati Ujjayini",
            url: "https://www.pragatiujjayini.com/",
            telephone: "+91-9202668977",
        },
        {
            "@type": "LocalBusiness",
            "@id": "https://www.pragatiujjayini.com/#" + "localbusiness",
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
            "areaServed": [
                { "@type": "City", name: "Ujjain" },
                { "@type": "City", name: "Indore" },
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
        },
        {
            "@type": "WebPage",
            "@id": "https://www.pragatiujjayini.com/ujjain-digital-marketing/",
            url: "https://www.pragatiujjayini.com/ujjain-digital-marketing/",
            name: "Digital Marketing Agency in Ujjain | Pragati Ujjayini",
            description:
                "Pragati Ujjayini provides digital marketing services in Ujjain including SEO, Local SEO, Google Ads, social media marketing, website designing and content marketing.",
            isPartOf: {
                "@id": "https://www.pragatiujjayini.com/#" + "website",
            },
            about: {
                "@id": "https://www.pragatiujjayini.com/#" + "localbusiness",
            },
            breadcrumb: {
                "@id":
                    "https://www.pragatiujjayini.com/ujjain-digital-marketing/#" +
                    "breadcrumb",
            },
        },
        {
            "@type": "BreadcrumbList",
            "@id":
                "https://www.pragatiujjayini.com/ujjain-digital-marketing/#" +
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
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Digital Marketing Agency in Ujjain",
                    item:
                        "https://www.pragatiujjayini.com/ujjain-digital-marketing/",
                },
            ],
        },
        {
            "@type": "Service",
            "@id":
                "https://www.pragatiujjayini.com/ujjain-digital-marketing/#" + "service",
            name: "Digital Marketing Agency in Ujjain",
            serviceType: "Digital Marketing Services",
            provider: {
                "@id": "https://www.pragatiujjayini.com/#" + "localbusiness",
            },
            areaServed: {
                "@type": "City",
                name: "Ujjain",
            },
        },
        {
            "@type": "FAQPage",
            "@id":
                "https://www.pragatiujjayini.com/ujjain-digital-marketing/#" + "faq",
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

const services = [
    {
        title: "SEO Services in Ujjain",
        desc: "Search engine optimization improves how your website ranks in organic Google results for terms your customers are already searching. We handle technical fixes, on page content, and link building so your site ranks for searches relevant to your business, not just your brand name.",
        linkText: "Explore SEO Services →",
        href: "/seo-services-ujjain/",
    },
    {
        title: "Local SEO Services in Ujjain",
        desc: "Local SEO focuses on visibility in the map pack and near me searches specific to Ujjain. This includes optimizing your Google Business Profile, building consistent local citations, and managing reviews so customers searching nearby find your business first.",
        linkText: "Explore Local SEO →",
        href: "/local-seo-services-ujjain/",
    },
    {
        title: "Google Ads Services in Ujjain",
        desc: "Paid search puts your business at the top of Google results immediately. As a Google Ads agency in Ujjain, campaigns are built and managed around cost per lead, with budgets and targeting adjusted based on which searches actually convert into inquiries.",
        linkText: "Explore Google Ads →",
        href: "/google-ads-services-ujjain/",
    },
    {
        title: "Social Media Marketing Services",
        desc: "Social media marketing covers content planning, posting, community management, and paid campaigns on platforms such as Instagram and Facebook. Campaigns are built around your specific goal, whether that is awareness, website traffic, or direct leads.",
        linkText: "Explore Social Media →",
        href: "/social-media-marketing-ujjain/",
    },
    {
        title: "Website Designing Services in Ujjain",
        desc: "Your website is where every other channel sends traffic. As a website design company in Ujjain, we build responsive, fast loading, conversion focused websites so visitors from search, ads, or social actually convert into inquiries.",
        linkText: "Explore Website Design →",
        href: "/website-designing-services-ujjain/",
    },
    {
        title: "Content Marketing Services in Ujjain",
        desc: "Content marketing means blog posts, service pages, and guides written around what your customers in Ujjain are already searching for. This content supports SEO rankings and gives AI tools and answer engines clear, accurate information to reference.",
        linkText: "Explore Content Marketing →",
        href: "/content-marketing-services-ujjain/",
    },
];

const processSteps = [
    {
        title: "1. Consultation & Audit",
        desc: "Free consultation and audit of your current website, search visibility, and any existing ad accounts.",
    },
    {
        title: "2. Proposal & Scope",
        desc: "A proposal outlining which services fit your goals and budget, with a clearly defined project scope.",
    },
    {
        title: "3. Setup & Launch",
        desc: "Campaign setup and launch, with tracking in place so results can be measured from day one.",
    },
    {
        title: "4. Optimization & Reporting",
        desc: "Ongoing optimization based on real performance data, alongside regular reporting in plain language covering what changed and why.",
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
                {/* Hero Section */}
                <header className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white py-16 md:py-24 px-6">
                    <div className="max-w-5xl mx-auto space-y-6">
                        <span className="inline-block bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                            Full-Service Local Agency
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                            Digital Marketing Agency in Ujjain
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
                            Pragati Ujjayini is a digital marketing agency serving businesses in Ujjain, offering SEO, Google Ads management, social media marketing, website designing, local SEO, and content marketing under one team.
                        </p>
                        <p className="text-slate-300 max-w-3xl leading-relaxed">
                            If your business operates in Ujjain and you are comparing agencies to grow your online visibility and lead volume, this page covers exactly what we offer, how we work, and how to request a quote.
                        </p>
                        <div className="pt-4">
                            <a
                                href="#consultation"
                                className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition shadow-md"
                            >
                                Request a Free Consultation →
                            </a>
                        </div>
                    </div>
                </header>

                <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
                    {/* Overview Section */}
                    <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200/80 space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">
                            What This Agency Offers Businesses in Ujjain
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            As a full service digital marketing company in Ujjain, we manage the channels that determine whether local customers find your business online: search rankings, Google Business Profile visibility, paid ads, social media presence, and your website itself. Rather than treating each channel separately, campaigns are planned together so your SEO, ads, and content support one goal: more qualified inquiries for your business.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            We work directly with business owners in Ujjain rather than through a call center or an outsourced account manager, so decisions and changes to a campaign can happen quickly.
                        </p>
                    </section>

                    {/* Why Digital Marketing Matters in Ujjain */}
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                            Why Digital Marketing Matters for Businesses in Ujjain
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Ujjain combines an established base of local retail, healthcare, and service businesses with seasonal spikes in demand tied to religious tourism and pilgrimage seasons, when search volume and footfall in the city rise sharply.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            A business that only relies on walk-in customers or word of mouth misses buyers who are already searching online, whether they are long term residents comparing local options or visitors searching for services during a specific season. An online marketing agency in Ujjain that understands this seasonal pattern can plan campaigns that capture steady, year-round local demand as well as the surges tied to specific times of year.
                        </p>
                    </section>

                    {/* Services Grid */}
                    <section className="space-y-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                Available Digital Marketing Services in Ujjain
                            </h2>
                            <p className="text-slate-600 mt-2">
                                Each service below is available individually or as part of a combined plan, depending on your goals and budget.
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

                    {/* Strategic Synergy / Value */}
                    <section className="bg-slate-900 text-white p-8 rounded-xl space-y-6">
                        <h2 className="text-2xl font-bold">
                            How These Services Support Business Growth
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 font-bold">•</span>
                                <span><strong>SEO & Local SEO:</strong> Build long-term, lower-cost organic visibility that keeps generating traffic without ongoing ad spend.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 font-bold">•</span>
                                <span><strong>Google Ads:</strong> Generates qualified leads quickly while SEO foundations are still building momentum.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 font-bold">•</span>
                                <span><strong>Social Media:</strong> Keeps your business top-of-mind between purchases and builds trust through continuous presence.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 font-bold">•</span>
                                <span><strong>High-Converting Website:</strong> Turns incoming traffic generated from all other channels into actual customer inquiries.</span>
                            </li>
                            <li className="flex items-start gap-3 md:col-span-2">
                                <span className="text-blue-400 font-bold">•</span>
                                <span><strong>Content Marketing:</strong> Supports search rankings while positioning your business as a credible answer for AI search tools.</span>
                            </li>
                        </ul>
                    </section>

                    {/* Working Process */}
                    <section className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                            Our Working Process
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
                    </section>

                    {/* Service Selection & Deliverables */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                            <h3 className="text-xl font-bold text-slate-900">
                                How to Select the Right Service
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                A business with little online visibility often benefits most from Local SEO and Google Business Profile setup first. Businesses that rank reasonably well but need faster leads usually prioritize Google Ads. Long-term organic growth combines SEO and content marketing. We review your standing during consultation to recommend an ideal starting point.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                            <h3 className="text-xl font-bold text-slate-900">
                                What You Can Expect as a Deliverable
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Deliverables include technical SEO audits, an optimized Google Business Profile, live ad campaign management, content calendars with published posts, custom website development, and regular blog/service content alongside agreed reporting schedules.
                            </p>
                        </div>
                    </section>

                    {/* Measurement & Client Focus */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                            <h3 className="text-xl font-bold text-slate-900">
                                Measurement & Reporting
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                We track traffic and rankings for SEO, cost per lead and conversion rates for Google Ads, map pack actions for Local SEO, and reach/engagement for social media. Reports explain real commercial impact, not just fluff metrics.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                            <h3 className="text-xl font-bold text-slate-900">
                                Businesses That Work With Us
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                We work across retail stores, healthcare clinics, educational institutes, and local service providers reliant on nearby discovery, as well as businesses tapping into seasonal tourism and pilgrimage cycles.
                            </p>
                        </div>
                    </section>

                    {/* Why Choose & Pricing */}
                    <section className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
                        <h2 className="text-2xl font-bold text-slate-900">
                            Why Businesses Choose Pragati Ujjayini
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            Trust in a digital marketing agency comes down to clear processes and direct reporting. We define exact project scopes before work begins, report on metrics tied directly to business revenue, and remain your direct contact without rotating account managers.
                        </p>
                        <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row gap-4 text-sm font-semibold">
                            <a href="/pricing/" className="text-blue-600 hover:text-blue-800">
                                View Pricing & Packages →
                            </a>
                            <a href="/portfolio/" className="text-blue-600 hover:text-blue-800">
                                View Client Work & Portfolio →
                            </a>
                            <a href="/indore-digital-marketing/" className="text-blue-600 hover:text-blue-800">
                                Digital Marketing Agency in Indore →
                            </a>
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
                        id="consultation"
                        className="bg-blue-900 text-white p-8 md:p-12 rounded-2xl space-y-6 text-center"
                    >
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Get Started With a Free Consultation
                        </h2>
                        <p className="text-blue-200 max-w-2xl mx-auto leading-relaxed">
                            If you are ready to grow your business online, request a free consultation. We will review your current website, search visibility, and social presence, then recommend a starting point based on your goals and budget.
                        </p>
                        <div className="pt-2">
                            <a
                                href="#contact"
                                className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg transition shadow-lg text-lg"
                            >
                                Request a Free Consultation →
                            </a>
                        </div>
                        <div className="bg-blue-950/60 p-6 rounded-xl max-w-lg mx-auto text-sm text-slate-300 space-y-2 border border-blue-800/50 mt-6">
                            <p className="font-semibold text-white">Pragati Ujjayini</p>
                            <p>
                                Address: C - 1/2 1st Floor, Mahakal Vanijya Kendra, Nanakheda,
                                Ujjain, Madhya Pradesh 456010
                            </p>
                            <p className="text-blue-300 font-bold">Phone: +91-9202668977</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}