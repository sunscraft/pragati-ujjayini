import { Store, HeartPulse, UtensilsCrossed, GraduationCap } from 'lucide-react'

const categories = [
  {
    icon: Store,
    title: 'Retail Growth',
    desc: 'Connect local kirana and retail shops to nearby digital buyers.',
    tone: 'orange',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    desc: 'Help doctors and clinics get discovered by patients in their city.',
    tone: 'blue',
  },
  {
    icon: UtensilsCrossed,
    title: 'Hospitality',
    desc: 'Bring more diners to restaurants and cafes with smart marketing.',
    tone: 'blue',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'Digital reach for coaching centres and the next generation.',
    tone: 'orange',
  },
]

export function Categories() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Who We Serve
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Helping Bharat&apos;s{' '}
            <span className="text-brand-blue">Businesses Bloom</span>
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-1">
            <span className="h-1 w-10 rounded-full bg-brand-orange" />
            <span className="h-1 w-4 rounded-full bg-brand-blue" />
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {categories.map((cat) => {
            const Icon = cat.icon
            const isOrange = cat.tone === 'orange'
            return (
              <article
                key={cat.title}
                className={`group rounded-2xl border p-6 shadow-sm transition-transform hover:-translate-y-1 ${
                  isOrange
                    ? 'border-brand-orange/20 bg-brand-orange/10'
                    : 'border-brand-blue/20 bg-brand-blue/10'
                }`}
              >
                <div
                  className={`flex size-11 items-center justify-center rounded-xl ${
                    isOrange
                      ? 'bg-brand-orange/15 text-brand-orange'
                      : 'bg-brand-blue/15 text-brand-blue'
                  }`}
                >
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cat.desc}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
