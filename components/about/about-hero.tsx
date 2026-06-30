import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-brand-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand-orange/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-brand-blue/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Our Story
          </p>
          <h1 className="mt-5 text-balance font-heading text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            Making every local business{' '}
            <span className="text-brand-orange">impossible to miss</span>
          </h1>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Pragati Ujjayini was started with a simple belief: every local
            business — no matter how small — deserves the same digital
            visibility that large brands take for granted.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<a href="#work-with-us" />}
              className="h-11 rounded-full bg-brand-orange px-6 text-sm font-semibold text-brand-orange-foreground [a]:hover:bg-brand-orange/90"
            >
              Work With Us
            </Button>
            <Button
              nativeButton={false}
              render={<a href="/services" />}
              className="h-11 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground [a]:hover:bg-muted"
            >
              Explore Services
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-xl">
            <Image
              src="/images/about-story.png"
              alt="Local Indian businesses connected through digital location markers"
              width={640}
              height={520}
              priority
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-brand-navy px-6 py-4 text-brand-navy-foreground shadow-lg sm:block">
            <p className="font-heading text-2xl font-extrabold">Bharat-first</p>
            <p className="text-xs opacity-80">Built for local growth</p>
          </div>
        </div>
      </div>
    </section>
  )
}
