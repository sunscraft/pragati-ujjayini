import Blog from "@/models/Blog";
import connectDB from "@/lib/db";
import mongoose from "mongoose";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getSanityBlogBySlug } from "@/lib/sanity.client";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.pragatiujjayini.com";

function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

async function getBlogPost(id) {
    // 1. Fetch from Sanity CMS
    try {
        const sanityBlog = await getSanityBlogBySlug(id);
        if (sanityBlog) {
            return {
                _id: sanityBlog._id,
                title: sanityBlog.title,
                slug: sanityBlog.slug || id,
                author: sanityBlog.author || "Pragati Ujjayini Team",
                image: sanityBlog.imageUrl || (typeof sanityBlog.mainImage === 'string' ? sanityBlog.mainImage : null),
                content: typeof sanityBlog.content === 'string' ? sanityBlog.content : '',
                createdAt: sanityBlog.publishedAt || sanityBlog._createdAt,
                seoTitle: sanityBlog.seoTitle,
                seoDescription: sanityBlog.seoDescription,
                canonicalUrl: sanityBlog.canonicalUrl || `${BASE_URL}/blog/${sanityBlog.slug || id}`,
                schemaType: sanityBlog.schemaType || "BlogPosting",
                customSchemaJson: sanityBlog.customSchemaJson,
            };
        }
    } catch (err) {
        console.warn("Sanity fetch blog detail notice:", err.message);
    }

    // 2. Fallback to MongoDB
    try {
        await connectDB();
        let mongoBlog = await Blog.findOne({ slug: id }).lean().catch(() => null);

        if (!mongoBlog && mongoose.isValidObjectId(id)) {
            mongoBlog = await Blog.findById(id).lean().catch(() => null);
        }

        if (mongoBlog) {
            const rawSlug = mongoBlog.slug || mongoBlog._id.toString();
            return {
                _id: mongoBlog._id.toString(),
                title: mongoBlog.title,
                slug: rawSlug,
                author: mongoBlog.author || "Admin",
                image: mongoBlog.image,
                content: mongoBlog.content || '',
                createdAt: mongoBlog.createdAt,
                canonicalUrl: `${BASE_URL}/blog/${rawSlug}`,
                schemaType: "BlogPosting",
            };
        }
    } catch (err) {
        console.error("MongoDB fetch blog detail error:", err.message);
    }

    return null;
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const blog = await getBlogPost(id);

    if (!blog) {
        return { title: "Blog Post Not Found | Pragati Ujjayini" };
    }

    const title = blog.seoTitle || `${blog.title} | Pragati Ujjayini`;
    const description = blog.seoDescription || stripHtml(blog.content).slice(0, 160);
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
            images: blog.image ? [{ url: blog.image }] : [],
        },
    };
}

