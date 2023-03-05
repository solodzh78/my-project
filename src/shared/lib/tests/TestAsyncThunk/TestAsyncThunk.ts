import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';
import { NavigateFunction } from 'react-router-dom';

type ActionCreatorType<Return, Arg, RejectedValue> =
  (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>;

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

const isObject = (thing: any) => thing !== null && typeof thing === 'object';
const isAxiosError = (payload: any) => isObject(payload) && (payload.isAxiosError === true);
// @ts-ignore
mockedAxios.isAxiosError = isAxiosError;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: Dispatch;

  getState: () => StateSchema;

  ActionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  navigate: NavigateFunction;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.ActionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.ActionCreator(arg);
    const result = await action(
      this.dispatch,
      this.getState,
      {
        api: this.api,
        navigate: this.navigate,
      },
    );
    return result;
  }
}
