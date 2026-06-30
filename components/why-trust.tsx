import Image from 'next/image'
import { Compass, TrendingUp } from 'lucide-react'

const reasons = [
  {
    icon: Compass,
    title: 'Deep Local Insights',
    desc: 'We understand the language, culture, and buying patterns of every street. Your message is built to connect, not just to be seen.',
  },
  {
    icon: TrendingUp,
    title: 'ROI-Driven Approach',
    desc: 'We focus on metrics that matter: footfall, bookings, and leads — not vanity numbers. Every rupee you spend works hard.',
  },
]

export function WhyTrust() {
  return (
    <section id="process" className="bg-brand-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            The Pragati Edge
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Why Bharat Trusts{' '}
            <span className="text-brand-orange">Pragati Ujjayini</span>
          </h2>

          <div className="mt-8 space-y-6">
            {reasons.map((reason) => {
              const Icon = reason.icon
              return (
                <div key={reason.title} className="flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold">
                      {reason.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-muted-foreground">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-sm">
            <Image
              src="/images/hero-dashboard.png"
              alt="Analytics dashboard illustrating local business growth"
              width={560}
              height={420}
              className="h-auto w-full rounded-2xl"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-brand-orange p-5 text-center text-brand-orange-foreground">
              <p className="font-heading text-3xl font-extrabold">500+</p>
              <p className="mt-1 text-xs font-medium opacity-90">
                Businesses transformed
              </p>
            </div>
            <div className="rounded-2xl bg-brand-blue p-5 text-center text-brand-blue-foreground">
              <p className="font-heading text-3xl font-extrabold">10X</p>
              <p className="mt-1 text-xs font-medium opacity-90">
                Average reach growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
