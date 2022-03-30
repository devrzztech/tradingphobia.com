import { CardActionArea, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Layout from '../components/Layout'
import Back from '../components/Back'
import Link from 'next/link'
import RelatedArticles from '../components/RelatedArticles'
import { createClient } from 'contentful'
import safeJsonStringify from 'safe-json-stringify'

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })

  const { items } = await client.getEntries({
    content_type: 'article',
  })

  const data = safeJsonStringify(items)

  return {
    props: {
      articles: data,
    },
    revalidate: 1,
  }
}

export default function Article({ articles }) {
  articles = JSON.parse(articles)

  articles.sort(
    (a, b) =>
      new Date(b.sys.createdAt).getTime() - new Date(a.sys.createdAt).getTime()
  )
  return (
    <Layout title='test' description='test'>
      <Back />
      <Grid
        container
        mt={8}
        sx={{
          px: { xs: 2, lg: 0 },
        }}
      >
        <Box display='flex' justifyContent='center' sx={{ width: '100%' }}>
          <Grid item lg={7}>
            <Typography fontWeight={800} fontSize={24} color='primary'>
              Artículos publicados
            </Typography>
            <Typography
              mt={0.4}
              fontWeight={600}
              fontSize={18}
              color='text.secondary'
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
              deleniti perferendis.
            </Typography>
            <Container sx={{ mt: 1 }}>
              {articles.map(article => (
                <CardActionArea key={article.sys.id}>
                  <Link href={'/' + article.fields.slug}>
                    <a style={{ textDecoration: 'none' }}>
                      <RelatedArticles relate={article.fields} />
                    </a>
                  </Link>
                </CardActionArea>
              ))}
            </Container>
          </Grid>
        </Box>
      </Grid>
    </Layout>
  )
}
