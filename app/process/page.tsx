"use client"


import React, { useState, useEffect, useRef } from 'react'
import { CtaBanner } from '@/components/cta-banner'
import {
    Search,
    UserCheck,
    BarChart3,
    Target,
    Layers,
    Zap,
    MapPin,
    ShoppingBag,
    Megaphone,
    Star,
    RefreshCw,
    ShieldCheck,
    PhoneCall,
    Users,
    ArrowRight,
    Sparkles,
    ChevronRight
} from 'lucide-react'

// Methodology Step Data
const methodologySteps = [
    { id: '01', icon: Search, title: 'Market Research', desc: "We study your city, your locality, and your category — who's searching, what they're searching for, and who's already winning that search." },
    { id: '02', icon: UserCheck, title: 'Understand Your Business', desc: 'We learn how you actually operate: your offerings, your customers, your busiest hours, your biggest bottlenecks. No cookie-cutter templates.' },
    { id: '03', icon: BarChart3, title: 'Analyse Requirements', desc: 'We map every possible channel — Google, Maps, WhatsApp, Instagram, SEO, ads — and identify exactly which ones will move the needle for your business, not businesses in general.' },
    { id: '04', icon: Target, title: 'Understand Your Goal', desc: 'More footfall? More bookings? More repeat customers? We build backward from what "success" actually looks like to you.' },
    { id: '05', icon: Layers, title: 'Build the Strategy', desc: 'We turn research into a working plan — channels, budget split, content calendar, and timelines — built around what you can sustain, not an unaffordable wishlist.' },
    { id: '06', icon: Zap, title: 'Execute & Deliver', desc: 'We set up, launch, and manage everything as one connected system. You get regular reporting so you always know what\'s working and why.' },
]

// Roadmap Content Map
const roadmaps = {
    product: {
        title: 'Product-Based Roadmap',
        subtitle: 'For retail shops, kirana stores, boutiques, showrooms, D2C brands, and any business where the customer is buying something off the shelf or from a catalog.',
        steps: [
            { num: '1', icon: MapPin, title: 'Get Found on Maps & Search', text: 'Google Business Profile optimisation and Local SEO so you appear when someone nearby searches for what you sell.' },
            { num: '2', icon: ShoppingBag, title: 'Build Your Digital Shelf', text: 'WhatsApp Business catalog and social storefronts so people can browse your products before they even walk in.' },
            { num: '3', icon: Megaphone, title: 'Drive Footfall with Geo-Targeted Ads', text: 'Paid ads targeted to people within your actual buying radius — designed to bring feet through the door, not just likes.' },
            { num: '4', icon: Star, title: 'Build Buying Trust with Reviews', text: 'Authentic 5-star reviews and social proof, because product buyers check reviews before they check your shelf.' },
            { num: '5', icon: RefreshCw, title: 'Bring Them Back', text: 'WhatsApp broadcasts, offers, and retargeting to turn one-time buyers into repeat customers.' },
        ],
        fits: 'Retail, Real Estate listings, Hospitality (dine-in/takeaway), parts of Education (course/kit sales)'
    },
    service: {
        title: 'Service-Based Roadmap',
        subtitle: 'For clinics, coaching centres, salons, consultants, real estate agents, and any business where the customer is booking your time or expertise.',
        steps: [
            { num: '1', icon: ShieldCheck, title: 'Build a Trust-First Presence', text: 'A professional Google Business Profile, website, and social identity that answers "can I trust this person/place?" in five seconds.' },
            { num: '2', icon: PhoneCall, title: 'Create a Simple Booking Funnel', text: 'Lead forms, WhatsApp chat, and click-to-call set up so an interested customer can enquire or book in one tap.' },
            { num: '3', icon: Sparkles, title: 'Show Your Expertise', text: 'Content, reels, and posts that position you as the obvious choice — not just another option in the category.' },
            { num: '4', icon: Target, title: 'Run Lead-Focused Ads', text: 'Ads optimised for enquiries and bookings, not vanity reach — every rupee tracked back to a lead.' },
            { num: '5', icon: Users, title: 'Turn Clients into Referrals', text: 'Review generation and referral systems, because service businesses grow fastest on word-of-mouth and trust.' },
        ],
        fits: 'Healthcare, Education (coaching/consulting), Real Estate (agent services), B2B & Trade, parts of Hospitality (events/catering)'
    }
}

