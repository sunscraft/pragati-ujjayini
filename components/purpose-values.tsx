'use client'

import { useEffect, useState, useRef } from 'react'
import { Rocket, Eye } from 'lucide-react'

export function PurposeValues() {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.unobserve(entry.target) // Trigger once
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="purpose" ref={containerRef} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 overflow-hidden w-full bg-background text-foreground">

      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
          Who We Are
        </p>
        {/* FIXED: Added text-brand-navy to keep heading bright and clean across all screen sizes */}
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl text-brand-navy">
          Our Purpose &amp; Values
        </h2>
        <div className="mx-auto mt-4 flex items-center justify-center gap-1">
          <span className="h-1 w-10 rounded-full bg-brand-orange" />
          <span className="h-1 w-4 rounded-full bg-brand-blue" />
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {/* Left Component: Slides Left to Right */}
        {/* FIXED: Swapped out bg-card for explicit bg-white and forced clean dark text styling */}
        <article
          className={`rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-1000 ease-out transform
            ${isIntersecting
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-20'
            }`}
        >
          <div className="flex size-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
            <Rocket className="size-6" />
          </div>
          <h3 className="mt-5 font-heading text-xl font-bold text-brand-navy">Our Mission</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            To bridge the digital divide for Bharat&apos;s local merchants by
            providing accessible, effective, and results-driven digital
            presence strategies. We don&apos;t just make profiles — we build
            brands.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Our goal is to ensure that the small streets and lanes in Tier-2
            and Tier-3 cities have the same digital opportunity as a top brand
            in Delhi.
          </p>
        </article>

        {/* Right Component: Slides Right to Left */}
        {/* FIXED: Changed text color reference to solid white to override system theme conversions on mobile devices */}
        <article
          className={`rounded-2xl border border-brand-blue bg-brand-blue p-8 text-white shadow-sm transition-all duration-1000 ease-out transform
            ${isIntersecting
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-20'
            }`}
        >
          <div className="flex size-12 items-center justify-center rounded-xl bg-white/15 text-white">
            <Eye className="size-6" />
          </div>
          <h3 className="mt-5 font-heading text-xl font-bold text-white">Our Vision</h3>
          <p className="mt-3 leading-relaxed text-white/90">
            To become the primary catalyst for a digital revolution in
            India&apos;s growing cities. We envision a future where every
            chaiwala, doctor, clinic, and local eatery features the global
            economy.
          </p>
          <p className="mt-3 leading-relaxed text-white/90">
            We strive to be the most trusted digital partner for the
            &quot;Atmanirbhar Bharat&quot;, creating a landscape where brand
            quality, growth, and visibility through innovation and growth.
          </p>
        </article>
      </div>
    </section>
  )
}