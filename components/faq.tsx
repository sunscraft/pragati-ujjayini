'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FAQItem {
    question: string
    answer: string
}

const faqData: FAQItem[] = [
    {
        question: "Why choose a regional specialist over a big firm from a Tier-01 metro?",
        answer: "Metro agencies often use 'one-size-fits-all' strategies designed for global corporations. We specialize in the unique consumer behavior of Tier 02 and Tier 03 cities. We understand the specific district-level nuances—from local search habits to regional trust factors. We don’t guess; we use regional data to help you dominate your specific market."
    },
    {
        question: "How is Pragati Ujjayini different from just posting on Instagram?",
        answer: "Posting is only half the battle. We build Digital Infrastructure. Whether it is setting up automated WhatsApp Catalogs for manufacturers or Direct Booking systems for local services, we ensure your presence leads to a transaction, not just a 'like.' We focus on ROI and systems, not vanity metrics."
    },
    {
        question: "Can you help my business scale beyond my home city?",
        answer: "Absolutely. Our mission is to take regional excellence to a national audience. Whether you are an artisan in a small town or a manufacturer in a rising industrial hub, we design the systems—like high-conversion SEO and E-commerce funnels—to make your brand a household name across India."
    },
    {
        question: "Will I have to keep paying high commissions to third-party aggregators?",
        answer: "Our goal is to make you digitally independent. We help you bypass expensive middlemen and high-commission platforms by strengthening your direct Google authority and WhatsApp sales channels. We ensure that when a customer finds you, the profit stays with you."
    },
    {
        question: "How soon can I expect to see real results?",
        answer: "While SEO is a long-term asset, our localized lead-generation strategies for emerging markets often show a measurable impact within the first 30 to 60 days. We provide transparent, data-backed reporting so you can see exactly how your digital footprint is converting into revenue."
    }
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const [isIntersecting, setIsIntersecting] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    // Scroll trigger observer setup
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true)
                    observer.unobserve(entry.target) // Stop observing once it animates in
                }
            },
            { threshold: 0.15 } // Triggers when 15% of the section is visible
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        /* FIXED: Replaced bg-brand-cream/30 with an explicit warm off-white cream color hex that won't flip dark on mobile */
        <section id="faq" ref={sectionRef} className="bg-[#FAF9F6]/50 py-16 sm:py-24 overflow-hidden">
            {/* Embedded styles for reveal transitions */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes faq-slide-up {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-faq-item {
                    opacity: 0;
                }
                .faq-visible .animate-faq-item {
                    animation: faq-slide-up 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
                }
            `}} />

            <div className={`mx-auto max-w-4xl px-4 sm:px-6 ${isIntersecting ? 'faq-visible' : ''}`}>

                {/* Header Section */}
                <div className="text-center animate-faq-item" style={{ animationDelay: '0ms' }}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3 py-1 text-xs font-medium text-brand-blue">
                        <HelpCircle className="size-3.5" />
                        Have Questions?
                    </span>
                    {/* FIXED: Swapped text-foreground to text-zinc-900 to safeguard layout color */}
                    <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* Accordion List container */}
                <div className="mt-12 space-y-4">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index
                        return (
                            <div
                                key={index}
                                /* FIXED: Forced background to bg-white and set exact light borders */
                                className="animate-faq-item overflow-hidden rounded-2xl border border-zinc-200/80 bg-white transition-all duration-200 shadow-sm"
                                style={{ animationDelay: `${(index + 1) * 100}ms` }} // Staggers each question element by 100ms
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    /* FIXED: Set exact subtle grey layout hover backgrounds */
                                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium hover:bg-zinc-50/50"
                                >
                                    {/* FIXED: Swapped text-foreground to a stable text-zinc-800 */}
                                    <span className="text-base font-semibold sm:text-lg text-zinc-800">{item.question}</span>
                                    {/* FIXED: Swapped text-muted-foreground to text-zinc-400 */}
                                    <ChevronDown className={`size-5 shrink-0 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-orange' : ''}`} />
                                </button>
                                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        {/* FIXED: Rewrote texts with text-zinc-600 and matching bright structural backgrounds inside open cards */}
                                        <p className="px-6 pb-5 text-sm leading-relaxed text-zinc-600 sm:text-base border-t border-zinc-100 pt-3 bg-zinc-50/30">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}