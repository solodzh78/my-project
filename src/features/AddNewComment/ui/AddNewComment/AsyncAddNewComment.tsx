import { lazy } from 'react';

export const AsyncAddNewComment = lazy(
  () => import(/* webpackChunkName: "AddNewComment" */'./AddNewComment')
    .then((module) => ({ default: module.AddNewComment })),
);
