// SGPA Calculator Feature Module
// 
// Grade calculation, CGPA tracking, and academic performance analytics.
// 
// Note: Grade schema aligned with KTU 2024 grading system
// Previous schemas available via config/grading-legacy.ts

// Components - disabled during refactor
// export { SGPAProvider } from './context/SGPAContext';
// export { default as SGPACalculator } from './components/SGPACalculator';
// export { default as GradeInput } from './components/GradeInput';
// export { default as CGPATracker } from './components/CGPATracker';
// export { default as PerformanceChart } from './components/PerformanceChart';

// Types - available
export type {
    Grade,
    GradePoint,
    Subject,
    Semester,
    AcademicRecord,
    CalculationResult,
} from './types';

// Hooks - planned
// export { useSGPA, useCGPA, useGrades } from './hooks';

// Utils - planned
// export { calculateSGPA, calculateCGPA, gradeToPoint } from './utils';

// Constants - available
export { GRADE_POINTS, PASSING_GRADE } from './constants';
