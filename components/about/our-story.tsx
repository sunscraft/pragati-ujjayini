import { Search, EyeOff, Sparkles } from 'lucide-react'

const points = [
  {
    icon: EyeOff,
    title: 'The problem we saw',
    desc: 'Too many great businesses lose customers not because their product or service is lacking, but because they are invisible online at the exact moment a nearby customer is searching.',
  },
  {
    icon: Search,
    title: 'The moment that matters',
    desc: 'A customer searching nearby is a customer ready to buy. If you do not show up, the sale quietly goes to someone who did.',
  },
  {
    icon: Sparkles,
    title: 'Why we exist',
    desc: 'We built Pragati Ujjayini to close that gap — helping shop owners, doctors, restaurant owners, and service providers across India show up, stand out, and get chosen.',
  },
]

export function OurStory() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
          Where it began
        </p>
        <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Visibility shouldn&apos;t be a luxury for big brands
        </h2>
        <div className="mx-auto mt-4 flex items-center justify-center gap-1">
          <span className="h-1 w-10 rounded-full bg-brand-orange" />
          <span className="h-1 w-4 rounded-full bg-brand-blue" />
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {points.map((point, index) => {
          const Icon = point.icon
          return (
            <article
              key={point.title}
              className="group relative rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="absolute right-6 top-6 font-heading text-5xl font-extrabold text-muted/60">
                {`0${index + 1}`}
              </span>
              <div className="flex size-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold">
                {point.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {point.desc}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
