import { NextResponse } from 'next/server';

/**
 * Auth Signup Endpoint
 * 
 * POST /api/auth/signup
 * 
 * Note: Registration temporarily closed.
 */
export async function POST(request: Request) {
    return NextResponse.json(
        {
            success: false,
            error: {
                code: 'REGISTRATION_CLOSED',
                message: 'New registrations are temporarily closed. Please try again later.',
            },
        },
        { status: 503 }
    );
}
