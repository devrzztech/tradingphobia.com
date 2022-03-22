import React from 'react'

import PropTypes from 'prop-types'

import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material'

function IconContainer(props) {
  const { value, ...other } = props
  return (
    <span style={{ paddingLeft: 4, paddingRight: 4 }} {...other}>
      {customIcons[value].icon}
    </span>
  )
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
}

export default function Feedback() {
  return (
    <>
      <Grid container justifyContent='center' sx={{ mt: 12, px: 2 }}>
        <Grid item md={6}>
          <Typography fontSize={20} fontWeight={600}>
            Some text
          </Typography>
          <Typography color='text.secondary' fontSize={18} mt={1.4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus
            quam, rerum nobis sequi assumenda, voluptatum provident aut facilis
            dicta, dolores voluptates. Saepe accusantium at
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 4, px: 2 }}>
        <Grid item xs={12} md={4} />
        <Grid item xs={12} md={4} sx={{ px: { sm: 16, md: 0 } }}>
          <TextField
            fullWidth
            label='Email'
            required
            sx={{ my: 1 }}
            focused
            color='primary'
          />
          <TextField
            focused
            color='primary'
            fullWidth
            label='Comentarios'
            required
            multiline
            minRows={10}
            sx={{ my: 1 }}
          />

          <Button
            fullWidth
            variant='contained'
            color='primary'
            size='large'
            sx={{
              color: '#fff',
              fontWeight: 700,
              letterSpacing: 0.6,
              mt: 3,
            }}
          >
            Enviar
          </Button>
        </Grid>
        <Grid item md={4} />
      </Grid>
    </>
  )
}
