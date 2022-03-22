import React, { useEffect, useState } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import Layout from '../components/Layout'
import Back from '../components/Back'
import HeaderArticlePage from '../components/HeaderArticlePage'
import BodyArticlePage from '../components/BodyArticlePage'
import FooterArticlePage from '../components/FooterArticlePage'
import { createClient } from 'contentful'
import safeJsonStringify from 'safe-json-stringify'

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'article',
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'article',
    'fields.slug': params.slug,
  })

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const stringifiedData = safeJsonStringify(items)
  const data = JSON.parse(stringifiedData)

  return {
    props: { article: data[0] },
    revalidate: 1,
  }
}

export default function Article({ article }) {
  if (!article) return <Typography>Loading...</Typography>

  const {
    slug,
    titleDocSeo,
    descriptionDocSeo,
    author,
    dateArticle,
    timeRead,
    imgMain,
    titleH1,
    bodyH1,
    quote,
    titleH2,
    bodyH2,
    imgSecondaryH2,
    title2H2,
    body2H2,
    title3H2,
    body3H2,
    imgSecondary3H2,
    title4H2,
    body4H2,
    conclusion,
    tags,
    related,
  } = article.fields

  return (
    <Layout title={titleDocSeo} description={descriptionDocSeo}>
      <Back />
      <Grid container mt={8}>
        <Grid item lg={1} sx={{ display: { xs: 'none', lg: 'flex' } }} />
        <Grid item xs={12} lg={8}>
          <Container>
            {/* HEADER CONTENT */}
            <HeaderArticlePage
              name={author.fields.name}
              img_avatar={author.fields.avatar.fields.file.url}
              img_avatar_alt={author.fields.avatar.fields.description}
              date={dateArticle}
              time={timeRead}
            />
            {/* BODY CONTENT */}
            <BodyArticlePage
              img_main={imgMain.fields.file.url}
              img_main_alt={imgMain.fields.description}
              img_main_credits={imgMain.fields.title}
              title_h1={titleH1}
              body_h1={bodyH1}
              quote={quote}
              title_h2={titleH2}
              body_h2={bodyH2}
              img_secondary_h2={imgSecondaryH2.fields.file.url}
              img_secondary_alt={imgSecondaryH2.fields.description}
              img_secondary_credits={imgSecondaryH2.fields.title}
              title_2_h2={title2H2}
              body_2_h2={body2H2}
              conclusion={conclusion}
              // TAGS
              tag_1={tags[0].fields.name}
              tag_2={tags[1].fields.name}
              tag_3={tags[2].fields.name}
              // EXTRA
              title_3_h2={title3H2}
              body_3_h2={body3H2}
              imgSecondary_3_h2={imgSecondary3H2}
              title_4_h2={title4H2}
              body_4_h2={body4H2}
            />
          </Container>
        </Grid>
        {/* FOOTER CONTENT */}
        <FooterArticlePage
          // DEVELOP
          url={`http://localhost:3000/${slug}`}
          // PRODUCTION
          // url={`https://tradingphobia.com/${slug}`}
          identifier={article.sys.id}
          title={titleH1}
          related={related}
        />
      </Grid>
    </Layout>
  )
}
