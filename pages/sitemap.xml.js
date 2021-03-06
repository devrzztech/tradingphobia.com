import fs from 'fs'
import { createClient } from 'contentful'

const Sitemap = () => {}

export const getServerSideProps = async ({ res }) => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })

  const { items } = await client.getEntries({
    content_type: 'article',
  })

  const baseUrl = {
    development: 'http://localhost:3000',
    production: 'https://tradingphobia.com',
  }[process.env.NODE_ENV]

  const staticPages = fs
    .readdirSync(
      {
        development: 'pages',
        production: './',
      }[process.env.NODE_ENV]
    )
    .filter(staticPage => {
      return ![
        '_app.js',
        '_document.js',
        '404.js',
        '500.js',
        'sitemap.xml.js',
        'api',
        '[slug].js',
        '.DS_Store',
        '.env.local',
        '.eslintrc.json',
        '.git',
        '.gitignore',
        '.next',
        '.vscode',
        'README.md',
        'components',
        'next.config.js',
        'node_modules',
        'package.json',
        'pages',
        'public',
        'schema',
        'styles',
        'utils',
        'yarn-error.log',
        'yarn.lock',
      ].includes(staticPage)
    })
    .map(staticPagePath => {
      return `${baseUrl}/${staticPagePath}`
    })

  //   console.log(staticPages)

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map(url => {
        return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `
      })
      .join('')}
      ${items
        .map(article => {
          return `
              <url>
                <loc>${baseUrl}/${article.fields.slug}</loc>
                <lastmod>${article.sys.updatedAt}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `
        })
        .join('')}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
