import { NextResponse } from 'next/server';

/**
 * Auth Logout Endpoint
 * 
 * POST /api/auth/logout
 */
export async function POST() {
    // Session handled by middleware in production
    return NextResponse.json({ success: true });
}
