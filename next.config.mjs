/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**', // FIXED: Allows all image paths coming from Unsplash
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services/google-meta-ads',
        destination: '/services/local-google-meta-ads',
        permanent: true,
      },
      {
        source: '/services/google-ads-services',
        destination: '/services/local-google-meta-ads',
        permanent: true,
      },
      {
        source: '/google-ads-services',
        destination: '/services/local-google-meta-ads',
        permanent: true,
      },
    ]
  },
}

export default nextConfig