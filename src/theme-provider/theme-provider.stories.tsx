import React from 'react';
import { ThemeProvider } from '.';
import { Button } from '../button';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Theme Provider',
};

export const Default = () => (
  <ThemeProvider>
    <Button>Button</Button>
  </ThemeProvider>
);
