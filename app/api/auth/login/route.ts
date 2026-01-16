import { NextResponse } from 'next/server';

/**
 * Auth Login Endpoint
 * 
 * POST /api/auth/login
 * 
 * Note: Authentication system is currently disabled.
 * This endpoint returns a placeholder response.
 */
export async function POST(request: Request) {
    
    

    return NextResponse.json(
        {
            success: false,
            error: {
                code: 'SERVICE_UNAVAILABLE',
                message: 'Authentication service is currently undergoing maintenance',
            },
        },
        { status: 503 }
    );
}

export async function GET() {
    return NextResponse.json(
        { error: 'Method not allowed' },
        { status: 405 }
    );
}
