import {
  CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import { saveScrollReducer } from 'features/SaveScroll';
import { createReducerManager } from './ReducerManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';

const constReducers = {
  counter: counterReducer,
  user: userReducer,
  saveScroll: saveScrollReducer,
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

  const extraArg: ThunkExtraArg = {
    api: $api,
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
