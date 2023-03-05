import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from 'shared/types/DeepPartial';
import { getLoginFormUsername } from './getLoginFormUsername';

describe('getLoginFormUsername', () => {
  test('return user value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: 'user', password: '123' },
    };
    expect(getLoginFormUsername(state as StateSchema)).toBe('user');
  });
  test('return user value from empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginFormUsername(state as StateSchema)).toBe('');
  });
});
