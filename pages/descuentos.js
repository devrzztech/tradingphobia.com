import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  CardActions,
  Button,
  Divider,
  Chip,
} from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import Back from '../components/Back'
import Layout from '../components/Layout'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

export default function Descuentos() {
  return (
    <Layout title='test' description='test'>
      <Back />
      <Grid
        container
        mt={8}
        sx={{
          px: { xs: 2, lg: 0 },
        }}
      >
        <Box display='flex' justifyContent='center' sx={{ width: '100%' }}>
          <Grid item xs={12} lg={8}>
            <Box display='flex' flexDirection='row'>
              <Typography
                fontWeight={800}
                fontSize={24}
                sx={{
                  color: '#facc15',
                }}
              >
                Descuentos
              </Typography>
              <FlashOnIcon
                color='warning'
                sx={{
                  display: 'flex',
                  transform: 'rotate(20deg)',
                  fontSize: 28,
                  alignSelf: 'center',
                }}
              />
            </Box>
            <Typography
              mt={0.4}
              fontWeight={600}
              fontSize={18}
              color='text.secondary'
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
              deleniti perferendis.
            </Typography>
            <Container>
              <Grid
                mt={4}
                container
                display='flex'
                sx={{
                  justifyContent: { xs: 'space-evenly', md: 'space-between' },
                }}
              >
                <Grid my={1.8} item>
                  <Card
                    sx={{
                      maxWidth: 280,
                      borderRadius: 3,
                      boxShadow:
                        '0 10px 15px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1)',
                      '&:hover': {
                        boxShadow:
                          '0 20px 25px -5px rgb(255 255 255 / 0.1), 0 8px 10px -6px rgb(255 255 255 / 0.1)',
                      },
                    }}
                  >
                    <CardActionArea>
                      <CardMedia sx={{ position: 'relative' }}>
                        <Image
                          src='/robinhood.jpeg'
                          // src='/robinhood.png'
                          width={280}
                          height={136}
                          layout='responsive'
                          objectFit='cover'
                          alt=''
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            width: '40%',
                            height: 30,
                            bottom: 0,
                            right: 0,
                            backgroundColor: 'rgba(241,245,249)',
                            // backgroundColor: 'rgba(255,255,255,.9)',
                            borderRadius: 1,
                            mb: 1,
                            mr: 1,
                          }}
                        >
                          <Typography
                            textAlign='left'
                            variant='subtitle2'
                            fontWeight={700}
                            sx={{
                              color: '#22c55e',
                              height: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            Robinhood
                          </Typography>
                        </Box>
                      </CardMedia>
                    </CardActionArea>
                    <CardContent sx={{ bgcolor: '#1e293b' }}>
                      <Typography
                        gutterBottom
                        variant='subtitle2'
                        color='text.secondary'
                      >
                        <Box
                          component='span'
                          sx={{
                            color: '#22c55e',
                            fontSize: 16,
                            fontWeight: 800,
                          }}
                        >
                          Gana hasta $200
                        </Box>{' '}
                        en acciones fraccionarias valoradas entre $5 y $200
                        dolares de las empresas líderes en los Estados Unidos.
                      </Typography>
                      <Button
                        size='small'
                        variant='contained'
                        color='success'
                        endIcon={<ArrowRightAltIcon />}
                        sx={{
                          mt: 1,
                          fontWeight: 700,
                          color: '#f1f5f9',
                          '&:hover': {
                            backgroundColor: '#16a34a',
                          },
                        }}
                      >
                        Lo quiero
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid my={1.8} item>
                  <Card
                    sx={{
                      maxWidth: 280,
                      borderRadius: 3,
                      boxShadow:
                        '0 10px 15px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1)',

                      '&:hover': {
                        boxShadow:
                          '0 20px 25px -5px rgb(255 255 255 / 0.1), 0 8px 10px -6px rgb(255 255 255 / 0.1)',
                      },
                    }}
                  >
                    <CardActionArea>
                      <CardMedia sx={{ position: 'relative' }}>
                        <Image
                          src='/coinbase.webp'
                          // src='/coinbase.svg'
                          width={280}
                          height={136}
                          layout='responsive'
                          objectFit='cover'
                          alt=''
                        />
                      </CardMedia>
                      <Box
                        sx={{
                          position: 'absolute',
                          width: '40%',
                          height: 30,
                          bottom: 0,
                          right: 0,
                          backgroundColor: 'rgba(241,245,249)',
                          // backgroundColor: 'rgba(255,255,255,.9)',
                          borderRadius: 1,
                          mb: 1,
                          mr: 1,
                        }}
                      >
                        <Typography
                          textAlign='left'
                          variant='subtitle2'
                          fontWeight={700}
                          sx={{
                            color: '#0EA5E9',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          Coinbase
                        </Typography>
                      </Box>
                    </CardActionArea>

                    <CardContent sx={{ bgcolor: '#1e293b' }}>
                      <Typography
                        gutterBottom
                        variant='subtitle2'
                        color='text.secondary'
                      >
                        <Box
                          component='span'
                          sx={{
                            color: '#0EA5E9',
                            fontSize: 16,
                            fontWeight: 800,
                          }}
                        >
                          Gana hasta $200
                        </Box>{' '}
                        en acciones fraccionarias valoradas entre $5 y $200
                        dolares de las empresas líderes en los Estados Unidos.
                      </Typography>
                      <Button
                        size='small'
                        variant='contained'
                        color='primary'
                        endIcon={<ArrowRightAltIcon />}
                        sx={{
                          mt: 1,
                          fontWeight: 700,
                          color: '#f1f5f9',
                          '&:hover': {
                            backgroundColor: '#0284c7',
                          },
                        }}
                      >
                        Lo quiero
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid my={1.8} item>
                  <Card
                    sx={{
                      maxWidth: 280,
                      borderRadius: 3,
                      boxShadow:
                        '0 10px 15px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1)',
                      '&:hover': {
                        boxShadow:
                          '0 20px 25px -5px rgb(255 255 255 / 0.1), 0 8px 10px -6px rgb(255 255 255 / 0.1)',
                      },
                    }}
                  >
                    <CardActionArea>
                      <CardMedia sx={{ position: 'relative' }}>
                        <Image
                          src='/binance.png'
                          // src='/binance.svg'
                          width={280}
                          height={136}
                          layout='responsive'
                          objectFit='cover'
                          alt=''
                        />
                      </CardMedia>
                      <Box
                        sx={{
                          position: 'absolute',
                          width: '40%',
                          height: 30,
                          bottom: 0,
                          right: 0,
                          // backgroundColor: 'rgba(241,245,249)',
                          backgroundColor: 'rgba(255,255,255,.9)',
                          borderRadius: 1,
                          mb: 1,
                          mr: 1,
                        }}
                      >
                        <Typography
                          textAlign='left'
                          variant='subtitle2'
                          fontWeight={700}
                          sx={{
                            color: '#111827',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          Binance /US
                        </Typography>
                      </Box>
                    </CardActionArea>

                    <CardContent sx={{ bgcolor: '#1e293b' }}>
                      <Typography
                        gutterBottom
                        variant='subtitle2'
                        color='text.secondary'
                      >
                        <Box
                          component='span'
                          sx={{
                            color: '#facc15',
                            fontSize: 16,
                            fontWeight: 800,
                          }}
                        >
                          Gana hasta $200
                        </Box>{' '}
                        en acciones fraccionarias valoradas entre $5 y $200
                        dolares de las empresas líderes en los Estados Unidos.
                      </Typography>
                      <Button
                        size='small'
                        variant='contained'
                        color='warning'
                        endIcon={<ArrowRightAltIcon />}
                        sx={{
                          mt: 1,
                          fontWeight: 700,
                          color: '#111827',
                          '&:hover': {
                            backgroundColor: '#eab308',
                          },
                        }}
                      >
                        Lo quiero
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid my={1.8} item>
                  <Card
                    sx={{
                      maxWidth: 280,
                      borderRadius: 3,
                      boxShadow:
                        '0 10px 15px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1)',
                      '&:hover': {
                        boxShadow:
                          '0 20px 25px -5px rgb(255 255 255 / 0.1), 0 8px 10px -6px rgb(255 255 255 / 0.1)',
                      },
                    }}
                  >
                    <CardActionArea>
                      <CardMedia sx={{ position: 'relative' }}>
                        <Image
                          src='/webull.png'
                          width={280}
                          height={136}
                          layout='responsive'
                          objectFit='cover'
                          alt=''
                        />
                      </CardMedia>
                      <Box
                        sx={{
                          position: 'absolute',
                          width: '40%',
                          height: 30,
                          bottom: 0,
                          right: 0,
                          backgroundColor: 'rgba(241,245,249)',
                          // backgroundColor: 'rgba(255,255,255,.9)',
                          borderRadius: 1,
                          mb: 1,
                          mr: 1,
                        }}
                      >
                        <Typography
                          textAlign='left'
                          variant='subtitle2'
                          fontWeight={700}
                          sx={{
                            color: '#0EA5E9',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          Webull
                        </Typography>
                      </Box>
                    </CardActionArea>

                    <CardContent sx={{ bgcolor: '#1e293b' }}>
                      <Typography
                        gutterBottom
                        variant='subtitle2'
                        color='text.secondary'
                      >
                        <Box
                          component='span'
                          sx={{
                            color: '#0EA5E9',
                            fontSize: 16,
                            fontWeight: 800,
                          }}
                        >
                          Gana hasta $200
                        </Box>{' '}
                        en acciones fraccionarias valoradas entre $5 y $200
                        dolares de las empresas líderes en los Estados Unidos.
                      </Typography>
                      <Button
                        size='small'
                        variant='contained'
                        color='primary'
                        endIcon={<ArrowRightAltIcon />}
                        sx={{
                          mt: 1,
                          fontWeight: 700,
                          color: '#f1f5f9',
                          '&:hover': {
                            backgroundColor: '#0284c7',
                          },
                        }}
                      >
                        Lo quiero
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                {/* Cut Grid Above */}
              </Grid>
            </Container>
          </Grid>
        </Box>
      </Grid>
    </Layout>
  )
}
