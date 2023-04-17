import { ValueOf } from 'shared/types/ValueOf';

const Routes = {
  MAIN: 'main',
  ABOUT: 'about',
  PROFILE: 'profile',
  ARTICLES: 'articles',
  ARTICLE_DETAIL: 'article',
  //  last
  NOT_FOUND: 'not_found',
} as const;

export type AppRoutes = ValueOf<typeof Routes>

export const RoutePaths: Record<AppRoutes, string> = {
  [Routes.MAIN]: '/',
  [Routes.ABOUT]: '/about',
  [Routes.PROFILE]: '/profile',
  [Routes.ARTICLES]: '/articles',
  [Routes.ARTICLE_DETAIL]: '/articles/',
  [Routes.NOT_FOUND]: '*',
} as const;

const routePathsWithoutTypes = {
  [Routes.MAIN]: '/',
  [Routes.ABOUT]: '/about',
  [Routes.PROFILE]: '/profile',
  [Routes.ARTICLES]: '/articles',
  [Routes.ARTICLE_DETAIL]: '/articles/',
  [Routes.NOT_FOUND]: '*',
} as const;

export type AppRoutePaths = ValueOf<typeof routePathsWithoutTypes>
