'use client'

import { useEffect, useState, useRef } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PricingTier {
    name: string
    planName: string
    description: string
    price: string
    features: string[]
    isPopular?: boolean
    buttonText: string
}

const pricingData: PricingTier[] = [
    {
        name: "Local Hero",
        planName: "Plan A",
        description: "Essential visibility setup perfect for local storefronts and professionals.",
        price: "₹5,000",
        buttonText: "Get Started With Plan A",
        features: [
            "Google Business Profile",
            "WhatsApp Business Setup",
            "Local Keyword Research",
            "Basic Social Media Posts"
        ]
    },
    {
        name: "Market Leader",
        planName: "Plan B",
        description: "Advanced systems for expanding businesses seeking dominant local reach.",
        price: "₹15,000",
        isPopular: true,
        buttonText: "Grow with Plan B",
        features: [
            "Complete Brand Kit & Logos",
            "Lead Nurture Automation",
            "SMS/WhatsApp Campaigns",
            "Monthly Performance Reports"
        ]
    },
    {
        name: "Empire Builder",
        planName: "Plan C",
        description: "Full-scale marketing infrastructure built to establish dominant market control.",
        price: "₹25,000+",
        buttonText: "Build Your Empire",
        features: [
            "Custom Landing Pages",
            "Google & Meta Ads",
            "CRM Integration",
            "Dedicated Account Manager"
        ]
    }
]

export function Pricing() {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true)
                    observer.unobserve(entry.target) // Animate once
                }
            },
            { threshold: 0.1 } // Triggers when 10% of the section enters view
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section id="pricing" ref={containerRef} className="bg-background py-16 sm:py-24 overflow-hidden">
            {/* Custom embedded style tags for slower, smoother view transitions */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes pricing-fade-slide-up {
                    0% { opacity: 0; transform: translateY(50px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-pricing-item {
                    opacity: 0;
                }
                .pricing-visible .animate-pricing-item {
                    /* Slowed down to 1.2s with a sleek out-expo easing curve */
                    animation: pricing-fade-slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}} />

            <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${isIntersecting ? 'pricing-visible' : ''}`}>

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto animate-pricing-item" style={{ animationDelay: '0ms' }}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-xs font-medium text-brand-orange">
                        Investment Plans
                    </span>
                    <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                        Flexible Pricing for Growth
                    </h2>
                    <p className="mt-4 text-muted-foreground text-base sm:text-lg">
                        Choose an investment roadmap that matches your scaling goals, tailored precisely to secure high-intent customers.
                    </p>
                </div>

                {/* Pricing Matrix Layout */}
                <div className="mt-16 grid gap-8 lg:grid-cols-3 items-stretch">
                    {pricingData.map((tier, index) => (
                        <div
                            key={index}
                            className={`animate-pricing-item relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${tier.isPopular
                                ? 'bg-brand-navy text-brand-navy-foreground border-2 border-brand-orange shadow-xl lg:-translate-y-2'
                                : 'bg-brand-cream/40 border border-muted/60 text-foreground'
                                }`}
                            /* Deliberate 200ms stagger offset between each individual column layout card */
                            style={{ animationDelay: `${(index + 1) * 200}ms` }}
                        >
                            {/* Highlight Badge for Popular/Middle Tier */}
                            {tier.isPopular && (
                                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-orange px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-orange-foreground">
                                    Most Popular
                                </span>
                            )}

                            {/* Package Identification */}
                            <div className="mb-6">
                                <span className={`text-xs font-bold uppercase tracking-widest ${tier.isPopular ? 'text-brand-orange' : 'text-brand-blue'}`}>
                                    {tier.name}
                                </span>
                                <h3 className="mt-2 text-xl font-bold tracking-tight">{tier.planName}</h3>
                                <p className={`mt-3 text-sm leading-relaxed ${tier.isPopular ? 'text-brand-navy-foreground/80' : 'text-muted-foreground'}`}>
                                    {tier.description}
                                </p>
                            </div>

                            {/* Financial Breakdown */}
                            <div className="mb-8 flex items-baseline gap-1 border-b border-muted/20 pb-6">
                                <span className="text-4xl font-extrabold tracking-tight">{tier.price}</span>
                                <span className={`text-sm font-medium ${tier.isPopular ? 'text-brand-navy-foreground/70' : 'text-muted-foreground'}`}>
                                    /Month
                                </span>
                            </div>

                            {/* Deliverables / Matrix Rows */}
                            <ul className="space-y-4 mb-8 flex-1">
                                {tier.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-3 text-sm leading-snug">
                                        <Check className={`size-4 mt-0.5 shrink-0 ${tier.isPopular ? 'text-brand-orange' : 'text-brand-blue'}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Action Funnel Target */}
                            <Button
                                nativeButton={false}
                                render={<a href="/contact" />}
                                className={`w-full h-11 rounded-full font-semibold transition-colors ${tier.isPopular
                                    ? 'bg-brand-orange text-brand-orange-foreground [a]:hover:bg-brand-orange/90'
                                    : 'bg-brand-blue text-brand-blue-foreground [a]:hover:bg-brand-blue/90'
                                    }`}
                            >
                                {tier.buttonText}
                            </Button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}