import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import Image from 'next/image'

export default function Custom500() {
  const router = useRouter()

  return (
    <Grid
      container
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{ height: '100vh' }}
    >
      <Grid xs={12} item>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
        >
          <CardMedia sx={{ width: { xs: 120, sm: 150 }, mx: 2 }}>
            <Image
              width={150}
              height={150}
              src='/500_error.png'
              layout='responsive'
              objectFit='cover'
              alt=''
            />
          </CardMedia>
          <Typography
            fontWeight='900'
            component='h1'
            sx={{ mx: 2, color: '#0EA5E9', fontSize: { xs: 72, sm: 96 } }}
          >
            Error 500
          </Typography>
        </Box>
        <Box my={2}>
          <Typography
            textAlign='center'
            fontWeight={800}
            sx={{ fontSize: { xs: 20, sm: 28 } }}
          >
            {' '}
            Ha habido un error en el servidor.
          </Typography>
          <Typography
            textAlign='center'
            my={1}
            fontSize={18}
            fontWeight={800}
            color='text.secondary'
          >
            Volver a la{' '}
            <Button
              onClick={() => router.push('/')}
              variant='outlined'
              size='small'
              sx={{ fontWeight: '700' }}
            >
              Página Inicial
            </Button>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
