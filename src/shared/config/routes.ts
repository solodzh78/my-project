import { ValueOf } from 'shared/types/ValueOf';

const Routes = {
  MAIN: 'main',
  ABOUT: 'about',
  NOT_FOUND: 'not_found',
} as const;

export type AppRoutes = ValueOf<typeof Routes>

export const RoutePaths: Record<AppRoutes, string> = {
  [Routes.MAIN]: '/',
  [Routes.ABOUT]: '/about',
  [Routes.NOT_FOUND]: '*',
};
