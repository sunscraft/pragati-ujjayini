import Link from "next/link";
import Blog from "@/models/Blog";
import connectDB from "@/utils/db";

export const revalidate = 0; // Disable static caching so new posts show up immediately

export default async function BlogListPage() {
    // Connect to the database on the server
    await connectDB();

    // Query MongoDB directly
    const rawBlogs = await Blog.find({}).sort({ createdAt: -1 }).lean();
    const blogs = JSON.parse(JSON.stringify(rawBlogs));

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Blogs</h1>
            <div style={{ display: "grid", gap: "1.5rem", marginTop: "1rem" }}>
                {blogs.length === 0 ? (
                    <p>No blog posts found.</p>
                ) : (
                    blogs.map((post) => (
                        <div key={post._id} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
                            <h2>{post.title}</h2>
                            <p>{post.content?.slice(0, 150)}...</p>
                            <Link href={`/blog/${post._id}`}>Read More →</Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}