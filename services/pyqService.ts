/**
 * PYQ Service
 * 
 * Previous Year Questions API integration.
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '/api';

export interface PYQSearchParams {
    query?: string;
    subject?: string;
    year?: number;
    examType?: 'regular' | 'supplementary' | 'internal';
}

export async function getPYQ(id: string) {
    try {
        const response = await fetch(`${API_BASE}/pyq/${id}`);
        if (!response.ok) return null;
        return await response.json();
    } catch (error) {
        console.error('[PYQService] Failed to get PYQ:', error);
        return null;
    }
}

export async function searchPYQ(params: PYQSearchParams) {
    try {
        const response = await fetch(`${API_BASE}/pyq/search`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params),
        });
        return await response.json();
    } catch (error) {
        console.error('[PYQService] Search failed:', error);
        return { results: [], total: 0 };
    }
}

export async function downloadPYQ(id: string): Promise<Blob | null> {
    try {
        const response = await fetch(`${API_BASE}/pyq/${id}/download`);
        if (!response.ok) return null;
        return await response.blob();
    } catch (error) {
        console.error('[PYQService] Download failed:', error);
        return null;
    }
}

export default {
    getPYQ,
    searchPYQ,
    downloadPYQ,
};
