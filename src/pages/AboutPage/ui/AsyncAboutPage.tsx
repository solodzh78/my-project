import { lazy } from 'react';

// export const AsyncAboutPage = lazy(() => import('./AboutPage'));

export const AsyncAboutPage = lazy(() => import(/* webpackChunkName: "about_page" */'./AboutPage').then((module) => ({ default: module.AboutPage })));

const asyncPageGenerator = (name: string) => {
  // (factory: () => Promise<{ default: ComponentType<any> }>)

  const Page = lazy(() => import(`./${name}`).then((module) => ({ default: module[name] })));
  return () => <Page />;
};

export const AsyncAboutPage1 = asyncPageGenerator('AboutPage');
