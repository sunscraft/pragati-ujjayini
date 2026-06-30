'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md">
      {/* Increased container height to h-24 to accommodate the larger inline logo row */}
      <div className="mx-auto flex h-24 items-center justify-between px-5 sm:px-8 max-w-6xl">

        {/* Brand Logo Identity */}
        <Link href="/" className="flex items-center gap-3.5 text-lg font-bold shrink-0 group">
          {/* Increased Logo sizing framework neatly to 64px */}
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
          {/* Layout changed to an inline row layout with cross-axis alignment */}
          <div className="flex flex-row items-center gap-1.5 whitespace-nowrap">
            <span className="font-heading text-xl sm:text-2xl font-black text-brand-orange tracking-tight">Pragati</span>
            <span className="font-heading text-xl sm:text-2xl font-black text-brand-blue tracking-tight">Ujjayini</span>
          </div>
        </Link>

        {/* Primary Desktop Navigation Links Bar */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand-orange"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Actions Block Button */}
        <div className="hidden md:block shrink-0">
          <Button
            nativeButton={false}
            render={<Link href="/contact" />}
            className="rounded-full bg-brand-orange px-5 font-semibold text-brand-orange-foreground [a]:hover:bg-brand-orange/90"
          >
            Free Demo
          </Button>
        </div>

        {/* Mobile View Toggle Controller Icon Button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-md text-foreground md:hidden transition-colors hover:bg-muted"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Expanded Mobile Drawer Menu overlay */}
      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-border/60 bg-background px-5 py-4 md:hidden animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <ul className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 pt-2 border-t border-border/40">
              <Button
                nativeButton={false}
                render={<Link href="/contact" onClick={() => setOpen(false)} />}
                className="w-full rounded-full bg-brand-orange font-semibold text-brand-orange-foreground [a]:hover:bg-brand-orange/90"
              >
                Free Demo
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}