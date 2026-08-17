import connectDB from '../../../lib/db';
import Contact from '../../../models/Contact';
import Blog from '../../../models/Blog';
import DashboardLayout from './DashboardLayout';

async function getSubmissions() {
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