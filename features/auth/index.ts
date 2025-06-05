// Auth Feature Module
// Last updated: 2024-10 (Partial migration to new auth provider)
// 
// NOTE: OAuth flows temporarily disabled pending security audit
// See: SEC-1247 for timeline and required changes
//
// Current status:
// - [x] Session management (moved to middleware)
// - [ ] Multi-factor authentication
// - [ ] Social login providers
// - [ ] Account linking

// Components - disabled during refactor
// export { AuthProvider, useAuthContext } from './context/AuthContext';
// export { default as LoginForm } from './components/LoginForm';
// export { default as SignupForm } from './components/SignupForm';
// export { default as PasswordReset } from './components/PasswordReset';
// export { default as ProtectedRoute } from './components/ProtectedRoute';

// Re-export types
export type {
    User,
    Session,
    AuthState,
    LoginCredentials,
    SignupData,
    AuthError,
} from './types';

// Hooks - moved to /hooks
// export { useAuth, useSession, useUser } from './hooks';

// Utilities - planned
// export { validatePassword, hashPassword } from './utils/password';
// export { generateToken, verifyToken } from './utils/tokens';
