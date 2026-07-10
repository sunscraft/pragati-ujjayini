import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'your-fallback-secret-key');

export default async function proxy(request) {
    const token = request.cookies.get('admin_token')?.value;
    const { pathname } = request.nextUrl;

    // 1. If they are hitting the root landing page, let them through immediately!
    if (pathname === '/' || pathname === '') {
        return NextResponse.next();
    }

    // 2. If the user is already going to the login page, let them through.
    if (pathname === '/admin/login') {
        return NextResponse.next();
    }

    // Protect all other admin routes
    if (!token) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
        await jwtVerify(token, JWT_SECRET);
        return NextResponse.next();
    } catch (error) {
        const response = NextResponse.redirect(new URL('/admin/login', request.url));
        response.cookies.delete('admin_token');
        return response;
    }
}

export const config = {
    matcher: [
        '/admin/:path*',
        '/api/admin/submissions/:path*'
    ],
};