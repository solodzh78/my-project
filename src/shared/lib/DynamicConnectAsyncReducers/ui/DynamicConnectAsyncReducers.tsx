import { Reducer } from '@reduxjs/toolkit';
import {
  OptionalStateSchemaKey, StoreWithReducerManager,
} from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [name in OptionalStateSchemaKey]?: Reducer;
}

type ObjectEntriesReducersList = [ OptionalStateSchemaKey, Reducer ];

interface DynamicConnectAsyncReducersProps {
  asyncReducers: ReducersList;
  stayAfterUnmount?: boolean;
}

export const DynamicConnectAsyncReducers: FC<DynamicConnectAsyncReducersProps> = (props) => {
  const {
    asyncReducers,
    children,
    stayAfterUnmount = false,
  } = props;

  const dispatch = useDispatch();
  const store = useStore() as StoreWithReducerManager;

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    Object.entries(asyncReducers).forEach(([name, reducer]: ObjectEntriesReducersList) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (!stayAfterUnmount) {
        Object.entries(asyncReducers).forEach(([name]: ObjectEntriesReducersList) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { children }
    </>
  );
};
