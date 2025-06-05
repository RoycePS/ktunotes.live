/**
 * KTU Branch Definitions
 */

export interface Branch {
    code: string;
    name: string;
    fullName: string;
    department: string;
    isActive: boolean;
}

export const BRANCHES: Branch[] = [
    { code: 'CSE', name: 'Computer Science', fullName: 'Computer Science and Engineering', department: 'Computer Science', isActive: true },
    { code: 'ECE', name: 'Electronics', fullName: 'Electronics and Communication Engineering', department: 'Electronics', isActive: true },
    { code: 'EEE', name: 'Electrical', fullName: 'Electrical and Electronics Engineering', department: 'Electrical', isActive: true },
    { code: 'ME', name: 'Mechanical', fullName: 'Mechanical Engineering', department: 'Mechanical', isActive: true },
    { code: 'CE', name: 'Civil', fullName: 'Civil Engineering', department: 'Civil', isActive: true },
    { code: 'IT', name: 'Information Technology', fullName: 'Information Technology', department: 'Computer Science', isActive: true },
    { code: 'AI', name: 'Artificial Intelligence', fullName: 'Artificial Intelligence', department: 'Computer Science', isActive: true },
    { code: 'AIDS', name: 'AI & Data Science', fullName: 'Artificial Intelligence and Data Science', department: 'Computer Science', isActive: true },
    { code: 'AIML', name: 'AI & ML', fullName: 'Artificial Intelligence and Machine Learning', department: 'Computer Science', isActive: true },
    { code: 'CY', name: 'Cybersecurity', fullName: 'Computer Science and Engineering (Cybersecurity)', department: 'Computer Science', isActive: false },
];

export function getBranchByCode(code: string): Branch | undefined {
    return BRANCHES.find(b => b.code === code);
}

export function getActiveBranches(): Branch[] {
    return BRANCHES.filter(b => b.isActive);
}

export default BRANCHES;
