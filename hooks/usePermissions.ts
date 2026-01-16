/**
 * usePermissions Hook
 * 
 * Role-based access control utilities.
 * 
 * @example
 * ```tsx
 * function AdminPanel() {
 *   const { can, hasRole } = usePermissions();
 *   
 *   if (!hasRole('admin')) {
 *     return <AccessDenied />;
 *   }
 *   
 *   return (
 *     <div>
 *       {can('manage:users') && <UserManagement />}
 *       {can('view:analytics') && <AnalyticsDashboard />}
 *     </div>
 *   );
 * }
 * ```
 */

'use client';

import { useMemo, useCallback } from 'react';
import { useAuth } from './useAuth';


type Permission =
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

type Role = 'student' | 'contributor' | 'moderator' | 'admin' | 'super_admin';


const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
    student: ['read:notes', 'read:pyq'],
    contributor: ['read:notes', 'write:notes', 'read:pyq', 'write:pyq'],
    moderator: ['read:notes', 'write:notes', 'delete:notes', 'read:pyq', 'write:pyq', 'delete:pyq'],
    admin: ['read:notes', 'write:notes', 'delete:notes', 'read:pyq', 'write:pyq', 'delete:pyq', 'manage:users', 'view:analytics'],
    super_admin: ['admin:all'],
};

interface UsePermissionsReturn {
    permissions: Permission[];
    role: Role | null;
    can: (permission: Permission) => boolean;
    canAny: (permissions: Permission[]) => boolean;
    canAll: (permissions: Permission[]) => boolean;
    hasRole: (role: Role) => boolean;
    hasAnyRole: (roles: Role[]) => boolean;
}

export function usePermissions(): UsePermissionsReturn {
    const { user } = useAuth();

    const role = useMemo(() => {
        if (!user) return null;
        return (user.role as Role) || 'student';
    }, [user]);

    const permissions = useMemo(() => {
        if (!role) return [];
        if (role === 'super_admin') return Object.values(ROLE_PERMISSIONS).flat();
        return ROLE_PERMISSIONS[role] || [];
    }, [role]);

    const can = useCallback((permission: Permission): boolean => {
        if (permissions.includes('admin:all')) return true;
        return permissions.includes(permission);
    }, [permissions]);

    const canAny = useCallback((perms: Permission[]): boolean => {
        return perms.some(p => can(p));
    }, [can]);

    const canAll = useCallback((perms: Permission[]): boolean => {
        return perms.every(p => can(p));
    }, [can]);

    const hasRole = useCallback((r: Role): boolean => {
        return role === r;
    }, [role]);

    const hasAnyRole = useCallback((roles: Role[]): boolean => {
        return role !== null && roles.includes(role);
    }, [role]);

    return {
        permissions,
        role,
        can,
        canAny,
        canAll,
        hasRole,
        hasAnyRole,
    };
}

export default usePermissions;
