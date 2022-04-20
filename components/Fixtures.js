import { Avatar, Box, Grid, Link, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

export default function Fixtures() {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      display='flex'
      justifyContent='center'
      sx={{
        my: { xs: 2, sm: 4, md: 3, lg: 3 },
      }}
    >
      <Link href='#' underline='none' color='CaptionText'>
        <Box
          sx={{
            width: 276,
            height: 104,
            borderRadius: 2,
            backgroundColor: () => {
              switch (getRandomInt(0, 5)) {
                case 0:
                  return '#f5d0fe'
                case 1:
                  return '#a5f3fc'
                case 2:
                  return '#a7f3d0'
                case 3:
                  return '#d9f99d'
                case 4:
                  return '#fecaca'

                default:
                  break
              }
            },
          }}
        >
          <Grid
            container
            display='flex'
            justifyContent='space-between'
            sx={{
              height: '100%',
              px: 2,
              boxShadow:
                ' 0 10px 15px -3px rgb( 255 255 255/ 0.1), 0 4px 6px -4px rgb( 255 255 255/ 0.1)',
            }}
          >
            <Grid
              item
              xs={4}
              md={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
              }}
            >
              <Avatar sx={{ width: 70, height: 70, background: 'none' }}>
                <Image
                  src='/img_card_fixtures_1.png'
                  // width={70}
                  // height={70}
                  layout='fill'
                  objectFit='cover'
                  alt=''
                  priority
                />
              </Avatar>
            </Grid>
            <Grid
              item
              xs={8}
              md={8}
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                pl: 2,
              }}
            >
              <Box>
                <Typography
                  variant='h6'
                  sx={{ fontWeight: '800', fontSize: 16 }}
                >
                  Criptomonedas
                </Typography>
                <Typography variant='body2'>
                  Lorem ipsum dolor sit amet consectetur.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Link>
    </Grid>
  )
}
