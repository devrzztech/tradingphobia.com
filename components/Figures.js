import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import React from 'react'
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt'

export default function Figures() {
  return (
    <Box sx={{ mt: 10 }}>
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: 14,
          textTransform: 'uppercase',
          fontWeight: 600,
          px: 2,
        }}
        color='text.secondary'
      >
        Some text
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          mt: 2,
          fontSize: 30,
          fontWeight: 800,
          px: 2,
        }}
      >
        Tarifa de transacciones (Fee Trade)
      </Typography>
      <Grid
        container
        sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 10, px: 2 }}
      >
        <Grid
          border={0.1}
          borderRadius={4}
          item
          xs={12}
          sm={7}
          md={5}
          lg={3}
          sx={{
            mb: 5,
            textAlign: 'center',
            pb: 3,
            px: 1,
            boxShadow: '0 25px 50px -12px rgb(34 197 94  / 0.25)',
          }}
        >
          <Typography fontSize={72} fontWeight={600} sx={{ color: '#22c55e' }}>
            0%
          </Typography>
          <Typography sx={{ lineHeight: 1.7 }} textAlign='left' px={1}>
            <Box
              component='span'
              sx={{ fontWeight: 600, fontSize: 18, color: '#22c55e' }}
            >
              Robinhood{' '}
            </Box>
            no tiene costo por comprar y vender criptomonedas con la frecuencia
            que desees. Provee una interfaz completamente amigable y de facil
            acceso. Además de comprar criptomonedas puedes diversificar tu
            cartera en acciones de compañias, fondos de inversión (ETF
            <Box component='span'>&apos;</Box>s) ó IPO
            <Box component='span'>&apos;</Box>s.
          </Typography>
          <Box sx={{ width: '100%' }}>
            <nav aria-label='Descuentos por trade Binance'>
              <List>
                <ListItem>
                  <ListItemText secondary='- R.Hood permite comprar acciones fraccionarias por tan solo $1 del precio total de una acción, incluso si el precio es de cientos de dólares superior' />
                </ListItem>
              </List>
            </nav>
          </Box>
          <Box display='flex' flexDirection='column' mx={9}>
            <Button
              variant='outlined'
              color='success'
              size='large'
              sx={{
                mt: 2,
                px: 4,
                //
                textTransform: 'capitalize',
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              Leer más
            </Button>
            <Button
              variant='contained'
              endIcon={<ArrowRightAlt />}
              color='success'
              size='large'
              sx={{
                mt: 2,
                px: 4,
                //
                textTransform: 'capitalize',
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              Abrir cuenta
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          md={5}
          lg={3}
          sx={{
            mb: 5,
            textAlign: 'center',
            pb: 3,
            px: 1,
            border: { xs: 0.1, sm: 'none' },
            borderRadius: { xs: 4, sm: 'none' },
            boxShadow: {
              xs: '0 10px 15px -3px rgb(250 204 21 / 0.1), 0 4px 6px -4px rgb(250 204 21 / 0.1)',
              md: 'none',
            },
            '&:hover': {
              boxShadow:
                '  0 10px 15px -3px rgb(250 204 21 / 0.1), 0 4px 6px -4px rgb(250 204 21 / 0.1)',
              border: 0.1,
              borderRadius: 4,
            },
          }}
        >
          <Typography fontSize={72} fontWeight={600} sx={{ color: '#facc15' }}>
            0.1%
          </Typography>
          <Typography sx={{ lineHeight: 1.7 }} textAlign='left' px={1}>
            <Box
              component='span'
              sx={{ fontWeight: 600, fontSize: 18, color: '#facc15' }}
            >
              Binance (US){' '}
            </Box>
            calcula las tarfias entre 0,015% a 0,10% de cargos por compras y
            ventas, 3,5% o $10, lo que sea más alto para compras con tarjeta de
            débito, o $15 por transferencia bancaria en EE. UU. Los usuarios de
            Binance pueden reducir los costos si:
          </Typography>
          <Box sx={{ width: '100%' }}>
            <nav aria-label='Descuentos por trade Binance'>
              <List>
                <ListItem>
                  <ListItemText secondary='- Compra tokens de Binance (BNB) para pagar tarifas con un 25% de descuento' />
                </ListItem>
                <ListItem>
                  <ListItemText secondary='- Recomiendas amigos para obtener un descuento en las tarifas comerciales' />
                </ListItem>
              </List>
            </nav>
          </Box>
          <Box display='flex' flexDirection='column' mx={9}>
            <Button
              variant='outlined'
              color='warning'
              size='large'
              sx={{
                mt: 2,
                px: 4,
                //
                textTransform: 'capitalize',
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              Leer más
            </Button>
            <Button
              variant='contained'
              endIcon={<ArrowRightAlt />}
              color='warning'
              size='large'
              sx={{
                mt: 2,
                px: 4,
                //
                textTransform: 'capitalize',
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              Abrir cuenta
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          md={5}
          lg={3}
          sx={{
            mb: 5,
            textAlign: 'center',
            pb: 3,
            px: 1,
            border: { xs: 0.1, sm: 'none' },
            borderRadius: { xs: 4, sm: 'none' },
            boxShadow: {
              xs: '0 10px 15px -3px rgb( 239 68 68/ 0.1), 0 4px 6px -4px rgb( 239 68 68/ 0.1)',
              md: 'none',
            },
            '&:hover': {
              boxShadow:
                '  0 10px 15px -3px rgb(239 68 68 / 0.1), 0 4px 6px -4px rgb(239 68 68 / 0.1)',
              border: 0.1,
              borderRadius: 4,
            },
          }}
        >
          <Typography fontSize={72} fontWeight={600} sx={{ color: '#ef4444' }}>
            0.5%
          </Typography>
          <Typography sx={{ lineHeight: 1.7 }} textAlign='left' px={1}>
            <Box
              component='span'
              sx={{ fontWeight: 600, fontSize: 18, color: '#ef4444' }}
            >
              Coinbase{' '}
            </Box>
            tiene una estructura de tarifas variable en el momento en que
            realiza su pedido y puede determinarse por una combinación de
            factores que incluyen:
          </Typography>
          <Box sx={{ width: '100%' }}>
            <nav aria-label='Descuentos por trade Binance'>
              <List>
                <ListItem>
                  <ListItemText secondary='- el método de pago seleccionado' />
                </ListItem>
                <ListItem>
                  <ListItemText secondary='- el tamaño del pedido' />
                </ListItem>
                <ListItem>
                  <ListItemText secondary='- condiciones del mercado, como la volatilidad ' />
                </ListItem>
              </List>
            </nav>
          </Box>
          <Typography sx={{ lineHeight: 1.7 }} textAlign='left' px={1}>
            Por lo que podría pagar hasta un 4% por transacción.
          </Typography>
          <Box display='flex' flexDirection='column' mx={9}>
            <Button
              variant='outlined'
              color='error'
              size='large'
              sx={{
                mt: 2,
                px: 4,
                textTransform: 'capitalize',
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              Leer más
            </Button>
            <Button
              variant='contained'
              endIcon={<ArrowRightAlt />}
              color='error'
              size='large'
              sx={{
                mt: 2,
                px: 4,
                textTransform: 'capitalize',
                fontSize: 16,
                fontWeight: 600,
                color: 'black',
              }}
            >
              Abrir Cuenta
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
