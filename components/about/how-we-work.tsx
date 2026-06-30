import {
  MapPin,
  Users,
  Wallet,
  Globe,
  Search,
  Share2,
  ListChecks,
  Megaphone,
} from 'lucide-react'

const strategy = [
  {
    icon: MapPin,
    title: 'Where your customers actually search',
    desc: 'Google, Maps, Instagram, WhatsApp, or all four — we meet them exactly where they look.',
  },
  {
    icon: Users,
    title: 'What your competitors are (and aren\u2019t) doing',
    desc: 'We study the local landscape to find the gaps you can win.',
  },
  {
    icon: Wallet,
    title: 'What you can realistically invest',
    desc: 'A plan built around what you can sustain — not an unaffordable wishlist.',
  },
]

const system = [
  { icon: Globe, label: 'Google Business Profile' },
  { icon: Search, label: 'Local SEO' },
  { icon: Megaphone, label: 'Ad Campaigns' },
  { icon: Share2, label: 'Social Media' },
  { icon: ListChecks, label: 'Directory Listings' },
  { icon: Globe, label: 'Your Website' },
]

export function HowWeWork() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
          How We Work
        </p>
        <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          No one-size-fits-all marketing
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Every business we work with gets a strategy built around three things
          that actually move the needle.
        </p>
      </div>

      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {strategy.map((item, index) => {
          const Icon = item.icon
          return (
            <li
              key={item.title}
              className="relative rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-brand-navy font-heading text-sm font-bold text-brand-navy-foreground">
                  {index + 1}
                </span>
                <Icon className="size-5 text-brand-blue" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </li>
          )
        })}
      </ol>

      <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-brand-navy p-8 text-brand-navy-foreground sm:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-balance font-heading text-2xl font-bold sm:text-3xl">
              Managed as one connected system
            </h3>
            <p className="mt-3 leading-relaxed text-brand-navy-foreground/80">
              From there, we manage everything — your Google Business Profile,
              website, local SEO, social media, directory listings, and ad
              campaigns — as one connected system, not disconnected services.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {system.map((node) => {
              const Icon = node.icon
              return (
                <li
                  key={node.label}
                  className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-3 text-sm font-medium ring-1 ring-white/10"
                >
                  <Icon className="size-4 shrink-0 text-brand-orange" />
                  {node.label}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
