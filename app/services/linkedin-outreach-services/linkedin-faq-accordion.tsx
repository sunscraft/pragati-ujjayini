'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'What is LinkedIn Outreach and how does it generate B2B leads?',
    a: 'LinkedIn outreach is a targeted strategy to connect with your ideal decision makers directly on LinkedIn. By leveraging personalized messaging and prospect list building, we build relationships, initiate warm conversations, and convert prospects into qualified sales calls.',
  },
  {
    q: 'Is LinkedIn outreach safe for my personal or company profile?',
    a: 'Yes. We follow controlled daily activity limits and combine manual touchpoints with safe outreach protocols. Your profile authority and safety are considered throughout the campaign.',
  },
  {
    q: 'Do I need a LinkedIn Sales Navigator subscription for this service?',
    a: 'Having a Sales Navigator account is highly recommended because it allows advanced filtering to find decision makers by industry, company size, title, and location. These filters help us build focused prospect lists.',
  },
  {
    q: 'How soon can we expect booked meetings from your LinkedIn outreach campaigns?',
    a: 'Initial responses can begin after the prospect lists and campaigns are established. Consistent appointment setting and pipeline growth generally improve as the campaign is tested and optimized.',
  },
  {
    q: 'How do you write personalized messages that get high response rates?',
    a: 'We create multi touch message sequences tailored to the prospect\'s business context and potential needs. Our cold message strategy focuses on relevance and starting genuine conversations instead of using generic sales pitches.',
  },
  {
    q: 'Will your team manage the inbox responses, or do we handle them?',
    a: 'We offer full service outreach where we can manage prospect list building, connection requests, and initial reply management. When a prospect expresses interest in a demo or call, the qualified lead can be handed to your sales team.',
  },
  {
    q: 'How is LinkedIn outreach better than cold emailing for B2B leads?',
    a: 'LinkedIn outreach allows prospects to see your professional profile, network, and business context while you start a conversation. This can make targeted B2B prospecting more relationship focused than relying only on cold email.',
  },
]

export function LinkedinFaqAccordion() {
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
