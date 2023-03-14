import { useAuth } from 'entities/User';
import { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutePaths } from 'shared/config/routes';
import { RequireAuth, RequireAuthType } from 'shared/lib/RequireAuth/RequireAuth';
import { PageLoader } from 'widgets/Loader';
import { routeConfig } from '../config/routeConfig';

const AppRequireAuth: RequireAuthType<AppRoutePaths> = RequireAuth;

export const AppRouter = () => {
  const isAuth = useAuth();

  const routes = useMemo(() => Object.values(routeConfig).map((route) => {
    const { element, authOnly } = route;
    const wrappedElement = <div className="page-wrapper">{element}</div>;
    const mappedRoute = {
      ...route,
      element: authOnly
        ? <AppRequireAuth isAuth={isAuth} redirect="/">{wrappedElement}</AppRequireAuth>
        : wrappedElement,
    };
    return mappedRoute;
  }), [isAuth]);

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
