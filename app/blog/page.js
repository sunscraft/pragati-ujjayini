import Link from "next/link";
import { getSanityBlogs } from "@/lib/sanity.client";
import { Tag } from "lucide-react";

function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

export const revalidate = 0;

async function fetchAllBlogs() {
    try {
        const sanityBlogs = await getSanityBlogs();
        return (sanityBlogs || []).map((b) => ({
            _id: b._id,
            slug: b.slug || b._id,
            title: b.title,
            excerpt: b.excerpt || '',
            category: b.category || 'Blog',
            tags: Array.isArray(b.tags) ? b.tags : [],
            image: b.imageUrl || (typeof b.mainImage === 'string' ? b.mainImage : null),
            altText: b.altText || b.title,
            content: typeof b.content === 'string' ? b.content : (b.seoDescription || ''),
            createdAt: b.publishedAt || b._createdAt,
        }));
    } catch (err) {
        console.error('Sanity blogs fetch error:', err.message);
        return [];
    }
}

export default async function BlogListPage() {
    const blogs = await fetchAllBlogs();

    return (
        <div className="bg-brand-cream/40 min-h-screen">
            {/* Hero heading band */}
            <section className="border-b border-border/60 bg-white">
                <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-20 text-center">
                    <span className="inline-block rounded-full bg-brand-orange/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-orange uppercase">
                        Insights &amp; Updates
                    </span>
                    <h1 className="mt-4 font-heading text-3xl sm:text-5xl font-black text-brand-navy tracking-tight">
                        Our <span className="text-brand-orange">Blog</span>
                    </h1>
                    <p className="mt-4 max-w-xl mx-auto text-zinc-600 text-sm sm:text-base">
                        Ideas, strategies, and stories on growing your local business in the digital age.
                    </p>
                </div>
            </section>

            {/* Blog grid */}
            <section className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-16">
                {blogs.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center py-20 rounded-2xl border border-dashed border-border/70 bg-white">
                        <p className="text-lg font-semibold text-brand-navy">No blog posts yet</p>
                        <p className="mt-1 text-sm text-zinc-500">Check back soon — new content is on the way.</p>
                    </div>
                ) : (
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((post) => {
                            const summaryText = post.excerpt || stripHtml(post.content).slice(0, 150);

                            return (
                                <Link
                                    key={post._id}
                                    href={`/blog/${post.slug || post._id}`}
                                    className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                >
                                    {post.image ? (
                                        <div className="relative h-48 w-full overflow-hidden bg-muted">
                                            <img
                                                src={post.image}
                                                alt={post.altText || post.title}
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span className="bg-brand-navy/85 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative h-48 w-full bg-gradient-to-br from-brand-orange/15 via-brand-cream to-brand-blue/15 p-4 flex items-start">
                                            <span className="bg-brand-navy/85 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                                                {post.category}
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="flex items-center justify-between text-xs text-zinc-500 mb-1">
                                            <span className="font-semibold text-brand-blue">
                                                {post.createdAt ? new Date(post.createdAt).toLocaleDateString("en-IN", {
                                                    day: "numeric",
                                                    month: "short",
                                                    year: "numeric",
                                                }) : 'Recently Published'}
                                            </span>
                                        </div>

                                        <h2 className="mt-1 font-heading text-lg font-bold text-brand-navy leading-snug line-clamp-2 group-hover:text-brand-orange transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="mt-2 flex-1 text-sm text-zinc-600 line-clamp-3">
                                            {summaryText}
                                        </p>

                                        {post.tags && post.tags.length > 0 && (
                                            <div className="mt-3 flex flex-wrap gap-1">
                                                {post.tags.slice(0, 2).map((t, idx) => (
                                                    <span key={idx} className="inline-flex items-center gap-0.5 text-[10px] font-medium bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded">
                                                        <Tag className="w-2.5 h-2.5 text-zinc-400" />
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange">
                                            Read Article
                                            <span className="transition-transform group-hover:translate-x-1">→</span>
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </section>
        </div>
    );
}