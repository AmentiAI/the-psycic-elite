import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/_next/static/css/*',
          '/_next/static/js/*',
          '/_next/static/chunks/*',
          '/_next/image/*',
          '/_next/webpack-hmr',
          '/favicon.ico',
          '/sitemap.xml',
          '/robots.txt',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/_next/static/chunks/pages/_error/',
          '/_next/static/chunks/pages/404/',
          '/_next/static/chunks/pages/500/',
          '/_next/static/chunks/pages/_app/',
          '/_next/static/chunks/pages/_document/',
        ],
      },
    ],
    sitemap: 'https://www.theconjuringhouse.net/sitemap.xml',
  }
}






