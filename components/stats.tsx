const stats = [
  {
    value: '500+',
    label: 'Businesses Helped',
    sub: 'With proven local growth',
    highlight: false,
  },
  {
    value: '10+',
    label: 'Cities Served',
    sub: 'Across Bharat and growing',
    highlight: true,
  },
  {
    value: '99%',
    label: 'Satisfaction',
    sub: 'Owners who stay with us',
    highlight: false,
  },
]

export function Stats() {
  return (
    /* FIXED: Removed '-mt-8' (negative margin) and replaced it with a positive relative layout 
       margin (mt-12 sm:mt-16 lg:mt-24) to establish a distinct separation gap from the Hero section. */
    <section className="mx-auto mt-12 sm:mt-16 lg:mt-24 max-w-6xl px-4 sm:px-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-2xl border p-6 text-center shadow-sm ${stat.highlight
                ? 'border-brand-blue bg-brand-blue text-brand-blue-foreground'
                : 'border-border bg-card text-card-foreground'
              }`}
          >
            <p
              className={`font-heading text-4xl font-extrabold ${stat.highlight ? 'text-brand-blue-foreground' : 'text-brand-orange'
                }`}
            >
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide">
              {stat.label}
            </p>
            <p
              className={`mt-1 text-xs ${stat.highlight
                  ? 'text-brand-blue-foreground/80'
                  : 'text-muted-foreground'
                }`}
            >
              {stat.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}