'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'What are Local Google & Meta Ads?',
    a: 'Local Google and Meta Ads are hyper-targeted paid advertising campaigns tailored for local businesses. Google Ads put your business at the top when people actively search for your services ("near me" or in your city), while Meta Ads (Facebook and Instagram) visually showcase your offers, products, and services to people living within your specific neighborhood or city radius.',
  },
  {
    q: 'Which platform is better for my local business: Google Ads or Meta Ads?',
    a: 'Google Ads capture high-intent customers who are searching right now (e.g. "emergency plumber in Indore" or "best dentist near me"). Meta Ads build awareness, showcase visual products/services (e.g. clinics, restaurants, salons, retail, real estate), and generate affordable direct inquiries. Most successful local businesses use a hybrid approach to capture both ready-to-buy searchers and passive social browsers.',
  },
  {
    q: 'What is the minimum ad budget needed to get started?',
    a: 'For local campaigns in tier-2 and tier-3 cities like Ujjain and Indore, businesses can start testing with as little as ₹300 to ₹700 per day. As campaigns gather conversion data and identify top-performing keywords and audiences, you can scale the budget based on the return on ad spend (ROAS).',
  },
  {
    q: 'How quickly do Google and Meta Ads start generating customer inquiries?',
    a: 'Unlike organic SEO, which builds momentum over 3 to 6 months, paid campaigns can start driving direct phone calls, WhatsApp messages, and website form fills within 24 to 48 hours of launch.',
  },
  {
    q: 'How do you target customers within my specific service area or city?',
    a: 'We use geo-fencing and radius targeting. We can target people living in, or recently visited, specific pin codes, a 1km to 15km radius around your physical store, or entire cities like Ujjain, Indore, Dewas, and surrounding regions.',
  },
  {
    q: 'Can ads send leads directly to our WhatsApp number?',
    a: 'Yes! Click-to-WhatsApp ads on Meta and Google Call/WhatsApp extensions are our most popular service for Indian businesses. Potential customers can tap the ad and immediately initiate a live WhatsApp conversation with your sales team, complete with a pre-filled greeting message.',
  },
  {
    q: 'Why should I hire an agency instead of just hitting the "Boost Post" button?',
    a: 'The "Boost Post" button is designed by Meta to get quick vanity metrics (likes and views) without deep optimization. Professional ad management uses Meta Ads Manager and Google Ads Editor to set up conversion tracking, custom audiences, retargeting, negative keywords, A/B creative testing, and lead filtering — delivering 3x to 5x higher real business ROI.',
  },
  {
    q: 'Do you provide Local Ads services for businesses in Ujjain and Indore?',
    a: 'Yes, Pragati Ujjayini specializes in local digital growth for businesses across Ujjain, Indore, and Madhya Pradesh. We understand the local consumer mindset, language preferences (Hinglish/Hindi), and regional buying behavior.',
  },
  {
    q: 'How do you prevent wasted ad spend on irrelevant clicks?',
    a: 'On Google Ads, we continuously curate negative keyword lists to block irrelevant or competitor searches, use exact and phrase match types, and restrict ads to active business hours. On Meta, we refine interest and demographic exclusions so your ads only reach qualified prospects.',
  },
  {
    q: 'How do Local Ads work together with Local SEO and Google Business Profile?',
    a: 'They complement each other perfectly. Paid ads provide instant leads from day one while your Local SEO and Google Business Profile build long-term organic authority and rankings. Furthermore, searchers who see your brand on both paid ads and top map rankings trust you significantly more.',
  },
  {
    q: 'How do you track inquiries and measure performance?',
    a: 'We set up end-to-end conversion tracking for website form fills, click-to-call phone inquiries, and WhatsApp chat starts. We provide regular transparent reports explaining actual leads, cost-per-lead (CPL), and return on ad spend (ROAS) rather than confusing marketing jargon.',
  },
  {
    q: 'Who owns the ad account and creative assets?',
    a: 'You do. All campaigns, creatives, and ad accounts remain 100% your property. You maintain full admin ownership and transparency over every rupee spent on media platforms.',
  },
]

export function LocalAdsFaqAccordion() {
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
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 bg-[#FFFDFB]">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
