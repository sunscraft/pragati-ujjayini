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

const socialLinks = [
  {
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
      </svg>
    ),
    href: 'https://www.facebook.com/profile.php?id=61585467067667',
    label: 'Facebook'
  },
  {
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    href: 'https://www.instagram.com/pragatiujjayini/',
    label: 'Instagram'
  },
  {
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: 'https://x.com/PUjjayini9150',
    label: 'Twitter / X'
  },
  {
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    href: 'https://www.linkedin.com/in/pragatiujjayini/',
    label: 'LinkedIn'
  },
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
            <div className="flex flex-row items-center gap-1.5 whitespace-nowrap">
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
              Ujjain India.
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-brand-blue" />
              +91 9202668977
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-brand-blue" />
              pragatiujjayini@gmail.com
            </li>
          </ul>

          {/* Social Links Block */}
          <div className="mt-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-orange/90">
              Follow Us
            </h3>
            <div className="mt-3 flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-brand-navy-foreground/60 transition-all duration-200 hover:scale-110 hover:text-brand-blue"
                  >
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </div>
          </div>
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