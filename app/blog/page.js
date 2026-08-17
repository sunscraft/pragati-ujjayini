import Link from "next/link";
import Blog from "@/models/Blog";
import connectDB from "@/lib/db";

function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

export const revalidate = 0;

export default async function BlogListPage() {
    await connectDB();

    const rawBlogs = await Blog.find({}).sort({ createdAt: -1 }).lean();
    const blogs = JSON.parse(JSON.stringify(rawBlogs));

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
                        {blogs.map((post) => (
                            <Link
                                key={post._id}
                                href={`/blog/${post.slug || post._id}`}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                {post.image ? (
                                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                ) : (
                                    <div className="h-48 w-full bg-gradient-to-br from-brand-orange/15 via-brand-cream to-brand-blue/15" />
                                )}

                                <div className="flex flex-1 flex-col p-6">
                                    <p className="text-xs font-medium text-brand-blue">
                                        {new Date(post.createdAt).toLocaleDateString("en-IN", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </p>
                                    <h2 className="mt-2 font-heading text-lg font-bold text-brand-navy leading-snug line-clamp-2 group-hover:text-brand-orange transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="mt-2 flex-1 text-sm text-zinc-600 line-clamp-3">
                                        {stripHtml(post.content).slice(0, 150)}...
                                    </p>
                                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange">
                                        Read More
                                        <span className="transition-transform group-hover:translate-x-1">→</span>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}