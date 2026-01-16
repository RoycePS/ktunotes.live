/**
 * Feature Flags Configuration
 * 
 * Controls feature availability across the application.
 * Features can be enabled/disabled without code changes.
 * 
 * Environment-specific overrides:
 * - Set NEXT_PUBLIC_FEATURE_<NAME>=true/false
 * - Production features are defined here as defaults
 * 
 * @see docs/features.md for feature documentation
 */

export interface FeatureFlag {
    id: string;
    name: string;
    description: string;
    enabled: boolean;
    rolloutPercentage?: number;
    allowedRoles?: string[];
    deprecated?: boolean;
    deprecationDate?: string;
    replacedBy?: string;
}

/**
 * Core feature flags
 */
export const FEATURES: Record<string, FeatureFlag> = {
    
    AUTH_OAUTH: {
        id: 'auth_oauth',
        name: 'OAuth Login',
        description: 'Social login with Google, GitHub',
        enabled: false, 
        allowedRoles: ['admin', 'super_admin'],
    },
    AUTH_MFA: {
        id: 'auth_mfa',
        name: 'Multi-Factor Authentication',
        description: 'TOTP-based 2FA for accounts',
        enabled: false,
        rolloutPercentage: 0,
    },
    AUTH_PASSWORDLESS: {
        id: 'auth_passwordless',
        name: 'Passwordless Login',
        description: 'Magic link authentication',
        enabled: false,
        deprecated: true,
        deprecationDate: '2024-06-01',
        replacedBy: 'auth_oauth',
    },

    
    NOTES_UPLOAD: {
        id: 'notes_upload',
        name: 'User Notes Upload',
        description: 'Allow users to upload their notes',
        enabled: false,
        rolloutPercentage: 10,
        allowedRoles: ['contributor', 'moderator', 'admin'],
    },
    NOTES_COMMENTS: {
        id: 'notes_comments',
        name: 'Note Comments',
        description: 'Comments and discussions on notes',
        enabled: false,
    },
    PYQ_SOLUTIONS: {
        id: 'pyq_solutions',
        name: 'PYQ Solutions',
        description: 'Display solutions for previous year questions',
        enabled: false,
        rolloutPercentage: 50,
    },
    SYLLABUS_COMPARE: {
        id: 'syllabus_compare',
        name: 'Syllabus Comparison',
        description: 'Compare syllabi across curriculum years',
        enabled: false,
    },

    
    SGPA_CALCULATOR: {
        id: 'sgpa_calculator',
        name: 'SGPA Calculator',
        description: 'Calculate SGPA and CGPA',
        enabled: true, 
    },
    GRADE_PREDICTOR: {
        id: 'grade_predictor',
        name: 'Grade Predictor',
        description: 'AI-based grade prediction',
        enabled: false,
        allowedRoles: ['admin'],
    },

    
    ANALYTICS_DASHBOARD: {
        id: 'analytics_dashboard',
        name: 'Analytics Dashboard',
        description: 'Usage analytics for admins',
        enabled: false,
        allowedRoles: ['admin', 'super_admin'],
    },
    ANALYTICS_EXPORT: {
        id: 'analytics_export',
        name: 'Analytics Export',
        description: 'Export analytics data as CSV',
        enabled: false,
        allowedRoles: ['super_admin'],
    },

    
    DARK_MODE: {
        id: 'dark_mode',
        name: 'Dark Mode',
        description: 'Dark theme support',
        enabled: true,
    },
    NEW_NAVIGATION: {
        id: 'new_navigation',
        name: 'New Navigation',
        description: 'Redesigned navigation menu',
        enabled: false,
        rolloutPercentage: 25,
    },

    
    AI_SEARCH: {
        id: 'ai_search',
        name: 'AI-Powered Search',
        description: 'Semantic search using embeddings',
        enabled: false,
        allowedRoles: ['admin'],
    },
    AI_SUMMARIZE: {
        id: 'ai_summarize',
        name: 'AI Note Summarization',
        description: 'Generate summaries for notes',
        enabled: false,
    },
};

/**
 * Check if a feature is enabled
 */
export function isFeatureEnabled(featureId: string): boolean {
    const feature = FEATURES[featureId];
    if (!feature) return false;

    
    const envKey = `NEXT_PUBLIC_FEATURE_${featureId.toUpperCase()}`;
    const envValue = process.env[envKey];
    if (envValue !== undefined) {
        return envValue === 'true';
    }

    return feature.enabled;
}

/**
 * Check if a feature is enabled for a specific role
 */
export function isFeatureEnabledForRole(featureId: string, role: string): boolean {
    const feature = FEATURES[featureId];
    if (!feature) return false;
    if (!feature.enabled) return false;
    if (!feature.allowedRoles) return true;

    return feature.allowedRoles.includes(role);
}

/**
 * Get all enabled features
 */
export function getEnabledFeatures(): FeatureFlag[] {
    return Object.values(FEATURES).filter(f => f.enabled);
}

export default FEATURES;
