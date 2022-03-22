import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import FeedIcon from '@mui/icons-material/Feed'
import FlashOnIcon from '@mui/icons-material/FlashOn'

export default function ButtonAppBar() {
  const router = useRouter()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          elevation={0}
          position='static'
          sx={{ mt: 2, px: 1, backgroundColor: '#10172A', color: '#000' }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              onClick={() => router.push('/')}
              sx={{ textTransform: 'lowercase' }}
            >
              <Box
                sx={{
                  mr: 1.4,
                  mt: 0.4,
                  transform: 'rotate(-20deg)',
                }}
              >
                <Image src='/img_navbar.png' width={28} height={28} alt='' />
              </Box>

              <Typography
                className='textHeader'
                variant='h6'
                noWrap
                component='div'
                sx={{
                  flexGrow: 1,
                  display: {
                    sm: 'block',
                    fontWeight: '600',
                    color: '#37BCF8',
                    fontSize: 24,
                    letterSpacing: 1.2,
                    fontFamily: 'Frijole',
                  },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                tradingphobia.com
              </Typography>
            </Button>
            <Box display='flex' flexDirection='row'>
              <Button
                onClick={() => router.push('/articulos')}
                sx={{ textTransform: 'capitalize', mx: 0.4 }}
                startIcon={<FeedIcon color='secondary' />}
                size='large'
              >
                <Typography
                  color='text.primary'
                  fontSize={16}
                  fontWeight={600}
                  sx={{
                    display: { xs: 'none', md: 'block' },
                  }}
                >
                  Artículos
                </Typography>
              </Button>
              <Button
                onClick={() => router.push('/descuentos')}
                sx={{ textTransform: 'capitalize', mx: 0.4 }}
                startIcon={<FlashOnIcon color='warning' />}
                size='large'
                variant='outlined'
                color='warning'
              >
                <Typography
                  color='text.primary'
                  fontSize={16}
                  fontWeight={600}
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    color: '#facc15',
                  }}
                >
                  Descuentos
                </Typography>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  )
}
