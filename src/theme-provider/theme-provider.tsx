import React, {
  FC,
  HTMLAttributes,
  ReactChild,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

type ContextType = {
  theme: object;
  currentTheme: object;
  updateTheme: (theme: object) => void;
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactChild;
  theme: {
    light: object;
    dark: object;
  };
}

const Theme = createContext<ContextType>({
  theme: {},
  currentTheme: {},
  updateTheme: () => {},
});

export const useTheme = () => {
  const theme = useContext<ContextType>(Theme);

  if (!theme) throw '`useTheme` should be in `ThemeProvider`';

  return theme;
};

export const ThemeProvider: FC<Props> = ({ theme, children }) => {
  const [currentTheme, setCurrentTheme] = useState<object>(theme.dark);

  const updateTheme = useCallback(
    (newTheme: object) => setCurrentTheme(newTheme),
    []
  );

  return (
    <Theme.Provider value={{ theme, currentTheme, updateTheme }}>
      {children}
    </Theme.Provider>
  );
};
