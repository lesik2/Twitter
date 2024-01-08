import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { store } from '@store/index';
import { lightTheme } from '@constants/theme';
import { MemoryRouter } from 'react-router-dom';

import { ROUTES } from '../constants';

function render(ui: ReactElement) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <MemoryRouter initialEntries={[ROUTES.AUTHORIZATION]}>
        <Provider store={store}>
          <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
        </Provider>
      </MemoryRouter>
    );
  }

  return rtlRender(ui, { wrapper: Wrapper });
}

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { render };
