import React from 'react'
import Pagination from '@mui/material/Pagination'
import { Box } from '@mui/system'

export default function PaginationArticles({
  articlesPerPage,
  totalArticles,
  currentPage,
  setCurrentPage,
}) {
  const pageNumber = []

  for (let i = 0; i < Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumber.push(i)
  }

  return (
    <>
      {/* ONLY MD BREAKPOINT */}
      <Pagination
        count={pageNumber.length}
        onChange={(e, page) => setCurrentPage(page)}
        page={currentPage}
        shape='rounded'
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
        count={pageNumber.length}
        onChange={(e, page) => setCurrentPage(page)}
        page={currentPage}
        shape='rounded'
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
