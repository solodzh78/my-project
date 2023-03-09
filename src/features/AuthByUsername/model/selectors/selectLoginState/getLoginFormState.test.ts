import { DeepPartial } from 'shared/types/DeepPartial';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginFormState } from './getLoginFormState';

describe('getLoginFormState', () => {
  test('return loginForm', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: 'user', password: '123' },
    };
    expect(getLoginFormState(state as StateSchema)).toEqual({ username: 'user', password: '123' });
  });
  test('return loginForm with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginFormState(state as StateSchema)).toEqual(undefined);
  });
});