export default async function BlogPage({ params }) {
    const { id } = await params;
    const blog = await getBlogPost(id);

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

    // Construct Dynamic JSON-LD Schema
    let jsonLdSchema = null;
    if (blog.customSchemaJson) {
        try {
            jsonLdSchema = JSON.parse(blog.customSchemaJson);
        } catch (e) {
            console.error("Failed to parse custom JSON-LD schema:", e);
        }
    }

    if (!jsonLdSchema) {
        jsonLdSchema = {
            "@context": "https://schema.org",
            "@type": blog.schemaType || "BlogPosting",
            "headline": blog.title,
            "description": blog.seoDescription || stripHtml(blog.content).slice(0, 160),
            "url": canonicalUrl,
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": canonicalUrl,
            },
            "datePublished": blog.createdAt ? new Date(blog.createdAt).toISOString() : new Date().toISOString(),
            "author": {
                "@type": "Person",
                "name": blog.author || "Pragati Ujjayini Team",
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
    }

    return (
        <>
            {/* Dynamic Canonical Tag */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Dynamic JSON-LD Structured Data Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
            />

            {/* Injected Scoped Styles */}
            <style>{`
                .blog-hero {
                    background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #fef3c7 100%);
                    border-bottom: 1px solid #e2e8f0;
                    padding: 60px 20px 48px;
                    text-align: center;
                }
                .blog-hero-inner {
                    max-width: 760px;
                    margin: 0 auto;
                }
                .blog-hero-badge {
                    display: inline-block;
                    background: rgba(251, 146, 60, 0.12);
                    color: #ea580c;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    padding: 5px 14px;
                    border-radius: 99px;
                    margin-bottom: 20px;
                }
                .blog-hero h1 {
                    font-size: clamp(26px, 5vw, 42px);
                    font-weight: 900;
                    color: #0f172a;
                    line-height: 1.2;
                    letter-spacing: -0.03em;
                    margin: 0 0 20px;
                }
                .blog-meta {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 16px;
                    font-size: 13px;
                    color: #64748b;
                    flex-wrap: wrap;
                }
                .blog-meta-dot {
                    width: 4px;
                    height: 4px;
                    background: #cbd5e1;
                    border-radius: 50%;
                }
                .blog-cover {
                    max-width: 900px;
                    margin: -24px auto 0;
                    padding: 0 20px;
                }
                .blog-cover img {
                    width: 100%;
                    height: auto;
                    max-height: 480px;
                    object-fit: cover;
                    border-radius: 16px;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.12);
                    display: block;
                }
                .blog-body {
                    max-width: 760px;
                    margin: 0 auto;
                    padding: 48px 20px 80px;
                }
                .blog-content {
                    font-size: 17px;
                    line-height: 1.8;
                    color: #1e293b;
                }
                .blog-content p { margin: 0 0 1.4em; }
                .blog-content h2 {
                    font-size: 1.5em;
                    font-weight: 800;
                    color: #0f172a;
                    margin: 2em 0 0.6em;
                    letter-spacing: -0.02em;
                }
                .blog-content h3 {
                    font-size: 1.2em;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 1.6em 0 0.5em;
                }
                .blog-content ul, .blog-content ol {
                    padding-left: 1.6em;
                    margin: 0 0 1.4em;
                }
                .blog-content li { margin-bottom: 0.4em; }
                .blog-content strong { color: #0f172a; }
                .blog-content em { color: #334155; }
                .blog-content u { text-decoration-color: #fb923c; }
                .blog-content blockquote {
                    border-left: 4px solid #fb923c;
                    margin: 1.6em 0;
                    padding: 12px 20px;
                    background: #fff7ed;
                    border-radius: 0 8px 8px 0;
                    color: #92400e;
                    font-style: italic;
                }
                .blog-content s { color: #94a3b8; }
                .blog-divider {
                    border: none;
                    border-top: 1px solid #e2e8f0;
                    margin: 40px 0;
                }
                .blog-back {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 14px;
                    font-weight: 600;
                    color: #ea580c;
                    text-decoration: none;
                    transition: gap 0.2s;
                }
                .blog-back:hover { gap: 12px; }
                .blog-author-card {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    background: linear-gradient(135deg, #f8fafc, #eff6ff);
                    border: 1px solid #e2e8f0;
                    border-radius: 14px;
                    padding: 18px 22px;
                    margin-top: 40px;
                }
                .blog-author-avatar {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #fb923c, #f97316);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    font-weight: 700;
                    color: white;
                    flex-shrink: 0;
                }
                .blog-author-name {
                    font-size: 14px;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0 0 2px;
                }
                .blog-author-label {
                    font-size: 12px;
                    color: #64748b;
                    margin: 0;
                }
            `}</style>

            {/* Hero Section */}
            <div className="blog-hero">
                <div className="blog-hero-inner">
                    <span className="blog-hero-badge">Blog Post</span>
                    <h1>{blog.title}</h1>
                    <div className="blog-meta">
                        <span>✍️ {blog.author || "Admin"}</span>
                        <span className="blog-meta-dot" />
                        <span>📅 {formattedDate}</span>
                    </div>
                </div>
            </div>

            {/* Cover Image */}
            {blog.image && (
                <div className="blog-cover" style={{ marginTop: "32px" }}>
                    <img src={blog.image} alt={blog.title} />
                </div>
            )}

            {/* Body */}
            <div className="blog-body">
                {/* Rich-text content rendered as HTML */}
                <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                <hr className="blog-divider" />

                {/* Author card */}
                <div className="blog-author-card">
                    <div className="blog-author-avatar">
                        {(blog.author || "A")[0].toUpperCase()}
                    </div>
                    <div>
                        <p className="blog-author-name">{blog.author || "Admin"}</p>
                        <p className="blog-author-label">Content Author · Pragati Ujjayini</p>
                    </div>
                </div>

                {/* Back link */}
                <div style={{ marginTop: "40px" }}>
                    <Link href="/blog" className="blog-back">
                        ← Back to all posts
                    </Link>
                </div>
            </div>
        </>
    );
}