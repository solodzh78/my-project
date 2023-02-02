// import { useContext } from "react";
// import { Theme, ThemeContext } from "./ThemeContext";

// interface UseThemeResult {
//   toggleTheme: () => void;
//   theme: Theme;
// }

// export const useTheme = () => {

//   const { theme, setTheme } = useContext(ThemeContext);

//   const toggleTheme = () => {
//     setTheme((theme) => theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
//     localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
//   }

// }