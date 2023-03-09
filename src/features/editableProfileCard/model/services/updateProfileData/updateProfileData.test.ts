import { Profile } from 'entities/Profile';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { updateProfileData } from './updateProfileData';

const profileFromServer: Profile = {
  firstName: 'Sergei',
  lastName: 'Solodzhuk',
  username: 'admin',
  city: 'Kaliningrad',
  currency: 'EUR',
  country: 'RUSSIA',
  age: 44,
};

describe('updateProfileData', () => {
  test('update profile successful', async () => {
    const thunk = new TestAsyncThunk(
      updateProfileData,
      {
        profile: {
          data: profileFromServer,
        },
      },
    );
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileFromServer }));
    const result = await thunk.callThunk();
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.api.put).toBeCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileFromServer);
  });

  test('update profile failed with server error', async () => {
    const thunk = new TestAsyncThunk(
      updateProfileData,
      {
        profile: {
          data: profileFromServer,
        },
      },
    );
    const err = new Error('Network Error');
    thunk.api.put.mockRejectedValueOnce(err);
    const result = await thunk.callThunk();
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.api.put).toBeCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual(['SERVER_ERROR']);
  });

  test('update profile failed with validate error', async () => {
    const thunk = new TestAsyncThunk(
      updateProfileData,
      {
        profile: {
          data: { ...profileFromServer, lastName: '' },
        },
      },
    );
    const result = await thunk.callThunk();
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.api.put).not.toBeCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual(['INCORRECT_USER_DATA']);
  });
});
