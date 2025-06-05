/**
 * Syllabus Feature Types
 */

export interface Syllabus {
    id: string;
    subjectCode: string;
    subjectName: string;
    branch: Branch;
    semester: number;
    credits: number;
    curriculumYear: CurriculumYear;
    modules: Module[];
    practicals?: Practical[];
    references: Reference[];
    lastUpdated: Date;
    version: SyllabusVersion;
}

export interface Module {
    id: string;
    number: number;
    title: string;
    hours: number;
    topics: Topic[];
    description?: string;
    learningOutcomes?: string[];
}

export interface Topic {
    id: string;
    title: string;
    subtopics?: SubTopic[];
    isOptional?: boolean;
    difficulty?: 'easy' | 'medium' | 'hard';
    weightage?: number;
}

export interface SubTopic {
    id: string;
    title: string;
    description?: string;
}

export interface Practical {
    id: string;
    number: number;
    title: string;
    duration: number;
    description: string;
    prerequisites?: string[];
}

export interface Reference {
    title: string;
    author: string;
    publisher?: string;
    edition?: string;
    year?: number;
    isbn?: string;
    type: 'textbook' | 'reference' | 'online' | 'journal';
}

export type CurriculumYear = '2015' | '2019' | '2019R' | '2024';

export type Branch =
    | 'CSE'
    | 'ECE'
    | 'EEE'
    | 'ME'
    | 'CE'
    | 'IT'
    | 'AI'
    | 'AIDS'
    | 'AIML';

export interface SyllabusVersion {
    major: number;
    minor: number;
    patch: number;
    label?: string;
}

export interface SyllabusSearchParams {
    query?: string;
    branch?: Branch;
    semester?: number;
    curriculumYear?: CurriculumYear;
    limit?: number;
    offset?: number;
}

export interface SyllabusSearchResult {
    syllabi: Syllabus[];
    total: number;
    hasMore: boolean;
}
