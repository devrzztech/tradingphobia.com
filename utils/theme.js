import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0EA5E9',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f8fafc',
    },
    info: {
      main: '#CB659E',
    },
    success: {
      main: '#22c55e',
    },
    warning: {
      main: '#facc15',
    },
    error: {
      main: '#ef4444',
    },
    text: {
      primary: '#fff',
      secondary: '#94A3B8',
    },
  },
  typography: {
    fontFamily: ['Inter', '-apple-system', 'sans-serif', 'Frijole'].join(','),
  },
})

export default theme
