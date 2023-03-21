import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { GlobalTheme } from './theme';
import { CssBaseline } from '@mui/material';
import { setupStore } from 'src/app/store';

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {},
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <GlobalTheme>
          <CssBaseline />
          {children}
        </GlobalTheme>
      </Provider>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
