import { Profile } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';

const profile: Profile = {
  firstName: 'Sergei',
  lastName: 'Solodzhuk',
  username: 'admin',
  city: 'Kaliningrad',
  currency: 'EUR',
  country: 'RUSSIA',
  age: 44,
};

describe('validateProfileData', () => {
  test('validate successful', async () => {
    expect(validateProfileData(profile)).toEqual([]);
  });

  test('validate with NO_DATA error', async () => {
    expect(validateProfileData(undefined)).toEqual(['NO_DATA']);
  });

  test('validate with INCORRECT_USER_DATA error', async () => {
    expect(validateProfileData({ ...profile, lastName: '' })).toEqual(['INCORRECT_USER_DATA']);
  });

  test('validate with INCORRECT_AGE error', async () => {
    expect(validateProfileData({ ...profile, age: undefined })).toEqual(['INCORRECT_AGE']);
  });

  test('validate with INCORRECT_COUNTRY error', async () => {
    expect(validateProfileData({ ...profile, country: undefined })).toEqual(['INCORRECT_COUNTRY']);
  });

  test('validate with several errors', async () => {
    expect(validateProfileData({
      ...profile, country: undefined, age: undefined, lastName: '',
    })).toEqual(['INCORRECT_USER_DATA', 'INCORRECT_AGE', 'INCORRECT_COUNTRY']);
  });
});
