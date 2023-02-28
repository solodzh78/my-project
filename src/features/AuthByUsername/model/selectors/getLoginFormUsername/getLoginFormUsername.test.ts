import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginFormUsername } from './getLoginFormUsername';

describe('getLoginFormUsername', () => {
  test('return user value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: 'user', password: '123' },
    };
    expect(getLoginFormUsername(state as StateSchema)).toBe('user');
  });
});
