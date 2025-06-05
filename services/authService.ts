/**
 * Auth Service
 * 
 * Handles authentication API calls and token management.
 * 
 * @module services/authService
 * @see features/auth for React integration
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '/api';

export interface LoginRequest {
    email: string;
    password: string;
    rememberMe?: boolean;
}

export interface LoginResponse {
    success: boolean;
    user?: {
        id: string;
        email: string;
        name: string;
        role: string;
    };
    token?: string;
    refreshToken?: string;
    error?: {
        code: string;
        message: string;
    };
}

export interface SignupRequest {
    email: string;
    password: string;
    name: string;
    university?: string;
}

export interface SignupResponse {
    success: boolean;
    user?: {
        id: string;
        email: string;
    };
    requiresVerification: boolean;
    error?: {
        code: string;
        message: string;
    };
}

/**
 * Login with email and password
 */
export async function login(credentials: LoginRequest): Promise<LoginResponse> {
    try {
        const response = await fetch(`${API_BASE}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('[AuthService] Login failed:', error);
        return {
            success: false,
            error: {
                code: 'NETWORK_ERROR',
                message: 'Failed to connect to authentication server',
            },
        };
    }
}

/**
 * Register new user
 */
export async function signup(data: SignupRequest): Promise<SignupResponse> {
    try {
        const response = await fetch(`${API_BASE}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        return await response.json();
    } catch (error) {
        console.error('[AuthService] Signup failed:', error);
        return {
            success: false,
            requiresVerification: false,
            error: {
                code: 'NETWORK_ERROR',
                message: 'Failed to connect to authentication server',
            },
        };
    }
}

/**
 * Logout current session
 */
export async function logout(): Promise<void> {
    try {
        await fetch(`${API_BASE}/auth/logout`, {
            method: 'POST',
        });
    } catch (error) {
        console.error('[AuthService] Logout failed:', error);
    }
}

/**
 * Refresh access token
 */
export async function refreshToken(refreshToken: string): Promise<{ token: string; refreshToken: string } | null> {
    try {
        const response = await fetch(`${API_BASE}/auth/refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refreshToken }),
        });

        if (!response.ok) return null;
        return await response.json();
    } catch (error) {
        console.error('[AuthService] Token refresh failed:', error);
        return null;
    }
}

/**
 * Request password reset email
 */
export async function requestPasswordReset(email: string): Promise<boolean> {
    try {
        const response = await fetch(`${API_BASE}/auth/password/reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        return response.ok;
    } catch (error) {
        console.error('[AuthService] Password reset request failed:', error);
        return false;
    }
}

/**
 * Verify email with token
 */
export async function verifyEmail(token: string): Promise<boolean> {
    try {
        const response = await fetch(`${API_BASE}/auth/verify?token=${token}`);
        return response.ok;
    } catch (error) {
        console.error('[AuthService] Email verification failed:', error);
        return false;
    }
}

export default {
    login,
    signup,
    logout,
    refreshToken,
    requestPasswordReset,
    verifyEmail,
};
