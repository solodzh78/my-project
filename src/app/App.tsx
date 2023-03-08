/* eslint-disable i18next/no-literal-string */
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    if (user) {
      dispatch(userActions.setAuthData(JSON.parse(user)));
    }
  }, [dispatch]);

  return (
    <div className={classNames(['app', theme])}>
      <Suspense fallback={null}>
        <NavBar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
