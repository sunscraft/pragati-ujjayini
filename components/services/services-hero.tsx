import { Button } from '@/components/ui/button'

const tags = [
  'Retail',
  'Healthcare',
  'Food & Hospitality',
  'Services',
  'Real Estate',
  'B2B & Trade',
]

export function ServicesHero() {
  return (
    /* FIXED: Explicit dark navy background class to prevent system dark-mode shifts on mobile */
    <section className="relative overflow-hidden bg-[#0F172A] text-slate-100">

      {/* Decorative Glow Elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-0 size-80 rounded-full bg-brand-orange/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-brand-blue/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:py-28">

        {/* Category Pill */}
        <p className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
          Services
        </p>

        {/* FIXED: Locked heading color to a solid slate-100 so it doesn't dim or invert */}
        <h1 className="mx-auto mt-6 max-w-3xl text-balance font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-100 sm:text-5xl">
          Local marketing services for{' '}
          <span className="text-brand-orange">every</span>{' '}
          <span className="text-brand-blue">Indian business</span>
        </h1>

        {/* FIXED: Locked paragraph text color to a concrete light slate with 80% opacity */}
        <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-slate-300/80">
          We offer end-to-end digital marketing built specifically for local
          discovery and growth — for retail, healthcare, food, services, and
          every other local business category.
        </p>

        {/* Tags Section */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            /* FIXED: Swapped out fluid theme variables for locked slate borders and semi-transparent backgrounds */
            <span
              key={tag}
              className="rounded-full border border-slate-700/60 bg-slate-800/50 px-4 py-1.5 text-sm font-medium text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button
            nativeButton={false}
            render={<a href="#services-list" />}
            className="h-11 rounded-full bg-brand-orange px-6 text-sm font-semibold text-brand-orange-foreground [a]:hover:bg-brand-orange/90"
          >
            Explore All Services
          </Button>
          <Button
            nativeButton={false}
            render={<a href="#custom-recommendation" />}
            className="h-11 rounded-full bg-brand-blue px-6 text-sm font-semibold text-brand-blue-foreground [a]:hover:bg-brand-blue/90"
          >
            Get a Recommendation
          </Button>
        </div>
      </div>
    </section>
  )
}