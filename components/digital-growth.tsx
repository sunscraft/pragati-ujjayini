'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import {
  MapPin,
  MessageCircle,
  Search,
  Megaphone,
  Share2,
  Star,
  PenTool,
  Globe,
} from 'lucide-react'

// 1. Updated photos array to use absolute paths pointing directly to your public folder
const photos = [
  {
    src: '/images/Corporate Image 1 (1).png',
    alt: 'Smiling local shop owner in front of his open kirana store',
  },
  {
    src: '/images/Corporate Image 2 (3).png',
    alt: 'Customer using a smartphone to pay at a retail store counter',
  },
  {
    src: '/images/Shop 3.png',
    alt: 'Digital marketing team collaborating on laptops in an office',
  },
  {
    src: '/images/Shop owner Image 1 (2).png',
    alt: 'Marketing consultant meeting with a local business owner',
  },
]

const services = [
  {
    icon: Search,
    title: 'Google Business',
    desc: 'Rank on Google Maps and local search for your area.',
    tone: 'orange',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Marketing',
    desc: 'Reach customers directly where they spend their day.',
    tone: 'blue',
  },
  {
    icon: MapPin,
    title: 'Local SEO',
    desc: 'Get found by nearby buyers searching for you.',
    tone: 'orange',
  },
  {
    icon: Megaphone,
    title: 'Paid Advertising',
    desc: 'Targeted ads that bring measurable footfall.',
    tone: 'blue',
  },
  {
    icon: Share2,
    title: 'Social Branding',
    desc: 'Build a consistent, trusted brand presence online.',
    tone: 'orange',
  },
  {
    icon: Star,
    title: 'Review Growth',
    desc: 'Generate authentic 5-star reviews that convert.',
    tone: 'blue',
  },
  {
    icon: PenTool,
    title: 'Creative Content',
    desc: 'Photos, reels and posts crafted for your audience.',
    tone: 'orange',
  },
  {
    icon: Globe,
    title: 'Local Websites',
    desc: 'Fast, mobile-first websites that work for you.',
    tone: 'blue',
  },
]

export function DigitalGrowth() {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full bg-white text-zinc-900">
      <section id="services" ref={sectionRef} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 overflow-hidden">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes growth-fade-slide-right {
            0% { opacity: 0; transform: translateX(-40px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-growth-item {
            opacity: 0;
          }
          .growth-visible .animate-growth-item {
            animation: growth-fade-slide-right 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}} />

        <div className={`grid items-center gap-6 lg:grid-cols-2 ${isIntersecting ? 'growth-visible' : ''}`}>
          <div className="animate-growth-item" style={{ animationDelay: '0ms' }}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              What We Do
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Comprehensive Digital Growth
            </h2>
          </div>
          <p className="leading-relaxed text-zinc-600 animate-growth-item" style={{ animationDelay: '150ms' }}>
            A complete, hyper-local marketing toolkit designed to drive footfall
            and revenue for businesses rooted in their neighbourhood.
          </p>
        </div>

        {/* Photo Gallery Grid */}
        <div className={`mt-10 grid grid-cols-2 gap-4 ${isIntersecting ? 'growth-visible' : ''}`}>
          {photos.map((photo, index) => (
            <div
              key={index}
              className="animate-growth-item relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Services Grid Matrix */}
        <div className={`mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${isIntersecting ? 'growth-visible' : ''}`}>
          {services.map((service, index) => {
            const Icon = service.icon
            const isOrange = service.tone === 'orange'
            return (
              <article
                key={service.title}
                className="animate-growth-item rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                style={{ animationDelay: `${(index + 1) * 100 + 400}ms` }}
              >
                <div
                  className={`flex size-11 items-center justify-center rounded-xl ${isOrange
                    ? 'bg-brand-orange text-white'
                    : 'bg-brand-blue text-white'
                    }`}
                >
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-zinc-900">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                  {service.desc}
                </p>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}