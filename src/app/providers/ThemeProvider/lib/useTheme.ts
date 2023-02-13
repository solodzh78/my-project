import { useContext } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeObject,
} from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === ThemeObject.DARK
      ? ThemeObject.LIGHT
      : ThemeObject.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { toggleTheme, theme };
};
