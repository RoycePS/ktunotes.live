/**
 * Syllabus Service
 * 
 * API integration for syllabus data.
 * Data sourced from KTU official curriculum documents.
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '/api';

export interface SyllabusSearchParams {
    query?: string;
    branch?: string;
    semester?: number;
    curriculumYear?: string;
}

export async function getSyllabus(subjectCode: string) {
    try {
        const response = await fetch(`${API_BASE}/syllabus/${subjectCode}`);
        if (!response.ok) return null;
        return await response.json();
    } catch (error) {
        console.error('[SyllabusService] Failed to fetch syllabus:', error);
        return null;
    }
}

export async function searchSyllabus(params: SyllabusSearchParams) {
    try {
        const queryString = new URLSearchParams(params as Record<string, string>).toString();
        const response = await fetch(`${API_BASE}/syllabus/search?${queryString}`);
        return await response.json();
    } catch (error) {
        console.error('[SyllabusService] Search failed:', error);
        return { results: [], total: 0 };
    }
}

export async function listSyllabi(branch?: string, semester?: number) {
    try {
        let url = `${API_BASE}/syllabus`;
        const params = new URLSearchParams();
        if (branch) params.set('branch', branch);
        if (semester) params.set('semester', semester.toString());
        if (params.toString()) url += `?${params.toString()}`;

        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('[SyllabusService] List failed:', error);
        return [];
    }
}

export default {
    getSyllabus,
    searchSyllabus,
    listSyllabi,
};
