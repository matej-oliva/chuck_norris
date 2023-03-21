import PropTypes from 'prop-types';
import { CssBaseline } from '@mui/material';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from 'src/app/store';
import { GlobalTheme } from 'src/utils/theme';
import App from '../App';
import React from 'react';
import { renderWithProviders } from 'src/utils/test-utils';
/* import { fetchRandomJoke } from 'src/features/joke'; */

const Wrapper = ({ children }) => (
  <Provider store={setupStore}>
    <GlobalTheme>
      <CssBaseline />
      {children}
    </GlobalTheme>
  </Provider>
);

Wrapper.propTypes = {
  children: PropTypes.element,
};

describe('Testing static components in app', () => {
  test(`Static components:  
    * Title 
    * Chuck Norris head image 
    * Reset button
    * Search input
    * Category select
    * Divider
    * Footer`, async () => {
    renderWithProviders(<App />);
    const title = screen.getByText(/Chuck Norris jokes/i);
    const chuck = screen.getByAltText(/chuck norris head image/i);
    const resetButton = screen.getByText(/Reset/i);
    const ChuckNorrisJoke = screen.queryByAltText(/A text with chuck norris joke/i);
    const searchInput = screen.getByPlaceholderText(/Search new Chuck Norris joke/i);
    const categorySelect = screen.getByText(/Reset/i);

    expect(title).toBeInTheDocument();
    expect(chuck).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
    expect(ChuckNorrisJoke).not.toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(categorySelect).toBeInTheDocument();
  });
});
