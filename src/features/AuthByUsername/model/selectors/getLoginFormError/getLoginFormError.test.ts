import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginFormError } from './getLoginFormError';

describe('getLoginFormError', () => {
  test('return no Error value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: 'user', password: '123' },
    };
    expect(getLoginFormError(state as StateSchema)).toBe(undefined);
  });
  test('return Error value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: 'user', password: '123', error: 'Error message' },
    };
    expect(getLoginFormError(state as StateSchema)).toBe('Error message');
  });
  test('return no Error wit empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginFormError(state as StateSchema)).toBe(undefined);
  });
});
