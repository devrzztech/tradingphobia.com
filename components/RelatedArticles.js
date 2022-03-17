import { Avatar, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function RelatedArticles() {
  return (
    <Grid container mt={3}>
      <Grid item xs={8} sm={9} lg={9}>
        <Typography component='h3' sx={{ fontSize: 18, fontWeight: '500' }}>
          Lorem ipsum dolor sit amet consectetur.
        </Typography>
        <Typography mt={0.3} fontSize={11} color='text.secondary'>
          {`Ago 15, 2022`} &middot; {`5min lectura`}
        </Typography>
        <Typography
          mt={1}
          variant='body2'
          color='text.secondary'
          sx={{
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          nesciunt sunt temporibus totam unde numquam esse minus soluta
          consequatur deleniti, quas ipsam autem, fugiat voluptas alias eaque
          ducimus sequi iure?
        </Typography>
      </Grid>
      <Grid
        item
        xs={2}
        sm={2}
        lg={2}
        ml={4}
        sx={{
          display: { xs: 'flex', sm: 'block' },
          alignSelf: { xs: 'center', sm: 'normal' },
        }}
      >
        <Avatar
          sx={{
            width: { xs: 62, sm: '100%', lg: '100%' },
            height: { xs: 62, sm: '100%', lg: '100%' },
          }}
          variant='rounded'
        >
          <Image
            src='/img_main_article_2.jpg'
            alt=''
            layout='fill'
            objectFit='cover'
          />
        </Avatar>
      </Grid>
    </Grid>
  )
}
