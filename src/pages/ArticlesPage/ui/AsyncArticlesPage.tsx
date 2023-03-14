import { lazy } from 'react';

// export const AsyncAboutPage = lazy(() => import('./AboutPage'));

export const AsyncArticlesPage = lazy(
  () => import(/* webpackChunkName: "about_page" */'./ArticlesPage')
    .then((module) => ({ default: module.ArticlesPage })),
);

// const asyncPageGenerator = (name: string) => {
//   // (factory: () => Promise<{ default: ComponentType<any> }>)

//   const Page = lazy(() => import(`./${name}`)
//     .then((module) => ({ default: module[name] })));
//   return () => <Page />;
// };

// export const AsyncAboutPage1 = asyncPageGenerator('AboutPage');
