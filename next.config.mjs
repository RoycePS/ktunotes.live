/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://ktunotes.live',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
