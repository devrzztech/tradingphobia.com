import { Box, Button } from '@mui/material'
import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { useRouter } from 'next/router'

export default function Back() {
  const router = useRouter()

  return (
    <Box mt={2} ml={2} display='flex' flexDirection='row'>
      <Button
        size='large'
        startIcon={<KeyboardBackspaceIcon />}
        sx={{
          textTransform: 'capitalize',
          fontWeight: '600',
          fontSize: 16,
          letterSpacing: 0.2,
        }}
        onClick={() => router.push('/')}
      >
        Volver
      </Button>
    </Box>
  )
}
