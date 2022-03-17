import { Avatar, Container, Divider, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import RelatedArticles from './RelatedArticles'

export default function Related() {
  return (
    <Grid mt={8} py={6} container bgcolor='#1e293b'>
      <Grid item lg={1} sx={{ display: { xs: 'none', lg: 'flex' } }} />
      <Grid
        item
        xs={12}
        lg={8}
        sx={{
          // mt: 4,
          ml: 2,
        }}
      >
        <Typography
          component='h4'
          variant='subtitle2'
          sx={{
            fontSize: 22,
            fontWeight: 700,

            color: '#CB659E',
          }}
        >
          Artículos relacionados
        </Typography>

        <Container
          sx={{
            mt: 3,
          }}
        >
          <RelatedArticles />
          <Divider
            sx={{
              backgroundColor: '#CB659E',
              mt: 4,
            }}
          />
          <RelatedArticles />

          <Divider
            sx={{
              backgroundColor: '#CB659E',
              mt: 4,
            }}
          />
          <RelatedArticles />
        </Container>
      </Grid>
    </Grid>
  )
}
