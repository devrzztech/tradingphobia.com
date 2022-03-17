import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Image from 'next/image'

export default function Subscription() {
  return (
    <>
      <Grid
        container
        sx={{ my: 10, px: 2 }}
        display='flex'
        justifyContent='center'
      >
        <Grid item xs={12} md={6} sx={{}}>
          <Typography sx={{ fontSize: 36, fontWeight: 800 }}>
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
          <Typography
            color='text.secondary'
            sx={{ fontSize: 36, fontWeight: 800 }}
          >
            Lorem, ipsum dolor.
          </Typography>
        </Grid>
        <Grid item md={1} />
        <Grid item md={4} sx={{ display: 'flex' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Grid container>
              <Button
                variant='outlined'
                color='success'
                size='large'
                endIcon={<ArrowRightAltIcon />}
                sx={{
                  mx: 0.5,
                  my: 1,
                  color: 'success',
                  width: { xs: '100%', md: 'auto' },
                  py: 1.4,
                  //
                  textTransform: 'capitalize',
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                Lorem, ipsum
              </Button>
              <Button
                size='large'
                color='primary'
                variant='contained'
                sx={{
                  mx: 0.5,
                  my: 1,
                  //
                  textTransform: 'capitalize',
                  fontSize: 16,
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#37bcf8',
                  },
                }}
              >
                <Grid
                  container
                  sx={{ display: 'flex', justifyContent: 'center' }}
                >
                  <Grid item sx={{ mx: 0.8 }}>
                    <Typography
                      variant='body2'
                      sx={{ fontWeight: 800, textAlign: 'left', fontSize: 12 }}
                    >
                      #1 Coinbase Exchange
                    </Typography>
                    <Typography
                      variant='body1'
                      sx={{ fontWeight: 600, textAlign: 'left', fontSize: 16 }}
                    >
                      Lorem, ipsum dolor.
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{ mx: 0.8, display: 'flex', alignSelf: 'center' }}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>
                      <Image
                        src='/img_subscription_star.png'
                        // width={32}
                        // height={32}
                        layout='fill'
                        objectFit='cover'
                        alt=''
                      />
                    </Avatar>
                  </Grid>
                </Grid>
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid container display='flex' justifyContent='center'>
        <Grid item md={8} px={2} mt={2}>
          <Typography
            color='text.secondary'
            sx={{ textAlign: { xs: 'left', md: 'center' } }}
            fontSize={18}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            fuga nobis corporis! Quaerat fuga nobis
          </Typography>
          <Typography
            sx={{ textAlign: { xs: 'left', md: 'center' }, color: '#0EA5E9' }}
            mt={1}
            fontSize={20}
            fontWeight={600}
            // color='text.secondary'
          >
            labore distinctio, accusamus, provident culpa eum iusto culpa eum
            iusto. Nihil
          </Typography>
          <Grid
            container
            display='flex'
            justifyContent='center'
            alignItems='center'
            mt={4}
          >
            <Grid item md={6}>
              <Grid container>
                <Grid item xs={12} md={7} component='form' px={1} py={0.8}>
                  <TextField
                    color='primary'
                    label='Correo'
                    required
                    variant='outlined'
                    fullWidth
                    focused
                  />
                </Grid>
                <Grid item xs={12} md={5} px={1} py={0.8}>
                  <Button
                    variant='contained'
                    color='primary'
                    fullWidth
                    size='large'
                    sx={{
                      textTransform: 'capitalize',
                      height: '100%',
                      textTransform: 'capitalize',
                      fontSize: 16,
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: '#37bcf8',
                      },
                    }}
                  >
                    Subscríbeme
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
