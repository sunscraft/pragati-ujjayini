'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'What is social media marketing?',
    a: 'Social media marketing is the process of using platforms like Instagram, Facebook, and WhatsApp to reach customers, build trust, and generate enquiries for a business.',
  },
  {
    q: 'What does social media marketing include?',
    a: 'It includes strategy, content planning, content creation, publishing, community management, paid advertising, lead generation, and performance reporting.',
  },
  {
    q: 'Which social media platforms do you manage?',
    a: 'We manage Instagram, Facebook, and WhatsApp, and recommend the right mix based on your audience and business goals.',
  },
  {
    q: 'Do you provide Instagram marketing services?',
    a: 'Yes. We manage Instagram posts, reels, stories, engagement, and profile growth.',
  },
  {
    q: 'Do you provide Facebook marketing services?',
    a: 'Yes. We handle Facebook posts, community engagement, and promotional campaigns.',
  },
  {
    q: 'Do you provide WhatsApp marketing services?',
    a: 'Yes. We manage WhatsApp Business marketing for direct customer communication and enquiry support.',
  },
  {
    q: 'Do you create social media posts and reels?',
    a: 'Yes. We create graphics, posts, reels, short videos, and captions suited to your brand.',
  },
  {
    q: 'Do you manage social media accounts?',
    a: 'Yes. We handle scheduling, publishing, comments, messages, and community management.',
  },
  {
    q: 'Do you provide paid social media advertising?',
    a: 'Yes. We run Meta Ads campaigns for awareness, engagement, and lead generation.',
  },
  {
    q: 'Can social media marketing generate leads?',
    a: 'Yes. We build campaigns designed to move people from engagement to actual enquiries.',
  },
  {
    q: 'How long does social media marketing take to show results?',
    a: 'Engagement and brand consistency usually build within the first couple of months. Lead and enquiry growth depends on your strategy, industry, and whether paid advertising is included.',
  },
  {
    q: 'How much do social media marketing services cost?',
    a: 'Cost depends on the number of platforms, content volume, video requirements, and whether paid advertising is included. We provide a plan based on your specific needs.',
  },
  {
    q: 'Do you provide social media marketing services in Ujjain?',
    a: 'Yes. We manage social media marketing for businesses across Ujjain.',
  },
  {
    q: 'Do you provide social media marketing services in Indore?',
    a: 'Yes. We also work with businesses in Indore.',
  },
]

export function SocialMediaFaqAccordion() {
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
