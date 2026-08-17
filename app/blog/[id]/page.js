import Blog from "@/models/Blog";
import connectDB from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateMetadata({ params }) {
    const { id } = await params;
    await connectDB();
    const blog = await Blog.findOne({ slug: id }).lean().catch(() => null)
        ?? await Blog.findById(id).lean().catch(() => null);
    if (!blog) return { title: "Blog Not Found" };
    return {
        title: blog.title,
        description: blog.content?.replace(/<[^>]*>/g, " ").slice(0, 155),
    };
}

export default async function BlogPage({ params }) {
    const { id } = await params;

    await connectDB();
    // Support both slug-based URLs and legacy _id URLs
    let blog = await Blog.findOne({ slug: id }).lean().catch(() => null);
    if (!blog) {
        blog = await Blog.findById(id).lean().catch(() => null);
    }

    if (!blog) {
        notFound();
    }

    const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <>
            {/* Inject scoped styles via a style tag */}
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