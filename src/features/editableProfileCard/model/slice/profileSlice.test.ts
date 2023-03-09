import { Profile } from 'entities/Profile';
import { DeepPartial } from 'shared/types/DeepPartial';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/profile';
import { profileReducer, profileActions } from './profileSlice';

const profile: Profile = {
  firstName: 'Sergei',
  lastName: 'Solodzhuk',
  username: 'admin',
  city: 'Kaliningrad',
  currency: 'EUR',
  country: 'RUSSIA',
  age: 44,
};

describe('profileSlice.test', () => {
  test('test setReadOnly', () => {
    const state: DeepPartial<ProfileSchema> = { readOnly: true };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadOnly(false)))
      .toEqual({ readOnly: false });
  });

  test('test cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = { data: {}, dataEdit: profile };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
      .toEqual({
        readOnly: true,
        validateErrors: undefined,
        data: profile,
        dataEdit: profile,
      });
  });

  test('test updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = { data: { firstName: '123' } };
    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ firstName: '123456' })))
      .toEqual({ data: { firstName: '123456' } });
  });

  test('test empty state', () => {
    expect(profileReducer(undefined, profileActions.setReadOnly(false)))
      .toEqual({
        data: undefined,
        dataEdit: undefined,
        error: undefined,
        isLoading: false,
        readOnly: false,
      });
  });

  test('test updateProfileData.pending', () => {
    const state: DeepPartial<ProfileSchema> = { validateErrors: ['INCORRECT_AGE'], isLoading: false };
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
      .toEqual({
        validateErrors: undefined,
        isLoading: true,
      });
  });

  test('test updateProfileData.rejected', () => {
    const state: DeepPartial<ProfileSchema> = { validateErrors: ['INCORRECT_AGE'], isLoading: true };
    expect(profileReducer(state as ProfileSchema, updateProfileData.rejected))
      .toEqual({
        validateErrors: undefined,
        isLoading: false,
      });
  });

  test('test updateProfileData.fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = { validateErrors: ['INCORRECT_AGE'], isLoading: true };
    // const action = {
    //   type: updateProfileData.fulfilled.type,
    //   payload: profile,
    // };
    const newState = profileReducer(state as ProfileSchema, updateProfileData.fulfilled(profile, ''));

    expect(newState)
      .toEqual({
        validateErrors: undefined,
        isLoading: false,
        readOnly: true,
        data: profile,
        dataEdit: profile,
      });
  });
});
