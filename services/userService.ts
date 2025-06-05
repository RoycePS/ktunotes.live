/**
 * User Service
 * 
 * User profile and preference management.
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '/api';

export async function getCurrentUser() {
    try {
        const response = await fetch(`${API_BASE}/user`);
        if (!response.ok) return null;
        return await response.json();
    } catch (error) {
        console.error('[UserService] Failed to get user:', error);
        return null;
    }
}

export async function updateProfile(data: Record<string, unknown>) {
    try {
        const response = await fetch(`${API_BASE}/user`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error('[UserService] Update failed:', error);
        return { success: false, error: 'Update failed' };
    }
}

export async function updateAvatar(file: File) {
    const formData = new FormData();
    formData.append('avatar', file);

    try {
        const response = await fetch(`${API_BASE}/user/avatar`, {
            method: 'POST',
            body: formData,
        });
        return await response.json();
    } catch (error) {
        console.error('[UserService] Avatar update failed:', error);
        return { success: false };
    }
}

export default {
    getCurrentUser,
    updateProfile,
    updateAvatar,
};
