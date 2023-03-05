import { DeepPartial } from 'shared/types/DeepPartial';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData', () => {
  test('return user value', () => {
    const state: DeepPartial<StateSchema> = {
      user: { authData: { id: '1', username: 'user' } },
    };
    expect(getUserAuthData(state as StateSchema)).toEqual({ id: '1', username: 'user' });
  });
});
