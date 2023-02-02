import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import './styles/index.scss';
import { AsyncAboutPage, AsyncAboutPage1 } from "./pages/AboutPage/AsyncAboutPage";
import { AsyncMainPage } from "./pages/MainPage/AsyncMainPage";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";



export const App = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
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
