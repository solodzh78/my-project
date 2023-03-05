import { Story } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator = (StoryComponent: Story) => (
  // eslint-disable-next-line react/no-unstable-nested-components, i18next/no-literal-string
  <Suspense fallback={null}>
    <StoryComponent />
  </Suspense>
);
