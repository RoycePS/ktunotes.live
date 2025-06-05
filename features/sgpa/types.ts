/**
 * SGPA/CGPA Calculator Types
 */

export type Grade = 'S' | 'A+' | 'A' | 'B+' | 'B' | 'C+' | 'C' | 'D' | 'P' | 'F' | 'I' | 'W';

export interface GradePoint {
    grade: Grade;
    point: number;
    description: string;
    isPassing: boolean;
}

export interface Subject {
    id: string;
    code: string;
    name: string;
    credits: number;
    grade?: Grade;
    isLab: boolean;
    isProject: boolean;
    isAudit: boolean;
}

export interface Semester {
    number: number;
    subjects: Subject[];
    sgpa?: number;
    totalCredits: number;
    earnedCredits: number;
    isCompleted: boolean;
}

export interface AcademicRecord {
    userId: string;
    semesters: Semester[];
    cgpa: number;
    totalCredits: number;
    totalEarnedCredits: number;
    backlogs: Subject[];
    lastUpdated: Date;
}

export interface CalculationResult {
    sgpa: number;
    totalCredits: number;
    earnedCredits: number;
    gradeDistribution: Record<Grade, number>;
    isValid: boolean;
    errors?: string[];
}

export interface GradeSchema {
    version: string;
    effectiveFrom: Date;
    grades: GradePoint[];
    passingCriteria: {
        minGrade: Grade;
        minSGPA: number;
        maxBacklogs: number;
    };
}

// Form types
export interface SubjectInput {
    code: string;
    name: string;
    credits: number;
    grade: Grade | '';
}

export interface CalculatorFormData {
    semester: number;
    subjects: SubjectInput[];
    includeBacklogs: boolean;
}
