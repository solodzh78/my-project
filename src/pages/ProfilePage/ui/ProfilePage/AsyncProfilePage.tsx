import { lazy } from 'react';

export const AsyncProfilePage = lazy(
  () => import(/* webpackChunkName: "profile_page" */'./ProfilePage')
    .then((module) => ({ default: module.ProfilePage })),
);
