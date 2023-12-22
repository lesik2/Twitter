import React from 'react'
import ReactDOM from 'react-dom/client'
import {AppRouter} from '@components/AppRouter'
import { ThemeProvider } from 'styled-components'
import {theme} from '@constants/theme';
import { Provider } from 'react-redux';

import GlobalStyle from './globalStyles'
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppRouter />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
  </React.StrictMode>,
)
