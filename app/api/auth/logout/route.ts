import { NextResponse } from 'next/server';

/**
 * Auth Logout Endpoint
 * 
 * POST /api/auth/logout
 */
export async function POST() {
    
    return NextResponse.json({ success: true });
}
