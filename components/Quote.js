import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Quote({ quote }) {
  return (
    <>
      <Box
        component='blockquote'
        sx={{
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <Typography
          mt={3}
          sx={{ fontSize: { xs: 14, lg: 16 }, color: '#CB659E' }}
        >
          <Box
            component='q'
            fontWeight={600}
            sx={{ fontSize: { xs: 16, lg: 17 }, color: '#CB659E' }}
          >
            {quote}
            {/* No importa para nada si tienes razón o no. Lo que sí importa es
            cuánto ganas cuando tienes razón y cuánto pierdes cuando estás
            equivocado. */}
          </Box>
        </Typography>
      </Box>

      {/* JUST XS SCREEN */}
      <Typography
        mt={3}
        sx={{
          fontSize: { xs: 14, lg: 16 },
          color: '#CB659E',
          display: { xs: 'block', sm: 'none' },
        }}
      >
        <Box
          component='q'
          fontWeight={600}
          sx={{ fontSize: { xs: 16, lg: 17 }, color: '#CB659E' }}
        >
          {quote}
        </Box>
      </Typography>
    </>
  )
}
