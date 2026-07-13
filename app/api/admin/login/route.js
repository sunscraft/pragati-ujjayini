import { NextResponse } from 'next/server';
import { signJWT } from '@/lib/jwt';
import bcrypt from 'bcryptjs';

export async function POST(request) {
    try {
        const { username, password } = await request.json();

        // Retrieve credentials from environment variables with fallbacks
        const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
        const ADMIN_PASSWORD_ENV = process.env.ADMIN_PASSWORD || 'admin123';

        // Clean any quotes surrounding the environment variables
        const cleanUsername = ADMIN_USERNAME.replace(/^["']|["']$/g, '');
        let cleanPasswordOrHash = ADMIN_PASSWORD_ENV.replace(/^["']|["']$/g, '');

        // Automatically strip leading slash from bcrypt hash if present
        if (cleanPasswordOrHash.startsWith('/$2a$') ||
            cleanPasswordOrHash.startsWith('/$2b$') ||
            cleanPasswordOrHash.startsWith('/$2y$')) {
            cleanPasswordOrHash = cleanPasswordOrHash.substring(1);
        }

        // Check password - support both bcrypt hash and plain text
        let isPasswordValid = false;
        const isBcryptHash = cleanPasswordOrHash.startsWith('$2a$') ||
            cleanPasswordOrHash.startsWith('$2b$') ||
            cleanPasswordOrHash.startsWith('$2y$');

        if (isBcryptHash) {
            isPasswordValid = await bcrypt.compare(password, cleanPasswordOrHash);
        } else {
            isPasswordValid = (password === cleanPasswordOrHash);
        }

        // --- TERMINAL DEBUG LOGS ---
        console.log("================ DETAILED AUTH DEBUG ================");
        console.log("Incoming Username:", username);
        console.log("Expected Username (from env):", cleanUsername);
        console.log("Incoming Password typed by user:", password);
        console.log("Raw ADMIN_PASSWORD from env:", ADMIN_PASSWORD_ENV);
        console.log("Cleaned ADMIN_PASSWORD:", cleanPasswordOrHash);
        console.log("Is Bcrypt?:", isBcryptHash);
        console.log("Hashes/Password Match?:", isPasswordValid);
        console.log("=====================================================");

        if (username === cleanUsername && isPasswordValid) {
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
    } catch (error) {
        console.error("Route Crash Error:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}