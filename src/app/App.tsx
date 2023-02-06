import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { NavBar } from "widgets/NavBar";
import { AppRouter } from "./providers/router";
import './styles/index.scss';

export const App = () => {

  const { theme } = useTheme();

  return (
    <div className={classNames(['app', theme])}>
      <NavBar />
      <AppRouter />
    </div>
  )
}
