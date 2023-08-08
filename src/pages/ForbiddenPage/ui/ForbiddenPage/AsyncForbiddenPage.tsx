import { lazy } from 'react';

// export const AsyncAboutPage = lazy(() => import('./AboutPage'));

export const AsyncForbiddenPage = lazy(
  () => import(/* webpackChunkName: "forbiddenPage_page" */'./ForbiddenPage')
    .then((module) => ({ default: module.ForbiddenPage })),
);

// const asyncPageGenerator = (name: string) => {
//   // (factory: () => Promise<{ default: ComponentType<any> }>)

//   const Page = lazy(() => import(`./${name}`)
//     .then((module) => ({ default: module[name] })));
//   return () => <Page />;
// };

// export const AsyncAboutPage1 = asyncPageGenerator('AboutPage');
