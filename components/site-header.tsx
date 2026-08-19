'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    label: 'Google Business Profile & Management',
    href: '/gmb-optimization-service',
  },
  {
    label: 'Local SEO',
    href: '/services/local-seo',
  },
  {
    label: 'Website Design & Development',
    href: '/services/website-design-development',
  },
  {
    label: 'Social Media Marketing',
    href: '/services/social-media-marketing',
  },
  {
    label: 'Graphic Designing',
    href: '/services/graphic-designing',
  },
  {
    label: 'Local Google & Meta Ads',
    href: '/services/local-google-meta-ads',
  },
  {
    label: 'WhatsApp Business Marketing',
    href: '/services/whatsapp-business-marketing',
  },
  {
    label: 'Local Business Listings & Directories',
    href: '/services/local-business-listings',
  },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside on desktop
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-24 items-center justify-between px-5 sm:px-8 max-w-6xl">
        {/* Brand Logo Identity */}
        <Link href="/" className="flex items-center gap-3.5 text-lg font-bold shrink-0 group">
          <div className="relative h-16 w-16 overflow-hidden flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Pragati Ujjayini Logo"
              width={64}
              height={64}
              priority
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-row items-center gap-1.5 whitespace-nowrap">
            <span className="font-heading text-xl sm:text-2xl font-black text-brand-orange tracking-tight">
              Pragati
            </span>
            <span className="font-heading text-xl sm:text-2xl font-black text-brand-blue tracking-tight">
              Ujjayini
            </span>
          </div>
        </Link>

        {/* Primary Desktop Navigation Links Bar */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-brand-orange"
          >
            About
          </Link>

          {/* Desktop Dropdown for Services */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDesktopServicesOpen((v) => !v)}
              className="inline-flex items-center gap-1 text-sm font-medium text-zinc-600 transition-colors hover:text-brand-orange py-2 cursor-pointer bg-transparent border-none"
              aria-expanded={desktopServicesOpen}
            >
              <span>Services</span>
              <ChevronDown
                className={`size-4 transition-transform duration-200 ${desktopServicesOpen ? 'rotate-180 text-brand-orange' : ''
                  }`}
              />
            </button>

            {/* Desktop Dropdown Card */}
            {desktopServicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-[540px] rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="mb-2 px-3 pt-1 flex justify-between items-center border-b border-zinc-100 pb-2">
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Our Specialized Services
                  </span>
                  <Link
                    href="/services"
                    className="text-xs font-semibold text-brand-orange hover:underline cursor-pointer"
                    onClick={() => setDesktopServicesOpen(false)}
                  >
                    View All Services →
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {services.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      onClick={() => setDesktopServicesOpen(false)}
                      className="rounded-xl px-3 py-2.5 text-xs font-medium text-zinc-700 hover:bg-orange-50 hover:text-brand-orange transition-all leading-tight flex items-center"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/process"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-brand-orange"
          >
            Process
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-brand-orange"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-brand-orange"
          >
            Blog
          </Link>
        </nav>

        {/* Right CTA Actions Block Button */}
        <div className="hidden md:block shrink-0">
          <Button
            nativeButton={false}
            render={<Link href="/contact" />}
            className="rounded-full bg-brand-orange px-5 font-semibold text-brand-orange-foreground [a]:hover:bg-brand-orange/90"
          >
            Free Audit
          </Button>
        </div>

        {/* Mobile View Toggle Controller Icon Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-md text-zinc-800 md:hidden transition-colors hover:bg-zinc-100"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Expanded Mobile Drawer Menu overlay */}
      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="border-t border-border/60 bg-white px-5 py-4 md:hidden animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-6rem)] overflow-y-auto"
        >
          <ul className="flex flex-col gap-1.5">
            <li>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-all"
              >
                About
              </Link>
            </li>

            {/* Mobile Accordion for Services */}
            <li>
              <div className="flex flex-col">
                <div className="flex items-center justify-between rounded-xl px-4 py-2.5 hover:bg-zinc-100 transition-all">
                  <Link
                    href="/services"
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium text-zinc-600 hover:text-zinc-900"
                  >
                    Services (View All)
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="p-1 text-zinc-500 hover:text-zinc-900"
                    aria-label="Toggle Services submenu"
                  >
                    <ChevronDown
                      className={`size-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-brand-orange' : ''
                        }`}
                    />
                  </button>
                </div>

                {/* Mobile Services Submenu */}
                {mobileServicesOpen && (
                  <ul className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-orange-100 pl-2">
                    {services.map((service) => (
                      <li key={service.label}>
                        <Link
                          href={service.href}
                          onClick={() => {
                            setMobileOpen(false)
                            setMobileServicesOpen(false)
                          }}
                          className="block rounded-lg px-3 py-2 text-xs font-medium text-zinc-600 hover:bg-orange-50 hover:text-brand-orange transition-all"
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>

            <li>
              <Link
                href="/process"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-all"
              >
                Process
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-all"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-all"
              >
                Blog
              </Link>
            </li>

            <li className="mt-3 pt-2 border-t border-border/40">
              <Button
                nativeButton={false}
                render={<Link href="/contact" onClick={() => setMobileOpen(false)} />}
                className="w-full rounded-full bg-brand-orange font-semibold text-brand-orange-foreground [a]:hover:bg-brand-orange/90"
              >
                Free Audit
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}