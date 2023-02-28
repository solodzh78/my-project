import { lazy } from 'react';

// export const AsyncMainPage = lazy(() => import(
//   /* webpackChunkName: "main_page" */'./MainPage'
// ));

export const AsyncMainPage = lazy(
  () => import(/* webpackChunkName: "main_page" */'./MainPage')
    .then((module) => ({ default: module.MainPage })),
);
