import { lazy } from 'react';

export const AsyncArticleEditPage = lazy(
  () => import(/* webpackChunkName: "article_edit_page" */'./ArticleEditPage')
    .then((module) => ({ default: module.ArticleEditPage })),
);
