import * as React from 'react'
import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Navbar from '../components/Navbar'
import Presentation from '../components/Presentation'
import Overview from '../components/Overview'
import PaginationArticles from '../components/PaginationArticles'
import Facts from '../components/Facts'
import Subscription from '../components/Subscription'
import Figures from '../components/Figures'
import Feedback from '../components/Feedback'
import Fixtures from '../components/Fixtures'
import Articles from '../components/Articles'
import Layout from '../components/Layout'
import { createClient } from 'contentful'

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const { items } = await client.getEntries({
    content_type: 'article',
  })

  return {
    props: {
      articles: items,
    },
    revalidate: 1,
  }
}

export default function Home({ articles }) {
  return (
    <Layout title='test' description='test'>
      {/* APP BAR */}
      <Navbar />

      {/* SECTION 1 PRESENTATION */}
      <Presentation />

      {/* SECTION 2 OVERVIEW */}
      <Overview />

      {/* SECTION 3 ARTICLES + PAGINATION */}
      <Box
        sx={{
          mt: 14,
        }}
      >
        <Articles articles={articles} />

        <PaginationArticles />
      </Box>

      {/* SECTION 4 SUBSCRIPTION */}
      <Subscription />

      {/* SECTION 5 FACTS */}
      <Facts />

      {/* SECTION 6 FIGURES */}
      <Figures />

      {/* FIXTURES */}
      <Container sx={{ mt: 10 }}>
        <Grid container display='flex' justifyContent='flex-end'>
          <Grid item md={8}>
            <Typography
              fontSize={30}
              fontWeight={600}
              sx={{ textAlign: 'right' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </Typography>
            <Typography
              color='text.secondary'
              fontSize={18}
              mt={2}
              sx={{ textAlign: 'right' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              perferendis error ratione labore maxime beatae repellat iure
              deleniti enim vitae quam provident dolorum consectetur, facere
              natus optio voluptatibus delectus! Sapiente.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Grid container sx={{ mt: 6, px: { sm: 4, md: 3, lg: 10 } }}>
        <Fixtures />
        <Fixtures />
        <Fixtures />
        <Fixtures />
        <Fixtures />
      </Grid>

      {/* SECTION 8 FEEDBACK */}
      <Feedback />

      {/* SECTION 9 FOOTER */}
    </Layout>
  )
}
