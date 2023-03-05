import {
  CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { NavigateFunction } from 'react-router-dom';
import { $api } from 'shared/api/api';
import { createReducerManager } from './ReducerManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';

const constReducers = {
  counter: counterReducer,
  user: userReducer,
};

// type ConstReducers = typeof constReducers;

// type AsyncReducers = Omit<StateSchema, keyof ConstReducers>;

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: NavigateFunction,
) {
  const rootReducer = {
    ...asyncReducers,
    ...constReducers,
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }),
  });
  //  @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
