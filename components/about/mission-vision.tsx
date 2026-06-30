import { Target, Compass } from 'lucide-react'

export function MissionVision() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-brand-orange/10"
            />
            <div className="relative flex size-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
              <Target className="size-6" />
            </div>
            <h2 className="relative mt-5 font-heading text-2xl font-bold">
              Our Mission
            </h2>
            <p className="relative mt-3 leading-relaxed text-muted-foreground">
              To make professional, results-driven digital marketing accessible
              to every local business in India — not just large brands with
              large budgets.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-brand-blue bg-brand-blue p-8 text-brand-blue-foreground shadow-sm">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-white/10"
            />
            <div className="relative flex size-12 items-center justify-center rounded-xl bg-white/15 text-brand-blue-foreground">
              <Compass className="size-6" />
            </div>
            <h2 className="relative mt-5 font-heading text-2xl font-bold">
              Our Vision
            </h2>
            <p className="relative mt-3 leading-relaxed text-brand-blue-foreground/90">
              A future where every local business, regardless of size or
              industry, has the digital presence it deserves to compete and grow
              in its community.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
