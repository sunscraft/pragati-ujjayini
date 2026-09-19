import Blog from "@/models/Blog";
import connectDB from "@/lib/db";
import mongoose from "mongoose";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getSanityBlogBySlug, getSanityBlogs, urlFor } from "@/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { Phone, Mail, ChevronRight, BookOpen, MessageSquare, ArrowLeft, Tag, Calendar, User, CheckCircle2, HelpCircle } from "lucide-react";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.pragatiujjayini.com";

function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

async function getBlogPostData(id) {
    let currentBlog = null;
    let otherArticles = [];

    // 1. Fetch from Sanity CMS
    try {
        const sanityBlog = await getSanityBlogBySlug(id);
        if (sanityBlog) {
            currentBlog = {
                _id: sanityBlog._id,
                title: sanityBlog.title,
                slug: sanityBlog.slug || id,
                excerpt: sanityBlog.excerpt || '',
                author: sanityBlog.author || "Grow 'n' Foster Team",
                authorRole: sanityBlog.authorRole || "Digital Marketing Expert",
                image: sanityBlog.imageUrl || (typeof sanityBlog.mainImage === 'string' ? sanityBlog.mainImage : null),
                altText: sanityBlog.altText || sanityBlog.title,
                category: sanityBlog.category || "Blog",
                tags: Array.isArray(sanityBlog.tags) ? sanityBlog.tags : [],
                body: Array.isArray(sanityBlog.body) ? sanityBlog.body : null,
                content: typeof sanityBlog.content === 'string' ? sanityBlog.content : '',
                createdAt: sanityBlog.publishedAt || sanityBlog._createdAt,
                seoTitle: sanityBlog.seoTitle,
                seoDescription: sanityBlog.seoDescription,
                canonicalUrl: sanityBlog.canonicalUrl || `${BASE_URL}/blog/${sanityBlog.slug || id}`,
                schemaType: sanityBlog.schemaType || "BlogPosting",
                faqSchema: Array.isArray(sanityBlog.faqSchema) ? sanityBlog.faqSchema : [],
                customSchemaJson: sanityBlog.customSchemaJson,
            };
        }

        // Fetch other published Sanity articles for left sidebar navigation
        const allSanityBlogs = await getSanityBlogs();
        if (allSanityBlogs && allSanityBlogs.length > 0) {
            otherArticles = allSanityBlogs
                .filter(b => b._id !== currentBlog?._id && (b.slug || b._id) !== id)
                .slice(0, 5)
                .map(b => ({
                    _id: b._id,
                    title: b.title,
                    slug: b.slug || b._id,
                    image: b.imageUrl,
                    category: b.category || "Article",
                    createdAt: b.publishedAt || b._createdAt,
                }));
        }
    } catch (err) {
        console.warn("Sanity fetch blog detail notice:", err.message);
    }

    // 2. Fallback to MongoDB if not found in Sanity
    if (!currentBlog) {
        try {
            await connectDB();
            let mongoBlog = await Blog.findOne({ slug: id }).lean().catch(() => null);

            if (!mongoBlog && mongoose.isValidObjectId(id)) {
                mongoBlog = await Blog.findById(id).lean().catch(() => null);
            }

            if (mongoBlog) {
                const rawSlug = mongoBlog.slug || mongoBlog._id.toString();
                currentBlog = {
                    _id: mongoBlog._id.toString(),
                    title: mongoBlog.title,
                    slug: rawSlug,
                    excerpt: stripHtml(mongoBlog.content || '').slice(0, 160),
                    author: mongoBlog.author || "Admin",
                    authorRole: "Content Creator",
                    image: mongoBlog.image,
                    altText: mongoBlog.title,
                    category: "General",
                    tags: [],
                    body: null,
                    content: mongoBlog.content || '',
                    createdAt: mongoBlog.createdAt,
                    canonicalUrl: `${BASE_URL}/blog/${rawSlug}`,
                    schemaType: "BlogPosting",
                    faqSchema: [],
                };
            }

            // Fetch MongoDB fallback recent articles
            if (otherArticles.length === 0) {
                const mongoBlogs = await Blog.find({}).sort({ createdAt: -1 }).limit(6).lean();
                otherArticles = mongoBlogs
                    .filter(b => b._id.toString() !== currentBlog?._id && (b.slug || b._id.toString()) !== id)
                    .slice(0, 5)
                    .map(b => ({
                        _id: b._id.toString(),
                        title: b.title,
                        slug: b.slug || b._id.toString(),
                        image: b.image,
                        category: "Article",
                        createdAt: b.createdAt,
                    }));
            }
        } catch (err) {
            console.error("MongoDB fetch blog detail error:", err.message);
        }
    }

    return { blog: currentBlog, otherArticles };
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const { blog } = await getBlogPostData(id);

    if (!blog) {
        return { title: "Blog Post Not Found | Pragati Ujjayini" };
    }

    const title = blog.seoTitle || `${blog.title} | Pragati Ujjayini`;
    const description = blog.seoDescription || blog.excerpt || stripHtml(blog.content).slice(0, 160);
    const canonical = blog.canonicalUrl || `${BASE_URL}/blog/${blog.slug}`;

    return {
        title,
        description,
        alternates: {
            canonical,
        },
        openGraph: {
            title,
            description,
            url: canonical,
            type: "article",
            publishedTime: blog.createdAt,
            authors: [blog.author],
            images: blog.image ? [{ url: blog.image, alt: blog.altText || blog.title }] : [],
        },
    };
}

