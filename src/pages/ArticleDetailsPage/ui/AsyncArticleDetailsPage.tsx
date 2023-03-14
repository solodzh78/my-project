import { lazy } from 'react';

// export const AsyncAboutPage = lazy(() => import('./AboutPage'));

export const AsyncArticleDetailsPage = lazy(
  () => import(/* webpackChunkName: "about_page" */'./ArticleDetailsPage')
    .then((module) => ({ default: module.ArticleDetailsPage })),
);

// const asyncPageGenerator = (name: string) => {
//   // (factory: () => Promise<{ default: ComponentType<any> }>)

//   const Page = lazy(() => import(`./${name}`)
//     .then((module) => ({ default: module[name] })));
//   return () => <Page />;
// };

// export const AsyncAboutPage1 = asyncPageGenerator('AboutPage');
