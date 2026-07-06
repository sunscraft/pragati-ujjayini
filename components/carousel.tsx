'use client'

import React from 'react'
import Image from 'next/image'

// Add your local image paths here
const carouselImages = [
    { src: '/images/google-buisness-profile-image.png', alt: 'Project Showcase 1' },
    { src: '/images/local-seo.png', alt: 'Project Showcase 2' },
    { src: '/images/website-and-development.png', alt: 'Project Showcase 3' },
    { src: '/images/social-media-marketing.png', alt: 'Project Showcase 4' },
    { src: '/images/graphic-designing.png', alt: 'Project Showcase 5' },
    { src: '/images/Local-Google-Meta-Ads.png', alt: 'Project Showcase 6' },
    { src: '/images/whatsapp-marketing.png', alt: 'Project Showcase 7' },
    { src: '/images/local-business-directories.png', alt: 'Project Showcase 8' },
]

export function Carousel() {
    // Duplicate the array to create a seamless, glitch-free infinite scrolling illusion
    const doubleImages = [...carouselImages, ...carouselImages]

    return (
        <section className="py-20 bg-brand-cream/40 overflow-hidden w-full">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 mb-12 text-center md:text-left">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-brand-navy">
                    Our Services
                </h2>
                <p className="text-muted-foreground text-sm mt-2">
                    A glimpse into the impact and scale we are delivering every single day.
                </p>
            </div>

            {/* Main Infinite Wrapper Container */}
            <div className="relative w-full flex overflow-x-hidden group mask-gradient">

                {/* Track 1 */}
                <div className="flex gap-8 shrink-0 animate-infinite-scroll group-hover:[animation-play-state:paused]">
                    {doubleImages.map((image, idx) => (
                        <div
                            key={`track1-${idx}`}
                            className="relative w-[27rem] h-[18rem] sm:w-[30rem] sm:h-[19rem] shrink-0 overflow-hidden rounded-3xl border border-zinc-200/60 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.015]"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-w-768px) 432px, 480px"
                                className="object-cover"
                                priority={idx < 3}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Required Tailwind Global CSS Injection for the Infinite Marquee Animation */}
            <style jsx global>{`
        @keyframes infiniteScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infiniteScroll 45s linear infinite;
        }
        /* Smooth fade effect on the edges of the carousel row */
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
        }
      `}</style>
        </section>
    )
}