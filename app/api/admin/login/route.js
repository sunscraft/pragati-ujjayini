import { NextResponse } from 'next/server';
import { signJWT } from '@/lib/jwt';

export async function POST(request) {
    const { username, password } = await request.json();

    // Hardcoded for simplicity, or look it up in your database
    const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'securepassword';

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        const token = await signJWT({ username });

        const response = NextResponse.json({ success: true, message: 'Logged in successfully' });

        // Store JWT in an HTTP-only cookie for security
        response.cookies.set('admin_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 2, // 2 hours
            path: '/',
        });

        return response;
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}