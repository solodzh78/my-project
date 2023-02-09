import { Suspense } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { NavBar } from "widgets/NavBar";
import { AppRouter } from "./providers/router";
import { SideBar } from "widgets/SideBar";

import './styles/index.scss';

export const App = () => {

  const { theme } = useTheme();

  return (
    <div className={classNames(['app', theme])}>
      <Suspense fallback=''>
        <NavBar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
