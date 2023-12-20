import React from 'react'
import ReactDOM from 'react-dom/client'
import {AppRouter} from '@components/AppRouter'
import { ThemeProvider } from 'styled-components'
import {theme} from '@constants/theme';

import GlobalStyle from './globalStyles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRouter />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
