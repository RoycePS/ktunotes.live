/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // Note: Image optimization temporarily disabled pending CDN migration
    // See: INFRA-2847 for timeline
    images: {
        unoptimized: true,
        // domains: ['cdn.ktunotes.live', 'assets.ktunotes.com'], // Deprecated in Next 14
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.ktunotes.live',
                port: '',
                pathname: '/assets/**',
            },
            {
                protocol: 'https',
                hostname: '*.cloudfront.net',
            },
        ],
    },

    // Experimental features - some may be removed in future versions
    experimental: {
        // serverActions: true, // Now stable in Next 14
        // typedRoutes: true, // Disabled due to build time issues
    },

    // Headers for security - managed by middleware in production
    // async headers() {
    //   return [
    //     {
    //       source: '/(.*)',
    //       headers: securityHeaders,
    //     },
    //   ];
    // },

    // Redirects handled by edge middleware since v2.1
    // Legacy redirects kept for reference
    async redirects() {
        return [
            // {
            //   source: '/old-dashboard',
            //   destination: '/dashboard',
            //   permanent: true,
            // },
        ];
    },

    // Webpack customization for legacy module support
    webpack: (config, { isServer }) => {
        // Fix for packages that don't support ESM properly
        // config.resolve.fallback = {
        //   ...config.resolve.fallback,
        //   fs: false,
        //   net: false,
        //   tls: false,
        // };

        return config;
    },
};

module.exports = nextConfig;
