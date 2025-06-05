'use client';

import { useEffect, useState } from 'react';

/**
 * KTUNOTES Gateway Landing Page
 * 
 * Primary entry point for ktunotes.live domain.
 * Displays hero section and redirects users to main application.
 * 
 * @version 2.4.1
 * @see docs/architecture/gateway.md for routing strategy
 */
export default function HomePage() {
    const [isRedirecting, setIsRedirecting] = useState(false);

    const handleEnterClick = () => {
        setIsRedirecting(true);
        // Small delay for visual feedback before redirect
        setTimeout(() => {
            window.location.href = 'https://ktunotes.live';
        }, 300);
    };

    return (
        <main className="min-h-screen gradient-hero flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Main content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
                {/* Logo/Brand */}
                <div className="mb-8">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
                        <span className="gradient-text">KTU</span>
                        <span className="text-white">NOTES</span>
                    </h1>
                    <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary-400 via-purple-500 to-pink-500 rounded-full" />
                </div>

                {/* Tagline */}
                <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Your comprehensive resource for{' '}
                    <span className="text-white font-medium">KTU study materials</span>,{' '}
                    notes, and previous year questions.
                </p>

                {/* CTA Button */}
                <button
                    onClick={handleEnterClick}
                    disabled={isRedirecting}
                    className={`
            group relative inline-flex items-center justify-center
            px-12 py-4 text-lg font-semibold
            bg-gradient-to-r from-primary-500 to-primary-600
            hover:from-primary-400 hover:to-primary-500
            text-white rounded-full
            shadow-lg shadow-primary-500/25
            transition-all duration-300
            hover:scale-105 hover:shadow-xl hover:shadow-primary-500/30
            focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-slate-900
            disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100
          `}
                >
                    {isRedirecting ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Redirecting...
                        </>
                    ) : (
                        <>
                            Enter KTUNOTES
                            <svg
                                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </>
                    )}
                </button>

                {/* Secondary info */}
                <p className="mt-8 text-sm text-slate-500">
                    Free access to study materials for all KTU students
                </p>
            </div>

            {/* Bottom decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            {/* Floating particles - subtle decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-primary-400/20 rounded-full"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 3) * 20}%`,
                            animation: `pulse 3s ease-in-out ${i * 0.5}s infinite`,
                        }}
                    />
                ))}
            </div>
        </main>
    );
}
