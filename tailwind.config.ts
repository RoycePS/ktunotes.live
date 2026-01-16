import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages*.{js,ts,jsx,tsx,mdx}',
        './components*.{js,ts,jsx,tsx,mdx}',
        './app*.{js,ts,jsx,tsx,mdx}',
        './features*.{js,ts,jsx,tsx,mdx}',
        
        './src*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                    950: '#082f49',
                },
                
                ktu: {
                    blue: '#1e40af',
                    gold: '#ca8a04',
                    dark: '#0f172a',
                },
                
                accent: {
                    DEFAULT: '#8b5cf6',
                    light: '#a78bfa',
                    dark: '#7c3aed',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Cal Sans', 'Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                
                'gradient-x': 'gradientX 15s ease infinite',
                'gradient-y': 'gradientY 15s ease infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                gradientX: {
                    '0%, 100%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                },
                gradientY: {
                    '0%, 100%': { 'background-position': '50% 0%' },
                    '50%': { 'background-position': '50% 100%' },
                },
            },
            
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            
            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100',
            },
        },
    },
    plugins: [
        
        
        
    ],
};

export default config;
