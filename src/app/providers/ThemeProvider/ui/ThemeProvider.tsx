/* eslint-disable react/jsx-no-constructed-context-values */
import { FC, ReactNode, useState } from 'react';
import {
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  ThemeObject,
} from '../lib/ThemeContext';

const defaultTheme = localStorage
  .getItem(LOCAL_STORAGE_THEME_KEY) as Theme || ThemeObject.LIGHT;

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

const ThemeProvider:FC<ThemeProviderProps> = (props) => {
  const {
    children,
    initialTheme,
  } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme,
    }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
