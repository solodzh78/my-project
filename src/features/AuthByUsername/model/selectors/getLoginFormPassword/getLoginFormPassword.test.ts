import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginFormPassword } from './getLoginFormPassword';

describe('getLoginFormPassword', () => {
  test('return user value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: 'user', password: '123' },
    };
    expect(getLoginFormPassword(state as StateSchema)).toBe('123');
  });
  test('return user value with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginFormPassword(state as StateSchema)).toBe('');
  });
});
