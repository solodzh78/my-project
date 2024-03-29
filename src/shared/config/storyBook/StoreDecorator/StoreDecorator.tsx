import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/types/DeepPartial';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'features/editableProfileCard';
import { articleReducer } from 'entities/Article';
import { addNewCommentReducer } from 'features/AddNewComment/model/slices/AddNewCommentSlice';
import { articleCommentsReducer } from 'widgets/ArticleComments/model/slice/articleCommentSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer,
  article: articleReducer,
  articleComments: articleCommentsReducer,
  addNewComment: addNewCommentReducer,
};

// eslint-disable-next-line max-len
export const StoreDecorator = (
  initialState: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={initialState as StateSchema}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
);
