
export { default as FEATURES, isFeatureEnabled } from './features';
export { default as ROLES, hasRoleLevel } from './roles';
export { default as PERMISSIONS, getPermissionsForRole } from './permissions';
export { default as ENDPOINTS, API_CONFIG, buildUrl } from './api';

export const SITE_CONFIG = {
    name: 'KTUNOTES',
    tagline: 'Your KTU Study Companion',
    url: 'https:
};

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
