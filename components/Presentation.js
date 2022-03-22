import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Presentation() {
  const router = useRouter()
  return (
    <Box
      sx={{
        textAlign: { md: 'center' },
        mt: { xs: 10, lg: 13 },
        px: { xs: 2, lg: 22 },
      }}
    >
      <Typography
        variant='h1'
        component='h1'
        sx={{ fontSize: { xs: 36, md: 60 }, fontWeight: 800, color: '#fff' }}
      >
        Rapidly build modern websites without ever leaving your HTML.
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: 18, md: 18 },
          color: '#94A3B8',
          mt: 3,
          px: { xs: 0, lg: 16 },
        }}
      >
        A utility-first CSS framework packed with classes like flex, pt-4,{' '}
        <Box
          component='span'
          sx={{
            color: '#37BCF8',
          }}
        >
          text-center
        </Box>
        {'  '}
        and rotate-90 that can be composed to build any design, directly in your
        markup.
      </Typography>

      {/* PRESENTATION TEXT */}
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Button
          color='primary'
          size='large'
          variant='contained'
          sx={{
            mx: 1,
            mt: 2,
            textTransform: 'capitalize',
            fontSize: 16,
            fontWeight: 600,
            boxShadow:
              'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',

            '&:hover': {
              backgroundColor: '#37bcf8',
            },
          }}
          endIcon={<ArrowRightAltIcon />}
        >
          Ir a Robinhood
        </Button>
        <Button
          color='primary'
          size='large'
          variant='outlined'
          sx={{
            mx: 1,
            mt: 2,
            textTransform: 'capitalize',
            fontSize: 16,
            fontWeight: 600,
            color: '#37bcf8',
          }}
        >
          Leer más
        </Button>
      </Grid>

      {/* PRESENTATION IMAGE */}
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        sx={{ mt: 6 }}
      >
        <Card
          sx={{
            width: 1040,
            borderRadius: 4,
          }}
        >
          <CardMedia>
            <Image
              src='/img_presentation.png'
              // src='/img_presentation.jpg'
              width={1280}
              height={837}
              layout='responsive'
              objectFit='contain'
              priority
              alt=''
            />
          </CardMedia>
        </Card>
      </Grid>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            ml: 1,
            fontSize: 10,
            color: '#fff',
          }}
          variant='overline'
        >
          Image by OpenClipart-Vectors from Pixabay
          {/* Photo by Skitterphoto from Pexels */}
        </Typography>
      </Box>
    </Box>
  )
}
