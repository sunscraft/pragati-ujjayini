'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'What graphic design services do you provide?',
    a: 'We provide logo design, brand identity design, social media design, marketing and promotional design, website graphics, print design, packaging design, Google Business Profile graphics, and custom design work.',
  },
  {
    q: 'Do you create social media graphics?',
    a: 'Yes. We design Instagram posts, Facebook creatives, WhatsApp status designs, and promotional graphics.',
  },
  {
    q: 'Can you design brochures, flyers, and pamphlets?',
    a: 'Yes. We design flyers, pamphlets, posters, and other promotional materials.',
  },
  {
    q: 'Can you create graphics for my website?',
    a: 'Yes. We design website banners, icons, and other visual assets for your website.',
  },
  {
    q: 'How long does graphic design take?',
    a: 'Timelines depend on the design type and complexity. Simple designs are usually quicker, while complete brand identity work takes longer.',
  },
  {
    q: 'How much do graphic design services cost?',
    a: 'Cost depends on the type of design, number of deliverables, and complexity. We provide a quote based on your specific requirements.',
  },
  {
    q: 'Can you provide ongoing graphic design support?',
    a: 'Yes. We offer ongoing design support for businesses that need regular creatives, not just one-time projects.',
  },
]

export function GraphicDesignFaqAccordion() {
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
                ? 'bg-gradient-to-r from-orange-50/70 to-amber-50/40 border-orange-300 shadow-sm'
                : 'bg-white border-orange-100 hover:border-orange-200'
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
                    ? 'bg-orange-500 text-white rotate-180'
                    : 'bg-orange-100/80 text-orange-700'
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
