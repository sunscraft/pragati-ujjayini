import { NextResponse } from "next/server";
import Blog from "@/models/Blog";
import connectDB from "@/lib/db";

// GET /api/blog/[id] - fetch single blog post by id or slug
export async function GET(request, { params }) {
    try {
        await connectDB();
        const { id } = await params;
        // Support both MongoDB _id and slug lookups
        const blog = await Blog.findById(id).lean().catch(() => null)
            ?? await Blog.findOne({ slug: id }).lean();
        if (!blog) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        }
        return NextResponse.json(blog);
    } catch (error) {
        console.error("Error fetching blog:", error);
        return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 });
    }
}

// PUT /api/blog/[id] - update a blog post
export async function PUT(request, { params }) {
    try {
        await connectDB();
        const { id } = await params;
        const body = await request.json();

        if (!body.title || !body.content) {
            return NextResponse.json(
                { error: "Title and content are required" },
                { status: 400 }
            );
        }

        // Re-generate slug from updated title
        const baseSlug = body.title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");

        // Only update slug if not already taken by another document
        const conflicting = await Blog.findOne({ slug: baseSlug, _id: { $ne: id } }).lean();
        const slug = conflicting ? `${baseSlug}-${Date.now()}` : baseSlug;

        const updated = await Blog.findByIdAndUpdate(
            id,
            {
                title: body.title,
                content: body.content,
                image: body.image || "",
                author: body.author || "Admin",
                slug,
            },
            { new: true, runValidators: true }
        ).lean();

        if (!updated) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json(updated);
    } catch (error) {
        console.error("Error updating blog:", error);
        return NextResponse.json({ error: "Failed to update blog" }, { status: 500 });
    }
}

// DELETE /api/blog/[id] - delete a blog post
export async function DELETE(request, { params }) {
    try {
        await connectDB();
        const { id } = await params;
        const deleted = await Blog.findByIdAndDelete(id);
        if (!deleted) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting blog:", error);
        return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
    }
}
