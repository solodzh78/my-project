import { ArticlesPageSchema } from 'pages/ArticlesPage';
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';
import { CounterSchema } from 'entities/Counter';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'features/editableProfileCard';
import { ArticleCommentsSchema } from 'features/ArticleCommentsList';
import { RequiredFieldsOnly, OptionalFieldsOnly } from 'shared/types/RequiredFieldsOnly';
import { AxiosInstance } from 'axios';
import { ArticleSchema } from 'entities/Article';
import { AddNewCommentSchema } from 'features/AddNewComment';
import { SaveScrollSchema } from 'features/SaveScroll';
import { ArticleRecommendationSchema } from 'features/ArticleRecommendations';
import { rtkApi } from 'shared/api/rtkApi';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  saveScroll: SaveScrollSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Async reducers
  profile?: ProfileSchema;
  loginForm?: LoginSchema;
  article?: ArticleSchema;
  articleComments?: ArticleCommentsSchema;
  addNewComment?: AddNewCommentSchema;
  articlesPage?: ArticlesPageSchema;
  articleRecommendations?: ArticleRecommendationSchema;
}

export type RequiredStateSchema = RequiredFieldsOnly<StateSchema>
export type OptionalStateSchema = OptionalFieldsOnly<StateSchema>

export type StateSchemaKey = keyof StateSchema;
export type OptionalStateSchemaKey = keyof OptionalStateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: OptionalStateSchemaKey, reducer: Reducer) => void;
  remove: (key: OptionalStateSchemaKey) => void;
}

export interface StoreWithReducerManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T = string> {
  rejectValue: T,
  state: StateSchema;
  extra: ThunkExtraArg;
}
