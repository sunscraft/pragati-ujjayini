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
    /* FIXED: Tied background colors to explicit values (bg-white and brand-blue) to eliminate unexpected dark theme styling on mobile */
    <section className="mx-auto mt-12 sm:mt-16 lg:mt-24 max-w-6xl px-4 sm:px-6 w-full">
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-2xl border p-6 text-center shadow-sm ${stat.highlight
                ? 'border-brand-blue bg-brand-blue text-white'
                : 'border-border bg-white text-brand-navy'
              }`}
          >
            <p
              className={`font-heading text-4xl font-extrabold ${stat.highlight ? 'text-white' : 'text-brand-orange'
                }`}
            >
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide">
              {stat.label}
            </p>
            <p
              className={`mt-1 text-xs ${stat.highlight
                  ? 'text-white/80'
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