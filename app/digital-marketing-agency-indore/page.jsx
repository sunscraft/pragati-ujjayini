import Script from "next/script";

export const metadata = {
  title: "Digital Marketing Agency in Indore | Pragati Ujjayini",
  description:
    "Looking for a digital marketing agency in Indore? Pragati Ujjayini offers SEO, Google Ads, Social Media and Web Design with proven local results. Get a free quote.",
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
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.pragatiujjayini.com/#" + "localbusiness",
      name: "Pragati Ujjayini",
      url: "https://www.pragatiujjayini.com/",
      telephone: "+91-9202668977",
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
      "areaServed": { "@type": "City", name: "Indore" },
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
      "@id": "https://www.pragatiujjayini.com/indore-digital-marketing/",
      url: "https://www.pragatiujjayini.com/indore-digital-marketing/",
      name: "Digital Marketing Agency in Indore | Pragati Ujjayini",
      description:
        "Pragati Ujjayini provides digital marketing services in Indore including SEO, Local SEO, Google Ads, social media marketing, website designing and content marketing.",
      isPartOf: {
        "@id": "https://www.pragatiujjayini.com/#" + "website",
      },
      about: {
        "@id": "https://www.pragatiujjayini.com/#" + "organization",
      },
      breadcrumb: {
        "@id":
          "https://www.pragatiujjayini.com/indore-digital-marketing/#" + "breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.pragatiujjayini.com/indore-digital-marketing/#" + "breadcrumb",
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
          name: "Digital Marketing Agency in Indore",
          item:
            "https://www.pragatiujjayini.com/indore-digital-marketing/",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://www.pragatiujjayini.com/indore-digital-marketing/#" + "service",
      name: "Digital Marketing Services in Indore",
      serviceType: "Digital Marketing",
      provider: {
        "@id": "https://www.pragatiujjayini.com/#" + "organization",
      },
      areaServed: {
        "@type": "City",
        name: "Indore",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.pragatiujjayini.com/indore-digital-marketing/#" + "faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does it cost to hire a digital marketing agency in Indore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Costs depend on which services you need, your ad spend if running paid campaigns, and the scope of ongoing management, so pricing is generally discussed after understanding your specific goals rather than quoted as one fixed number across every digital marketing company in Indore.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to see results from digital marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Paid campaigns can generate visibility and enquiries within days of launch, while organic strategies like SEO and content marketing typically take a few months of consistent work to show meaningful ranking improvements. Any digital marketing agency in Indore should be able to explain realistic timelines up front rather than promising instant results.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Pragati Ujjayini different from other digital marketing companies in Indore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We focus on connecting services together, for example linking Google Business Profile optimization with local SEO and paid campaigns, rather than managing each channel in isolation, and we provide transparent reporting throughout.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need all six services, or can I start with just one?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most businesses start with one or two priority services based on where the biggest gap is, whether that is local visibility, paid leads, or website performance, and expand from there as needed with the same digital marketing agency in Indore managing the full picture.",
          },
        },
        {
          "@type": "Question",
          name: "Is Pragati Ujjayini the best digital marketing company in Indore for small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work extensively with small and growing businesses across Indore, and our approach is built around practical, measurable outcomes rather than generic strategies, though the right fit ultimately depends on your specific goals and industry, which is best discussed in a direct consultation.",
          },
        },
      ],
    },
  ],
};

const servicesList = [
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Improving organic ranking for searches local customers actually use. Includes keyword research, technical audits, on-page optimization, and content strategy for sustainable growth.",
  },
  {
    title: "Local SEO Services",
    desc: "Google Business Profile management, local citations, and review generation so nearby customers find you immediately in local search and maps.",
  },
  {
    title: "Google Ads Services",
    desc: "Targeted paid search and shopping campaigns providing immediate visibility. We manage keywords, ad copy, conversion tracking, and ongoing bid optimization.",
  },
  {
    title: "Social Media Marketing",
    desc: "Building brand trust and engagement on Instagram and Facebook through structured content planning, creative development, community management, and paid ads.",
  },
  {
    title: "Website Designing Services",
    desc: "Building fast, mobile-friendly websites focused on converting traffic into enquiries via clear call buttons, booking forms, and direct WhatsApp links.",
  },
  {
    title: "Content Marketing Services",
    desc: "Creating strategic service pages and blog content that answers customer queries, feeds search engines, and builds authority in your industry.",
  },
];

