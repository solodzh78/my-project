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
    let newTheme: Theme = 'light';
    switch (theme) {
    case 'blue':
      newTheme = 'dark';
      break;
    case 'dark':
      newTheme = 'light';
      break;
    case 'light':
      newTheme = 'orange';
      break;
    case 'orange':
      newTheme = 'blue';
      break;

    default:
      break;
    }
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    toggleTheme,
    theme: theme || ThemeObject.LIGHT,
  };
};
