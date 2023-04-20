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
import { NavigateFunction } from 'react-router-dom';
import { ArticleSchema } from 'entities/Article';
import { AddNewCommentSchema } from 'features/AddNewComment';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Async reducers
  profile?: ProfileSchema;
  loginForm?: LoginSchema;
  article?: ArticleSchema;
  articleComments?: ArticleCommentsSchema;
  addNewComment?: AddNewCommentSchema;
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
  reducerManager?: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: NavigateFunction;
}

export interface ThunkConfig<T = string> {
  rejectValue: T,
  state: StateSchema;
  extra: ThunkExtraArg;
}
