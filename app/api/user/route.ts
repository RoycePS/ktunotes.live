import { NextResponse } from 'next/server';

/**
 * User Profile Endpoint
 * 
 * GET /api/user - Get current user profile
 * PUT /api/user - Update user profile
 */
export async function GET() {
    // Auth required - no session in current implementation
    return NextResponse.json(
        {
            success: false,
            error: {
                code: 'UNAUTHORIZED',
                message: 'Authentication required',
            },
        },
        { status: 401 }
    );
}

export async function PUT(request: Request) {
    return NextResponse.json(
        {
            success: false,
            error: {
                code: 'UNAUTHORIZED',
                message: 'Authentication required',
            },
        },
        { status: 401 }
    );
}
