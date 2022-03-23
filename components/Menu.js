import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import FeedIcon from '@mui/icons-material/Feed'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import { useRouter } from 'next/router'

export default function Menu() {
  const router = useRouter()
  return (
    <Grid
      container
      display='flex'
      sx={{
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
      }}
    >
      <Grid item>
        <Button
          onClick={() => router.push('/articulos')}
          sx={{ textTransform: 'capitalize', mx: 0.4 }}
          startIcon={<FeedIcon color='secondary' />}
          size='large'
        >
          <Typography color='text.primary' fontSize={16} fontWeight={600}>
            Artículos
          </Typography>
        </Button>
      </Grid>
      <Grid item>
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
              color: '#facc15',
            }}
          >
            Descuentos
          </Typography>
        </Button>
      </Grid>
    </Grid>
  )
}
