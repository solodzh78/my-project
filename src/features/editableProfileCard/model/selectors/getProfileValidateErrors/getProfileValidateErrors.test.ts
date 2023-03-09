import { DeepPartial } from 'shared/types/DeepPartial';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
  test('return profile isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: ['INCORRECT_AGE', 'INCORRECT_COUNTRY'],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(['INCORRECT_AGE', 'INCORRECT_COUNTRY']);
  });
  test('return profile isLoading with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
