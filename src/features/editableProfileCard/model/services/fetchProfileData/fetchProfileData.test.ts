import { AxiosError } from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { DeepPartial } from 'shared/types/DeepPartial';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData', () => {
  test('fetch profile successful', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    const profileFromServer = {
      firstName: 'Sergei',
      lastName: 'Solodzhuk',
      username: 'admin',
      city: 'Kaliningrad',
      currency: 'EUR',
      country: 'RUSSIA',
      age: 44,
    };
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileFromServer }));
    const result = await thunk.callThunk();
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.api.get).toBeCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileFromServer);
  });

  test('fetch profile failed with 403 status', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    const err: DeepPartial<AxiosError> = {
      response: {
        status: 403,
        data: {
          message: 'Error with status 403',
        },
      },
      isAxiosError: true,
    };
    thunk.api.get.mockRejectedValueOnce(err);
    const result = await thunk.callThunk();
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.api.get).toBeCalled();
    expect(result.payload).toBe('Error with status 403');
  });

  test('fetch profile failed with Network Error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    const err = new Error('Network Error');
    thunk.api.get.mockRejectedValueOnce(err);
    const result = await thunk.callThunk();
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.api.get).toBeCalled();
    expect(result.payload).toBe('Network Error');
  });

  test('fetch profile failed with Unknown Error', async () => {
    const responseFromServer = {};
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.reject(responseFromServer));
    const result = await thunk.callThunk();
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(thunk.api.get).toBeCalled();
    expect(result.payload).toBe('Неизвестная ошибка');
  });
});
