import { lazy } from 'react';

export const AsyncLoginForm = lazy(
  () => import(/* webpackChunkName: "login_form" */'./LoginForm')
    .then((module) => ({ default: module.LoginForm })),
);