// Custom Portable Text Render Components
const portableTextComponents = {
    types: {
        image: ({ value }) => {
            if (!value) return null;
            const imageUrl = value.url || (value.asset ? urlFor(value)?.url() : null);
            if (!imageUrl) return null;
            return (
                <figure className="my-8 overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-50 p-2 shadow-sm">
                    <img
                        src={imageUrl}
                        alt={value.altText || value.alt || 'Blog inline illustration'}
                        className="w-full rounded-xl object-cover max-h-[520px]"
                        loading="lazy"
                    />
                    {value.caption && (
                        <figcaption className="mt-2.5 text-center text-xs sm:text-sm text-zinc-500 font-medium italic">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            );
        },
        callout: ({ value }) => {
            if (!value || !value.text) return null;
            const type = value.type || 'info';
            const styles = {
                info: 'bg-blue-50/80 border-blue-200 text-blue-900 border-l-brand-blue',
                warning: 'bg-amber-50/80 border-amber-200 text-amber-900 border-l-brand-orange',
                success: 'bg-emerald-50/80 border-emerald-200 text-emerald-900 border-l-emerald-500',
                note: 'bg-slate-50 border-slate-200 text-slate-800 border-l-slate-400',
            };
            const icons = {
                info: '💡',
                warning: '⚠️',
                success: '✅',
                note: '📌',
            };
            return (
                <div className={`my-6 rounded-r-xl border-l-4 p-4.5 text-sm sm:text-base font-medium leading-relaxed border ${styles[type] || styles.info}`}>
                    <div className="flex items-start gap-3">
                        <span className="text-lg leading-none select-none mt-0.5">{icons[type] || '💡'}</span>
                        <div className="flex-1 whitespace-pre-line">{value.text}</div>
                    </div>
                </div>
            );
        },
    },
    block: {
        h1: ({ children }) => (
            <h1 className="text-3xl sm:text-4xl font-black text-brand-navy mt-10 mb-4 tracking-tight leading-snug">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mt-8 mb-3 tracking-tight leading-snug border-b border-zinc-100 pb-2">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mt-6 mb-2.5 leading-snug">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-lg font-semibold text-brand-navy mt-5 mb-2">
                {children}
            </h4>
        ),
        blockquote: ({ children }) => (
            <blockquote className="my-6 rounded-r-xl border-l-4 border-brand-orange bg-brand-orange/5 px-5 py-4 text-brand-navy italic text-base sm:text-lg leading-relaxed">
                "{children}"
            </blockquote>
        ),
        normal: ({ children }) => (
            <p className="mb-5 leading-relaxed text-zinc-700 text-base sm:text-[17px]">
                {children}
            </p>
        ),
    },
    list: {
        bullet: ({ children }) => <ul className="mb-6 ml-6 list-disc space-y-2 text-zinc-700 text-base sm:text-[17px]">{children}</ul>,
        number: ({ children }) => <ol className="mb-6 ml-6 list-decimal space-y-2 text-zinc-700 text-base sm:text-[17px]">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
        number: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold text-brand-navy">{children}</strong>,
        em: ({ children }) => <em className="italic text-zinc-800">{children}</em>,
        underline: ({ children }) => <u className="underline decoration-brand-orange decoration-2 underline-offset-4">{children}</u>,
        code: ({ children }) => <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs text-brand-orange border border-zinc-200">{children}</code>,
        link: ({ value, children }) => {
            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
            return (
                <a
                    href={value?.href}
                    target={value?.blank ? '_blank' : target}
                    rel={value?.blank || target === '_blank' ? 'noopener noreferrer' : undefined}
                    className="font-medium text-brand-orange underline underline-offset-2 hover:text-brand-orange/80 transition-colors"
                >
                    {children}
                </a>
            );
        },
    },
};

export default async function BlogPage({ params }) {
    const { id } = await params;
    const { blog, otherArticles } = await getBlogPostData(id);

    if (!blog) {
        notFound();
    }

    const formattedDate = blog.createdAt
        ? new Date(blog.createdAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
        })
        : "Recently Published";

    const canonicalUrl = blog.canonicalUrl || `${BASE_URL}/blog/${blog.slug}`;

    // Construct Dynamic JSON-LD Schemas (Article + FAQ Page + Custom)
    let jsonLdSchemas = [];

    if (blog.customSchemaJson) {
        try {
            const customParsed = JSON.parse(blog.customSchemaJson);
            jsonLdSchemas.push(customParsed);
        } catch (e) {
            console.error("Failed to parse custom JSON-LD schema:", e);
        }
    }

    if (jsonLdSchemas.length === 0) {
        // Main Article / BlogPosting Schema
        const articleSchema = {
            "@context": "https://schema.org",
            "@type": blog.schemaType || "BlogPosting",
            "headline": blog.seoTitle || blog.title,
            "description": blog.seoDescription || blog.excerpt || stripHtml(blog.content).slice(0, 160),
            "url": canonicalUrl,
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": canonicalUrl,
            },
            "datePublished": blog.createdAt ? new Date(blog.createdAt).toISOString() : new Date().toISOString(),
            "author": {
                "@type": "Person",
                "name": blog.author || "Grow 'n' Foster Team",
                "jobTitle": blog.authorRole || "Digital Marketing Expert",
            },
            "publisher": {
                "@type": "Organization",
                "name": "Pragati Ujjayini",
                "url": BASE_URL,
                "logo": {
                    "@type": "ImageObject",
                    "url": `${BASE_URL}/favicon.ico`,
                },
            },
            ...(blog.image ? { "image": blog.image } : {}),
        };
        jsonLdSchemas.push(articleSchema);

        // Optional FAQPage JSON-LD Schema
        if (blog.faqSchema && blog.faqSchema.length > 0) {
            const faqSchema = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": blog.faqSchema.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer,
                    },
                })),
            };
            jsonLdSchemas.push(faqSchema);
        }
    }

    return (
        <div className="bg-brand-cream/30 min-h-screen py-8 sm:py-12">
            {/* Dynamic Canonical Tag */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Dynamic JSON-LD Structured Data Schema(s) */}
            {jsonLdSchemas.map((schema, idx) => (
                <script
                    key={idx}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Top breadcrumb & back link */}
                <div className="mb-6 flex items-center justify-between">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-orange hover:text-brand-orange/80 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to all articles
                    </Link>
                    <span className="text-xs font-medium text-zinc-500 bg-white px-3 py-1 rounded-full border border-border/60">
                        {blog.category}
                    </span>
                </div>

                {/* 2-Column Responsive Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* LEFT SIDEBAR (Sticky on desktop) */}
                    <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 self-start order-2 lg:order-1">
                        
                        {/* WIDGET 1: Article Navigation Div */}
                        <div className="rounded-2xl border border-border/70 bg-white p-5 shadow-sm">
                            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-border/60">
                                <BookOpen className="w-4 h-4 text-brand-orange" />
                                <h3 className="font-heading font-bold text-sm text-brand-navy uppercase tracking-wider">
                                    Navigate Articles
                                </h3>
                            </div>

                            {otherArticles.length === 0 ? (
                                <p className="text-xs text-zinc-500 py-2">No other articles available.</p>
                            ) : (
                                <div className="space-y-3">
                                    {otherArticles.map((art) => (
                                        <Link
                                            key={art._id}
                                            href={`/blog/${art.slug}`}
                                            className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-cream/50 transition-all duration-200 border border-transparent hover:border-border/40"
                                        >
                                            {art.image ? (
                                                <img
                                                    src={art.image}
                                                    alt={art.title}
                                                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0 mt-0.5 border border-zinc-100"
                                                />
                                            ) : (
                                                <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0 text-brand-orange font-bold text-xs">
                                                    Blog
                                                </div>
                                            )}
                                            <div className="flex-1 min-w-0">
                                                <span className="inline-block text-[10px] font-semibold text-brand-orange uppercase tracking-wider mb-0.5">
                                                    {art.category}
                                                </span>
                                                <h4 className="text-xs font-bold text-brand-navy leading-snug line-clamp-2 group-hover:text-brand-orange transition-colors">
                                                    {art.title}
                                                </h4>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all mt-1 flex-shrink-0" />
                                        </Link>
                                    ))}
                                </div>
                            )}

                            <div className="mt-4 pt-3 border-t border-border/50 text-center">
                                <Link
                                    href="/blog"
                                    className="text-xs font-bold text-brand-navy hover:text-brand-orange transition-colors inline-flex items-center gap-1"
                                >
                                    View All Articles →
                                </Link>
                            </div>
                        </div>

                        {/* WIDGET 2: Contact Div (Sticky CTA) */}
                        <div className="rounded-2xl border border-brand-orange/30 bg-gradient-to-br from-white via-orange-50/30 to-brand-cream/40 p-5 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/10 rounded-full blur-2xl -mr-6 -mt-6 pointer-events-none" />
                            
                            <div className="flex items-center gap-2 pb-3 mb-3 border-b border-brand-orange/20">
                                <MessageSquare className="w-4 h-4 text-brand-orange" />
                                <h3 className="font-heading font-bold text-sm text-brand-navy uppercase tracking-wider">
                                    Need Business Growth?
                                </h3>
                            </div>

                            <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                                Partner with Pragati Ujjayini to accelerate your digital presence and local market authority.
                            </p>

                            <div className="space-y-2.5 mb-5 text-xs text-zinc-700">
                                <a
                                    href="tel:+919179062235"
                                    className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-border/60 hover:border-brand-orange/40 hover:text-brand-orange transition-all"
                                >
                                    <div className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                                        <Phone className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="font-semibold text-zinc-800">+91 91790 62235</span>
                                </a>
                                <a
                                    href="mailto:info@grownfoster.com"
                                    className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-border/60 hover:border-brand-orange/40 hover:text-brand-orange transition-all"
                                >
                                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                                        <Mail className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="font-semibold text-zinc-800">info@grownfoster.com</span>
                                </a>
                            </div>

                            <Link
                                href="/contact"
                                className="block w-full text-center py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-orange to-amber-600 text-white font-bold text-xs shadow-md shadow-brand-orange/20 hover:shadow-lg hover:scale-[1.02] transition-all"
                            >
                                Get Free Consultation
                            </Link>
                        </div>
                    </aside>

                    {/* RIGHT COLUMN (Scrollable Main Content Area) */}
                    <main className="lg:col-span-8 bg-white border border-border/70 rounded-3xl p-6 sm:p-10 shadow-sm order-1 lg:order-2">
                        
                        {/* Article Header Metadata */}
                        <div className="space-y-4">
                            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                                <span className="bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full uppercase tracking-wider">
                                    {blog.category}
                                </span>
                                {blog.tags && blog.tags.map((tag, i) => (
                                    <span key={i} className="inline-flex items-center gap-1 bg-zinc-100 text-zinc-600 px-2.5 py-1 rounded-md">
                                        <Tag className="w-3 h-3 text-zinc-400" />
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="font-heading text-2xl sm:text-4xl font-black text-brand-navy tracking-tight leading-tight">
                                {blog.title}
                            </h1>

                            {/* Author & Published Info */}
                            <div className="flex items-center gap-3 pt-2 pb-4 border-b border-zinc-100 text-xs sm:text-sm text-zinc-500 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-orange to-amber-500 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                                        {(blog.author || "G")[0].toUpperCase()}
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-navy leading-none">{blog.author}</p>
                                        <p className="text-[11px] text-zinc-400 mt-0.5">{blog.authorRole}</p>
                                    </div>
                                </div>
                                <span className="text-zinc-300">•</span>
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                                    <span>{formattedDate}</span>
                                </div>
                            </div>
                        </div>

                        {/* Main Cover Image */}
                        {blog.image && (
                            <div className="my-6 overflow-hidden rounded-2xl border border-zinc-100 shadow-md">
                                <img
                                    src={blog.image}
                                    alt={blog.altText || blog.title}
                                    className="w-full h-auto max-h-[480px] object-cover"
                                />
                            </div>
                        )}

                        {/* Optional Excerpt Highlight */}
                        {blog.excerpt && (
                            <div className="my-6 p-4 sm:p-5 rounded-2xl bg-amber-50/60 border-l-4 border-brand-orange text-zinc-800 text-base sm:text-lg font-medium leading-relaxed italic">
                                {blog.excerpt}
                            </div>
                        )}

                        {/* Article Main Body (Rich Portable Text or Legacy HTML) */}
                        <article className="mt-6 text-zinc-800 leading-relaxed">
                            {blog.body && blog.body.length > 0 ? (
                                <PortableText value={blog.body} components={portableTextComponents} />
                            ) : (
                                <div
                                    className="prose max-w-none prose-headings:font-heading prose-headings:text-brand-navy prose-a:text-brand-orange"
                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                />
                            )}
                        </article>

                        {/* Interactive FAQ Section if present */}
                        {blog.faqSchema && blog.faqSchema.length > 0 && (
                            <section className="mt-12 pt-8 border-t border-zinc-200">
                                <div className="flex items-center gap-2 mb-6">
                                    <HelpCircle className="w-5 h-5 text-brand-orange" />
                                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-brand-navy">
                                        Frequently Asked Questions
                                    </h2>
                                </div>
                                <div className="space-y-4">
                                    {blog.faqSchema.map((faq, index) => (
                                        <div key={index} className="rounded-xl border border-border/80 bg-zinc-50/60 p-4.5 sm:p-5">
                                            <h3 className="font-bold text-base text-brand-navy mb-2 flex items-start gap-2">
                                                <span className="text-brand-orange font-black">Q.</span>
                                                {faq.question}
                                            </h3>
                                            <p className="text-sm text-zinc-700 leading-relaxed pl-6">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Author Bio Card */}
                        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-zinc-50 to-brand-cream/30 border border-border/60 flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-amber-500 text-white font-bold flex items-center justify-center text-lg flex-shrink-0 shadow-sm">
                                {(blog.author || "G")[0].toUpperCase()}
                            </div>
                            <div className="flex-1">
                                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider">Written By</span>
                                <h3 className="font-bold text-base text-brand-navy">{blog.author}</h3>
                                <p className="text-xs text-zinc-500 font-medium mb-2">{blog.authorRole}</p>
                                <p className="text-xs text-zinc-600 leading-relaxed">
                                    Providing insights, strategic digital marketing guidance, and modern web solutions for growing businesses.
                                </p>
                            </div>
                        </div>

                        {/* Footer navigation back link */}
                        <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:underline"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to All Posts
                            </Link>
                        </div>
                    </main>

                </div>
            </div>
        </div>
    );
}