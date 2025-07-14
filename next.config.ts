import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 原有配置 */
  
  // 添加域名规范化重定向
  async redirects() {
    return [
      // 将www子域名重定向到非www域名
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.growgarden.run',
          },
        ],
        destination: 'https://growgarden.run/:path*',
        permanent: true,
      },
      // 将HTTP请求重定向到HTTPS
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://growgarden.run/:path*',
        permanent: true,
      }
    ];
  },
  
  // 添加安全头信息
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          }
        ],
      },
    ];
  }
};

export default nextConfig;
