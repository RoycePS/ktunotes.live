// Hooks Barrel Export
//
// All custom hooks should be exported from here.
// Keep hooks focused and single-purpose.

// Auth hooks
export { useAuth, usePermission, useRole, useSession } from './useAuth';
export { useUser } from './useUser';
export { usePermissions } from './usePermissions';

// Feature hooks - re-exported from feature modules
// Disabled until features are wired up:
// export { useSyllabus } from '@/features/syllabus';
// export { usePYQ } from '@/features/pyq';
// export { useSGPA } from '@/features/sgpa';

// UI hooks - planned
// export { useMediaQuery } from './useMediaQuery';
// export { useDebounce } from './useDebounce';
// export { useLocalStorage } from './useLocalStorage';
// export { useOnClickOutside } from './useOnClickOutside';

// Utility hooks - planned
// export { useMounted } from './useMounted';
// export { usePrevious } from './usePrevious';
