/**
 * KTU Grading System Constants
 * 
 * Based on KTU regulations (2024 revision)
 * Previous grading schemes available in config/grading-legacy.ts
 */

import type { Grade, GradePoint } from './types';

export const GRADE_POINTS: Record<Grade, number> = {
    'S': 10,
    'A+': 9,
    'A': 8.5,
    'B+': 8,
    'B': 7.5,
    'C+': 7,
    'C': 6.5,
    'D': 6,
    'P': 5,
    'F': 0,
    'I': 0, 
    'W': 0, 
};

export const GRADE_DETAILS: GradePoint[] = [
    { grade: 'S', point: 10, description: 'Outstanding', isPassing: true },
    { grade: 'A+', point: 9, description: 'Excellent', isPassing: true },
    { grade: 'A', point: 8.5, description: 'Very Good', isPassing: true },
    { grade: 'B+', point: 8, description: 'Good', isPassing: true },
    { grade: 'B', point: 7.5, description: 'Above Average', isPassing: true },
    { grade: 'C+', point: 7, description: 'Average', isPassing: true },
    { grade: 'C', point: 6.5, description: 'Satisfactory', isPassing: true },
    { grade: 'D', point: 6, description: 'Marginal', isPassing: true },
    { grade: 'P', point: 5, description: 'Pass', isPassing: true },
    { grade: 'F', point: 0, description: 'Fail', isPassing: false },
    { grade: 'I', point: 0, description: 'Incomplete', isPassing: false },
    { grade: 'W', point: 0, description: 'Withdrawn', isPassing: false },
];

export const PASSING_GRADE: Grade = 'P';
export const MIN_PASSING_SGPA = 5.0;
export const MAX_CREDITS_PER_SEMESTER = 25;
export const MIN_CREDITS_PER_SEMESTER = 15;



export const MARK_RANGES = {
    'S': { min: 90, max: 100 },
    'A+': { min: 85, max: 89 },
    'A': { min: 80, max: 84 },
    'B+': { min: 75, max: 79 },
    'B': { min: 70, max: 74 },
    'C+': { min: 65, max: 69 },
    'C': { min: 60, max: 64 },
    'D': { min: 55, max: 59 },
    'P': { min: 50, max: 54 },
    'F': { min: 0, max: 49 },
};
