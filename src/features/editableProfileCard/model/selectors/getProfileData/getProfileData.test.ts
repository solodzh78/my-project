import { DeepPartial } from 'shared/types/DeepPartial';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { Profile } from 'entities/Profile';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  const data: Profile = {
    firstName: 'Sergei',
    lastName: 'Solodzhuk',
    username: 'admin',
    city: 'Kaliningrad',
    currency: 'EUR',
    country: 'RUSSIA',
    age: 44,
  };
  test('return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('return profile data with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
