'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, BookOpen } from 'lucide-react';

function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

export function RecentBlogsCarousel({ blogs = [] }) {
    const sliderRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollButtons = useCallback(() => {
        if (!sliderRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }, []);

    useEffect(() => {
        checkScrollButtons();
        const slider = sliderRef.current;
        if (!slider) return;

        slider.addEventListener('scroll', checkScrollButtons, { passive: true });
        window.addEventListener('resize', checkScrollButtons);

        return () => {
            slider.removeEventListener('scroll', checkScrollButtons);
            window.removeEventListener('resize', checkScrollButtons);
        };
    }, [checkScrollButtons, blogs]);

    const scroll = (direction) => {
        if (!sliderRef.current) return;
        const container = sliderRef.current;
        // Scroll roughly one card + gap or 80% of view
        const scrollAmount = Math.max(340, container.clientWidth * 0.75);
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    if (!blogs || blogs.length === 0) {
        return null;
    }

    return (
        <section className="space-y-6">
            {/* Header: Title, Subtitle & Action Controls */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                    <span className="inline-flex items-center gap-1.5 bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-2">
                        <BookOpen className="size-3.5" />
                        Latest From Our Blog
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy tracking-tight">
                        Recent Insights &amp; Growth Guides
                    </h2>
                    <p className="mt-1 text-slate-600 text-sm max-w-2xl leading-relaxed">
                        Proven digital marketing strategies, local SEO tactics, and growth playbooks written by our team in Ujjain.
                    </p>
                </div>

                {/* Desktop Buttons & Link */}
                <div className="flex items-center gap-3 self-start sm:self-auto shrink-0">
                    <Link
                        href="/blog"
                        className="hidden md:inline-flex items-center gap-1.5 text-sm font-bold text-brand-orange hover:text-brand-orange/80 transition-colors mr-2"
                    >
                        View All Posts <ArrowRight className="size-4" />
                    </Link>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            aria-label="Previous articles"
                            className="size-10 sm:size-11 rounded-full border border-slate-300 bg-white text-brand-navy flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all shadow-xs disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-brand-navy disabled:hover:border-slate-300 cursor-pointer"
                        >
                            <ChevronLeft className="size-5" />
                        </button>
                        <button
                            type="button"
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            aria-label="Next articles"
                            className="size-10 sm:size-11 rounded-full border border-slate-300 bg-white text-brand-navy flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all shadow-xs disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-brand-navy disabled:hover:border-slate-300 cursor-pointer"
                        >
                            <ChevronRight className="size-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Carousel Horizontal Scroll Track */}
            <div className="relative -mx-2 sm:-mx-4 px-2 sm:px-4">
                <div
                    ref={sliderRef}
                    className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-1 [&::-webkit-scrollbar]:hidden"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {blogs.map((post) => {
                        const postSlug = post.slug || post._id;
                        const postUrl = `/blog/${postSlug}`;
                        const formattedDate = post.publishedAt
                            ? new Date(post.publishedAt).toLocaleDateString('en-IN', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric',
                              })
                            : 'Recent';
                        const summary = post.excerpt || stripHtml(post.content || '').slice(0, 115);

                        return (
                            <article
                                key={post._id}
                                className="group w-[285px] sm:w-[330px] md:w-[350px] shrink-0 flex flex-col bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 snap-start overflow-hidden"
                            >
                                {/* Card Image / Fallback */}
                                <Link href={postUrl} className="relative aspect-16/9 w-full overflow-hidden bg-slate-100 block">
                                    {post.image ? (
                                        <img
                                            src={post.image}
                                            alt={post.altText || post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-brand-orange/10 via-amber-50 to-brand-navy/10 flex items-center justify-center p-6 text-center">
                                            <span className="font-heading font-extrabold text-sm text-brand-navy">
                                                {post.title}
                                            </span>
                                        </div>
                                    )}

                                    {/* Category Pill Floating */}
                                    <span className="absolute top-3 left-3 bg-brand-navy/90 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                                        {post.category || 'Article'}
                                    </span>
                                </Link>

                                {/* Card Body */}
                                <div className="p-5 flex-1 flex flex-col justify-between">
                                    <div>
                                        {/* Date */}
                                        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2 font-medium">
                                            <Calendar className="size-3.5 text-brand-orange" />
                                            <span>{formattedDate}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-bold text-base sm:text-lg text-brand-navy group-hover:text-brand-orange transition-colors line-clamp-2 leading-snug">
                                            <Link href={postUrl}>
                                                {post.title}
                                            </Link>
                                        </h3>

                                        {/* Excerpt */}
                                        {summary && (
                                            <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                                                {summary}...
                                            </p>
                                        )}
                                    </div>

                                    {/* Read Article Link */}
                                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                                        <Link
                                            href={postUrl}
                                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-orange group-hover:text-brand-orange/90 group-hover:gap-2 transition-all"
                                        >
                                            Read Article <ArrowRight className="size-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Footer: Link to all blogs */}
            <div className="text-center pt-2 md:hidden">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-orange hover:underline"
                >
                    View All Blog Articles <ArrowRight className="size-4" />
                </Link>
            </div>
        </section>
    );
}
