/**
 * Role Definitions
 * 
 * Defines user roles and their hierarchy.
 * 
 * @see config/permissions.ts for permission definitions
 */

export interface Role {
    id: string;
    name: string;
    description: string;
    level: number; 
    inheritsFrom?: string;
    isDefault?: boolean;
    isSystemRole?: boolean;
}

export const ROLES: Record<string, Role> = {
    GUEST: {
        id: 'guest',
        name: 'Guest',
        description: 'Unauthenticated user with limited access',
        level: 0,
        isSystemRole: true,
    },
    STUDENT: {
        id: 'student',
        name: 'Student',
        description: 'Verified KTU student',
        level: 10,
        isDefault: true,
    },
    CONTRIBUTOR: {
        id: 'contributor',
        name: 'Contributor',
        description: 'Can upload and edit notes',
        level: 20,
        inheritsFrom: 'student',
    },
    MODERATOR: {
        id: 'moderator',
        name: 'Moderator',
        description: 'Can review and approve content',
        level: 30,
        inheritsFrom: 'contributor',
    },
    ADMIN: {
        id: 'admin',
        name: 'Administrator',
        description: 'Full access to admin features',
        level: 40,
        inheritsFrom: 'moderator',
    },
    SUPER_ADMIN: {
        id: 'super_admin',
        name: 'Super Administrator',
        description: 'System-level access',
        level: 100,
        isSystemRole: true,
    },
};

/**
 * Role hierarchy check
 */
export function hasRoleLevel(userRole: string, requiredRole: string): boolean {
    const user = ROLES[userRole.toUpperCase()];
    const required = ROLES[requiredRole.toUpperCase()];

    if (!user || !required) return false;
    return user.level >= required.level;
}

/**
 * Get role display name
 */
export function getRoleDisplayName(roleId: string): string {
    const role = ROLES[roleId.toUpperCase()];
    return role?.name || roleId;
}

/**
 * Get all roles below a certain level (for assignment)
 */
export function getAssignableRoles(currentRole: string): Role[] {
    const current = ROLES[currentRole.toUpperCase()];
    if (!current) return [];

    return Object.values(ROLES)
        .filter(r => r.level < current.level && !r.isSystemRole)
        .sort((a, b) => a.level - b.level);
}

export default ROLES;
