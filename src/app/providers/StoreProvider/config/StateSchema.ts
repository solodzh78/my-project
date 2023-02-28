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

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Async reducers
  loginForm?: LoginSchema;
}

type RequiredFieldsOnly<T> =
  Pick<T, { [K in keyof T]-?: {} extends Pick<T, K> ? never : K }[keyof T]>;
type OptionalFieldsOnly<T> =
Pick<T, { [K in keyof T]-?: {} extends Pick<T, K> ? K : never }[keyof T]>;

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
