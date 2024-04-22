/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'http2.mlstatic.com',
      },
      {
        hostname: 'cdn-icons-png.flaticon.com',
      },
      {
        hostname: 'images.pexels.com',
      },
    ],
  },
}

export default nextConfig
