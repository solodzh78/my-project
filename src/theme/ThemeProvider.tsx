import { FC, useState } from 'react';
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from './ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider:FC = ({children}) => {

  const [theme, setTheme] = useState(defaultTheme);
  
  return (
    <ThemeContext.Provider value={{
      theme: theme,
      setTheme: setTheme
    }}>
      {children}
    </ThemeContext.Provider >
  )
}

export default ThemeProvider;