import React from 'react';
import { ThemeProvider } from '.';
import { Button } from '../button';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Theme Provider',
};

const theme = {
  light: {
    primaryColor: '#fff',
    secondaryColor: '#222',
  },
  dark: {
    primaryColor: '#222',
    secondaryColor: '#fff',
  },
};

export const Default = () => (
  <ThemeProvider theme={theme}>
    <Button>Button</Button>
  </ThemeProvider>
);
