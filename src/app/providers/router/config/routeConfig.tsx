import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePaths } from 'shared/config/routes';

type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  main: {
    path: RoutePaths.main,
    element: <MainPage />,
  },
  about: {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
  profile: {
    path: RoutePaths.profile,
    element: <ProfilePage />,
    authOnly: true,
  },
  not_found: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
};
