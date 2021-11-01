import React, {
  FC,
  HTMLAttributes,
  ReactChild,
  createContext,
  useCallback,
  useState,
  useEffect,
} from 'react';

import { ThemeContextType } from './types';

import { mapTheme } from './map-theme';

import { themes } from '../themes';
interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
  theme: {
    light: object;
    dark: object;
  };
}

export const Theme = createContext<ThemeContextType>({
  currentTheme: '',
  applyTheme: () => {},
});

export const ThemeProvider: FC<Props> = ({ theme, children }) => {
  const [currentTheme, setCurrentTheme] = useState<string>('');

  const applyTheme = useCallback((newTheme) => {
    const themeObject = mapTheme(themes[newTheme]);

    if (!themeObject) return;

    const root = document.documentElement;

    Object.keys(themeObject).forEach((property) => {
      if (property === 'name') return;
      root.style.setProperty(property, themeObject[property]);
    });

    setCurrentTheme(newTheme);
  }, []);

  useEffect(() => applyTheme(theme), [theme]);

  return (
    <Theme.Provider value={{ currentTheme, applyTheme }}>
      {children}
    </Theme.Provider>
  );
};
