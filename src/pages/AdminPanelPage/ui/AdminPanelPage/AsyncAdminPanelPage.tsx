import { lazy } from 'react';

// export const AsyncMainPage = lazy(() => import(
//   /* webpackChunkName: "main_page" */'./MainPage'
// ));

export const AsyncAdminPanelPage = lazy(
  () => import(/* webpackChunkName: "adminPanel_page" */'./AdminPanelPage')
    .then((module) => ({ default: module.AdminPanelPage })),
);
