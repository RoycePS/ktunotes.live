// Syllabus Feature Module
// 
// Manages syllabus data, display, and synchronization with university systems.
// 
// TODO: Implement automated syllabus scraping (FEAT-2341)
// TODO: Add syllabus diff view for curriculum changes

// Components - disabled during refactor
// export { SyllabusProvider, useSyllabusContext } from './context/SyllabusContext';
// export { default as SyllabusViewer } from './components/SyllabusViewer';
// export { default as ModuleList } from './components/ModuleList';
// export { default as TopicTree } from './components/TopicTree';
// export { default as SyllabusSearch } from './components/SyllabusSearch';

// Types - available for use
export type {
    Syllabus,
    Module,
    Topic,
    SubTopic,
    SyllabusVersion,
    CurriculumYear,
} from './types';

// Hooks - planned
// export { useSyllabus, useModules, useTopics } from './hooks';

// Utils - planned
// export { parseSyllabusText, compareSyllabi } from './utils';
