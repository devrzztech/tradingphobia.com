import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Image from 'next/image'

export default function Overview() {
  return (
    <Grid container direction='row' justifyContent='center' sx={{ mt: 8 }}>
      <Grid
        item
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 2,
        }}
        md={5}
      >
        <Box sx={{ display: 'block' }}>
          <Typography
            variant='h2'
            component='h2'
            sx={{
              fontSize: { xs: 24, md: 36 },
              fontWeight: 800,
              color: '#fff',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            quos ratione voluptatibus odit quid
          </Typography>
          <Typography
            sx={{ mt: 2, fontSize: { xs: 16, md: 18 }, color: '#94A3B8' }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            aliquid voluptatem harum fuga, molestiae nihil labore incidunt!
            Ipsam, earum. Fugit placeat repellat id, corporis assumenda nihil
            odio dolores laborum esse sapiente in molestias quod, error, amet
            ipsa cupiditate odit ab.
          </Typography>
          <Button
            // className='buttonRobinhood'
            endIcon={<ArrowRightAltIcon />}
            variant='outlined'
            color='warning'
            size='large'
            sx={{
              mt: 4,
              //
              textTransform: 'capitalize',
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            Aprender más
          </Button>
        </Box>
      </Grid>
      <Grid item sx={{ px: 2, mt: { xs: 4 } }} md={5}>
        <Card
          className=''
          sx={{ width: { xs: 358, md: 450 }, borderRadius: 4 }}
        >
          <CardActionArea>
            <CardMedia sx={{ height: { xs: 440, md: 560 } }}>
              <Image src='/img_overview.jpg' width={640} height={798} alt='' />
            </CardMedia>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  )
}
