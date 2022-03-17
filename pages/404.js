import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Card, CardMedia, Grid, Typography } from '@mui/material'
import Image from 'next/image'

const NotFound = () => {
  const router = useRouter()
  const [counterValue, setCounterValue] = useState(5)

  useEffect(() => {
    let timeId = setTimeout(() => {
      if (counterValue !== 1) {
        setCounterValue(counterValue - 1)
      } else {
        router.push('/')
      }
      console.log(counterValue)
    }, 1000)
    return () => {
      clearTimeout(timeId)
    }
  }, [counterValue])

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
              src='/404_oops.png'
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
            Ooops...
          </Typography>
        </Box>
        <Box my={2}>
          <Typography
            textAlign='center'
            fontWeight={800}
            sx={{ fontSize: { xs: 20, sm: 28 } }}
          >
            {' '}
            Esta página no se encuentra
          </Typography>
          <Typography
            textAlign='center'
            my={1}
            fontSize={16}
            fontWeight={800}
            color='text.secondary'
          >
            Volviendo a la{' '}
            <Link href='/'>
              <a
                style={{
                  color: '#0EA5E9',
                  textDecoration: 'none',
                }}
              >
                Página Inicial
              </a>
            </Link>{' '}
            en {counterValue}s
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default NotFound
