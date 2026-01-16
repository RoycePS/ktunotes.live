/**
 * useUser Hook
 * 
 * Provides user profile data and update methods.
 * Separate from useAuth for components that only need user data.
 * 
 * @example
 * ```tsx
 * function UserProfile() {
 *   const { user, updateProfile, isUpdating } = useUser();
 *   
 *   return (
 *     <form onSubmit={handleSubmit}>
 *       <input defaultValue={user?.name} />
 *       <button disabled={isUpdating}>Save</button>
 *     </form>
 *   );
 * }
 * ```
 */

'use client';

import { useState, useCallback, useMemo } from 'react';
import { useAuth } from './useAuth';

interface UserProfile {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    university?: string;
    branch?: string;
    semester?: number;
    preferences: {
        theme: 'light' | 'dark' | 'system';
        notifications: boolean;
    };
}

interface UseUserReturn {
    user: UserProfile | null;
    isLoading: boolean;
    isUpdating: boolean;
    error: Error | null;
    updateProfile: (data: Partial<UserProfile>) => Promise<void>;
    updateAvatar: (file: File) => Promise<void>;
    updatePreferences: (prefs: Partial<UserProfile['preferences']>) => Promise<void>;
}

export function useUser(): UseUserReturn {
    const { user: authUser } = useAuth();
    const [isUpdating, setIsUpdating] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const user = useMemo(() => {
        if (!authUser) return null;

        return {
            id: authUser.id,
            email: authUser.email,
            name: authUser.name,
            preferences: {
                theme: 'system' as const,
                notifications: true,
            },
        };
    }, [authUser]);

    const updateProfile = useCallback(async (data: Partial<UserProfile>) => {
        setIsUpdating(true);
        try {
            
            console.warn('[useUser] Profile update not implemented');
            await new Promise(resolve => setTimeout(resolve, 500));
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Update failed'));
            throw err;
        } finally {
            setIsUpdating(false);
        }
    }, []);

    const updateAvatar = useCallback(async (file: File) => {
        console.warn('[useUser] Avatar update not implemented');
    }, []);

    const updatePreferences = useCallback(async (prefs: Partial<UserProfile['preferences']>) => {
        console.warn('[useUser] Preferences update not implemented');
    }, []);

    return {
        user,
        isLoading: false,
        isUpdating,
        error,
        updateProfile,
        updateAvatar,
        updatePreferences,
    };
}

export default useUser;
