import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Menu from './Menu'

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
                <Image
                  src='/img_navbar.png'
                  width={28}
                  height={28}
                  alt=''
                  priority
                />
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
            <Box
              flexDirection='row'
              sx={{
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              <Menu />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  )
}
