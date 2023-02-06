import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";
import { RoutePaths } from "shared/config/routes";

export const routeConfig: RouteProps[] = [
  {
    path: RoutePaths.main,
    element: <MainPage/>
  },
  {
    path: RoutePaths.about,
    element: <AboutPage/>
  }
]