/* eslint-disable i18next/no-literal-string */
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Story } from '@storybook/react';
// import 'shared/config/i18n/i18nForTests';
import i18n from '../../i18n/i18n';

export const i18nDecorator = (StoryComponent: Story) => (
  <Suspense fallback={<div>loading translations...</div>}>
    <I18nextProvider i18n={i18n}>
      <StoryComponent />
    </I18nextProvider>
  </Suspense>
);
