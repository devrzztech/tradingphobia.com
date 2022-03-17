import { CssBaseline } from '@mui/material'
import React from 'react'
import '../styles/globals.sass'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../utils/theme'
import NextNProgress from 'nextjs-progressbar'
import { CacheProvider } from '@emotion/react'
import PropTypes from 'prop-types'
import createEmotionCache from '../utils/createEmotionCache'
import 'animate.css'

const clientSideEmotionCache = createEmotionCache()
function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <NextNProgress color='#0EA5E9' height={2} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}

export default MyApp
