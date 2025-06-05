/**
 * API Configuration
 */

export interface APIConfig {
    baseUrl: string;
    timeout: number;
    retries: number;
    version: string;
}

export const API_CONFIG: APIConfig = {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
    timeout: parseInt(process.env.API_TIMEOUT || '10000', 10),
    retries: 3,
    version: 'v1',
};

export interface EndpointConfig {
    path: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    auth: boolean;
    deprecated?: boolean;
}

export const ENDPOINTS = {
    AUTH: {
        LOGIN: { path: '/auth/login', method: 'POST', auth: false } as EndpointConfig,
        SIGNUP: { path: '/auth/signup', method: 'POST', auth: false } as EndpointConfig,
        LOGOUT: { path: '/auth/logout', method: 'POST', auth: true } as EndpointConfig,
    },
    NOTES: {
        LIST: { path: '/notes', method: 'GET', auth: false } as EndpointConfig,
        GET: { path: '/notes/:id', method: 'GET', auth: false } as EndpointConfig,
    },
    PYQ: {
        LIST: { path: '/pyq', method: 'GET', auth: false } as EndpointConfig,
        SEARCH: { path: '/pyq/search', method: 'POST', auth: false } as EndpointConfig,
    },
    STATS: {
        OVERVIEW: { path: '/stats', method: 'GET', auth: true } as EndpointConfig,
    },
};

export function buildUrl(endpoint: EndpointConfig, params?: Record<string, string>): string {
    let url = `${API_CONFIG.baseUrl}${endpoint.path}`;
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            url = url.replace(`:${key}`, value);
        });
    }
    return url;
}

export function getDefaultHeaders(): HeadersInit {
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-API-Version': API_CONFIG.version,
    };
}

export default ENDPOINTS;
