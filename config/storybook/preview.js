import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storyBook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storyBook/RouterDecorator/RouterDecorator';
// import { i18nDecorator } from '../../src/shared/config/storyBook/i18nDecorator/i18nDecorator';
import i18n from './i18next.js';
// import 'shared/config/i18n/i18nForStorybook';

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
// addDecorator(i18nDecorator);
