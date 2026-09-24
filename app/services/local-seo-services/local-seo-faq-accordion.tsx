'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'What is a local SEO service and how does it help a business?',
    a: 'Local SEO helps connect your business with customers who are actively searching for your services nearby, driving more direct calls, store visits, and website enquiries.',
  },
  {
    q: 'What is the difference between local SEO and GMB optimization?',
    a: 'GMB optimization focuses specifically on your Google Business Profile, whereas local SEO is broader and covers on-page SEO, website content, citations, and local link building.',
  },
  {
    q: 'Can local SEO improve Google Maps visibility?',
    a: 'Yes, targeted Google Maps optimization is a core part of local SEO, helping your business rank higher in map-based search results and local map packs.',
  },
  {
    q: 'What is included in a complete local SEO service?',
    a: 'A full strategy includes local keyword research, Google Business Profile management, citation building, review management, on-page SEO, local content creation, and local link building.',
  },
  {
    q: 'How long does it take to see results from local search optimization?',
    a: 'Most businesses notice early improvements in profile views and local search visibility within 30 to 60 days, with stronger ranking gains building over three to six months.',
  },
  {
    q: 'Why is local keyword research important for nearby searches?',
    a: 'It identifies the exact terms and phrases nearby customers use when searching for your services, allowing us to optimize your website and listings to match local search intent.',
  },
  {
    q: 'How does local content creation help search rankings?',
    a: 'Creating local content tailored to your specific city and industry helps target key local search queries and strengthens your overall authority in local search results.',
  },
  {
    q: 'Why is citation management necessary for local visibility?',
    a: 'Consistent NAP (Name, Address, Phone number) details across online directories build trust with search engines, which directly supports stronger local search rankings.',
  },
  {
    q: 'Do you provide local SEO services in Ujjain?',
    a: 'Yes. Pragati Ujjayini provides local SEO services for businesses across Ujjain.',
  },
  {
    q: 'Do you provide local SEO services in Indore?',
    a: 'Yes. Pragati Ujjayini provides local SEO services for businesses in Indore, including businesses with multiple locations.',
  },
  {
    q: 'Can local SEO help a business get more calls and enquiries?',
    a: 'Yes. By improving your visibility for relevant local searches, local SEO can help connect your business with customers who are ready to call, visit, or enquire.',
  },
  {
    q: 'Do you provide ongoing local SEO management?',
    a: 'Yes. Local SEO is ongoing work. Pragati Ujjayini monitors rankings and visibility regularly and adjusts the strategy as needed.',
  },
]

export function LocalSeoFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-3.5">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'border-orange-400 bg-white shadow-md ring-1 ring-orange-200'
                : 'border-orange-200/80 bg-white hover:border-orange-300 shadow-2xs'
            }`}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="flex w-full items-center justify-between p-5 text-left transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3.5 pr-4">
                <HelpCircle
                  className={`size-5 shrink-0 ${
                    isOpen ? 'text-orange-600' : 'text-zinc-400'
                  }`}
                />
                <span className="text-sm sm:text-base font-extrabold text-zinc-900 leading-snug">
                  {faq.q}
                </span>
              </div>
              <div
                className={`size-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen
                    ? 'bg-orange-600 text-white rotate-180'
                    : 'bg-orange-50 text-orange-600'
                }`}
              >
                <ChevronDown className="size-4 stroke-[2.5]" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-orange-100">
                {faq.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
