import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { render as rtlRender, } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { store } from '@store/index';
import { lightTheme } from '@constants/theme';




function render(ui: ReactElement) {

  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          {children}
        </ThemeProvider>
      </Provider>
    );
  }

  return rtlRender(ui, { wrapper: Wrapper });
}

// eslint-disable-next-line react-refresh/only-export-components
export *  from '@testing-library/react';
export { render };
