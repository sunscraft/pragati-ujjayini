import { Hero } from '@/components/hero'
import { Stats } from '@/components/stats'
import { PurposeValues } from '@/components/purpose-values'
import { Categories } from '@/components/categories'
import { DigitalGrowth } from '@/components/digital-growth'
import { WhyTrust } from '@/components/why-trust'
import { Pricing } from '@/components/pricing'
import { FAQ } from '@/components/faq'
import { CtaBanner } from '@/components/cta-banner'

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <PurposeValues />
        <Categories />
        <DigitalGrowth />
        <WhyTrust />
        <Pricing />
        <FAQ />
        <CtaBanner />
      </main>
    </>
  )
}