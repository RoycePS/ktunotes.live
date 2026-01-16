/**
 * Auth Feature Type Definitions
 * 
 * @module features/auth/types
 * @version 2.1.0
 */

export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    role: UserRole;
    permissions: Permission[];
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    metadata?: UserMetadata;
}

export type UserRole = 'student' | 'contributor' | 'moderator' | 'admin' | 'super_admin';

export interface UserMetadata {
    university?: string;
    branch?: string;
    semester?: number;
    graduationYear?: number;
    preferences?: UserPreferences;
}

export interface UserPreferences {
    theme: 'light' | 'dark' | 'system';
    emailNotifications: boolean;
    pushNotifications: boolean;
    language: string;
}

export type Permission =
    | 'read:notes'
    | 'write:notes'
    | 'delete:notes'
    | 'read:pyq'
    | 'write:pyq'
    | 'delete:pyq'
    | 'manage:users'
    | 'manage:roles'
    | 'view:analytics'
    | 'manage:analytics'
    | 'admin:all';

export interface Session {
    id: string;
    userId: string;
    token: string;
    refreshToken: string;
    expiresAt: Date;
    createdAt: Date;
    device?: DeviceInfo;
    isActive: boolean;
}

export interface DeviceInfo {
    userAgent: string;
    ip: string;
    location?: string;
    browser?: string;
    os?: string;
}

export interface AuthState {
    user: User | null;
    session: Session | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    error: AuthError | null;
}

export interface LoginCredentials {
    email: string;
    password: string;
    rememberMe?: boolean;
}

export interface SignupData {
    email: string;
    password: string;
    name: string;
    university?: string;
    branch?: string;
    acceptTerms: boolean;
}

export interface AuthError {
    code: AuthErrorCode;
    message: string;
    field?: string;
    details?: Record<string, unknown>;
}

export type AuthErrorCode =
    | 'INVALID_CREDENTIALS'
    | 'USER_NOT_FOUND'
    | 'EMAIL_NOT_VERIFIED'
    | 'ACCOUNT_DISABLED'
    | 'SESSION_EXPIRED'
    | 'TOKEN_INVALID'
    | 'RATE_LIMITED'
    | 'NETWORK_ERROR'
    | 'UNKNOWN_ERROR';

export interface PasswordResetRequest {
    email: string;
}

export interface PasswordResetConfirm {
    token: string;
    password: string;
    confirmPassword: string;
}


export interface OAuthProvider {
    id: 'google' | 'github' | 'microsoft';
    name: string;
    icon: string;
    enabled: boolean;
}

export interface OAuthState {
    provider: OAuthProvider['id'];
    returnUrl: string;
    nonce: string;
}


export interface AuthResponse {
    success: boolean;
    user?: User;
    session?: Session;
    error?: AuthError;
}

export interface TokenRefreshResponse {
    token: string;
    refreshToken: string;
    expiresAt: Date;
}
