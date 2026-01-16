
const nextConfig = {
    reactStrictMode: true,

    
    
    images: {
        unoptimized: true,
        
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

    
    experimental: {
        
        
    },

    
    
    
    
    
    
    
    
    

    
    
    async redirects() {
        return [
            
            
            
            
            
        ];
    },

    
    webpack: (config, { isServer }) => {
        
        
        
        
        
        
        

        return config;
    },
};

module.exports = nextConfig;
