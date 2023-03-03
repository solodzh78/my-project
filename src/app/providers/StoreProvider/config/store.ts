import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './ReducerManager';
import { StateSchema } from './StateSchema';

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
  });
  //  @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
