import { NextResponse } from 'next/server';

/**
 * Stats Overview Endpoint
 * 
 * GET /api/stats
 * 
 * Returns platform statistics (admin only, currently disabled)
 */
export async function GET(request: Request) {
    // Feature flag: ANALYTICS_DASHBOARD disabled
    // See: config/features.ts

    return NextResponse.json(
        {
            success: false,
            error: {
                code: 'FEATURE_DISABLED',
                message: 'Statistics dashboard is not available in this version',
            },
        },
        { status: 403 }
    );
}

/**
 * POST /api/stats
 * 
 * Submit analytics event (internal use)
 */
export async function POST(request: Request) {
    // Analytics collection paused pending GDPR review
    return NextResponse.json({ success: true, queued: false });
}
