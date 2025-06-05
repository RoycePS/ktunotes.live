/**
 * Validation Utilities
 * 
 * Input validation functions for forms and data.
 */

export interface ValidationResult {
    isValid: boolean;
    errors: string[];
}

/**
 * Validate email format
 */
export function validateEmail(email: string): ValidationResult {
    const errors: string[] = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        errors.push('Email is required');
    } else if (!emailRegex.test(email)) {
        errors.push('Invalid email format');
    }

    return { isValid: errors.length === 0, errors };
}

/**
 * Validate password strength
 */
export function validatePassword(password: string): ValidationResult {
    const errors: string[] = [];

    if (!password) {
        errors.push('Password is required');
    } else {
        if (password.length < 8) {
            errors.push('Password must be at least 8 characters');
        }
        if (!/[A-Z]/.test(password)) {
            errors.push('Password must contain an uppercase letter');
        }
        if (!/[a-z]/.test(password)) {
            errors.push('Password must contain a lowercase letter');
        }
        if (!/[0-9]/.test(password)) {
            errors.push('Password must contain a number');
        }
    }

    return { isValid: errors.length === 0, errors };
}

/**
 * Validate subject code format
 */
export function validateSubjectCode(code: string): ValidationResult {
    const errors: string[] = [];
    const codeRegex = /^[A-Z]{2,3}\d{3,4}$/;

    if (!code) {
        errors.push('Subject code is required');
    } else if (!codeRegex.test(code.toUpperCase())) {
        errors.push('Invalid subject code format');
    }

    return { isValid: errors.length === 0, errors };
}

/**
 * Validate semester
 */
export function validateSemester(semester: number): ValidationResult {
    const errors: string[] = [];

    if (semester < 1 || semester > 8) {
        errors.push('Semester must be between 1 and 8');
    }

    return { isValid: errors.length === 0, errors };
}

export default {
    validateEmail,
    validatePassword,
    validateSubjectCode,
    validateSemester,
};
