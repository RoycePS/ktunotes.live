/**
 * Permission Definitions
 * 
 * Fine-grained permissions for access control.
 * Permissions are grouped by resource type.
 * 
 * @see config/roles.ts for role definitions
 * @see hooks/usePermissions.ts for permission checking
 */

export interface Permission {
    id: string;
    name: string;
    description: string;
    resource: string;
    action: 'read' | 'write' | 'delete' | 'manage';
}

export interface RolePermissions {
    role: string;
    permissions: string[];
}

/**
 * All available permissions
 */
export const PERMISSIONS: Record<string, Permission> = {
    
    'notes:read': {
        id: 'notes:read',
        name: 'Read Notes',
        description: 'View and download notes',
        resource: 'notes',
        action: 'read',
    },
    'notes:write': {
        id: 'notes:write',
        name: 'Write Notes',
        description: 'Upload and edit notes',
        resource: 'notes',
        action: 'write',
    },
    'notes:delete': {
        id: 'notes:delete',
        name: 'Delete Notes',
        description: 'Remove notes from the platform',
        resource: 'notes',
        action: 'delete',
    },
    'notes:manage': {
        id: 'notes:manage',
        name: 'Manage Notes',
        description: 'Full control over notes',
        resource: 'notes',
        action: 'manage',
    },

    
    'pyq:read': {
        id: 'pyq:read',
        name: 'Read PYQs',
        description: 'View previous year questions',
        resource: 'pyq',
        action: 'read',
    },
    'pyq:write': {
        id: 'pyq:write',
        name: 'Write PYQs',
        description: 'Add question papers and solutions',
        resource: 'pyq',
        action: 'write',
    },
    'pyq:delete': {
        id: 'pyq:delete',
        name: 'Delete PYQs',
        description: 'Remove question papers',
        resource: 'pyq',
        action: 'delete',
    },

    
    'users:read': {
        id: 'users:read',
        name: 'Read Users',
        description: 'View user profiles',
        resource: 'users',
        action: 'read',
    },
    'users:write': {
        id: 'users:write',
        name: 'Write Users',
        description: 'Edit user profiles',
        resource: 'users',
        action: 'write',
    },
    'users:manage': {
        id: 'users:manage',
        name: 'Manage Users',
        description: 'Full user management',
        resource: 'users',
        action: 'manage',
    },

    
    'analytics:read': {
        id: 'analytics:read',
        name: 'Read Analytics',
        description: 'View analytics dashboard',
        resource: 'analytics',
        action: 'read',
    },
    'analytics:manage': {
        id: 'analytics:manage',
        name: 'Manage Analytics',
        description: 'Configure and export analytics',
        resource: 'analytics',
        action: 'manage',
    },

    
    'system:admin': {
        id: 'system:admin',
        name: 'System Admin',
        description: 'Full system access',
        resource: 'system',
        action: 'manage',
    },
};

/**
 * Default role-permission mappings
 */
export const ROLE_PERMISSIONS: RolePermissions[] = [
    {
        role: 'guest',
        permissions: ['notes:read', 'pyq:read'],
    },
    {
        role: 'student',
        permissions: ['notes:read', 'pyq:read'],
    },
    {
        role: 'contributor',
        permissions: ['notes:read', 'notes:write', 'pyq:read', 'pyq:write'],
    },
    {
        role: 'moderator',
        permissions: [
            'notes:read',
            'notes:write',
            'notes:delete',
            'pyq:read',
            'pyq:write',
            'pyq:delete',
            'users:read',
        ],
    },
    {
        role: 'admin',
        permissions: [
            'notes:manage',
            'pyq:manage',
            'users:manage',
            'analytics:read',
        ],
    },
    {
        role: 'super_admin',
        permissions: ['system:admin'],
    },
];

/**
 * Get permissions for a role
 */
export function getPermissionsForRole(roleId: string): string[] {
    const mapping = ROLE_PERMISSIONS.find(
        r => r.role.toLowerCase() === roleId.toLowerCase()
    );
    return mapping?.permissions || [];
}

/**
 * Check if a permission exists
 */
export function isValidPermission(permissionId: string): boolean {
    return permissionId in PERMISSIONS;
}

export default PERMISSIONS;
