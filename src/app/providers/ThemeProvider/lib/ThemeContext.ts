import { createContext } from 'react';
import { ValueOf } from 'shared/types/ValueOf';

export const ThemeObject = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type Theme = ValueOf<typeof ThemeObject>

export interface ThemeContextProps {
  theme?: Theme;
  // eslint-disable-next-line no-unused-vars
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
