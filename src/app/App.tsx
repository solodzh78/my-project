/* eslint-disable i18next/no-literal-string */
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { getUserIsMounted } from 'entities/User/model/selectors/getUserIsMounted/getUserIsMounted';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const isMounted = useSelector(getUserIsMounted);

  useEffect(() => {
    const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    if (user) {
      dispatch(userActions.setAuthData(JSON.parse(user)));
    }
    dispatch(userActions.setIsMounted());
  }, [dispatch]);

  return (
    <div className={classNames(['app', theme])}>
      <Suspense fallback={null}>
        <NavBar />
        <div className="content-page">
          <SideBar />
          {isMounted && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
