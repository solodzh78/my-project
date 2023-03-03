import { ValueOf } from 'shared/types/ValueOf';

const Routes = {
  MAIN: 'main',
  ABOUT: 'about',
  PROFILE: 'profile',
  //  last
  NOT_FOUND: 'not_found',
} as const;

export type AppRoutes = ValueOf<typeof Routes>

export const RoutePaths: Record<AppRoutes, string> = {
  [Routes.MAIN]: '/',
  [Routes.ABOUT]: '/about',
  [Routes.PROFILE]: '/profile',
  [Routes.NOT_FOUND]: '*',
};
