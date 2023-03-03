import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storyBook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storyBook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator }
  from '../../src/shared/config/storyBook/SuspenseDecorator/SuspenseDecorator';
// import { i18nDecorator } from '../../src/shared/config/storyBook/i18nDecorator/i18nDecorator';
// import '../../src/shared/config/storyBook/i18n/i18n';

import i18n from './i18next.js';

export const parameters = {
  i18n,
  locale: 'ru',
  locales: {
    en: 'English',
    ru: 'Русский',
  },
};

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator('light'));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
// addDecorator(StoreDecorator);
// addDecorator(i18nDecorator);
