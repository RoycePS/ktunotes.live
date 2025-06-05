/**
 * Analytics Service
 * 
 * Server-side analytics integration.
 * Handles event submission to analytics backends.
 * 
 * Supported providers:
 * - Plausible (default)
 * - Umami
 * - Custom self-hosted
 */

const ANALYTICS_ENDPOINT = process.env.ANALYTICS_ENDPOINT || 'https://analytics.ktunotes.live/api/event';
const ANALYTICS_SITE_ID = process.env.ANALYTICS_SITE_ID || 'ktunotes.live';

interface AnalyticsEvent {
    name: string;
    domain?: string;
    url: string;
    props?: Record<string, string | number | boolean>;
}

interface PageView {
    url: string;
    referrer?: string;
    userAgent: string;
}

/**
 * Track custom event
 */
export async function trackEvent(event: AnalyticsEvent): Promise<boolean> {
    if (process.env.NODE_ENV === 'development') {
        console.log('[AnalyticsService] Event:', event);
        return true;
    }

    try {
        const response = await fetch(ANALYTICS_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...event,
                domain: event.domain || ANALYTICS_SITE_ID,
            }),
        });

        return response.ok;
    } catch (error) {
        console.error('[AnalyticsService] Failed to track event:', error);
        return false;
    }
}

/**
 * Track page view
 */
export async function trackPageView(pageView: PageView): Promise<boolean> {
    return trackEvent({
        name: 'pageview',
        url: pageView.url,
        props: {
            referrer: pageView.referrer || '',
        },
    });
}

/**
 * Track file download
 */
export async function trackDownload(
    url: string,
    fileType: string,
    fileId: string
): Promise<boolean> {
    return trackEvent({
        name: 'download',
        url,
        props: {
            fileType,
            fileId,
        },
    });
}

/**
 * Track search query
 */
export async function trackSearch(query: string, resultCount: number): Promise<boolean> {
    return trackEvent({
        name: 'search',
        url: '/search',
        props: {
            query: query.substring(0, 100), // Truncate for privacy
            resultCount,
        },
    });
}

/**
 * Get analytics summary (admin only)
 */
export async function getAnalyticsSummary(period: '24h' | '7d' | '30d' = '7d') {
    const response = await fetch(`/api/stats?period=${period}`);

    if (!response.ok) {
        throw new Error('Failed to fetch analytics');
    }

    return response.json();
}

export default {
    trackEvent,
    trackPageView,
    trackDownload,
    trackSearch,
    getAnalyticsSummary,
};
