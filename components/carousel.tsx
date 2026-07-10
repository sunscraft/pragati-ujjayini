'use client'

import React from 'react'
import Image from 'next/image'

const carouselImages = [
    { src: '/images/google-buisness-profile-image.png', alt: 'Google Business Profile Optimization' },
    { src: '/images/local-seo.webp', alt: 'Local SEO Services' },
    { src: '/images/website-and-development.webp', alt: 'Website Design and Development' },
    { src: '/images/social-media-marketing.webp', alt: 'Social Media Marketing' },
    { src: '/images/graphic-designing.webp', alt: 'Professional Graphic Designing' },
    { src: '/images/Local-Google-Meta-Ads.webp', alt: 'Local Google & Meta Ads Management' },
    { src: '/images/whatsapp-marketing.webp', alt: 'WhatsApp Marketing Campaigns' },
    { src: '/images/local-business-directories.webp', alt: 'Local Business Directories Listing' },
]

export function Carousel() {
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
                    {doubleImages.map((image, idx) => {
                        // Only prioritize the first 3 images that actually sit "above the fold" on initial load
                        const isInitialView = idx < 3;

                        return (
                            <div
                                key={`track1-${idx}`}
                                className="relative w-[27rem] h-[18rem] sm:w-[30rem] sm:h-[19rem] shrink-0 overflow-hidden rounded-3xl border border-zinc-200/60 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.015]"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    // Optimized image dimension hint for next/image compiler
                                    sizes="(max-w-640px) 432px, 480px"
                                    className="object-cover"
                                    // Native Next.js quality compressor (Defaults to 75, dropping to 70 saves ~30% file size without losing sharpness)
                                    quality={70}
                                    priority={isInitialView}
                                    // Prevents layout shifting during lazy-loading animations
                                    placeholder="blur"
                                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmMmYyZjIiLz48L3N2Zz4="
                                />
                            </div>
                        );
                    })}
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