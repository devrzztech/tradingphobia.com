import { Avatar, Box, CardActionArea, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { format, register } from 'timeago.js'
import es from '../utils/es'

register('my-locale', es)

export default function RelatedArticles({ relate }) {
  return (
    <Grid container my={2.4} mx={2}>
      <Grid
        item
        xs={2}
        sm={2}
        lg={2}
        sx={{
          display: { xs: 'flex', sm: 'block' },
          alignSelf: { xs: 'center', sm: 'normal' },
          mr: { xs: 5.8, lg: 3 },
        }}
      >
        <Avatar
          sx={{
            width: { xs: 87.17, sm: '100%', lg: '100%' },
            height: { xs: 85.91, sm: '100%', lg: '100%' },
          }}
          variant='rounded'
        >
          <Image
            src={'https:' + relate.imgMain.fields.file.url}
            alt={relate.imgMain.fields.description}
            layout='fill'
            objectFit='cover'
          />
        </Avatar>
      </Grid>
      <Grid item xs={8} sm={9} lg={9}>
        <Typography
          color='text.primary'
          component='h3'
          sx={{
            fontSize: { xs: 14.6, md: 16.6 },
            fontWeight: { xs: 600, md: 700 },
          }}
        >
          {relate.titleH1}
        </Typography>
        <Typography mt={1} fontSize={12} color='text.secondary'>
          <Box component='span' fontWeight={600}>
            {relate.author.fields.name}
          </Box>{' '}
          &middot;{' '}
          <Box component='span'>{format(relate.dateArticle, 'my-locale')}</Box>
        </Typography>
        <Typography
          mt={1}
          fontSize={14.2}
          color='text.secondary'
          sx={{
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          {documentToReactComponents(relate.bodyH1)}
        </Typography>
      </Grid>
    </Grid>
  )
}
