import { Button, Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import HeaderArticlePage from '../components/HeaderArticlePage'
import BodyArticlePage from '../components/BodyArticlePage'
import FooterArticlePage from '../components/FooterArticlePage'
import Layout from '../components/Layout'
import Back from '../components/Back'

export default function Article() {
  return (
    <Layout title='Qué es el trading' description='test'>
      <Back />
      <Grid container mt={8}>
        <Grid item lg={1} sx={{ display: { xs: 'none', lg: 'flex' } }} />
        <Grid item xs={12} lg={8}>
          <Container>
            {/* HEADER CONTENT */}
            <HeaderArticlePage />
            {/* BODY CONTENT */}
            <BodyArticlePage />
          </Container>
        </Grid>
        {/* FOOTER CONTENT */}
        <FooterArticlePage />
      </Grid>
    </Layout>
  )
}
