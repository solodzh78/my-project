import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import './styles/index.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";



export const App = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
