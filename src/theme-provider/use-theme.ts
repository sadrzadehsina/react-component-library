import { useContext } from 'react';
import { ThemeContextType } from './types';
import { Theme } from './theme-provider';

export const useTheme = () => {
  const theme = useContext<ThemeContextType>(Theme);

  if (!theme) throw '`useTheme` should be in `ThemeProvider`';

  return theme;
};