// Matrix Checker Data
const sectorMatrix = [
    { sector: 'Retail', type: 'Product-Based', logic: 'Customers buy items directly', color: 'bg-orange-500/10 text-brand-orange' },
    { sector: 'Healthcare', type: 'Service-Based', logic: 'Customers book appointments / trust', color: 'bg-blue-500/10 text-blue-600' },
    { sector: 'Hospitality', type: 'Both', logic: 'Product (menu/rooms) + Service (experience)', color: 'bg-purple-500/10 text-purple-600' },
    { sector: 'Education', type: 'Service-Based', logic: 'Customers enrol based on trust in outcomes', color: 'bg-blue-500/10 text-blue-600' },
    { sector: 'Real Estate', type: 'Both', logic: 'Product (listings) + Service (agent trust)', color: 'bg-purple-500/10 text-purple-600' },
    { sector: 'B2B & Trade', type: 'Service-Based', logic: 'Relationship and credibility-led sales', color: 'bg-blue-500/10 text-blue-600' },
]

// Reusable Scroll Animation Hook for components
function useScrollAnimation() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0')
                    entry.target.classList.remove('opacity-0', 'translate-y-8')
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return ref
}

export default function Page() {
    const [activeRoadmap, setActiveRoadmap] = useState<'product' | 'service'>('product')

    const heroRef = useScrollAnimation()
    const roadmapRef = useScrollAnimation()
    const methodologyRef = useScrollAnimation()
    const matrixRef = useScrollAnimation()

    return (
        <div className={`min-h-screen bg-brand-cream text-brand-navy font-sans selection:text-white overflow-hidden transition-colors duration-500 ${activeRoadmap === 'product' ? 'selection:bg-brand-orange' : 'selection:bg-blue-600'}`}>

            {/* SECTION 1: HERO */}
            <section ref={heroRef} className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <p className={`text-xs font-semibold uppercase tracking-[0.25em] drop-shadow-sm transition-colors duration-500 ${activeRoadmap === 'product' ? 'text-brand-orange' : 'text-blue-600'}`}>
                        Our Process
                    </p>
                    <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight transition-transform duration-700 hover:scale-[1.01]">
                        Every Business Grows Differently — <span className={`transition-colors duration-500 ${activeRoadmap === 'product' ? 'text-brand-orange' : 'text-blue-600'}`}>Here's Your Roadmap</span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Whether you sell products off a shelf or deliver a service through trust and expertise, growth doesn't happen the same way twice. Choose your business type below and see exactly how we'll take you from invisible to in-demand.
                    </p>
                    <div className="pt-4">
                        <a href="#roadmap-toggle" className={`inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 ${activeRoadmap === 'product' ? 'bg-brand-navy hover:bg-brand-orange' : 'bg-brand-navy hover:bg-blue-600'}`}>
                            See My Roadmap <ArrowRight className="size-4 animate-pulse" />
                        </a>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE INTERACTIVE ROADMAP TOGGLE */}
            <section id="roadmap-toggle" ref={roadmapRef} className="py-16 bg-white/60 backdrop-blur-md border-y border-border/60 relative opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    <div className="text-center mb-12">
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight mb-2">Built For How You Sell</h2>
                        <p className="text-muted-foreground text-sm max-w-xl mx-auto">A product-based business wins on immediate visibility. A service-based business wins on absolute credibility.</p>

                        {/* Native Balanced Fixed-Width Slider Wrapper Container */}
                        <div className="inline-flex bg-brand-cream/80 border p-1 rounded-full mt-8 shadow-inner relative z-0">
                            <button
                                onClick={() => setActiveRoadmap('product')}
                                className={`relative z-10 w-40 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ease-out ${activeRoadmap === 'product' ? 'text-white' : 'text-brand-navy/70'}`}
                            >
                                🛍 Product-Based
                            </button>
                            <button
                                onClick={() => setActiveRoadmap('service')}
                                className={`relative z-10 w-40 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ease-out ${activeRoadmap === 'service' ? 'text-white' : 'text-brand-navy/70'}`}
                            >
                                🩺 Service-Based
                            </button>

                            {/* Clean Math-Driven Sliding Switch Indicator */}
                            <div
                                className={`absolute top-1 bottom-1 left-1 w-40 rounded-full shadow-md transition-all duration-300 ease-out -z-10 ${activeRoadmap === 'product'
                                    ? 'bg-brand-orange translate-x-0'
                                    : 'bg-blue-600 translate-x-full'
                                    }`}
                            />
                        </div>
                    </div>

                    {/* Smooth Fade Transition for Dynamic Panels */}
                    <div className="grid lg:grid-cols-12 gap-8 items-start min-h-[400px]">
                        <div className="lg:col-span-5 space-y-4 bg-brand-cream/30 p-6 rounded-3xl border border-border/40">
                            <div className={`p-2 inline-block rounded-xl font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-500 ${activeRoadmap === 'product' ? 'bg-brand-orange/10 text-brand-orange' : 'bg-blue-500/10 text-blue-600'}`}>
                                Custom Blueprint
                            </div>
                            <h3 className="font-heading text-2xl font-bold tracking-tight text-brand-navy transition-all duration-300">
                                {roadmaps[activeRoadmap].title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {roadmaps[activeRoadmap].subtitle}
                            </p>
                            <div className={`p-4 rounded-2xl bg-white border text-xs text-brand-navy/80 mt-6 shadow-sm transition-colors duration-500 ${activeRoadmap === 'product' ? 'border-brand-orange/10' : 'border-blue-500/10'}`}>
                                <span className={`block mb-1 font-bold transition-colors duration-500 ${activeRoadmap === 'product' ? 'text-brand-orange' : 'text-blue-600'}`}>Typically fits:</span>
                                {roadmaps[activeRoadmap].fits}
                            </div>
                        </div>

                        {/* List with CSS Cascade Hover States */}
                        <div className="lg:col-span-7 space-y-4">
                            {roadmaps[activeRoadmap].steps.map((step, idx) => {
                                const IconComponent = step.icon
                                return (
                                    <div
                                        key={`${activeRoadmap}-${idx}`}
                                        className={`flex gap-4 p-5 bg-white border border-border/80 shadow-sm rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md group ${activeRoadmap === 'product' ? 'hover:border-brand-orange/20' : 'hover:border-blue-500/20'}`}
                                    >
                                        <div className={`size-10 shrink-0 flex items-center justify-center rounded-xl bg-brand-cream font-heading font-extrabold text-sm border transition-all duration-300 ${activeRoadmap === 'product' ? 'text-brand-orange border-brand-orange/10 group-hover:bg-brand-orange group-hover:text-white' : 'text-blue-600 border-blue-500/10 group-hover:bg-blue-600 group-hover:text-white'}`}>
                                            <IconComponent className="size-4" />
                                        </div>
                                        <div>
                                            <h4 className={`font-heading font-bold text-brand-navy text-base flex items-center gap-2 transition-colors duration-200 ${activeRoadmap === 'product' ? 'group-hover:text-brand-orange' : 'group-hover:text-blue-600'}`}>
                                                <span className={`text-xs font-mono transition-colors duration-500 ${activeRoadmap === 'product' ? 'text-brand-orange/60' : 'text-blue-500/60'}`}>0{step.num}</span>
                                                {step.title}
                                            </h4>
                                            <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                                                {step.text}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 3: METHODOLOGY ENGINE */}
            <section ref={methodologyRef} className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className={`text-xs font-semibold uppercase tracking-[0.25em] mb-3 transition-colors duration-500 ${activeRoadmap === 'product' ? 'text-brand-orange' : 'text-blue-600'}`}>Our Methodology</p>
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
                        The System Behind Every Success Story
                    </h2>
                    <p className="text-muted-foreground mt-4 text-sm">
                        Before we touch a single ad or post, we go through the same disciplined process for every business we take on — regardless of size, sector, or budget.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {methodologySteps.map((step, idx) => {
                        const Icon = step.icon
                        return (
                            <div
                                key={step.id}
                                className={`bg-white border border-border/60 p-8 rounded-3xl relative overflow-hidden group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${activeRoadmap === 'product' ? 'hover:border-brand-orange/30' : 'hover:border-blue-500/30'}`}
                                style={{ transitionDelay: `${idx * 50}s` }}
                            >
                                {/* ENHANCED BACKGROUND NUMBER */}
                                <div className={`absolute -top-6 right-2 font-heading font-black text-[7.5rem] leading-none select-none pointer-events-none transition-all duration-500 text-brand-navy/[0.04] group-hover:scale-105 ${activeRoadmap === 'product' ? 'group-hover:text-brand-orange/[0.08]' : 'group-hover:text-blue-600/[0.08]'}`}>
                                    {step.id}
                                </div>

                                <div className={`size-12 rounded-2xl bg-brand-cream flex items-center justify-center mb-6 transition-all duration-300 transform group-hover:rotate-6 relative z-10 ${activeRoadmap === 'product' ? 'text-brand-orange group-hover:bg-brand-orange group-hover:text-white' : 'text-blue-600 group-hover:bg-blue-600 group-hover:text-white'}`}>
                                    <Icon className="size-5" />
                                </div>
                                <h3 className={`font-heading text-lg font-bold text-brand-navy mb-3 relative z-10 transition-colors duration-300 ${activeRoadmap === 'product' ? 'group-hover:text-brand-orange' : 'group-hover:text-blue-600'}`}>
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                                    {step.desc}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* SECTION 4: THE QUICK CHECK MATRIX TABLE */}
            <section ref={matrixRef} className={`py-16 text-white relative rounded-[2.5rem] max-w-6xl mx-auto my-12 px-4 sm:px-8 overflow-hidden shadow-2xl transition-all opacity-0 translate-y-8 duration-1000 ease-out ${activeRoadmap === 'product' ? 'bg-brand-navy hover:shadow-brand-orange/5' : 'bg-brand-navy hover:shadow-blue-500/5'}`}>
                <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-pulse transition-colors duration-500 ${activeRoadmap === 'product' ? 'bg-brand-orange/10' : 'bg-blue-500/10'}`} />

                <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
                    <span className={`text-xs font-mono font-semibold tracking-widest bg-white/10 px-3 py-1 rounded-full border transition-colors duration-500 ${activeRoadmap === 'product' ? 'text-brand-orange border-brand-orange/20' : 'text-blue-400 border-blue-500/20'}`}>QUICK CHECK</span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold mt-4">Most Local Businesses Are a Mix — We'll Tell You Which Fits</h2>
                </div>

                <div className="max-w-4xl mx-auto overflow-hidden border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-md relative z-10">
                    <div className={`grid grid-cols-3 bg-white/5 p-4 border-b border-white/10 text-xs font-bold uppercase tracking-wider font-mono transition-colors duration-500 ${activeRoadmap === 'product' ? 'text-brand-orange' : 'text-blue-400'}`}>
                        <div>Your Sector</div>
                        <div>Usually</div>
                        <div>Why</div>
                    </div>
                    <div className="divide-y divide-white/5">
                        {sectorMatrix.map((item, index) => (
                            <div key={index} className="grid grid-cols-3 p-4 text-sm items-center hover:bg-white/[0.04] transition-colors group">
                                <div className={`font-bold text-white/90 transition-colors ${activeRoadmap === 'product' ? 'group-hover:text-brand-orange' : 'group-hover:text-blue-400'}`}>{item.sector}</div>
                                <div>
                                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${item.color} bg-white/10 transform transition-transform group-hover:scale-105`}>
                                        {item.type}
                                    </span>
                                </div>
                                <div className="text-white/60 text-xs sm:text-sm">{item.logic}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-10 relative z-10">
                    <p className="text-sm text-white/70 mb-4">Not sure where you fall? Tell us about your business and we'll map your exact roadmap on a free call.</p>
                    <button className={`inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-lg transform hover:-translate-y-0.5 ${activeRoadmap === 'product' ? 'bg-brand-orange' : 'bg-blue-600'}`}>
                        Get My Free Roadmap <ChevronRight className="size-4" />
                    </button>
                </div>
            </section>
            <CtaBanner />

        </div>
    )
}