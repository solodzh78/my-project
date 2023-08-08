import { UserRole } from 'entities/User';
import { AboutPage } from 'pages/AboutPage';
import { AdminPanelPage } from 'pages/AdminPanelPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ForbiddenPage } from 'pages/ForbiddenPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePaths } from 'shared/config/routes';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
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
    path: `${RoutePaths.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  articles: {
    path: RoutePaths.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  article: {
    path: `${RoutePaths.article}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  not_found: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
  article_create: {
    path: RoutePaths.article_create,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  article_edit: {
    path: RoutePaths.article_edit,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  admin_panel: {
    path: RoutePaths.admin_panel,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: ['MANAGER', 'ADMIN'],
  },
  forbidden: {
    path: RoutePaths.forbidden,
    element: <ForbiddenPage />,
    authOnly: true,
  },
};
