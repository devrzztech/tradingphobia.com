import {
  Avatar,
  Button,
  CardActionArea,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import RelatedArticles from './RelatedArticles'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Related({ related }) {
  const router = useRouter()

  return (
    <Grid mt={8} py={6} container bgcolor='#1e293b'>
      <Grid item lg={1} sx={{ display: { xs: 'none', lg: 'flex' } }} />
      <Grid
        item
        xs={12}
        lg={8}
        sx={{
          // mt: 4,
          mx: 2,
        }}
      >
        <Typography
          component='p'
          variant='subtitle2'
          sx={{
            fontSize: 22,
            fontWeight: 700,

            color: '#0EA5E9',
          }}
        >
          Artículos relacionados
        </Typography>
        <Button
          onClick={() => router.push('/articulos')}
          variant='outlined'
          color='primary'
          endIcon={<ArrowRightAltIcon />}
          sx={{
            textTransform: 'capitalize',
            color: '#0EA5E9',
            mt: 0.8,
          }}
        >
          <Typography
            component='p'
            variant='subtitle2'
            sx={{
              fontSize: 14.4,
              fontWeight: 500,
              display: 'flex',
              alignSelf: 'center',
            }}
          >
            Ver todos
          </Typography>
        </Button>
        <Container sx={{ mt: 1 }}>
          {related.map(relate => (
            <CardActionArea key={relate.sys.id}>
              <Link href={'/' + relate.fields.slug}>
                <a style={{ textDecoration: 'none' }}>
                  <RelatedArticles relate={relate.fields} />
                  <Divider
                    sx={{
                      backgroundColor: '#0EA5E9',
                    }}
                  />
                </a>
              </Link>
            </CardActionArea>
          ))}
        </Container>
      </Grid>
    </Grid>
  )
}
