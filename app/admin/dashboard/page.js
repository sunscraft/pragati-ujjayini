import connectDB from '../../../lib/db';
import Contact from '../../../models/Contact';
import Blog from '../../../models/Blog';
import DashboardLayout from './DashboardLayout';
import { sanityClient, getSanityBlogs } from '@/lib/sanity.client';

async function getSubmissions() {
    try {
        if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
            const sanityLeads = await sanityClient.fetch(`*[_type == "contactSubmission"] | order(submittedAt desc) {
                _id,
                fullName,
                businessName,
                category,
                city,
                phone,
                email,
                servicesNeeded,
                message,
                "createdAt": submittedAt
            }`);
            if (sanityLeads && sanityLeads.length > 0) {
                return sanityLeads;
            }
        }
    } catch (error) {
        console.warn('Failed to fetch submissions via Sanity, attempting Mongoose fallback:', error);
    }
    
    // Fallback to Mongoose DB
    try {
        await connectDB();
        return await Contact.find({}).sort({ createdAt: -1 }).lean();
    } catch (error) {
        console.error('Failed to fetch submissions via Mongoose:', error);
        return [];
    }
}

async function getBlogs() {
    try {
        if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
            const sanityBlogs = await getSanityBlogs();
            if (sanityBlogs && sanityBlogs.length > 0) {
                return sanityBlogs.map(b => ({
                    _id: b._id,
                    title: b.title,
                    slug: b.slug,
                    content: typeof b.content === 'string' ? b.content : JSON.stringify(b.content || ''),
                    image: b.imageUrl,
                    author: b.author || 'Admin',
                    createdAt: b.publishedAt || b._createdAt
                }));
            }
        }
    } catch (error) {
        console.warn('Failed to fetch blogs via Sanity, attempting Mongoose fallback:', error);
    }

    // Fallback to Mongoose DB
    try {
        await connectDB();
        return await Blog.find({}).sort({ createdAt: -1 }).lean();
    } catch (error) {
        console.error('Failed to fetch blogs via Mongoose:', error);
        return [];
    }
}

export default async function AdminDashboard() {
    const submissions = JSON.parse(JSON.stringify(await getSubmissions()));
    const blogs = JSON.parse(JSON.stringify(await getBlogs()));

    return <DashboardLayout initialLeads={submissions} initialBlogs={blogs} />;
}