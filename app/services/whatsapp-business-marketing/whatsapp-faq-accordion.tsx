'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'Do you set up WhatsApp Business profiles?',
    a: 'Yes. We set up your business description, contact details, hours, and location correctly from the start.',
  },
  {
    q: 'Can you create a WhatsApp catalog?',
    a: 'Yes. We build a product or service catalog customers can browse directly on WhatsApp.',
  },
  {
    q: 'Do you provide WhatsApp Business API setup?',
    a: 'Yes, for businesses that need higher-volume communication and integrations.',
  },
  {
    q: 'Can you automate WhatsApp replies?',
    a: 'Yes. We set up greeting messages, auto-replies, away messages, and FAQ responses.',
  },
  {
    q: 'Can WhatsApp marketing generate leads?',
    a: 'Yes. We connect your other channels to WhatsApp and follow up on enquiries to convert conversations into leads.',
  },
  {
    q: 'Can WhatsApp be connected with Google Ads?',
    a: 'Yes. We can set up ad-to-WhatsApp campaigns so people can message you directly from your ads.',
  },
  {
    q: 'Can WhatsApp be connected with my website?',
    a: 'Yes. We can add WhatsApp buttons and chat options to your website.',
  },
  {
    q: 'Can you manage WhatsApp broadcast campaigns?',
    a: 'Yes. We manage promotional campaigns, offers, announcements, and reminders within WhatsApp\'s messaging policies.',
  },
  {
    q: 'Is WhatsApp marketing allowed for promotional messages?',
    a: 'Yes, when sent to customers who have given the required consent and in line with WhatsApp\'s messaging policies.',
  },
  {
    q: 'Do I need customer consent for WhatsApp marketing?',
    a: 'Yes. Promotional messages should only go to customers who have opted in.',
  },
  {
    q: 'How much does WhatsApp marketing cost?',
    a: 'Cost depends on your number of contacts, campaign frequency, automation needs, and whether API setup is required. We provide a plan based on your specific requirements.',
  },
  {
    q: 'How long does WhatsApp marketing setup take?',
    a: 'This depends on the scope, such as profile and catalog setup versus full API integration with automation and other systems.',
  },
  {
    q: 'Do you provide WhatsApp marketing services in Ujjain?',
    a: 'Yes. We work with businesses across Ujjain.',
  },
  {
    q: 'Do you provide WhatsApp marketing services in Indore?',
    a: 'Yes. We also work with businesses in Indore.',
  },
]

export function WhatsappFaqAccordion() {
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
                ? 'bg-gradient-to-r from-emerald-50/70 to-teal-50/40 border-emerald-300 shadow-sm'
                : 'bg-white border-emerald-100 hover:border-emerald-200'
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
                    isOpen ? 'text-emerald-600' : 'text-zinc-400'
                  }`}
                />
                <span className="text-sm sm:text-base font-extrabold text-zinc-900 leading-snug">
                  {faq.q}
                </span>
              </div>
              <div
                className={`size-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen
                    ? 'bg-emerald-600 text-white rotate-180'
                    : 'bg-emerald-100/80 text-emerald-700'
                }`}
              >
                <ChevronDown className="size-4 stroke-[2.5]" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-emerald-100">
                {faq.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
