import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from 'shared/types/DeepPartial';
import { getLoginFormIsLoading } from './getLoginFormIsLoading';

describe('getLoginFormIsLoading', () => {
  test('return isLoading value false', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: 'user', password: '123' },
    };
    expect(getLoginFormIsLoading(state as StateSchema)).toBe(false);
  });
  test('return isLoading value with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginFormIsLoading(state as StateSchema)).toBe(false);
  });
  test('return isLoading value true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: 'user', password: '123', isLoading: true },
    };
    expect(getLoginFormIsLoading(state as StateSchema)).toBe(true);
  });
});
