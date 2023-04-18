import { Story, StoryContext } from '@storybook/react';
import 'app/styles/index.scss';
import {
  BrowserRouter, MemoryRouter, Route, Routes,
} from 'react-router-dom';

export const RouterDecorator = (
  StoryComponent: Story,
  { parameters: { router } }: StoryContext,
) => (
  router
    ? (
      <MemoryRouter initialEntries={[encodeURI(router.route)]}>
        <Routes>
          <Route path={router.path} element={<StoryComponent />} />
        </Routes>
      </MemoryRouter>
    )
    : (
      <BrowserRouter>
        <StoryComponent />
      </BrowserRouter>
    ));
