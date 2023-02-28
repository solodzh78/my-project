import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './ReducerManager';
import { StateSchema, StoreWithReducerManager } from './StateSchema';

const constReducers = {
  counter: counterReducer,
  user: userReducer,
};

// type ConstReducers = typeof constReducers;

// type AsyncReducers = Omit<StateSchema, keyof ConstReducers>;

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducer = {
    ...asyncReducers,
    ...constReducers,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  }) as StoreWithReducerManager;

  store.reducerManager = reducerManager;

  return store;
}
