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
    <section className="relative overflow-hidden bg-brand-navy text-brand-navy-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-0 size-80 rounded-full bg-brand-orange/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-brand-blue/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:py-28">
        <p className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
          Services
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl text-balance font-heading text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
          Local marketing services for{' '}
          <span className="text-brand-orange">every</span>{' '}
          <span className="text-brand-blue">Indian business</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-brand-navy-foreground/75">
          We offer end-to-end digital marketing built specifically for local
          discovery and growth — for retail, healthcare, food, services, and
          every other local business category.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-brand-navy-foreground/15 bg-brand-navy-foreground/5 px-4 py-1.5 text-sm font-medium text-brand-navy-foreground/80"
            >
              {tag}
            </span>
          ))}
        </div>

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
