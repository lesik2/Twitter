import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@components/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './globalStyles';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <GlobalStyle />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
