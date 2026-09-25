'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'How many directories should my business be listed on?',
    a: 'This depends on your industry and location. We identify which directories are actually relevant to your business, instead of submitting to every directory regardless of value.',
  },
  {
    q: 'What happens if I already have duplicate listings?',
    a: 'We identify duplicates and either merge or remove them, since duplicates can split reviews and confuse both customers and search engines.',
  },
  {
    q: 'Can local business listings be managed alongside my Google Business Profile?',
    a: 'Yes. Listings and your Google Business Profile work together, and we manage both as part of a connected local visibility strategy.',
  },
  {
    q: 'Is local listing management a one-time service or ongoing?',
    a: 'Both. We offer an initial cleanup and setup, followed by ongoing monitoring to catch new inconsistencies as they appear.',
  },
  {
    q: 'Does listing management affect my Google Maps ranking?',
    a: 'Yes. Consistent listings act as trust signals that support your visibility in Google Maps and local search results.',
  },
]

export function LocalBusinessListingFaq() {
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
              className="flex w-full items-center justify-between p-5 text-left transition-colors focus:outline-none cursor-pointer"
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
