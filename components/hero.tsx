import Image from 'next/image'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <>
      {/* Inline styles injecting custom keyframe animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes custom-fade-in-left {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes custom-fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-left {
          animation: custom-fade-in-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-up {
          animation: custom-fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      <section
        id="about"
        /* FIXED: Changed overflow-x-hidden to a strict overflow-hidden to eliminate all horizontal dragging/swaying */
        className="relative min-h-[auto] md:min-h-screen flex items-center justify-center bg-background pt-24 pb-16 md:pt-32 md:pb-40 w-full overflow-hidden select-none touch-pan-y"
      >
        {/* Background Image Container */}
        {/* FIXED: Explicitly pinned left-0 top-0 and used w-full h-full to guarantee it never stretches the layout viewport */}
        <div className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none select-none touch-none overflow-hidden">
          <Image
            src="/images/hero-bg.jpg"
            alt="Pragati Ujjayini background illustrating local business digital growth"
            fill
            priority
            draggable={false}
            className="object-cover object-right lg:object-center opacity-85 pointer-events-none select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/60 md:bg-gradient-to-r md:from-background md:via-background/85 md:to-transparent z-10" />
        </div>

        {/* Content Container */}
        <div className="relative z-20 mx-auto flex flex-col justify-center lg:grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 w-full overflow-hidden">

          {/* Text block */}
          <div className="animate-fade-left opacity-0 flex flex-col items-center text-center lg:items-start lg:text-left w-full max-w-full">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3.5 py-1.5 text-xs font-semibold text-brand-orange select-none">
              <Sparkles className="size-3.5" />
              Trusted across Bharat since 2021
            </span>

            <h1 className="mt-5 text-balance font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-brand-navy w-full break-words">
              <span className="block">
                अपने व्यापार को
              </span>
              <span className="mt-1 block">
                बनाएँ <span className="text-brand-orange">ब्रांड :</span>
              </span>
              <span className="mt-2 block">
                Empowering{' '}
                <span className="text-brand-blue">Bharat&apos;s</span> Cities
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base md:text-lg leading-relaxed text-muted-foreground">
              Closing the digital gap for shop owners, doctors, and restaurant
              owners by bringing high-end digital growth strategies to local
              streets.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto gap-4 justify-center lg:justify-start">
              <Button
                nativeButton={false}
                render={<a href="#contact" />}
                className="h-12 w-full sm:w-auto justify-center rounded-full bg-brand-orange px-7 text-sm font-semibold text-brand-orange-foreground shadow-lg shadow-brand-orange/20 transition-all hover:bg-brand-orange/90 hover:shadow-xl hover:shadow-brand-orange/35"
              >
                Get a Free Audit
              </Button>
              <Button
                nativeButton={false}
                render={<a href="#services" />}
                className="h-12 w-full sm:w-auto justify-center rounded-full bg-brand-blue px-7 text-sm font-semibold text-brand-blue-foreground shadow-lg shadow-brand-blue/20 transition-all hover:bg-brand-blue/90 hover:shadow-xl hover:shadow-brand-blue/35"
              >
                View Services
              </Button>
            </div>
          </div>

          {/* Right Column: Cards hidden completely on mobile layouts */}
          <div className="relative h-[350px] md:h-[450px] w-full hidden sm:block animate-fade-up opacity-0" style={{ animationDelay: '200ms' }}>
            <div className="absolute top-[15%] left-[5%] md:left-[10%] z-20 flex items-center gap-3.5 rounded-2xl border border-white/50 bg-white/70 p-4 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/85 hover:shadow-2xl animate-float-slow">
              <div className="flex size-11 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                <Sparkles className="size-5.5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wider">Local SEO</p>
                <p className="text-sm font-bold text-brand-navy">Traffic +140%</p>
              </div>
            </div>

            <div className="absolute bottom-[20%] right-[5%] md:right-[10%] z-20 flex items-center gap-3.5 rounded-2xl border border-white/50 bg-white/70 p-4 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/85 hover:shadow-2xl animate-float-delayed">
              <div className="flex size-11 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blue">
                <svg className="size-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-brand-navy/60 uppercase tracking-wider">Strategy</p>
                <p className="text-sm font-bold text-brand-navy">5x Conversions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}