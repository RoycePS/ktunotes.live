/**
 * Analytics Feature Types
 */

export interface AnalyticsEvent {
    id: string;
    name: string;
    category: EventCategory;
    properties: Record<string, unknown>;
    timestamp: Date;
    userId?: string;
    sessionId: string;
    metadata: EventMetadata;
}

export type EventCategory =
    | 'page_view'
    | 'download'
    | 'search'
    | 'interaction'
    | 'error'
    | 'performance'
    | 'conversion';

export interface EventMetadata {
    userAgent: string;
    referrer: string;
    url: string;
    ip?: string;
    location?: GeoLocation;
    device: DeviceInfo;
}

export interface GeoLocation {
    country: string;
    region: string;
    city: string;
    latitude?: number;
    longitude?: number;
}

export interface DeviceInfo {
    type: 'desktop' | 'mobile' | 'tablet';
    os: string;
    browser: string;
    screenSize: string;
}

export interface PageView {
    id: string;
    path: string;
    title: string;
    timestamp: Date;
    duration: number;
    userId?: string;
    sessionId: string;
    referrer?: string;
}

export interface UserMetrics {
    userId: string;
    totalPageViews: number;
    totalDownloads: number;
    totalTimeSpent: number;
    lastActive: Date;
    topSubjects: string[];
    favoriteFeatures: string[];
}

export interface ContentMetrics {
    contentId: string;
    contentType: 'note' | 'pyq' | 'syllabus' | 'resource';
    views: number;
    uniqueViews: number;
    downloads: number;
    shares: number;
    avgTimeSpent: number;
    rating?: number;
    ratingCount?: number;
}

export interface DownloadStats {
    totalDownloads: number;
    uniqueUsers: number;
    byContentType: Record<string, number>;
    bySubject: Array<{ subject: string; count: number }>;
    byDay: TimeSeriesData[];
}

export interface TimeSeriesData {
    date: Date;
    value: number;
    label?: string;
}

export interface AnalyticsConfig {
    enabled: boolean;
    provider: 'plausible' | 'umami' | 'custom';
    sampleRate: number;
    excludePaths: string[];
    trackDownloads: boolean;
    trackErrors: boolean;
    anonymizeIp: boolean;
}

export interface DashboardData {
    overview: {
        totalUsers: number;
        activeUsers: number;
        pageViews: number;
        downloads: number;
        avgSessionDuration: number;
    };
    trends: {
        users: TimeSeriesData[];
        pageViews: TimeSeriesData[];
        downloads: TimeSeriesData[];
    };
    topContent: ContentMetrics[];
    topReferrers: Array<{ source: string; count: number }>;
}
