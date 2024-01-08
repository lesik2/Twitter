import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@components/App/index';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './globalStyles';
import { store } from './store';
import { ErrorBoundary } from './components/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <App />
          <GlobalStyle />
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
