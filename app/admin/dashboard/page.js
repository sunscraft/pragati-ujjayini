import connectDB from '../../../lib/db';
import Contact from '../../../models/Contact';
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

export default async function AdminDashboard() {
    const submissions = JSON.parse(JSON.stringify(await getSubmissions()));

    return <DashboardLayout initialLeads={submissions} />;
}