import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaBanner() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl bg-brand-navy px-6 py-14 text-center text-brand-navy-foreground sm:px-12">
        <h2 className="mx-auto max-w-2xl text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
          Ready to Scale Your{' '}
          <span className="text-brand-orange">Local Business?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-brand-navy-foreground/75">
          Join 500+ local businesses that have already transformed their trade
          into a modern digital brand.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {/* Updated to redirect straight to the contact page */}
          <Button
            nativeButton={false}
            render={<a href="/contact" />}
            className="h-11 rounded-full bg-brand-orange px-6 text-sm font-semibold text-brand-orange-foreground [a]:hover:bg-brand-orange/90"
          >
            Book Free Consultation
          </Button>

          <Button
            nativeButton={false}
            render={<a href="/contact" />}
            className="h-11 rounded-full border border-white/20 bg-transparent px-6 text-sm font-semibold text-brand-navy-foreground [a]:hover:bg-white/10"
          >
            <MessageCircle className="size-4" />
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  )
}