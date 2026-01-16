/**
 * Global Type Definitions
 * 
 * Shared types used across the application.
 */


export interface ApiResponse<T = unknown> {
    success: boolean;
    data?: T;
    error?: ApiError;
    meta?: ResponseMeta;
}

export interface ApiError {
    code: string;
    message: string;
    field?: string;
    details?: Record<string, unknown>;
}

export interface ResponseMeta {
    page?: number;
    limit?: number;
    total?: number;
    hasMore?: boolean;
}


export interface PaginationParams {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResult<T> {
    items: T[];
    total: number;
    page: number;
    limit: number;
    hasMore: boolean;
}


export interface BaseEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}


export type Branch = 'CSE' | 'ECE' | 'EEE' | 'ME' | 'CE' | 'IT' | 'AI' | 'AIDS' | 'AIML';
export type Semester = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type CurriculumYear = '2015' | '2019' | '2019R' | '2024';


export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface MenuItem {
    id: string;
    label: string;
    href?: string;
    icon?: string;
    children?: MenuItem[];
    badge?: string;
}


export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface FormState<T> {
    data: T;
    status: FormStatus;
    errors: Record<keyof T, string[]>;
}
