import { Suspense, useContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import './styles/index.scss';
import { AsyncAboutPage, AsyncAboutPage1 } from "./pages/AboutPage/AsyncAboutPage";
import { AsyncMainPage } from "./pages/MainPage/AsyncMainPage";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./theme/ThemeContext";



export const App = () => {

  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
  }

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path='/about' element={<AsyncAboutPage1 />} />
          <Route path='/' element={<AsyncMainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
