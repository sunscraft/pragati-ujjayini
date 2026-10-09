import { NextResponse } from "next/server";
import Blog from "@/models/Blog";
import connectDB from "@/lib/db";
import { deleteSanityBlog, getSanityBlogBySlug } from "@/lib/sanity.client";

// GET /api/blog/[id] - fetch single blog post by id or slug
export async function GET(request, { params }) {
    try {
        const { id } = await params;

        // Try MongoDB first
        try {
            await connectDB();
            const blog = await Blog.findById(id).lean().catch(() => null)
                ?? await Blog.findOne({ slug: id }).lean();
            if (blog) {
                return NextResponse.json(blog);
            }
        } catch (mErr) {
            // Non-fatal, try Sanity
        }

        // Try Sanity
        try {
            const sanityBlog = await getSanityBlogBySlug(id);
            if (sanityBlog) {
                return NextResponse.json(sanityBlog);
            }
        } catch (sErr) {
            // Sanity error
        }

        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
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

// DELETE /api/blog/[id] - delete a blog post from Sanity and/or MongoDB
export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        let deletedFromSanity = false;
        let deletedFromMongo = false;

        // Try deleting from Sanity if ID belongs to Sanity or token is configured
        try {
            await deleteSanityBlog(id);
            deletedFromSanity = true;
        } catch (sanityErr) {
            // Not in Sanity or write token not provided
            console.warn("Sanity blog deletion info:", sanityErr.message);
        }

        // Try deleting from MongoDB
        try {
            await connectDB();
            const deleted = await Blog.findByIdAndDelete(id);
            if (deleted) {
                deletedFromMongo = true;
            }
        } catch (mongoErr) {
            // Not in Mongo or invalid ObjectId
            console.warn("MongoDB blog deletion info:", mongoErr.message);
        }

        if (deletedFromSanity || deletedFromMongo) {
            return NextResponse.json({ success: true, message: "Blog deleted successfully." });
        }

        return NextResponse.json({ error: "Blog post not found in Sanity or Database" }, { status: 404 });
    } catch (error) {
        console.error("Error deleting blog:", error);
        return NextResponse.json({ error: error.message || "Failed to delete blog" }, { status: 500 });
    }
}

