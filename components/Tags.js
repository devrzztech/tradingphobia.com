import { Chip, Link, Stack } from '@mui/material'
import React from 'react'

export default function Tags({ tag_1, tag_2, tag_3 }) {
  return (
    <Stack direction='row' spacing={1} sx={{ my: 1, justifyContent: 'center' }}>
      <Link href='#' underline='hover'>
        <Chip
          color='success'
          label={`#${tag_1}`}
          variant='filled'
          size='small'
          sx={{
            letterSpacing: 0.3,
            color: '#fff',
            fontWeight: 500,
          }}
        />
      </Link>
      <Link href='#' underline='hover'>
        <Chip
          color='secondary'
          label={`#${tag_2}`}
          variant='filled'
          size='small'
          sx={{ letterSpacing: 0.3 }}
        />
      </Link>
      <Link href='#' underline='hover'>
        <Chip
          color='secondary'
          label={`#${tag_3}`}
          variant='filled'
          size='small'
          sx={{ letterSpacing: 0.3 }}
        />
      </Link>
    </Stack>
  )
}
