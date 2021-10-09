import React, { createContext, useContext, useMemo } from 'react';

const Theme = createContext({});

export const useTheme = () => {
  const theme = useContext(Theme);

  if (!theme) throw '`useTheme` should be in `ThemeProvider`';

  return { theme };
};

export const ThemeProvider = ({ children }) => {
  const value = useMemo(() => ({}), []);
  return <Theme.Provider value={value}>{children}</Theme.Provider>;
};
