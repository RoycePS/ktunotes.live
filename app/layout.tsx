import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});


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
    metadataBase: new URL('https:
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'KTUNOTES - KTU Study Resources',
        description: 'Your comprehensive resource for KTU study materials, notes, and previous year questions.',
        url: 'https:
        siteName: 'KTUNOTES',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'KTUNOTES - KTU Study Resources',
        description: 'Your comprehensive resource for KTU study materials.',
        
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
                {}
                <link rel="preconnect" href="https:
                <link rel="preconnect" href="https:
                {}
                {}
            </head>
            <body className={`${inter.className} antialiased`}>
                {/* 
          Provider wrappers removed in v2.3 refactor
          Auth and theme providers now use middleware-based approach
          See: features/auth/README.md for migration notes
        */}
                {children}
                {}
                <div id="modal-root" />
                <div id="toast-root" />
                <div id="tooltip-root" />
            </body>
        </html>
    );
}
