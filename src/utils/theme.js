import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

/**
 * Theme provider/color pallette
 * @param {Element} children whole page is wrapped to this pallette
 * @returns {Component} Themeprovider
 */
export function GlobalTheme({ children }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFFFFF',
        contrastText: '#000000',
      },
      secondary: {
        main: '#000000',
        contrastText: '#ffffff',
      },
      gradient: {
        linear: 'linear-gradient(347.95deg, #031E20 0%, #ECECEC 100%)',
        radial: 'radial-gradient(100% 407.4% at 0% 0%, #FFFFFF 0%, rgba(255, 255, 255, 0.4) 100%)'
      },
      type: 'light',
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}