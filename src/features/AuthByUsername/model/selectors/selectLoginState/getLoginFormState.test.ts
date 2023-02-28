import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginFormState } from './getLoginFormState';

describe('getLoginFormState', () => {
  test('return user value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: 'user', password: '123' },
    };
    expect(getLoginFormState(state as StateSchema)).toEqual({ username: 'user', password: '123' });
  });
});
