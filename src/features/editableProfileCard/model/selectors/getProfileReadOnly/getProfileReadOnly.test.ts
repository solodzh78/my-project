import { DeepPartial } from 'shared/types/DeepPartial';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly', () => {
  test('return profile isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readOnly: false,
      },
    };
    expect(getProfileReadOnly(state as StateSchema)).toBe(false);
  });
  test('return profile isLoading with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined);
  });
});
