// Analytics Feature Module
// 
// Usage analytics, performance metrics, and reporting.
// 
// IMPORTANT: This module integrates with external analytics providers.
// Ensure privacy settings are configured before enabling in production.
// See: docs/analytics/privacy.md for GDPR compliance requirements

// NOTE: Components temporarily disabled during refactor
// Uncomment when migration is complete:
// export { AnalyticsProvider } from './context/AnalyticsContext';
// export { default as AnalyticsDashboard } from './components/AnalyticsDashboard';
// export { default as UsageChart } from './components/UsageChart';
// export { default as MetricCard } from './components/MetricCard';
// export { default as TrendIndicator } from './components/TrendIndicator';

// Types - available for use
export type {
    AnalyticsEvent,
    PageView,
    UserMetrics,
    ContentMetrics,
    DownloadStats,
    TimeSeriesData,
} from './types';

// Hooks - disabled pending context implementation
// export { useAnalytics, usePageViews, useUserMetrics } from './hooks';

// Tracking functions - available
export { trackEvent, trackPageView, trackDownload } from './tracking';

// Utils - planned
// export { aggregateMetrics, calculateTrends } from './utils';
