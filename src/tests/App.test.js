import { CssBaseline } from '@mui/material';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'src/app/store';
import { GlobalTheme } from 'src/utils/theme';
import App from '../App';
import React from 'react';

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <GlobalTheme>
      <CssBaseline />
      {children}
    </GlobalTheme>
  </Provider>
);

test('Renders Page, Title and input fields without a joke', async () => {
  render(<App />, { wrapper: Wrapper });
  const title = screen.getByText(/Chuck Norris jokes/i);
  expect(title).toBeInTheDocument();
  const joke = screen.getByAltText('A text with chuck norris joke');
  expect(joke).not.toBeInTheDocument();
});

/* test("Renders Joke", () => {
	render(<App />, { wrapper: Wrapper });
	const linkElement = screen.getByAltText('A text with chuck norris joke.');
	expect(linkElement).toBeInTheDocument();
}); */
