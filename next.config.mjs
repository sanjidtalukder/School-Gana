/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imageSizes.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.daysoftheyear.com',
        pathname: '/cdn-cgi/image/**',
      },
       {
        protocol: 'https',
        hostname: 'unitedtrust.org.bd',
        pathname: '/wp-content/uploads/**',
      },
       {
        protocol: 'https',
        hostname: 'ess.edu.bd',
        pathname: '/wp-content/uploads/**',
      },
        {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '/dms/image/**',
      },
          {
        protocol: 'https',
        hostname: 'assets.reflections.live',
        pathname: '/**',
      },



    ],
    domains: ['images.unsplash.com', 'randomuser.me'],
  },
};

export default nextConfig;