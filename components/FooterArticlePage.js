import { Box, Grid } from '@mui/material'
import React from 'react'
import DisqusComments from './DisqusComments'
import Related from './Related'

export default function FooterArticlePage({ url, identifier, title }) {
  return (
    <Grid container>
      <Grid item lg={12}>
        <Related />
      </Grid>
      <Grid
        container
        bgcolor='#e2e8f0'
        sx={{ display: { xs: 'block', lg: 'flex' } }}
      >
        <Grid item lg={1} />
        <Grid item xs={12} lg={8} mt={6} px={2} pb={5}>
          <DisqusComments url={url} identifier={identifier} title={title} />
        </Grid>
      </Grid>
    </Grid>
  )
}
