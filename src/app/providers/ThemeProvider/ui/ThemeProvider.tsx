/* eslint-disable react/jsx-no-constructed-context-values */
import { FC, useState } from 'react';
import {
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  ThemeObject,
} from '../lib/ThemeContext';

const defaultTheme = localStorage
  .getItem(LOCAL_STORAGE_THEME_KEY) as Theme || ThemeObject.LIGHT;

const ThemeProvider:FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

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
