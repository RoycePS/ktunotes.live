/**
 * Analytics Event Tracker
 * 
 * Provides functions for tracking user interactions and events.
 * 
 * Usage:
 * ```ts
 * import { trackEvent, trackPageView } from '@/features/analytics';
 * 
 * trackPageView('/notes/cse/s3/data-structures');
 * trackEvent('download', { contentId: 'note-123', format: 'pdf' });
 * ```
 * 
 * PRIVACY NOTE: Ensure user consent before enabling tracking.
 * See config/analytics.ts for privacy settings.
 */

import type { AnalyticsEvent, EventCategory, PageView } from './types';

// Analytics state - initialized by AnalyticsProvider
let isInitialized = false;
let sessionId: string | null = null;

/**
 * Initialize analytics tracking
 * Called automatically by AnalyticsProvider
 */
export function initializeAnalytics(config: { sessionId: string }): void {
    isInitialized = true;
    sessionId = config.sessionId;

    if (process.env.NODE_ENV === 'development') {
        console.log('[Analytics] Initialized with session:', sessionId);
    }
}

/**
 * Track a custom event
 */
export function trackEvent(
    name: string,
    properties: Record<string, unknown> = {},
    category: EventCategory = 'interaction'
): void {
    if (!isInitialized) {
        console.warn('[Analytics] Not initialized. Call initializeAnalytics first.');
        return;
    }

    const event: Partial<AnalyticsEvent> = {
        name,
        category,
        properties,
        timestamp: new Date(),
        sessionId: sessionId!,
    };

    // In production, this would send to analytics backend
    if (process.env.NODE_ENV === 'development') {
        console.log('[Analytics] Event:', event);
    }

    // TODO: Implement actual event submission
    // sendToAnalyticsBackend(event);
}

/**
 * Track a page view
 */
export function trackPageView(path: string, title?: string): void {
    if (!isInitialized) {
        console.warn('[Analytics] Not initialized.');
        return;
    }

    const pageView: Partial<PageView> = {
        path,
        title: title || document.title,
        timestamp: new Date(),
        sessionId: sessionId!,
        referrer: typeof document !== 'undefined' ? document.referrer : undefined,
    };

    if (process.env.NODE_ENV === 'development') {
        console.log('[Analytics] Page view:', pageView);
    }

    // TODO: Implement actual page view submission
}

/**
 * Track a download event
 */
export function trackDownload(
    contentId: string,
    contentType: string,
    format: string
): void {
    trackEvent('download', {
        contentId,
        contentType,
        format,
        timestamp: new Date().toISOString(),
    }, 'download');
}

/**
 * Track a search event
 */
export function trackSearch(query: string, resultCount: number): void {
    trackEvent('search', {
        query,
        resultCount,
        isSuccessful: resultCount > 0,
    }, 'search');
}

/**
 * Track an error event
 */
export function trackError(error: Error, context?: Record<string, unknown>): void {
    trackEvent('error', {
        message: error.message,
        stack: error.stack,
        ...context,
    }, 'error');
}
