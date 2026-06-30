import Image from 'next/image'
import { Stethoscope, UtensilsCrossed, Store, Building2 } from 'lucide-react'

const industries = [
  { icon: Stethoscope, label: 'Clinics' },
  { icon: UtensilsCrossed, label: 'Restaurants' },
  { icon: Store, label: 'Retail Stores' },
  { icon: Building2, label: 'Real Estate' },
]

export function WhoWeAre() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-xl">
            <Image
              src="/images/about-team.png"
              alt="The Pragati Ujjayini team of local marketing specialists"
              width={640}
              height={520}
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>
          <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-brand-orange px-5 py-3 text-brand-orange-foreground shadow-lg sm:block">
            <p className="font-heading text-lg font-extrabold">
              Local specialists
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Who We Are
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            A team that markets your business like it&apos;s our own
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We&apos;re a team of local marketing specialists who understand that
            a clinic doesn&apos;t market like a restaurant, and a retail store
            doesn&apos;t market like a real estate agency.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            That&apos;s why we tailor every channel — GMB, SEO, web, social,
            design, and listings — to fit your specific business and audience.
          </p>

          <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <li
                  key={industry.label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card px-3 py-4 text-center"
                >
                  <Icon className="size-6 text-brand-blue" />
                  <span className="text-xs font-semibold">
                    {industry.label}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
