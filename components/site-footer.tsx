'use client' // Added to ensure Next.js client-side asset hydration works perfectly

import Image from 'next/image'
import Link from 'next/link' // Changed from <a> tags to Next.js native Links for better hydration
import { MapPin, Phone, Mail } from 'lucide-react'

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Why Choose Us', href: '/#process' },
  { label: 'Free Consultation', href: '/#contact' },
]

const serviceLinks = [
  { label: 'Google Business Profile', href: '/services' },
  { label: 'WhatsApp Marketing', href: '/services' },
  { label: 'Local SEO', href: '/services' },
  { label: 'Web Development', href: '/services' },
]

export function SiteFooter() {
  return (
    <footer className="bg-brand-navy text-brand-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1 flex flex-col justify-start">

          {/* Brand Logo Identity */}
          <Link href="/" className="flex items-center gap-3.5 text-lg font-bold group w-full dynamic-logo-wrapper">
            {/* Added bg-white to ensure the logo is visible even on dark navy backgrounds */}
            <div className="relative h-16 w-16 overflow-hidden flex items-center justify-center bg-white rounded-xl p-1.5 shrink-0 shadow-sm">
              <Image
                src="/images/logo.png"
                alt="Pragati Ujjayini Logo"
                width={64}
                height={64}
                priority // Added priority to force instant asset loading
                className="object-contain"
              />
            </div>
            <div className="flex flex-row items-center gap-1.5解决方案 whitespace-nowrap">
              <span className="font-heading text-xl sm:text-2xl font-black text-brand-orange tracking-tight">Pragati</span>
              <span className="font-heading text-xl sm:text-2xl font-black text-brand-blue tracking-tight">Ujjayini</span>
            </div>
          </Link>

          <p className="mt-4 text-sm leading-relaxed text-brand-navy-foreground/70">
            Empowering Bharat&apos;s digital future, one street at a time.
            High-end digital growth strategies built for India&apos;s local
            businesses.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-brand-navy-foreground/70 transition-colors hover:text-brand-navy-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
            Services
          </h2>
          <ul className="mt-4 space-y-2">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-brand-navy-foreground/70 transition-colors hover:text-brand-navy-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
            Contact Info
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-brand-navy-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-blue" />
              1st Floor, Mahakal Vanijya Kendra, Nanakheda, Ujjain.
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-brand-blue" />
              +91 90000 00000
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-brand-blue" />
              pragatiujjayini@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-brand-navy-foreground/60 sm:px-6">
          &copy; {new Date().getFullYear()} Pragati Ujjayini. All rights
          reserved. Empowering Bharat&apos;s digital future.
        </p>
      </div>
    </footer>
  )
}