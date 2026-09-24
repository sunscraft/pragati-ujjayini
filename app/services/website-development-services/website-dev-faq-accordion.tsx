'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'What is website development?',
    a: 'Website development is the process of building a website that works properly, looks professional, and gives visitors a smooth experience on any device.',
  },
  {
    q: 'What does a website development service include?',
    a: 'It typically includes planning, design, development, content integration, SEO setup, testing, and launch support.',
  },
  {
    q: 'How long does it take to build a business website?',
    a: 'A straightforward business website usually takes a few weeks from start to launch. E-commerce or custom-functionality projects take longer, depending on scope.',
  },
  {
    q: 'Do you build WordPress websites?',
    a: 'Yes. Pragati Ujjayini builds websites on WordPress so businesses can manage their content easily after launch.',
  },
  {
    q: 'Will the website work on mobile phones?',
    a: 'Yes. Every website built by Pragati Ujjayini is responsive and designed to work across mobile, tablet, and desktop screens.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Yes. Pragati Ujjayini can modernize an existing website\'s design, structure, and performance.',
  },
  {
    q: 'Can you build an e-commerce website?',
    a: 'Yes. E-commerce websites can include product pages, payment gateway integration, shopping cart functionality, and checkout.',
  },
  {
    q: 'Will my website be SEO-friendly?',
    a: 'Yes. Websites are built with clean structure, proper headings, and technical SEO foundations.',
  },
  {
    q: 'Can I update my website myself?',
    a: 'Yes, if the website is built on a CMS such as WordPress. You can manage text and image updates yourself, while structural changes may require developer support.',
  },
  {
    q: 'Do you provide website maintenance after launch?',
    a: 'Yes. Pragati Ujjayini offers ongoing maintenance, including updates, security checks, performance checks, and bug fixes.',
  },
  {
    q: 'How much does website development cost?',
    a: 'Website development cost depends on the website\'s size, complexity, functionality, content requirements, integrations, and maintenance needs.',
  },
  {
    q: 'Do you provide website development services in Ujjain?',
    a: 'Yes. Pragati Ujjayini provides website development services for businesses across Ujjain.',
  },
  {
    q: 'Do you provide website development services in Indore?',
    a: 'Yes. Pragati Ujjayini provides website development services for businesses in Indore.',
  },
]

export function WebsiteDevFaqAccordion() {
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
