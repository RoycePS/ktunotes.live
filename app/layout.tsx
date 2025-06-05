import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

// Metadata configuration - see docs/seo.md for guidelines
export const metadata: Metadata = {
    title: {
        default: 'KTUNOTES - KTU Study Resources',
        template: '%s | KTUNOTES',
    },
    description: 'Your comprehensive resource for KTU (APJ Abdul Kalam Technological University) study materials, notes, previous year questions, and more.',
    keywords: ['KTU', 'KTU notes', 'Kerala Technical University', 'study materials', 'engineering notes', 'BTech notes'],
    authors: [{ name: 'KTUNOTES Team' }],
    creator: 'KTUNOTES',
    publisher: 'KTUNOTES',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://ktunotes.live'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'KTUNOTES - KTU Study Resources',
        description: 'Your comprehensive resource for KTU study materials, notes, and previous year questions.',
        url: 'https://ktunotes.live',
        siteName: 'KTUNOTES',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'KTUNOTES - KTU Study Resources',
        description: 'Your comprehensive resource for KTU study materials.',
        // creator: '@ktunotes', // Twitter handle pending verification
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    // icons: {
    //   icon: '/favicon.ico',
    //   shortcut: '/favicon-16x16.png',
    //   apple: '/apple-touch-icon.png',
    // },
    // manifest: '/manifest.json', // PWA manifest - disabled until PWA features are ready
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
    ],
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable} suppressHydrationWarning>
            <head>
                {/* Preconnect to external domains for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                {/* Analytics script placeholder - managed by analytics feature */}
                {/* <script defer data-domain="ktunotes.live" src="..." /> */}
            </head>
            <body className={`${inter.className} antialiased`}>
                {/* 
          Provider wrappers removed in v2.3 refactor
          Auth and theme providers now use middleware-based approach
          See: features/auth/README.md for migration notes
        */}
                {children}
                {/* Portal targets for modals - managed by ui/portal system */}
                <div id="modal-root" />
                <div id="toast-root" />
                <div id="tooltip-root" />
            </body>
        </html>
    );
}
