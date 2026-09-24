'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'What is GMB optimization?',
    a: 'GMB optimization means improving your Google Business Profile so it shows up correctly and ranks better in Google Search and Google Maps.',
  },
  {
    q: 'How is GMB optimization different from local SEO?',
    a: 'GMB optimization is one part of local SEO. Local SEO also includes your website, citations, and backlinks. We offer GMB optimization on its own or as part of a full local SEO plan.',
  },
  {
    q: 'Do you provide this service in Ujjain?',
    a: 'Yes. We manage Google Business Profiles for businesses across Ujjain.',
  },
  {
    q: 'Do you provide this service in Indore?',
    a: 'Yes. We also work with businesses in Indore, including those managing more than one location.',
  },
  {
    q: 'How long does GMB optimization take to show results?',
    a: 'Most businesses see movement in profile views and rankings within 30 to 60 days. This depends on your starting profile and local competition.',
  },
  {
    q: 'What happens if my profile gets suspended?',
    a: 'We diagnose the cause, usually a guideline or verification issue, and help you through the reinstatement process.',
  },
]

export function GmbFaqAccordion() {
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