const faqs = [
  {
    q: "How much does it cost to hire a digital marketing agency in Indore?",
    a: "Costs depend on which services you need, your ad spend if running paid campaigns, and the scope of ongoing management, so pricing is generally discussed after understanding your specific goals rather than quoted as one fixed number across every digital marketing company in Indore.",
  },
  {
    q: "How long does it take to see results from digital marketing?",
    a: "Paid campaigns can generate visibility and enquiries within days of launch, while organic strategies like SEO and content marketing typically take a few months of consistent work to show meaningful ranking improvements. Any digital marketing agency in Indore should be able to explain realistic timelines up front rather than promising instant results.",
  },
  {
    q: "What makes Pragati Ujjayini different from other digital marketing companies in Indore?",
    a: "We focus on connecting services together, for example linking Google Business Profile optimization with local SEO and paid campaigns, rather than managing each channel in isolation, which is not always the case with every digital marketing agency in Indore, and we provide transparent reporting throughout.",
  },
  {
    q: "Do I need all six services, or can I start with just one?",
    a: "Most businesses start with one or two priority services based on where the biggest gap is, whether that is local visibility, paid leads, or website performance, and expand from there as needed with the same digital marketing agency in Indore managing the full picture.",
  },
  {
    q: "Is Pragati Ujjayini the best digital marketing company in Indore for small businesses?",
    a: "We work extensively with small and growing businesses across Indore, and our approach is built around practical, measurable outcomes rather than generic strategies, though the right fit ultimately depends on your specific goals and industry, which is best discussed in a direct consultation.",
  },
];

export default function DigitalMarketingIndorePage() {
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
              Results-Driven Marketing
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Digital Marketing Agency in Indore
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
              Looking for a digital marketing agency in Indore that can actually be held accountable for results, not just activity? Pragati Ujjayini works with businesses across Indore to plan, execute, and manage digital marketing built around real customer acquisition.
            </p>
            <div className="pt-4">
              <a
                href="#consultation"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition shadow-md"
              >
                Request a Free Consultation
              </a>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
          {/* Intro Overview */}
          <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200/80 space-y-4">
            <p className="text-slate-600 leading-relaxed">
              If you are comparing a digital marketing company in Indore for the first time, or you already have one and are not seeing the outcomes you expected, this page walks through exactly what a full service digital marketing agency in Indore should deliver, how pricing typically works, and what to check before you commit your budget.
            </p>
          </section>

          {/* Why Indore Businesses Need Digital Marketing */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Why Indore Businesses Need a Digital Marketing Agency
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Indore is one of the most competitive markets in the region for local businesses, which is exactly why so many owners begin their search for a digital marketing agency in Indore, whether you run a clinic, a retail store, a restaurant, or a service based business. Customers here search on Google, browse Instagram, and message on WhatsApp before ever calling a business directly.
            </p>
            <p className="text-slate-600 leading-relaxed">
              A digital marketing agency in Indore closes this gap by managing your visibility across search, local listings, social platforms, and paid advertising as one connected system rather than a set of disconnected tools.
            </p>
          </section>

          {/* Services Grid */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              What a Full-Service Agency Delivers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesList.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition space-y-3"
                >
                  <h3 className="text-lg font-bold text-blue-900">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Strategy & Management */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xl font-bold text-slate-900">
                How We Develop a Digital Marketing Strategy
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every engagement starts with understanding your business goals, current online presence, and target customers. Strategy is reviewed regularly against actual performance data, ensuring adjustments are made based on what is working.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xl font-bold text-slate-900">
                Campaign Management & Measurement
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ongoing management covers execution, monitoring, and optimization. We track rankings, ad performance, conversion rates, and lead quality so reporting remains transparent and actionable.
              </p>
            </div>
          </section>

          {/* Choosing the Right Agency Checklist */}
          <section className="bg-slate-900 text-white p-8 rounded-xl space-y-6">
            <h2 className="text-2xl font-bold">
              How to Choose the Right Digital Marketing Agency in Indore
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">✓</span>
                Do they explain their strategy clearly before asking for commitment?
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">✓</span>
                Can they show real examples of past or current work?
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">✓</span>
                Do they provide transparent reporting you can actually understand?
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">✓</span>
                Is their pricing structure clear, with no vague line items?
              </li>
            </ul>
          </section>

          {/* Pricing & Transparency */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Pricing Considerations & Our Process
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Digital marketing pricing in Indore varies based on service count, campaign complexity, ad spend levels, and current site condition. We do not publish invented statistics or fabricated claims. Trust is built on transparent processes and verifiable results.
            </p>
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

          {/* Contact / CTA Section */}
          <section
            id="consultation"
            className="bg-blue-900 text-white p-8 md:p-12 rounded-2xl space-y-6 text-center"
          >
            <h2 className="text-2xl md:text-4xl font-bold">
              Request a Free Consultation
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto leading-relaxed">
              If you are ready to compare options or want a clear assessment of what your business needs, talk to our team for a straightforward plan based on your goals.
            </p>
            <div className="bg-blue-950/60 p-6 rounded-xl max-w-lg mx-auto text-sm text-slate-300 space-y-2 border border-blue-800/50">
              <p className="font-semibold text-white">Pragati Ujjayini</p>
              <p>
                Address: C 1/2 1st Floor, Mahakal Vanijya Kendra, Nanakheda,
                Ujjain, Madhya Pradesh 456010
              </p>
              <p className="text-blue-300 font-bold">Phone: 092026 68977</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}