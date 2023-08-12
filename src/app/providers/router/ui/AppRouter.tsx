import { getUserRoles, useAuth } from 'entities/User';
import { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutePaths } from 'shared/config/routes';
import { RequireAuth, RequireAuthType } from 'shared/lib/RequireAuth/RequireAuth';
import { PageLoader } from 'widgets/Loader';
import { useSelector } from 'react-redux';
import { routeConfig } from '../config/routeConfig';

const AppRequireAuth: RequireAuthType<AppRoutePaths> = RequireAuth;

export const AppRouter = () => {
  const isAuth = useAuth();
  const userRoles = useSelector(getUserRoles);

  const routes = useMemo(() => Object.values(routeConfig).map((route) => {
    const { element, authOnly, roles } = route;

    const hasRequiredRoles = !roles
      ? true
      : roles.some((role) => userRoles?.includes(role));

    const mappedRoute = {
      ...route,
      element: authOnly
        ? (
          <AppRequireAuth
            isAuth={isAuth && hasRequiredRoles}
            redirect={hasRequiredRoles ? '/' : '/forbidden'}
          >
            {element}
          </AppRequireAuth>
        )
        : element,
    };

    return mappedRoute;
  }), [isAuth, userRoles]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
