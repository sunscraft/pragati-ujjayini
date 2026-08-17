import { NextResponse } from "next/server";
import Blog from "@/models/Blog";
import connectDB from "@/lib/db";

// GET /api/blog - fetch all blog posts
export async function GET() {
    try {
        await connectDB();
        const blogs = await Blog.find({}).sort({ createdAt: -1 }).lean();
        return NextResponse.json({ data: blogs });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
}

// POST /api/blog - create a new blog post
export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json();

        if (!body.title || !body.content) {
            return NextResponse.json(
                { error: "Title and content are required" },
                { status: 400 }
            );
        }

        // Generate a URL-friendly slug from the title
        const baseSlug = body.title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");

        // Ensure slug uniqueness by appending a timestamp suffix if needed
        let slug = baseSlug;
        const existing = await Blog.findOne({ slug }).lean();
        if (existing) {
            slug = `${baseSlug}-${Date.now()}`;
        }

        const blog = await Blog.create({
            title: body.title,
            content: body.content,
            image: body.image || "",
            author: body.author || "Admin",
            slug,
        });

        return NextResponse.json(blog, { status: 201 });
    } catch (error) {
        console.error("Error creating blog:", error);
        return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
    }
}