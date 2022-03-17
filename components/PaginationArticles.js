import React from 'react'
import Pagination from '@mui/material/Pagination'
import { Box } from '@mui/system'

export default function PaginationArticles() {
  return (
    <>
      {/* ONLY MD BREAKPOINT */}
      <Pagination
        count={10}
        showFirstButton
        showLastButton
        color='primary'
        sx={{
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'center',
          mt: 3,
        }}
      />

      {/* ONLY XS BREAKPOINT */}
      <Pagination
        count={10}
        color='primary'
        sx={{
          display: { xs: 'flex', sm: 'none', md: 'none' },
          justifyContent: 'center',
          mt: 2,
        }}
      />
    </>
  )
}
