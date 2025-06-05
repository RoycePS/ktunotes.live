/**
 * Constants Barrel Export
 */

export { default as BRANCHES, getBranchByCode, getActiveBranches } from './branches';

export const SEMESTERS = [1, 2, 3, 4, 5, 6, 7, 8] as const;
export type Semester = typeof SEMESTERS[number];

export const CURRICULUM_YEARS = ['2015', '2019', '2019R', '2024'] as const;
export type CurriculumYear = typeof CURRICULUM_YEARS[number];
