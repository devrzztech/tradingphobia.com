import { Box, Divider, Grid, Link, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        mt: 8,
        py: 5,
      }}
      position='relative'
    >
      <Box
        position='absolute'
        sx={{
          animation: 'example 1.6s linear 1s infinite alternate-reverse',
          '@keyframes example': {
            '0%': {
              top: 30,
              left: 200,
              transform: 'rotate(0deg)',
            },
            '100%': {
              top: 100,
              left: 200,
            },
          },
        }}
      >
        <Image src='/img_navbar.png' alt='' width={24} height={24} priority />
      </Box>

      <Grid
        item
        py={0.6}
        px={3}
        md={5}
        lg={4}
        display='flex'
        justifyContent='center'
      >
        <Typography
          variant='caption'
          fontSize={14}
          fontWeight={600}
          letterSpacing={0.6}
          textTransform='uppercase'
        >
          © 2022{' '}
          <Box component='span' color='#0EA5E9'>
            Vluespider
          </Box>{' '}
          Trading Advices
        </Typography>
      </Grid>
      <Grid
        color='text.secondary'
        item
        py={0.6}
        px={3}
        md={5}
        lg={4}
        display='flex'
        justifyContent='center'
      >
        <Typography variant='caption' fontSize={14} sx={{ textAlign: 'left' }}>
          La recomendación de productos y servicios es personal a través de mi
          experiencia como usuario. Es posible que recibamos comisiones por las
          compras realizadas desde nuestros enlaces.
        </Typography>
      </Grid>
      <Grid
        item
        py={0.6}
        md={5}
        lg={4}
        display='flex'
        justifyContent='center'
        sx={{
          mt: { md: 1 },
        }}
      >
        <div>
          <Stack
            direction='row'
            divider={<Divider orientation='vertical' flexItem />}
            spacing={2}
          >
            <Link href='#' underline='hover'>
              <Box sx={{ display: 'flex' }}>
                <Typography
                  color='text.secondary'
                  variant='caption'
                  sx={{ fontSize: 14, mx: { xs: 0, sm: 0.3 }, py: 0.1 }}
                >
                  Instagram
                </Typography>
              </Box>
            </Link>
            <Link href='#' underline='hover'>
              <Box sx={{ display: 'flex' }}>
                <Typography
                  color='text.secondary'
                  variant='caption'
                  sx={{ fontSize: 14, mx: { xs: 0, sm: 0.3 }, py: 0.1 }}
                >
                  Twitter
                </Typography>
              </Box>
            </Link>
            <Link href='#' underline='hover'>
              <Box sx={{ display: 'flex' }}>
                <Typography
                  color='text.secondary'
                  variant='caption'
                  sx={{ fontSize: 14, mx: { xs: 0, sm: 0.3 }, py: 0.1 }}
                >
                  Discord
                </Typography>
              </Box>
            </Link>

            <Link href='#' underline='hover' color='white'>
              <Box sx={{ display: 'flex' }} boxShadow={3}>
                <Typography
                  variant='caption'
                  sx={{
                    fontSize: 15,
                    backgroundColor: '#0EA5E9',
                    px: 1.2,
                    py: 0.1,
                    fontWeight: '600',
                    color: 'white',
                    borderRadius: 1,
                    '&:hover': {
                      backgroundColor: '#48addb',
                    },
                  }}
                >
                  Descuentos
                </Typography>
              </Box>
            </Link>
          </Stack>
        </div>
      </Grid>
    </Grid>
  )
}
