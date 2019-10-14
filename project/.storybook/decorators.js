import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import breakpoints from '../src/theme/breakpoints';
import '../src/App.css';
import '../src/Normalize.css';

const GlobalStyle = createGlobalStyle`@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap')`;

const theme = {
  breakpoints: breakpoints,
};

export const ThemeDecorator = story => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </>
);
